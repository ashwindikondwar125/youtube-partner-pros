import { BookButton } from "./BookButton";
import { Reveal } from "./Reveal";

const cards = [
  {
    number: "01",
    title: "Personalized Strategy",
    body: "We build a personalized YouTube strategy around your niche, audience, goals, positioning, and content style. Every channel is different, so we never apply a generic content formula.",
    points: ["Niche & audience mapping", "Positioning", "Content direction", "Growth goals"],
  },
  {
    number: "02",
    title: "Editing + Thumbnails",
    body: "You send us the raw video. We handle the rest — no juggling multiple freelancers or agencies.",
    points: [
      "Professional, retention-focused editing",
      "Thumbnail design",
      "Visual storytelling",
      "Titles & hooks where appropriate",
      "Platform-ready content",
    ],
  },
  {
    number: "03",
    title: "YouTube SEO & Organic Growth",
    body: "We optimize every video to improve its ability to get discovered organically. Sustainable growth — no shortcuts, no artificial numbers.",
    points: [
      "Keyword research & search intent",
      "Titles, descriptions, metadata",
      "Content optimization",
      "Audience targeting & discoverability",
    ],
  },
  {
    number: "04",
    title: "Competitor Analysis",
    body: "We study what is already working in your niche and turn it into a clear advantage for your channel.",
    points: [
      "Content gaps & winning topics",
      "Thumbnail and title patterns",
      "Positioning & formats",
      "Opportunities to differentiate",
    ],
  },
];

export function HowWeGrow() {
  return (
    <section id="how-we-grow" className="border-t border-border py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal className="max-w-3xl">
          <p className="eyebrow">How we grow your channel</p>
          <h2 className="mt-4 text-3xl font-semibold leading-tight md:text-5xl">
            You Create. We Handle Everything Else.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground md:text-lg">
            Growing a YouTube channel requires much more than uploading videos. We build the
            strategy, create the assets, optimize the content, and continuously analyze what is
            working.
          </p>
        </Reveal>

        <ul className="mt-14 grid gap-5 md:grid-cols-2">
          {cards.map((card, i) => (
            <Reveal as="li" key={card.number} delay={i * 80}>
              <article className="card-surface flex h-full flex-col p-7 md:p-9">
                <span className="font-display text-sm font-semibold text-accent">
                  {card.number}
                </span>
                <h3 className="mt-4 text-xl font-semibold md:text-2xl">{card.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground md:text-base">
                  {card.body}
                </p>
                <ul className="mt-6 space-y-2 border-t border-border pt-5 text-sm text-muted-foreground">
                  {card.points.map((p) => (
                    <li key={p} className="flex gap-3">
                      <span aria-hidden className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </ul>

        <Reveal className="mt-14 flex flex-col items-start gap-4 rounded-3xl border border-border bg-secondary/60 p-8 sm:flex-row sm:items-center sm:justify-between md:p-10">
          <p className="max-w-xl font-display text-lg font-medium md:text-xl">
            One team for your entire YouTube content operation.
          </p>
          <BookButton />
        </Reveal>
      </div>
    </section>
  );
}