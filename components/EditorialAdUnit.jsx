"use client";

import Script from "next/script";
import { ADSTERRA_ENABLED } from "@/lib/adConfig";

const AD_CONTAINER_ID = "container-4059fc426893d8ff10a058d225bba1a6";

export default function EditorialAdUnit() {
  if (!ADSTERRA_ENABLED) return null;

  return (
    <aside
      aria-label="Advertisement"
      className="border-b border-[#EAE6E1] py-3 md:py-4"
    >
      <p className="mb-2 text-left text-[9px] uppercase tracking-[0.2em] text-[#A89F91]">
        Advertisement
      </p>
      <div className="native-recommendations min-h-[100px] w-full min-w-0 max-w-2xl overflow-hidden">
        <Script
          src="https://pl30893785.effectivecpmnetwork.com/4059fc426893d8ff10a058d225bba1a6/invoke.js"
          strategy="afterInteractive"
          data-cfasync="false"
        />
        <div id={AD_CONTAINER_ID} className="w-full max-w-full" />
      </div>
    </aside>
  );
}
