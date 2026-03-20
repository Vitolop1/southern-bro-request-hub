"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import ThemeToggle from "@/components/theme-toggle";
import LanguageSwitcher from "@/components/language-switcher";
import { useLanguage } from "@/components/language-provider";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const { messages } = useLanguage();

  function closeMenu() {
    setIsOpen(false);
  }

  const localizedLinks = [
    { href: "/", label: messages.nav.home },
    { href: "/what-we-do", label: messages.nav.whatWeDo },
    { href: "/request-quote", label: messages.nav.requestServices },
    { href: "/meet-our-team", label: messages.nav.meetTeam },
    { href: "/contact-us", label: messages.nav.contactUs },
    { href: "/request-hope-grant-aid", label: messages.nav.requestHope },
    { href: "/donate-for-hope", label: messages.nav.donateHope },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#090312]/85 backdrop-blur-md">
      <div className="mx-auto max-w-[1600px] px-4 py-3 md:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          <Link
            href="/"
            onClick={closeMenu}
            className="flex min-w-0 items-center gap-3 rounded-full border border-white/10 bg-white/5 px-3 py-2 transition hover:bg-white/8 md:mr-8 lg:mr-12"
          >
            <Image
              src="/LOGOS/SouthernBro-Enterprises-Logo.png"
              alt="Southern Bro Enterprises home"
              width={48}
              height={48}
              className="h-11 w-11 shrink-0 object-contain drop-shadow-[0_0_18px_rgba(255,79,216,0.28)]"
            />
            <div className="min-w-0">
              <p className="truncate text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-[#ffb8f0] md:text-[0.72rem]">
                {messages.nav.home}
              </p>
              <p className="truncate text-sm font-black uppercase tracking-[0.08em] text-white md:text-base">
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

          <div className="hidden min-w-0 flex-1 flex-col items-end gap-3 md:flex">
            <div className="flex items-center gap-3">
              <Link
                href="/need-a-ride"
                className="rounded-full border border-fuchsia-300/60 bg-fuchsia-500/15 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-white transition hover:bg-fuchsia-500/25"
              >
                {messages.nav.needRide}
              </Link>
              <LanguageSwitcher />
              <ThemeToggle />
            </div>

            <nav className="flex flex-wrap items-start justify-end gap-x-6 gap-y-3 xl:gap-x-8">
              {localizedLinks.map((link) => {
                const isActive =
                  pathname === link.href ||
                  (link.href !== "/" && pathname?.startsWith(link.href));

                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={[
                      "relative flex flex-col items-center text-center text-xs font-semibold uppercase tracking-[0.14em] transition lg:text-sm",
                      isActive ? "text-white" : "text-[#ddd2eb] hover:text-white",
                    ].join(" ")}
                  >
                    <span
                      className={[
                        "mb-1 h-2.5 w-2.5 rounded-full transition",
                        isActive ? "bg-[#ff4fd8] shadow-[0_0_18px_rgba(255,79,216,0.5)]" : "bg-transparent",
                      ].join(" ")}
                    />
                    <span className="max-w-[120px] leading-5">{link.label}</span>
                  </Link>
                );
              })}
            </nav>
          </div>
        </div>

        <nav
          className={[
            "overflow-hidden transition-[max-height,opacity,margin] duration-300 md:hidden",
            isOpen ? "mt-4 max-h-[70vh] opacity-100" : "max-h-0 opacity-0",
          ].join(" ")}
        >
          <div className="rounded-[1.5rem] border border-white/10 bg-[linear-gradient(180deg,rgba(21,8,36,0.96),rgba(9,4,18,0.98))] p-4 shadow-[0_0_40px_rgba(193,41,255,0.08)]">
            <div className="flex flex-col gap-2">
              {localizedLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={closeMenu}
                  className={[
                    "rounded-xl border bg-white/0 px-4 py-3 text-sm font-semibold uppercase tracking-[0.12em] transition",
                    pathname === link.href || (link.href !== "/" && pathname?.startsWith(link.href))
                      ? "border-fuchsia-300/30 bg-fuchsia-500/10 text-white"
                      : "border-transparent text-[#f1ddff] hover:border-white/10 hover:bg-white/6",
                  ].join(" ")}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/need-a-ride"
                onClick={closeMenu}
                className="mt-2 rounded-xl border border-fuchsia-300/40 bg-fuchsia-500/12 px-4 py-3 text-sm font-bold uppercase tracking-[0.14em] text-white transition hover:bg-fuchsia-500/20"
              >
                {messages.nav.needRide}
              </Link>
              <div className="mt-2 flex items-center gap-3 px-1">
                <LanguageSwitcher />
                <ThemeToggle />
              </div>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}
