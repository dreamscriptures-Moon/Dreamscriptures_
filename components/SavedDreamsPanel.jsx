"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const SAVED_KEY = "dreamscriptures:saved-dreams:v1";

export default function SavedDreamsPanel() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const load = () => {
      try {
        const value = JSON.parse(window.localStorage.getItem(SAVED_KEY) || "[]");
        setItems(Array.isArray(value) ? value.slice(0, 6) : []);
      } catch {
        setItems([]);
      }
    };
    load();
    window.addEventListener("dreamscriptures:saved-dreams", load);
    return () => window.removeEventListener("dreamscriptures:saved-dreams", load);
  }, []);

  if (items.length === 0) return null;

  return (
    <section className="mb-12 rounded-2xl border border-[#E7DDD2] bg-[#FFFDF9] p-6" aria-label="Saved dreams">
      <div className="flex flex-wrap items-baseline justify-between gap-3">
        <div>
          <p className="text-[11px] uppercase tracking-[0.18em] text-[#8A8175]">On this device</p>
          <h2 className="mt-1 font-serif text-2xl">Saved dream meanings</h2>
        </div>
        <p className="text-xs text-[#7A746B]">Private browser storage</p>
      </div>
      <div className="mt-4 flex flex-wrap gap-2">
        {items.map((item) => (
          <Link key={item.slug} href={`/dreams/${item.slug}`} className="rounded-full border border-[#EAE6E1] bg-white px-4 py-2 text-sm text-[#5F574E] hover:border-[#C6A96B]">
            {item.title}
          </Link>
        ))}
      </div>
    </section>
  );
}
