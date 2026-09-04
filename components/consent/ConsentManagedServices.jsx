"use client";

import Script from "next/script";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { useConsent } from "./ConsentProvider";

export default function ConsentManagedServices() {
  const { preferences } = useConsent();

  return (
    <>
      {/* Privacy-friendly, cookie-free baseline measurement. */}
      <Analytics />
      <SpeedInsights />

      {/* GTM may load cookie-based or identifiable services, so it stays opt-in. */}
      {preferences?.analytics && (
        <Script id="gtm-script" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w.gtag=w.gtag||function(){w[l].push(arguments);};w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-P4CX4JJB');`}
        </Script>
      )}
    </>
  );
}
