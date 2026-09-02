"use client";

import { useState } from "react";

const SAVED_KEY = "dreamscriptures:saved-dreams:v1";

function readSaved() {
  try {
    const value = JSON.parse(window.localStorage.getItem(SAVED_KEY) || "[]");
    return Array.isArray(value) ? value : [];
  } catch {
    return [];
  }
}

export default function DreamReaderTools({ slug, title }) {
  const [saved, setSaved] = useState(() =>
    typeof window !== "undefined" && readSaved().some((item) => item.slug === slug)
  );
  const [message, setMessage] = useState("");

  const toggleSaved = () => {
    const current = readSaved();
    const next = saved
      ? current.filter((item) => item.slug !== slug)
      : [{ slug, title }, ...current.filter((item) => item.slug !== slug)].slice(0, 30);
    try {
      window.localStorage.setItem(SAVED_KEY, JSON.stringify(next));
      window.dispatchEvent(new Event("dreamscriptures:saved-dreams"));
      setSaved(!saved);
      setMessage(!saved ? "Saved on this device" : "Removed from saved dreams");
    } catch {
      setMessage("Saving is unavailable in this browser");
    }
  };

  const share = async () => {
    const shareData = { title, text: `Dream meaning: ${title}`, url: window.location.href };
    try {
      if (navigator.share) await navigator.share(shareData);
      else {
        await navigator.clipboard.writeText(window.location.href);
        setMessage("Link copied");
      }
    } catch (error) {
      if (error?.name !== "AbortError") setMessage("The link could not be shared");
      return;
    }
    if (navigator.share) setMessage("Ready to share");
  };

  return (
    <div className="mb-8 flex flex-wrap items-center gap-3" aria-label="Reader tools">
      <button type="button" onClick={toggleSaved} className="min-h-10 rounded-full border border-[#EAE6E1] px-4 py-2 text-sm text-[#5F574E] transition hover:border-[#C6A96B]">
        {saved ? "Saved" : "Save this dream"}
      </button>
      <button type="button" onClick={share} className="min-h-10 rounded-full border border-[#EAE6E1] px-4 py-2 text-sm text-[#5F574E] transition hover:border-[#C6A96B]">
        Share or copy link
      </button>
      {message && <span className="text-xs text-[#7A746B]" role="status">{message}</span>}
      <span className="sr-only">Saved dreams stay in this browser and are not uploaded.</span>
    </div>
  );
}
