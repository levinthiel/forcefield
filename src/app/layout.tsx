import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Outfit } from 'next/font/google';
import { Poppins } from 'next/font/google';
import Header from "../app/components/Header"
import Footer from "./components/Footer";

const outfit = Outfit({
  weight: '900',
  subsets: ['latin'],
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});
const poppins = Poppins({
  weight: ['200','400', '700'],
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Force Field: Chronicles from the edge",
  description: "A collection of thrilling science fiction short stories from the far reaches of the universe.",
  keywords: ["science fiction", "sci-fi stories", "space horror", "short stories", "Force Field Chronicles"],
  authors: [{ name: "Skeletron" }],
  
  icons: {
    icon: [
    { url: '/favicon.png', sizes: '32x32', type: 'image/png' },
    ]
  },
  openGraph: {
    title: "Force Field: Chronicles from the Edge",
    description: "Discover chilling and thrilling science fiction stories.",
    url: "https://forcefield-gray.vercel.app/",
    siteName: "Force Field",
    images: [
      {
        url: "/logo-portrait.png", // must be in /public
        width: 376,
        height: 491,
        alt: "Force Field Cover",
      },
    ],
    locale: "en_UK",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} ${poppins.className} ${outfit.className}`}>
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
