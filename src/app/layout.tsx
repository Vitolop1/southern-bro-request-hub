import type { Metadata } from "next";
import { cookies } from "next/headers";
import Script from "next/script";
import { LanguageProvider } from "@/components/language-provider";
import { defaultLanguage, isLanguage } from "@/lib/i18n";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://southernbroenterprises.com"),
  title: "Southern Bro Enterprises",
  description:
    "Professional Southern Bro website featuring business consulting, detailing, ticketing, delivery support, brand services, and community programs.",
  keywords: [
    "Southern Bro Enterprises",
    "business consulting Lynchburg VA",
    "detailing services Lynchburg VA",
    "ticketing support Virginia",
    "request quote Southern Bro",
  ],
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookieStore = await cookies();
  const storedLanguage = cookieStore.get("southern-bro-language")?.value;
  const initialLanguage = isLanguage(storedLanguage) ? storedLanguage : defaultLanguage;

  return (
    <html lang={initialLanguage} suppressHydrationWarning>
      <head>
        <Script id="theme-init" strategy="beforeInteractive">
          {`
            try {
              var storedTheme = localStorage.getItem("southern-bro-theme");
              var resolvedTheme = storedTheme || "dark";
              document.documentElement.dataset.theme = resolvedTheme;
            } catch (error) {
              document.documentElement.dataset.theme = "dark";
            }
          `}
        </Script>
      </head>
      <body>
        <LanguageProvider initialLanguage={initialLanguage}>{children}</LanguageProvider>
      </body>
    </html>
  );
}
