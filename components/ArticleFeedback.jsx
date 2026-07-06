"use client";

import { useState } from "react";

const options = [
  "✨ Very Accurate",
  "🤔 Somewhat Helpful",
  "💭 Still Unsure",
];

export default function ArticleFeedback({ dreamSlug }) {
  const [selected, setSelected] = useState("");

  function handleSelect(option) {
    if (selected) return;

    setSelected(option);

    const feedback = {
      dreamSlug,
      pageTitle: document.title,
      response: option,
      createdAt: new Date().toISOString(),
    };

    try {
      const key = "dreamscriptures_feedback";
      const existing = JSON.parse(localStorage.getItem(key) || "[]");

      const next = [
        ...existing.filter((item) => item.dreamSlug !== dreamSlug),
        feedback,
      ];

      localStorage.setItem(key, JSON.stringify(next));
    } catch (error) {
      console.warn("Unable to save feedback locally.", error);
    }

    window.dispatchEvent(
      new CustomEvent("dreamscriptures:article-feedback", {
        detail: feedback,
      })
    );
  }

  return (
    <section className="mt-16 border-y border-[#EAE6E1] bg-white/70 px-5 py-8 text-center">
      <h3 className="font-serif text-2xl text-[#1A1A1A]">
        Did this interpretation resonate with your dream?
      </h3>

      <div
        className="mt-6 flex flex-wrap justify-center gap-3"
        role="group"
        aria-label="Article feedback"
      >
        {options.map((option) => {
          const isSelected = selected === option;

          return (
            <button
              key={option}
              type="button"
              onClick={() => handleSelect(option)}
              disabled={Boolean(selected)}
              aria-pressed={isSelected}
              className={`rounded-full border px-5 py-2 text-sm transition focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C6A96B] focus-visible:ring-offset-2 disabled:cursor-default disabled:opacity-80 ${
                isSelected
                  ? "border-[#1A1A1A] bg-[#1A1A1A] text-white"
                  : "border-[#EAE6E1] bg-white text-[#5F574E] hover:border-[#C6A96B]"
              }`}
            >
              {option}
            </button>
          );
        })}
      </div>

      {selected && (
        <div className="mt-6">
          <p
            className="text-sm text-[#6B6B6B]"
            role="status"
            aria-live="polite"
          >
            Thank you for helping improve DreamScriptures 💛
          </p>

          <a
            href="/submit-dream"
            className="mt-4 inline-flex items-center rounded-full bg-[#1A1A1A] px-5 py-2 text-sm text-white transition hover:bg-[#2E2E2E]"
          >
            Share Your Dream
          </a>
        </div>
      )}
    </section>
  );
}