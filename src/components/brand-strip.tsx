"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/components/language-provider";
import { brandProfiles, getHomepageBrandRank } from "@/lib/brand-data";

type BrandStripProps = {
  hrefPrefix?: string;
};

export default function BrandStrip({ hrefPrefix = "" }: BrandStripProps) {
  const { messages } = useLanguage();
  const orderedBrands = [...brandProfiles].sort(
    (left, right) =>
      getHomepageBrandRank(left.id) - getHomepageBrandRank(right.id) ||
      Number(left.status === "coming-soon") - Number(right.status === "coming-soon")
  );

  return (
    <div className="mt-12 flex w-full gap-4 overflow-x-auto pb-2 snap-x snap-mandatory md:mt-14 md:grid md:max-w-7xl md:grid-cols-2 md:overflow-visible md:pb-0 lg:grid-cols-3 xl:grid-cols-4">
      {orderedBrands.map((brand) => (
        <Link
          key={brand.id}
          href={hrefPrefix ? `${hrefPrefix}#${brand.id}` : brand.pageHref}
          className={[
            "group min-h-[148px] min-w-[280px] snap-start rounded-[1.75rem] border px-4 py-4 text-left backdrop-blur-sm transition sm:min-w-[310px] md:min-w-0 md:px-5 md:py-5 md:rounded-[1.9rem]",
            brand.status === "coming-soon"
              ? "border-white/5 bg-[linear-gradient(180deg,rgba(8,8,12,0.88),rgba(3,3,6,0.96))] opacity-90 hover:border-[#d4a84f]/20 hover:bg-[linear-gradient(180deg,rgba(10,10,14,0.9),rgba(4,4,7,0.98))]"
              : "border-white/10 bg-white/5 hover:border-fuchsia-300/50 hover:bg-white/8",
          ].join(" ")}
        >
          <div className="flex items-start gap-4">
            <Image
              src={brand.logo}
              alt={`${brand.name} logo`}
              width={56}
              height={56}
              className={[
                "mt-1 h-12 w-12 rounded-full object-contain md:h-14 md:w-14",
                brand.status === "coming-soon"
                  ? "opacity-45 grayscale"
                  : "drop-shadow-[0_0_18px_rgba(255,79,216,0.3)]",
              ].join(" ")}
            />
            <div className="flex-1">
              <p className="text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-[#ffb8f0] md:text-[0.72rem] md:tracking-[0.18em]">
                {brand.shortLabel}
              </p>
              <p className="mt-2 text-[0.95rem] font-black uppercase tracking-[0.05em] text-[#f1ddff] md:text-base">
                {brand.name}
              </p>
              {brand.status === "coming-soon" && (
                <p className="mt-3 inline-flex rounded-full border border-[#d4a84f]/30 bg-[#d4a84f]/10 px-3 py-1 text-[0.68rem] font-bold uppercase tracking-[0.18em] text-[#f7dfa1]">
                  {messages.brandStrip.comingSoon}
                </p>
              )}
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
