import Link from "next/link";
import LandscapingSiteHeader from "@/components/landscaping-site-header";

type LandscapingThankYouPageProps = {
  searchParams: Promise<{
    request?: string;
    service?: string;
    type?: string;
  }>;
};

export default async function LandscapingThankYouPage({
  searchParams,
}: LandscapingThankYouPageProps) {
  const { request, service, type } = await searchParams;

  return (
    <main className="min-h-screen bg-[#07110a] text-[#f3f8ef]">
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(74,222,128,0.2),_transparent_22%),radial-gradient(circle_at_18%_25%,_rgba(163,230,53,0.12),_transparent_28%),linear-gradient(180deg,_#07110a_0%,_#0b1a11_36%,_#081009_100%)]" />
      <div className="fixed inset-0 -z-10 opacity-30 [background-image:linear-gradient(rgba(187,247,208,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(187,247,208,0.08)_1px,transparent_1px)] [background-size:44px_44px]" />

      <LandscapingSiteHeader currentPage="home" />

      <section className="mx-auto max-w-4xl px-5 py-16 text-center md:px-6 md:py-24">
        <div className="rounded-[2rem] border border-emerald-200/10 bg-[linear-gradient(180deg,rgba(9,25,15,0.94),rgba(5,13,8,0.98))] p-8 shadow-[0_0_60px_rgba(0,0,0,0.18)] md:p-10">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-emerald-300">
            Request Received
          </p>
          <h1 className="mt-4 text-4xl font-black uppercase tracking-[0.05em] text-white md:text-6xl">
            Thank you
          </h1>
          <p className="mt-5 text-lg leading-8 text-[#d6e5d9]">
            Your {type === "delivery" ? "request" : "estimate request"} has been
            submitted. Our team can now review the details and follow up with the
            next step.
          </p>

          {(request || service) && (
            <div className="mt-8 rounded-[1.75rem] border border-emerald-200/10 bg-white/5 p-6 text-left">
              {request && (
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-emerald-300">
                  Request ID: {request}
                </p>
              )}
              {service && (
                <p className="mt-3 text-sm leading-7 text-[#eef8f0]">
                  Service selected: <span className="font-semibold text-white">{service}</span>
                </p>
              )}
              <p className="mt-3 text-sm leading-7 text-[#d3e3d6]">
                A team member can review your request and reach out using the
                contact information you submitted.
              </p>
            </div>
          )}

          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/landscaping"
              className="rounded-full border border-emerald-300/45 bg-[linear-gradient(90deg,_rgba(34,197,94,0.95),_rgba(132,204,22,0.92))] px-6 py-3 text-sm font-bold uppercase tracking-[0.16em] text-[#061009] transition hover:scale-[1.02]"
            >
              Return Home
            </Link>
            <Link
              href="/landscaping/contact"
              className="rounded-full border border-white/12 bg-white/5 px-6 py-3 text-sm font-bold uppercase tracking-[0.16em] text-white transition hover:bg-white/8"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
