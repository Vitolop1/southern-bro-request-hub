import Link from "next/link";
import { mainNavigationLinks } from "@/lib/company-data";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#090312]/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-6 py-4">
        <Link href="/" className="text-lg font-black uppercase tracking-[0.16em] text-white md:text-xl">
          Southern Bro Enterprises
        </Link>

        <nav className="flex flex-wrap items-center gap-4 md:gap-6">
          {mainNavigationLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-semibold uppercase tracking-[0.12em] text-[#ddd2eb] transition hover:text-white"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/need-a-ride"
            className="rounded-full border border-fuchsia-300/60 bg-fuchsia-500/15 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-white transition hover:bg-fuchsia-500/25"
          >
            Need A Ride?
          </Link>
        </nav>
      </div>
    </header>
  );
}
