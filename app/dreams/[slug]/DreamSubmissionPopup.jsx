"use client";

import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

export const OPEN_DREAM_SUBMISSION_POPUP = "dreamscriptures:open-submit-popup";

const STORAGE_KEY = "dreamscriptures_submit_popup_seen";
const SUPPRESSION_DURATION = 24 * 60 * 60 * 1000;
const SHOW_DELAY = 45 * 1000;
const MIN_SCROLL_PROGRESS = 0.3;

function wasRecentlySeen() {
  try {
    const timestamp = Number(window.localStorage.getItem(STORAGE_KEY));
    return Number.isFinite(timestamp) && Date.now() - timestamp < SUPPRESSION_DURATION;
  } catch {
    return false;
  }
}

function rememberDismissal() {
  try {
    window.localStorage.setItem(STORAGE_KEY, String(Date.now()));
  } catch {
    // Closing still works when storage is unavailable.
  }
}

export default function DreamSubmissionPopup() {
  const [canRender, setCanRender] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const dialogRef = useRef(null);
  const previousFocusRef = useRef(null);

  const open = useCallback(() => {
    previousFocusRef.current = document.activeElement;
    setIsOpen(true);
  }, []);

  const close = useCallback((remember = true) => {
    if (remember) rememberDismissal();
    dialogRef.current?.close();
    setIsOpen(false);
    window.requestAnimationFrame(() => previousFocusRef.current?.focus?.());
  }, []);

  useEffect(() => {
    const mountFrame = window.requestAnimationFrame(() => setCanRender(true));

    const handleOpenRequest = () => open();
    window.addEventListener(OPEN_DREAM_SUBMISSION_POPUP, handleOpenRequest);

    let showTimer;
    let readingDelayElapsed = false;
    const maybeOpen = () => {
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      const progress = scrollable > 0 ? window.scrollY / scrollable : 0;
      if (readingDelayElapsed && progress >= MIN_SCROLL_PROGRESS && !wasRecentlySeen()) open();
    };
    if (!wasRecentlySeen()) {
      showTimer = window.setTimeout(() => {
        readingDelayElapsed = true;
        maybeOpen();
      }, SHOW_DELAY);
      window.addEventListener("scroll", maybeOpen, { passive: true });
    }

    return () => {
      window.cancelAnimationFrame(mountFrame);
      window.removeEventListener(OPEN_DREAM_SUBMISSION_POPUP, handleOpenRequest);
      window.removeEventListener("scroll", maybeOpen);
      window.clearTimeout(showTimer);
    };
  }, [open]);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog || !isOpen || dialog.open) return;

    dialog.showModal();
  }, [isOpen]);

  if (!canRender) return null;

  return createPortal(
    <dialog
      ref={dialogRef}
      aria-labelledby="dream-popup-title"
      aria-describedby="dream-popup-description"
      onCancel={(event) => {
        event.preventDefault();
        close();
      }}
      onClose={() => setIsOpen(false)}
      onMouseDown={(event) => {
        const bounds = event.currentTarget.getBoundingClientRect();
        const clickedOutside =
          event.clientX < bounds.left ||
          event.clientX > bounds.right ||
          event.clientY < bounds.top ||
          event.clientY > bounds.bottom;
        if (clickedOutside) close();
      }}
      className="fixed inset-x-4 bottom-4 top-auto m-0 max-h-[calc(100dvh-2rem)] w-auto max-w-lg overflow-y-auto rounded-[1.75rem] border border-[#D8C7A0] bg-[#FCFBF9] px-6 pb-7 pt-9 text-center text-[#1A1A1A] shadow-[0_28px_80px_rgba(42,34,24,0.24)] backdrop:bg-[#1A1A1A]/45 backdrop:backdrop-blur-[2px] sm:inset-x-auto sm:bottom-auto sm:left-1/2 sm:top-1/2 sm:w-[calc(100%-3rem)] sm:-translate-x-1/2 sm:-translate-y-1/2 sm:px-10 sm:pb-10 sm:pt-11"
    >
      <button
        type="button"
        onClick={() => close()}
        aria-label="Close dream submission invitation"
        className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full text-2xl leading-none text-[#756C61] transition hover:bg-[#F3ECDD] hover:text-[#2A2A2A] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8F743C]"
      >
        <span aria-hidden="true">×</span>
      </button>

      <p className="mb-3 text-[10px] uppercase tracking-[0.22em] text-[#8A8175]">
        A quiet invitation
      </p>
      <h2 id="dream-popup-title" className="font-serif text-3xl leading-tight sm:text-4xl">
        Share Your Dream
      </h2>
      <div className="mx-auto my-5 h-px w-12 bg-[#C6A96B]" />
      <div id="dream-popup-description" className="mx-auto max-w-md space-y-3 text-[15px] leading-relaxed text-[#5F574E] sm:text-base">
        <p className="font-serif text-lg text-[#3A3A3A]">Every dream tells a story.</p>
        <p>Have a dream you can&apos;t stop thinking about?</p>
        <p>
          Share it anonymously with DreamScriptures. Some dreams may even inspire
          future interpretations that help others.
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
          onClick={() => close()}
          className="inline-flex min-h-12 items-center justify-center rounded-full border border-[#D8C7A0] bg-white px-7 py-3 font-medium text-[#5F574E] transition hover:border-[#C6A96B] hover:bg-[#FAF8F5] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8F743C]"
        >
          Maybe Later
        </button>
      </div>
    </dialog>,
    document.body
  );
}
