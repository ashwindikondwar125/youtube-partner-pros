import { thumbnails } from "@/config/site";
import { Reveal } from "./Reveal";

export function Portfolio() {
  return (
    <section id="portfolio" className="border-t border-border py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal className="max-w-3xl">
          <p className="eyebrow">Portfolio</p>
          <h2 className="mt-4 text-3xl font-semibold leading-tight md:text-5xl">
            Thumbnails Designed to Earn the Click
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground md:text-lg">
            A great video deserves a thumbnail that makes people stop scrolling.
          </p>
        </Reveal>

        <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {thumbnails.map((t, i) => (
            <Reveal as="li" key={t.label} delay={(i % 4) * 70}>
              <figure className="group overflow-hidden rounded-2xl border border-border bg-card shadow-[var(--shadow-soft)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-lift)]">
                <div className="relative aspect-video overflow-hidden bg-secondary">
                  {t.imageUrl ? (
                    <img
                      src={t.imageUrl}
                      alt={t.label}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <div className="grid h-full w-full place-items-center text-center transition-transform duration-500 group-hover:scale-[1.03]">
                      <span className="px-4 text-xs uppercase tracking-[0.18em] text-muted-foreground">
                        {t.label}
                      </span>
                    </div>
                  )}
                </div>
                <figcaption className="flex items-center justify-between gap-3 px-4 py-3">
                  <span className="truncate text-sm font-medium">{t.label}</span>
                  <span className="shrink-0 rounded-full bg-secondary px-2.5 py-1 text-[11px] uppercase tracking-wider text-muted-foreground">
                    {t.tag}
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