import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { HowWeGrow } from "@/components/site/HowWeGrow";
import { Framework } from "@/components/site/Framework";
import { Services } from "@/components/site/Services";
import { Portfolio } from "@/components/site/Portfolio";
import { Testimonials } from "@/components/site/Testimonials";
import { Proof } from "@/components/site/Proof";
import { FinalCta } from "@/components/site/FinalCta";
import { Footer } from "@/components/site/Footer";
import { BookButton } from "@/components/site/BookButton";

const title = "YouTube Growth & Channel Management for Creators & Brands";
const description =
  "You send the raw video. We handle strategy, editing, thumbnails, SEO, and optimization — a complete YouTube growth partner built for organic, long-term channel growth.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <HowWeGrow />
        <Framework />
        <Services />
        <Portfolio />
        <Testimonials />
        <Proof />
        <FinalCta />
      </main>
      <Footer />

      {/* Mobile sticky CTA */}
      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-background/90 p-3 backdrop-blur-xl lg:hidden">
        <BookButton className="w-full" size="md" />
      </div>
      <div aria-hidden className="h-16 lg:hidden" />
    </div>
  );
}
