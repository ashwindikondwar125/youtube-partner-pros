import avatarVegas from "@/assets/avatars/moving-to-las-vegas.jpg";
import avatarRisk from "@/assets/avatars/risk-takers.jpg";
import avatarSkyler from "@/assets/avatars/skyler-christian.jpeg";
import avatarWGroup from "@/assets/avatars/w-group-real-estate.jpg";
import avatarTim from "@/assets/avatars/tim-trevathan.jpg.asset.json";
import avatarVickyKyle from "@/assets/avatars/living-in-las-vegas.jpg";
import thumbTim1 from "@/assets/portfolio/tim-trevathan-1.jpg.asset.json";
import thumbTim2 from "@/assets/portfolio/tim-trevathan-2.jpg.asset.json";

import thumbRisk1 from "@/assets/portfolio/risk-takers-1.jpg";
import thumbRisk2 from "@/assets/portfolio/risk-takers-2.jpg";
import thumbWGroup1 from "@/assets/portfolio/w-group-real-estate-1.jpg";
import thumbWGroup2 from "@/assets/portfolio/w-group-real-estate-2.jpg";
import workAtlantaFuture from "@/assets/portfolio/work-atlantas-future.jpg.asset.json";
import workAtlantaCollapse from "@/assets/portfolio/work-atlanta-collapse.jpg.asset.json";
import workHenderson from "@/assets/portfolio/work-day-in-henderson.png.asset.json";
import workCrashOrBoom from "@/assets/portfolio/work-crash-or-boom.png.asset.json";

import proofJoseph from "@/assets/proof/joseph-wise.jpg";
import proofMark from "@/assets/proof/mark-pepe-paypal.jpg";
import proofSkylerEmail from "@/assets/proof/skyler-email.jpg";
import proofSkylerPaypal from "@/assets/proof/skyler-paypal.jpg";

// ---------------------------------------------------------------------------
// EDIT EVERYTHING HERE. Brand, links, testimonials, thumbnails, proof, footer.
// ---------------------------------------------------------------------------

export const site = {
  brandName: "Devine Media",
  tagline: "You create the content. We turn it into a channel that grows.",
  bookingUrl: "https://calendly.com/ashwin-meetings01/new-meeting",
  email: "ashwin.meetings01@gmail.com",
  phone: "[Insert Phone Number]",
  location: "[Insert Location]",
  socials: [
    { label: "Instagram", href: "https://instagram.com/[handle]" },
    { label: "YouTube", href: "https://youtube.com/@[handle]" },
    { label: "LinkedIn", href: "https://linkedin.com/company/[handle]" },
    { label: "Email", href: "mailto:ashwin.meetings01@gmail.com" },
  ],
};

export const navItems = [
  { label: "Home", href: "#home" },
  { label: "How We Grow", href: "#how-we-grow" },
  { label: "Our Process", href: "#process" },
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Testimonials", href: "#testimonials" },
];

export type PortfolioVideo = {
  id: string;
  title: string;
  thumbnailUrl: string;
  watchUrl: string;
  embedUrl: string;
};

export type ChannelPortfolio = {
  name: string;
  client: string;
  niche: string;
  channelUrl: string;
  avatarUrl: string;
  services: string[];
  videos: PortfolioVideo[];
};

export const channels: ChannelPortfolio[] = [
  {
    name: "Tim Trevathan - Atlanta Georgia Living",
    client: "Tim Trevathan",
    niche: "Real Estate & Relocation",
    channelUrl: "https://www.youtube.com/@TimTrevathanAtlanta/videos",
    avatarUrl: avatarTim.url,
    services: ["Strategy", "Editing", "Thumbnails", "SEO"],
    videos: [
      {
        id: "irH-jS_H9og",
        title: "This Will Be WORSE Than A Housing Market Crash In Atlanta!",
        thumbnailUrl: thumbTim1.url,
        watchUrl: "https://www.youtube.com/watch?v=irH-jS_H9og",
        embedUrl: "https://www.youtube.com/embed/irH-jS_H9og?autoplay=1&rel=0",
      },
      {
        id: "sASIYBOtVvU",
        title: "Atlanta's Biggest Megaprojects (Crazy Changes Coming!)",
        thumbnailUrl: thumbTim2.url,
        watchUrl: "https://www.youtube.com/watch?v=sASIYBOtVvU",
        embedUrl: "https://www.youtube.com/embed/sASIYBOtVvU?autoplay=1&rel=0",
      },
    ],
  },
  {
    name: "The W Group Real Estate",
    client: "Micaela Wall",
    niche: "Luxury Real Estate",
    channelUrl: "https://www.youtube.com/@yourtriadncrealtor",
    avatarUrl: avatarWGroup,
    services: ["Thumbnails", "Editing", "Channel branding"],
    videos: [
      {
        id: "6XV4LoAHGJA",
        title: "Pfafftown, NC Housing Market Update — August 2026",
        thumbnailUrl: thumbWGroup1,
        watchUrl: "https://www.youtube.com/watch?v=6XV4LoAHGJA",
        embedUrl: "https://www.youtube.com/embed/6XV4LoAHGJA?autoplay=1&rel=0",
      },
      {
        id: "tkEGS5GOWkU",
        title: "Lewisville, NC Housing Market Update — August 2026",
        thumbnailUrl: thumbWGroup2,
        watchUrl: "https://www.youtube.com/watch?v=tkEGS5GOWkU",
        embedUrl: "https://www.youtube.com/embed/tkEGS5GOWkU?autoplay=1&rel=0",
      },
    ],
  },
  {
    name: "Risk Takers",
    client: "Risk Takers Team",
    niche: "Business & Entrepreneurship",
    channelUrl: "https://www.youtube.com/@officialrisktakers",
    avatarUrl: avatarRisk,
    services: ["Editing", "Thumbnails", "YouTube SEO"],
    videos: [
      {
        id: "tcz9ytBQvO0",
        title: "Bitcoin's Next Buyer Is So Obvious | Ryan Rasmussen",
        thumbnailUrl: thumbRisk1,
        watchUrl: "https://www.youtube.com/watch?v=tcz9ytBQvO0",
        embedUrl: "https://www.youtube.com/embed/tcz9ytBQvO0?autoplay=1&rel=0",
      },
      {
        id: "YIixALMWGkQ",
        title: "The Fed Is Quietly Suppressing Interest Rates | Michael Howell",
        thumbnailUrl: thumbRisk2,
        watchUrl: "https://www.youtube.com/watch?v=YIixALMWGkQ",
        embedUrl: "https://www.youtube.com/embed/YIixALMWGkQ?autoplay=1&rel=0",
      },
    ],
  },
];

export type Testimonial = {
  name: string;
  channel: string;
  quote: string;
  result: string;
  channelUrl: string;
  avatarUrl: string;
  verified?: boolean;
};

export const testimonials: Testimonial[] = [
  {
    name: "Tim Trevathan",
    channel: "Tim Trevathan - Atlanta Georgia Living",
    quote:
      "Since working with Divine Media over the past 3–4 months, my channel has seen significant growth, with a steady increase in organic views and overall audience engagement.",
    result: "Real estate & relocation content creator",
    channelUrl: "https://www.youtube.com/@TimTrevathanAtlanta/videos",
    avatarUrl: avatarTim.url,
    verified: true,
  },
  {
    name: "Vicky and Kyle",
    channel: "Living in Las Vegas With Vicky and Kyle",
    quote:
      "Working with Ashwin was one of the best decisions I made. I focus on creating content while the team handles all operational work. Highly recommended!",
    result: "Las Vegas lifestyle content creators",
    channelUrl: "https://www.youtube.com/@LivingInLasVegasWithVickyandKy/videos",
    avatarUrl: avatarVickyKyle,
    verified: true,
  },
];

export type WorkThumbnail = {
  title: string;
  tag: string;
  imageUrl: string;
};

export const workThumbnails: WorkThumbnail[] = [
  {
    title: "Atlanta's Future",
    tag: "Tim Trevathan - Atlanta Georgia Living",
    imageUrl: workAtlantaFuture.url,
  },
  {
    title: "Atlanta Collapse",
    tag: "Tim Trevathan - Atlanta Georgia Living",
    imageUrl: workAtlantaCollapse.url,
  },
  { title: "Day in the Life in Henderson", tag: "Living in Las Vegas", imageUrl: workHenderson.url },
  { title: "Crash or Boom?", tag: "Real Estate", imageUrl: workCrashOrBoom.url },
];

export type ProofItem = { label: string; caption: string; imageUrl: string };

export const proofItems: ProofItem[] = [
  {
    label: "Client feedback — Skyler Christian",
    caption: "Email confirming strategy insight and editing / thumbnail partnership",
    imageUrl: proofSkylerEmail,
  },
  {
    label: "Payment — Skyler Christian",
    caption: "PayPal invoice payment of $200 USD",
    imageUrl: proofSkylerPaypal,
  },
  {
    label: "Payment — Mark Pepe",
    caption: "PayPal invoice payment of $735 USD",
    imageUrl: proofMark,
  },
  {
    label: "Payment — Joseph Paul Manausa",
    caption: "Wise transfer of $1,000 USD",
    imageUrl: proofJoseph,
  },
];
