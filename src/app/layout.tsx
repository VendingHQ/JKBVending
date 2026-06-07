import type { Metadata } from "next";
import { DM_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
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
  metadataBase: new URL("https://www.jkbvending.com"),
  openGraph: {
    title: "J-K-B Vending | Smart Coolers & Micro Markets in DFW",
    description:
      "Family-owned smart cooler and micro market operator serving DFW offices, apartment communities, hotels, and healthcare facilities. Fresh, reliable, local.",
    url: "https://www.jkbvending.com",
    siteName: "J-K-B Vending",
    images: [
      {
        url: "/apple-touch-icon.png",
        width: 1000,
        height: 1000,
        alt: "J-K-B Vending Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "J-K-B Vending | Smart Coolers & Micro Markets in DFW",
    description:
      "Family-owned smart cooler and micro market operator serving DFW offices, apartment communities, hotels, and healthcare facilities.",
    images: ["/apple-touch-icon.png"],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/logo.png",
    shortcut: "/favicon.ico",
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${dmSans.variable} ${playfair.variable} antialiased`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
