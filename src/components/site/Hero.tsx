import workRealtor from "@/assets/portfolio/work-6-figure-realtor.jpg";
import workVegasFlorida from "@/assets/portfolio/work-vegas-vs-florida.jpg";
import { BookButton } from "./BookButton";
import { Reveal } from "./Reveal";

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-32 pb-20 md:pt-44 md:pb-28">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 right-0 h-[520px] w-[620px] rounded-full bg-accent-soft blur-3xl opacity-70"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute top-20 left-0 h-[320px] w-[420px] rounded-full bg-accent/10 blur-3xl"
      />
      <div className="relative mx-auto max-w-7xl px-5 md:px-8">
        <Reveal className="max-w-4xl">
          <p className="eyebrow">YouTube Growth Partner</p>
          <h1 className="mt-5 text-4xl font-semibold leading-[1.05] sm:text-5xl md:text-6xl lg:text-7xl">
            We Help YouTube Channels Grow —{" "}
            <span className="text-muted-foreground">While You Focus on Creating.</span>
          </h1>
          <p className="mt-7 max-w-2xl border-l-2 border-accent pl-4 text-base leading-relaxed text-foreground md:text-lg">
            Take your brand identity to the next level with a YouTube presence built to stand out,
            build authority, and grow organically.
          </p>
        </Reveal>

        <Reveal delay={120} className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
          <BookButton size="lg" />
          <a
            href="#portfolio"
            className="group inline-flex items-center justify-center gap-2 rounded-full border border-border px-8 py-4 text-base font-medium transition-all duration-300 hover:border-accent/40 hover:bg-accent-soft/50"
          >
            See Our Work
            <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </a>
        </Reveal>

        <Reveal delay={200} className="mt-16 md:mt-20">
          <div className="grid gap-4 md:grid-cols-2">
            <div className="aspect-video overflow-hidden rounded-3xl border border-border bg-card shadow-[var(--shadow-lift)]">
              <img
                src={workVegasFlorida}
                alt="Thumbnail design for Moving to Las Vegas"
                loading="eager"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="aspect-video overflow-hidden rounded-3xl border border-border bg-card shadow-[var(--shadow-lift)]">
              <img
                src={workRealtor}
                alt="Thumbnail design for The W Group Real Estate"
                loading="eager"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </Reveal>

        <Reveal delay={260}>
          <ul className="mt-12 grid grid-cols-2 gap-y-6 border-t border-border pt-8 md:grid-cols-4">
            {[
              ["4+", "Channels managed"],
              ["Strategy", "Built per channel"],
              ["Editing", "Retention-focused"],
              ["Thumbnails", "Designed to earn clicks"],
            ].map(([title, sub]) => (
              <li key={title} className="min-w-0">
                <p className="font-display text-lg font-semibold text-accent">{title}</p>
                <p className="mt-1 text-sm text-muted-foreground">{sub}</p>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
