"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useLanguage } from "@/components/language-provider";
import type { ServiceFormData } from "@/types/requests";
import { requestCategoryOptions } from "@/lib/site-content";

type ServiceFormProps = {
  title?: string;
  description?: string;
  sectionLabel?: string;
  submitLabel?: string;
  defaultCategory?: string;
  lockCategory?: boolean;
};

export default function ServiceForm({
  title,
  description,
  sectionLabel,
  submitLabel,
  defaultCategory = requestCategoryOptions[0],
  lockCategory = false,
}: ServiceFormProps) {
  const router = useRouter();
  const { messages } = useLanguage();
  const fieldClassName =
    "w-full rounded-[1.25rem] border border-white/10 bg-white/6 px-4 py-3 text-white outline-none transition placeholder:text-[#aa9fc0] focus:border-fuchsia-300/70 focus:bg-white/10";

  const categoryOptions = requestCategoryOptions.map((value, index) => ({
    value,
    label: messages.requestQuotePage.categoryLabels[index] ?? value,
  }));
  const urgencyOptions = [
    { value: "Low", label: messages.serviceForm.urgency[0] },
    { value: "Normal", label: messages.serviceForm.urgency[1] },
    { value: "High", label: messages.serviceForm.urgency[2] },
    { value: "Urgent", label: messages.serviceForm.urgency[3] },
  ];
  const resolvedSectionLabel = sectionLabel ?? messages.serviceForm.sectionLabel;
  const resolvedTitle = title ?? messages.serviceForm.title;
  const resolvedDescription = description ?? messages.serviceForm.description;
  const resolvedSubmitLabel = submitLabel ?? messages.serviceForm.submitLabel;

  const [formData, setFormData] = useState<ServiceFormData>({
    fullName: "",
    companyName: "",
    phone: "",
    email: "",
    category: defaultCategory,
    description: "",
    address: "",
    timeline: "",
    budget: "",
    referralSource: "",
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

    setTimeout(() => {
      setIsSubmitting(false);
      const params = new URLSearchParams({
        type: "quote",
        request: `SBE-${Date.now().toString().slice(-6)}`,
        service: formData.category,
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
          {resolvedSectionLabel}
        </p>
        <h2 className="mt-3 text-2xl font-black uppercase tracking-[0.05em] text-white">
          {resolvedTitle}
        </h2>
        <p className="mt-3 text-sm leading-6 text-[#d9d1e8]">
          {resolvedDescription}
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <label htmlFor="fullName" className="mb-2 block text-sm font-medium text-[#f3e8ff]">
            {messages.serviceForm.labels.fullName}
          </label>
          <input
            id="fullName"
            name="fullName"
            type="text"
            required
            value={formData.fullName}
            onChange={handleChange}
            className={fieldClassName}
            placeholder={messages.serviceForm.placeholders.fullName}
          />
        </div>

        <div>
          <label htmlFor="companyName" className="mb-2 block text-sm font-medium text-[#f3e8ff]">
            {messages.serviceForm.labels.companyName}
          </label>
          <input
            id="companyName"
            name="companyName"
            type="text"
            value={formData.companyName}
            onChange={handleChange}
            className={fieldClassName}
            placeholder={messages.serviceForm.placeholders.companyName}
          />
        </div>

        <div>
          <label htmlFor="phone" className="mb-2 block text-sm font-medium text-[#f3e8ff]">
            {messages.serviceForm.labels.phone}
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            value={formData.phone}
            onChange={handleChange}
            className={fieldClassName}
            placeholder={messages.serviceForm.placeholders.phone}
          />
        </div>

        <div>
          <label htmlFor="email" className="mb-2 block text-sm font-medium text-[#f3e8ff]">
            {messages.serviceForm.labels.email}
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={formData.email}
            onChange={handleChange}
            className={fieldClassName}
            placeholder={messages.serviceForm.placeholders.email}
          />
        </div>

        <div>
          <label htmlFor="category" className="mb-2 block text-sm font-medium text-[#f3e8ff]">
            {messages.serviceForm.labels.category}
          </label>
          {lockCategory ? (
            <div className="rounded-[1.25rem] border border-fuchsia-300/40 bg-fuchsia-500/10 px-4 py-3 text-sm font-semibold uppercase tracking-[0.08em] text-white">
              {categoryOptions.find((option) => option.value === formData.category)?.label ?? formData.category}
            </div>
          ) : (
            <select
              id="category"
              name="category"
              value={formData.category}
              onChange={handleChange}
              className={fieldClassName}
            >
              {categoryOptions.map((option) => (
                <option key={option.value} value={option.value} className="bg-[#14061f] text-white">
                  {option.label}
                </option>
              ))}
            </select>
          )}
        </div>

        <div className="md:col-span-2">
          <label htmlFor="description" className="mb-2 block text-sm font-medium text-[#f3e8ff]">
            {messages.serviceForm.labels.description}
          </label>
          <textarea
            id="description"
            name="description"
            required
            rows={5}
            value={formData.description}
            onChange={handleChange}
            className={fieldClassName}
            placeholder={messages.serviceForm.placeholders.description}
          />
        </div>

        <div className="md:col-span-2">
          <label htmlFor="address" className="mb-2 block text-sm font-medium text-[#f3e8ff]">
            {messages.serviceForm.labels.address}
          </label>
          <input
            id="address"
            name="address"
            type="text"
            value={formData.address}
            onChange={handleChange}
            className={fieldClassName}
            placeholder={messages.serviceForm.placeholders.address}
          />
        </div>

        <div>
          <label htmlFor="timeline" className="mb-2 block text-sm font-medium text-[#f3e8ff]">
            {messages.serviceForm.labels.timeline}
          </label>
          <input
            id="timeline"
            name="timeline"
            type="text"
            value={formData.timeline}
            onChange={handleChange}
            className={fieldClassName}
            placeholder={messages.serviceForm.placeholders.timeline}
          />
        </div>

        <div>
          <label htmlFor="budget" className="mb-2 block text-sm font-medium text-[#f3e8ff]">
            {messages.serviceForm.labels.budget}
          </label>
          <input
            id="budget"
            name="budget"
            type="text"
            value={formData.budget}
            onChange={handleChange}
            className={fieldClassName}
            placeholder={messages.serviceForm.placeholders.budget}
          />
        </div>

        <div>
          <label htmlFor="urgency" className="mb-2 block text-sm font-medium text-[#f3e8ff]">
            {messages.serviceForm.labels.urgency}
          </label>
          <select
            id="urgency"
            name="urgency"
            value={formData.urgency}
            onChange={handleChange}
            className={fieldClassName}
          >
            {urgencyOptions.map((option) => (
              <option key={option.value} value={option.value} className="bg-[#14061f] text-white">
                {option.label}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="referralSource" className="mb-2 block text-sm font-medium text-[#f3e8ff]">
            {messages.serviceForm.labels.referralSource}
          </label>
          <input
            id="referralSource"
            name="referralSource"
            type="text"
            value={formData.referralSource}
            onChange={handleChange}
            className={fieldClassName}
            placeholder={messages.serviceForm.placeholders.referralSource}
          />
        </div>
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full rounded-full border border-fuchsia-300/60 bg-[linear-gradient(90deg,_rgba(193,41,255,0.95),_rgba(142,43,255,0.95))] px-6 py-3 text-sm font-bold uppercase tracking-[0.16em] text-white shadow-[0_0_30px_rgba(193,41,255,0.24)] transition hover:scale-[1.01] disabled:cursor-not-allowed disabled:opacity-60"
      >
        {isSubmitting ? messages.serviceForm.submitting : resolvedSubmitLabel}
      </button>
    </form>
  );
}
