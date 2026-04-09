import type { Metadata } from "next";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import RequestPageShell from "@/components/request-page-shell";
import ServiceForm from "@/components/service-form";
import { getBrandProfile } from "@/lib/brand-data";
import { detailingRequestTheme } from "@/lib/request-page-themes";

const detailingBrand = getBrandProfile("detailing-specials");

export const metadata: Metadata = {
  title: "Detailing Services | Southern Bro Enterprises",
  description:
    "Request auto detailing services through Southern Bro with scheduling, location, and vehicle-detail capture built into the page.",
};

export default function DetailingPage() {
  if (!detailingBrand) {
    return null;
  }

  return (
    <main className="min-h-screen bg-[#080814] text-white">
      <Navbar />
      <RequestPageShell
        eyebrow="Detailing Specials"
        title="Auto detailing services"
        intro="Detailing Specials provides a focused request path for interior cleaning, exterior detailing, vehicle refresh packages, and scheduled service support."
        brandSummary={detailingBrand.description}
        logoSrc={detailingBrand.logo}
        logoAlt={`${detailingBrand.name} logo`}
        highlights={[
          "Interior and exterior detailing requests",
          "Vehicle-specific notes and cleanup needs",
          "Service location and timing details",
          "Cleaner booking flow for mobile and desktop",
        ]}
        checklistTitle="What To Include"
        checklist={[
          "Describe the vehicle and the service needed.",
          "Add the address or service location if applicable.",
          "Share your timeline and any urgency.",
          "Include budget expectations or special conditions.",
        ]}
        audience={detailingBrand.audience}
        requestNote="Submit vehicle details, service preferences, and scheduling notes so the team can review the request and respond with the next step."
        theme={detailingRequestTheme}
      >
        <ServiceForm
          defaultCategory={detailingBrand.requestCategory}
          lockCategory
          title="Request Detailing Services"
          description="Use this form to request auto detailing support with a preferred timeline, service location, and vehicle details."
          submitLabel="Submit Detailing Request"
          sectionLabel="Detailing Request"
          theme={detailingRequestTheme.formTheme}
        />
      </RequestPageShell>

      <Footer />
    </main>
  );
}
