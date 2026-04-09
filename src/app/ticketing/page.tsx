import type { Metadata } from "next";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import RequestPageShell from "@/components/request-page-shell";
import ServiceForm from "@/components/service-form";
import { getBrandProfile } from "@/lib/brand-data";
import { ticketingRequestTheme } from "@/lib/request-page-themes";

const ticketingBrand = getBrandProfile("ticket-vibez");

export const metadata: Metadata = {
  title: "Ticket Vibez Event Support | Southern Bro Enterprises",
  description:
    "Request ticketing and event support through Ticket Vibez, including promotions, bundled event access, and community event support.",
};

export default function TicketingPage() {
  if (!ticketingBrand) {
    return null;
  }

  return (
    <main className="min-h-screen bg-[#071120] text-white">
      <Navbar />
      <RequestPageShell
        eyebrow="Ticket Vibez"
        title="Request ticketing and event support"
        intro="This request page makes it clear that customers are inside Ticket Vibez, so event inquiries, access help, and promotional support stay separate from the rest of the company intake."
        brandSummary={ticketingBrand.description}
        logoSrc={ticketingBrand.logo}
        logoAlt={`${ticketingBrand.name} logo`}
        highlights={[
          "Event ticketing and access support",
          "Community and promotional event requests",
          "Organizer-friendly intake details",
          "Dedicated Ticket Vibez branding and follow-up",
        ]}
        checklistTitle="What To Include"
        checklist={[
          "Share the event or ticket support you need.",
          "Add timing, dates, or campaign details.",
          "Tell us if this is for a customer, organizer, or community event.",
          "Include any budget or urgency notes that matter.",
        ]}
        audience={ticketingBrand.audience}
        requestNote="This page is designed so a customer immediately understands they are requesting Ticket Vibez support and not a general company quote."
        theme={ticketingRequestTheme}
      >
        <ServiceForm
          defaultCategory={ticketingBrand.requestCategory}
          lockCategory
          title="Request Ticket Vibez Support"
          description="Use this form to request ticketing support, event access help, promotional support, or bundled event services."
          submitLabel="Submit Event Request"
          sectionLabel="Ticketing Request"
          theme={ticketingRequestTheme.formTheme}
        />
      </RequestPageShell>

      <Footer />
    </main>
  );
}
