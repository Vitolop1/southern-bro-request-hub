"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/components/language-provider";
import { brandProfiles, getHomepageBrandRank } from "@/lib/brand-data";

type BrandDirectoryProps = {
  maxServices?: number;
};

export default function BrandDirectory({
  maxServices = 3,
}: BrandDirectoryProps) {
  const { messages } = useLanguage();
  const brandOrder = {
    high: 0,
    medium: 1,
    low: 2,
  } as const;

  const sortedBrands = [...brandProfiles].sort(
    (left, right) =>
      getHomepageBrandRank(left.id) - getHomepageBrandRank(right.id) ||
      brandOrder[left.priorityTier] - brandOrder[right.priorityTier] ||
      Number(left.status === "coming-soon") - Number(right.status === "coming-soon")
  );

  return (
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
      {sortedBrands.map((brand) => (
        <article
          key={brand.id}
          id={brand.id}
          className={[
            "relative overflow-hidden rounded-[1.5rem] border p-5 md:rounded-[1.75rem] md:p-6",
            brand.status === "coming-soon"
              ? "border-white/5 bg-black/40"
              : "border-white/10 bg-[#12071d]/90",
          ].join(" ")}
        >
          <div className={`absolute inset-0 bg-gradient-to-br ${brand.accent}`} />
          {brand.status === "coming-soon" && (
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(2,2,6,0.7),rgba(2,2,6,0.78))]" />
          )}
          <div className="relative">
            <div className="flex items-center gap-4">
              <Image
                src={brand.logo}
                alt={`${brand.name} logo`}
                width={84}
                height={84}
                className={[
                  "h-16 w-16 object-contain md:h-20 md:w-20",
                  brand.status === "coming-soon"
                    ? "opacity-60 grayscale"
                    : "drop-shadow-[0_0_18px_rgba(255,79,216,0.28)]",
                ].join(" ")}
              />
              <div>
                <div className="flex flex-wrap items-center gap-2">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#ffb8f0]">
                    {brand.shortLabel}
                  </p>
                  {brand.status === "coming-soon" && (
                    <span className="rounded-full border border-[#d4a84f]/40 bg-[#d4a84f]/10 px-2.5 py-1 text-[0.6rem] font-bold uppercase tracking-[0.12em] text-[#f7dfa1]">
                      {messages.serviceCards.comingSoon}
                    </span>
                  )}
                </div>
                <h3 className="mt-1 text-lg font-black uppercase tracking-[0.04em] text-white">
                  {brand.name}
                </h3>
              </div>
            </div>

            <p className="mt-4 text-sm leading-6 text-[#ddd2eb]">
              {brand.description}
            </p>

            <ul className="mt-4 space-y-2 text-sm text-[#f7efff]">
              {brand.services.slice(0, maxServices).map((service) => (
                <li key={service} className="flex items-start gap-3">
                  <span className="mt-1.5 h-2.5 w-2.5 rounded-full bg-[#ff4fd8]" />
                  <span>{service}</span>
                </li>
              ))}
            </ul>

            <div className="mt-5 flex flex-col gap-3 sm:flex-row">
              <Link
                href={brand.pageHref}
                className="inline-flex rounded-full border border-white/15 bg-white/6 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-white transition hover:bg-white/12"
              >
                {messages.serviceCards.viewBrand}
              </Link>
              {brand.status === "coming-soon" ? (
                <span className="inline-flex rounded-full border border-[#d4a84f]/35 bg-black/30 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-[#f7dfa1]">
                  {messages.serviceCards.comingSoon}
                </span>
              ) : (
                <Link
                  href={brand.requestHref}
                  className="inline-flex rounded-full border border-fuchsia-300/60 bg-white/8 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-white transition hover:bg-white/14"
                >
                  {brand.ctaLabel}
                </Link>
              )}
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}
