"use client";

import Script from "next/script";
import { useConsent } from "@/components/consent/ConsentProvider";

const BANNER_KEY = "9bdf9e0d4cf7a4aa3e10d684c319e078";

export default function BannerAdUnit() {
  const { preferences } = useConsent();

  return (
    <aside
      aria-label="Advertisement"
      className="mt-16 border-y border-[#EAE6E1] py-6 md:mt-20 md:py-8"
    >
      <p className="mb-3 text-center text-[9px] uppercase tracking-[0.2em] text-[#A89F91]">
        Advertisement
      </p>
      <div className="mx-auto min-h-[50px] w-full max-w-[320px] overflow-hidden text-center">
        {preferences?.advertising && (
          <>
            <Script id={`${BANNER_KEY}-options`} strategy="afterInteractive">
              {`window.atOptions = {
            key: '${BANNER_KEY}',
            format: 'iframe',
            height: 50,
            width: 320,
            params: {}
          };`}
            </Script>
            <Script
              id={`${BANNER_KEY}-invoke`}
              src={`https://www.highperformanceformat.com/${BANNER_KEY}/invoke.js`}
              strategy="afterInteractive"
            />
          </>
        )}
      </div>
    </aside>
  );
}
