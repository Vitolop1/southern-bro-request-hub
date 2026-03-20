export type BrandProfile = {
  id: string;
  name: string;
  shortLabel: string;
  logo: string;
  summary: string;
  description: string;
  services: string[];
  audience: string;
  ctaLabel: string;
  requestHref: string;
  pageHref: string;
  accent: string;
  priorityTier: "high" | "medium" | "low";
  status?: "active" | "coming-soon";
  statusNote?: string;
  featured?: boolean;
};

export const brandProfiles: BrandProfile[] = [
  {
    id: "southern-bro-enterprises",
    name: "Southern Bro Enterprises",
    shortLabel: "Business Support",
    logo: "/LOGOS/SouthernBro-Enterprises-Logo.png",
    summary: "Parent company support for business growth, operations, logistics, and launch strategy.",
    description:
      "Southern Bro Enterprises is the umbrella brand that connects the business, service, event, and community support sides of the company into one recognizable system.",
    services: [
      "Business start-ups",
      "Business consulting",
      "Logistics and management aid",
      "Operational support services",
      "Retail setup and launch support",
    ],
    audience:
      "Built for business owners, start-ups, community partners, and customers who need organized operational support.",
    ctaLabel: "Request Business Help",
    requestHref: "/consulting",
    pageHref: "/brands/southern-bro-enterprises",
    accent: "from-fuchsia-500/35 via-violet-500/20 to-transparent",
    priorityTier: "high",
  },
  {
    id: "southern-bro-delivery-catering",
    name: "Southern Bro Delivery & Catering",
    shortLabel: "Delivery & Catering",
    logo: "/LOGOS/SouthernBro-Delivery-Catering-Logo.png",
    summary: "Fast delivery, catering coordination, logistics help, and scheduled pickup support.",
    description:
      "Southern Bro Delivery & Catering focuses on movement, timing, and convenience for customers who need reliable delivery, catering coordination, or personal shopping support.",
    services: [
      "Event catering",
      "Personal shopping",
      "Logistics delivery",
      "Equipment transport",
      "Scheduled food and order delivery",
    ],
    audience:
      "Ideal for households, events, small businesses, and clients who need quick and organized delivery support.",
    ctaLabel: "Book Delivery",
    requestHref: "/delivery",
    pageHref: "/brands/southern-bro-delivery-catering",
    accent: "from-cyan-500/30 via-fuchsia-500/15 to-transparent",
    priorityTier: "medium",
    status: "coming-soon",
    statusNote: "Coming Soon",
  },
  {
    id: "southern-bro-handyman-services",
    name: "Southern Bro Handyman Services",
    shortLabel: "Handyman Services",
    logo: "/LOGOS/SouthernBro-Handyman-Services-Logo.png",
    summary: "Reliable repair, installation, and property support for residential and commercial needs.",
    description:
      "Southern Bro Handyman Services provides practical support for repairs, fixture installs, assembly work, and maintenance-related property service needs.",
    services: [
      "Simple repairs",
      "Furniture assembly",
      "Fixture installation",
      "Holiday decoration install",
      "Property turnover inspections",
    ],
    audience:
      "Designed for homeowners, landlords, property managers, and businesses needing dependable maintenance support.",
    ctaLabel: "Request Handyman Help",
    requestHref: "/request-quote?service=Handyman%20Services",
    pageHref: "/brands/southern-bro-handyman-services",
    accent: "from-amber-400/25 via-fuchsia-500/18 to-transparent",
    priorityTier: "medium",
  },
  {
    id: "southern-bro-landscaping",
    name: "Southern Bro Landscaping",
    shortLabel: "Landscaping",
    logo: "/LOGOS/SouthernBro-Landscaping-Logo.png",
    summary: "Outdoor property care with lawn maintenance, cleanup, and recurring service support.",
    description:
      "Southern Bro Landscaping helps keep outdoor spaces clean, maintained, and service-ready through recurring upkeep and seasonal support.",
    services: [
      "Lawn maintenance",
      "Snow removal and salting",
      "Seasonal cleanup",
      "Outdoor property maintenance",
      "Recurring service contracts",
    ],
    audience:
      "A strong fit for homeowners, rental properties, community spaces, and clients with ongoing grounds maintenance needs.",
    ctaLabel: "Book Landscaping",
    requestHref: "/request-quote?service=Landscaping%20Services",
    pageHref: "/brands/southern-bro-landscaping",
    accent: "from-emerald-400/18 via-fuchsia-500/20 to-transparent",
    priorityTier: "low",
    status: "coming-soon",
    statusNote: "Coming Soon",
  },
  {
    id: "southern-bro-creations",
    name: "Southern Bro Creations / Wax Melt Bros",
    shortLabel: "Creations",
    logo: "/LOGOS/SouthernBro-Creations-Logo.png",
    summary: "Creative products and gift-ready wax melt collections with seasonal and custom fragrance options.",
    description:
      "Southern Bro Creations adds a product and gifting side to the business through wax melts, bundles, gift sets, and branded scent collections.",
    services: [
      "Wax melt products",
      "Warmer bundles",
      "Gift sets",
      "E-gift cards",
      "Seasonal and custom scents",
    ],
    audience:
      "Made for gift buyers, product shoppers, event gifting, and customers looking for branded lifestyle items.",
    ctaLabel: "Shop or Inquire",
    requestHref: "/request-quote?service=Southern%20Bro%20Creations%20%2F%20Product%20Inquiries",
    pageHref: "/brands/southern-bro-creations",
    accent: "from-pink-500/35 via-violet-500/18 to-transparent",
    priorityTier: "low",
    status: "coming-soon",
    statusNote: "Coming Soon",
  },
  {
    id: "ticket-vibez",
    name: "Ticket Vibez",
    shortLabel: "Ticketing",
    logo: "/LOGOS/TicketVibez-Logo.png",
    summary: "Ticketing support, bundle promotion, and event-facing access services under a distinct brand.",
    description:
      "Ticket Vibez gives the company an event support identity focused on ticket access, promotional campaigns, and bundled event experiences.",
    services: [
      "Event ticketing support",
      "Subscription ticket bundles",
      "Community event access programs",
      "Promotional campaign support",
    ],
    audience:
      "Best for event customers, community organizations, and clients needing ticket-related promotional support.",
    ctaLabel: "Request Event Support",
    requestHref: "/ticketing",
    pageHref: "/brands/ticket-vibez",
    accent: "from-sky-500/35 via-blue-500/20 to-transparent",
    priorityTier: "high",
  },
  {
    id: "va-recovery-services",
    name: "VA Recovery Services",
    shortLabel: "Community Programs",
    logo: "/LOGOS/VA-Recovery-Services-Logo.png",
    summary: "Community-focused support tied to advocacy, stability, recovery assistance, and the HOPE Grant mission.",
    description:
      "VA Recovery Services brings the community support side of Southern Bro into focus through recovery support, advocacy, service initiatives, and stability-oriented programs.",
    services: [
      "Community support",
      "Aid services support",
      "Stability programs",
      "Recovery assistance",
      "Advocacy initiatives",
    ],
    audience:
      "Created for community members, support partners, and individuals seeking structured help and service-oriented outreach.",
    ctaLabel: "Request Community Support",
    requestHref: "/request-quote?service=VA%20Recovery%20Services%20%2F%20Community%20Support",
    pageHref: "/brands/va-recovery-services",
    accent: "from-[#d4a84f]/35 via-[#1e3a8a]/20 to-transparent",
    priorityTier: "medium",
    featured: true,
  },
];

export const serviceCategoryOptions = brandProfiles.map((brand) => brand.name);

export const aboutHighlights = [
  {
    title: "Multi-Brand Support",
    description:
      "One company structure connecting business services, property help, delivery solutions, products, events, and community initiatives.",
  },
  {
    title: "Locally Grounded",
    description:
      "Built around Lynchburg, Virginia and regional service needs with a clear focus on responsiveness and reliability.",
  },
  {
    title: "Professional and Flexible",
    description:
      "Designed to support both everyday customer requests and more specialized business or community-driven service needs.",
  },
];
