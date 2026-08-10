import { testimonials } from "@/config/site";
import { Reveal } from "./Reveal";

export function Testimonials() {
  return (
    <section id="testimonials" className="border-t border-border py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal className="max-w-3xl">
          <p className="eyebrow">Testimonials</p>
          <h2 className="mt-4 text-3xl font-semibold leading-tight md:text-5xl">
            Creators Who Trusted Us With Their Growth
          </h2>
        </Reveal>

        <ul className="mt-14 grid gap-5 md:grid-cols-2">
          {testimonials.map((t, i) => (
            <Reveal as="li" key={i} delay={(i % 2) * 80}>
              <article className="card-surface flex h-full flex-col p-7 md:p-9">
                <p className="text-base leading-relaxed md:text-lg">“{t.quote}”</p>
                <p className="mt-6 inline-flex w-fit rounded-full bg-accent-soft px-3 py-1.5 text-xs font-medium tracking-wide text-foreground">
                  {t.result}
                </p>
                <div className="mt-7 grid grid-cols-[auto_minmax(0,1fr)] items-center gap-3 border-t border-border pt-6">
                  {t.avatarUrl ? (
                    <img
                      src={t.avatarUrl}
                      alt={t.name}
                      loading="lazy"
                      className="h-11 w-11 shrink-0 rounded-full object-cover"
                    />
                  ) : (
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-secondary text-xs text-muted-foreground">
                      IMG
                    </span>
                  )}
                  <div className="min-w-0">
                    <p className="truncate text-sm font-medium">{t.name}</p>
                    {t.channelUrl ? (
                      <a
                        href={t.channelUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="truncate text-sm text-muted-foreground underline-offset-4 transition-colors hover:text-accent hover:underline"
                      >
                        {t.channel}
                      </a>
                    ) : (
                      <p className="truncate text-sm text-muted-foreground">{t.channel}</p>
                    )}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}