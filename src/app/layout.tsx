import type { Metadata } from "next";
import localFont from "next/font/local";
import type { ReactNode } from "react";
import "./globals.css";

const inter = localFont({ src: "./fonts/inter-latin.woff2", variable: "--font-inter", weight: "400 600", display: "swap" });
const manrope = localFont({ src: "./fonts/manrope-latin.woff2", variable: "--font-manrope", weight: "600 700", display: "swap" });

export const metadata: Metadata = {
  title: "Ikore Procurement",
  description: "Client procurement and order management.",
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${manrope.variable} antialiased`}>{children}</body>
    </html>
  );
}
