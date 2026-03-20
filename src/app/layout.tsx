import type { Metadata } from "next";
import Script from "next/script";
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <Script id="theme-init" strategy="beforeInteractive">
          {`
            try {
              var storedTheme = localStorage.getItem("southern-bro-theme");
              var resolvedTheme =
                storedTheme ||
                (window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark");
              document.documentElement.dataset.theme = resolvedTheme;
            } catch (error) {
              document.documentElement.dataset.theme = "dark";
            }
          `}
        </Script>
      </head>
      <body>{children}</body>
    </html>
  );
}
