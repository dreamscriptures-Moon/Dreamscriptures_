import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import { Playfair_Display, Inter } from "next/font/google";
import Script from "next/script";
import { SpeedInsights } from "@vercel/speed-insights/next";
import BackToTop from "@/app/components/BackToTop";
import BuyMeCoffee from "@/app/components/BuyMeCoffee";


export const metadata = {
  metadataBase: new URL("https://www.dreamscriptures.com"),
  alternates: {
    canonical: "/",
  },
  title: {
  default: "DreamScriptures",
  template: "%s | DreamScriptures",
},
  description:
    "Explore dream meanings through symbols, emotional patterns, subconscious themes, and thoughtful spiritual reflection.",
  openGraph: {
    title: "DreamScriptures",
    description: "Explore dream meanings, emotional patterns, symbolism, and thoughtful spiritual reflection.",
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
    description: "Explore dream meanings, emotional patterns, symbolism, and thoughtful spiritual reflection.",
    images: ["/og-image.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
};

// ✅ Optimized fonts
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
     <head>
  {/* 🚀 Preconnect */}
  <link
    rel="preconnect"
    href="https://www.googletagmanager.com"
  />

  <link
    rel="preconnect"
    href="https://pagead2.googlesyndication.com"
  />

  {/* Google AdSense */}
  <script
    async
    src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7402615514555783"
    crossOrigin="anonymous"
  />
</head>

      <body className={`${playfair.variable} ${inter.variable}`}>

        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-P4CX4JJB"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>

        {children}
        <BackToTop />
        <BuyMeCoffee />
        

        {/* Analytics */}
        <Analytics />
        <SpeedInsights />

        {/* 🚀 Google Tag Manager (DEFERRED) */}
        <Script id="gtm-script" strategy="lazyOnload">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-P4CX4JJB');
          `}
        </Script>

      </body>
    </html>
  );
}
