import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import AdminTable from "@/components/admin-table";
import type { AdminRequest } from "@/types/requests";

export default function AdminPage() {
  const mockRequests: AdminRequest[] = [
    {
      id: "REQ-001",
      type: "Delivery",
      customer: "John Carter",
      status: "Pending",
      createdAt: "2026-03-07",
    },
    {
      id: "REQ-002",
      type: "Service",
      customer: "Maria Lopez",
      status: "In Progress",
      createdAt: "2026-03-07",
    },
    {
      id: "REQ-003",
      type: "Delivery",
      customer: "Eric Williams",
      status: "Accepted",
      createdAt: "2026-03-06",
    },
  ];

  return (
    <main className="min-h-screen bg-gray-50 text-gray-900">
      <Navbar />

      <section className="mx-auto max-w-6xl px-6 py-16">
        <h1 className="text-4xl font-bold tracking-tight">Admin Dashboard</h1>
        <p className="mt-4 text-gray-600">
          First demo version of the request management area.
        </p>

        <AdminTable requests={mockRequests} />
      </section>

      <Footer />
    </main>
  );
}