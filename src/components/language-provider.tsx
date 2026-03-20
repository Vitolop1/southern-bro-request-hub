"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import {
  defaultLanguage,
  isLanguage,
  translations,
  type Language,
  type TranslationSet,
} from "@/lib/i18n";

const storageKey = "southern-bro-language";
const cookieKey = "southern-bro-language";

type LanguageContextValue = {
  language: Language;
  setLanguage: (language: Language) => void;
  messages: TranslationSet;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

function getInitialLanguage(fallback: Language): Language {
  if (typeof window === "undefined") {
    return fallback;
  }

  const storedLanguage = window.localStorage.getItem(storageKey);
  if (isLanguage(storedLanguage)) {
    return storedLanguage;
  }

  return fallback;
}

export function LanguageProvider({
  children,
  initialLanguage = defaultLanguage,
}: {
  children: ReactNode;
  initialLanguage?: Language;
}) {
  const [language, setLanguage] = useState<Language>(() => getInitialLanguage(initialLanguage));

  useEffect(() => {
    document.documentElement.lang = language;
    window.localStorage.setItem(storageKey, language);
    document.cookie = `${cookieKey}=${language}; path=/; max-age=31536000; SameSite=Lax`;
  }, [language]);

  const value = useMemo(
    () => ({
      language,
      setLanguage,
      messages: translations[language],
    }),
    [language]
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider.");
  }

  return context;
}
