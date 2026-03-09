import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Southern Bro Request Hub",
  description: "Delivery, pickup, and service request platform for Southern Bro Enterprises.",
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