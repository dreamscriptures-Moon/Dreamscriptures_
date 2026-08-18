"use client";

import Script from "next/script";
import { useConsent } from "@/components/consent/ConsentProvider";

const AD_CONTAINER_ID = "container-4059fc426893d8ff10a058d225bba1a6";

export default function EditorialAdUnit() {
  const { preferences } = useConsent();

  return (
    <aside
      aria-label="Advertisement"
      className="mt-16 border-y border-[#EAE6E1] py-6 md:mt-20 md:py-8"
    >
      <p className="mb-3 text-center text-[9px] uppercase tracking-[0.2em] text-[#A89F91]">
        Advertisement
      </p>
      <div className="native-recommendations mx-auto flex min-h-[100px] w-full max-w-2xl items-center justify-center overflow-hidden">
        {preferences?.advertising && (
          <>
            <Script
              src="https://pl30893785.effectivecpmnetwork.com/4059fc426893d8ff10a058d225bba1a6/invoke.js"
              strategy="afterInteractive"
              data-cfasync="false"
            />
            <div id={AD_CONTAINER_ID} className="w-full max-w-full" />
          </>
        )}
      </div>
    </aside>
  );
}
