import BrandDirectory from "@/components/brand-directory";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";

export default function BrandsPage() {
  return (
    <main className="min-h-screen bg-[#090312] text-white">
      <Navbar />

      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,79,216,0.18),_transparent_24%),linear-gradient(180deg,_#090312_0%,_#14061f_55%,_#090312_100%)]" />
        <div className="relative mx-auto max-w-7xl px-6 py-16 md:py-20">
          <div className="max-w-4xl">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#ffb8f0]">
              Brand Directory
            </p>
            <h1 className="mt-4 text-4xl font-black uppercase tracking-[0.05em] text-white md:text-6xl">
              Every Southern Bro brand in one place
            </h1>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-[#ddd2eb]">
              Explore the full Southern Bro brand family, learn what each service
              line offers, and move into the right request flow from one
              organized, professional directory.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-14 md:py-18">
        <BrandDirectory maxServices={4} />
      </section>

      <Footer />
    </main>
  );
}
