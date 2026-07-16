"use client";

import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";

const STORAGE_KEY = "dreamscriptures_submit_popup_seen";
const THIRTY_DAYS = 30 * 24 * 60 * 60 * 1000;
const SHOW_DELAY = 10 * 1000;
const ANIMATION_DURATION = 250;

function wasRecentlySeen() {
  try {
    const timestamp = Number(window.localStorage.getItem(STORAGE_KEY));
    return Number.isFinite(timestamp) && Date.now() - timestamp < THIRTY_DAYS;
  } catch {
    return false;
  }
}

function rememberDismissal() {
  try {
    window.localStorage.setItem(STORAGE_KEY, String(Date.now()));
  } catch {
    // The popup still closes when storage is unavailable or blocked.
  }
}

export default function DreamSubmissionPopup() {
  const [isMounted, setIsMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const dialogRef = useRef(null);
  const closeTimerRef = useRef(null);
  const previousFocusRef = useRef(null);

  const dismiss = useCallback(() => {
    rememberDismissal();
    setIsOpen(false);
    window.clearTimeout(closeTimerRef.current);
    closeTimerRef.current = window.setTimeout(() => {
      setIsMounted(false);
      previousFocusRef.current?.focus?.();
    }, ANIMATION_DURATION);
  }, []);

  useEffect(() => {
    if (wasRecentlySeen()) return undefined;

    const showTimer = window.setTimeout(() => {
      previousFocusRef.current = document.activeElement;
      setIsMounted(true);
    }, SHOW_DELAY);

    return () => window.clearTimeout(showTimer);
  }, []);

  useEffect(() => {
    if (!isMounted) return undefined;

    const animationFrame = window.requestAnimationFrame(() => setIsOpen(true));
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const focusTimer = window.setTimeout(() => {
      dialogRef.current?.querySelector("a")?.focus();
    }, ANIMATION_DURATION);

    return () => {
      window.cancelAnimationFrame(animationFrame);
      window.clearTimeout(focusTimer);
      document.body.style.overflow = previousOverflow;
    };
  }, [isMounted]);

  useEffect(() => {
    if (!isMounted) return undefined;

    function handleKeyDown(event) {
      if (event.key === "Escape") {
        event.preventDefault();
        dismiss();
        return;
      }

      if (event.key !== "Tab") return;

      const focusable = dialogRef.current?.querySelectorAll(
        'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
      );

      if (!focusable?.length) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [dismiss, isMounted]);

  useEffect(
    () => () => window.clearTimeout(closeTimerRef.current),
    []
  );

  if (!isMounted) return null;

  return (
    <div
      className={`fixed inset-0 z-[100] flex items-end justify-center bg-[#1A1A1A]/45 px-4 py-5 backdrop-blur-[2px] transition-opacity duration-250 sm:items-center sm:p-6 ${
        isOpen ? "opacity-100" : "opacity-0"
      }`}
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) dismiss();
      }}
    >
      <section
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="dream-popup-title"
        aria-describedby="dream-popup-description"
        className={`relative w-full max-w-lg overflow-hidden rounded-[1.75rem] border border-[#D8C7A0] bg-[#FCFBF9] px-6 pb-7 pt-9 text-center shadow-[0_28px_80px_rgba(42,34,24,0.24)] transition duration-250 ease-out sm:px-10 sm:pb-10 sm:pt-11 ${
          isOpen ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
        }`}
      >
        <button
          type="button"
          onClick={dismiss}
          aria-label="Close dream submission invitation"
          className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full text-2xl leading-none text-[#756C61] transition hover:bg-[#F3ECDD] hover:text-[#2A2A2A] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8F743C]"
        >
          <span aria-hidden="true">×</span>
        </button>

        <p className="mb-3 text-[10px] uppercase tracking-[0.22em] text-[#8A8175]">
          A quiet invitation
        </p>
        <h2
          id="dream-popup-title"
          className="font-serif text-3xl leading-tight text-[#1A1A1A] sm:text-4xl"
        >
          Share Your Dream
        </h2>
        <div className="mx-auto my-5 h-px w-12 bg-[#C6A96B]" />
        <div
          id="dream-popup-description"
          className="mx-auto max-w-md space-y-3 text-[15px] leading-relaxed text-[#5F574E] sm:text-base"
        >
          <p className="font-serif text-lg text-[#3A3A3A]">Every dream tells a story.</p>
          <p>Have a dream you can&apos;t stop thinking about?</p>
          <p>
            Share it anonymously with DreamScriptures. Some dreams may even
            inspire future interpretations that help others.
          </p>
        </div>

        <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:justify-center">
          <Link
            href="/submit-dream"
            onClick={rememberDismissal}
            className="inline-flex min-h-12 items-center justify-center rounded-full bg-[#1A1A1A] px-7 py-3 font-medium text-white transition hover:bg-[#333333] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8F743C]"
          >
            <span aria-hidden="true">✨</span>&nbsp; Submit My Dream
          </Link>
          <button
            type="button"
            onClick={dismiss}
            className="inline-flex min-h-12 items-center justify-center rounded-full border border-[#D8C7A0] bg-white px-7 py-3 font-medium text-[#5F574E] transition hover:border-[#C6A96B] hover:bg-[#FAF8F5] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8F743C]"
          >
            Maybe Later
          </button>
        </div>
      </section>
    </div>
  );
}
