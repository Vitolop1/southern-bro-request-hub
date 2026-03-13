import Image from "next/image";
import Link from "next/link";
import { brandProfiles } from "@/lib/brand-data";

export default function ServiceCards() {
  return (
    <section
      id="brands"
      className="relative mx-auto max-w-7xl px-6 py-16 md:py-20"
    >
      <div className="mx-auto mb-12 max-w-3xl text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#ffb8f0]">
          Brands & Services
        </p>
        <h2 className="mt-4 text-3xl font-black uppercase tracking-[0.05em] text-white md:text-5xl">
          Integrated logos, clear services, one strong Southern Bro identity
        </h2>
        <p className="mt-5 text-lg leading-8 text-[#d9d1e8]">
          Each block below mirrors the flyer direction your supervisor wants,
          but in a cleaner website format that is easier to scan and easier to
          build in Squarespace.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {brandProfiles.map((brand) => (
          <article
            key={brand.name}
            id={brand.id}
            className={[
              "group relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#13071f]/85 p-6 shadow-[0_0_60px_rgba(126,34,206,0.18)] backdrop-blur-sm",
              brand.featured ? "md:col-span-2" : "",
            ].join(" ")}
          >
            <div className={`absolute inset-0 bg-gradient-to-br ${brand.accent}`} />
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/60 to-transparent" />

            <div className="relative grid items-center gap-6 lg:grid-cols-[220px_1fr]">
              <div className="flex justify-center">
                <Image
                  src={brand.logo}
                  alt={`${brand.name} logo`}
                  width={220}
                  height={220}
                  className="h-auto w-[170px] drop-shadow-[0_0_25px_rgba(255,79,216,0.35)] transition duration-300 group-hover:scale-[1.03] md:w-[200px]"
                />
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#ffb8f0]">
                  {brand.shortLabel}
                </p>
                <h3 className="text-2xl font-black uppercase tracking-[0.04em] text-white">
                  {brand.name}
                </h3>
                <p className="mt-3 max-w-2xl text-base leading-7 text-[#e7dcf3]">
                  {brand.summary}
                </p>

                <ul className="mt-5 grid gap-3 text-base text-[#fff8ff] md:grid-cols-2">
                  {brand.services.map((service) => (
                    <li key={service} className="flex items-start gap-3">
                      <span className="mt-2 h-2.5 w-2.5 rounded-full bg-[#ff4fd8]" />
                      <span>{service}</span>
                    </li>
                  ))}
                </ul>

                <p className="mt-5 text-sm leading-6 text-[#d9d1e8]">
                  {brand.audience}
                </p>

                <div className="mt-6">
                  <div className="flex flex-col gap-3 sm:flex-row">
                    <Link
                      href={brand.pageHref}
                      className="inline-flex rounded-full border border-white/15 bg-white/6 px-5 py-3 text-sm font-bold uppercase tracking-[0.16em] text-white transition hover:bg-white/12"
                    >
                      Learn More
                    </Link>
                    <Link
                      href={brand.requestHref}
                      className="inline-flex rounded-full border border-fuchsia-300/60 bg-white/8 px-5 py-3 text-sm font-bold uppercase tracking-[0.16em] text-white transition hover:bg-white/14"
                    >
                      {brand.ctaLabel}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
