"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import type { ServiceFormData } from "@/types/requests";
import { serviceCategoryOptions } from "@/lib/brand-data";

export default function ServiceForm() {
  const router = useRouter();
  const fieldClassName =
    "w-full rounded-[1.25rem] border border-white/10 bg-white/6 px-4 py-3 text-white outline-none transition placeholder:text-[#aa9fc0] focus:border-fuchsia-300/70 focus:bg-white/10";

  const [formData, setFormData] = useState<ServiceFormData>({
    fullName: "",
    phone: "",
    email: "",
    category: serviceCategoryOptions[0],
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
      className="space-y-6 rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(26,8,48,0.94),rgba(10,4,18,0.98))] p-8 shadow-[0_0_60px_rgba(193,41,255,0.12)]"
    >
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.26em] text-[#ffb8f0]">
          Service Request
        </p>
        <h2 className="mt-3 text-2xl font-black uppercase tracking-[0.05em] text-white">
          Service Request
        </h2>
        <p className="mt-3 text-sm leading-6 text-[#d9d1e8]">
          Fill out the form below to request support from Southern Bro Enterprises
          or one of the active brands shown on the site.
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
          <label htmlFor="category" className="mb-2 block text-sm font-medium text-[#f3e8ff]">
            Brand or Service
          </label>
          <select
            id="category"
            name="category"
            value={formData.category}
            onChange={handleChange}
            className={fieldClassName}
          >
            {serviceCategoryOptions.map((option) => (
              <option key={option} className="bg-[#14061f] text-white">
                {option}
              </option>
            ))}
            <option className="bg-[#14061f] text-white">Other</option>
          </select>
        </div>

        <div className="md:col-span-2">
          <label htmlFor="description" className="mb-2 block text-sm font-medium text-[#f3e8ff]">
            Description
          </label>
          <textarea
            id="description"
            name="description"
            required
            rows={5}
            value={formData.description}
            onChange={handleChange}
            className={fieldClassName}
            placeholder="Describe the service needed"
          />
        </div>

        <div className="md:col-span-2">
          <label htmlFor="address" className="mb-2 block text-sm font-medium text-[#f3e8ff]">
            Address
          </label>
          <input
            id="address"
            name="address"
            type="text"
            value={formData.address}
            onChange={handleChange}
            className={fieldClassName}
            placeholder="Enter the service address if applicable"
          />
        </div>

        <div>
          <label
            htmlFor="preferredDateTime"
            className="mb-2 block text-sm font-medium text-[#f3e8ff]"
          >
            Preferred Date / Time
          </label>
          <input
            id="preferredDateTime"
            name="preferredDateTime"
            type="text"
            value={formData.preferredDateTime}
            onChange={handleChange}
            className={fieldClassName}
            placeholder="Example: Monday at 2:00 PM"
          />
        </div>

        <div>
          <label htmlFor="urgency" className="mb-2 block text-sm font-medium text-[#f3e8ff]">
            Urgency
          </label>
          <select
            id="urgency"
            name="urgency"
            value={formData.urgency}
            onChange={handleChange}
            className={fieldClassName}
          >
            <option className="bg-[#14061f] text-white">Low</option>
            <option className="bg-[#14061f] text-white">Normal</option>
            <option className="bg-[#14061f] text-white">High</option>
            <option className="bg-[#14061f] text-white">Urgent</option>
          </select>
        </div>
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full rounded-full border border-fuchsia-300/60 bg-[linear-gradient(90deg,_rgba(193,41,255,0.95),_rgba(142,43,255,0.95))] px-6 py-3 text-sm font-bold uppercase tracking-[0.16em] text-white shadow-[0_0_30px_rgba(193,41,255,0.24)] transition hover:scale-[1.01] disabled:cursor-not-allowed disabled:opacity-60"
      >
        {isSubmitting ? "Submitting..." : "Submit Service Request"}
      </button>
    </form>
  );
}
