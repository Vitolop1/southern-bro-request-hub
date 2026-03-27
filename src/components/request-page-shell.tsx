import Image from "next/image";
import type { ReactNode } from "react";

type RequestPageShellTheme = {
  pageClassName?: string;
  heroGlowClassName?: string;
  surfaceClassName?: string;
  accentLabelClassName?: string;
  badgeClassName?: string;
  chipClassName?: string;
  bulletClassName?: string;
};

type RequestPageShellProps = {
  eyebrow: string;
  title: string;
  intro: string;
  brandName: string;
  brandSummary: string;
  logoSrc: string;
  logoAlt: string;
  highlights: string[];
  checklistTitle: string;
  checklist: string[];
  audience: string;
  requestNote: string;
  children: ReactNode;
  theme?: RequestPageShellTheme;
};

export default function RequestPageShell({
  eyebrow,
  title,
  intro,
  brandName,
  brandSummary,
  logoSrc,
  logoAlt,
  highlights,
  checklistTitle,
  checklist,
  audience,
  requestNote,
  children,
  theme,
}: RequestPageShellProps) {
  const pageClassName =
    theme?.pageClassName ??
    "bg-[#090312] text-white";
  const heroGlowClassName =
    theme?.heroGlowClassName ??
    "bg-[radial-gradient(circle_at_top,_rgba(255,79,216,0.22),_transparent_24%),radial-gradient(circle_at_20%_30%,_rgba(30,167,255,0.14),_transparent_30%),linear-gradient(180deg,_#090312_0%,_#14061f_52%,_#090312_100%)]";
  const surfaceClassName =
    theme?.surfaceClassName ??
    "border-white/10 bg-[linear-gradient(180deg,rgba(20,8,34,0.94),rgba(8,4,18,0.98))]";
  const accentLabelClassName =
    theme?.accentLabelClassName ??
    "text-[#ffb8f0]";
  const badgeClassName =
    theme?.badgeClassName ??
    "border-fuchsia-300/40 bg-fuchsia-500/10 text-white";
  const chipClassName =
    theme?.chipClassName ??
    "border-white/10 bg-white/5 text-[#eef4ff]";
  const bulletClassName =
    theme?.bulletClassName ??
    "bg-[#ff4fd8]";

  return (
    <>
      <section className={`relative overflow-hidden border-b border-white/10 ${pageClassName}`}>
        <div className={`absolute inset-0 ${heroGlowClassName}`} />
        <div className="relative mx-auto max-w-7xl px-6 py-14 md:py-20">
          <div className="grid gap-8 xl:grid-cols-[0.94fr_1.06fr] xl:items-start">
            <div className="space-y-6">
              <div className={`rounded-[2rem] border p-7 shadow-[0_0_60px_rgba(0,0,0,0.18)] backdrop-blur-sm ${surfaceClassName}`}>
                <div className={`text-sm font-semibold uppercase tracking-[0.28em] ${accentLabelClassName}`}>
                  {eyebrow}
                </div>
                <h1 className="mt-4 text-4xl font-black uppercase tracking-[0.05em] text-white md:text-6xl">
                  {title}
                </h1>
                <p className="mt-5 max-w-3xl text-lg leading-8 text-[#ddd2eb]">
                  {intro}
                </p>

                <div className="mt-8 grid gap-4 sm:grid-cols-[180px_1fr] sm:items-center">
                  <div className="rounded-[1.75rem] border border-white/10 bg-white/5 p-5 text-center">
                    <Image
                      src={logoSrc}
                      alt={logoAlt}
                      width={220}
                      height={220}
                      className="mx-auto h-auto w-[130px] object-contain drop-shadow-[0_0_28px_rgba(255,79,216,0.28)]"
                    />
                  </div>
                  <div>
                    <div className={`inline-flex rounded-full border px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] ${badgeClassName}`}>
                      Official {brandName} request page
                    </div>
                    <p className="mt-4 text-base leading-7 text-[#f5efff]">
                      {brandSummary}
                    </p>
                    <p className="mt-4 text-sm leading-6 text-[#d8d2e8]">
                      {requestNote}
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                {highlights.map((highlight) => (
                  <div
                    key={highlight}
                    className={`rounded-[1.5rem] border p-5 text-sm font-semibold uppercase tracking-[0.1em] ${chipClassName}`}
                  >
                    {highlight}
                  </div>
                ))}
              </div>

              <div className={`rounded-[2rem] border p-7 ${surfaceClassName}`}>
                <p className={`text-sm font-semibold uppercase tracking-[0.28em] ${accentLabelClassName}`}>
                  {checklistTitle}
                </p>
                <div className="mt-6 grid gap-4 md:grid-cols-2">
                  {checklist.map((item) => (
                    <div
                      key={item}
                      className="rounded-[1.5rem] border border-white/10 bg-white/5 p-5"
                    >
                      <div className="flex items-start gap-3">
                        <span className={`mt-2 h-2.5 w-2.5 rounded-full ${bulletClassName}`} />
                        <span className="text-sm leading-7 text-[#f7efff]">{item}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className={`rounded-[2rem] border p-7 ${surfaceClassName}`}>
                <p className={`text-sm font-semibold uppercase tracking-[0.28em] ${accentLabelClassName}`}>
                  Best Fit
                </p>
                <p className="mt-4 text-base leading-7 text-[#d9d1e8]">
                  {audience}
                </p>
              </div>
            </div>

            <div className="xl:sticky xl:top-24">
              {children}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
