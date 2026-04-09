"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useLanguage } from "@/components/language-provider";
import type {
  RequestSubmissionResult,
  ServiceFormData,
  ServiceRequestPayload,
} from "@/types/requests";
import { requestCategoryOptions } from "@/lib/site-content";

export type RequestFormTheme = {
  formClassName?: string;
  inputClassName?: string;
  optionClassName?: string;
  sectionLabelClassName?: string;
  fieldLabelClassName?: string;
  descriptionClassName?: string;
  lockedCategoryClassName?: string;
  buttonClassName?: string;
  errorClassName?: string;
};

type ServiceFormProps = {
  title?: string;
  description?: string;
  sectionLabel?: string;
  submitLabel?: string;
  defaultCategory?: string;
  lockCategory?: boolean;
  theme?: RequestFormTheme;
};

export default function ServiceForm({
  title,
  description,
  sectionLabel,
  submitLabel,
  defaultCategory = requestCategoryOptions[0],
  lockCategory = false,
  theme,
}: ServiceFormProps) {
  const router = useRouter();
  const { messages } = useLanguage();
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
  const lockedCategoryClassName =
    theme?.lockedCategoryClassName ??
    "rounded-[1.25rem] border border-fuchsia-300/40 bg-fuchsia-500/10 px-4 py-3 text-sm font-semibold uppercase tracking-[0.08em] text-white";
  const optionClassName =
    theme?.optionClassName ?? "bg-[#14061f] text-white";
  const buttonClassName =
    theme?.buttonClassName ??
    "w-full rounded-full border border-fuchsia-300/60 bg-[linear-gradient(90deg,_rgba(193,41,255,0.95),_rgba(142,43,255,0.95))] px-6 py-3 text-sm font-bold uppercase tracking-[0.16em] text-white shadow-[0_0_30px_rgba(193,41,255,0.24)] transition hover:scale-[1.01] disabled:cursor-not-allowed disabled:opacity-60";
  const errorClassName =
    theme?.errorClassName ??
    "rounded-[1.25rem] border border-rose-300/40 bg-rose-500/10 px-4 py-3 text-sm text-rose-100";

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
    website: "",
    category: defaultCategory,
    description: "",
    address: "",
    timeline: "",
    budget: "",
    referralSource: "",
    urgency: "Normal",
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
      const payload: ServiceRequestPayload = {
        kind: "service",
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
        `/thank-you?type=quote&request=${encodeURIComponent(submissionResult.requestId)}&service=${encodeURIComponent(submissionResult.service)}`
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
        <label htmlFor="website" className="sr-only">
          Website
        </label>
        <input
          id="website"
          name="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={formData.website}
          onChange={handleChange}
          className="absolute left-[-9999px] top-auto h-px w-px overflow-hidden opacity-0"
          aria-hidden="true"
        />
        <p className={sectionLabelClassName}>
          {resolvedSectionLabel}
        </p>
        <h2 className="mt-3 text-2xl font-black uppercase tracking-[0.05em] text-white">
          {resolvedTitle}
        </h2>
        <p className={descriptionClassName}>
          {resolvedDescription}
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <label htmlFor="fullName" className={fieldLabelClassName}>
            {messages.serviceForm.labels.fullName}
          </label>
          <input
            id="fullName"
            name="fullName"
            type="text"
            required
            minLength={2}
            value={formData.fullName}
            onChange={handleChange}
            className={fieldClassName}
            placeholder={messages.serviceForm.placeholders.fullName}
          />
        </div>

        <div>
          <label htmlFor="companyName" className={fieldLabelClassName}>
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
          <label htmlFor="phone" className={fieldLabelClassName}>
            {messages.serviceForm.labels.phone}
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            minLength={7}
            value={formData.phone}
            onChange={handleChange}
            className={fieldClassName}
            placeholder={messages.serviceForm.placeholders.phone}
          />
        </div>

        <div>
          <label htmlFor="email" className={fieldLabelClassName}>
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
          <label htmlFor="category" className={fieldLabelClassName}>
            {messages.serviceForm.labels.category}
          </label>
          {lockCategory ? (
            <div className={lockedCategoryClassName}>
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
                <option key={option.value} value={option.value} className={optionClassName}>
                  {option.label}
                </option>
              ))}
            </select>
          )}
        </div>

        <div className="md:col-span-2">
          <label htmlFor="description" className={fieldLabelClassName}>
            {messages.serviceForm.labels.description}
          </label>
          <textarea
            id="description"
            name="description"
            required
            rows={5}
            minLength={10}
            value={formData.description}
            onChange={handleChange}
            className={fieldClassName}
            placeholder={messages.serviceForm.placeholders.description}
          />
        </div>

        <div className="md:col-span-2">
          <label htmlFor="address" className={fieldLabelClassName}>
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
          <label htmlFor="timeline" className={fieldLabelClassName}>
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
          <label htmlFor="budget" className={fieldLabelClassName}>
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
          <label htmlFor="urgency" className={fieldLabelClassName}>
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
              <option key={option.value} value={option.value} className={optionClassName}>
                {option.label}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="referralSource" className={fieldLabelClassName}>
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

      {submitError && <p className={errorClassName}>{submitError}</p>}

      <button
        type="submit"
        disabled={isSubmitting}
        className={buttonClassName}
      >
        {isSubmitting ? messages.serviceForm.submitting : resolvedSubmitLabel}
      </button>
    </form>
  );
}
