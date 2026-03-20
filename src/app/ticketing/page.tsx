import type { Metadata } from "next";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import ServiceForm from "@/components/service-form";
import ServicePageTemplate from "@/components/service-page-template";
import { getPriorityService } from "@/lib/site-content";

const ticketingService = getPriorityService("ticketing");

export const metadata: Metadata = {
  title: "Ticket Vibez Event Support | Southern Bro Enterprises",
  description:
    "Request ticketing and event support through Ticket Vibez, including promotions, bundled event access, and community event support.",
};

export default function TicketingPage() {
  if (!ticketingService) {
    return null;
  }

  return (
    <main className="min-h-screen bg-[#090312] text-white">
      <Navbar />
      <ServicePageTemplate service={ticketingService} />

      <section className="mx-auto max-w-7xl px-6 pb-16 md:pb-20">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div className="rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(10,18,38,0.96),rgba(11,4,22,0.98))] p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#7dd3fc]">
              Request Ticketing Support
            </p>
            <h2 className="mt-4 text-3xl font-black uppercase tracking-[0.05em] text-white">
              Dedicated event and ticketing support
            </h2>
            <p className="mt-4 text-base leading-7 text-[#d9d1e8]">
              Ticket Vibez gives customers and organizers a direct path for
              event support, community ticket requests, and promotional assistance.
            </p>
          </div>

          <ServiceForm
            defaultCategory={ticketingService.quoteCategory}
            lockCategory
            title="Request Ticket Vibez Support"
            description="Use this quote form to request ticketing support, event access help, promotional support, or bundled event services."
            submitLabel="Submit Event Request"
          />
        </div>
      </section>

      <Footer />
    </main>
  );
}
