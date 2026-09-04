"use client";

import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { useConsent } from "@/components/consent/ConsentProvider";

const STORAGE_KEY = "dreamscriptures_dream_compass_intro_dismissed";

function wasDismissed() {
  try {
    return window.localStorage.getItem(STORAGE_KEY) === "1";
  } catch {
    return false;
  }
}

function rememberDismissal() {
  try {
    window.localStorage.setItem(STORAGE_KEY, "1");
  } catch {
    // The dialog can still be dismissed when browser storage is unavailable.
  }
}

export default function DreamCompassIntro() {
  const { isReady, preferences } = useConsent();
  const [canRender, setCanRender] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const dialogRef = useRef(null);
  const closeButtonRef = useRef(null);
  const previousFocusRef = useRef(null);

  const close = useCallback(() => {
    rememberDismissal();
    dialogRef.current?.close();
    setIsOpen(false);
    window.requestAnimationFrame(() => previousFocusRef.current?.focus?.());
  }, []);

  useEffect(() => {
    const mountFrame = window.requestAnimationFrame(() => setCanRender(true));
    return () => window.cancelAnimationFrame(mountFrame);
  }, []);

  useEffect(() => {
    if (!isReady || preferences === null || wasDismissed()) return;
    const openFrame = window.requestAnimationFrame(() => {
      previousFocusRef.current = document.activeElement;
      setIsOpen(true);
    });
    return () => window.cancelAnimationFrame(openFrame);
  }, [isReady, preferences]);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog || !isOpen || dialog.open) return;
    dialog.showModal();
    closeButtonRef.current?.focus();
  }, [isOpen]);

  if (!canRender) return null;

  return createPortal(
    <dialog
      ref={dialogRef}
      aria-labelledby="dream-compass-intro-title"
      aria-describedby="dream-compass-intro-description"
      onCancel={(event) => { event.preventDefault(); close(); }}
      onClose={() => setIsOpen(false)}
      onMouseDown={(event) => {
        const bounds = event.currentTarget.getBoundingClientRect();
        if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) close();
      }}
      className="fixed inset-x-4 bottom-4 top-auto m-0 max-h-[calc(100dvh-2rem)] w-auto max-w-xl overflow-y-auto rounded-[1.75rem] border border-[#D8C7A0] bg-[#FCFBF9] px-6 pb-8 pt-11 text-center text-[#1A1A1A] shadow-[0_28px_80px_rgba(42,34,24,0.24)] backdrop:bg-[#1A1A1A]/40 backdrop:backdrop-blur-[2px] sm:inset-x-auto sm:bottom-auto sm:left-1/2 sm:top-1/2 sm:w-[calc(100%-3rem)] sm:-translate-x-1/2 sm:-translate-y-1/2 sm:px-11 sm:pb-11 sm:pt-12"
    >
      <button ref={closeButtonRef} type="button" onClick={close} aria-label="Close Dream Compass introduction" className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full text-2xl leading-none text-[#756C61] transition hover:bg-[#F3ECDD] hover:text-[#2A2A2A] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8F743C]">
        <span aria-hidden="true">×</span>
      </button>
      <p className="mx-auto max-w-md text-[11px] font-semibold uppercase tracking-[0.2em] text-[#8F743C]">DID YOU HAVE A DREAM THAT STUCK WITH YOU?</p>
      <h2 id="dream-compass-intro-title" className="mt-4 font-serif text-2xl italic leading-tight text-[#3A342E] sm:text-3xl">One you can&apos;t quite put your finger on?</h2>
      <p className="mt-4 font-serif text-xl text-[#29251F]">Let us help you understand it.</p>
      <div className="mx-auto my-6 h-px w-12 bg-[#C6A96B]" />
      <p id="dream-compass-intro-description" className="mx-auto max-w-md text-[15px] leading-7 text-[#5F574E] sm:text-base"><strong className="font-semibold text-[#3A342E]">Dream Compass</strong> helps you explore a dream through its symbols, emotions, experiences, and different perspectives — then guides you toward the meanings that may fit your dream best.</p>
      <Link href="/dream-compass" onClick={rememberDismissal} className="mt-8 inline-flex min-h-12 items-center justify-center rounded-full bg-[#29251F] px-7 py-3 font-medium text-white transition hover:bg-[#51483E] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8F743C]">Explore Dream Compass →</Link>
    </dialog>,
    document.body,
  );
}
