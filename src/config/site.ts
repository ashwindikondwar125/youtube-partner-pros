// ---------------------------------------------------------------------------
// EDIT EVERYTHING HERE. Brand, links, testimonials, thumbnails, proof, footer.
// ---------------------------------------------------------------------------

export const site = {
  brandName: "Frame & Rise",
  tagline: "You create the content. We turn it into a channel that grows.",
  // Replace with your Zoom / Calendly / scheduling link
  bookingUrl: "https://calendly.com/your-handle/30min",
  email: "hello@yourdomain.com",
  phone: "[Insert Phone Number]",
  location: "[Insert Location]",
  socials: [
    { label: "Instagram", href: "https://instagram.com/[handle]" },
    { label: "YouTube", href: "https://youtube.com/@[handle]" },
    { label: "LinkedIn", href: "https://linkedin.com/company/[handle]" },
    { label: "Email", href: "mailto:hello@yourdomain.com" },
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

export type Testimonial = {
  name: string;
  channel: string;
  quote: string;
  result: string;
  channelUrl?: string;
  avatarUrl?: string;
};

export const testimonials: Testimonial[] = [
  {
    name: "[Client Name]",
    channel: "[Channel Name]",
    quote: "[Insert verified testimonial here]",
    result: "[Insert verified result here]",
    channelUrl: "",
  },
  {
    name: "[Client Name]",
    channel: "[Channel Name]",
    quote: "[Insert verified testimonial here]",
    result: "[Insert verified result here]",
    channelUrl: "",
  },
  {
    name: "[Client Name]",
    channel: "[Channel Name]",
    quote: "[Insert verified testimonial here]",
    result: "[Insert verified result here]",
    channelUrl: "",
  },
  {
    name: "[Client Name]",
    channel: "[Channel Name]",
    quote: "[Insert verified testimonial here]",
    result: "[Insert verified result here]",
    channelUrl: "",
  },
];

export type ThumbnailSample = { label: string; tag: string; imageUrl?: string };

export const thumbnails: ThumbnailSample[] = [
  { label: "Thumbnail Sample 01", tag: "Education" },
  { label: "Thumbnail Sample 02", tag: "Business" },
  { label: "Thumbnail Sample 03", tag: "Personal Brand" },
  { label: "Thumbnail Sample 04", tag: "Podcast" },
  { label: "Thumbnail Sample 05", tag: "Tech" },
  { label: "Thumbnail Sample 06", tag: "Finance" },
  { label: "Thumbnail Sample 07", tag: "Vlog" },
  { label: "Thumbnail Sample 08", tag: "Coaching" },
];

export type ProofItem = { label: string; caption: string; imageUrl?: string };

export const proofItems: ProofItem[] = [
  { label: "[Insert Client Feedback Screenshot]", caption: "Client feedback" },
  { label: "[Insert Payment Screenshot]", caption: "Payment confirmation" },
  { label: "[Insert Chat Screenshot]", caption: "Project conversation" },
  { label: "[Insert Channel Analytics Screenshot]", caption: "Before / after performance" },
];