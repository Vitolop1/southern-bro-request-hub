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
    id: "landscaping",
    title: "Landscaping & Lawn Care",
    shortLabel: "Landscaping Division",
    href: "/landscaping",
    quoteCategory: "Landscaping Services",
    logo: "/LOGOS/SouthernBro-Landscaping-Logo.png",
    summary:
      "Licensed and insured landscaping and lawn care with a direct request path for cleanup, routine maintenance, and recurring property support.",
    description:
      "Southern Bro Landscaping LLC gives customers a direct path to request lawn care, cleanup work, and outdoor property maintenance through a dedicated service page.",
    bullets: [
      "Routine lawn care and mowing requests",
      "Seasonal cleanup and property refresh",
      "Recurring outdoor maintenance support",
      "Licensed and insured professional service",
    ],
    audience:
      "Homeowners, rental property operators, and small commercial clients who need dependable lawn care and property-ready outdoor support.",
    steps: [
      "Review the landscaping service overview.",
      "Submit the request form with property details and timing.",
      "Receive follow-up to confirm the next step or schedule.",
    ],
    deliverables: [
      "Landscaping request capture",
      "Property and timing review",
      "Service follow-up",
      "Quote or scheduling response",
    ],
    accent: "from-emerald-400/28 via-lime-400/16 to-transparent",
    ctaLabel: "Request Landscaping",
  },
  {
    id: "detailing",
    title: "Detailing Services",
    shortLabel: "Detailing Division",
    href: "/detailing",
    quoteCategory: "Detailing Services",
    logo: "/LOGOS/SouthernBro-Detailing-Specials-Logo.png",
    summary:
      "Professional auto detailing with a clear request path for vehicle details, timing, location, and follow-up.",
    description:
      "The detailing page is designed to help customers describe vehicle needs clearly, request service quickly, and move into a dependable follow-up process.",
    bullets: [
      "Interior and exterior detailing requests",
      "Vehicle condition notes and scheduling support",
      "Customer-ready booking flow",
      "Professional quote and follow-up process",
    ],
    audience:
      "Customers looking for local auto detailing support who need a clean, trustworthy intake process and a fast path to service.",
    steps: [
      "Review the detailing service overview.",
      "Submit the quote form with timing, location, and vehicle details.",
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
    id: "consulting",
    title: "Business Consulting",
    shortLabel: "Business Support",
    href: "/consulting",
    quoteCategory: "Business Consulting",
    logo: "/LOGOS/SouthernBro-Enterprises-Logo.png",
    summary:
      "Operational support, startup planning, launch guidance, and structured business help under the Southern Bro Enterprises parent brand.",
    description:
      "Business Consulting gives owners, founders, and operators a direct path to planning support, operational guidance, and practical next steps for growth.",
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
];

export const requestCategoryOptions = [
  "Detailing Services",
  "Landscaping Services",
  "Business Consulting",
  "Ticket Vibez / Event Support",
  "Delivery Support",
  "VA Recovery Services / Community Support",
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
      "A simple guide for customers requesting detailing work, location details, and scheduling preferences.",
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
  "View request status in one place",
  "Receive shared documents, follow-up details, or appointment notes",
  "Keep customer communication organized and easy to review",
];

export const quoteBenefits = [
  "One central quote path for consulting, detailing, ticketing, and support services.",
  "Organized lead capture ready for follow-up and CRM routing.",
  "A professional intake flow for both mobile and desktop visitors.",
];

export function getPriorityService(id: string) {
  return priorityServices.find((service) => service.id === id);
}
