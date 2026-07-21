"use client";

import { useEffect, useState } from "react";

export default function GuideTableOfContents({ items = [] }) {
  const [activeId, setActiveId] = useState(items[0]?.id || "");

  useEffect(() => {
    if (items.length < 3) return undefined;
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActiveId(visible[0].target.id);
      },
      { rootMargin: "-18% 0px -68%", threshold: [0, 1] }
    );
    items.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });
    return () => observer.disconnect();
  }, [items]);

  if (items.length < 3) return null;
  return (
    <nav aria-label="Table of contents" className="rounded-2xl border border-[#E2DCD3] bg-white p-6 md:p-8">
      <p className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-[#8A8175]">On this page</p>
      <ol className="grid gap-2 md:grid-cols-2">
        {items.map(({ id, title }, index) => (
          <li key={id}>
            <a href={`#${id}`} aria-current={activeId === id ? "location" : undefined} className={`block rounded-lg px-3 py-2 text-sm transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8F743C] ${activeId === id ? "bg-[#F3ECDD] text-[#725B2E]" : "text-[#5F574E] hover:bg-[#F7F5F2] hover:text-[#1A1A1A]"}`}>
              {index + 1}. {title}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}
