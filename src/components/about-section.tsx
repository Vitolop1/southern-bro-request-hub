"use client";

import Image from "next/image";
import Link from "next/link";
import { BriefcaseBusiness, Handshake, MapPinned } from "lucide-react";
import { aboutHighlights } from "@/lib/brand-data";
import { communityNetworks } from "@/lib/company-data";
import { useLanguage } from "@/components/language-provider";

const icons = [BriefcaseBusiness, Handshake, MapPinned];

type AboutSectionProps = {
  compact?: boolean;
};

export default function AboutSection({ compact = false }: AboutSectionProps) {
  const { messages } = useLanguage();

  return (
    <section id="about" className="mx-auto max-w-7xl px-6 py-16 md:py-20">
      <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <div className="rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(26,8,48,0.95),rgba(11,4,22,0.96))] p-8 shadow-[0_0_60px_rgba(193,41,255,0.1)] md:p-10">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#ffb8f0]">
            {messages.aboutSection.eyebrow}
          </p>
          <h2 className="mt-4 text-3xl font-black uppercase tracking-[0.05em] text-white md:text-5xl">
            {messages.aboutSection.title}
          </h2>
          <p className="mt-5 text-lg leading-8 text-[#ddd2eb]">
            {messages.aboutSection.intro}
          </p>
          <p className="mt-4 text-base leading-7 text-[#d9d1e8]">
            {messages.aboutSection.body}
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

          {!compact && (
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/what-we-do"
                className="rounded-full border border-fuchsia-300/60 bg-[linear-gradient(90deg,_rgba(193,41,255,0.95),_rgba(142,43,255,0.95))] px-6 py-3 text-center text-sm font-bold uppercase tracking-[0.16em] text-white shadow-[0_0_28px_rgba(193,41,255,0.25)] transition hover:scale-[1.02]"
              >
                {messages.aboutSection.ctaPrimary}
              </Link>
              <Link
                href="/request-quote"
                className="rounded-full border border-white/15 bg-white/6 px-6 py-3 text-center text-sm font-bold uppercase tracking-[0.16em] text-white transition hover:bg-white/12"
              >
                {messages.aboutSection.ctaSecondary}
              </Link>
            </div>
          )}
        </div>

        <div className="rounded-[2rem] border border-white/10 bg-[radial-gradient(circle_at_top,_rgba(255,79,216,0.18),_transparent_30%),linear-gradient(180deg,rgba(13,5,26,0.98),rgba(7,2,14,0.98))] p-8 md:p-10">
          <div className="flex flex-col items-center text-center">
            <Image
              src="/LOGOS/SouthernBro-Enterprises-Logo.png"
              alt="Southern Bro Enterprises logo"
              width={230}
              height={230}
              className="w-[180px] drop-shadow-[0_0_28px_rgba(255,79,216,0.38)] md:w-[220px]"
            />
            <p className="mt-5 max-w-xl text-base leading-7 text-[#e7dcf3]">
              {messages.aboutSection.logoBlurb}
            </p>
          </div>
        </div>
      </div>

      <div className="mt-8 grid gap-5 md:grid-cols-3">
        {aboutHighlights.map((highlight, index) => {
          const Icon = icons[index];
          const localizedHighlight = messages.aboutSection.highlights[index];
          return (
            <article
              key={highlight.title}
              className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full border border-fuchsia-300/60 bg-fuchsia-500/15 text-white shadow-[0_0_24px_rgba(255,79,216,0.2)]">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 text-xl font-black uppercase tracking-[0.04em] text-white">
                {localizedHighlight?.title ?? highlight.title}
              </h3>
              <p className="mt-3 leading-7 text-[#d9d1e8]">
                {localizedHighlight?.description ?? highlight.description}
              </p>
            </article>
          );
        })}
      </div>
    </section>
  );
}
