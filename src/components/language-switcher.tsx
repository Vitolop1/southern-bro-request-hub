"use client";

import { Languages } from "lucide-react";
import { supportedLanguages, type Language } from "@/lib/i18n";
import { useLanguage } from "@/components/language-provider";

export default function LanguageSwitcher() {
  const { language, setLanguage, messages } = useLanguage();

  return (
    <label className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/6 px-3 py-2 text-xs font-bold uppercase tracking-[0.14em] text-white transition hover:bg-white/10">
      <Languages className="h-4 w-4" />
      <span className="hidden lg:inline">{messages.language.label}</span>
      <select
        value={language}
        onChange={(event) => setLanguage(event.target.value as Language)}
        className="bg-transparent text-xs font-bold uppercase tracking-[0.12em] text-white outline-none"
        aria-label={messages.language.label}
      >
        {supportedLanguages.map((entry) => (
          <option key={entry.code} value={entry.code} className="bg-[#14061f] text-white">
            {entry.label}
          </option>
        ))}
      </select>
    </label>
  );
}
