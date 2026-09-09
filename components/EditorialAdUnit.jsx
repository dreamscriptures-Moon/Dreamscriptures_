"use client";

import Script from "next/script";
import { ADSTERRA_ENABLED } from "@/lib/adConfig";

const AD_CONTAINER_ID = "container-4059fc426893d8ff10a058d225bba1a6";

export default function EditorialAdUnit() {
  if (!ADSTERRA_ENABLED) return null;

  return (
    <aside aria-label="Advertisement" className="py-2">
      <p className="mb-1 text-left text-[8px] uppercase tracking-[0.18em] text-[#A89F91]">
        Advertisement
      </p>
      <div className="native-recommendations-viewport">
        <div className="native-recommendations">
          <Script
            src="https://pl30893785.effectivecpmnetwork.com/4059fc426893d8ff10a058d225bba1a6/invoke.js"
            strategy="afterInteractive"
            data-cfasync="false"
          />
          <div id={AD_CONTAINER_ID} className="w-full max-w-full" />
        </div>
      </div>
    </aside>
  );
}
