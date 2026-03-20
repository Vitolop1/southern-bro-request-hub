"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/components/language-provider";
import { priorityServices } from "@/lib/site-content";

type PriorityServicesProps = {
  compact?: boolean;
};

export default function PriorityServices({
  compact = false,
}: PriorityServicesProps) {
  const { messages } = useLanguage();

  return (
    <section className="mx-auto max-w-7xl px-6 py-14 md:py-18">
      <div className="mx-auto mb-10 max-w-3xl text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#ffb8f0]">
          {messages.priorityServices.eyebrow}
        </p>
        <h2 className="mt-4 text-3xl font-black uppercase tracking-[0.05em] text-white md:text-5xl">
          {messages.priorityServices.title}
        </h2>
        <p className="mt-5 text-lg leading-8 text-[#d9d1e8]">
          {messages.priorityServices.intro}
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {priorityServices.map((service, index) => (
          <article
            key={service.id}
            className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#13071f]/90 p-7 shadow-[0_0_50px_rgba(193,41,255,0.12)]"
          >
            <div className={`absolute inset-0 bg-gradient-to-br ${service.accent}`} />
            <div className="relative">
              <div className="flex items-center gap-4">
                <Image
                  src={service.logo}
                  alt={`${service.title} logo`}
                  width={88}
                  height={88}
                  className="h-20 w-20 object-contain drop-shadow-[0_0_18px_rgba(255,79,216,0.28)]"
                />
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#ffb8f0]">
                    {service.shortLabel}
                  </p>
                  <h3 className="mt-2 text-xl font-black uppercase tracking-[0.04em] text-white">
                    {service.title}
                  </h3>
                </div>
              </div>

              <p className="mt-5 text-sm leading-7 text-[#e6dcf3]">
                {service.summary}
              </p>

              <ul className="mt-5 space-y-3 text-sm text-[#f7efff]">
                {service.bullets.slice(0, compact ? 3 : service.bullets.length).map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-1.5 h-2.5 w-2.5 rounded-full bg-[#ff4fd8]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <Link
                  href={service.href}
                  className="inline-flex rounded-full border border-fuchsia-300/60 bg-[linear-gradient(90deg,_rgba(193,41,255,0.95),_rgba(142,43,255,0.95))] px-5 py-3 text-sm font-bold uppercase tracking-[0.16em] text-white shadow-[0_0_28px_rgba(193,41,255,0.22)] transition hover:scale-[1.02]"
                >
                  {messages.priorityServices.exploreService}
                </Link>
                <Link
                  href={`/request-quote?service=${encodeURIComponent(service.quoteCategory)}`}
                  className="inline-flex rounded-full border border-white/15 bg-white/6 px-5 py-3 text-sm font-bold uppercase tracking-[0.16em] text-white transition hover:bg-white/12"
                >
                  {messages.priorityServices.ctas[index] ?? service.ctaLabel}
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
