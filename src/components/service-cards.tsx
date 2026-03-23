"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/components/language-provider";
import { brandProfiles } from "@/lib/brand-data";

export default function ServiceCards() {
  const { messages } = useLanguage();
  const brandOrder = {
    high: 0,
    medium: 1,
    low: 2,
  } as const;

  const sortedBrands = [...brandProfiles].sort(
    (left, right) =>
      brandOrder[left.priorityTier] - brandOrder[right.priorityTier] ||
      Number(left.status === "coming-soon") - Number(right.status === "coming-soon")
  );

  return (
    <section
      id="brands"
      className="relative mx-auto max-w-7xl px-4 py-14 sm:px-6 md:py-20"
    >
      <div className="mx-auto mb-12 max-w-3xl text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#ffb8f0]">
          {messages.serviceCards.eyebrow}
        </p>
        <h2 className="mt-4 text-2xl font-black uppercase tracking-[0.05em] text-white sm:text-3xl md:text-5xl">
          {messages.serviceCards.title}
        </h2>
        <p className="mt-5 text-base leading-7 text-[#d9d1e8] md:text-lg md:leading-8">
          {messages.serviceCards.intro}
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {sortedBrands.map((brand) => (
          <article
            key={brand.name}
            id={brand.id}
            className={[
              "group relative overflow-hidden rounded-[1.6rem] border p-5 shadow-[0_0_60px_rgba(126,34,206,0.18)] backdrop-blur-sm md:rounded-[2rem] md:p-6",
              brand.status === "coming-soon"
                ? "border-white/5 bg-black/45"
                : "border-white/10 bg-[#13071f]/85",
              brand.featured ? "md:col-span-2" : "",
            ].join(" ")}
          >
            <div className={`absolute inset-0 bg-gradient-to-br ${brand.accent}`} />
            {brand.status === "coming-soon" && (
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(4,3,10,0.76),rgba(4,3,10,0.84))]" />
            )}
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/60 to-transparent" />

            <div className="relative grid items-center gap-5 lg:grid-cols-[220px_1fr]">
              <div className="flex justify-center">
                <Image
                  src={brand.logo}
                  alt={`${brand.name} logo`}
                  width={220}
                  height={220}
                  className={[
                    "h-auto w-[138px] transition duration-300 sm:w-[160px] md:w-[200px]",
                    brand.status === "coming-soon"
                      ? "grayscale opacity-65"
                      : "drop-shadow-[0_0_25px_rgba(255,79,216,0.35)] group-hover:scale-[1.03]",
                  ].join(" ")}
                />
              </div>

              <div>
                <div className="flex flex-wrap items-center gap-3">
                  <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#ffb8f0]">
                    {brand.shortLabel}
                  </p>
                  {brand.status === "coming-soon" && (
                    <span className="rounded-full border border-[#d4a84f]/35 bg-black/30 px-3 py-1 text-[0.65rem] font-bold uppercase tracking-[0.14em] text-[#f7dfa1]">
                      {messages.serviceCards.comingSoon}
                    </span>
                  )}
                </div>
                <h3 className="text-xl font-black uppercase tracking-[0.04em] text-white sm:text-2xl">
                  {brand.name}
                </h3>
                <p className="mt-3 max-w-2xl text-sm leading-7 text-[#e7dcf3] sm:text-base">
                  {brand.summary}
                </p>

                <ul className="mt-5 grid gap-3 text-sm text-[#fff8ff] sm:text-base md:grid-cols-2">
                  {brand.services.map((service) => (
                    <li key={service} className="flex items-start gap-3">
                      <span className="mt-2 h-2.5 w-2.5 rounded-full bg-[#ff4fd8]" />
                      <span>{service}</span>
                    </li>
                  ))}
                </ul>

                <p className="mt-5 text-sm leading-6 text-[#d9d1e8]">
                  {brand.audience}
                </p>

                <div className="mt-6">
                  <div className="flex flex-col gap-3 sm:flex-row">
                    <Link
                      href={brand.pageHref}
                      className="inline-flex rounded-full border border-white/15 bg-white/6 px-5 py-3 text-sm font-bold uppercase tracking-[0.16em] text-white transition hover:bg-white/12"
                    >
                      {messages.serviceCards.learnMore}
                    </Link>
                    {brand.status === "coming-soon" ? (
                      <span className="inline-flex rounded-full border border-[#d4a84f]/35 bg-black/30 px-5 py-3 text-sm font-bold uppercase tracking-[0.16em] text-[#f7dfa1]">
                        {messages.serviceCards.comingSoon}
                      </span>
                    ) : (
                      <Link
                        href={brand.requestHref}
                        className="inline-flex rounded-full border border-fuchsia-300/60 bg-white/8 px-5 py-3 text-sm font-bold uppercase tracking-[0.16em] text-white transition hover:bg-white/14"
                      >
                        {brand.ctaLabel}
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
