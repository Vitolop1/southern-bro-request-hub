"use client";

import Link from "next/link";
import { useLanguage } from "@/components/language-provider";
import { resourceArticles } from "@/lib/site-content";

export default function ResourcePreview() {
  const { messages } = useLanguage();

  return (
    <section className="mx-auto max-w-7xl px-6 py-14 md:py-18">
      <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#ffb8f0]">
            {messages.resourcePreview.eyebrow}
          </p>
          <h2 className="mt-4 text-3xl font-black uppercase tracking-[0.05em] text-white md:text-4xl">
            {messages.resourcePreview.title}
          </h2>
        </div>

        <Link
          href="/resources"
          className="inline-flex rounded-full border border-white/15 bg-white/6 px-5 py-3 text-sm font-bold uppercase tracking-[0.16em] text-white transition hover:bg-white/12"
        >
          {messages.resourcePreview.button}
        </Link>
      </div>

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {resourceArticles.map((article, index) => (
          <article
            key={article.title}
            className="rounded-[1.75rem] border border-white/10 bg-[linear-gradient(180deg,rgba(26,8,48,0.94),rgba(11,4,22,0.98))] p-6"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#ffb8f0]">
              {messages.resourcePreview.categories[index] ?? article.category}
            </p>
            <h3 className="mt-3 text-xl font-black uppercase tracking-[0.04em] text-white">
              {messages.resourcePreview.titles[index] ?? article.title}
            </h3>
            <p className="mt-4 text-sm leading-7 text-[#ddd2eb]">
              {messages.resourcePreview.descriptions[index] ?? article.description}
            </p>
            <Link
              href={article.href}
              className="mt-5 inline-flex rounded-full border border-fuchsia-300/50 bg-white/8 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-white transition hover:bg-white/14"
            >
              {messages.resourcePreview.learnMore}
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}
