import { BookButton } from "./BookButton";
import { Reveal } from "./Reveal";

const services = [
  {
    title: "Video Editing",
    body: "Professional editing designed around storytelling, pacing, audience retention, and your brand identity.",
  },
  {
    title: "Thumbnail Design",
    body: "Strategic thumbnails designed to communicate the video's value and increase click-through potential.",
  },
  {
    title: "YouTube SEO",
    body: "Keyword research, titles, descriptions, metadata, search intent, and optimization designed to improve organic discoverability.",
  },
];

export function Services() {
  return (
    <section id="services" className="border-t border-border py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal className="max-w-3xl">
          <p className="eyebrow">Services</p>
          <h2 className="mt-4 text-3xl font-semibold leading-tight md:text-5xl">
            Everything You Need to Grow on YouTube
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 80}>
              <article className="card-surface flex h-full flex-col p-7 md:p-9">
                <h3 className="text-xl font-semibold md:text-2xl">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground md:text-base">
                  {s.body}
                </p>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={120} className="mt-5">
          <article className="relative overflow-hidden rounded-3xl bg-ink p-8 text-ink-foreground md:p-12">
            <div
              aria-hidden
              className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-accent/25 blur-3xl"
            />
            <div className="relative grid gap-8 md:grid-cols-[minmax(0,1fr)_auto] md:items-end">
              <div className="min-w-0">
                <span className="inline-flex rounded-full bg-accent px-3 py-1 font-display text-xs font-medium uppercase tracking-[0.16em] text-accent-foreground">
                  Flagship
                </span>
                <h3 className="mt-5 text-2xl font-semibold md:text-4xl">
                  360° YouTube Management
                </h3>
                <p className="mt-4 max-w-2xl text-sm leading-relaxed text-ink-foreground/65 md:text-base">
                  A complete end-to-end solution covering strategy, content creation, editing,
                  thumbnails, SEO, optimization, analytics, and channel management.
                </p>
                <ul className="mt-7 flex flex-wrap gap-2 text-xs text-ink-foreground/80">
                  {[
                    "Strategy",
                    "Editing",
                    "Thumbnails",
                    "SEO",
                    "Optimization",
                    "Analytics",
                    "Channel management",
                  ].map((t) => (
                    <li
                      key={t}
                      className="rounded-full border border-ink-foreground/15 px-3 py-1.5"
                    >
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
              <BookButton size="lg" />
            </div>
          </article>
        </Reveal>
      </div>
    </section>
  );
}