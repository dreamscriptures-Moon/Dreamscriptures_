import { Analytics } from "@vercel/analytics/next";
import { logDreamsOnce } from "@/lib/debugDreams";
import "./globals.css";
import { Playfair_Display, Inter } from "next/font/google";
import Script from "next/script";
import { SpeedInsights } from "@vercel/speed-insights/next"

export const metadata = {
  metadataBase: new URL("https://www.dreamscriptures.com"),
  alternates: {
    canonical: "/",

  },
  title: {
    default: "Dreamscriptures",
    template: "%s | Dreamscriptures",
  },
  description:
    "Decode dreams, discover symbols, spiritual meanings, nightmares, love dreams, and deeper interpretations at Dreamscriptures.",
  openGraph: {
    title: "Dreamscriptures",
    description: "Decode dreams, discover symbols and spiritual meanings.",
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
    description: "Decode dreams, discover symbols and spiritual meanings.",
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
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});


export default function RootLayout({ children }) {

  return (
    <html lang="en" data-scroll-behavior="smooth">
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

        <Analytics />
        <SpeedInsights />

        {/* Google Tag Manager */}
        <Script id="gtm-script" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-P4CX4JJB');
          `}
        </Script>

{/* 🔥 AdSense */}
<Script
  async
  src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7402615514555783"
  crossOrigin="anonymous"
  strategy="afterInteractive"
/>

        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-C8E9Y4L832"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){window.dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-C8E9Y4L832');
          `}
        </Script>
      </body>
    </html>
  );
}
