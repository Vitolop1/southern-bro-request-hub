import Link from "next/link";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { hopeGrantProgram } from "@/lib/company-data";

const donationOptions = [
  "Sponsor education-focused community support",
  "Help cover books, supplies, or approved training needs",
  "Support community betterment projects reviewed by the team",
];

export default function DonateForHopePage() {
  return (
    <main className="min-h-screen bg-[#090312] text-white">
      <Navbar />

      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(212,168,79,0.2),_transparent_24%),linear-gradient(180deg,_#090312_0%,_#14061f_55%,_#090312_100%)]" />
        <div className="relative mx-auto max-w-7xl px-6 py-16 md:py-20">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#f5d483]">
            Donate for H.O.P.E.
          </p>
          <h1 className="mt-4 max-w-5xl text-4xl font-black uppercase tracking-[0.05em] text-white md:text-6xl">
            Support the community mission behind Southern Bro
          </h1>
          <p className="mt-5 max-w-4xl text-lg leading-8 text-[#efe5d0]">
            {hopeGrantProgram.summary}
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-14 md:py-18">
        <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="rounded-[2rem] border border-[#d4a84f]/25 bg-[radial-gradient(circle_at_top,_rgba(212,168,79,0.16),_transparent_32%),linear-gradient(180deg,rgba(13,8,22,0.98),rgba(8,3,15,0.98))] p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#f5d483]">
              Where Support Can Go
            </p>
            <div className="mt-6 space-y-4">
              {donationOptions.map((option) => (
                <div
                  key={option}
                  className="rounded-[1.5rem] border border-white/10 bg-black/20 p-5 text-sm leading-7 text-[#f5efff]"
                >
                  {option}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#ffb8f0]">
              Donation Setup
            </p>
            <h2 className="mt-4 text-3xl font-black uppercase tracking-[0.05em] text-white">
              Keep the page live now, wire payments later
            </h2>
            <p className="mt-4 text-base leading-7 text-[#d9d1e8]">
              There is no live donation processor wired into this repo yet, so
              the safest honest version is to publish the mission and route
              interested supporters into direct contact until payment tooling is
              approved.
            </p>

            <div className="mt-8 flex flex-col gap-4">
              <Link
                href="mailto:Info@SouthernBroEnterprises.com?subject=H.O.P.E.%20Donation%20Inquiry"
                className="rounded-full border border-fuchsia-300/60 bg-[linear-gradient(90deg,_rgba(193,41,255,0.95),_rgba(142,43,255,0.95))] px-6 py-3 text-center text-sm font-bold uppercase tracking-[0.16em] text-white shadow-[0_0_28px_rgba(193,41,255,0.24)] transition hover:scale-[1.02]"
              >
                Email Us About Donating
              </Link>
              <Link
                href="tel:+17573001070"
                className="rounded-full border border-white/15 bg-white/6 px-6 py-3 text-center text-sm font-bold uppercase tracking-[0.16em] text-white transition hover:bg-white/12"
              >
                Call Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
