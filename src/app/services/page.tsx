import BrandDirectory from "@/components/brand-directory";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import ServiceForm from "@/components/service-form";

const requestBenefits = [
  "Choose the brand or service line that best matches your request.",
  "Submit the details once through a clean branded intake form.",
  "Let the Southern Bro team review and confirm the next step.",
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-[#090312] text-white">
      <Navbar />

      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,79,216,0.2),_transparent_24%),linear-gradient(180deg,_#090312_0%,_#14061f_55%,_#090312_100%)]" />
        <div className="relative mx-auto max-w-7xl px-6 py-16 md:py-20">
          <div className="max-w-4xl">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#ffb8f0]">
              Brands & Services
            </p>
            <h1 className="mt-4 text-4xl font-black uppercase tracking-[0.05em] text-white md:text-6xl">
              Request professional support from the right Southern Bro brand
            </h1>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-[#ddd2eb]">
              This page brings together the active Southern Bro service brands so
              customers can understand what each one offers before submitting a
              request.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-14 md:py-18">
        <div className="mb-10 max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#ffb8f0]">
            Service Directory
          </p>
          <h2 className="mt-4 text-3xl font-black uppercase tracking-[0.05em] text-white md:text-4xl">
            Every brand with its logo, focus, and service lineup
          </h2>
        </div>

        <BrandDirectory />
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-16 md:pb-20">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div className="rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(26,8,48,0.96),rgba(11,4,22,0.98))] p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#ffb8f0]">
              Request Support
            </p>
            <h2 className="mt-4 text-3xl font-black uppercase tracking-[0.05em] text-white">
              One clean intake flow for multiple service lines
            </h2>
            <p className="mt-4 text-base leading-7 text-[#d9d1e8]">
              Use this form to request support from Southern Bro Enterprises,
              Handyman Services, Landscaping, Creations, Ticket Vibez, or VA
              Recovery Services. Delivery and catering can also be booked through
              the dedicated delivery page.
            </p>

            <div className="mt-8 space-y-4">
              {requestBenefits.map((benefit, index) => (
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
