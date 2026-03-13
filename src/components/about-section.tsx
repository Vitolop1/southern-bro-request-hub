import Image from "next/image";
import Link from "next/link";
import { BriefcaseBusiness, Handshake, MapPinned } from "lucide-react";
import { aboutHighlights } from "@/lib/brand-data";

const icons = [BriefcaseBusiness, Handshake, MapPinned];

type AboutSectionProps = {
  compact?: boolean;
};

export default function AboutSection({ compact = false }: AboutSectionProps) {
  return (
    <section id="about" className="mx-auto max-w-7xl px-6 py-16 md:py-20">
      <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <div className="rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(26,8,48,0.95),rgba(11,4,22,0.96))] p-8 shadow-[0_0_60px_rgba(193,41,255,0.1)] md:p-10">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#ffb8f0]">
            About Us
          </p>
          <h2 className="mt-4 text-3xl font-black uppercase tracking-[0.05em] text-white md:text-5xl">
            Southern Bro Enterprises is built to organize multiple service lanes professionally
          </h2>
          <p className="mt-5 text-lg leading-8 text-[#ddd2eb]">
            Southern Bro Enterprises brings together consulting, detailing,
            ticketing, delivery, handyman work, product sales, and
            community-focused programs under one recognizable brand family.
          </p>
          <p className="mt-4 text-base leading-7 text-[#d9d1e8]">
            The goal is simple: make it easier for customers, partners, and
            community members to understand what services are available, what is
            being prioritized right now, and how to request help quickly and
            professionally.
          </p>

          {!compact && (
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/about"
                className="rounded-full border border-fuchsia-300/60 bg-[linear-gradient(90deg,_rgba(193,41,255,0.95),_rgba(142,43,255,0.95))] px-6 py-3 text-center text-sm font-bold uppercase tracking-[0.16em] text-white shadow-[0_0_28px_rgba(193,41,255,0.25)] transition hover:scale-[1.02]"
              >
                Learn More About Us
              </Link>
              <Link
                href="/request-quote"
                className="rounded-full border border-white/15 bg-white/6 px-6 py-3 text-center text-sm font-bold uppercase tracking-[0.16em] text-white transition hover:bg-white/12"
              >
                Request a Quote
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
              The company connects multiple service identities without losing the
              core Southern Bro brand, which makes it possible to emphasize
              high-priority services without abandoning the rest of the brand
              family.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-8 grid gap-5 md:grid-cols-3">
        {aboutHighlights.map((highlight, index) => {
          const Icon = icons[index];
          return (
            <article
              key={highlight.title}
              className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full border border-fuchsia-300/60 bg-fuchsia-500/15 text-white shadow-[0_0_24px_rgba(255,79,216,0.2)]">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 text-xl font-black uppercase tracking-[0.04em] text-white">
                {highlight.title}
              </h3>
              <p className="mt-3 leading-7 text-[#d9d1e8]">
                {highlight.description}
              </p>
            </article>
          );
        })}
      </div>
    </section>
  );
}
