import Image from "next/image";
import Link from "next/link";

type BrandCard = {
  name: string;
  logo: string;
  summary: string;
  services: string[];
  href: string;
  cta: string;
  accent: string;
  featured?: boolean;
};

const brands: BrandCard[] = [
  {
    name: "Southern Bro Enterprises",
    logo: "/LOGOS/SouthernBro-Enterprises-Logo.png",
    summary: "Parent company support for business growth, operations, and logistics.",
    services: [
      "Business start-ups",
      "Business consulting",
      "Logistics and management aid",
      "Operational support services",
    ],
    href: "/services",
    cta: "Request Business Help",
    accent: "from-fuchsia-500/35 via-violet-500/20 to-transparent",
  },
  {
    name: "Southern Bro Delivery & Catering",
    logo: "/LOGOS/SouthernBro-Delivery-Catering-Logo.png",
    summary: "Fast delivery, event support, catering coordination, and transport help.",
    services: [
      "Event catering",
      "Personal shopping",
      "Logistics delivery",
      "Equipment transport",
    ],
    href: "/delivery",
    cta: "Book Delivery",
    accent: "from-cyan-500/30 via-fuchsia-500/15 to-transparent",
  },
  {
    name: "Southern Bro Handyman Services",
    logo: "/LOGOS/SouthernBro-Handyman-Services-Logo.png",
    summary: "Residential and commercial repair support with a practical service-first approach.",
    services: [
      "Simple repairs",
      "Furniture assembly",
      "Fixture installation",
      "Property turnover inspections",
    ],
    href: "/services",
    cta: "Request Handyman Help",
    accent: "from-amber-400/25 via-fuchsia-500/18 to-transparent",
  },
  {
    name: "Southern Bro Landscaping",
    logo: "/LOGOS/SouthernBro-Landscaping-Logo.png",
    summary: "Outdoor property care for homeowners, rentals, and recurring maintenance clients.",
    services: [
      "Lawn maintenance",
      "Seasonal cleanup",
      "Outdoor property maintenance",
      "Recurring service contracts",
    ],
    href: "/services",
    cta: "Book Landscaping",
    accent: "from-emerald-400/18 via-fuchsia-500/20 to-transparent",
  },
  {
    name: "Southern Bro Creations / Wax Melt Bros",
    logo: "/LOGOS/SouthernBro-Creations-Logo.png",
    summary: "Creative product line featuring wax melts, gift bundles, and custom fragrances.",
    services: [
      "Wax melt products",
      "Warmer bundles",
      "Gift sets",
      "Seasonal and custom scents",
    ],
    href: "/services",
    cta: "Shop or Inquire",
    accent: "from-pink-500/35 via-violet-500/18 to-transparent",
  },
  {
    name: "Ticket Vibez",
    logo: "/LOGOS/TicketVibez-Logo.png",
    summary: "Ticket access, promotional support, and event-facing service coordination.",
    services: [
      "Event ticketing support",
      "Ticket bundles",
      "Community event access programs",
      "Promotional campaign support",
    ],
    href: "/services",
    cta: "Request Event Support",
    accent: "from-sky-500/35 via-blue-500/20 to-transparent",
  },
  {
    name: "VA Recovery Services",
    logo: "/LOGOS/VA-Recovery-Services-Logo.png",
    summary: "Community-focused support services tied to recovery, advocacy, and stability programs.",
    services: [
      "Community support",
      "Stability programs",
      "Recovery assistance",
      "Advocacy initiatives",
    ],
    href: "/services",
    cta: "Request Community Support",
    accent: "from-[#d4a84f]/35 via-[#1e3a8a]/20 to-transparent",
    featured: true,
  },
];

export default function ServiceCards() {
  return (
    <section
      id="brands"
      className="relative mx-auto max-w-7xl px-6 py-16 md:py-20"
    >
      <div className="mx-auto mb-12 max-w-3xl text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#ffb8f0]">
          Brands & Services
        </p>
        <h2 className="mt-4 text-3xl font-black uppercase tracking-[0.05em] text-white md:text-5xl">
          Integrated logos, clear services, one strong Southern Bro identity
        </h2>
        <p className="mt-5 text-lg leading-8 text-[#d9d1e8]">
          Each block below mirrors the flyer direction your supervisor wants,
          but in a cleaner website format that is easier to scan and easier to
          build in Squarespace.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {brands.map((brand) => (
          <article
            key={brand.name}
            className={[
              "group relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#13071f]/85 p-6 shadow-[0_0_60px_rgba(126,34,206,0.18)] backdrop-blur-sm",
              brand.featured ? "md:col-span-2" : "",
            ].join(" ")}
          >
            <div className={`absolute inset-0 bg-gradient-to-br ${brand.accent}`} />
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/60 to-transparent" />

            <div className="relative grid items-center gap-6 lg:grid-cols-[220px_1fr]">
              <div className="flex justify-center">
                <Image
                  src={brand.logo}
                  alt={`${brand.name} logo`}
                  width={220}
                  height={220}
                  className="h-auto w-[170px] drop-shadow-[0_0_25px_rgba(255,79,216,0.35)] transition duration-300 group-hover:scale-[1.03] md:w-[200px]"
                />
              </div>

              <div>
                <h3 className="text-2xl font-black uppercase tracking-[0.04em] text-white">
                  {brand.name}
                </h3>
                <p className="mt-3 max-w-2xl text-base leading-7 text-[#e7dcf3]">
                  {brand.summary}
                </p>

                <ul className="mt-5 grid gap-3 text-base text-[#fff8ff] md:grid-cols-2">
                  {brand.services.map((service) => (
                    <li key={service} className="flex items-start gap-3">
                      <span className="mt-2 h-2.5 w-2.5 rounded-full bg-[#ff4fd8]" />
                      <span>{service}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-6">
                  <Link
                    href={brand.href}
                    className="inline-flex rounded-full border border-fuchsia-300/60 bg-white/8 px-5 py-3 text-sm font-bold uppercase tracking-[0.16em] text-white transition hover:bg-white/14"
                  >
                    {brand.cta}
                  </Link>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
