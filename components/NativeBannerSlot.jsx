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
    <div className="fixed bottom-[calc(env(safe-area-inset-bottom)+0.75rem)] left-[calc(env(safe-area-inset-left)+0.75rem)] z-40 w-[min(15rem,calc(100vw-5rem))] overflow-hidden rounded-lg border border-[#DED7CD] bg-[#FAF8F5]/95 px-2 shadow-[0_8px_24px_rgba(42,36,30,0.16)] backdrop-blur-sm lg:bottom-4 lg:left-4 lg:w-[21rem]">
      <EditorialAdUnit />
    </div>
  );
}
