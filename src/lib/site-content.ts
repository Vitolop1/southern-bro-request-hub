export type PriorityService = {
  id: string;
  title: string;
  shortLabel: string;
  href: string;
  quoteCategory: string;
  logo: string;
  summary: string;
  description: string;
  bullets: string[];
  audience: string;
  steps: string[];
  deliverables: string[];
  accent: string;
  ctaLabel: string;
};

export const priorityServices: PriorityService[] = [
  {
    id: "consulting",
    title: "Business Consulting",
    shortLabel: "Growth Priority",
    href: "/consulting",
    quoteCategory: "Business Consulting",
    logo: "/LOGOS/SouthernBro-Enterprises-Logo.png",
    summary:
      "Operational support, startup planning, launch guidance, and structured business help under the Southern Bro Enterprises parent brand.",
    description:
      "Business Consulting is one of the main service priorities for the rebuilt website. It should help business owners understand the support available, request help quickly, and move into a professional quote flow.",
    bullets: [
      "Startup planning and launch support",
      "Operational support and process guidance",
      "Retail setup and business organization",
      "General consulting for local business growth",
    ],
    audience:
      "Business owners, founders, startups, and operators who need structured support, clearer planning, or help organizing next steps.",
    steps: [
      "Choose the consulting page or request quote flow.",
      "Submit your goals, timeline, and service details.",
      "Receive a follow-up to confirm scope and next steps.",
    ],
    deliverables: [
      "Discovery intake",
      "Consultation follow-up",
      "Scope clarification",
      "Quote or next-step recommendation",
    ],
    accent: "from-fuchsia-500/35 via-violet-500/20 to-transparent",
    ctaLabel: "Request Consulting",
  },
  {
    id: "detailing",
    title: "Detailing Services",
    shortLabel: "Growth Priority",
    href: "/detailing",
    quoteCategory: "Detailing Services",
    logo: "/LOGOS/SouthernBro-Enterprises-Logo.png",
    summary:
      "A dedicated detailing intake path gives Southern Bro a cleaner way to capture service requests and present a more serious local service offer.",
    description:
      "Detailing is being treated as a high-priority service line in the current website rebuild strategy. The website should make it easy to request service, describe the job, and move into a professional follow-up flow.",
    bullets: [
      "Detailing request intake",
      "Service description and scheduling support",
      "Customer-ready booking flow",
      "Professional quote and follow-up process",
    ],
    audience:
      "Customers looking for local detailing support who need a clean, trustworthy intake process and a fast path to service.",
    steps: [
      "Review the detailing service overview.",
      "Submit the quote form with timing, location, and job details.",
      "Receive confirmation and a follow-up from the team.",
    ],
    deliverables: [
      "Quote request capture",
      "Scheduling follow-up",
      "Service detail review",
      "Customer-ready intake workflow",
    ],
    accent: "from-[#d4a84f]/25 via-fuchsia-500/18 to-transparent",
    ctaLabel: "Request Detailing",
  },
  {
    id: "ticketing",
    title: "Ticket Vibez / Event Support",
    shortLabel: "Growth Priority",
    href: "/ticketing",
    quoteCategory: "Ticket Vibez / Event Support",
    logo: "/LOGOS/TicketVibez-Logo.png",
    summary:
      "Ticket Vibez should stand out as a dedicated event and ticketing service line with clear requests, audience targeting, and promotional support positioning.",
    description:
      "Ticket Vibez is one of the clearest branded growth opportunities on the site. The page should explain what the service does, who it serves, and how people can request event support.",
    bullets: [
      "Event ticketing support",
      "Promotional campaign support",
      "Community event access programs",
      "Bundled ticket and event inquiry support",
    ],
    audience:
      "Event organizers, customers, promoters, and community partners who need ticketing support or event-related assistance.",
    steps: [
      "Choose Ticket Vibez as your service line.",
      "Submit your event or support request.",
      "Receive follow-up about event details, timing, and service availability.",
    ],
    deliverables: [
      "Event request intake",
      "Campaign support review",
      "Ticketing inquiry follow-up",
      "Structured next-step response",
    ],
    accent: "from-sky-500/35 via-blue-500/22 to-transparent",
    ctaLabel: "Request Event Support",
  },
];

export const requestCategoryOptions = [
  "Business Consulting",
  "Detailing Services",
  "Ticket Vibez / Event Support",
  "Delivery & Logistics Support",
  "Handyman Services",
  "VA Recovery Services / Community Support",
  "Landscaping Services",
  "Southern Bro Creations / Product Inquiries",
  "General Business Support",
  "Other",
];

export const resourceArticles = [
  {
    title: "How to Prepare for a Service Quote",
    category: "Customer Guide",
    description:
      "A practical checklist showing what information customers should gather before requesting service.",
    href: "/request-quote",
  },
  {
    title: "Business Startup Support Checklist",
    category: "Consulting",
    description:
      "A simple resource for business owners who need structure before launch, setup, or operational support.",
    href: "/consulting",
  },
  {
    title: "What to Include in a Detailing Request",
    category: "Detailing",
    description:
      "A cleaner intake guide for customers requesting detailing work, location details, and scheduling preferences.",
    href: "/detailing",
  },
  {
    title: "Ticket Vibez Event Intake Overview",
    category: "Ticketing",
    description:
      "A short guide to the details event organizers should provide when requesting ticketing or promotional support.",
    href: "/ticketing",
  },
];

export const portalFeatures = [
  "View request status once customer portal access is activated",
  "Receive shared documents, follow-up details, or appointment notes",
  "Centralize future customer communication in one place",
];

export const quoteBenefits = [
  "One central quote path for consulting, detailing, ticketing, and support services.",
  "Cleaner lead capture that can later connect directly into HubSpot.",
  "A more professional intake flow for both mobile and desktop visitors.",
];

export function getPriorityService(id: string) {
  return priorityServices.find((service) => service.id === id);
}
