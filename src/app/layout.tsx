import type { Metadata } from "next";
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
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
