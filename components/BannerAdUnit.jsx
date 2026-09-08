"use client";

import Script from "next/script";
import { useEffect, useRef, useState } from "react";
import { ADSTERRA_ENABLED } from "@/lib/adConfig";

const BANNER_KEY = "9bdf9e0d4cf7a4aa3e10d684c319e078";
const BANNER_WIDTH = 320;
const BANNER_HEIGHT = 50;

export default function BannerAdUnit() {
  const frameRef = useRef(null);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const frame = frameRef.current;
    if (!frame) return undefined;

    const observer = new ResizeObserver(([entry]) => {
      setScale(Math.min(1, entry.contentRect.width / BANNER_WIDTH));
    });

    observer.observe(frame);

    return () => observer.disconnect();
  }, []);

  if (!ADSTERRA_ENABLED) return null;

  return (
    <aside aria-label="Advertisement" className="my-6 sm:my-8">
      <p className="mb-1 text-center text-[9px] uppercase tracking-[0.2em] text-[#A89F91]">
        Advertisement
      </p>
      <div
        ref={frameRef}
        className="mx-auto w-full max-w-[320px] overflow-hidden"
        style={{ height: BANNER_HEIGHT * scale }}
      >
        <div
          className="h-[50px] w-[320px] origin-top-left"
          style={{ transform: `scale(${scale})` }}
        >
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
        </div>
      </div>
    </aside>
  );
}
