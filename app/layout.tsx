import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Itele | Luxury Jewelry",
  description:
    "A polished ecommerce storefront for Itele, a luxury jewelry house in deep burgundy, white, and grey.",
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
