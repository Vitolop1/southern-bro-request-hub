import type { Metadata } from "next";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import RequestPageShell from "@/components/request-page-shell";
import ServiceForm from "@/components/service-form";
import { getBrandProfile } from "@/lib/brand-data";
import { landscapingRequestTheme } from "@/lib/request-page-themes";

const landscapingBrand = getBrandProfile("southern-bro-landscaping");

export const metadata: Metadata = {
  title: "Landscaping Services | Southern Bro Enterprises",
  description:
    "Request landscaping support through Southern Bro with a dedicated green service page for cleanup, maintenance, and recurring outdoor work.",
};

export default function LandscapingPage() {
  if (!landscapingBrand) {
    return null;
  }

  return (
    <main className="min-h-screen bg-[#08130d] text-white">
      <Navbar />

      <RequestPageShell
        eyebrow="Southern Bro Landscaping"
        title="Request landscaping services"
        intro="This request page gives Landscaping its own identity with a greener, outdoor-focused look so customers immediately know they are inside the landscaping service lane."
        brandName={landscapingBrand.name}
        brandSummary={landscapingBrand.description}
        logoSrc={landscapingBrand.logo}
        logoAlt={`${landscapingBrand.name} logo`}
        highlights={[
          "Lawn maintenance and outdoor upkeep",
          "Seasonal cleanup and recurring service",
          "Property-focused request intake",
          "Designed for desktop and mobile use",
        ]}
        checklistTitle="What To Include"
        checklist={[
          "Describe the landscaping or yard work needed.",
          "Add the property address and any access notes.",
          "Share the timing or schedule you want.",
          "Include budget, size, or recurring-service details.",
        ]}
        audience={landscapingBrand.audience}
        requestNote="This page is built to feel like Landscaping, with greener visuals, the brand logo front and center, and a form already tied to landscaping requests."
        theme={landscapingRequestTheme}
      >
        <ServiceForm
          defaultCategory={landscapingBrand.requestCategory}
          lockCategory
          title="Request Landscaping Services"
          description="Use this form to request lawn care, cleanup work, property maintenance, or recurring landscaping support."
          submitLabel="Submit Landscaping Request"
          sectionLabel="Landscaping Request"
          theme={landscapingRequestTheme.formTheme}
        />
      </RequestPageShell>

      <Footer />
    </main>
  );
}
