"use client";

import Image from "next/image";
import Link from "next/link";
import BrandStrip from "@/components/brand-strip";
import { useLanguage } from "@/components/language-provider";

export default function Hero() {
  const { messages } = useLanguage();

  return (
    <section className="relative overflow-hidden border-b border-white/10 bg-[#090312]" id="top">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,79,216,0.35),_transparent_26%),radial-gradient(circle_at_20%_40%,_rgba(142,43,255,0.28),_transparent_30%),radial-gradient(circle_at_80%_30%,_rgba(30,167,255,0.16),_transparent_22%),linear-gradient(180deg,_#090312_0%,_#14061f_48%,_#090312_100%)]" />
      <div className="absolute left-1/2 top-20 h-72 w-72 -translate-x-1/2 rounded-full bg-fuchsia-500/20 blur-3xl" />
      <div className="absolute bottom-0 left-0 h-56 w-56 rounded-full bg-violet-600/15 blur-3xl" />
      <div className="absolute bottom-8 right-0 h-64 w-64 rounded-full bg-sky-500/10 blur-3xl" />

      <div className="relative mx-auto flex max-w-7xl flex-col items-center px-4 py-12 text-center sm:px-6 md:py-24">
        <div className="relative flex items-center justify-center">
          <div className="absolute h-44 w-44 rounded-full bg-fuchsia-500/25 blur-3xl md:h-72 md:w-72 xl:h-80 xl:w-80" />
          <div className="absolute h-56 w-56 rounded-full border border-fuchsia-300/20 bg-white/5 blur-2xl md:h-80 md:w-80 xl:h-[26rem] xl:w-[26rem]" />
          <Image
            src="/LOGOS/SouthernBro-Enterprises-Logo.png"
            alt="Southern Bro Enterprises logo"
            width={420}
            height={420}
            priority
            className="relative w-[168px] drop-shadow-[0_0_42px_rgba(255,79,216,0.58)] sm:w-[220px] md:w-[320px] xl:w-[400px]"
          />
        </div>

        <p className="mt-4 text-[0.6rem] font-semibold uppercase tracking-[0.24em] text-fuchsia-200 sm:text-xs md:mt-5 md:text-sm md:tracking-[0.38em]">
          {messages.hero.eyebrow}
        </p>

        <h1 className="mt-4 max-w-5xl text-[2rem] font-black uppercase tracking-[0.03em] text-white sm:text-4xl md:mt-5 md:text-6xl">
          {messages.hero.title}
        </h1>

        <div className="mt-6 max-w-6xl rounded-[1.35rem] border border-[#f5d483]/20 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02))] px-4 py-4 shadow-[0_0_60px_rgba(255,79,216,0.12)] sm:px-6 md:mt-7 md:rounded-[2rem] md:px-10 md:py-8">
          <p className="text-[1.8rem] font-black uppercase tracking-[0.03em] text-white sm:text-3xl md:text-5xl xl:text-6xl">
            {messages.hero.tagline}
          </p>
        </div>

        <p className="mt-5 max-w-3xl text-sm leading-7 text-[#ddd2eb] sm:text-lg md:text-xl md:leading-8">
          {messages.hero.intro}
        </p>

        <p className="mt-4 text-xs font-semibold uppercase tracking-[0.16em] text-[#ffb8f0] sm:text-sm md:tracking-[0.2em]">
          {messages.hero.serviceArea}
        </p>

        <div className="mt-8 flex w-full max-w-xl flex-col gap-3 sm:max-w-none sm:flex-row sm:flex-wrap sm:justify-center sm:gap-4">
          <Link
            href="/what-we-do"
            className="rounded-full border border-white/15 bg-white/6 px-6 py-3.5 text-center text-sm font-bold uppercase tracking-[0.16em] text-white transition hover:bg-white/10"
          >
            {messages.hero.whatWeDo}
          </Link>
          <Link
            href="/request-quote"
            className="rounded-full border border-fuchsia-300/60 bg-[linear-gradient(90deg,_rgba(193,41,255,0.95),_rgba(142,43,255,0.95))] px-6 py-3.5 text-center text-sm font-bold uppercase tracking-[0.16em] text-white shadow-[0_0_30px_rgba(193,41,255,0.35)] transition hover:scale-[1.02] hover:shadow-[0_0_36px_rgba(255,79,216,0.45)]"
          >
            {messages.hero.requestServices}
          </Link>
          <Link
            href="tel:+17573001070"
            className="rounded-full border border-[#d4a84f]/60 bg-white/5 px-6 py-3.5 text-center text-sm font-bold uppercase tracking-[0.16em] text-[#f7e2ff] transition hover:bg-white/10"
          >
            {messages.hero.callUs}
          </Link>
        </div>

        <div className="mt-5 flex flex-wrap items-center justify-center gap-3">
          <p className="text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-[#f5d483] sm:text-xs">
            Featured Services
          </p>
          <Link
            href="/landscaping"
            className="rounded-full border border-emerald-300/45 bg-emerald-400/12 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-[#f3fff4] transition hover:bg-emerald-400/18"
          >
            Landscaping Services
          </Link>
          <Link
            href="/detailing"
            className="rounded-full border border-[#d4a84f]/40 bg-[#d4a84f]/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-[#fff4da] transition hover:bg-[#d4a84f]/16"
          >
            Detailing Services
          </Link>
        </div>

        <BrandStrip />
      </div>
    </section>
  );
}
