import type { Metadata } from "next";
import RequestQuotePageContent from "@/components/request-quote-page-content";
import { requestCategoryOptions } from "@/lib/site-content";

type RequestQuotePageProps = {
  searchParams: Promise<{
    service?: string;
  }>;
};

export const metadata: Metadata = {
  title: "Request a Quote | Southern Bro Enterprises",
  description:
    "Submit a professional quote request for consulting, detailing, ticketing, community support, or other Southern Bro services.",
};

export default async function RequestQuotePage({
  searchParams,
}: RequestQuotePageProps) {
  const { service } = await searchParams;
  const selectedCategory = requestCategoryOptions.includes(service || "")
    ? (service as string)
    : requestCategoryOptions[0];

  return <RequestQuotePageContent selectedCategory={selectedCategory} />;
}
