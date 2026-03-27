import type { RequestFormTheme } from "@/components/service-form";

export type RequestPageTheme = {
  pageClassName: string;
  heroGlowClassName: string;
  surfaceClassName: string;
  accentLabelClassName: string;
  badgeClassName: string;
  chipClassName: string;
  bulletClassName: string;
  formTheme: RequestFormTheme;
};

function buildFormTheme(
  formClassName: string,
  inputClassName: string,
  sectionLabelClassName: string,
  lockedCategoryClassName: string,
  buttonClassName: string,
  errorClassName: string
): RequestFormTheme {
  return {
    formClassName,
    inputClassName,
    sectionLabelClassName,
    lockedCategoryClassName,
    buttonClassName,
    errorClassName,
  };
}

export const consultingRequestTheme: RequestPageTheme = {
  pageClassName: "bg-[#090312] text-white",
  heroGlowClassName:
    "bg-[radial-gradient(circle_at_top,_rgba(255,79,216,0.22),_transparent_24%),radial-gradient(circle_at_25%_25%,_rgba(159,54,255,0.14),_transparent_28%),linear-gradient(180deg,_#090312_0%,_#14061f_52%,_#090312_100%)]",
  surfaceClassName:
    "border-white/10 bg-[linear-gradient(180deg,rgba(28,8,44,0.95),rgba(9,4,19,0.98))]",
  accentLabelClassName: "text-[#ffb8f0]",
  badgeClassName: "border-fuchsia-300/35 bg-fuchsia-500/12 text-white",
  chipClassName: "border-white/10 bg-white/5 text-[#eef4ff]",
  bulletClassName: "bg-[#ff4fd8]",
  formTheme: buildFormTheme(
    "space-y-6 rounded-[2rem] border border-fuchsia-300/20 bg-[linear-gradient(180deg,rgba(31,8,49,0.98),rgba(10,4,20,0.98))] p-8 shadow-[0_0_60px_rgba(193,41,255,0.16)]",
    "w-full rounded-[1.25rem] border border-white/10 bg-white/6 px-4 py-3 text-white outline-none transition placeholder:text-[#aa9fc0] focus:border-fuchsia-300/70 focus:bg-white/10",
    "text-sm font-semibold uppercase tracking-[0.26em] text-[#ffb8f0]",
    "rounded-[1.25rem] border border-fuchsia-300/40 bg-fuchsia-500/10 px-4 py-3 text-sm font-semibold uppercase tracking-[0.08em] text-white",
    "w-full rounded-full border border-fuchsia-300/60 bg-[linear-gradient(90deg,_rgba(193,41,255,0.95),_rgba(142,43,255,0.95))] px-6 py-3 text-sm font-bold uppercase tracking-[0.16em] text-white shadow-[0_0_30px_rgba(193,41,255,0.24)] transition hover:scale-[1.01] disabled:cursor-not-allowed disabled:opacity-60",
    "rounded-[1.25rem] border border-rose-300/40 bg-rose-500/10 px-4 py-3 text-sm text-rose-100"
  ),
};

export const detailingRequestTheme: RequestPageTheme = {
  pageClassName: "bg-[#080814] text-white",
  heroGlowClassName:
    "bg-[radial-gradient(circle_at_top,_rgba(212,168,79,0.22),_transparent_24%),radial-gradient(circle_at_20%_30%,_rgba(30,167,255,0.14),_transparent_28%),linear-gradient(180deg,_#080814_0%,_#101827_50%,_#080814_100%)]",
  surfaceClassName:
    "border-white/10 bg-[linear-gradient(180deg,rgba(12,18,37,0.96),rgba(10,5,18,0.98))]",
  accentLabelClassName: "text-[#f6d596]",
  badgeClassName: "border-[#d4a84f]/35 bg-[#d4a84f]/12 text-white",
  chipClassName: "border-white/10 bg-white/5 text-[#f5f5ff]",
  bulletClassName: "bg-[#d4a84f]",
  formTheme: buildFormTheme(
    "space-y-6 rounded-[2rem] border border-[#d4a84f]/18 bg-[linear-gradient(180deg,rgba(12,18,37,0.98),rgba(10,5,18,0.98))] p-8 shadow-[0_0_60px_rgba(212,168,79,0.14)]",
    "w-full rounded-[1.25rem] border border-white/10 bg-white/6 px-4 py-3 text-white outline-none transition placeholder:text-[#b8b2c9] focus:border-[#d4a84f]/70 focus:bg-white/10",
    "text-sm font-semibold uppercase tracking-[0.26em] text-[#f6d596]",
    "rounded-[1.25rem] border border-[#d4a84f]/40 bg-[#d4a84f]/10 px-4 py-3 text-sm font-semibold uppercase tracking-[0.08em] text-white",
    "w-full rounded-full border border-[#d4a84f]/55 bg-[linear-gradient(90deg,_rgba(212,168,79,0.95),_rgba(30,167,255,0.92))] px-6 py-3 text-sm font-bold uppercase tracking-[0.16em] text-[#08111f] shadow-[0_0_30px_rgba(212,168,79,0.22)] transition hover:scale-[1.01] disabled:cursor-not-allowed disabled:opacity-60",
    "rounded-[1.25rem] border border-rose-300/40 bg-rose-500/10 px-4 py-3 text-sm text-rose-100"
  ),
};

export const deliveryRequestTheme: RequestPageTheme = {
  pageClassName: "bg-[#07111d] text-white",
  heroGlowClassName:
    "bg-[radial-gradient(circle_at_top,_rgba(30,167,255,0.24),_transparent_25%),radial-gradient(circle_at_20%_30%,_rgba(255,79,216,0.12),_transparent_28%),linear-gradient(180deg,_#07111d_0%,_#091728_50%,_#07111d_100%)]",
  surfaceClassName:
    "border-cyan-400/15 bg-[linear-gradient(180deg,rgba(10,20,38,0.96),rgba(6,11,22,0.98))]",
  accentLabelClassName: "text-[#7dd3fc]",
  badgeClassName: "border-cyan-300/35 bg-cyan-500/12 text-white",
  chipClassName: "border-white/10 bg-white/5 text-[#ecfeff]",
  bulletClassName: "bg-[#22d3ee]",
  formTheme: buildFormTheme(
    "space-y-6 rounded-[2rem] border border-cyan-300/18 bg-[linear-gradient(180deg,rgba(10,20,38,0.98),rgba(6,11,22,0.98))] p-8 shadow-[0_0_60px_rgba(34,211,238,0.12)]",
    "w-full rounded-[1.25rem] border border-white/10 bg-white/6 px-4 py-3 text-white outline-none transition placeholder:text-[#9bb8c8] focus:border-cyan-300/70 focus:bg-white/10",
    "text-sm font-semibold uppercase tracking-[0.26em] text-[#7dd3fc]",
    "rounded-[1.25rem] border border-cyan-300/35 bg-cyan-500/10 px-4 py-3 text-sm font-semibold uppercase tracking-[0.08em] text-white",
    "w-full rounded-full border border-cyan-300/55 bg-[linear-gradient(90deg,_rgba(30,167,255,0.95),_rgba(34,211,238,0.92))] px-6 py-3 text-sm font-bold uppercase tracking-[0.16em] text-[#06121b] shadow-[0_0_30px_rgba(34,211,238,0.18)] transition hover:scale-[1.01] disabled:cursor-not-allowed disabled:opacity-60",
    "rounded-[1.25rem] border border-rose-300/40 bg-rose-500/10 px-4 py-3 text-sm text-rose-100"
  ),
};

export const ticketingRequestTheme: RequestPageTheme = {
  pageClassName: "bg-[#071120] text-white",
  heroGlowClassName:
    "bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.24),_transparent_24%),radial-gradient(circle_at_20%_28%,_rgba(59,130,246,0.18),_transparent_28%),linear-gradient(180deg,_#071120_0%,_#0a1830_52%,_#071120_100%)]",
  surfaceClassName:
    "border-sky-300/16 bg-[linear-gradient(180deg,rgba(8,20,40,0.96),rgba(5,10,22,0.98))]",
  accentLabelClassName: "text-[#93c5fd]",
  badgeClassName: "border-sky-300/35 bg-sky-500/10 text-white",
  chipClassName: "border-white/10 bg-white/5 text-[#eff6ff]",
  bulletClassName: "bg-[#38bdf8]",
  formTheme: buildFormTheme(
    "space-y-6 rounded-[2rem] border border-sky-300/16 bg-[linear-gradient(180deg,rgba(8,20,40,0.98),rgba(5,10,22,0.98))] p-8 shadow-[0_0_60px_rgba(56,189,248,0.12)]",
    "w-full rounded-[1.25rem] border border-white/10 bg-white/6 px-4 py-3 text-white outline-none transition placeholder:text-[#a9bbd8] focus:border-sky-300/70 focus:bg-white/10",
    "text-sm font-semibold uppercase tracking-[0.26em] text-[#93c5fd]",
    "rounded-[1.25rem] border border-sky-300/35 bg-sky-500/10 px-4 py-3 text-sm font-semibold uppercase tracking-[0.08em] text-white",
    "w-full rounded-full border border-sky-300/55 bg-[linear-gradient(90deg,_rgba(56,189,248,0.95),_rgba(37,99,235,0.92))] px-6 py-3 text-sm font-bold uppercase tracking-[0.16em] text-[#06111e] shadow-[0_0_30px_rgba(56,189,248,0.18)] transition hover:scale-[1.01] disabled:cursor-not-allowed disabled:opacity-60",
    "rounded-[1.25rem] border border-rose-300/40 bg-rose-500/10 px-4 py-3 text-sm text-rose-100"
  ),
};

export const landscapingRequestTheme: RequestPageTheme = {
  pageClassName: "bg-[#08130d] text-white",
  heroGlowClassName:
    "bg-[radial-gradient(circle_at_top,_rgba(74,222,128,0.24),_transparent_24%),radial-gradient(circle_at_20%_35%,_rgba(163,230,53,0.16),_transparent_28%),linear-gradient(180deg,_#08130d_0%,_#0d1d13_52%,_#08130d_100%)]",
  surfaceClassName:
    "border-emerald-300/16 bg-[linear-gradient(180deg,rgba(10,26,18,0.96),rgba(5,12,8,0.98))]",
  accentLabelClassName: "text-[#86efac]",
  badgeClassName: "border-emerald-300/35 bg-emerald-500/10 text-white",
  chipClassName: "border-emerald-200/12 bg-white/5 text-[#ecfdf5]",
  bulletClassName: "bg-[#4ade80]",
  formTheme: buildFormTheme(
    "space-y-6 rounded-[2rem] border border-emerald-300/16 bg-[linear-gradient(180deg,rgba(10,26,18,0.98),rgba(5,12,8,0.98))] p-8 shadow-[0_0_60px_rgba(74,222,128,0.12)]",
    "w-full rounded-[1.25rem] border border-emerald-100/10 bg-white/6 px-4 py-3 text-white outline-none transition placeholder:text-[#a0b9ab] focus:border-emerald-300/60 focus:bg-white/10",
    "text-sm font-semibold uppercase tracking-[0.26em] text-[#86efac]",
    "rounded-[1.25rem] border border-emerald-300/35 bg-emerald-500/10 px-4 py-3 text-sm font-semibold uppercase tracking-[0.08em] text-white",
    "w-full rounded-full border border-emerald-300/50 bg-[linear-gradient(90deg,_rgba(34,197,94,0.95),_rgba(132,204,22,0.92))] px-6 py-3 text-sm font-bold uppercase tracking-[0.16em] text-[#07110b] shadow-[0_0_30px_rgba(74,222,128,0.18)] transition hover:scale-[1.01] disabled:cursor-not-allowed disabled:opacity-60",
    "rounded-[1.25rem] border border-rose-300/40 bg-rose-500/10 px-4 py-3 text-sm text-rose-100"
  ),
};

export const handymanRequestTheme: RequestPageTheme = {
  pageClassName: "bg-[#120c08] text-white",
  heroGlowClassName:
    "bg-[radial-gradient(circle_at_top,_rgba(251,191,36,0.2),_transparent_24%),radial-gradient(circle_at_20%_35%,_rgba(249,115,22,0.14),_transparent_28%),linear-gradient(180deg,_#120c08_0%,_#1b130d_52%,_#120c08_100%)]",
  surfaceClassName:
    "border-amber-300/16 bg-[linear-gradient(180deg,rgba(28,17,8,0.96),rgba(10,7,4,0.98))]",
  accentLabelClassName: "text-[#fcd34d]",
  badgeClassName: "border-amber-300/35 bg-amber-500/10 text-white",
  chipClassName: "border-white/10 bg-white/5 text-[#fff8eb]",
  bulletClassName: "bg-[#f59e0b]",
  formTheme: buildFormTheme(
    "space-y-6 rounded-[2rem] border border-amber-300/18 bg-[linear-gradient(180deg,rgba(28,17,8,0.98),rgba(10,7,4,0.98))] p-8 shadow-[0_0_60px_rgba(245,158,11,0.12)]",
    "w-full rounded-[1.25rem] border border-white/10 bg-white/6 px-4 py-3 text-white outline-none transition placeholder:text-[#c2b7ab] focus:border-amber-300/60 focus:bg-white/10",
    "text-sm font-semibold uppercase tracking-[0.26em] text-[#fcd34d]",
    "rounded-[1.25rem] border border-amber-300/35 bg-amber-500/10 px-4 py-3 text-sm font-semibold uppercase tracking-[0.08em] text-white",
    "w-full rounded-full border border-amber-300/55 bg-[linear-gradient(90deg,_rgba(245,158,11,0.95),_rgba(249,115,22,0.92))] px-6 py-3 text-sm font-bold uppercase tracking-[0.16em] text-[#140b05] shadow-[0_0_30px_rgba(245,158,11,0.18)] transition hover:scale-[1.01] disabled:cursor-not-allowed disabled:opacity-60",
    "rounded-[1.25rem] border border-rose-300/40 bg-rose-500/10 px-4 py-3 text-sm text-rose-100"
  ),
};

export const communitySupportRequestTheme: RequestPageTheme = {
  pageClassName: "bg-[#0a0f1d] text-white",
  heroGlowClassName:
    "bg-[radial-gradient(circle_at_top,_rgba(212,168,79,0.22),_transparent_24%),radial-gradient(circle_at_20%_32%,_rgba(30,58,138,0.18),_transparent_28%),linear-gradient(180deg,_#0a0f1d_0%,_#11182c_52%,_#0a0f1d_100%)]",
  surfaceClassName:
    "border-[#d4a84f]/14 bg-[linear-gradient(180deg,rgba(16,24,44,0.96),rgba(8,11,21,0.98))]",
  accentLabelClassName: "text-[#f6d596]",
  badgeClassName: "border-[#d4a84f]/30 bg-[#d4a84f]/10 text-white",
  chipClassName: "border-white/10 bg-white/5 text-[#f8f3e7]",
  bulletClassName: "bg-[#d4a84f]",
  formTheme: buildFormTheme(
    "space-y-6 rounded-[2rem] border border-[#d4a84f]/16 bg-[linear-gradient(180deg,rgba(16,24,44,0.98),rgba(8,11,21,0.98))] p-8 shadow-[0_0_60px_rgba(212,168,79,0.12)]",
    "w-full rounded-[1.25rem] border border-white/10 bg-white/6 px-4 py-3 text-white outline-none transition placeholder:text-[#afbacf] focus:border-[#d4a84f]/60 focus:bg-white/10",
    "text-sm font-semibold uppercase tracking-[0.26em] text-[#f6d596]",
    "rounded-[1.25rem] border border-[#d4a84f]/35 bg-[#d4a84f]/10 px-4 py-3 text-sm font-semibold uppercase tracking-[0.08em] text-white",
    "w-full rounded-full border border-[#d4a84f]/55 bg-[linear-gradient(90deg,_rgba(212,168,79,0.95),_rgba(30,58,138,0.92))] px-6 py-3 text-sm font-bold uppercase tracking-[0.16em] text-white shadow-[0_0_30px_rgba(212,168,79,0.18)] transition hover:scale-[1.01] disabled:cursor-not-allowed disabled:opacity-60",
    "rounded-[1.25rem] border border-rose-300/40 bg-rose-500/10 px-4 py-3 text-sm text-rose-100"
  ),
};
