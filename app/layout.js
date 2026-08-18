import "./globals.css";
import { Playfair_Display, Inter } from "next/font/google";
import BackToTop from "@/app/components/BackToTop";
import BuyMeCoffee from "@/app/components/BuyMeCoffee";
import ConsentProvider from "@/components/consent/ConsentProvider";
import CookieConsent from "@/components/consent/CookieConsent";
import ConsentManagedServices from "@/components/consent/ConsentManagedServices";

export const metadata = {
  metadataBase: new URL("https://www.dreamscriptures.com"),
  alternates: { canonical: "/" },
  title: {
    default: "DreamScriptures",
    template: "%s | DreamScriptures",
  },
  description:
    "Explore dream meanings through symbols, emotional patterns, subconscious themes, and thoughtful spiritual reflection.",
  openGraph: {
    title: "DreamScriptures",
    description:
      "Explore dream meanings, emotional patterns, symbolism, and thoughtful spiritual reflection.",
    url: "https://www.dreamscriptures.com",
    siteName: "DreamScriptures",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "DreamScriptures",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "DreamScriptures",
    description:
      "Explore dream meanings, emotional patterns, symbolism, and thoughtful spiritual reflection.",
    images: ["/og-image.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
};

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${playfair.variable} ${inter.variable}`}>
        <ConsentProvider>
          {children}
          <BackToTop />
          <BuyMeCoffee />
          <ConsentManagedServices />
          <CookieConsent />
        </ConsentProvider>
      </body>
    </html>
  );
}
