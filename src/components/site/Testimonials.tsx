import { BadgeCheck, Quote, Star } from "lucide-react";
import { testimonials } from "@/config/site";
import { Reveal } from "./Reveal";

export function Testimonials() {
  return (
    <section id="testimonials" className="border-t border-border bg-secondary/30 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="eyebrow">Testimonials</p>
          <h2 className="mt-4 text-3xl font-semibold leading-tight md:text-5xl">
            Creators Who Trusted Us With Their Growth
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground md:text-lg">
            Real feedback from clients — linked to their YouTube channels.
          </p>
        </Reveal>

        <ul className="mx-auto mt-14 grid max-w-5xl gap-6 md:grid-cols-2">
          {testimonials.map((t, i) => (
            <Reveal as="li" key={t.name} delay={i * 100}>
              <article className="relative flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-card p-8 shadow-[var(--shadow-soft)] md:p-10">
                <Quote className="absolute right-6 top-6 h-10 w-10 text-accent/15" aria-hidden />

                <div className="flex items-center gap-1" aria-label="5 out of 5 stars">
                  {Array.from({ length: 5 }).map((_, star) => (
                    <Star key={star} className="h-4 w-4 fill-accent text-accent" aria-hidden />
                  ))}
                </div>

                <blockquote className="mt-6 flex-1 text-base leading-relaxed md:text-lg">
                  “{t.quote}”
                </blockquote>

                <p className="mt-6 inline-flex w-fit items-center gap-2 rounded-full bg-accent-soft px-3.5 py-1.5 text-xs font-medium tracking-wide text-accent">
                  {t.verified && <BadgeCheck className="h-3.5 w-3.5 shrink-0" aria-hidden />}
                  {t.result}
                </p>

                <footer className="mt-7 grid grid-cols-[auto_minmax(0,1fr)] items-center gap-4 border-t border-border pt-6">
                  <img
                    src={t.avatarUrl}
                    alt={`${t.name} profile photo`}
                    className="h-12 w-12 shrink-0 rounded-full object-cover ring-2 ring-accent/15"
                  />
                  <div className="min-w-0">
                    <p className="truncate font-medium">{t.name}</p>
                    <a
                      href={t.channelUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="truncate text-sm text-muted-foreground underline-offset-4 transition-colors hover:text-accent hover:underline"
                    >
                      {t.channel}
                    </a>
                  </div>
                </footer>
              </article>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
