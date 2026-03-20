"use client";

import Image from "next/image";
import Link from "next/link";
import {
  businessHours,
  contactLines,
  supportPageLinks,
} from "@/lib/company-data";
import { useLanguage } from "@/components/language-provider";

export default function Footer() {
  const { messages } = useLanguage();

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
    <footer className="border-t border-white/10 bg-[#090312]">
      <div className="mx-auto grid max-w-7xl gap-8 px-6 py-10 md:grid-cols-[1.1fr_0.85fr_0.85fr_1fr]">
        <div className="flex items-start gap-4">
          <Image
            src="/LOGOS/SouthernBro-Enterprises-Logo.png"
            alt="Southern Bro Enterprises logo"
            width={72}
            height={72}
            className="h-16 w-16 object-contain drop-shadow-[0_0_18px_rgba(255,79,216,0.28)]"
          />
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#ffb8f0]">
              Southern Bro Enterprises
            </p>
            <p className="mt-2 max-w-sm text-sm leading-6 text-[#d9d1e8]">
              {messages.footer.brandSummary}
            </p>
          </div>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#ffb8f0]">
            {messages.footer.mainPages}
          </p>
          <div className="mt-3 flex flex-col gap-2 text-sm text-[#d9d1e8]">
            {localizedLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#ffb8f0]">
            {messages.footer.morePages}
          </p>
          <div className="mt-3 flex flex-col gap-2 text-sm text-[#d9d1e8]">
            {supportPageLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#ffb8f0]">
            {messages.footer.contact}
          </p>
          <div className="mt-3 space-y-2 text-sm leading-6 text-[#d9d1e8]">
            <p>{messages.footer.serviceArea}</p>
            {contactLines.map((line) => (
              <p key={line.label}>
                {line.label}:{" "}
                {line.href ? (
                  <Link href={line.href} className="text-[#f5e6ff]">
                    {line.value}
                  </Link>
                ) : (
                  line.value
                )}
              </p>
            ))}
            {businessHours.map((hours) => (
              <p key={hours}>{hours}</p>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-4 text-center text-sm text-[#bcaed4]">
          {messages.footer.copyright}
        </div>
      </div>
    </footer>
  );
}
