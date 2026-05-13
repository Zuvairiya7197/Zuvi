import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import Script from "next/script";
import { CustomCursor } from "@/components/custom-cursor";
import { Footer } from "@/components/footer";
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
    default: "Zuvi Studio | Freelance Graphic Designer Portfolio",
    template: "%s | Zuvi Studio"
  },
  description:
    "Premium portfolio of Zuvi Studio, a freelance graphic designer crafting brand identities, websites, UI UX systems, social content, and motion-led campaigns.",
  keywords: [
    "freelance graphic designer",
    "brand identity designer",
    "UI UX designer",
    "website design portfolio",
    "social media design"
  ],
  authors: [{ name: "Zuvi Studio" }],
  creator: "Zuvi Studio",
  openGraph: {
    title: "Zuvi Studio | Cinematic Graphic Design Portfolio",
    description:
      "Luxury graphic design, branding, website design, and interactive visual systems for ambitious brands.",
    url: siteUrl,
    siteName: "Zuvi Studio",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Zuvi Studio premium graphic design portfolio"
      }
    ],
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Zuvi Studio | Freelance Graphic Designer",
    description: "Premium branding, UI UX, social media, website, and motion design portfolio.",
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
    "@type": "ProfessionalService",
    name: "Zuvi Studio",
    url: siteUrl,
    image: `${siteUrl}/opengraph-image`,
    description:
      "Freelance graphic design studio specializing in brand identity, social media design, website design, UI UX design, and motion graphics.",
    areaServed: "Worldwide",
    sameAs: ["https://www.behance.net", "https://www.instagram.com", "https://www.linkedin.com"]
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
        <CustomCursor />
        <Header />
        <PageTransition>{children}</PageTransition>
        <Footer />
      </body>
    </html>
  );
}
