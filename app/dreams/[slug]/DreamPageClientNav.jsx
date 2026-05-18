"use client";

import { useEffect, useState } from "react";

const navItems = [
  { id: "emotional-meaning", label: "Emotional meaning" },
  { id: "symbolic-meaning", label: "Symbolic meaning" },
  { id: "spiritual-meaning", label: "Spiritual meaning" },
  { id: "real-life-meaning", label: "Waking life meaning" },
  { id: "related-dreams", label: "Related dreams" },
  { id: "emotional-connections", label: "Emotional connections" },
  { id: "faqs", label: "FAQs" },
];

export default function DreamPageClientNav() {
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
    const sections = document.querySelectorAll("section[id]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

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

      <nav className="mb-8 text-sm">
        <p className="text-[11px] uppercase tracking-[0.18em] text-[#8A8175] mb-3">
          On this page
        </p>

        <ul className="space-y-2 pl-4 relative">
          <li
            aria-hidden="true"
            className="absolute left-0 top-1 bottom-1 w-px bg-gradient-to-b from-[#EAE6E1] via-[#D8C7A0] to-[#EAE6E1]"
          />
          {navItems.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className={`hover:text-[#C6A96B] transition-colors duration-200 ${
                  activeSection === item.id
                    ? "text-[#C6A96B]"
                    : "text-[#6B6B6B]"
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
