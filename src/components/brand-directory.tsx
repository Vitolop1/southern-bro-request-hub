import Image from "next/image";
import Link from "next/link";
import { brandProfiles } from "@/lib/brand-data";

type BrandDirectoryProps = {
  maxServices?: number;
};

export default function BrandDirectory({
  maxServices = 3,
}: BrandDirectoryProps) {
  return (
    <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
      {brandProfiles.map((brand) => (
        <article
          key={brand.id}
          id={brand.id}
          className="relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-[#12071d]/90 p-6"
        >
          <div className={`absolute inset-0 bg-gradient-to-br ${brand.accent}`} />
          <div className="relative">
            <div className="flex items-center gap-4">
              <Image
                src={brand.logo}
                alt={`${brand.name} logo`}
                width={84}
                height={84}
                className="h-20 w-20 object-contain drop-shadow-[0_0_18px_rgba(255,79,216,0.28)]"
              />
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#ffb8f0]">
                  {brand.shortLabel}
                </p>
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

            <Link
              href={brand.pageHref}
              className="mt-5 inline-flex rounded-full border border-white/15 bg-white/6 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-white transition hover:bg-white/12"
            >
              View Brand
            </Link>
            <Link
              href={brand.requestHref}
              className="mt-3 inline-flex rounded-full border border-fuchsia-300/60 bg-white/8 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-white transition hover:bg-white/14"
            >
              {brand.ctaLabel}
            </Link>
          </div>
        </article>
      ))}
    </div>
  );
}
