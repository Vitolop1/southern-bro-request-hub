import Link from "next/link";

export default function Hero() {
  return (
    <section className="bg-gradient-to-b from-violet-50 via-white to-violet-100/40">
      <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
        <div className="max-w-3xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-violet-600">
            Southern Bro Enterprises
          </p>

          <h1 className="text-4xl font-bold tracking-tight text-violet-950 md:text-6xl">
            Request Delivery, Pickup, or Business Services — All in One Place
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-700">
            A modern request platform for customers who need food delivery, pickup,
            and service-based support from Southern Bro Enterprises.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/delivery"
              className="rounded-2xl bg-violet-700 px-6 py-3 text-center text-sm font-semibold text-white transition hover:bg-violet-800"
            >
              Request Delivery / Pickup
            </Link>

            <Link
              href="/services"
              className="rounded-2xl border border-violet-300 bg-white px-6 py-3 text-center text-sm font-semibold text-violet-800 transition hover:bg-violet-50"
            >
              Request a Service
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}