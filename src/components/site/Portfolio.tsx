import { useState } from "react";
import { ExternalLink, Play } from "lucide-react";
import { channels, workThumbnails, type PortfolioVideo } from "@/config/site";
import { Reveal } from "./Reveal";
import { cn } from "@/lib/utils";

function PlayableVideo({ video }: { video: PortfolioVideo }) {
  const [playing, setPlaying] = useState(false);

  return (
    <div className="overflow-hidden rounded-2xl border border-border bg-ink shadow-[var(--shadow-soft)]">
      <div className="relative aspect-video bg-ink">
        {playing ? (
          <iframe
            src={video.embedUrl}
            title={video.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="absolute inset-0 h-full w-full"
          />
        ) : (
          <button
            type="button"
            onClick={() => setPlaying(true)}
            className="group relative block h-full w-full cursor-pointer text-left"
            aria-label={`Play ${video.title}`}
          >
            <img
              src={video.thumbnailUrl}
              alt=""
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
            />
            <span className="absolute inset-0 bg-ink/25 transition-colors group-hover:bg-ink/35" />
            <span className="absolute inset-0 grid place-items-center">
              <span className="grid h-14 w-14 place-items-center rounded-full bg-accent text-accent-foreground shadow-[0_12px_40px_-10px_var(--accent)] transition-transform duration-300 group-hover:scale-110">
                <Play className="ml-0.5 h-5 w-5 fill-current" aria-hidden />
              </span>
            </span>
          </button>
        )}
      </div>
      <div className="flex items-start justify-between gap-3 px-4 py-3">
        <p className="line-clamp-2 text-sm font-medium leading-snug">{video.title}</p>
        <a
          href={video.watchUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-0.5 shrink-0 text-muted-foreground transition-colors hover:text-accent"
          aria-label="Open on YouTube"
        >
          <ExternalLink className="h-3.5 w-3.5" />
        </a>
      </div>
    </div>
  );
}

export function Portfolio() {
  return (
    <section id="portfolio" className="border-t border-border py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal className="max-w-3xl">
          <p className="eyebrow">Portfolio</p>
          <h2 className="mt-4 text-3xl font-semibold leading-tight md:text-5xl">
            Channels We've Helped Grow
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground md:text-lg">
            Real YouTube channels across real estate, finance, and business — click any thumbnail to
            watch the video.
          </p>
        </Reveal>

        <div className="mt-14 space-y-16">
          {channels.map((channel, i) => (
            <Reveal key={channel.name} delay={(i % 2) * 60}>
              <article>
                <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
                  <div className="flex min-w-0 items-center gap-4">
                    <img
                      src={channel.avatarUrl}
                      alt={`${channel.name} channel avatar`}
                      className="h-14 w-14 shrink-0 rounded-full object-cover ring-2 ring-accent/20"
                    />
                    <div className="min-w-0">
                      <div className="flex flex-wrap items-center gap-2">
                        <h3 className="truncate text-xl font-semibold md:text-2xl">{channel.name}</h3>
                        <span className="rounded-full bg-secondary px-2.5 py-1 text-[10px] font-medium uppercase tracking-wider text-muted-foreground">
                          {channel.niche}
                        </span>
                      </div>
                      <p className="mt-1 text-sm text-muted-foreground">with {channel.client}</p>
                    </div>
                  </div>
                  <a
                    href={channel.channelUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex shrink-0 items-center gap-2 text-sm font-medium text-accent transition-colors hover:text-accent/80"
                  >
                    View channel
                    <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                </div>

                <ul className="mt-4 flex flex-wrap gap-2">
                  {channel.services.map((service) => (
                    <li
                      key={service}
                      className="rounded-full border border-border bg-card px-3 py-1 text-xs text-muted-foreground"
                    >
                      {service}
                    </li>
                  ))}
                </ul>

                <div className="mt-6 grid gap-5 md:grid-cols-2">
                  {channel.videos.map((video) => (
                    <PlayableVideo key={video.id} video={video} />
                  ))}
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-20 max-w-3xl">
          <p className="eyebrow">Thumbnail design</p>
          <h3 className="mt-4 text-2xl font-semibold leading-tight md:text-4xl">
            Thumbnails Designed to Earn the Click
          </h3>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            Custom thumbnail work created for client channels.
          </p>
        </Reveal>

        <ul className="mt-10 grid gap-5 sm:grid-cols-2">
          {workThumbnails.map((item, i) => (
            <Reveal as="li" key={item.title} delay={(i % 2) * 80}>
              <figure
                className={cn(
                  "group overflow-hidden rounded-3xl border border-border bg-card shadow-[var(--shadow-soft)]",
                  "transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-lift)]",
                )}
              >
                <div className="aspect-video overflow-hidden bg-secondary">
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                </div>
                <figcaption className="flex items-center justify-between gap-3 px-5 py-4">
                  <span className="text-sm font-medium">{item.title}</span>
                  <span className="shrink-0 rounded-full bg-accent-soft px-2.5 py-1 text-[10px] font-medium uppercase tracking-wider text-accent">
                    {item.tag}
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
