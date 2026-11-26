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
  metadataBase: new URL("https://www.aethoscompany.in"),
  title: { default: "Aethos Vision Labs — Design, development & content", template: "%s | Aethos Vision Labs" },
  description: "A creative and engineering studio in Hyderabad. Websites, AI and automation, and video content, built around your business.",
  openGraph: {
    title: "Aethos Vision Labs — Magic, at your service.",
    description: "Websites, useful technology, and content. One creative and engineering team for your next big move.",
    url: "https://www.aethoscompany.in",
    siteName: "Aethos Vision Labs",
    type: "website",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Aethos Vision Labs — Magic, at your service." }],
  },
  twitter: { card: "summary_large_image", title: "Aethos Vision Labs", description: "Design, development, and content for your business.", images: ["/opengraph-image"] },
  icons: { icon: "/logo.png", shortcut: "/logo.png", apple: "/logo.png" },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head><link rel="stylesheet" href="/kit/avl-stage.css" /></head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
