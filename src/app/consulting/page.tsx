import type { Metadata } from "next";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import RequestPageShell from "@/components/request-page-shell";
import ServiceForm from "@/components/service-form";
import { getBrandProfile } from "@/lib/brand-data";
import { consultingRequestTheme } from "@/lib/request-page-themes";

const consultingBrand = getBrandProfile("southern-bro-enterprises");

export const metadata: Metadata = {
  title: "Business Consulting | Southern Bro Enterprises",
  description:
    "Request business consulting, startup support, operational guidance, and launch assistance from Southern Bro Enterprises in Lynchburg, VA and across Virginia.",
};

export default function ConsultingPage() {
  if (!consultingBrand) {
    return null;
  }

  return (
    <main className="min-h-screen bg-[#090312] text-white">
      <Navbar />
      <RequestPageShell
        eyebrow="Business Consulting"
        title="Request business consulting"
        intro="You are on the dedicated consulting request page for Southern Bro Enterprises. This intake flow is built to make it obvious that you are requesting business support, startup help, or operational guidance."
        brandSummary={consultingBrand.description}
        logoSrc={consultingBrand.logo}
        logoAlt={`${consultingBrand.name} logo`}
        highlights={[
          "Startup planning and launch support",
          "Operational guidance and organization",
          "Business goals and timeline capture",
          "Professional quote request flow",
        ]}
        checklistTitle="What To Include"
        checklist={[
          "Tell us what kind of business support you need.",
          "Share your timeline and where you are in the process.",
          "Add location, budget, or scope details if they matter.",
          "Include the clearest next step you want help with.",
        ]}
        audience={consultingBrand.audience}
        requestNote="This page sends a consulting request so the team can review your business goals, contact you, and prepare the right follow-up."
        theme={consultingRequestTheme}
      >
        <ServiceForm
          defaultCategory={consultingBrand.requestCategory}
          lockCategory
          title="Request Business Consulting"
          description="Use this form to request startup support, consulting, launch guidance, or operational help from Southern Bro Enterprises."
          submitLabel="Submit Consulting Request"
          sectionLabel="Consulting Request"
          theme={consultingRequestTheme.formTheme}
        />
      </RequestPageShell>

      <Footer />
    </main>
  );
}
