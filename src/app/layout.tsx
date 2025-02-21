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

export const metadata: Metadata = {
  title: {
    default: "Aethos Vision Labs",
    template: "%s | Aethos Vision Labs",
  },
  description:
    "We are Aethos Vision Labs—an engineering team helping businesses and brands turn views into cash with AI solutions and video content. Based in Hyderabad, India, and tinkering since 2020.",
  keywords: [
    "Aethos Vision Labs AI video marketing solutions",
    "engineering team for innovative video monetization and AI expertise",
    "AI-driven video content creation for digital marketing success",
    "advanced video monetization strategies using AI technology",
    "affordable AI solutions for video content and business growth",
    "Hyderabad based engineering team for video SEO and branding",
    "cutting-edge digital marketing and video content engineering services",
    "global video marketing agency with Indian AI innovation",
    "US brands turning video views into cash with AI solutions",
    "international video advertising and monetization experts from India",
    "technology-driven video content strategies for business expansion",
    "expert AI video marketing and digital transformation services",
    "comprehensive AI video solutions for enhanced brand engagement",
    "innovative digital marketing strategies with AI-powered video content",
  ],
  openGraph: {
    title: "Aethos Vision Labs",
    description:
      "Discover Aethos Vision Labs—an engineering team turning views into cash with AI solutions and video content. Based in Hyderabad, India, and innovating since 2020.",
    url: "https://aethosvisionlabs.com",
    siteName: "Aethos Vision Labs",
    images: [
      {
        url: "https://aethosvisionlabs.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Aethos Vision Labs - AI Solutions & Video Content",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aethos Vision Labs",
    description:
      "Turn views into cash with AI solutions and video content. We are Aethos Vision Labs, based in Hyderabad, India—tinkering and innovating since 2020.",
    images: ["https://aethosvisionlabs.com/twitter-image.jpg"],
    creator: "@AethosVisionLabs", // Update with your official Twitter handle if available
  },
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
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
