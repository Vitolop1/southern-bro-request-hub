import BrandDirectory from "@/components/brand-directory";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import PriorityServices from "@/components/priority-services";
import ServiceForm from "@/components/service-form";
import { quoteBenefits } from "@/lib/site-content";

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-[#090312] text-white">
      <Navbar />

      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,79,216,0.2),_transparent_24%),linear-gradient(180deg,_#090312_0%,_#14061f_55%,_#090312_100%)]" />
        <div className="relative mx-auto max-w-7xl px-6 py-16 md:py-20">
          <div className="max-w-4xl">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#ffb8f0]">
              Services Overview
            </p>
            <h1 className="mt-4 text-4xl font-black uppercase tracking-[0.05em] text-white md:text-6xl">
              Explore the services Southern Bro offers today
            </h1>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-[#ddd2eb]">
              Browse featured services, review the full brand directory, and
              choose the request path that matches your needs.
            </p>
          </div>
        </div>
      </section>

      <PriorityServices compact />

      <section className="mx-auto max-w-7xl px-6 py-14 md:py-18">
        <div className="mb-10 max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#ffb8f0]">
            Full Service Directory
          </p>
          <h2 className="mt-4 text-3xl font-black uppercase tracking-[0.05em] text-white md:text-4xl">
            Every brand with its logo, focus, service lineup, and request path
          </h2>
        </div>

        <BrandDirectory />
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-16 md:pb-20">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div className="rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(26,8,48,0.96),rgba(11,4,22,0.98))] p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#ffb8f0]">
              Request Quote
            </p>
            <h2 className="mt-4 text-3xl font-black uppercase tracking-[0.05em] text-white">
              One central intake flow for Southern Bro services
            </h2>
            <p className="mt-4 text-base leading-7 text-[#d9d1e8]">
              Use this form for consulting, detailing, ticketing, handyman,
              community support, and other non-delivery services. Delivery and
              catering can be booked through the dedicated delivery page.
            </p>

            <div className="mt-8 space-y-4">
              {quoteBenefits.map((benefit, index) => (
                <div
                  key={benefit}
                  className="rounded-[1.5rem] border border-white/10 bg-white/5 p-5"
                >
                  <div className="flex items-center gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full border border-fuchsia-300/60 bg-fuchsia-500/15 font-black text-white">
                      {index + 1}
                    </div>
                    <p className="text-sm leading-6 text-[#f6eeff]">{benefit}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <ServiceForm />
        </div>
      </section>

      <Footer />
    </main>
  );
}
