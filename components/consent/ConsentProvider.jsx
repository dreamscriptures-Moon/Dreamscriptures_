"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";

const STORAGE_KEY = "dreamscriptures_cookie_consent";
const CONSENT_VERSION = 1;
const ConsentContext = createContext(null);

function readStoredConsent() {
  try {
    const stored = JSON.parse(window.localStorage.getItem(STORAGE_KEY));
    if (stored?.version !== CONSENT_VERSION) return null;
    return {
      analytics: stored.analytics === true,
      advertising: stored.advertising === true,
    };
  } catch {
    return null;
  }
}

export default function ConsentProvider({ children }) {
  const [preferences, setPreferences] = useState(null);
  const [isPreferencesOpen, setIsPreferencesOpen] = useState(false);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const hydrationTimer = window.setTimeout(() => {
      setPreferences(readStoredConsent());
      setIsReady(true);
    }, 0);
    return () => window.clearTimeout(hydrationTimer);
  }, []);

  const savePreferences = useCallback((nextPreferences) => {
    const normalized = {
      analytics: nextPreferences.analytics === true,
      advertising: nextPreferences.advertising === true,
    };
    window.localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({ version: CONSENT_VERSION, ...normalized }),
    );
    const withdrawsConsent =
      preferences !== null &&
      ((preferences.analytics && !normalized.analytics) ||
        (preferences.advertising && !normalized.advertising));
    setPreferences(normalized);
    setIsPreferencesOpen(false);
    if (withdrawsConsent) window.location.reload();
  }, [preferences]);

  const value = useMemo(
    () => ({
      preferences,
      isReady,
      isPreferencesOpen,
      openPreferences: () => setIsPreferencesOpen(true),
      closePreferences: () => setIsPreferencesOpen(false),
      acceptAll: () => savePreferences({ analytics: true, advertising: true }),
      rejectNonEssential: () =>
        savePreferences({ analytics: false, advertising: false }),
      savePreferences,
    }),
    [isPreferencesOpen, isReady, preferences, savePreferences],
  );

  return <ConsentContext.Provider value={value}>{children}</ConsentContext.Provider>;
}

export function useConsent() {
  const context = useContext(ConsentContext);
  if (!context) throw new Error("useConsent must be used within ConsentProvider");
  return context;
}
