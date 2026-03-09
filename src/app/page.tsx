import Footer from "@/components/footer";
import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
import ServiceCards from "@/components/service-cards";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <Hero />
      <ServiceCards />

      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="rounded-3xl bg-gray-50 p-8 md:p-12">
          <h2 className="text-3xl font-bold tracking-tight">
            A better way to request services
          </h2>
          <p className="mt-4 max-w-3xl text-gray-600">
            This platform is designed to help Southern Bro Enterprises receive,
            organize, and manage customer requests more efficiently. Customers can
            quickly submit delivery or service requests, and staff can manage them
            through a simple admin workflow.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/delivery"
              className="rounded-2xl bg-black px-6 py-3 text-center text-sm font-semibold text-white hover:opacity-90"
            >
              Start Delivery Request
            </Link>
            <Link
              href="/services"
              className="rounded-2xl border border-gray-300 px-6 py-3 text-center text-sm font-semibold text-gray-900 hover:bg-gray-100"
            >
              Start Service Request
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}