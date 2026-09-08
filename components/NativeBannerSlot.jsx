"use client";

import { usePathname } from "next/navigation";
import EditorialAdUnit from "@/components/EditorialAdUnit";
import { ADSTERRA_ENABLED } from "@/lib/adConfig";
import { supportsNativeBannerAdvertising } from "@/lib/publicAdRoutes";

export default function NativeBannerSlot() {
  const pathname = usePathname();

  if (!ADSTERRA_ENABLED || !supportsNativeBannerAdvertising(pathname)) {
    return null;
  }

  return (
    <div className="fixed bottom-[calc(env(safe-area-inset-bottom)+0.75rem)] left-[calc(env(safe-area-inset-left)+0.75rem)] z-40 w-[min(18rem,calc(100vw-5rem))] overflow-hidden rounded-xl border border-[#DED7CD] bg-[#FAF8F5]/95 px-3 shadow-[0_10px_35px_rgba(42,36,30,0.18)] backdrop-blur-sm md:bottom-4 md:left-4 md:w-[min(42rem,calc(100vw-2rem))] md:max-w-2xl md:px-4">
      <EditorialAdUnit />
    </div>
  );
}
