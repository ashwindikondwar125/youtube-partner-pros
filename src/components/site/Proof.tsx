import { ShieldCheck } from "lucide-react";
import { proofItems } from "@/config/site";
import { Reveal } from "./Reveal";

export function Proof() {
  return (
    <section className="border-t border-border py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal className="max-w-3xl">
          <p className="eyebrow">Proof</p>
          <h2 className="mt-4 text-3xl font-semibold leading-tight md:text-5xl">
            Don't Take Our Word For It.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground md:text-lg">
            Real client feedback and verified payments — shown as individual screenshots.
          </p>
        </Reveal>

        <ul className="mt-14 grid gap-5 sm:grid-cols-2">
          {proofItems.map((item, i) => (
            <Reveal as="li" key={item.label} delay={(i % 2) * 80}>
              <figure className="card-surface overflow-hidden">
                <div className="relative aspect-[4/3] overflow-hidden border-b border-border bg-secondary/40">
                  <img
                    src={item.imageUrl}
                    alt={item.label}
                    loading="lazy"
                    className="h-full w-full object-contain p-3"
                  />
                  <div className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-card/90 px-3 py-1.5 text-xs font-medium text-accent shadow-sm backdrop-blur-sm">
                    <ShieldCheck className="h-3.5 w-3.5" aria-hidden />
                    Verified
                  </div>
                </div>
                <figcaption className="px-6 py-5">
                  <p className="text-sm font-medium">{item.label}</p>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                    {item.caption}
                  </p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
