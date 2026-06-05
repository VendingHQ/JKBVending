import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "J-K-B Vending | Smart Coolers & Micro Markets in DFW",
  description: "Family-owned smart cooler and micro market operator serving DFW and Collin County. 25+ years of H-E-B grocery experience. Fresh, reliable, local.",
  keywords: ["vending", "smart cooler", "micro market", "DFW vending", "Collin County vending", "Plano vending", "Frisco vending", "Wylie vending"],
  authors: [{ name: "J-K-B Vending" }],
  creator: "J-K-B Vending",
  metadataBase: new URL("https://www.jkbvending.com"),
  openGraph: {
    title: "J-K-B Vending | Smart Coolers & Micro Markets in DFW",
    description: "Family-owned smart cooler and micro market operator serving DFW and Collin County. Fresh, reliable, local.",
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
    description: "Family-owned smart cooler and micro market operator serving DFW and Collin County.",
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
      <body className={`${inter.variable} antialiased`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
