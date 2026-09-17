"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { usePathname } from "next/navigation";
import AdsterraNativeBanner from "@/components/AdsterraNativeBanner";
import { isAdFreeRoute } from "@/lib/advertising";

const DREAM_DETAIL_ROUTE = /^\/dreams\/[^/]+\/?$/;
const TARGET_PAGE_RATIO = 0.3;

function hasManualNativeBannerPlacement(pathname) {
  return DREAM_DETAIL_ROUTE.test(pathname) || pathname === "/dream-compass";
}

function shouldSuppressAutoAd(pathname) {
  return hasManualNativeBannerPlacement(pathname) || isAdFreeRoute(pathname);
}

function isSafeBoundary(element, main) {
  const parent = element.parentElement;
  if (!parent || element === main) return false;
  if (element.closest("header, footer, nav, aside, form, details, li, [role='list']")) return false;

  let ancestor = parent;
  while (ancestor && ancestor !== main) {
    const style = window.getComputedStyle(ancestor);
    if (style.display === "grid") return false;
    if (style.display === "flex" && style.flexDirection !== "column") return false;
    ancestor = ancestor.parentElement;
  }

  const elementRect = element.getBoundingClientRect();
  const parentRect = parent.getBoundingClientRect();
  return elementRect.height > 20 && elementRect.width >= parentRect.width * 0.7;
}

function findPlacementBoundary(main) {
  const mainRect = main.getBoundingClientRect();
  const pageTop = mainRect.top + window.scrollY;
  const targetY = pageTop + main.scrollHeight * TARGET_PAGE_RATIO;
  const structural = Array.from(main.querySelectorAll("section, article, main > div, article > div"));
  const fallback = Array.from(main.querySelectorAll("p, ul, ol"));
  const candidates = [...structural, ...fallback].filter((element) =>
    isSafeBoundary(element, main)
  );

  if (candidates.length === 0) return null;

  return candidates.reduce((closest, element) => {
    const boundaryY = element.getBoundingClientRect().bottom + window.scrollY;
    const distance = Math.abs(boundaryY - targetY);
    return !closest || distance < closest.distance ? { element, distance } : closest;
  }, null)?.element;
}

export default function AutoPageAd() {
  const pathname = usePathname();
  const [portalHost, setPortalHost] = useState(null);

  useEffect(() => {
    if (shouldSuppressAutoAd(pathname)) return undefined;

    let host;
    const frame = window.requestAnimationFrame(() => {
      const main = document.querySelector("main");
      if (!main) return;

      host = document.createElement("div");
      host.dataset.autoPageAd = "true";
      host.dataset.autoPageAdPath = pathname;

      const boundary = findPlacementBoundary(main);
      if (boundary?.parentNode) {
        boundary.parentNode.insertBefore(host, boundary.nextSibling);
      } else {
        main.appendChild(host);
      }

      setPortalHost(host);
    });

    return () => {
      window.cancelAnimationFrame(frame);
      host?.remove();
    };
  }, [pathname]);

  if (
    !portalHost?.isConnected ||
    portalHost.dataset.autoPageAdPath !== pathname ||
    shouldSuppressAutoAd(pathname)
  ) return null;

  const isMainChild = portalHost.parentElement?.tagName === "MAIN";
  return createPortal(
    <div className={isMainChild ? "mx-auto w-full max-w-5xl px-6" : "w-full"}>
      <AdsterraNativeBanner />
    </div>,
    portalHost
  );
}
