import Image from "next/image";
import Link from "next/link";
import { getBrandProfile } from "@/lib/brand-data";
import { landscapingSiteName } from "@/lib/landscaping-site";

type LandscapingSiteHeaderProps = {
  currentPage: "home" | "contact";
};

const landscapingBrand = getBrandProfile("southern-bro-landscaping");

export default function LandscapingSiteHeader({
  currentPage,
}: LandscapingSiteHeaderProps) {
  if (!landscapingBrand) {
    return null;
  }

  const navItems = [
    {
      href: "/landscaping",
      label: "Home",
      active: currentPage === "home",
    },
    {
      href: "/landscaping/contact",
      label: "Contact",
      active: currentPage === "contact",
    },
  ];

  return (
    <header className="sticky top-0 z-40 border-b border-emerald-200/10 bg-[#07110a]/88 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-5 py-4 md:px-6">
        <Link href="/landscaping" className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-2xl border border-emerald-300/25 bg-black/20 shadow-[0_0_30px_rgba(74,222,128,0.12)]">
            <Image
              src={landscapingBrand.logo}
              alt={`${landscapingSiteName} logo`}
              width={48}
              height={48}
              className="h-full w-full object-cover"
            />
          </div>
          <div>
            <p className="text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-emerald-300">
              Licensed & Insured
            </p>
            <p className="text-lg font-black uppercase tracking-[0.04em] text-white md:text-xl">
              {landscapingSiteName}
            </p>
          </div>
        </Link>

        <div className="flex flex-wrap items-center gap-3">
          <nav className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 p-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={[
                  "rounded-full px-4 py-2 text-sm font-bold uppercase tracking-[0.14em] transition",
                  item.active
                    ? "bg-emerald-400/14 text-white"
                    : "text-[#dce9df] hover:bg-white/8 hover:text-white",
                ].join(" ")}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <Link
            href="/landscaping#request"
            className="rounded-full border border-emerald-300/35 bg-emerald-400/12 px-5 py-2.5 text-sm font-bold uppercase tracking-[0.16em] text-white transition hover:bg-emerald-400/18"
          >
            Request Estimate
          </Link>
        </div>
      </div>
    </header>
  );
}
