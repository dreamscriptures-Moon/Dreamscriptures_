"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { useConsent } from "./ConsentProvider";

export default function CookieConsent() {
  const {
    preferences,
    isReady,
    isPreferencesOpen,
    closePreferences,
    openPreferences,
    acceptAll,
    rejectNonEssential,
    savePreferences,
  } = useConsent();
  const [draft, setDraft] = useState({ analytics: false, advertising: false });
  const closeButtonRef = useRef(null);

  useEffect(() => {
    if (!isPreferencesOpen) return;
    const focusTimer = window.setTimeout(() => {
      setDraft(preferences || { analytics: false, advertising: false });
      closeButtonRef.current?.focus();
    }, 0);
    return () => window.clearTimeout(focusTimer);
  }, [isPreferencesOpen, preferences]);

  useEffect(() => {
    if (!isPreferencesOpen) return undefined;
    const handleKeyDown = (event) => {
      if (event.key === "Escape") closePreferences();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [closePreferences, isPreferencesOpen]);

  if (!isReady) return null;

  return (
    <>
      {preferences === null && !isPreferencesOpen && (
        <section
          aria-label="Cookie consent"
          className="fixed inset-x-3 bottom-3 z-[70] mx-auto max-w-4xl rounded-2xl border border-[#DED7CD] bg-[#FAF8F5]/[0.98] p-5 shadow-[0_14px_45px_rgba(42,36,30,0.14)] backdrop-blur-sm motion-reduce:backdrop-blur-none md:bottom-5 md:p-6"
        >
          <div className="items-center gap-6 md:flex">
            <div className="min-w-0 flex-1">
              <p className="font-serif text-lg text-[#29251F]">Your privacy choices</p>
              <p className="mt-2 text-sm leading-6 text-[#625B52]">
                We use optional analytics to understand site performance and optional advertising technologies to support DreamScriptures. Necessary features remain available. Read our{" "}
                <Link className="underline underline-offset-4 hover:text-[#8F743C]" href="/privacy">
                  Privacy Policy
                </Link>.
              </p>
            </div>
            <div className="mt-5 flex flex-wrap gap-2 md:mt-0 md:max-w-[350px] md:justify-end">
              <button className="min-h-11 rounded-full border border-[#CFC5B8] px-4 text-sm text-[#49423A] hover:border-[#8F743C] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8F743C]" onClick={rejectNonEssential} type="button">
                Reject non-essential
              </button>
              <button className="min-h-11 rounded-full border border-[#CFC5B8] px-4 text-sm text-[#49423A] hover:border-[#8F743C] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8F743C]" onClick={openPreferences} type="button">
                Manage preferences
              </button>
              <button className="min-h-11 rounded-full bg-[#29251F] px-5 text-sm text-white hover:bg-[#51483E] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8F743C]" onClick={acceptAll} type="button">
                Accept all
              </button>
            </div>
          </div>
        </section>
      )}

      {isPreferencesOpen && (
        <div className="fixed inset-0 z-[80] flex items-end justify-center bg-[#211D18]/30 p-3 sm:items-center" role="presentation" onMouseDown={(event) => event.target === event.currentTarget && closePreferences()}>
          <section aria-labelledby="cookie-preferences-title" aria-modal="true" className="max-h-[calc(100vh-1.5rem)] w-full max-w-lg overflow-y-auto rounded-2xl border border-[#DED7CD] bg-[#FAF8F5] p-6 shadow-2xl sm:p-8" role="dialog">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-[10px] uppercase tracking-[0.2em] text-[#8A8175]">Privacy</p>
                <h2 className="mt-2 font-serif text-2xl text-[#29251F]" id="cookie-preferences-title">Cookie preferences</h2>
              </div>
              <button ref={closeButtonRef} aria-label="Close cookie preferences" className="flex h-11 w-11 items-center justify-center rounded-full border border-[#DED7CD] text-xl text-[#625B52] hover:border-[#8F743C] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8F743C]" onClick={closePreferences} type="button">×</button>
            </div>

            <p className="mt-4 text-sm leading-6 text-[#625B52]">Choose which optional technologies DreamScriptures may load. You can return to this panel from the footer.</p>

            <div className="mt-6 divide-y divide-[#EAE6E1] border-y border-[#EAE6E1]">
              <PreferenceRow checked description="Required for consent choices, security, sessions, and core site features." disabled label="Strictly necessary" />
              <PreferenceRow checked={draft.analytics} description="Helps measure visits, searches, performance, and site usage." label="Analytics" onChange={(checked) => setDraft((current) => ({ ...current, analytics: checked }))} />
              <PreferenceRow checked={draft.advertising} description="Allows Google AdSense and the two page-level Adsterra formats to load." label="Advertising" onChange={(checked) => setDraft((current) => ({ ...current, advertising: checked }))} />
            </div>

            <div className="mt-7 flex flex-wrap justify-end gap-2">
              <button className="min-h-11 rounded-full border border-[#CFC5B8] px-5 text-sm hover:border-[#8F743C] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8F743C]" onClick={rejectNonEssential} type="button">Reject non-essential</button>
              <button className="min-h-11 rounded-full bg-[#29251F] px-5 text-sm text-white hover:bg-[#51483E] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8F743C]" onClick={() => savePreferences(draft)} type="button">Save preferences</button>
            </div>
          </section>
        </div>
      )}
    </>
  );
}

function PreferenceRow({ checked, description, disabled = false, label, onChange }) {
  return (
    <label className={`flex gap-4 py-5 ${disabled ? "cursor-default" : "cursor-pointer"}`}>
      <span className="min-w-0 flex-1">
        <span className="block text-sm font-medium text-[#29251F]">{label}</span>
        <span className="mt-1 block text-xs leading-5 text-[#746C62]">{description}</span>
      </span>
      <input aria-label={label} checked={checked} className="mt-1 h-5 w-5 accent-[#8F743C]" disabled={disabled} onChange={(event) => onChange?.(event.target.checked)} type="checkbox" />
    </label>
  );
}
