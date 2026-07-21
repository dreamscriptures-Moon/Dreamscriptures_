"use client";

import { useState } from "react";

export default function GuideCopyLink() {
  const [copied, setCopied] = useState(false);
  async function copyLink() {
    await navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 2000);
  }
  return <button type="button" onClick={copyLink} className="rounded-full border border-[#D9D1C6] bg-white px-4 py-2 text-sm text-[#5F574E] transition hover:border-[#B79B5E] hover:text-[#1A1A1A] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8F743C]" aria-live="polite">{copied ? "Link copied" : "Copy link"}</button>;
}
