"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import type { DeliveryFormData } from "@/types/requests";

export default function DeliveryForm() {
  const router = useRouter();

  const [formData, setFormData] = useState<DeliveryFormData>({
    fullName: "",
    phone: "",
    email: "",
    requestType: "delivery",
    businessName: "",
    itemsRequested: "",
    address: "",
    preferredTime: "",
    paymentMethod: "pay_on_delivery",
    instructions: "",
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

    console.log("Delivery request submitted:", formData);

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
          Delivery / Pickup Request
        </h2>
        <p className="mt-2 text-sm text-gray-600">
          Fill out the form below to request a delivery or pickup service.
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
          <label htmlFor="requestType" className="mb-2 block text-sm font-medium text-gray-700">
            Request Type
          </label>
          <select
            id="requestType"
            name="requestType"
            value={formData.requestType}
            onChange={handleChange}
            className="w-full rounded-2xl border border-gray-300 px-4 py-3 outline-none transition focus:border-black"
          >
            <option value="delivery">Delivery</option>
            <option value="pickup">Pickup</option>
          </select>
        </div>

        <div className="md:col-span-2">
          <label htmlFor="businessName" className="mb-2 block text-sm font-medium text-gray-700">
            Store / Restaurant Name
          </label>
          <input
            id="businessName"
            name="businessName"
            type="text"
            required
            value={formData.businessName}
            onChange={handleChange}
            className="w-full rounded-2xl border border-gray-300 px-4 py-3 outline-none transition focus:border-black"
            placeholder="Where should we pick up from?"
          />
        </div>

        <div className="md:col-span-2">
          <label htmlFor="itemsRequested" className="mb-2 block text-sm font-medium text-gray-700">
            Items Requested
          </label>
          <textarea
            id="itemsRequested"
            name="itemsRequested"
            required
            rows={4}
            value={formData.itemsRequested}
            onChange={handleChange}
            className="w-full rounded-2xl border border-gray-300 px-4 py-3 outline-none transition focus:border-black"
            placeholder="List the items the customer wants"
          />
        </div>

        <div className="md:col-span-2">
          <label htmlFor="address" className="mb-2 block text-sm font-medium text-gray-700">
            Delivery Address
          </label>
          <input
            id="address"
            name="address"
            type="text"
            required
            value={formData.address}
            onChange={handleChange}
            className="w-full rounded-2xl border border-gray-300 px-4 py-3 outline-none transition focus:border-black"
            placeholder="Enter the delivery address"
          />
        </div>

        <div>
          <label htmlFor="preferredTime" className="mb-2 block text-sm font-medium text-gray-700">
            Preferred Time
          </label>
          <input
            id="preferredTime"
            name="preferredTime"
            type="text"
            value={formData.preferredTime}
            onChange={handleChange}
            className="w-full rounded-2xl border border-gray-300 px-4 py-3 outline-none transition focus:border-black"
            placeholder="Example: Today at 6:30 PM"
          />
        </div>

        <div>
          <label htmlFor="paymentMethod" className="mb-2 block text-sm font-medium text-gray-700">
            Payment Method
          </label>
          <select
            id="paymentMethod"
            name="paymentMethod"
            value={formData.paymentMethod}
            onChange={handleChange}
            className="w-full rounded-2xl border border-gray-300 px-4 py-3 outline-none transition focus:border-black"
          >
            <option value="pay_on_delivery">Pay on Delivery</option>
            <option value="cash">Cash</option>
            <option value="card">Card</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div className="md:col-span-2">
          <label htmlFor="instructions" className="mb-2 block text-sm font-medium text-gray-700">
            Special Instructions
          </label>
          <textarea
            id="instructions"
            name="instructions"
            rows={4}
            value={formData.instructions}
            onChange={handleChange}
            className="w-full rounded-2xl border border-gray-300 px-4 py-3 outline-none transition focus:border-black"
            placeholder="Add any additional notes or instructions"
          />
        </div>
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full rounded-2xl bg-black px-6 py-3 text-sm font-semibold text-white transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {isSubmitting ? "Submitting..." : "Submit Request"}
      </button>
    </form>
  );
}