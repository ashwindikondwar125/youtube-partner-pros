import avatarInvestor from "@/assets/avatars/investor-accelerator.jpg";
import avatarVegas from "@/assets/avatars/moving-to-las-vegas.jpg";
import avatarRisk from "@/assets/avatars/risk-takers.jpg";
import avatarSkyler from "@/assets/avatars/skyler-christian.jpeg";
import avatarWGroup from "@/assets/avatars/w-group-real-estate.jpg";

import thumbInvestor1 from "@/assets/portfolio/investor-accelerator-1.jpg";
import thumbInvestor2 from "@/assets/portfolio/investor-accelerator-2.jpg";
import thumbVegas1 from "@/assets/portfolio/moving-to-las-vegas-1.jpg";
import thumbVegas2 from "@/assets/portfolio/moving-to-las-vegas-2.jpg";
import thumbRisk1 from "@/assets/portfolio/risk-takers-1.jpg";
import thumbRisk2 from "@/assets/portfolio/risk-takers-2.jpg";
import thumbWGroup1 from "@/assets/portfolio/w-group-real-estate-1.jpg";
import thumbWGroup2 from "@/assets/portfolio/w-group-real-estate-2.jpg";
import workCrash from "@/assets/portfolio/work-crash-time.jpg";
import workRealtor from "@/assets/portfolio/work-6-figure-realtor.jpg";
import workMovingTips from "@/assets/portfolio/work-moving-tips.jpg";
import workVegasFlorida from "@/assets/portfolio/work-vegas-vs-florida.jpg";

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
    name: "Moving to Las Vegas",
    client: "Mark Pepe",
    niche: "Real Estate & Relocation",
    channelUrl: "https://www.youtube.com/@movingtolasvegasnevada",
    avatarUrl: avatarVegas,
    services: ["Strategy", "Editing", "Thumbnails", "SEO"],
    videos: [
      {
        id: "shn4kQS-fBY",
        title: "Cadence VS Inspirada — Which Henderson community is better?",
        thumbnailUrl: thumbVegas1,
        watchUrl: "https://www.youtube.com/watch?v=shn4kQS-fBY",
        embedUrl: "https://www.youtube.com/embed/shn4kQS-fBY?autoplay=1&rel=0",
      },
      {
        id: "AhqUDSI9xpw",
        title: "5 Reasons People Are Leaving Las Vegas",
        thumbnailUrl: thumbVegas2,
        watchUrl: "https://www.youtube.com/watch?v=AhqUDSI9xpw",
        embedUrl: "https://www.youtube.com/embed/AhqUDSI9xpw?autoplay=1&rel=0",
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
    name: "The Investor Accelerator",
    client: "Jason Pizzino",
    niche: "Finance & Investing",
    channelUrl: "https://www.youtube.com/@theinvestoraccelerator",
    avatarUrl: avatarInvestor,
    services: ["Editing", "Thumbnails", "Content packaging"],
    videos: [
      {
        id: "7YpVKhMm9K4",
        title: "This ALWAYS Happens Before a Housing Crash",
        thumbnailUrl: thumbInvestor1,
        watchUrl: "https://www.youtube.com/watch?v=7YpVKhMm9K4",
        embedUrl: "https://www.youtube.com/embed/7YpVKhMm9K4?autoplay=1&rel=0",
      },
      {
        id: "NYCvGPZJtMo",
        title: "The Australian Property Market is Actually Collapsing",
        thumbnailUrl: thumbInvestor2,
        watchUrl: "https://www.youtube.com/watch?v=NYCvGPZJtMo",
        embedUrl: "https://www.youtube.com/embed/NYCvGPZJtMo?autoplay=1&rel=0",
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
    name: "Mark Pepe",
    channel: "Moving to Las Vegas",
    quote:
      "Ashwin has been very helpful in organizing and distributing our content, implementing new strategies based on the data he sees, and optimizing all of our content.",
    result: "Real estate & relocation channel partner",
    channelUrl: "https://www.youtube.com/@movingtolasvegasnevada",
    avatarUrl: avatarVegas,
    verified: true,
  },
  {
    name: "Skyler Christian",
    channel: "TheRealTraderTrainer",
    quote:
      "Thanks so much for the great insight! I really appreciate it. I'll be paying for video editing, posting, and thumbnails so that I can start focusing on writing and filming higher quality videos.",
    result: "Trading education content creator",
    channelUrl: "https://www.youtube.com/@TheRealTraderTrainer",
    avatarUrl: avatarSkyler,
    verified: true,
  },
];

export type WorkThumbnail = {
  title: string;
  tag: string;
  imageUrl: string;
};

export const workThumbnails: WorkThumbnail[] = [
  { title: "Las Vegas vs Florida", tag: "Moving to Las Vegas", imageUrl: workVegasFlorida },
  { title: "Crash Time?", tag: "The Investor Accelerator", imageUrl: workCrash },
  { title: "6 Figure Realtor", tag: "The W Group Real Estate", imageUrl: workRealtor },
  { title: "Tips for Moving Out of State", tag: "Moving to Las Vegas", imageUrl: workMovingTips },
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
