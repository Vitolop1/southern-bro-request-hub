import type { Metadata } from "next";
import Link from "next/link";
import { Building2, Mail, Phone } from "lucide-react";
import LandscapingSiteHeader from "@/components/landscaping-site-header";
import { businessHours } from "@/lib/company-data";
import {
  landscapingContactEmail,
  landscapingContactEmailHref,
  landscapingParentCompanyName,
  landscapingPhoneDisplay,
  landscapingPhoneHref,
  landscapingServiceArea,
  landscapingSiteName,
} from "@/lib/landscaping-site";

export const metadata: Metadata = {
  title: "Contact Southern Bro Landscaping LLC",
  description:
    "Contact Southern Bro Landscaping LLC by email or phone for lawn care, cleanup, and outdoor property service questions.",
};

export default function LandscapingContactPage() {
  return (
    <main className="min-h-screen bg-[#07110a] text-[#f3f8ef]">
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(74,222,128,0.2),_transparent_22%),radial-gradient(circle_at_18%_25%,_rgba(163,230,53,0.12),_transparent_28%),linear-gradient(180deg,_#07110a_0%,_#0b1a11_36%,_#081009_100%)]" />
      <div className="fixed inset-0 -z-10 opacity-30 [background-image:linear-gradient(rgba(187,247,208,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(187,247,208,0.08)_1px,transparent_1px)] [background-size:44px_44px]" />

      <LandscapingSiteHeader currentPage="contact" />

      <section className="mx-auto max-w-6xl px-5 py-12 md:px-6 md:py-16">
        <div className="rounded-[2rem] border border-emerald-200/10 bg-[linear-gradient(180deg,rgba(9,25,15,0.94),rgba(5,13,8,0.98))] p-7 shadow-[0_0_60px_rgba(0,0,0,0.18)] md:p-9">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-emerald-300">
            {landscapingSiteName}
          </p>
          <h1 className="mt-4 text-4xl font-black uppercase tracking-[0.04em] text-white md:text-6xl">
            Contact us
          </h1>
          <p className="mt-5 max-w-4xl text-lg leading-8 text-[#d6e5d9]">
            Reach out for estimates, scheduling questions, and general lawn care
            or outdoor property service information.
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            <div className="rounded-[1.5rem] border border-emerald-200/10 bg-[#11301a]/80 p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-emerald-300">
                Service Area
              </p>
              <p className="mt-3 text-base leading-7 text-white">
                {landscapingServiceArea}
              </p>
            </div>

            <div className="rounded-[1.5rem] border border-emerald-200/10 bg-[#11301a]/80 p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-emerald-300">
                Professional Standard
              </p>
              <p className="mt-3 text-base leading-7 text-white">
                Licensed and insured outdoor property service.
              </p>
            </div>

            <div className="rounded-[1.5rem] border border-emerald-200/10 bg-[#11301a]/80 p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-emerald-300">
                Contact
              </p>
              <p className="mt-3 text-base leading-7 text-white">
                {landscapingContactEmail}
                <br />
                {landscapingPhoneDisplay}
              </p>
            </div>
          </div>
        </div>

        <div className="mt-6 grid gap-4 lg:grid-cols-[1fr_1fr]">
          <div className="rounded-[1.9rem] border border-emerald-200/10 bg-[linear-gradient(180deg,rgba(15,41,23,0.94),rgba(7,17,11,0.98))] p-6">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-emerald-300/20 bg-emerald-400/10 text-emerald-200">
                <Mail className="h-6 w-6" />
              </div>
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-emerald-300">
                  Email
                </p>
                <p className="mt-3 text-base leading-7 text-[#eff8f0]">
                  {landscapingContactEmail}
                </p>
                <p className="mt-2 text-sm leading-7 text-[#d2e1d5]">
                  Use this email for estimates, scheduling questions, and service follow-up.
                </p>
              </div>
            </div>

            <a
              href={landscapingContactEmailHref}
              className="mt-6 inline-flex rounded-full border border-emerald-300/45 bg-[linear-gradient(90deg,_rgba(34,197,94,0.95),_rgba(132,204,22,0.92))] px-5 py-3 text-sm font-bold uppercase tracking-[0.16em] text-[#061009] transition hover:scale-[1.02]"
            >
              Email Us
            </a>
          </div>

          <div className="rounded-[1.9rem] border border-emerald-200/10 bg-[linear-gradient(180deg,rgba(15,41,23,0.94),rgba(7,17,11,0.98))] p-6">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-emerald-300/20 bg-emerald-400/10 text-emerald-200">
                <Phone className="h-6 w-6" />
              </div>
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-emerald-300">
                  Call or Text
                </p>
                <p className="mt-3 text-base leading-7 text-[#eff8f0]">
                  {landscapingPhoneDisplay}
                </p>
                <p className="mt-2 text-sm leading-7 text-[#d2e1d5]">
                  For general support, calls are handled through {landscapingParentCompanyName}.
                </p>
              </div>
            </div>

            <a
              href={landscapingPhoneHref}
              className="mt-6 inline-flex rounded-full border border-white/12 bg-white/5 px-5 py-3 text-sm font-bold uppercase tracking-[0.16em] text-white transition hover:bg-white/8"
            >
              Call Us
            </a>
          </div>
        </div>

        <div className="mt-6 grid gap-4 lg:grid-cols-[1fr_1fr]">
          <div className="rounded-[1.9rem] border border-emerald-200/10 bg-[linear-gradient(180deg,rgba(15,41,23,0.94),rgba(7,17,11,0.98))] p-6">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-emerald-300/20 bg-emerald-400/10 text-emerald-200">
                <Building2 className="h-6 w-6" />
              </div>
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-emerald-300">
                  Business Hours
                </p>
                <div className="mt-3 space-y-2 text-sm leading-7 text-[#eff8f0]">
                  {businessHours.map((hours) => (
                    <p key={hours}>{hours}</p>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-[1.9rem] border border-emerald-200/10 bg-[linear-gradient(180deg,rgba(15,41,23,0.94),rgba(7,17,11,0.98))] p-6">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-emerald-300">
              Request an Estimate
            </p>
            <p className="mt-3 text-sm leading-7 text-[#d2e1d5]">
              Ready to move forward? Return to the home page to submit your
              property details and service request.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="/landscaping"
                className="inline-flex rounded-full border border-white/12 bg-white/5 px-5 py-3 text-sm font-bold uppercase tracking-[0.16em] text-white transition hover:bg-white/8"
              >
                Home
              </Link>
              <Link
                href="/landscaping#request"
                className="inline-flex rounded-full border border-emerald-300/45 bg-[linear-gradient(90deg,_rgba(34,197,94,0.95),_rgba(132,204,22,0.92))] px-5 py-3 text-sm font-bold uppercase tracking-[0.16em] text-[#061009] transition hover:scale-[1.02]"
              >
                Request Estimate
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
