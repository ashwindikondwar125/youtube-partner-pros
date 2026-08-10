import { BookButton } from "./BookButton";
import { Reveal } from "./Reveal";

export function FinalCta() {
  return (
    <section className="relative overflow-hidden bg-ink py-24 text-ink-foreground md:py-32">
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 h-[420px] w-[720px] -translate-x-1/2 rounded-full bg-accent/20 blur-3xl"
      />
      <div className="relative mx-auto max-w-3xl px-5 text-center md:px-8">
        <Reveal>
          <h2 className="text-3xl font-semibold leading-tight md:text-5xl">
            Ready to Take Your YouTube Channel to the Next Level?
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-ink-foreground/65 md:text-lg">
            Send us your raw content. We'll handle the strategy, editing, thumbnails, SEO, and
            optimization needed to build a stronger YouTube presence.
          </p>
          <div className="mt-10 flex justify-center">
            <BookButton size="lg" />
          </div>
          <p className="mt-5 text-sm text-ink-foreground/50">
            Let's discuss your channel, your goals, and where we can take it next.
          </p>
        </Reveal>
      </div>
    </section>
  );
}