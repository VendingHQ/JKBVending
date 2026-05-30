import type { Metadata } from "next";
import { DM_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  weight: ["300", "400", "500", "600", "700"],
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["700"],
});

export const metadata: Metadata = {
  title: "J-K-B Vending | Smart Coolers & Micro Markets | DFW",
  description:
    "Family-owned vending company serving DFW. Smart coolers, micro markets, and pantry service for businesses in Wylie, Plano, Frisco, Richardson & Collin County.",
  keywords:
    "vending machine Plano TX, smart cooler Frisco TX, micro market DFW, vending service Collin County, vending Wylie TX",
  openGraph: {
    title: "J-K-B Vending | Smart Coolers & Micro Markets | DFW",
    description:
      "Family-owned. DFW local. Smart coolers and micro markets for businesses across Plano, Frisco, Wylie & Collin County.",
    url: "https://www.jkbvending.com",
    siteName: "J-K-B Vending",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${dmSans.variable} ${playfair.variable} font-sans antialiased`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
