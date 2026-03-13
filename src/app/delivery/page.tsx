import Image from "next/image";
import DeliveryForm from "@/components/delivery-form";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { brandProfiles } from "@/lib/brand-data";

const deliveryBrand = brandProfiles.find(
  (brand) => brand.id === "southern-bro-delivery-catering"
);

const deliveryHighlights = [
  "Event catering coordination",
  "Personal shopping support",
  "Logistics delivery and transport help",
  "Scheduled food and order delivery",
];

export default function DeliveryPage() {
  return (
    <main className="min-h-screen bg-[#090312] text-white">
      <Navbar />

      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(30,167,255,0.2),_transparent_24%),radial-gradient(circle_at_20%_30%,_rgba(255,79,216,0.18),_transparent_26%),linear-gradient(180deg,_#090312_0%,_#14061f_55%,_#090312_100%)]" />
        <div className="relative mx-auto grid max-w-7xl gap-10 px-6 py-16 md:py-20 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#7dd3fc]">
              Delivery & Catering
            </p>
            <h1 className="mt-4 text-4xl font-black uppercase tracking-[0.05em] text-white md:text-6xl">
              Southern Bro delivery services with a stronger presentation
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-[#ddd2eb]">
              Use this page to request pickup, delivery, or catering-related help
              through the Southern Bro Delivery & Catering brand.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {deliveryHighlights.map((highlight) => (
                <div
                  key={highlight}
                  className="rounded-[1.5rem] border border-white/10 bg-white/5 px-5 py-4 text-sm font-semibold uppercase tracking-[0.1em] text-[#ecfeff]"
                >
                  {highlight}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(12,18,37,0.9),rgba(12,4,23,0.95))] p-8 text-center">
            {deliveryBrand && (
              <>
                <Image
                  src={deliveryBrand.logo}
                  alt={`${deliveryBrand.name} logo`}
                  width={260}
                  height={260}
                  className="mx-auto w-[220px] drop-shadow-[0_0_30px_rgba(30,167,255,0.22)]"
                />
                <p className="mt-5 text-sm leading-7 text-[#d9d1e8]">
                  {deliveryBrand.description}
                </p>
              </>
            )}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-14 md:py-18">
        <div className="grid gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
          <div className="rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(12,18,37,0.92),rgba(12,4,23,0.95))] p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#7dd3fc]">
              Delivery Overview
            </p>
            <h2 className="mt-4 text-3xl font-black uppercase tracking-[0.05em] text-white">
              What this brand handles
            </h2>
            <ul className="mt-6 space-y-4 text-base text-[#f5f3ff]">
              {deliveryBrand?.services.map((service) => (
                <li key={service} className="flex items-start gap-3">
                  <span className="mt-2 h-2.5 w-2.5 rounded-full bg-[#1ea7ff]" />
                  <span>{service}</span>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm leading-6 text-[#d9d1e8]">
              Service area currently highlighted on the site: Lynchburg, VA and
              the Virginia region.
            </p>
          </div>

          <DeliveryForm />
        </div>
      </section>

      <Footer />
    </main>
  );
}
