"use client";

import { useState } from "react";

export default function RandomQuoteButton({ initialQuote }) {
  const [currentQuote, setCurrentQuote] = useState(initialQuote);

  const handleNextQuote = async () => {
    const quotesModule = await import("@/data/quotes");
    const source = quotesModule.default;
    const quotes = Array.isArray(source) ? source : source?.quotes || [];

    if (quotes.length === 0) return;

    let nextQuote = quotes[Math.floor(Math.random() * quotes.length)];
    while (nextQuote === currentQuote && quotes.length > 1) {
      nextQuote = quotes[Math.floor(Math.random() * quotes.length)];
    }

    const quoteElement = document.getElementById("homepage-random-quote");
    if (quoteElement) quoteElement.textContent = nextQuote;
    setCurrentQuote(nextQuote);
  };

  return (
    <button
      onClick={handleNextQuote}
      className="mt-8 inline-flex items-center gap-2 text-sm uppercase tracking-[0.15em] text-[#8A8175] hover:text-[#1A1A1A] transition-colors duration-200 border-b border-transparent hover:border-[#C6A96B] pb-1"
      aria-label="Next quote"
    >
      <span>Next Quote</span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M5 12h14" />
        <path d="M12 5l7 7-7 7" />
      </svg>
    </button>
  );
}
