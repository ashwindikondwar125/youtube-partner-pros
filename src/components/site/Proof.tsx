import { proofItems } from "@/config/site";
import { Reveal } from "./Reveal";

export function Proof() {
  return (
    <section className="border-t border-border bg-secondary/50 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal className="max-w-3xl">
          <p className="eyebrow">Proof</p>
          <h2 className="mt-4 text-3xl font-semibold leading-tight md:text-5xl">
            Don't Take Our Word For It.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground md:text-lg">
            Real feedback from people who have trusted us with their content and growth.
          </p>
        </Reveal>

        <ul className="mt-14 grid gap-5 sm:grid-cols-2">
          {proofItems.map((item, i) => (
            <Reveal as="li" key={item.label} delay={(i % 2) * 80}>
              <figure className="card-surface overflow-hidden">
                <div className="grid aspect-[4/3] place-items-center border-b border-border bg-secondary/60 p-6 text-center">
                  {item.imageUrl ? (
                    <img
                      src={item.imageUrl}
                      alt={item.caption}
                      loading="lazy"
                      className="h-full w-full object-contain"
                    />
                  ) : (
                    <span className="text-xs uppercase tracking-[0.16em] text-muted-foreground">
                      {item.label}
                    </span>
                  )}
                </div>
                <figcaption className="px-6 py-4 text-sm text-muted-foreground">
                  {item.caption}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}