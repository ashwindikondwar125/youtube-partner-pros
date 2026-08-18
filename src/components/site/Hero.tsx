import { ExternalLink } from "lucide-react";
import heroDash1 from "@/assets/portfolio/adriennes-dash-1.webp.asset.json";
import heroDash2 from "@/assets/portfolio/adriennes-dash-2.webp.asset.json";
import adrienneAvatar from "@/assets/avatars/adriennes-avenue.jpg.asset.json";
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
          <div className="mb-5 flex flex-wrap items-center gap-3">
            <img
              src={adrienneAvatar.url}
              alt="Adrienne's Avenue channel avatar"
              className="h-11 w-11 shrink-0 rounded-full object-cover ring-2 ring-accent/20"
            />
            <h2 className="text-lg font-semibold md:text-xl">Adrienne's Avenue</h2>
            <a
              href="https://www.youtube.com/@adriennesavenue/videos"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-accent transition-colors hover:text-accent/80"
            >
              View channel
              <ExternalLink className="h-3.5 w-3.5" />
            </a>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="overflow-hidden rounded-3xl border border-border bg-card shadow-[var(--shadow-lift)]">
              <img
                src={heroDash1.url}
                alt="Adrienne's Avenue YouTube Studio dashboard showing 1,857 subscribers"
                loading="eager"
                width={1920}
                height={872}
                className="h-auto w-full object-contain"
              />
            </div>
            <div className="overflow-hidden rounded-3xl border border-border bg-card shadow-[var(--shadow-lift)]">
              <img
                src={heroDash2.url}
                alt="Adrienne's Avenue YouTube Studio dashboard showing 12,740 subscribers"
                loading="eager"
                width={1920}
                height={872}
                className="h-auto w-full object-contain"
              />
            </div>
          </div>
        </Reveal>

        <Reveal delay={260}>
          <ul className="mt-12 grid grid-cols-2 gap-y-6 border-t border-border pt-8 md:grid-cols-4">
            {[
              ["14+", "Channels managed"],
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
