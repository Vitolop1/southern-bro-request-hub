import type { Metadata } from "next";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import ServiceForm from "@/components/service-form";
import ServicePageTemplate from "@/components/service-page-template";
import { getPriorityService } from "@/lib/site-content";

const detailingService = getPriorityService("detailing");

export const metadata: Metadata = {
  title: "Detailing Services | Southern Bro Enterprises",
  description:
    "Request auto detailing services through Southern Bro with scheduling, location, and vehicle-detail capture built into the page.",
};

export default function DetailingPage() {
  if (!detailingService) {
    return null;
  }

  return (
    <main className="min-h-screen bg-[#090312] text-white">
      <Navbar />
      <ServicePageTemplate service={detailingService} />

      <section className="mx-auto max-w-7xl px-6 pb-16 md:pb-20">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div className="rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(26,8,48,0.96),rgba(11,4,22,0.98))] p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#ffb8f0]">
              Request Detailing
            </p>
            <h2 className="mt-4 text-3xl font-black uppercase tracking-[0.05em] text-white">
              Give customers a direct path into service
            </h2>
            <p className="mt-4 text-base leading-7 text-[#d9d1e8]">
              This intake flow supports a more serious auto detailing presentation by
              collecting the vehicle details, service location, urgency, and
              budget expectations in one place.
            </p>
          </div>

          <ServiceForm
            defaultCategory={detailingService.quoteCategory}
            lockCategory
            title="Request Detailing Services"
            description="Use this quote form to request auto detailing support with a preferred timeline, service location, and vehicle details."
            submitLabel="Submit Detailing Request"
          />
        </div>
      </section>

      <Footer />
    </main>
  );
}
