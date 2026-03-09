import type { AdminRequest } from "@/types/requests";

type AdminTableProps = {
  requests: AdminRequest[];
};

export default function AdminTable({ requests }: AdminTableProps) {
  return (
    <div className="mt-8 overflow-hidden rounded-2xl border border-gray-200 bg-white">
      <table className="min-w-full">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">ID</th>
            <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Type</th>
            <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Customer</th>
            <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Status</th>
            <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Created</th>
          </tr>
        </thead>
        <tbody>
          {requests.map((request) => (
            <tr key={request.id} className="border-t border-gray-200">
              <td className="px-4 py-3 text-sm">{request.id}</td>
              <td className="px-4 py-3 text-sm">{request.type}</td>
              <td className="px-4 py-3 text-sm">{request.customer}</td>
              <td className="px-4 py-3 text-sm">{request.status}</td>
              <td className="px-4 py-3 text-sm">{request.createdAt}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}