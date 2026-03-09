import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import ServiceForm from "@/components/service-form";

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-900">
      <Navbar />

      <section className="mx-auto max-w-4xl px-6 py-16">
        <div className="mb-8">
          <h1 className="text-4xl font-bold tracking-tight">Request a Service</h1>
          <p className="mt-4 max-w-2xl text-gray-600">
            Customers can use this form to request operational, support, property,
            or community-related services from Southern Bro Enterprises.
          </p>
        </div>

        <ServiceForm />
      </section>

      <Footer />
    </main>
  );
}