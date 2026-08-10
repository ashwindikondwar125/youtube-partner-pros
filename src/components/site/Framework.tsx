import { Reveal } from "./Reveal";

const steps = [
  {
    step: "Step 01",
    key: "Strategy",
    title: "Build the Roadmap Before We Create",
    body: "We start by understanding your brand, niche, target audience, competitors, goals, and current channel performance — then develop a personalized strategy so every piece of content has a purpose.",
    points: [
      "Content pillars",
      "Audience positioning",
      "Topic research",
      "Competitor analysis",
      "Content opportunities",
      "Publishing direction",
      "Brand positioning",
      "Growth objectives",
    ],
  },
  {
    step: "Step 02",
    key: "Create",
    title: "Turn Your Raw Footage Into Content",
    body: "You simply send us your raw video. Our team transforms it into polished, engaging, professional YouTube content.",
    points: [
      "Video editing",
      "Storytelling",
      "Pacing",
      "Retention-focused editing",
      "Motion graphics where appropriate",
      "Thumbnail design",
      "Visual elements",
      "Content packaging",
    ],
  },
  {
    step: "Step 03",
    key: "Optimize",
    title: "Make Every Video Easier to Discover",
    body: "Once the content is created, we optimize it for YouTube discovery and performance, building long-term organic growth.",
    points: [
      "SEO research",
      "Keyword optimization",
      "Titles & descriptions",
      "Metadata",
      "Thumbnail optimization",
      "Search intent",
      "Performance analysis",
      "Continuous improvement",
    ],
  },
];

export function Framework() {
  return (
    <section id="process" className="bg-ink py-20 text-ink-foreground md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal className="max-w-3xl">
          <p className="eyebrow text-ink-foreground/50">Our framework</p>
          <h2 className="mt-4 text-3xl font-semibold leading-tight md:text-5xl">
            Our YouTube Growth Framework
          </h2>
          <p className="mt-5 text-base leading-relaxed text-ink-foreground/60 md:text-lg">
            A simple three-step system designed to turn raw content into a consistent, optimized
            YouTube presence.
          </p>
        </Reveal>

        <Reveal delay={80} className="mt-12 flex flex-wrap items-center gap-3 md:gap-5">
          {steps.map((s, i) => (
            <span key={s.key} className="flex items-center gap-3 md:gap-5">
              <span className="rounded-full border border-ink-foreground/15 px-5 py-2 font-display text-sm font-medium uppercase tracking-[0.18em]">
                {s.key}
              </span>
              {i < steps.length - 1 && (
                <span aria-hidden className="text-accent">
                  →
                </span>
              )}
            </span>
          ))}
        </Reveal>

        <ol className="mt-14 space-y-4">
          {steps.map((s, i) => (
            <Reveal as="li" key={s.key} delay={i * 80}>
              <div className="grid gap-6 rounded-3xl border border-ink-foreground/10 bg-ink-foreground/[0.04] p-7 transition-colors duration-300 hover:border-accent/40 md:grid-cols-[220px_minmax(0,1fr)] md:p-10">
                <div>
                  <p className="font-display text-sm text-accent">{s.step}</p>
                  <p className="mt-2 font-display text-2xl font-semibold md:text-3xl">{s.key}</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold md:text-xl">{s.title}</h3>
                  <p className="mt-3 max-w-2xl text-sm leading-relaxed text-ink-foreground/60 md:text-base">
                    {s.body}
                  </p>
                  <ul className="mt-6 grid grid-cols-1 gap-x-8 gap-y-2 text-sm text-ink-foreground/75 sm:grid-cols-2">
                    {s.points.map((p) => (
                      <li key={p} className="flex gap-3 border-b border-ink-foreground/10 pb-2">
                        <span aria-hidden className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}