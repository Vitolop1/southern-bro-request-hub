"use client";

import Link from "next/link";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { useLanguage } from "@/components/language-provider";
import { businessHours, contactLines, leadershipTeam } from "@/lib/company-data";

export default function ContactUsPage() {
  const { messages } = useLanguage();

  return (
    <main className="min-h-screen bg-[#090312] text-white">
      <Navbar />

      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,79,216,0.18),_transparent_24%),linear-gradient(180deg,_#090312_0%,_#14061f_55%,_#090312_100%)]" />
        <div className="relative mx-auto max-w-7xl px-4 py-14 sm:px-6 md:py-20">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#ffb8f0]">
            {messages.contactPage.eyebrow}
          </p>
          <h1 className="mt-4 text-4xl font-black uppercase tracking-[0.05em] text-white md:text-6xl">
            {messages.contactPage.title}
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-[#ddd2eb]">
            {messages.contactPage.intro}
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 md:py-18">
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(26,8,48,0.95),rgba(11,4,22,0.98))] p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#ffb8f0]">
              {messages.common.leadershipContacts}
            </p>
            <div className="mt-6 space-y-4">
              {leadershipTeam.map((member) => (
                <div
                  key={member.slug}
                  className="rounded-[1.5rem] border border-white/10 bg-white/5 p-5"
                >
                  <p className="text-sm font-bold uppercase tracking-[0.12em] text-white">
                    {member.name}
                  </p>
                  <p className="mt-1 text-sm text-[#f7dcff]">{member.role}</p>
                  <Link
                    href={`mailto:${member.contactEmail}`}
                    className="mt-3 inline-flex text-sm text-[#ddd2eb] underline decoration-fuchsia-300/50 underline-offset-4"
                  >
                    {member.contactEmail}
                  </Link>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#ffb8f0]">
                {messages.common.generalContact}
              </p>
              <div className="mt-6 space-y-4 text-base leading-7 text-[#f5efff]">
                {contactLines.map((line, index) => (
                  <p key={line.label}>
                    <span className="font-black uppercase tracking-[0.12em] text-[#ffb8f0]">
                      {messages.contactPage.contactLabels[index] ?? line.label}:
                    </span>{" "}
                    {line.href ? (
                      <Link href={line.href} className="text-[#f5efff]">
                        {line.value}
                      </Link>
                    ) : (
                      line.value
                    )}
                  </p>
                ))}
              </div>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#ffb8f0]">
                {messages.common.businessHours}
              </p>
              <div className="mt-4 space-y-3 text-base leading-7 text-[#ddd2eb]">
                {businessHours.map((hours) => (
                  <p key={hours}>{hours}</p>
                ))}
              </div>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#ffb8f0]">
                {messages.common.nextBestStep}
              </p>
              <div className="mt-6 flex flex-col gap-4 sm:flex-row">
                <Link
                  href="/request-quote"
                  className="rounded-full border border-fuchsia-300/60 bg-[linear-gradient(90deg,_rgba(193,41,255,0.95),_rgba(142,43,255,0.95))] px-6 py-3 text-center text-sm font-bold uppercase tracking-[0.16em] text-white shadow-[0_0_28px_rgba(193,41,255,0.24)] transition hover:scale-[1.02]"
                >
                  {messages.common.requestService}
                </Link>
                <Link
                  href="tel:+17573001070"
                  className="rounded-full border border-white/15 bg-white/6 px-6 py-3 text-center text-sm font-bold uppercase tracking-[0.16em] text-white transition hover:bg-white/12"
                >
                  {messages.common.callUs}
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
