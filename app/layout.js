import "./globals.css";
import { Playfair_Display, Inter } from "next/font/google";
import Script from "next/script";
import { Analytics } from '@vercel/analytics/next';

export const metadata = {
  metadataBase: new URL("https://www.dreamscriptures.com"),
  title: {
    default: "Dreamscriptures",
    template: "%s | Dreamscriptures",
  },
  description:
    "Decode dreams, discover symbols, spiritual meanings, nightmares, love dreams, and deeper interpretations at Dreamscriptures.",
openGraph: {
  title: "Dreamscriptures",
  description:
    "Decode dreams, discover symbols and spiritual meanings.",
  url: "https://www.dreamscriptures.com",
  siteName: "Dreamscriptures",
  images: [
    {
      url: "/og-image.jpg",
      width: 1200,
      height: 630,
      alt: "Dreamscriptures",
    },
  ],
  type: "website",
},
twitter: {
  card: "summary_large_image",
  title: "Dreamscriptures",
  description:
    "Decode dreams, discover symbols and spiritual meanings.",
  images: ["/og-image.jpg"],
},
icons: {
  icon: "/favicon.ico",
  shortcut: "/favicon.ico",
  apple: "/favicon.ico",
},
  }

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body className={`${playfair.variable} ${inter.variable}`}>
        
        {children}
        <Analytics />

        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-996JMSEJE8"
          strategy="afterInteractive"
        />

        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            window.gtag = gtag;
            gtag('js', new Date());
            gtag('config', 'G-996JMSEJE8');
          `}
        </Script>

      </body>
    </html>
  );

}
