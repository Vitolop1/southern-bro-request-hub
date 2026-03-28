import Image from "next/image";
import Link from "next/link";
import { notFound, redirect } from "next/navigation";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { brandProfiles } from "@/lib/brand-data";

type BrandPageProps = {
  params: Promise<{
    id: string;
  }>;
};

export function generateStaticParams() {
  return brandProfiles.map((brand) => ({
    id: brand.id,
  }));
}

export default async function BrandPage({ params }: BrandPageProps) {
  const { id } = await params;

  if (id === "southern-bro-delivery-catering") {
    redirect("/brands/southern-bro-delivery");
  }

  if (id === "southern-bro-landscaping") {
    redirect("/landscaping");
  }

  const brand = brandProfiles.find((entry) => entry.id === id);

  if (!brand) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#090312] text-white">
      <Navbar />

      <section className="relative overflow-hidden border-b border-white/10">
        <div className={`absolute inset-0 bg-gradient-to-br ${brand.accent}`} />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(9,3,18,0.88),rgba(20,6,31,0.92),rgba(9,3,18,0.96))]" />
        <div className="relative mx-auto grid max-w-7xl gap-10 px-6 py-16 md:py-20 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 text-center backdrop-blur-sm">
            <Image
              src={brand.logo}
              alt={`${brand.name} logo`}
              width={300}
              height={300}
              className="mx-auto w-[240px] drop-shadow-[0_0_30px_rgba(255,79,216,0.3)]"
            />
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#ffb8f0]">
              {brand.shortLabel}
            </p>
            {brand.status === "coming-soon" && (
              <p className="mt-3 inline-flex rounded-full border border-[#d4a84f]/35 bg-black/30 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-[#f7dfa1]">
                {brand.statusNote}
              </p>
            )}
            <h1 className="mt-4 text-4xl font-black uppercase tracking-[0.05em] text-white md:text-6xl">
              {brand.name}
            </h1>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-[#ddd2eb]">
              {brand.description}
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                href={brand.requestHref}
                className={[
                  "rounded-full px-6 py-3 text-center text-sm font-bold uppercase tracking-[0.16em] transition",
                  brand.status === "coming-soon"
                    ? "border border-[#d4a84f]/35 bg-black/30 text-[#f7dfa1]"
                    : "border border-fuchsia-300/60 bg-[linear-gradient(90deg,_rgba(193,41,255,0.95),_rgba(142,43,255,0.95))] text-white shadow-[0_0_30px_rgba(193,41,255,0.24)] hover:scale-[1.02]",
                ].join(" ")}
              >
                {brand.status === "coming-soon" ? brand.statusNote : brand.ctaLabel}
              </Link>
              <Link
                href="/brands"
                className="rounded-full border border-white/15 bg-white/6 px-6 py-3 text-center text-sm font-bold uppercase tracking-[0.16em] text-white transition hover:bg-white/12"
              >
                Back to Brands
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-14 md:py-18">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(26,8,48,0.96),rgba(11,4,22,0.98))] p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#ffb8f0]">
              Services Offered
            </p>
            <h2 className="mt-4 text-3xl font-black uppercase tracking-[0.05em] text-white">
              What this brand provides
            </h2>

            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {brand.services.map((service) => (
                <div
                  key={service}
                  className="rounded-[1.5rem] border border-white/10 bg-white/5 p-5"
                >
                  <div className="flex items-center gap-4">
                    <Image
                      src={brand.logo}
                      alt={`${brand.name} logo`}
                      width={44}
                      height={44}
                      className="h-11 w-11 object-contain"
                    />
                    <p className="text-sm font-semibold uppercase tracking-[0.08em] text-[#f7efff]">
                      {service}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#ffb8f0]">
                Who It Is For
              </p>
              <p className="mt-4 text-base leading-7 text-[#d9d1e8]">
                {brand.audience}
              </p>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#ffb8f0]">
                How It Works
              </p>
              <ol className="mt-4 space-y-4 text-sm leading-7 text-[#f5f3ff]">
                <li>1. Choose this brand if it matches the support you need.</li>
                <li>2. Submit a request with the details, timing, and service location.</li>
                <li>3. The Southern Bro team reviews and confirms the next step.</li>
              </ol>
            </div>

            {brand.status === "coming-soon" && (
              <div className="rounded-[2rem] border border-[#d4a84f]/20 bg-black/25 p-8">
                <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#f7dfa1]">
                  Launch Status
                </p>
                <p className="mt-4 text-base leading-7 text-[#ddd2eb]">
                  This brand remains part of the Southern Bro family, but the
                  public rollout is being held in a darker coming-soon state
                  while the main business, team, contact, and grant pages are
                  refined first.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
