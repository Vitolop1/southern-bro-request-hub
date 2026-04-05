import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  Clock3,
  Leaf,
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
  Shovel,
  Sprout,
  Trees,
} from "lucide-react";
import LandscapingSiteHeader from "@/components/landscaping-site-header";
import ServiceForm from "@/components/service-form";
import { getBrandProfile } from "@/lib/brand-data";
import { businessHours } from "@/lib/company-data";
import {
  landscapingContactEmail,
  landscapingParentCompanyName,
  landscapingPhoneDisplay,
  landscapingPhoneHref,
  landscapingServiceArea,
  landscapingSiteName,
} from "@/lib/landscaping-site";
import { landscapingRequestTheme } from "@/lib/request-page-themes";

const landscapingBrand = getBrandProfile("southern-bro-landscaping");

const landscapingHighlights = [
  {
    icon: Leaf,
    title: "Routine Lawn Care",
    description:
      "Dependable mowing, edging, and recurring lawn care for homes, rental properties, and small commercial spaces.",
  },
  {
    icon: Trees,
    title: "Seasonal Cleanup",
    description:
      "Leaf removal, overgrowth cleanup, and outdoor reset work that helps keep the property clean and presentable.",
  },
  {
    icon: Shovel,
    title: "Property Support",
    description:
      "Reliable support for turnovers, neglected yards, curb appeal improvement, and ongoing upkeep needs.",
  },
];

const requestChecklist = [
  "Property address and access details",
  "Type of outdoor work needed",
  "Preferred schedule or service frequency",
  "Size, urgency, or budget notes",
];

export const metadata: Metadata = {
  title: "Southern Bro Landscaping LLC | Lawn Care & Outdoor Services",
  description:
    "Southern Bro Landscaping LLC provides licensed and insured lawn care, outdoor cleanup, and recurring property support with a direct service request form.",
};

export default function LandscapingPage() {
  if (!landscapingBrand) {
    return null;
  }

  return (
    <main className="min-h-screen bg-[#07110a] text-[#f3f8ef]">
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(74,222,128,0.2),_transparent_22%),radial-gradient(circle_at_18%_25%,_rgba(163,230,53,0.12),_transparent_28%),linear-gradient(180deg,_#07110a_0%,_#0b1a11_36%,_#081009_100%)]" />
      <div className="fixed inset-0 -z-10 opacity-30 [background-image:linear-gradient(rgba(187,247,208,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(187,247,208,0.08)_1px,transparent_1px)] [background-size:44px_44px]" />

      <LandscapingSiteHeader currentPage="home" />

      <section className="mx-auto max-w-7xl px-5 py-12 md:px-6 md:py-16">
        <div className="grid gap-8 xl:grid-cols-[1.08fr_0.92fr] xl:items-start">
          <div className="space-y-6">
            <div className="rounded-[2rem] border border-emerald-200/10 bg-[linear-gradient(180deg,rgba(9,25,15,0.94),rgba(5,13,8,0.98))] p-7 shadow-[0_0_60px_rgba(0,0,0,0.18)] md:p-9">
              <div className="grid gap-6 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.28em] text-emerald-300">
                    {landscapingSiteName}
                  </p>
                  <h1 className="mt-4 max-w-4xl text-4xl font-black uppercase tracking-[0.04em] text-white md:text-6xl">
                    Lawn care, cleanup, and outdoor property support
                  </h1>
                  <p className="mt-5 max-w-3xl text-lg leading-8 text-[#d6e5d9]">
                    Southern Bro Landscaping LLC provides dependable lawn care,
                    seasonal cleanup, and recurring outdoor maintenance for
                    residential, rental, and small commercial properties.
                  </p>

                  <div className="mt-5 inline-flex rounded-full border border-emerald-300/25 bg-emerald-400/8 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-emerald-200">
                    Licensed and insured professional service
                  </div>
                </div>

                <div className="rounded-[1.8rem] border border-emerald-200/10 bg-[linear-gradient(180deg,rgba(12,30,18,0.88),rgba(6,14,9,0.96))] p-4 shadow-[0_0_40px_rgba(74,222,128,0.08)]">
                  <div className="overflow-hidden rounded-[1.4rem] border border-white/8 bg-black/20">
                    <Image
                      src={landscapingBrand.logo}
                      alt={`${landscapingSiteName} logo`}
                      width={1024}
                      height={1024}
                      priority
                      className="h-auto w-full object-cover"
                    />
                  </div>
                  <p className="mt-4 text-center text-xs font-semibold uppercase tracking-[0.22em] text-emerald-200">
                    {landscapingSiteName}
                  </p>
                </div>
              </div>

              <div className="mt-8 grid gap-4 sm:grid-cols-3">
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
                    Licensed and insured support for recurring lawn care, cleanup,
                    and outdoor property maintenance.
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

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#request"
                  className="inline-flex items-center gap-2 rounded-full border border-emerald-300/45 bg-[linear-gradient(90deg,_rgba(34,197,94,0.95),_rgba(132,204,22,0.92))] px-6 py-3 text-sm font-bold uppercase tracking-[0.16em] text-[#061009] shadow-[0_0_28px_rgba(74,222,128,0.18)] transition hover:scale-[1.02]"
                >
                  Request Estimate
                  <ArrowUpRight className="h-4 w-4" />
                </a>
                <Link
                  href="/landscaping/contact"
                  className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/5 px-6 py-3 text-sm font-bold uppercase tracking-[0.16em] text-white transition hover:bg-white/8"
                >
                  <Mail className="h-4 w-4" />
                  Contact
                </Link>
                <a
                  href={landscapingPhoneHref}
                  className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/5 px-6 py-3 text-sm font-bold uppercase tracking-[0.16em] text-white transition hover:bg-white/8"
                >
                  <Phone className="h-4 w-4" />
                  Call
                </a>
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              {landscapingHighlights.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="rounded-[1.7rem] border border-emerald-200/10 bg-[linear-gradient(180deg,rgba(12,33,19,0.92),rgba(6,14,9,0.98))] p-5"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-emerald-300/20 bg-emerald-400/10 text-emerald-200">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h2 className="mt-4 text-lg font-black uppercase tracking-[0.04em] text-white">
                      {item.title}
                    </h2>
                    <p className="mt-3 text-sm leading-7 text-[#d2e1d4]">
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </div>

            <div className="grid gap-4 md:grid-cols-[1.05fr_0.95fr]">
                <div className="rounded-[1.9rem] border border-emerald-200/10 bg-[linear-gradient(180deg,rgba(15,41,23,0.94),rgba(7,17,11,0.98))] p-6">
                  <p className="text-sm font-semibold uppercase tracking-[0.28em] text-emerald-300">
                    Services
                  </p>
                <div className="mt-6 grid gap-3">
                  {landscapingBrand.services.map((service) => (
                    <div
                      key={service}
                      className="flex items-start gap-3 rounded-[1.35rem] border border-emerald-200/8 bg-white/5 px-4 py-4"
                    >
                      <Sprout className="mt-1 h-4 w-4 text-emerald-300" />
                      <span className="text-sm leading-7 text-[#eef8f0]">{service}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <div className="rounded-[1.9rem] border border-emerald-200/10 bg-[linear-gradient(180deg,rgba(15,41,23,0.94),rgba(7,17,11,0.98))] p-6">
                  <p className="text-sm font-semibold uppercase tracking-[0.28em] text-emerald-300">
                    Property Types
                  </p>
                  <p className="mt-4 text-sm leading-7 text-[#d3e3d6]">
                    {landscapingBrand.audience}
                  </p>
                </div>

                <div className="rounded-[1.9rem] border border-emerald-200/10 bg-[linear-gradient(180deg,rgba(15,41,23,0.94),rgba(7,17,11,0.98))] p-6">
                  <p className="text-sm font-semibold uppercase tracking-[0.28em] text-emerald-300">
                    Request Details
                  </p>
                  <div className="mt-5 space-y-3">
                    {requestChecklist.map((item) => (
                      <div key={item} className="flex items-start gap-3 text-sm leading-7 text-[#eef8f0]">
                        <ShieldCheck className="mt-1 h-4 w-4 shrink-0 text-lime-300" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="rounded-[1.9rem] border border-emerald-200/10 bg-[linear-gradient(180deg,rgba(15,41,23,0.94),rgba(7,17,11,0.98))] p-6">
                  <div className="flex items-start gap-3">
                    <MapPin className="mt-1 h-5 w-5 text-emerald-300" />
                    <div>
                      <p className="text-sm font-semibold uppercase tracking-[0.22em] text-emerald-300">
                        Contact Information
                      </p>
                      <p className="mt-3 text-sm leading-7 text-[#d3e3d6]">
                        Email {landscapingContactEmail} or call {landscapingPhoneDisplay}
                        for estimates, scheduling, and service questions. General
                        support is available through {landscapingParentCompanyName}.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div id="request" className="xl:sticky xl:top-24">
            <div className="rounded-[2.2rem] border border-emerald-200/12 bg-[linear-gradient(180deg,rgba(6,18,10,0.94),rgba(3,10,6,0.98))] p-6 shadow-[0_0_60px_rgba(0,0,0,0.18)] md:p-7">
              <div className="mb-6 rounded-[1.7rem] border border-emerald-200/10 bg-[#0f2917]/85 p-5">
                <p className="text-sm font-semibold uppercase tracking-[0.28em] text-emerald-300">
                  {landscapingSiteName}
                </p>
                <h2 className="mt-3 text-3xl font-black uppercase tracking-[0.04em] text-white">
                  Request an estimate
                </h2>
                <p className="mt-4 text-sm leading-7 text-[#cde1d1]">
                  Submit the details for lawn maintenance, cleanup, recurring
                  service, or outdoor property support.
                </p>

                <div className="mt-5 flex flex-wrap gap-3 text-xs font-bold uppercase tracking-[0.18em] text-[#eff9f0]">
                  <div className="inline-flex items-center gap-2 rounded-full border border-emerald-300/20 bg-emerald-400/8 px-4 py-2">
                    <Clock3 className="h-4 w-4 text-emerald-300" />
                    Lawn Care
                  </div>
                  <div className="inline-flex items-center gap-2 rounded-full border border-emerald-300/20 bg-emerald-400/8 px-4 py-2">
                    <Trees className="h-4 w-4 text-emerald-300" />
                    Cleanup
                  </div>
                  <div className="inline-flex items-center gap-2 rounded-full border border-emerald-300/20 bg-emerald-400/8 px-4 py-2">
                    <Trees className="h-4 w-4 text-emerald-300" />
                    Recurring Service
                  </div>
                </div>
              </div>

              <ServiceForm
                defaultCategory={landscapingBrand.requestCategory}
                lockCategory
                title="Request an Estimate"
                description="Use this form to request lawn care, cleanup, property maintenance, or recurring landscaping service."
                submitLabel="Submit Estimate Request"
                sectionLabel="Estimate Request"
                theme={landscapingRequestTheme.formTheme}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-12 md:px-6 md:pb-16">
        <div className="rounded-[1.8rem] border border-emerald-200/10 bg-[linear-gradient(180deg,rgba(10,28,17,0.9),rgba(6,14,9,0.96))] p-6 md:p-7">
          <div className="grid gap-5 md:grid-cols-[1.2fr_0.8fr] md:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-emerald-300">
                Contact Southern Bro Landscaping LLC
              </p>
              <p className="mt-3 text-base leading-7 text-[#d5e4d8]">
                Contact our team for estimates, scheduling, and general service
                questions.
              </p>
            </div>
            <div className="space-y-2 text-sm leading-7 text-[#ecf7ee]">
              <p>{landscapingContactEmail}</p>
              <p>{landscapingPhoneDisplay}</p>
              <p className="text-[#c8d9cc]">{businessHours[0]}</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
