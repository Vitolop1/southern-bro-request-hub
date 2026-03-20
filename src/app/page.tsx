import AboutSection from "@/components/about-section";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
import PriorityServices from "@/components/priority-services";
import ResourcePreview from "@/components/resource-preview";
import ServiceCards from "@/components/service-cards";
import TeamGrid from "@/components/team-grid";
import {
  businessHours,
  companyOverview,
  contactLines,
  hopeGrantProgram,
} from "@/lib/company-data";
import Link from "next/link";

const steps = [
  {
    title: "Choose the Right Page",
    description:
      "Start with What We Do, Meet Our Team, Contact Us, H.O.P.E. Grant Aid, or the service request page depending on what you need.",
  },
  {
    title: "Send the Right Request",
    description:
      "Use the quote form, delivery request, or community support path to submit the details, timing, and service needs.",
  },
  {
    title: "Get Confirmed",
    description:
      "The Southern Bro team reviews the request, confirms next steps, and follows up with scheduling or support details.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#090312] text-white">
      <Navbar />
      <Hero />

      <section className="mx-auto max-w-7xl px-6 py-6 md:py-10">
        <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(26,8,48,0.96),rgba(12,4,23,0.98))] p-8 shadow-[0_0_60px_rgba(193,41,255,0.12)] md:p-10">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#ffb8f0]">
              What Do We Do?
            </p>
            <h2 className="mt-4 text-3xl font-black uppercase tracking-[0.05em] text-white md:text-4xl">
              Cleaner business support, service requests, and community access in one place
            </h2>
            <p className="mt-5 text-base leading-8 text-[#ddd2eb] md:text-lg">
              {companyOverview.mission}
            </p>
            <p className="mt-4 text-sm leading-7 text-[#d9d1e8] md:text-base">
              {companyOverview.whatWeOffer}
            </p>
            <p className="mt-4 text-sm leading-7 text-[#d9d1e8] md:text-base">
              {companyOverview.currentBrandsLine}
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/what-we-do"
                className="rounded-full border border-fuchsia-300/60 bg-[linear-gradient(90deg,_rgba(193,41,255,0.95),_rgba(142,43,255,0.95))] px-6 py-3 text-center text-sm font-bold uppercase tracking-[0.16em] text-white shadow-[0_0_30px_rgba(193,41,255,0.24)] transition hover:scale-[1.02]"
              >
                Learn More
              </Link>
              <Link
                href="tel:+17573001070"
                className="rounded-full border border-white/15 bg-white/6 px-6 py-3 text-center text-sm font-bold uppercase tracking-[0.16em] text-white transition hover:bg-white/12"
              >
                Call Us To Figure Out More
              </Link>
            </div>
          </div>

          <div className="rounded-[2rem] border border-[#d4a84f]/30 bg-[radial-gradient(circle_at_top,_rgba(212,168,79,0.18),_transparent_28%),linear-gradient(180deg,rgba(13,8,22,0.98),rgba(8,3,15,0.98))] p-8 md:p-10">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#f5d483]">
              {hopeGrantProgram.title}
            </p>
            <h2 className="mt-4 text-3xl font-black uppercase tracking-[0.05em] text-white">
              {hopeGrantProgram.founderLine}
            </h2>
            <div className="mt-5 space-y-4">
              {hopeGrantProgram.originalParagraphs.slice(0, 2).map((paragraph) => (
                <p key={paragraph} className="text-sm leading-7 text-[#efe5d0]">
                  {paragraph}
                </p>
              ))}
              <p className="text-sm leading-7 text-[#ddd2eb]">{hopeGrantProgram.legalNote}</p>
            </div>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/request-hope-grant-aid"
                className="rounded-full border border-[#d4a84f]/50 bg-[#d4a84f]/10 px-6 py-3 text-center text-sm font-bold uppercase tracking-[0.16em] text-[#f7dfa1] transition hover:bg-[#d4a84f]/16"
              >
                Request H.O.P.E. Grant Aid
              </Link>
              <Link
                href="/donate-for-hope"
                className="rounded-full border border-white/15 bg-white/6 px-6 py-3 text-center text-sm font-bold uppercase tracking-[0.16em] text-white transition hover:bg-white/12"
              >
                Donate for H.O.P.E.
              </Link>
            </div>
          </div>
        </div>
      </section>

      <AboutSection />

      <PriorityServices />
      <ServiceCards />

      <section className="mx-auto max-w-7xl px-6 py-6 md:py-10">
        <div className="rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(26,8,48,0.96),rgba(12,4,23,0.98))] p-8 shadow-[0_0_60px_rgba(193,41,255,0.12)] md:p-10">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#ffb8f0]">
              How the Request System Works
            </p>
            <h2 className="mt-4 text-3xl font-black uppercase tracking-[0.05em] text-white md:text-4xl">
              Clear steps for booking service
            </h2>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {steps.map((step, index) => (
              <div
                key={step.title}
                className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-fuchsia-300/60 bg-fuchsia-500/15 text-lg font-black text-white shadow-[0_0_24px_rgba(255,79,216,0.3)]">
                  {index + 1}
                </div>
                <h3 className="mt-5 text-xl font-black uppercase tracking-[0.04em] text-white">
                  {step.title}
                </h3>
                <p className="mt-3 leading-7 text-[#d9d1e8]">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-12 md:py-16">
        <div className="mb-10 max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#ffb8f0]">
            Meet Our Team
          </p>
          <h2 className="mt-4 text-3xl font-black uppercase tracking-[0.05em] text-white md:text-4xl">
            Leadership you can contact directly
          </h2>
          <p className="mt-4 text-base leading-7 text-[#d9d1e8]">
            Meet the people behind Southern Bro and use the direct team pages
            for clearer outreach and follow-up.
          </p>
        </div>

        <TeamGrid compact />

        <div className="mt-8">
          <Link
            href="/meet-our-team"
            className="inline-flex rounded-full border border-white/15 bg-white/6 px-5 py-3 text-sm font-bold uppercase tracking-[0.16em] text-white transition hover:bg-white/12"
          >
            Meet Our Team
          </Link>
        </div>
      </section>

      <ResourcePreview />

      <section className="mx-auto max-w-7xl px-6 py-12 md:py-16" id="contact">
        <div className="relative overflow-hidden rounded-[2rem] border border-[#d4a84f]/35 bg-[radial-gradient(circle_at_top,_rgba(255,79,216,0.22),_transparent_28%),linear-gradient(135deg,_rgba(9,3,18,1)_0%,_rgba(26,8,48,0.98)_55%,_rgba(11,11,30,0.98)_100%)] p-8 shadow-[0_0_70px_rgba(212,168,79,0.12)] md:p-12">
          <div className="absolute right-0 top-0 h-52 w-52 rounded-full bg-sky-500/10 blur-3xl" />
          <div className="relative grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#f5d483]">
                Contact Us
              </p>
              <h2 className="mt-4 text-3xl font-black uppercase tracking-[0.05em] text-white md:text-5xl">
                Built for Lynchburg, VA and the wider Virginia region
              </h2>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-[#e7dcf3]">
                Southern Bro Enterprises connects customers with consulting,
                detailing, ticketing, delivery, brand services, and
                community-focused programs through one recognizable brand family.
              </p>
            </div>

            <div className="rounded-[1.75rem] border border-white/10 bg-white/6 p-6 backdrop-blur-sm">
              <div className="space-y-4 text-base text-[#f8f2ff]">
                {contactLines.map((line) => (
                  <p key={line.label}>
                    <span className="font-black uppercase tracking-[0.12em] text-[#ffb8f0]">
                      {line.label}:
                    </span>{" "}
                    {line.href ? (
                      <Link href={line.href} className="text-[#f8f2ff]">
                        {line.value}
                      </Link>
                    ) : (
                      line.value
                    )}
                  </p>
                ))}
              </div>

              <div className="mt-6 space-y-2 text-sm leading-6 text-[#ddd2eb]">
                {businessHours.map((hours) => (
                  <p key={hours}>{hours}</p>
                ))}
              </div>

              <div className="mt-6 flex flex-col gap-4 sm:flex-row">
                <Link
                  href="/contact-us"
                  className="rounded-full border border-fuchsia-300/60 bg-[linear-gradient(90deg,_rgba(193,41,255,0.95),_rgba(142,43,255,0.95))] px-6 py-3 text-center text-sm font-bold uppercase tracking-[0.16em] text-white shadow-[0_0_30px_rgba(193,41,255,0.28)] transition hover:scale-[1.02]"
                >
                  Contact Us
                </Link>
                <Link
                  href="/request-quote"
                  className="rounded-full border border-white/15 bg-white/6 px-6 py-3 text-center text-sm font-bold uppercase tracking-[0.16em] text-white transition hover:bg-white/12"
                >
                  Request Service Here
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
