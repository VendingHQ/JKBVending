import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
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
    icon: "/apple-touch-icon.png",
    apple: "/apple-touch-icon.png",
    shortcut: "/apple-touch-icon.png",
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
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
