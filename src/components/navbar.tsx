"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { mainNavigationLinks } from "@/lib/company-data";
import ThemeToggle from "@/components/theme-toggle";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  function closeMenu() {
    setIsOpen(false);
  }

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#090312]/85 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-4 py-3 md:px-6">
        <div className="flex items-center justify-between gap-4">
          <Link
            href="/"
            onClick={closeMenu}
            className="flex min-w-0 items-center gap-3 rounded-full border border-white/10 bg-white/5 px-3 py-2 transition hover:bg-white/8"
          >
            <Image
              src="/LOGOS/SouthernBro-Enterprises-Logo.png"
              alt="Southern Bro Enterprises home"
              width={44}
              height={44}
              className="h-10 w-10 shrink-0 object-contain drop-shadow-[0_0_18px_rgba(255,79,216,0.28)]"
            />
            <div className="min-w-0">
              <p className="truncate text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-[#ffb8f0] md:text-[0.72rem]">
                Home
              </p>
              <p className="truncate text-sm font-black uppercase tracking-[0.12em] text-white md:text-base">
                Southern Bro Enterprises
              </p>
            </div>
          </Link>

          <button
            type="button"
            onClick={() => setIsOpen((open) => !open)}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/6 text-white transition hover:bg-white/10 md:hidden"
            aria-expanded={isOpen}
            aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>

          <nav className="hidden items-center gap-5 lg:gap-6 md:flex">
            {mainNavigationLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-xs font-semibold uppercase tracking-[0.14em] text-[#ddd2eb] transition hover:text-white lg:text-sm"
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
            <ThemeToggle />
          </nav>
        </div>

        <nav
          className={[
            "overflow-hidden transition-[max-height,opacity,margin] duration-300 md:hidden",
            isOpen ? "mt-4 max-h-[70vh] opacity-100" : "max-h-0 opacity-0",
          ].join(" ")}
        >
          <div className="rounded-[1.5rem] border border-white/10 bg-[linear-gradient(180deg,rgba(21,8,36,0.96),rgba(9,4,18,0.98))] p-4 shadow-[0_0_40px_rgba(193,41,255,0.08)]">
            <div className="flex flex-col gap-2">
              {mainNavigationLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={closeMenu}
                  className="rounded-xl border border-transparent bg-white/0 px-4 py-3 text-sm font-semibold uppercase tracking-[0.12em] text-[#f1ddff] transition hover:border-white/10 hover:bg-white/6"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/need-a-ride"
                onClick={closeMenu}
                className="mt-2 rounded-xl border border-fuchsia-300/40 bg-fuchsia-500/12 px-4 py-3 text-sm font-bold uppercase tracking-[0.14em] text-white transition hover:bg-fuchsia-500/20"
              >
                Need A Ride?
              </Link>
              <div className="mt-2 px-1">
                <ThemeToggle />
              </div>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}
