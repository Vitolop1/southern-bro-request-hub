"use client";

import Link from "next/link";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import PriorityServices from "@/components/priority-services";
import ServiceForm from "@/components/service-form";
import { useLanguage } from "@/components/language-provider";
import { requestCategoryOptions } from "@/lib/site-content";

type RequestQuotePageContentProps = {
  selectedCategory: string;
};

export default function RequestQuotePageContent({
  selectedCategory,
}: RequestQuotePageContentProps) {
  const { messages } = useLanguage();

  return (
    <main className="min-h-screen bg-[#090312] text-white">
      <Navbar />

      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,79,216,0.2),_transparent_24%),linear-gradient(180deg,_#090312_0%,_#14061f_55%,_#090312_100%)]" />
        <div className="relative mx-auto max-w-7xl px-4 py-14 sm:px-6 md:py-20">
          <div className="max-w-4xl">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#ffb8f0]">
              {messages.requestQuotePage.eyebrow}
            </p>
            <h1 className="mt-4 text-3xl font-black uppercase tracking-[0.05em] text-white sm:text-4xl md:text-6xl">
              {messages.requestQuotePage.title}
            </h1>
            <p className="mt-5 max-w-3xl text-base leading-7 text-[#ddd2eb] sm:text-lg md:leading-8">
              {messages.requestQuotePage.intro}
            </p>
          </div>
        </div>
      </section>

      <PriorityServices compact />

      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 md:pb-20">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div className="space-y-6">
            <div className="rounded-[1.6rem] border border-white/10 bg-[linear-gradient(180deg,rgba(26,8,48,0.96),rgba(11,4,22,0.98))] p-5 md:rounded-[2rem] md:p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#ffb8f0]">
                {messages.common.whyThisPageMatters}
              </p>
              <h2 className="mt-4 text-2xl font-black uppercase tracking-[0.05em] text-white md:text-3xl">
                {messages.common.clearQuoteCapture}
              </h2>

              <div className="mt-8 space-y-4">
                {messages.requestQuotePage.benefits.map((benefit, index) => (
                  <div
                    key={benefit}
                    className="rounded-[1.5rem] border border-white/10 bg-white/5 p-5"
                  >
                    <div className="flex items-center gap-4">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full border border-fuchsia-300/60 bg-fuchsia-500/15 font-black text-white">
                        {index + 1}
                      </div>
                      <p className="text-sm leading-6 text-[#f6eeff]">{benefit}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[1.6rem] border border-white/10 bg-white/5 p-5 md:rounded-[2rem] md:p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#ffb8f0]">
                {messages.common.quickAccess}
              </p>
              <div className="mt-5 flex flex-wrap gap-3">
                {requestCategoryOptions.slice(0, 6).map((option, index) => (
                  <Link
                    key={option}
                    href={`/request-quote?service=${encodeURIComponent(option)}`}
                    className="rounded-full border border-white/15 bg-white/6 px-4 py-2 text-xs font-bold uppercase tracking-[0.14em] text-white transition hover:bg-white/12"
                  >
                    {messages.requestQuotePage.categoryLabels[index] ?? option}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <ServiceForm
            key={selectedCategory}
            defaultCategory={selectedCategory}
            title={messages.serviceForm.title}
            description={messages.serviceForm.description}
            submitLabel={messages.serviceForm.submitLabel}
          />
        </div>
      </section>

      <Footer />
    </main>
  );
}
