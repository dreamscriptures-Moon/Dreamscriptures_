"use client";

import { useEffect, useRef, useState } from "react";

const DESKTOP_MEDIA_QUERY = "(min-width: 800px)";

function DesktopDisplayBanner() {
  const hostRef = useRef(null);

  useEffect(() => {
    const host = hostRef.current;
    if (!host) return undefined;

    const optionsScript = document.createElement("script");
    optionsScript.text = `
  atOptions = {
    'key' : 'b178a32174614a49e757f9f27593b473',
    'format' : 'iframe',
    'height' : 90,
    'width' : 728,
    'params' : {}
  };
`;

    const invokeScript = document.createElement("script");
    invokeScript.async = false;
    invokeScript.src =
      "https://www.highrevenueformat.com/b178a32174614a49e757f9f27593b473/invoke.js";

    host.appendChild(optionsScript);
    host.appendChild(invokeScript);

    return () => host.replaceChildren();
  }, []);

  return (
    <aside
      aria-label="Advertisement"
      className="fixed z-30 h-[72px] w-[582.4px] overflow-hidden"
      style={{
        bottom: "max(env(safe-area-inset-bottom), 0.75rem)",
        left: "max(env(safe-area-inset-left), 0.75rem)",
      }}
    >
      <div
        ref={hostRef}
        className="h-[90px] w-[728px] origin-top-left scale-[0.8]"
      />
    </aside>
  );
}

function MobileDisplayBanner() {
  const hostRef = useRef(null);

  useEffect(() => {
    const host = hostRef.current;
    if (!host) return undefined;

    const optionsScript = document.createElement("script");
    optionsScript.text = `
  atOptions = {
    'key' : '9bdf9e0d4cf7a4aa3e10d684c319e078',
    'format' : 'iframe',
    'height' : 50,
    'width' : 320,
    'params' : {}
  };
`;

    const invokeScript = document.createElement("script");
    invokeScript.async = false;
    invokeScript.src =
      "https://www.highrevenueformat.com/9bdf9e0d4cf7a4aa3e10d684c319e078/invoke.js";

    host.appendChild(optionsScript);
    host.appendChild(invokeScript);

    return () => host.replaceChildren();
  }, []);

  return (
    <aside
      aria-label="Advertisement"
      className="fixed z-30 h-[50px] w-[320px] overflow-hidden"
      style={{
        bottom: "max(env(safe-area-inset-bottom), 0.75rem)",
        left:
          "max(env(safe-area-inset-left), min(0.75rem, calc(100vw - 320px)))",
      }}
    >
      <div ref={hostRef} className="h-[50px] w-[320px]" />
    </aside>
  );
}

export default function DisplayBanner() {
  const [format, setFormat] = useState(null);

  useEffect(() => {
    const desktopQuery = window.matchMedia(DESKTOP_MEDIA_QUERY);
    const updateFormat = () => {
      setFormat(desktopQuery.matches ? "desktop" : "mobile");
    };
    const frame = window.requestAnimationFrame(updateFormat);

    desktopQuery.addEventListener("change", updateFormat);
    return () => {
      window.cancelAnimationFrame(frame);
      desktopQuery.removeEventListener("change", updateFormat);
    };
  }, []);

  if (format === "desktop") return <DesktopDisplayBanner />;
  if (format === "mobile") return <MobileDisplayBanner />;
  return null;
}
