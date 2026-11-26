import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const title = "Aethos Vision Labs | Websites and AI Automation, Hyderabad";
const description = "Aethos Vision Labs in Hyderabad offers websites and brand design, AI tools and workflow automation, and video and social content for businesses.";
const siteUrl = "https://www.aethoscompany.in";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  alternates: { canonical: "/" },
  openGraph: {
    title,
    description,
    url: siteUrl,
    siteName: "Aethos Vision Labs",
    locale: "en_IN",
    type: "website",
    images: [{ url: `${siteUrl}/opengraph-image`, width: 1200, height: 630, alt: "Aethos Vision Labs — Websites, design, automation and content." }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [`${siteUrl}/opengraph-image`],
  },
  icons: { icon: "/logo.png", shortcut: "/logo.png", apple: "/logo.png" },
  robots: { index: true, follow: true },
};

const professionalService = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Aethos Vision Labs",
  url: siteUrl,
  areaServed: {
    "@type": "City",
    name: "Hyderabad",
    containedInPlace: { "@type": "Country", name: "India" },
  },
  // TODO: Add confirmed public profile links already present on the site.
  sameAs: [],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-IN">
      <head><link rel="stylesheet" href="/kit/avl-stage.css" /></head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(professionalService).replace(/</g, "\\u003c") }}
        />
        {children}
      </body>
    </html>
  );
}
