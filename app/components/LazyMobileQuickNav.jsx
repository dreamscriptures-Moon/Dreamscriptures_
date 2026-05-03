"use client";

import dynamic from "next/dynamic";

const MobileQuickNav = dynamic(() => import("@/app/components/MobileQuickNav"), {
  ssr: false,
});

export default function LazyMobileQuickNav() {
  return <MobileQuickNav />;
}
