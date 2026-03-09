"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import type { ServiceFormData } from "@/types/requests";

export default function ServiceForm() {
  const router = useRouter();

  const [formData, setFormData] = useState<ServiceFormData>({
    fullName: "",
    phone: "",
    email: "",
    category: "Business Support",
    description: "",
    address: "",
    preferredDateTime: "",
    urgency: "Normal",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsSubmitting(true);

    console.log("Service request submitted:", formData);

    setTimeout(() => {
      setIsSubmitting(false);
      router.push("/thank-you");
    }, 700);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6 rounded-3xl border border-gray-200 bg-white p-8 shadow-sm"
    >
      <div>
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">
          Service Request
        </h2>
        <p className="mt-2 text-sm text-gray-600">
          Fill out the form below to request a service from Southern Bro Enterprises.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <label htmlFor="fullName" className="mb-2 block text-sm font-medium text-gray-700">
            Full Name
          </label>
          <input
            id="fullName"
            name="fullName"
            type="text"
            required
            value={formData.fullName}
            onChange={handleChange}
            className="w-full rounded-2xl border border-gray-300 px-4 py-3 outline-none transition focus:border-black"
            placeholder="Enter your full name"
          />
        </div>

        <div>
          <label htmlFor="phone" className="mb-2 block text-sm font-medium text-gray-700">
            Phone Number
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            value={formData.phone}
            onChange={handleChange}
            className="w-full rounded-2xl border border-gray-300 px-4 py-3 outline-none transition focus:border-black"
            placeholder="Enter your phone number"
          />
        </div>

        <div>
          <label htmlFor="email" className="mb-2 block text-sm font-medium text-gray-700">
            Email Address
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full rounded-2xl border border-gray-300 px-4 py-3 outline-none transition focus:border-black"
            placeholder="Enter your email"
          />
        </div>

        <div>
          <label htmlFor="category" className="mb-2 block text-sm font-medium text-gray-700">
            Service Category
          </label>
          <select
            id="category"
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="w-full rounded-2xl border border-gray-300 px-4 py-3 outline-none transition focus:border-black"
          >
            <option>Business Support</option>
            <option>Delivery & Catering</option>
            <option>Landscaping / Lawn Care</option>
            <option>Community Support Inquiry</option>
            <option>Ticket / Event Assistance</option>
            <option>Other</option>
          </select>
        </div>

        <div className="md:col-span-2">
          <label htmlFor="description" className="mb-2 block text-sm font-medium text-gray-700">
            Description
          </label>
          <textarea
            id="description"
            name="description"
            required
            rows={5}
            value={formData.description}
            onChange={handleChange}
            className="w-full rounded-2xl border border-gray-300 px-4 py-3 outline-none transition focus:border-black"
            placeholder="Describe the service needed"
          />
        </div>

        <div className="md:col-span-2">
          <label htmlFor="address" className="mb-2 block text-sm font-medium text-gray-700">
            Address
          </label>
          <input
            id="address"
            name="address"
            type="text"
            value={formData.address}
            onChange={handleChange}
            className="w-full rounded-2xl border border-gray-300 px-4 py-3 outline-none transition focus:border-black"
            placeholder="Enter the service address if applicable"
          />
        </div>

        <div>
          <label
            htmlFor="preferredDateTime"
            className="mb-2 block text-sm font-medium text-gray-700"
          >
            Preferred Date / Time
          </label>
          <input
            id="preferredDateTime"
            name="preferredDateTime"
            type="text"
            value={formData.preferredDateTime}
            onChange={handleChange}
            className="w-full rounded-2xl border border-gray-300 px-4 py-3 outline-none transition focus:border-black"
            placeholder="Example: Monday at 2:00 PM"
          />
        </div>

        <div>
          <label htmlFor="urgency" className="mb-2 block text-sm font-medium text-gray-700">
            Urgency
          </label>
          <select
            id="urgency"
            name="urgency"
            value={formData.urgency}
            onChange={handleChange}
            className="w-full rounded-2xl border border-gray-300 px-4 py-3 outline-none transition focus:border-black"
          >
            <option>Low</option>
            <option>Normal</option>
            <option>High</option>
            <option>Urgent</option>
          </select>
        </div>
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full rounded-2xl bg-black px-6 py-3 text-sm font-semibold text-white transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {isSubmitting ? "Submitting..." : "Submit Service Request"}
      </button>
    </form>
  );
}