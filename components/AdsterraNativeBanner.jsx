"use client";

import { useEffect, useRef } from "react";

const NATIVE_BANNER_CONTAINER_ID =
  "container-4059fc426893d8ff10a058d225bba1a6";
const NATIVE_BANNER_SCRIPT =
  "https://pl30893785.profitableratecpmnetwork.com/4059fc426893d8ff10a058d225bba1a6/invoke.js";

export default function AdsterraNativeBanner() {
  const scriptHostRef = useRef(null);

  useEffect(() => {
    const scriptHost = scriptHostRef.current;
    if (!scriptHost) return undefined;

    const script = document.createElement("script");
    script.async = true;
    script.setAttribute("data-cfasync", "false");
    script.src = NATIVE_BANNER_SCRIPT;
    scriptHost.appendChild(script);

    return () => script.remove();
  }, []);

  return (
    <aside
      aria-label="Advertisement"
      className="my-8 w-full min-w-0 max-w-full overflow-x-clip sm:my-10"
    >
      <p className="mb-2 text-left text-[8px] uppercase tracking-[0.18em] text-[#A89F91]">
        Advertisement
      </p>
      <div
        ref={scriptHostRef}
        className="w-full min-w-0 max-w-full overflow-x-clip"
      >
        <div
          id={NATIVE_BANNER_CONTAINER_ID}
          className="w-full min-w-0 max-w-full overflow-x-clip"
        />
      </div>
    </aside>
  );
}
