"use client";

import { useState, useEffect, useMemo } from "react";
import quotes from "@/data/quotes";

export default function RandomQuote() {
  // Get a random quote from the array
  const getRandomQuote = (arr) => {
    if (!arr || arr.length === 0) return "Dreams are the whispers of the soul.";
    return arr[Math.floor(Math.random() * arr.length)];
  };

  // Ensure we have an array (handles both direct array and { quotes: [...] } wrapper)
  const quotesArray = useMemo(() => Array.isArray(quotes) ? quotes : quotes?.quotes || [], []);
  const [quote, setQuote] = useState("");

  // Set initial quote on mount
  useEffect(() => {
    setQuote(getRandomQuote(quotesArray));
  }, [quotesArray]);

  // Handler for next quote
  const handleNextQuote = () => {
    // Pick a new random quote (possibly the same if only one)
    let newQuote = getRandomQuote(quotesArray);
    // Optional: avoid repeating the same quote back-to-back
    while (newQuote === quote && quotesArray.length > 1) {
      newQuote = getRandomQuote(quotesArray);
    }
    setQuote(newQuote);
  };

  if (!quote) {
    return (
      <div className="text-center py-4">
        <p className="font-serif italic text-3xl max-w-3xl mx-auto opacity-50">Loading…</p>
      </div>
    );
  }

  return (
    <div className="text-center">
      {/* Quote text */}
      <p className="font-serif italic text-3xl max-w-3xl mx-auto transition-opacity duration-300">
        {quote}
      </p>

      {/* Next quote button */}
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
    </div>
  );
}