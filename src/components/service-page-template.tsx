import Image from "next/image";
import Link from "next/link";
import type { PriorityService } from "@/lib/site-content";

type ServicePageTemplateProps = {
  service: PriorityService;
};

export default function ServicePageTemplate({
  service,
}: ServicePageTemplateProps) {
  return (
    <>
      <section className="relative overflow-hidden border-b border-white/10">
        <div className={`absolute inset-0 bg-gradient-to-br ${service.accent}`} />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(9,3,18,0.9),rgba(20,6,31,0.94),rgba(9,3,18,0.98))]" />
        <div className="relative mx-auto grid max-w-7xl gap-10 px-6 py-16 md:py-20 lg:grid-cols-[1fr_0.95fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#ffb8f0]">
              {service.shortLabel}
            </p>
            <h1 className="mt-4 text-4xl font-black uppercase tracking-[0.05em] text-white md:text-6xl">
              {service.title}
            </h1>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-[#ddd2eb]">
              {service.summary}
            </p>
            <p className="mt-4 max-w-3xl text-base leading-7 text-[#e7dcf3]">
              {service.description}
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                href={`/request-quote?service=${encodeURIComponent(service.quoteCategory)}`}
                className="rounded-full border border-fuchsia-300/60 bg-[linear-gradient(90deg,_rgba(193,41,255,0.95),_rgba(142,43,255,0.95))] px-6 py-3 text-center text-sm font-bold uppercase tracking-[0.16em] text-white shadow-[0_0_28px_rgba(193,41,255,0.24)] transition hover:scale-[1.02]"
              >
                {service.ctaLabel}
              </Link>
              <Link
                href="/request-quote"
                className="rounded-full border border-white/15 bg-white/6 px-6 py-3 text-center text-sm font-bold uppercase tracking-[0.16em] text-white transition hover:bg-white/12"
              >
                Open Quote Form
              </Link>
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 text-center backdrop-blur-sm">
            <Image
              src={service.logo}
              alt={`${service.title} logo`}
              width={300}
              height={300}
              className="mx-auto w-[220px] drop-shadow-[0_0_30px_rgba(255,79,216,0.34)]"
            />
            <p className="mt-5 text-sm leading-7 text-[#d9d1e8]">
              Service area: Lynchburg, VA and the wider Virginia region.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-14 md:py-18">
        <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(26,8,48,0.95),rgba(11,4,22,0.98))] p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#ffb8f0]">
              Services Offered
            </p>
            <h2 className="mt-4 text-3xl font-black uppercase tracking-[0.05em] text-white">
              What customers can request through this service
            </h2>

            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {service.bullets.map((bullet) => (
                <div
                  key={bullet}
                  className="rounded-[1.5rem] border border-white/10 bg-white/5 p-5"
                >
                  <div className="flex items-center gap-4">
                    <Image
                      src={service.logo}
                      alt={`${service.title} logo`}
                      width={44}
                      height={44}
                      className="h-11 w-11 object-contain"
                    />
                    <p className="text-sm font-semibold uppercase tracking-[0.08em] text-[#f7efff]">
                      {bullet}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#ffb8f0]">
                Who It Is For
              </p>
              <p className="mt-4 text-base leading-7 text-[#d9d1e8]">
                {service.audience}
              </p>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#ffb8f0]">
                How It Works
              </p>
              <ol className="mt-4 space-y-4 text-sm leading-7 text-[#f5f3ff]">
                {service.steps.map((step, index) => (
                  <li key={step}>{index + 1}. {step}</li>
                ))}
              </ol>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#ffb8f0]">
                Expected Deliverables
              </p>
              <ul className="mt-4 space-y-3 text-sm leading-7 text-[#f5f3ff]">
                {service.deliverables.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-2 h-2.5 w-2.5 rounded-full bg-[#ff4fd8]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
