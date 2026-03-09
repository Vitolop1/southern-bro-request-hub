import Link from "next/link";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export default function ThankYouPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <Navbar />

      <section className="mx-auto flex max-w-3xl flex-col items-center px-6 py-20 text-center">
        <h1 className="text-4xl font-bold tracking-tight">Thank You</h1>
        <p className="mt-4 text-gray-600">
          Your request has been submitted successfully.
        </p>

        <div className="mt-8 flex flex-col gap-4 sm:flex-row">
          <Link
            href="/"
            className="rounded-2xl bg-black px-6 py-3 text-sm font-semibold text-white hover:opacity-90"
          >
            Back to Home
          </Link>

          <Link
            href="/admin"
            className="rounded-2xl border border-gray-300 px-6 py-3 text-sm font-semibold text-gray-900 hover:bg-gray-100"
          >
            View Admin Demo
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}