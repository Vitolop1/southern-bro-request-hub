const services = [
  {
    title: "Delivery & Pickup",
    description:
      "Request store, restaurant, or item pickup and delivery through a simple form.",
  },
  {
    title: "Business Support",
    description:
      "Submit requests for operational, consulting, or business-related support services.",
  },
  {
    title: "Landscaping & Property Help",
    description:
      "Request lawn care, outdoor maintenance, or seasonal property service assistance.",
  },
  {
    title: "Community Support",
    description:
      "Send inquiries related to community-oriented services and support initiatives.",
  },
];

export default function ServiceCards() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16">
      <div className="mb-10 max-w-2xl">
        <h2 className="text-3xl font-bold tracking-tight text-violet-950">
          What customers can request
        </h2>
        <p className="mt-3 text-gray-600">
          Start simple with the main request categories Southern Bro can manage from one place.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {services.map((service) => (
          <div
            key={service.title}
            className="rounded-2xl border border-violet-200 bg-white p-6 shadow-sm"
          >
            <h3 className="text-lg font-semibold text-violet-900">{service.title}</h3>
            <p className="mt-3 text-sm leading-6 text-gray-600">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}