import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { Baloo_2, Nunito } from "next/font/google";
import "./globals.css";

const baloo = Baloo_2({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-baloo",
  display: "swap",
});

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-nunito",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Onam 2026 | Beaudouscamper Arts & Sports Welfare Trust",
  description:
    "Join Beaudouscamper Arts & Sports Welfare Trust for Onam 2026 — 26 August 2026, 8:30 AM to 9:30 PM at Sree Dharma Sastha Temple, Kadayal. Sports, games, cultural programs and the return of Maveli.",
  keywords: [
    "Onam 2026",
    "Kadayal Onam",
    "Sree Dharma Sastha Temple",
    "Beaudouscamper Arts and Sports Welfare Trust",
    "Onam celebration",
    "Mahabali",
  ],
  openGraph: {
    title: "Onam 2026 | Beaudouscamper Arts & Sports Welfare Trust",
    description:
      "26 August 2026, 8:30 AM – 9:30 PM at Sree Dharma Sastha Temple, Kadayal. Sports, cultural programs and the legend of Maveli, together.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#168447",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en" className={`${baloo.variable} ${nunito.variable}`}>
      <body className="font-body bg-ivory text-warm-brown antialiased">
        {children}
      </body>
    </html>
  );
}
