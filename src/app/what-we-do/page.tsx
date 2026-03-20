import Link from "next/link";
import AboutSection from "@/components/about-section";
import BrandDirectory from "@/components/brand-directory";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import {
  communityNetworks,
  companyOverview,
  hopeGrantProgram,
} from "@/lib/company-data";

export default function WhatWeDoPage() {
  return (
    <main className="min-h-screen bg-[#090312] text-white">
      <Navbar />

      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,79,216,0.24),_transparent_24%),linear-gradient(180deg,_#090312_0%,_#14061f_55%,_#090312_100%)]" />
        <div className="relative mx-auto max-w-7xl px-6 py-16 md:py-20">
          <div className="max-w-5xl">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#ffb8f0]">
              What We Do
            </p>
            <h1 className="mt-4 text-4xl font-black uppercase tracking-[0.05em] text-white md:text-6xl">
              Business support, branded services, and community betterment
            </h1>
            <p className="mt-5 max-w-4xl text-lg leading-8 text-[#ddd2eb]">
              {companyOverview.mission}
            </p>
          </div>
        </div>
      </section>

      <AboutSection compact />

      <section className="mx-auto max-w-7xl px-6 py-8 md:py-10">
        <div className="rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(26,8,48,0.95),rgba(11,4,22,0.98))] p-8 md:p-10">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#ffb8f0]">
            Current Networks
          </p>
          <h2 className="mt-4 text-3xl font-black uppercase tracking-[0.05em] text-white md:text-4xl">
            Southern Bro operates across these service lanes
          </h2>

          <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {communityNetworks.map((network) => (
              <article
                key={network.name}
                className="rounded-[1.5rem] border border-white/10 bg-white/5 p-6"
              >
                <h3 className="text-xl font-black uppercase tracking-[0.04em] text-white">
                  {network.name}
                </h3>
                <p className="mt-3 text-sm leading-7 text-[#ddd2eb]">
                  {network.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-12 md:py-16">
        <div className="mb-10 max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#ffb8f0]">
            Our Branded Services
          </p>
          <h2 className="mt-4 text-3xl font-black uppercase tracking-[0.05em] text-white md:text-4xl">
            A licensed and insured brand family with clear structure
          </h2>
        </div>

        <BrandDirectory />
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-16 md:pb-20">
        <div className="rounded-[2rem] border border-[#d4a84f]/25 bg-[radial-gradient(circle_at_top,_rgba(212,168,79,0.16),_transparent_32%),linear-gradient(180deg,rgba(13,8,22,0.98),rgba(8,3,15,0.98))] p-8 md:p-10">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#f5d483]">
            H.O.P.E. Grant Program
          </p>
          <h2 className="mt-4 text-3xl font-black uppercase tracking-[0.05em] text-white md:text-4xl">
            Educational access and community betterment support remain part of the story
          </h2>
          <p className="mt-5 max-w-3xl text-base leading-7 text-[#efe5d0]">
            {hopeGrantProgram.description}
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/request-hope-grant-aid"
              className="rounded-full border border-[#d4a84f]/40 bg-[#d4a84f]/10 px-6 py-3 text-center text-sm font-bold uppercase tracking-[0.16em] text-[#f7dfa1] transition hover:bg-[#d4a84f]/16"
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
      </section>

      <Footer />
    </main>
  );
}
