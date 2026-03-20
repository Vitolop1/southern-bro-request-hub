import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import PriorityServices from "@/components/priority-services";
import ServiceForm from "@/components/service-form";
import { quoteBenefits, requestCategoryOptions } from "@/lib/site-content";

type RequestQuotePageProps = {
  searchParams: Promise<{
    service?: string;
  }>;
};

export const metadata: Metadata = {
  title: "Request a Quote | Southern Bro Enterprises",
  description:
    "Submit a professional quote request for consulting, detailing, ticketing, delivery, community support, or other Southern Bro services.",
};

export default async function RequestQuotePage({
  searchParams,
}: RequestQuotePageProps) {
  const { service } = await searchParams;
  const selectedCategory = requestCategoryOptions.includes(service || "")
    ? (service as string)
    : requestCategoryOptions[0];

  return (
    <main className="min-h-screen bg-[#090312] text-white">
      <Navbar />

      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,79,216,0.2),_transparent_24%),linear-gradient(180deg,_#090312_0%,_#14061f_55%,_#090312_100%)]" />
        <div className="relative mx-auto max-w-7xl px-6 py-16 md:py-20">
          <div className="max-w-4xl">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#ffb8f0]">
              Request Quote
            </p>
            <h1 className="mt-4 text-4xl font-black uppercase tracking-[0.05em] text-white md:text-6xl">
              One professional intake page for Southern Bro services
            </h1>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-[#ddd2eb]">
              Submit one organized request for consulting, detailing, ticketing,
              delivery support, and other Southern Bro service inquiries.
            </p>
          </div>
        </div>
      </section>

      <PriorityServices compact />

      <section className="mx-auto max-w-7xl px-6 pb-16 md:pb-20">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div className="space-y-6">
            <div className="rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(26,8,48,0.96),rgba(11,4,22,0.98))] p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#ffb8f0]">
                Why This Page Matters
              </p>
              <h2 className="mt-4 text-3xl font-black uppercase tracking-[0.05em] text-white">
                Clear and centralized quote capture
              </h2>

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

            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#ffb8f0]">
                Quick Access
              </p>
              <div className="mt-5 flex flex-wrap gap-3">
                {requestCategoryOptions.slice(0, 6).map((option) => (
                  <Link
                    key={option}
                    href={`/request-quote?service=${encodeURIComponent(option)}`}
                    className="rounded-full border border-white/15 bg-white/6 px-4 py-2 text-xs font-bold uppercase tracking-[0.14em] text-white transition hover:bg-white/12"
                  >
                    {option}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <ServiceForm
            key={selectedCategory}
            defaultCategory={selectedCategory}
            title="Request a Quote"
            description="Submit your request with enough detail for the Southern Bro team to review scope, timing, and the right next step."
            submitLabel="Submit Quote Request"
          />
        </div>
      </section>

      <Footer />
    </main>
  );
}
