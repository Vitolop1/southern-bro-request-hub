import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#090312]">
      <div className="mx-auto grid max-w-7xl gap-8 px-6 py-10 md:grid-cols-[1.1fr_0.9fr_0.9fr]">
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
              Professional support across business services, delivery,
              property maintenance, event solutions, and community programs.
            </p>
          </div>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#ffb8f0]">
            Quick Links
          </p>
          <div className="mt-3 flex flex-col gap-2 text-sm text-[#d9d1e8]">
            <Link href="/">Home</Link>
            <Link href="/about">About Us</Link>
            <Link href="/#brands">Brands & Services</Link>
            <Link href="/services">Request Service</Link>
          </div>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#ffb8f0]">
            Contact
          </p>
          <div className="mt-3 space-y-2 text-sm leading-6 text-[#d9d1e8]">
            <p>Service Area: Lynchburg, VA & Virginia Region</p>
            <p>(757) 300-1070</p>
            <p>SouthernBroEnterprises.com</p>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-4 text-center text-sm text-[#bcaed4]">
          © 2026 Southern Bro Enterprises LLC
        </div>
      </div>
    </footer>
  );
}
