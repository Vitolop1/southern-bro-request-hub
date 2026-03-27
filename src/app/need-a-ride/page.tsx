import Link from "next/link";
import DeliveryForm from "@/components/delivery-form";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";

const rideHighlights = [
  "Pickup and delivery requests",
  "Food, order, or logistics support",
  "Customer scheduling details in one place",
  "Clear request details for faster follow-up",
];

export default function NeedARidePage() {
  return (
    <main className="min-h-screen bg-[#090312] text-white">
      <Navbar />

      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(30,167,255,0.22),_transparent_24%),linear-gradient(180deg,_#090312_0%,_#14061f_55%,_#090312_100%)]" />
        <div className="relative mx-auto max-w-7xl px-6 py-16 md:py-20">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#7dd3fc]">
            Delivery Requests
          </p>
          <h1 className="mt-4 max-w-5xl text-4xl font-black uppercase tracking-[0.05em] text-white md:text-6xl">
            Request delivery or pickup support
          </h1>
          <p className="mt-5 max-w-4xl text-lg leading-8 text-[#ddd2eb]">
            Use this page to submit delivery and pickup requests with a clear,
            professional intake flow for timing, order details, and special instructions.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-14 md:py-18">
        <div className="grid gap-8 lg:grid-cols-[0.92fr_1.08fr]">
          <div className="rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(12,18,37,0.92),rgba(12,4,23,0.95))] p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#7dd3fc]">
              Delivery Highlights
            </p>
            <div className="mt-6 space-y-4">
              {rideHighlights.map((highlight) => (
                <div
                  key={highlight}
                  className="rounded-[1.5rem] border border-white/10 bg-white/5 p-5 text-sm leading-7 text-[#f5efff]"
                >
                  {highlight}
                </div>
              ))}
            </div>
            <div className="mt-8">
              <Link
                href="/delivery"
                className="inline-flex rounded-full border border-white/15 bg-white/6 px-5 py-3 text-sm font-bold uppercase tracking-[0.16em] text-white transition hover:bg-white/12"
              >
                Open Delivery Page
              </Link>
            </div>
          </div>

          <DeliveryForm />
        </div>
      </section>

      <Footer />
    </main>
  );
}
