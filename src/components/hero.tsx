import Image from "next/image";
import Link from "next/link";
import BrandStrip from "@/components/brand-strip";

export default function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-white/10 bg-[#090312]" id="top">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,79,216,0.35),_transparent_26%),radial-gradient(circle_at_20%_40%,_rgba(142,43,255,0.28),_transparent_30%),radial-gradient(circle_at_80%_30%,_rgba(30,167,255,0.16),_transparent_22%),linear-gradient(180deg,_#090312_0%,_#14061f_48%,_#090312_100%)]" />
      <div className="absolute left-1/2 top-20 h-72 w-72 -translate-x-1/2 rounded-full bg-fuchsia-500/20 blur-3xl" />
      <div className="absolute bottom-0 left-0 h-56 w-56 rounded-full bg-violet-600/15 blur-3xl" />
      <div className="absolute bottom-8 right-0 h-64 w-64 rounded-full bg-sky-500/10 blur-3xl" />

      <div className="relative mx-auto flex max-w-7xl flex-col items-center px-6 py-16 text-center md:py-24">
        <div className="relative flex items-center justify-center">
          <div className="absolute h-52 w-52 rounded-full bg-fuchsia-500/25 blur-3xl md:h-72 md:w-72 xl:h-80 xl:w-80" />
          <div className="absolute h-64 w-64 rounded-full border border-fuchsia-300/20 bg-white/5 blur-2xl md:h-80 md:w-80 xl:h-[26rem] xl:w-[26rem]" />
          <Image
            src="/LOGOS/SouthernBro-Enterprises-Logo.png"
            alt="Southern Bro Enterprises logo"
            width={420}
            height={420}
            priority
            className="relative w-[240px] drop-shadow-[0_0_42px_rgba(255,79,216,0.58)] md:w-[320px] xl:w-[400px]"
          />
        </div>

        <p className="mt-5 text-xs font-semibold uppercase tracking-[0.38em] text-fuchsia-200 md:text-sm">
          Southern Bro Enterprises LLC
        </p>

        <h1 className="mt-5 max-w-5xl text-4xl font-black uppercase tracking-[0.04em] text-white md:text-6xl">
          Business consulting, detailing, ticketing, and multi-brand support
        </h1>

        <p className="mt-5 max-w-3xl text-lg leading-8 text-[#ddd2eb] md:text-xl">
          A stronger Southern Bro website should push customers into the right
          service quickly, with high visibility for consulting, detailing,
          ticketing, quote requests, and the broader Southern Bro brand family.
        </p>

        <p className="mt-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#ffb8f0]">
          Service Area: Lynchburg, VA & Virginia Region
        </p>

        <div className="mt-8 flex flex-col gap-4 sm:flex-row">
          <Link
            href="/request-quote"
            className="rounded-full border border-fuchsia-300/60 bg-[linear-gradient(90deg,_rgba(193,41,255,0.95),_rgba(142,43,255,0.95))] px-7 py-3 text-sm font-bold uppercase tracking-[0.18em] text-white shadow-[0_0_30px_rgba(193,41,255,0.35)] transition hover:scale-[1.02] hover:shadow-[0_0_36px_rgba(255,79,216,0.45)]"
          >
            Request a Quote
          </Link>
          <Link
            href="/services"
            className="rounded-full border border-[#d4a84f]/60 bg-white/5 px-7 py-3 text-sm font-bold uppercase tracking-[0.18em] text-[#f7e2ff] transition hover:bg-white/10"
          >
            Explore Services
          </Link>
        </div>

        <BrandStrip />
      </div>
    </section>
  );
}
