"use client";

import { useEffect, useState } from "react";

const defaultNavItems = [
  { id: "dream-overview", label: "Overview" },
  { id: "when-this-dream-happens", label: "When it appears" },
  { id: "emotional-meaning", label: "Emotional meaning" },
  { id: "symbolic-meaning", label: "Symbolic meaning" },
  { id: "spiritual-meaning", label: "Spiritual meaning" },
  { id: "real-life-meaning", label: "Waking life meaning" },
  { id: "multiple-meanings", label: "Multiple meanings" },
  { id: "subconscious-patterns", label: "Subconscious patterns" },
  { id: "life-situations", label: "Life situations" },
  { id: "behavioral-insights", label: "Behavioral insights" },
  { id: "emotional-themes", label: "Emotional themes" },
  { id: "emotional-connections", label: "Emotional connections" },
  { id: "emotional-authority-map", label: "Authority map" },
  { id: "related-dreams", label: "Related clusters" },
  { id: "faqs", label: "FAQs" },
];

export default function DreamPageClientNav({ items = defaultNavItems }) {
  const [activeSection, setActiveSection] = useState("");
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleHash = () => {
      if (window.location.hash) {
        const el = document.querySelector(window.location.hash);
        if (el) {
          setTimeout(() => {
            el.scrollIntoView({ behavior: "smooth", block: "start" });
          }, 50);
        }
      }
    };

    handleHash();
    window.addEventListener("hashchange", handleHash);

    return () => window.removeEventListener("hashchange", handleHash);
  }, []);

  useEffect(() => {
    const sections = Array.from(document.querySelectorAll("section[id]")).filter(
      (section) => items.some((item) => item.id === section.id)
    );

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible[0]) {
          setActiveSection(visible[0].target.id);
        }
      },
      { rootMargin: "-28% 0px -60% 0px", threshold: [0.1, 0.35, 0.6] }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, [items]);

  const handleNavClick = (event, id) => {
    const section = document.getElementById(id);

    if (!section) return;

    event.preventDefault();
    window.history.pushState(null, "", `#${id}`);
    section.scrollIntoView({ behavior: "smooth", block: "start" });
    setActiveSection(id);
  };

  useEffect(() => {
    const handleScroll = () => {
      const total =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

      const progress = total > 0 ? (window.scrollY / total) * 100 : 0;
      setScrollProgress(progress);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div
        className="fixed top-0 left-0 h-[2px] bg-[#C6A96B] z-50"
        style={{ width: `${scrollProgress}%` }}
      />

      <nav className="mb-8 text-sm" aria-label="Dream page sections">
        <p className="text-[11px] uppercase tracking-[0.18em] text-[#8A8175] mb-3">
          On this page
        </p>

        <ul className="space-y-2 pl-4 relative">
          <li
            aria-hidden="true"
            className="absolute left-0 top-1 bottom-1 w-px bg-gradient-to-b from-[#EAE6E1] via-[#D8C7A0] to-[#EAE6E1]"
          />
          {items.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                onClick={(event) => handleNavClick(event, item.id)}
                aria-current={activeSection === item.id ? "true" : undefined}
                className={`block border-l-2 py-1 pl-3 -ml-[17px] transition-colors duration-200 hover:border-[#C6A96B] hover:text-[#8F743C] ${
                  activeSection === item.id
                    ? "border-[#C6A96B] text-[#8F743C]"
                    : "border-transparent text-[#6B6B6B]"
                }`}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}
