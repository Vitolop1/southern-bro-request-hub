import DeliveryForm from "@/components/delivery-form";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import RequestPageShell from "@/components/request-page-shell";
import { getBrandProfile } from "@/lib/brand-data";
import { deliveryRequestTheme } from "@/lib/request-page-themes";

const deliveryBrand = getBrandProfile("southern-bro-delivery");

export default function DeliveryPage() {
  if (!deliveryBrand) {
    return null;
  }

  return (
    <main className="min-h-screen bg-[#07111d] text-white">
      <Navbar />
      <RequestPageShell
        eyebrow="Southern Bro Delivery"
        title="Request delivery or pickup"
        intro="This page is dedicated to Southern Bro Delivery so customers clearly see they are requesting delivery support, not a general Southern Bro quote."
        brandSummary={deliveryBrand.description}
        logoSrc={deliveryBrand.logo}
        logoAlt={`${deliveryBrand.name} logo`}
        highlights={[
          "Delivery and pickup requests",
          "Personal shopping support",
          "Food and order delivery",
          "Clear contact and timing intake",
        ]}
        checklistTitle="What To Include"
        checklist={[
          "Where the order needs to be picked up from.",
          "What items need to be delivered or picked up.",
          "The delivery address and preferred time.",
          "Any payment notes or special instructions.",
        ]}
        audience={deliveryBrand.audience}
        requestNote="This delivery form sends a dedicated request for Southern Bro Delivery, with the customer details and order notes prepared for follow-up."
        theme={deliveryRequestTheme}
      >
        <DeliveryForm
          title="Request Delivery or Pickup"
          description="Use this form to request delivery support, pickup coordination, or personal shopping through Southern Bro Delivery."
          submitLabel="Submit Delivery Request"
          sectionLabel="Delivery Request"
          serviceLabel={deliveryBrand.name}
          theme={deliveryRequestTheme.formTheme}
        />
      </RequestPageShell>

      <Footer />
    </main>
  );
}
