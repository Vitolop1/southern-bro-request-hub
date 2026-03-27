import type { Metadata } from "next";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import RequestPageShell from "@/components/request-page-shell";
import ServiceForm from "@/components/service-form";
import { getBrandProfile } from "@/lib/brand-data";
import { handymanRequestTheme } from "@/lib/request-page-themes";

const handymanBrand = getBrandProfile("southern-bro-handyman-services");

export const metadata: Metadata = {
  title: "Handyman Services | Southern Bro Enterprises",
  description:
    "Request handyman support through Southern Bro with a dedicated intake page for repairs, installs, and practical property service work.",
};

export default function HandymanPage() {
  if (!handymanBrand) {
    return null;
  }

  return (
    <main className="min-h-screen bg-[#120c08] text-white">
      <Navbar />

      <RequestPageShell
        eyebrow="Southern Bro Handyman Services"
        title="Request handyman support"
        intro="This page gives handyman requests their own service identity, so customers know right away they are requesting repair, installation, or property support."
        brandName={handymanBrand.name}
        brandSummary={handymanBrand.description}
        logoSrc={handymanBrand.logo}
        logoAlt={`${handymanBrand.name} logo`}
        highlights={[
          "Repairs, installs, and assembly requests",
          "Property support details in one place",
          "Clear service location capture",
          "Professional follow-up intake",
        ]}
        checklistTitle="What To Include"
        checklist={[
          "Describe the repair, install, or support needed.",
          "Add the service address and access notes.",
          "Share the timeline or scheduling preference.",
          "Include urgency, budget, or material details if helpful.",
        ]}
        audience={handymanBrand.audience}
        requestNote="This page is ready for handyman service requests with the brand logo, service-specific copy, and a form already tied to handyman inquiries."
        theme={handymanRequestTheme}
      >
        <ServiceForm
          defaultCategory={handymanBrand.requestCategory}
          lockCategory
          title="Request Handyman Services"
          description="Use this form to request repair work, installations, assembly, or general handyman support."
          submitLabel="Submit Handyman Request"
          sectionLabel="Handyman Request"
          theme={handymanRequestTheme.formTheme}
        />
      </RequestPageShell>

      <Footer />
    </main>
  );
}
