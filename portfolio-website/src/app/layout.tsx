import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Layout from "@/components/Layout"; // Updated import path

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = "https://www.blessinggodsondesign.com"; // Replace with actual domain

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "BlessingGodson - Creative Graphic Designer",
    template: "%s | BlessingGodson", // For page-specific titles
  },
  description: "Portfolio of BlessingGodson, a talented graphic designer specializing in branding, web design, and illustration.",
  keywords: ["graphic designer", "branding", "web design", "illustration", "portfolio", "BlessingGodson"],
  authors: [{ name: "BlessingGodson", url: siteUrl }],
  creator: "BlessingGodson",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    title: "BlessingGodson - Creative Graphic Designer",
    description: "Explore the creative portfolio of BlessingGodson, showcasing expertise in branding, web design, and illustration.",
    siteName: "BlessingGodson Portfolio",
    // images: [ // Add a default OG image later
    //   {
    //     url: `${siteUrl}/og-image.png`, // Create and add an og-image.png to /public
    //     width: 1200,
    //     height: 630,
    //     alt: "BlessingGodson Portfolio",
    //   },
    // ],
  },
  twitter: {
    card: "summary_large_image",
    title: "BlessingGodson - Creative Graphic Designer",
    description: "Discover BlessingGodson's graphic design portfolio. Specializing in creating impactful visual identities.",
    // images: [`${siteUrl}/twitter-image.png`], // Create and add a twitter-image.png to /public
    // creator: "@YourTwitterHandle", // Optional: Add Twitter handle
  },
  robots: { // Default robot settings, can be overridden per page
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  // manifest: `${siteUrl}/site.webmanifest`, // Optional: For PWA features
  // icons: { // Optional: Add favicons
  //   icon: '/favicon.ico',
  //   shortcut: '/favicon-16x16.png',
  //   apple: '/apple-touch-icon.png',
  // },
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
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
