import AboutSection from "@/components/about-section";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
import ServiceCards from "@/components/service-cards";
import Link from "next/link";

const steps = [
  {
    title: "Choose a Brand",
    description:
      "Pick the exact Southern Bro service line that matches what you need, from delivery to community support.",
  },
  {
    title: "Send the Request",
    description:
      "Use the service request form to submit the details, timeline, and service location.",
  },
  {
    title: "Get Confirmed",
    description:
      "The team reviews the request, confirms next steps, and schedules service or follow-up support.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#090312] text-white">
      <Navbar />
      <Hero />
      <AboutSection />
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

      <section className="mx-auto max-w-7xl px-6 py-12 md:py-16" id="contact">
        <div className="relative overflow-hidden rounded-[2rem] border border-[#d4a84f]/35 bg-[radial-gradient(circle_at_top,_rgba(255,79,216,0.22),_transparent_28%),linear-gradient(135deg,_rgba(9,3,18,1)_0%,_rgba(26,8,48,0.98)_55%,_rgba(11,11,30,0.98)_100%)] p-8 shadow-[0_0_70px_rgba(212,168,79,0.12)] md:p-12">
          <div className="absolute right-0 top-0 h-52 w-52 rounded-full bg-sky-500/10 blur-3xl" />
          <div className="relative grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#f5d483]">
                Service Area & Contact
              </p>
              <h2 className="mt-4 text-3xl font-black uppercase tracking-[0.05em] text-white md:text-5xl">
                Built for Lynchburg, VA and the wider Virginia region
              </h2>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-[#e7dcf3]">
                Southern Bro Enterprises connects customers with business support,
                delivery, property services, event help, and community-focused
                programs through one recognizable brand family.
              </p>
            </div>

            <div className="rounded-[1.75rem] border border-white/10 bg-white/6 p-6 backdrop-blur-sm">
              <div className="space-y-4 text-base text-[#f8f2ff]">
                <p>
                  <span className="font-black uppercase tracking-[0.12em] text-[#ffb8f0]">
                    Phone:
                  </span>{" "}
                  (757) 300-1070
                </p>
                <p>
                  <span className="font-black uppercase tracking-[0.12em] text-[#ffb8f0]">
                    Website:
                  </span>{" "}
                  SouthernBroEnterprises.com
                </p>
                <p>
                  <span className="font-black uppercase tracking-[0.12em] text-[#ffb8f0]">
                    Services:
                  </span>{" "}
                  Business support, delivery, handyman, landscaping, creations,
                  ticketing, and recovery support
                </p>
              </div>

              <div className="mt-6 flex flex-col gap-4 sm:flex-row">
                <Link
                  href="/services"
                  className="rounded-full border border-fuchsia-300/60 bg-[linear-gradient(90deg,_rgba(193,41,255,0.95),_rgba(142,43,255,0.95))] px-6 py-3 text-center text-sm font-bold uppercase tracking-[0.16em] text-white shadow-[0_0_30px_rgba(193,41,255,0.28)] transition hover:scale-[1.02]"
                >
                  Request Service
                </Link>
                <Link
                  href="/delivery"
                  className="rounded-full border border-white/15 bg-white/6 px-6 py-3 text-center text-sm font-bold uppercase tracking-[0.16em] text-white transition hover:bg-white/12"
                >
                  Book Delivery
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
