import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import Script from "next/script";
import { CustomCursorLoader } from "@/components/custom-cursor-loader";
import { FloatingSectionNavLoader } from "@/components/floating-section-nav-loader";
import { Header } from "@/components/header";
import { PageTransition } from "@/components/page-transition";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap"
});

const display = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["500", "600", "700"],
  display: "swap"
});

const siteUrl = "https://zuvi.studio";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Zuvairiya Maryam | Graphic Design & Website Portfolio",
    template: "%s | Zuvairiya Maryam"
  },
  description:
    "Portfolio of Zuvairiya Maryam, featuring graphic design work under MZ Designs and website projects under We Build Your Brands.",
  keywords: [
    "Zuvairiya Maryam portfolio",
    "MZ Designs",
    "We Build Your Brands",
    "freelance graphic designer",
    "brand identity designer",
    "website design portfolio",
    "social media design",
    "WBYB"
  ],
  authors: [{ name: "Zuvairiya Maryam" }],
  creator: "Zuvairiya Maryam",
  openGraph: {
    title: "Zuvairiya Maryam | Graphic Design & Website Portfolio",
    description:
      "Graphic design work under MZ Designs and website work under We Build Your Brands.",
    url: siteUrl,
    siteName: "Zuvairiya Maryam Portfolio",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Zuvairiya Maryam graphic design and website portfolio"
      }
    ],
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Zuvairiya Maryam | Portfolio",
    description: "Graphic work under MZ Designs and website work under WBYB.",
    images: ["/opengraph-image"]
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Zuvairiya Maryam",
    url: siteUrl,
    image: `${siteUrl}/opengraph-image`,
    description:
      "Graphic and web designer. Founder behind MZ Designs and co-founder at We Build Your Brands.",
    areaServed: "Worldwide",
    sameAs: ["https://zuvairiyamaryam.wixsite.com/my-site", "https://www.webuildyourbrands.com/"]
  };

  return (
    <html lang="en" className={`${inter.variable} ${display.variable}`}>
      <body>
        <Script
          id="organization-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
        <div className="noise" aria-hidden="true" />
        <CustomCursorLoader />
        <Header />
        <FloatingSectionNavLoader />
        <PageTransition>{children}</PageTransition>
      </body>
    </html>
  );
}
