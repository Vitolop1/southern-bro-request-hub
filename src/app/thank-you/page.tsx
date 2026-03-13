import Link from "next/link";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";

type ThankYouPageProps = {
  searchParams: Promise<{
    request?: string;
    service?: string;
    type?: string;
  }>;
};

export default async function ThankYouPage({
  searchParams,
}: ThankYouPageProps) {
  const { request, service, type } = await searchParams;

  return (
    <main className="min-h-screen bg-[#090312] text-white">
      <Navbar />

      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,79,216,0.18),_transparent_24%),linear-gradient(180deg,_#090312_0%,_#14061f_50%,_#090312_100%)]" />
        <div className="relative mx-auto flex max-w-3xl flex-col items-center px-6 py-20 text-center md:py-28">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#ffb8f0]">
            Request Received
          </p>
          <h1 className="mt-4 text-4xl font-black uppercase tracking-[0.05em] text-white md:text-6xl">
            Thank you
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-[#ddd2eb]">
            Your {type === "delivery" ? "delivery request" : "quote request"} has
            been submitted successfully. The Southern Bro team can now review the
            details and follow up with next steps.
          </p>

          {(request || service) && (
            <div className="mt-8 w-full rounded-[1.75rem] border border-white/10 bg-white/5 p-6 text-left">
              {request && (
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#ffb8f0]">
                  Request ID: {request}
                </p>
              )}
              {service && (
                <p className="mt-3 text-sm leading-7 text-[#f5efff]">
                  Service selected: <span className="font-semibold text-white">{service}</span>
                </p>
              )}
              <p className="mt-3 text-sm leading-7 text-[#d9d1e8]">
                Next step: a team member can review the request details and follow
                up using the contact information submitted in the form.
              </p>
            </div>
          )}

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/"
              className="rounded-full border border-fuchsia-300/60 bg-[linear-gradient(90deg,_rgba(193,41,255,0.95),_rgba(142,43,255,0.95))] px-6 py-3 text-sm font-bold uppercase tracking-[0.16em] text-white shadow-[0_0_30px_rgba(193,41,255,0.24)] transition hover:scale-[1.02]"
            >
              Back to Home
            </Link>
            <Link
              href="/request-quote"
              className="rounded-full border border-white/15 bg-white/6 px-6 py-3 text-sm font-bold uppercase tracking-[0.16em] text-white transition hover:bg-white/12"
            >
              Submit Another Request
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
