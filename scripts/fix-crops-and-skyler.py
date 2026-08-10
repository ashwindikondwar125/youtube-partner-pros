from pathlib import Path
import re
import urllib.request

from PIL import Image

ASSETS = Path("src/assets")
PORTFOLIO = ASSETS / "portfolio"
AVATARS = ASSETS / "avatars"

img1 = Image.open(ASSETS / "1.png").convert("RGB")
w, h = img1.size
bottom = img1.crop((int(w * 0.02), int(h * 0.50), int(w * 0.72), int(h * 0.98)))
bottom.save(PORTFOLIO / "work-crash-time.jpg", quality=92)
print("fixed crash-time", bottom.size)

img4 = Image.open(ASSETS / "4.png").convert("RGB")
w4, h4 = img4.size
top4 = img4.crop((int(w4 * 0.02), int(h4 * 0.02), int(w4 * 0.72), int(h4 * 0.48)))
bot4 = img4.crop((int(w4 * 0.02), int(h4 * 0.50), int(w4 * 0.72), int(h4 * 0.98)))
top4.save(PORTFOLIO / "work-6-figure-realtor.jpg", quality=92)
bot4.save(PORTFOLIO / "work-moving-tips.jpg", quality=92)
print("fixed realtor/moving", top4.size, bot4.size)

# also trim vegas top similarly
top = img1.crop((int(w * 0.02), int(h * 0.02), int(w * 0.72), int(h * 0.48)))
top.save(PORTFOLIO / "work-vegas-vs-florida.jpg", quality=92)
print("fixed vegas", top.size)

url = "https://www.youtube.com/@TheRealTraderTrainer"
req = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0"})
html = urllib.request.urlopen(req, timeout=60).read().decode("utf-8", errors="ignore")
m = re.search(r'property="og:image"\s+content="([^"]+)"', html)
avatar = m.group(1) if m else None
if avatar:
    avatar = re.sub(r"=s\d+", "=s400", avatar)
    dest = AVATARS / "skyler-christian.jpg"
    urllib.request.urlretrieve(avatar, dest)
    print("saved skyler avatar", dest)
else:
    print("NO AVATAR")
