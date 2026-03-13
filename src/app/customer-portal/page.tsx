import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { portalFeatures } from "@/lib/site-content";

export const metadata: Metadata = {
  title: "Customer Portal | Southern Bro Enterprises",
  description:
    "Preview the future Southern Bro customer portal experience and use the current quote and contact flow while portal access is being planned.",
};

export default function CustomerPortalPage() {
  return (
    <main className="min-h-screen bg-[#090312] text-white">
      <Navbar />

      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,79,216,0.18),_transparent_24%),linear-gradient(180deg,_#090312_0%,_#14061f_55%,_#090312_100%)]" />
        <div className="relative mx-auto max-w-7xl px-6 py-16 md:py-20">
          <div className="max-w-4xl">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#ffb8f0]">
              Customer Portal
            </p>
            <h1 className="mt-4 text-4xl font-black uppercase tracking-[0.05em] text-white md:text-6xl">
              Planned as a phase-two customer convenience layer
            </h1>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-[#ddd2eb]">
              The portal is included in the site structure because it may become
              useful for status updates, shared files, and future client communication,
              but it should not delay the launch of the core quote and service pages.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-14 md:py-18">
        <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(26,8,48,0.95),rgba(11,4,22,0.98))] p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#ffb8f0]">
              Future Portal Features
            </p>
            <div className="mt-6 space-y-4">
              {portalFeatures.map((feature) => (
                <div
                  key={feature}
                  className="rounded-[1.5rem] border border-white/10 bg-white/5 p-5"
                >
                  <p className="text-sm leading-7 text-[#f7efff]">{feature}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#ffb8f0]">
              Current Best Option
            </p>
            <h2 className="mt-4 text-3xl font-black uppercase tracking-[0.05em] text-white">
              Use the quote flow now, add portal access later
            </h2>
            <p className="mt-4 text-base leading-7 text-[#d9d1e8]">
              The most professional current path is to focus on service pages,
              request forms, and follow-up workflows first. Once those are stable,
              the customer portal can be added without distracting from lead capture.
            </p>

            <div className="mt-8 flex flex-col gap-4">
              <Link
                href="/request-quote"
                className="rounded-full border border-fuchsia-300/60 bg-[linear-gradient(90deg,_rgba(193,41,255,0.95),_rgba(142,43,255,0.95))] px-6 py-3 text-center text-sm font-bold uppercase tracking-[0.16em] text-white shadow-[0_0_28px_rgba(193,41,255,0.24)] transition hover:scale-[1.02]"
              >
                Request a Quote
              </Link>
              <Link
                href="/services"
                className="rounded-full border border-white/15 bg-white/6 px-6 py-3 text-center text-sm font-bold uppercase tracking-[0.16em] text-white transition hover:bg-white/12"
              >
                Explore Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
