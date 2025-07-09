import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nodon - Node.js Starter Kit",
  description: "Kickstart modern Node.js apps with Express, GraphQL & TypeScript templates.",
  keywords: ["Node.js", "Express", "GraphQL", "Starter Kit", "TypeScript"],
  authors: [{ name: "Omprakash Chauhan" }],
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon.ico', type: 'image/x-icon' },
    ],
    apple: '/apple-touch-icon.png', // iOS icon
  },
  openGraph: {
    title: "Nodon - Node.js Starter Kit",
    description: "Production-ready templates for Node.js & Express apps.",
    url: "https://nodon.dev", // Change to your real domain
    siteName: "Nodon",
    images: [
      {
        url: "https://nodon.dev/preview.png", // Change to real preview image
        width: 1200,
        height: 630,
        alt: "Nodon Starter Kit",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nodon - Node.js Starter Kit",
    description: "Launch Node.js projects with production-ready templates instantly.",
    images: ["https://nodon.dev/preview.png"],
    creator: "@your_twitter_handle", // Optional
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
