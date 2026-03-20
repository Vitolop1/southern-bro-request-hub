"use client";

import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import TeamGrid from "@/components/team-grid";
import { useLanguage } from "@/components/language-provider";
import { communityNetworks } from "@/lib/company-data";

export default function MeetOurTeamPage() {
  const { messages } = useLanguage();

  return (
    <main className="min-h-screen bg-[#090312] text-white">
      <Navbar />

      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,79,216,0.22),_transparent_24%),linear-gradient(180deg,_#090312_0%,_#14061f_55%,_#090312_100%)]" />
        <div className="relative mx-auto max-w-7xl px-6 py-16 md:py-20">
          <div className="max-w-4xl">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#ffb8f0]">
              {messages.teamPage.eyebrow}
            </p>
            <h1 className="mt-4 text-4xl font-black uppercase tracking-[0.05em] text-white md:text-6xl">
              {messages.teamPage.title}
            </h1>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-[#ddd2eb]">
              {messages.teamPage.intro}
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-14 md:py-18">
        <TeamGrid />
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-16 md:pb-20">
        <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 md:p-10">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#ffb8f0]">
            {messages.teamPage.networksEyebrow}
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            {communityNetworks.map((network) => (
              <div
                key={network.name}
                className="rounded-full border border-white/10 bg-white/6 px-4 py-2 text-xs font-bold uppercase tracking-[0.14em] text-[#f7dcff]"
              >
                {network.name}
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
