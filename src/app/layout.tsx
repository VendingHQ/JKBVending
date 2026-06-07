import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "J-K-B Vending | Smart Coolers & Micro Markets in DFW",
    template: "%s | J-K-B Vending",
  },
  description:
    "Family-owned smart cooler and micro market operator serving DFW offices, apartment communities, hotels, and healthcare facilities. Local, fresh, free to your property.",
  keywords: [
    "vending",
    "smart cooler",
    "micro market",
    "DFW vending",
    "Collin County vending",
    "apartment vending DFW",
    "hotel vending DFW",
    "Plano vending",
    "Frisco vending",
    "Wylie vending",
    "McKinney vending",
    "Richardson vending",
  ],
  authors: [{ name: "J-K-B Vending" }],
  creator: "J-K-B Vending",
  openGraph: {
    title: "J-K-B Vending | Smart Coolers & Micro Markets in DFW",
    description:
      "Family-owned smart cooler and micro market operator serving DFW offices, apartment communities, hotels, and healthcare facilities. Fresh, reliable, local.",
    url: "https://www.jkbvending.com",
    siteName: "J-K-B Vending",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://www.jkbvending.com/apple-touch-icon.png",
        width: 1000,
        height: 1000,
        alt: "J-K-B Vending Logo",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "J-K-B Vending | Smart Coolers & Micro Markets in DFW",
    description:
      "Family-owned smart cooler and micro market operator serving DFW offices, apartment communities, hotels, and healthcare facilities.",
    images: ["https://www.jkbvending.com/apple-touch-icon.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
