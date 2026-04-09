import type { Metadata } from "next";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import RequestPageShell from "@/components/request-page-shell";
import ServiceForm from "@/components/service-form";
import { getBrandProfile } from "@/lib/brand-data";
import { communitySupportRequestTheme } from "@/lib/request-page-themes";

const communityBrand = getBrandProfile("va-recovery-services");

export const metadata: Metadata = {
  title: "Community Support | Southern Bro Enterprises",
  description:
    "Request VA Recovery Services and community support through a dedicated intake page built for outreach, support coordination, and follow-up.",
};

export default function CommunitySupportPage() {
  if (!communityBrand) {
    return null;
  }

  return (
    <main className="min-h-screen bg-[#0a0f1d] text-white">
      <Navbar />

      <RequestPageShell
        eyebrow="VA Recovery Services"
        title="Request community support"
        intro="This page creates a clearer, separate intake path for VA Recovery Services so community-focused requests do not feel mixed into the general business forms."
        brandSummary={communityBrand.description}
        logoSrc={communityBrand.logo}
        logoAlt={`${communityBrand.name} logo`}
        highlights={[
          "Community and stability-focused support",
          "Structured outreach and intake details",
          "Clearer path for follow-up",
          "Dedicated VA Recovery Services branding",
        ]}
        checklistTitle="What To Include"
        checklist={[
          "Explain the kind of support being requested.",
          "Add the address or community context if needed.",
          "Share timing, urgency, or follow-up needs.",
          "Include the best contact details and any relevant background.",
        ]}
        audience={communityBrand.audience}
        requestNote="This page is meant for community support requests, with a form tied directly to VA Recovery Services instead of a generic company intake."
        theme={communitySupportRequestTheme}
      >
        <ServiceForm
          defaultCategory={communityBrand.requestCategory}
          lockCategory
          title="Request Community Support"
          description="Use this form to request VA Recovery Services support, outreach coordination, or other community-focused assistance."
          submitLabel="Submit Community Request"
          sectionLabel="Community Support Request"
          theme={communitySupportRequestTheme.formTheme}
        />
      </RequestPageShell>

      <Footer />
    </main>
  );
}
