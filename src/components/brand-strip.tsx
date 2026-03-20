import Image from "next/image";
import Link from "next/link";
import { brandProfiles } from "@/lib/brand-data";

type BrandStripProps = {
  hrefPrefix?: string;
};

export default function BrandStrip({ hrefPrefix = "" }: BrandStripProps) {
  return (
    <div className="mt-14 grid w-full max-w-7xl gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {brandProfiles.map((brand) => (
        <Link
          key={brand.id}
          href={hrefPrefix ? `${hrefPrefix}#${brand.id}` : brand.pageHref}
          className={[
            "group min-h-[148px] rounded-[1.9rem] border px-5 py-5 text-left backdrop-blur-sm transition",
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
                "mt-1 h-14 w-14 rounded-full object-contain",
                brand.status === "coming-soon"
                  ? "opacity-45 grayscale"
                  : "drop-shadow-[0_0_18px_rgba(255,79,216,0.3)]",
              ].join(" ")}
            />
            <div className="flex-1">
              <p className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-[#ffb8f0]">
                {brand.shortLabel}
              </p>
              <p className="mt-2 text-base font-black uppercase tracking-[0.05em] text-[#f1ddff]">
                {brand.name}
              </p>
              {brand.status === "coming-soon" && (
                <p className="mt-3 inline-flex rounded-full border border-[#d4a84f]/30 bg-[#d4a84f]/10 px-3 py-1 text-[0.68rem] font-bold uppercase tracking-[0.18em] text-[#f7dfa1]">
                  {brand.statusNote}
                </p>
              )}
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
