"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import type { DeliveryFormData } from "@/types/requests";

export default function DeliveryForm() {
  const router = useRouter();
  const fieldClassName =
    "w-full rounded-[1.25rem] border border-white/10 bg-white/6 px-4 py-3 text-white outline-none transition placeholder:text-[#aa9fc0] focus:border-fuchsia-300/70 focus:bg-white/10";

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

    setTimeout(() => {
      setIsSubmitting(false);
      const params = new URLSearchParams({
        type: "delivery",
        request: `DEL-${Date.now().toString().slice(-6)}`,
        service: "Southern Bro Delivery & Catering",
      });
      router.push(`/thank-you?${params.toString()}`);
    }, 700);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6 rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(26,8,48,0.94),rgba(10,4,18,0.98))] p-8 shadow-[0_0_60px_rgba(193,41,255,0.12)]"
    >
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.26em] text-[#ffb8f0]">
          Delivery Booking
        </p>
        <h2 className="mt-3 text-2xl font-black uppercase tracking-[0.05em] text-white">
          Delivery / Pickup Request
        </h2>
        <p className="mt-3 text-sm leading-6 text-[#d9d1e8]">
          Fill out the form below to request a delivery, pickup, or catering-related
          service from Southern Bro Delivery & Catering.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <label htmlFor="fullName" className="mb-2 block text-sm font-medium text-[#f3e8ff]">
            Full Name
          </label>
          <input
            id="fullName"
            name="fullName"
            type="text"
            required
            value={formData.fullName}
            onChange={handleChange}
            className={fieldClassName}
            placeholder="Enter your full name"
          />
        </div>

        <div>
          <label htmlFor="phone" className="mb-2 block text-sm font-medium text-[#f3e8ff]">
            Phone Number
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            value={formData.phone}
            onChange={handleChange}
            className={fieldClassName}
            placeholder="Enter your phone number"
          />
        </div>

        <div>
          <label htmlFor="email" className="mb-2 block text-sm font-medium text-[#f3e8ff]">
            Email Address
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={formData.email}
            onChange={handleChange}
            className={fieldClassName}
            placeholder="Enter your email"
          />
        </div>

        <div>
          <label htmlFor="requestType" className="mb-2 block text-sm font-medium text-[#f3e8ff]">
            Request Type
          </label>
          <select
            id="requestType"
            name="requestType"
            value={formData.requestType}
            onChange={handleChange}
            className={fieldClassName}
          >
            <option value="delivery" className="bg-[#14061f] text-white">Delivery</option>
            <option value="pickup" className="bg-[#14061f] text-white">Pickup</option>
          </select>
        </div>

        <div className="md:col-span-2">
          <label htmlFor="businessName" className="mb-2 block text-sm font-medium text-[#f3e8ff]">
            Store / Restaurant Name
          </label>
          <input
            id="businessName"
            name="businessName"
            type="text"
            required
            value={formData.businessName}
            onChange={handleChange}
            className={fieldClassName}
            placeholder="Where should we pick up from?"
          />
        </div>

        <div className="md:col-span-2">
          <label htmlFor="itemsRequested" className="mb-2 block text-sm font-medium text-[#f3e8ff]">
            Items Requested
          </label>
          <textarea
            id="itemsRequested"
            name="itemsRequested"
            required
            rows={4}
            value={formData.itemsRequested}
            onChange={handleChange}
            className={fieldClassName}
            placeholder="List the items the customer wants"
          />
        </div>

        <div className="md:col-span-2">
          <label htmlFor="address" className="mb-2 block text-sm font-medium text-[#f3e8ff]">
            Delivery Address
          </label>
          <input
            id="address"
            name="address"
            type="text"
            required
            value={formData.address}
            onChange={handleChange}
            className={fieldClassName}
            placeholder="Enter the delivery address"
          />
        </div>

        <div>
          <label htmlFor="preferredTime" className="mb-2 block text-sm font-medium text-[#f3e8ff]">
            Preferred Time
          </label>
          <input
            id="preferredTime"
            name="preferredTime"
            type="text"
            value={formData.preferredTime}
            onChange={handleChange}
            className={fieldClassName}
            placeholder="Example: Today at 6:30 PM"
          />
        </div>

        <div>
          <label htmlFor="paymentMethod" className="mb-2 block text-sm font-medium text-[#f3e8ff]">
            Payment Method
          </label>
          <select
            id="paymentMethod"
            name="paymentMethod"
            value={formData.paymentMethod}
            onChange={handleChange}
            className={fieldClassName}
          >
            <option value="pay_on_delivery" className="bg-[#14061f] text-white">Pay on Delivery</option>
            <option value="cash" className="bg-[#14061f] text-white">Cash</option>
            <option value="card" className="bg-[#14061f] text-white">Card</option>
            <option value="other" className="bg-[#14061f] text-white">Other</option>
          </select>
        </div>

        <div className="md:col-span-2">
          <label htmlFor="instructions" className="mb-2 block text-sm font-medium text-[#f3e8ff]">
            Special Instructions
          </label>
          <textarea
            id="instructions"
            name="instructions"
            rows={4}
            value={formData.instructions}
            onChange={handleChange}
            className={fieldClassName}
            placeholder="Add any additional notes or instructions"
          />
        </div>
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full rounded-full border border-fuchsia-300/60 bg-[linear-gradient(90deg,_rgba(193,41,255,0.95),_rgba(142,43,255,0.95))] px-6 py-3 text-sm font-bold uppercase tracking-[0.16em] text-white shadow-[0_0_30px_rgba(193,41,255,0.24)] transition hover:scale-[1.01] disabled:cursor-not-allowed disabled:opacity-60"
      >
        {isSubmitting ? "Submitting..." : "Submit Request"}
      </button>
    </form>
  );
}
