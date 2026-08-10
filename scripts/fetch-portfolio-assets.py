"""Fetch YouTube thumbnails + channel avatars, and crop composite PNGs."""
from __future__ import annotations

import json
import re
import subprocess
import urllib.request
from pathlib import Path

from PIL import Image

ROOT = Path(__file__).resolve().parents[1]
ASSETS = ROOT / "src" / "assets"
PORTFOLIO = ASSETS / "portfolio"
PROOF = ASSETS / "proof"
AVATARS = ASSETS / "avatars"

for d in (PORTFOLIO, PROOF, AVATARS):
    d.mkdir(parents=True, exist_ok=True)

CHANNELS = [
    {
        "slug": "moving-to-las-vegas",
        "handle": "@movingtolasvegasnevada",
        "name": "Moving to Las Vegas",
        "client": "Mark Pepe",
        "niche": "Real Estate & Relocation",
        "services": ["Strategy", "Editing", "Thumbnails", "SEO"],
        "for_testimonial": True,
    },
    {
        "slug": "w-group-real-estate",
        "handle": "@yourtriadncrealtor",
        "name": "The W Group Real Estate",
        "client": "Micaela Wall",
        "niche": "Luxury Real Estate",
        "services": ["Thumbnails", "Editing", "Channel branding"],
        "for_testimonial": False,
    },
    {
        "slug": "investor-accelerator",
        "handle": "@theinvestoraccelerator",
        "name": "The Investor Accelerator",
        "client": "Jason Pizzino",
        "niche": "Finance & Investing",
        "services": ["Editing", "Thumbnails", "Content packaging"],
        "for_testimonial": False,
    },
    {
        "slug": "risk-takers",
        "handle": "@officialrisktakers",
        "name": "Risk Takers",
        "client": "Risk Takers Team",
        "niche": "Business & Entrepreneurship",
        "services": ["Editing", "Thumbnails", "YouTube SEO"],
        "for_testimonial": False,
    },
]


def run_ytdlp(args: list[str]) -> str:
    cmd = ["yt-dlp", *args]
    result = subprocess.run(cmd, capture_output=True, text=True, check=False)
    if result.returncode != 0:
        raise RuntimeError(f"yt-dlp failed: {result.stderr or result.stdout}")
    return result.stdout


def download(url: str, dest: Path) -> None:
    req = urllib.request.Request(
        url,
        headers={"User-Agent": "Mozilla/5.0 (compatible; FrameRiseBot/1.0)"},
    )
    with urllib.request.urlopen(req, timeout=60) as resp, dest.open("wb") as f:
        f.write(resp.read())
    print(f"  saved {dest.relative_to(ROOT)}")


def fetch_channel_avatar(handle: str, dest: Path) -> str | None:
    """Scrape channel page for avatar image URL and download it."""
    url = f"https://www.youtube.com/{handle}"
    req = urllib.request.Request(
        url,
        headers={
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36",
            "Accept-Language": "en-US,en;q=0.9",
        },
    )
    html = urllib.request.urlopen(req, timeout=60).read().decode("utf-8", errors="ignore")

    # Prefer meta og:image for channel avatar
    m = re.search(r'<meta\s+property="og:image"\s+content="([^"]+)"', html)
    avatar_url = m.group(1) if m else None

    if not avatar_url:
        # Fallback: largest avatar from ytInitialData
        m2 = re.search(r'"avatar":\{"thumbnails":\[([^\]]+)\]', html)
        if m2:
            urls = re.findall(r'"url":"(https:[^"]+)"', m2.group(1))
            if urls:
                avatar_url = urls[-1].encode("utf-8").decode("unicode_escape")

    if not avatar_url:
        print(f"  WARN: no avatar for {handle}")
        return None

    # Prefer higher-res by bumping s= params if present
    avatar_url = re.sub(r"=s\d+", "=s400", avatar_url)
    download(avatar_url, dest)
    return avatar_url


def fetch_videos(handle: str, count: int = 2) -> list[dict]:
    out = run_ytdlp(
        [
            "--print",
            "%(id)s|||%(title)s|||%(channel_id)s|||%(thumbnail)s",
            "--playlist-end",
            str(count),
            f"https://www.youtube.com/{handle}/videos",
        ]
    )
    videos = []
    for line in out.strip().splitlines():
        if "|||" not in line:
            continue
        vid, title, channel_id, thumb = line.split("|||", 3)
        videos.append(
            {
                "id": vid.strip(),
                "title": title.strip(),
                "channelId": channel_id.strip(),
                "thumbnailUrl": thumb.strip(),
            }
        )
    return videos


def crop_composites() -> dict[str, Path]:
    """Split composite PNGs into individual assets."""
    results: dict[str, Path] = {}

    # 1.png — two thumbnails stacked vertically on black
    img1 = Image.open(ASSETS / "1.png").convert("RGB")
    w, h = img1.size
    # Approximate crops based on composition (stacked thumbs with black padding)
    # Top thumb roughly upper half content area; bottom thumb lower half
    top = img1.crop((int(w * 0.08), int(h * 0.03), int(w * 0.92), int(h * 0.48)))
    bottom = img1.crop((int(w * 0.08), int(h * 0.52), int(w * 0.92), int(h * 0.97)))
    p_top = PORTFOLIO / "work-vegas-vs-florida.jpg"
    p_bot = PORTFOLIO / "work-crash-time.jpg"
    top.save(p_top, quality=92)
    bottom.save(p_bot, quality=92)
    results["vegas_vs_florida"] = p_top
    results["crash_time"] = p_bot
    print(f"  cropped {p_top.name}, {p_bot.name}")

    # 4.png — two thumbnails stacked
    img4 = Image.open(ASSETS / "4.png").convert("RGB")
    w4, h4 = img4.size
    top4 = img4.crop((int(w4 * 0.06), int(h4 * 0.03), int(w4 * 0.94), int(h4 * 0.48)))
    bot4 = img4.crop((int(w4 * 0.06), int(h4 * 0.52), int(w4 * 0.94), int(h4 * 0.97)))
    p_realtor = PORTFOLIO / "work-6-figure-realtor.jpg"
    p_moving = PORTFOLIO / "work-moving-tips.jpg"
    top4.save(p_realtor, quality=92)
    bot4.save(p_moving, quality=92)
    results["six_figure_realtor"] = p_realtor
    results["moving_tips"] = p_moving
    print(f"  cropped {p_realtor.name}, {p_moving.name}")

    # 2.png — left email feedback, right PayPal
    img2 = Image.open(ASSETS / "2.png").convert("RGB")
    w2, h2 = img2.size
    left2 = img2.crop((int(w2 * 0.02), int(h2 * 0.08), int(w2 * 0.48), int(h2 * 0.92)))
    right2 = img2.crop((int(w2 * 0.52), int(h2 * 0.08), int(w2 * 0.98), int(h2 * 0.92)))
    p_email = PROOF / "skyler-email.jpg"
    p_paypal_skyler = PROOF / "skyler-paypal.jpg"
    left2.save(p_email, quality=90)
    right2.save(p_paypal_skyler, quality=90)
    results["skyler_email"] = p_email
    results["skyler_paypal"] = p_paypal_skyler
    print(f"  cropped {p_email.name}, {p_paypal_skyler.name}")

    # 3.png — top-left PayPal Mark, bottom-right Wise
    img3 = Image.open(ASSETS / "3.png").convert("RGB")
    w3, h3 = img3.size
    mark = img3.crop((int(w3 * 0.02), int(h3 * 0.03), int(w3 * 0.55), int(h3 * 0.52)))
    wise = img3.crop((int(w3 * 0.35), int(h3 * 0.42), int(w3 * 0.98), int(h3 * 0.98)))
    p_mark = PROOF / "mark-pepe-paypal.jpg"
    p_wise = PROOF / "joseph-wise.jpg"
    mark.save(p_mark, quality=90)
    wise.save(p_wise, quality=90)
    results["mark_paypal"] = p_mark
    results["joseph_wise"] = p_wise
    print(f"  cropped {p_mark.name}, {p_wise.name}")

    return results


def main() -> None:
    manifest: dict = {"channels": [], "workThumbnails": [], "proof": []}

    print("Cropping composites...")
    crops = crop_composites()
    manifest["workThumbnails"] = [
        {"file": crops["vegas_vs_florida"].name, "title": "Las Vegas vs Florida", "tag": "Moving to Las Vegas"},
        {"file": crops["crash_time"].name, "title": "Crash Time?", "tag": "The Investor Accelerator"},
        {"file": crops["six_figure_realtor"].name, "title": "6 Figure Realtor", "tag": "The W Group Real Estate"},
        {"file": crops["moving_tips"].name, "title": "Tips for Moving Out of State", "tag": "Moving to Las Vegas"},
    ]
    manifest["proof"] = [
        {
            "file": crops["skyler_email"].name,
            "label": "Client feedback — Skyler Christian",
            "caption": "Email confirming strategy insight and editing/thumbnail partnership",
        },
        {
            "file": crops["skyler_paypal"].name,
            "label": "Payment — Skyler Christian",
            "caption": "PayPal invoice payment of $200 USD",
        },
        {
            "file": crops["mark_paypal"].name,
            "label": "Payment — Mark Pepe",
            "caption": "PayPal invoice payment of $735 USD",
        },
        {
            "file": crops["joseph_wise"].name,
            "label": "Payment — Joseph Paul Manausa",
            "caption": "Wise transfer of $1,000 USD",
        },
    ]

    print("\nFetching YouTube channels...")
    for ch in CHANNELS:
        print(f"\n== {ch['name']} ({ch['handle']}) ==")
        avatar_path = AVATARS / f"{ch['slug']}.jpg"
        fetch_channel_avatar(ch["handle"], avatar_path)

        videos = fetch_videos(ch["handle"], 2)
        video_entries = []
        for i, v in enumerate(videos, start=1):
            thumb_path = PORTFOLIO / f"{ch['slug']}-{i}.jpg"
            # Prefer maxres
            thumb_url = f"https://i.ytimg.com/vi/{v['id']}/maxresdefault.jpg"
            try:
                download(thumb_url, thumb_path)
            except Exception:
                download(f"https://i.ytimg.com/vi/{v['id']}/hqdefault.jpg", thumb_path)
            video_entries.append(
                {
                    "id": v["id"],
                    "title": v["title"],
                    "thumbnailFile": thumb_path.name,
                    "watchUrl": f"https://www.youtube.com/watch?v={v['id']}",
                    "embedUrl": f"https://www.youtube.com/embed/{v['id']}",
                }
            )
            print(f"  video: {v['id']} — {v['title'][:60]}")

        manifest["channels"].append(
            {
                **{k: ch[k] for k in ("slug", "handle", "name", "client", "niche", "services", "for_testimonial")},
                "channelUrl": f"https://www.youtube.com/{ch['handle']}",
                "avatarFile": avatar_path.name if avatar_path.exists() else None,
                "videos": video_entries,
            }
        )

    out_path = ROOT / "scripts" / "portfolio-manifest.json"
    out_path.write_text(json.dumps(manifest, indent=2), encoding="utf-8")
    print(f"\nWrote {out_path}")


if __name__ == "__main__":
    main()
