import Link from "next/link";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#090312]/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-6 py-4">
        <Link href="/" className="text-lg font-black uppercase tracking-[0.16em] text-white md:text-xl">
          Southern Bro Enterprises
        </Link>

        <nav className="flex flex-wrap items-center gap-4 md:gap-6">
          <Link
            href="/"
            className="text-sm font-semibold uppercase tracking-[0.12em] text-[#ddd2eb] transition hover:text-white"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="text-sm font-semibold uppercase tracking-[0.12em] text-[#ddd2eb] transition hover:text-white"
          >
            About
          </Link>
          <Link
            href="/services"
            className="text-sm font-semibold uppercase tracking-[0.12em] text-[#ddd2eb] transition hover:text-white"
          >
            Services
          </Link>
          <Link
            href="/request-quote"
            className="text-sm font-semibold uppercase tracking-[0.12em] text-[#ddd2eb] transition hover:text-white"
          >
            Request Quote
          </Link>
          <Link
            href="/resources"
            className="text-sm font-semibold uppercase tracking-[0.12em] text-[#ddd2eb] transition hover:text-white"
          >
            Resources
          </Link>
          <Link
            href="/#contact"
            className="text-sm font-semibold uppercase tracking-[0.12em] text-[#ddd2eb] transition hover:text-white"
          >
            Contact
          </Link>
          <Link
            href="/delivery"
            className="rounded-full border border-fuchsia-300/60 bg-fuchsia-500/15 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-white transition hover:bg-fuchsia-500/25"
          >
            Book Delivery
          </Link>
        </nav>
      </div>
    </header>
  );
}
