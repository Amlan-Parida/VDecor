import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { Footer } from "@/components/footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://vdecor.com'),
  title: {
    default: "V Decor — Premium Interior Design Studio",
    template: "%s | V Decor"
  },
  description:
    "Transform your spaces with V Decor. We craft luxurious, bespoke interior designs for homes and commercial spaces that inspire and elevate your lifestyle.",
  keywords: ["interior design", "luxury interiors", "home design", "V Decor", "premium interiors", "architectural design"],
  openGraph: {
    title: "V Decor — Premium Interior Design Studio",
    description: "Crafting Spaces That Inspire. Luxury interior design services for homes and commercial spaces.",
    url: 'https://vdecor.com',
    siteName: 'V Decor',
    images: [
      {
        url: '/images/hero.png',
        width: 1200,
        height: 630,
        alt: 'V Decor Premium Interiors',
      },
    ],
    locale: 'en_US',
    type: "website",
  },
  twitter: {
    card: 'summary_large_image',
    title: 'V Decor — Premium Interior Design Studio',
    description: 'Crafting Spaces That Inspire. Luxury interior design services.',
    images: ['/images/hero.png'],
    creator: '@vdecor_studios',
  },
  robots: {
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} antialiased`}>
      <body className="min-h-screen bg-background text-foreground flex flex-col font-sans overflow-x-hidden">
        <SiteHeader />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
