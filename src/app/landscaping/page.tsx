import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowUpRight,
  Clock3,
  Leaf,
  MapPin,
  Phone,
  ShieldCheck,
  Shovel,
  Sprout,
  Trees,
} from "lucide-react";
import ServiceForm from "@/components/service-form";
import { getBrandProfile } from "@/lib/brand-data";
import { contactLines } from "@/lib/company-data";
import { landscapingRequestTheme } from "@/lib/request-page-themes";

const landscapingBrand = getBrandProfile("southern-bro-landscaping");
const primaryPhone = contactLines.find((line) => line.href?.startsWith("tel:"));

const landscapingHighlights = [
  {
    icon: Leaf,
    title: "Routine Lawn Care",
    description:
      "Clean, recurring outdoor maintenance for homes, rental properties, and small commercial spaces.",
  },
  {
    icon: Trees,
    title: "Seasonal Cleanup",
    description:
      "Leaf removal, edge cleanup, and property reset work that keeps outdoor areas presentable.",
  },
  {
    icon: Shovel,
    title: "Property Support",
    description:
      "Practical landscaping help for turnovers, neglected yards, and ongoing upkeep needs.",
  },
];

const requestChecklist = [
  "Property address and access details",
  "Type of outdoor work needed",
  "Preferred schedule or service frequency",
  "Size, urgency, or budget notes",
];

const quickLinks = [
  {
    label: "Services",
    href: "#services",
  },
  {
    label: "Why Us",
    href: "#why-us",
  },
  {
    label: "Request",
    href: "#request",
  },
];

export const metadata: Metadata = {
  title: "Southern Bro Landscaping | Lawn Care & Property Support",
  description:
    "Southern Bro Landscaping is a dedicated green-first landscaping page for lawn care, seasonal cleanup, outdoor maintenance, and recurring property support.",
};

export default function LandscapingPage() {
  if (!landscapingBrand) {
    return null;
  }

  return (
    <main className="min-h-screen bg-[#07110a] text-[#f3f8ef]">
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(74,222,128,0.2),_transparent_22%),radial-gradient(circle_at_18%_25%,_rgba(163,230,53,0.12),_transparent_28%),linear-gradient(180deg,_#07110a_0%,_#0b1a11_36%,_#081009_100%)]" />
      <div className="fixed inset-0 -z-10 opacity-30 [background-image:linear-gradient(rgba(187,247,208,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(187,247,208,0.08)_1px,transparent_1px)] [background-size:44px_44px]" />

      <header className="sticky top-0 z-40 border-b border-emerald-200/10 bg-[#07110a]/88 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-5 py-4 md:px-6">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-emerald-300/25 bg-emerald-400/10 text-emerald-200 shadow-[0_0_30px_rgba(74,222,128,0.12)]">
              <Leaf className="h-6 w-6" />
            </div>
            <div>
              <p className="text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-emerald-300">
                Dedicated Service Company
              </p>
              <p className="text-lg font-black uppercase tracking-[0.04em] text-white md:text-xl">
                Southern Bro Landscaping
              </p>
            </div>
          </div>

          <div className="hidden flex-wrap items-center gap-6 md:flex">
            {quickLinks.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-bold uppercase tracking-[0.16em] text-[#d9e8db] transition hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href="#request"
              className="rounded-full border border-emerald-300/35 bg-emerald-400/12 px-5 py-2.5 text-sm font-bold uppercase tracking-[0.16em] text-white transition hover:bg-emerald-400/18"
            >
              Request Estimate
            </a>
          </div>
        </div>
      </header>

      <section className="mx-auto max-w-7xl px-5 py-12 md:px-6 md:py-16">
        <div className="grid gap-8 xl:grid-cols-[1.08fr_0.92fr] xl:items-start">
          <div className="space-y-6">
            <div className="rounded-[2rem] border border-emerald-200/10 bg-[linear-gradient(180deg,rgba(9,25,15,0.94),rgba(5,13,8,0.98))] p-7 shadow-[0_0_60px_rgba(0,0,0,0.18)] md:p-9">
              <div className="inline-flex items-center gap-3 rounded-full border border-emerald-300/18 bg-emerald-400/8 px-4 py-2 text-[0.72rem] font-bold uppercase tracking-[0.22em] text-emerald-200">
                <Leaf className="h-4 w-4" />
                Outdoor Property Services
              </div>

              <div className="mt-6 flex items-center gap-4">
                <div className="flex h-[4.5rem] w-[4.5rem] items-center justify-center rounded-[1.7rem] border border-emerald-300/20 bg-[radial-gradient(circle_at_top,rgba(74,222,128,0.22),transparent_70%),linear-gradient(180deg,rgba(22,101,52,0.42),rgba(8,28,14,0.95))] p-5 text-emerald-100 shadow-[0_0_34px_rgba(34,197,94,0.16)]">
                  <Leaf className="h-10 w-10" />
                </div>
                <div>
                  <p className="text-[0.7rem] font-semibold uppercase tracking-[0.28em] text-emerald-300">
                    Southern Bro Landscaping
                  </p>
                  <p className="mt-2 text-xl font-black uppercase tracking-[0.05em] text-white md:text-2xl">
                    Lawn Care, Cleanup, and Property Maintenance
                  </p>
                </div>
              </div>

              <h1 className="mt-4 max-w-4xl text-4xl font-black uppercase tracking-[0.04em] text-white md:text-6xl">
                Built only for landscaping requests
              </h1>
              <p className="mt-5 max-w-3xl text-lg leading-8 text-[#d6e5d9]">
                Request lawn maintenance, seasonal cleanup, outdoor property
                support, and recurring grounds care from a page dedicated only to
                landscaping work. The experience here is built around outdoor
                service needs from top to bottom.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <div className="rounded-[1.5rem] border border-emerald-200/10 bg-[#11301a]/80 p-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-emerald-300">
                    Service Area
                  </p>
                  <p className="mt-3 text-base leading-7 text-white">
                    Lynchburg, Virginia and surrounding regional service routes.
                  </p>
                </div>
                <div className="rounded-[1.5rem] border border-emerald-200/10 bg-[#11301a]/80 p-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-emerald-300">
                    Request Type
                  </p>
                  <p className="mt-3 text-base leading-7 text-white">
                    One focused intake form for landscaping work, cleanup, and
                    recurring property care.
                  </p>
                </div>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#request"
                  className="inline-flex items-center gap-2 rounded-full border border-emerald-300/45 bg-[linear-gradient(90deg,_rgba(34,197,94,0.95),_rgba(132,204,22,0.92))] px-6 py-3 text-sm font-bold uppercase tracking-[0.16em] text-[#061009] shadow-[0_0_28px_rgba(74,222,128,0.18)] transition hover:scale-[1.02]"
                >
                  Request Landscaping Service
                  <ArrowUpRight className="h-4 w-4" />
                </a>
                {primaryPhone?.href && (
                  <a
                    href={primaryPhone.href}
                    className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/5 px-6 py-3 text-sm font-bold uppercase tracking-[0.16em] text-white transition hover:bg-white/8"
                  >
                    <Phone className="h-4 w-4" />
                    Call Landscaping
                  </a>
                )}
              </div>
            </div>

            <div id="services" className="grid gap-4 md:grid-cols-3">
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

            <div id="why-us" className="grid gap-4 md:grid-cols-[1.05fr_0.95fr]">
              <div className="rounded-[1.9rem] border border-emerald-200/10 bg-[linear-gradient(180deg,rgba(15,41,23,0.94),rgba(7,17,11,0.98))] p-6">
                <p className="text-sm font-semibold uppercase tracking-[0.28em] text-emerald-300">
                  What This Company Handles
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
                    Best Fit
                  </p>
                  <p className="mt-4 text-sm leading-7 text-[#d3e3d6]">
                    {landscapingBrand.audience}
                  </p>
                </div>

                <div className="rounded-[1.9rem] border border-emerald-200/10 bg-[linear-gradient(180deg,rgba(15,41,23,0.94),rgba(7,17,11,0.98))] p-6">
                  <p className="text-sm font-semibold uppercase tracking-[0.28em] text-emerald-300">
                    Request Checklist
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
                        Property-Ready Intake
                      </p>
                      <p className="mt-3 text-sm leading-7 text-[#d3e3d6]">
                        Customers land directly in a landscaping-specific intake
                        flow with no generic routing. The form is locked to
                        landscaping so the request stays clear from the first click.
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
                  Southern Bro Landscaping
                </p>
                <h2 className="mt-3 text-3xl font-black uppercase tracking-[0.04em] text-white">
                  Request your estimate
                </h2>
                <p className="mt-4 text-sm leading-7 text-[#cde1d1]">
                  Fill out this landscaping intake to request lawn maintenance,
                  outdoor cleanup, recurring property support, or one-time grounds work.
                </p>

                <div className="mt-5 flex flex-wrap gap-3 text-xs font-bold uppercase tracking-[0.18em] text-[#eff9f0]">
                  <div className="inline-flex items-center gap-2 rounded-full border border-emerald-300/20 bg-emerald-400/8 px-4 py-2">
                    <Clock3 className="h-4 w-4 text-emerald-300" />
                    Focused landscaping intake
                  </div>
                  <div className="inline-flex items-center gap-2 rounded-full border border-emerald-300/20 bg-emerald-400/8 px-4 py-2">
                    <Trees className="h-4 w-4 text-emerald-300" />
                    No general service routing
                  </div>
                </div>
              </div>

              <ServiceForm
                defaultCategory={landscapingBrand.requestCategory}
                lockCategory
                title="Request Landscaping Services"
                description="Use this landscaping form to request lawn care, cleanup work, property maintenance, or recurring outdoor support."
                submitLabel="Send Landscaping Request"
                sectionLabel="Landscaping Request"
                theme={landscapingRequestTheme.formTheme}
              />
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-emerald-200/10 bg-[#07110a]/90">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-5 py-6 text-sm text-[#d3e3d6] md:flex-row md:items-center md:justify-between md:px-6">
          <p className="font-medium">
            Southern Bro Landscaping
          </p>
          <Link
            href="/"
            className="font-semibold uppercase tracking-[0.16em] text-emerald-300 transition hover:text-white"
          >
            Visit Southern Bro Enterprises
          </Link>
        </div>
      </footer>
    </main>
  );
}
