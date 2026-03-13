import Image from "next/image";
import Link from "next/link";
import { brandProfiles } from "@/lib/brand-data";

type BrandStripProps = {
  hrefPrefix?: string;
};

export default function BrandStrip({ hrefPrefix = "" }: BrandStripProps) {
  return (
    <div className="mt-12 grid w-full max-w-6xl gap-3 md:grid-cols-3 xl:grid-cols-6">
      {brandProfiles.map((brand) => (
        <Link
          key={brand.id}
          href={`${hrefPrefix}#${brand.id}`}
          className="group rounded-[1.75rem] border border-white/10 bg-white/5 px-4 py-3 text-left backdrop-blur-sm transition hover:border-fuchsia-300/50 hover:bg-white/8"
        >
          <div className="flex items-center gap-3">
            <Image
              src={brand.logo}
              alt={`${brand.name} logo`}
              width={48}
              height={48}
              className="h-12 w-12 rounded-full object-contain drop-shadow-[0_0_18px_rgba(255,79,216,0.3)]"
            />
            <div>
              <p className="text-[0.7rem] font-semibold uppercase tracking-[0.12em] text-[#ffb8f0]">
                {brand.shortLabel}
              </p>
              <p className="text-sm font-bold uppercase tracking-[0.06em] text-[#f1ddff]">
                {brand.name}
              </p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
