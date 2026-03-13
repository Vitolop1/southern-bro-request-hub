import type { Metadata } from "next";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import ServiceForm from "@/components/service-form";
import ServicePageTemplate from "@/components/service-page-template";
import { getPriorityService } from "@/lib/site-content";

const consultingService = getPriorityService("consulting");

export const metadata: Metadata = {
  title: "Business Consulting | Southern Bro Enterprises",
  description:
    "Request business consulting, startup support, operational guidance, and launch assistance from Southern Bro Enterprises in Lynchburg, VA and across Virginia.",
};

export default function ConsultingPage() {
  if (!consultingService) {
    return null;
  }

  return (
    <main className="min-h-screen bg-[#090312] text-white">
      <Navbar />
      <ServicePageTemplate service={consultingService} />

      <section className="mx-auto max-w-7xl px-6 pb-16 md:pb-20">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div className="rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(26,8,48,0.96),rgba(11,4,22,0.98))] p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#ffb8f0]">
              Request Consulting
            </p>
            <h2 className="mt-4 text-3xl font-black uppercase tracking-[0.05em] text-white">
              Start the intake professionally
            </h2>
            <p className="mt-4 text-base leading-7 text-[#d9d1e8]">
              This page is structured to push visitors into a cleaner consulting
              request flow with clear business goals, timeline information, and a
              professional first-touch intake.
            </p>
          </div>

          <ServiceForm
            defaultCategory={consultingService.quoteCategory}
            lockCategory
            title="Request Business Consulting"
            description="Use this quote form to request startup support, consulting, launch guidance, or operational help from Southern Bro Enterprises."
            submitLabel="Submit Consulting Request"
          />
        </div>
      </section>

      <Footer />
    </main>
  );
}
