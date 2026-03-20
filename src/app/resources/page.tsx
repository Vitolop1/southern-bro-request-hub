import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { resourceArticles } from "@/lib/site-content";

export const metadata: Metadata = {
  title: "Resources | Southern Bro Enterprises",
  description:
    "Browse practical resources, intake guides, and service education content designed to support SEO and help customers request the right Southern Bro service.",
};

export default function ResourcesPage() {
  return (
    <main className="min-h-screen bg-[#090312] text-white">
      <Navbar />

      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,79,216,0.18),_transparent_24%),linear-gradient(180deg,_#090312_0%,_#14061f_55%,_#090312_100%)]" />
        <div className="relative mx-auto max-w-7xl px-6 py-16 md:py-20">
          <div className="max-w-4xl">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#ffb8f0]">
              Resources
            </p>
            <h1 className="mt-4 text-4xl font-black uppercase tracking-[0.05em] text-white md:text-6xl">
              Helpful content that builds trust and supports better customer requests
            </h1>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-[#ddd2eb]">
              A stronger resource section helps customers understand what to ask
              for, improves search visibility, and gives Southern Bro a more
              professional digital presence.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-14 md:py-18">
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {resourceArticles.map((article) => (
            <article
              key={article.title}
              className="rounded-[1.75rem] border border-white/10 bg-[linear-gradient(180deg,rgba(26,8,48,0.95),rgba(11,4,22,0.98))] p-6"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#ffb8f0]">
                {article.category}
              </p>
              <h2 className="mt-3 text-xl font-black uppercase tracking-[0.04em] text-white">
                {article.title}
              </h2>
              <p className="mt-4 text-sm leading-7 text-[#ddd2eb]">
                {article.description}
              </p>
              <Link
                href={article.href}
                className="mt-5 inline-flex rounded-full border border-fuchsia-300/50 bg-white/8 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-white transition hover:bg-white/14"
              >
                Explore Topic
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-16 md:pb-20">
        <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 md:p-10">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#ffb8f0]">
            Content Strategy
          </p>
          <h2 className="mt-4 text-3xl font-black uppercase tracking-[0.05em] text-white">
            Turn useful content into stronger customer action
          </h2>
          <p className="mt-4 max-w-3xl text-base leading-7 text-[#d9d1e8]">
            Each guide, FAQ, or update post should include a direct CTA to
            request a quote, contact the company, or move into the right service
            page. That keeps the resource section useful for both customers and search visibility.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
