"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import type {
  DeliveryFormData,
  DeliveryRequestPayload,
  RequestSubmissionResult,
} from "@/types/requests";
import type { RequestFormTheme } from "@/components/service-form";

type DeliveryFormProps = {
  title?: string;
  description?: string;
  sectionLabel?: string;
  submitLabel?: string;
  serviceLabel?: string;
  theme?: RequestFormTheme;
};

export default function DeliveryForm({
  title = "Delivery / Pickup Request",
  description = "Fill out the form below to request a delivery or pickup service from Southern Bro Delivery.",
  sectionLabel = "Delivery Booking",
  submitLabel = "Submit Request",
  serviceLabel = "Southern Bro Delivery",
  theme,
}: DeliveryFormProps) {
  const router = useRouter();
  const fieldClassName =
    theme?.inputClassName ??
    "w-full rounded-[1.25rem] border border-white/10 bg-white/6 px-4 py-3 text-white outline-none transition placeholder:text-[#aa9fc0] focus:border-fuchsia-300/70 focus:bg-white/10";
  const formClassName =
    theme?.formClassName ??
    "space-y-6 rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(26,8,48,0.94),rgba(10,4,18,0.98))] p-8 shadow-[0_0_60px_rgba(193,41,255,0.12)]";
  const sectionLabelClassName =
    theme?.sectionLabelClassName ??
    "text-sm font-semibold uppercase tracking-[0.26em] text-[#ffb8f0]";
  const fieldLabelClassName =
    theme?.fieldLabelClassName ??
    "mb-2 block text-sm font-medium text-[#f3e8ff]";
  const descriptionClassName =
    theme?.descriptionClassName ??
    "mt-3 text-sm leading-6 text-[#d9d1e8]";
  const optionClassName =
    theme?.optionClassName ?? "bg-[#14061f] text-white";
  const buttonClassName =
    theme?.buttonClassName ??
    "w-full rounded-full border border-fuchsia-300/60 bg-[linear-gradient(90deg,_rgba(193,41,255,0.95),_rgba(142,43,255,0.95))] px-6 py-3 text-sm font-bold uppercase tracking-[0.16em] text-white shadow-[0_0_30px_rgba(193,41,255,0.24)] transition hover:scale-[1.01] disabled:cursor-not-allowed disabled:opacity-60";
  const errorClassName =
    theme?.errorClassName ??
    "rounded-[1.25rem] border border-rose-300/40 bg-rose-500/10 px-4 py-3 text-sm text-rose-100";

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
  const [submitError, setSubmitError] = useState("");

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
    setSubmitError("");

    try {
      const payload: DeliveryRequestPayload = {
        kind: "delivery",
        serviceLabel,
        ...formData,
      };

      const response = await fetch("/api/service-requests", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = (await response.json()) as
        | RequestSubmissionResult
        | { error?: string };

      if (!response.ok) {
        throw new Error(
          ("error" in result && result.error) || "Unable to submit the request."
        );
      }

      const submissionResult = result as RequestSubmissionResult;

      router.push(
        `/thank-you?type=delivery&request=${encodeURIComponent(submissionResult.requestId)}&service=${encodeURIComponent(submissionResult.service)}`
      );
    } catch (error) {
      setSubmitError(
        error instanceof Error
          ? error.message
          : "Unable to submit the request right now."
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={formClassName}
    >
      <div>
        <p className={sectionLabelClassName}>
          {sectionLabel}
        </p>
        <h2 className="mt-3 text-2xl font-black uppercase tracking-[0.05em] text-white">
          {title}
        </h2>
        <p className={descriptionClassName}>
          {description}
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <label htmlFor="fullName" className={fieldLabelClassName}>
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
          <label htmlFor="phone" className={fieldLabelClassName}>
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
          <label htmlFor="email" className={fieldLabelClassName}>
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
          <label htmlFor="requestType" className={fieldLabelClassName}>
            Request Type
          </label>
          <select
            id="requestType"
            name="requestType"
            value={formData.requestType}
            onChange={handleChange}
            className={fieldClassName}
          >
            <option value="delivery" className={optionClassName}>Delivery</option>
            <option value="pickup" className={optionClassName}>Pickup</option>
          </select>
        </div>

        <div className="md:col-span-2">
          <label htmlFor="businessName" className={fieldLabelClassName}>
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
          <label htmlFor="itemsRequested" className={fieldLabelClassName}>
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
          <label htmlFor="address" className={fieldLabelClassName}>
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
          <label htmlFor="preferredTime" className={fieldLabelClassName}>
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
          <label htmlFor="paymentMethod" className={fieldLabelClassName}>
            Payment Method
          </label>
          <select
            id="paymentMethod"
            name="paymentMethod"
            value={formData.paymentMethod}
            onChange={handleChange}
            className={fieldClassName}
          >
            <option value="pay_on_delivery" className={optionClassName}>Pay on Delivery</option>
            <option value="cash" className={optionClassName}>Cash</option>
            <option value="card" className={optionClassName}>Card</option>
            <option value="other" className={optionClassName}>Other</option>
          </select>
        </div>

        <div className="md:col-span-2">
          <label htmlFor="instructions" className={fieldLabelClassName}>
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

      {submitError && <p className={errorClassName}>{submitError}</p>}

      <button
        type="submit"
        disabled={isSubmitting}
        className={buttonClassName}
      >
        {isSubmitting ? "Submitting..." : submitLabel}
      </button>
    </form>
  );
}
