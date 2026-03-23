export type NavigationLink = {
  label: string;
  href: string;
};

export type TeamMember = {
  slug: string;
  name: string;
  role: string;
  title: string;
  initials: string;
  summary: string;
  description: string;
  focusAreas: string[];
  contactEmail: string;
  photoPath?: string;
};

export type ContactLine = {
  label: string;
  value: string;
  href?: string;
};

export type CommunityNetwork = {
  name: string;
  description: string;
};

export const mainNavigationLinks: NavigationLink[] = [
  { label: "Home", href: "/" },
  { label: "What We Do", href: "/what-we-do" },
  { label: "Request Our Services", href: "/request-quote" },
  { label: "Meet Our Team", href: "/meet-our-team" },
  { label: "Contact Us", href: "/contact-us" },
  { label: "Request H.O.P.E. Grant Aid", href: "/request-hope-grant-aid" },
  { label: "Donate for H.O.P.E.", href: "/donate-for-hope" },
];

export const supportPageLinks: NavigationLink[] = [
  { label: "Detailing Specials", href: "/brands/detailing-specials" },
  { label: "Ticket Vibez", href: "/brands/ticket-vibez" },
  { label: "Delivery Requests", href: "/need-a-ride" },
  { label: "Meet William Soteria", href: "/meet-william-soteria" },
  { label: "Meet Antwan Hardin", href: "/meet-antwan-hardin" },
  { label: "Meet Ciera Tropp", href: "/meet-ciera-tropp" },
];

export const leadershipTeam: TeamMember[] = [
  {
    slug: "william-soteria",
    name: "William Soteria",
    role: "Founder / C.E.O.",
    title: "Managing Equity Partner",
    initials: "WS",
    summary:
      "Founder and lead operator guiding Southern Bro Enterprises, the H.O.P.E. Grant mission, and the broader business support direction.",
    description:
      "William Soteria is presented across the current Southern Bro materials as the founder, chief executive officer, and managing equity partner. His role anchors the parent company vision, community-forward work, and the growth of the broader Southern Bro brand family.",
    focusAreas: [
      "Company direction and leadership",
      "Business consulting and growth support",
      "Community betterment and H.O.P.E. Grant oversight",
      "Partnership and brand expansion strategy",
    ],
    contactEmail: "William.Soteria@SouthernBroEnterprises.com",
    photoPath: "/team/william-soteria.jpg",
  },
  {
    slug: "antwan-hardin",
    name: "Antwan Hardin",
    role: "Chief Business Development Officer",
    title: "Equity Partner",
    initials: "AH",
    summary:
      "Business development lead focused on partnerships, outreach, and strengthening the Southern Bro service network.",
    description:
      "Antwan Hardin is positioned as an equity partner and business development leader helping shape partnerships, growth opportunities, and relationship-driven expansion across the company.",
    focusAreas: [
      "Business development and partnerships",
      "Strategic outreach",
      "Brand relationship building",
      "Revenue and opportunity development",
    ],
    contactEmail: "Antwan.Hardin@SouthernBroEnterprises.com",
    photoPath: "/team/antwan-hardin.jpg",
  },
  {
    slug: "ciera-tropp",
    name: "Ciera Tropp",
    role: "Chief Operations Officer",
    title: "Equity Partner",
    initials: "CT",
    summary:
      "Operations-focused leadership helping organize delivery, follow-up, and the internal systems that keep the company moving.",
    description:
      "Ciera Tropp is shown as the operations lead and an equity partner. Her lane supports structure, execution, and the day-to-day systems that help Southern Bro deliver on its customer and community commitments.",
    focusAreas: [
      "Operations and service coordination",
      "Internal process support",
      "Customer follow-up workflows",
      "Cross-brand execution support",
    ],
    contactEmail: "Ciera.Tropp@SouthernBroEnterprises.com",
    photoPath: "/team/ciera-tropp.jpg",
  },
];

export const companyOverview = {
  heroTitle: "A Multi-Level Business & Community Support Services Company",
  heroTagline: "Putting Our Communities 1st by Southern Hospitality & Care",
  mission:
    "At Southern Bro Enterprises we hold a strong ethical and moral position in helping our communities thrive. We all have a story, including us, and the company is designed to help local people, businesses, and community partners grow with practical support and responsive care.",
  originalIntro:
    "At Southern Bro Enterprises we hold a Strong Ethical and Moral Position in helping our Communities thrive, we all have a story; including us! Relax in knowing your community has your back. We want to see you grow and help our community with your business. We provide a large variety of Business Support Services & Solutions.",
  servicesIntro:
    "Southern Bro Enterprises provides a broad variety of business support services, customer-facing service brands, and community-minded programs under one parent company.",
  whatWeOffer:
    "At Southern Bro Enterprises, we strive to support and lead our local businesses in our communities to success. We offer a bunch of brands that provide many services.",
  currentBrandsLine:
    "Current brands include The Southern Bro parent company, VaBizHelp business services, VA Recovery Services community support, and Ticket Vibez event services.",
};

export const hopeGrantProgram = {
  title: "The H.O.P.E. Grant Aid",
  founderLine: "Established by William Soteria",
  summary:
    "The H.O.P.E. Grant Program, short for Help Operations Powering Equality, is presented as a Southern Bro Enterprises initiative created to promote educational access, economic opportunity, and community betterment.",
  description:
    "The H.O.P.E. Grant Program supports people and community projects that demonstrate financial need and a strong desire to pursue education, training, or betterment work that strengthens their communities.",
  originalParagraphs: [
    "Southern Bro Enterprises LLC (the Parent Company) hereby establishes the HOPE Grant Program (Help Operations Powering Equality) founded by Equity Partner William Soteria, for the express purpose of promoting educational access, economic opportunity, and community betterment services.",
    "The program is intended to support individuals or community projects that demonstrate financial need and a desire to pursue education, betterment, or training that contributes to the advancement and strengthening of their communities and community members.",
    "The program is administered pursuant to the Company’s discretionary authority and, where applicable, is intended to comply with Section 127 of the Internal Revenue Code, as amended, and applicable Treasury Regulations governing employer-provided educational assistance programs.",
    "Eligible educational assistance may include tuition, fees, books, supplies, equipment, and other necessary expenses related to enrollment in accredited colleges, universities, vocational schools, trade programs, certification courses, or continuing education initiatives.",
    "Funds are limited and each application or request is reviewed case by case based on available funding, educational need, financial hardship, and alignment with community betterment objectives.",
  ],
  supportTypes: [
    "Tuition, fees, books, supplies, and equipment tied to eligible education",
    "Vocational, trade, certification, and continuing education support",
    "Community betterment projects reviewed case by case",
    "Aid decisions based on need, alignment, and available company funds",
  ],
  legalNote:
    "Awards depend on fund availability and managerial approval. The program is discretionary, reviewed case by case, and does not guarantee future assistance.",
};

export const communityNetworks: CommunityNetwork[] = [
  {
    name: "Southern Bro Enterprises",
    description: "Parent company and umbrella support system for the brand family.",
  },
  {
    name: "VaBizHelp",
    description:
      "Business services and support network connected to the broader company structure.",
  },
  {
    name: "VA Recovery Services",
    description: "Community aid, advocacy, and stability-focused support initiatives.",
  },
  {
    name: "Va Ticket Vibez",
    description: "Event and ticket support brand focused on access, promotions, and customer support.",
  },
];

export const contactLines: ContactLine[] = [
  {
    label: "General Support",
    value: "Info@SouthernBroEnterprises.com",
    href: "mailto:Info@SouthernBroEnterprises.com",
  },
  {
    label: "Call or Text",
    value: "(757) 300-1070",
    href: "tel:+17573001070",
  },
];

export const businessHours = [
  "Monday - Friday: 9:00 AM - 9:00 PM EST",
  "Saturday - Sunday: 11:00 AM - 7:00 PM EST",
];
