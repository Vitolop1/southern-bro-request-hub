import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Southern Bro Enterprises",
  description:
    "Professional multi-brand website for Southern Bro Enterprises, featuring business support, delivery, handyman services, landscaping, creations, ticketing, and community programs.",
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
