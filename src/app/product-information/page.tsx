import Link from "next/link";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";

const productHighlights = [
  "Southern Bro Creations / Wax Melt Bros stays represented on the site",
  "Product inquiries can still route through the main request system",
  "The public product experience is intentionally held in a darker coming-soon state",
];

export default function ProductInformationPage() {
  return (
    <main className="min-h-screen bg-[#090312] text-white">
      <Navbar />

      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,79,216,0.22),_transparent_24%),linear-gradient(180deg,_#090312_0%,_#14061f_55%,_#090312_100%)]" />
        <div className="relative mx-auto max-w-7xl px-6 py-16 md:py-20">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#ffb8f0]">
            Product Information Page
          </p>
          <h1 className="mt-4 max-w-5xl text-4xl font-black uppercase tracking-[0.05em] text-white md:text-6xl">
            Southern Bro Creations is still part of the brand family
          </h1>
          <p className="mt-5 max-w-4xl text-lg leading-8 text-[#ddd2eb]">
            This page preserves the product lane from the existing site while
            making it clear that the public rollout is still coming soon.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-14 md:py-18">
        <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="rounded-[2rem] border border-white/5 bg-black/35 p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#f5d483]">
              Coming Soon
            </p>
            <div className="mt-6 space-y-4">
              {productHighlights.map((highlight) => (
                <div
                  key={highlight}
                  className="rounded-[1.5rem] border border-white/10 bg-white/5 p-5 text-sm leading-7 text-[#f5efff]"
                >
                  {highlight}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#ffb8f0]">
              Best Current Path
            </p>
            <div className="mt-6 flex flex-col gap-4">
              <Link
                href="/brands/southern-bro-creations"
                className="rounded-full border border-white/15 bg-white/6 px-6 py-3 text-center text-sm font-bold uppercase tracking-[0.16em] text-white transition hover:bg-white/12"
              >
                View Brand Page
              </Link>
              <Link
                href="/request-quote?service=Southern%20Bro%20Creations%20%2F%20Product%20Inquiries"
                className="rounded-full border border-fuchsia-300/60 bg-[linear-gradient(90deg,_rgba(193,41,255,0.95),_rgba(142,43,255,0.95))] px-6 py-3 text-center text-sm font-bold uppercase tracking-[0.16em] text-white shadow-[0_0_28px_rgba(193,41,255,0.24)] transition hover:scale-[1.02]"
              >
                Send Product Inquiry
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
