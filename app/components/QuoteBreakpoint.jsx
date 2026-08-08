"use client";

import { useEffect, useRef, useState } from "react";

const REFLECTIONS = [
  "Sometimes a dream is not telling you what will happen.\nIt is showing you what your heart has been trying to say.",
  "There are dreams we remember because they frightened us,\nand dreams we remember because they revealed us.",
  "A dream may leave no answer, yet still make room\nfor a truer question.",
  "The symbol that follows you into morning may be asking\nfor attention, not certainty.",
  "Some dreams speak in shadows because the waking heart\nis still learning how to name the light.",
  "What feels strange in a dream may be something familiar\nseen from the soul’s quieter side.",
  "Not every dream is a message to decode.\nSome are places where the inner life learns to breathe.",
  "A recurring dream may be less like a warning\nand more like a door still waiting to be opened.",
  "When a dream lingers, begin with the feeling.\nThe heart often remembers before the mind understands.",
  "Dreams do not always point beyond us.\nSometimes they lead us more honestly within.",
];

export default function QuoteBreakpoint({ heading, initialQuote }) {
  const initialIndex = Math.max(0, REFLECTIONS.indexOf(initialQuote));
  const [quoteIndex, setQuoteIndex] = useState(initialIndex);
  const [isChanging, setIsChanging] = useState(false);
  const changeTimer = useRef(null);

  useEffect(
    () => () => {
      if (changeTimer.current) clearTimeout(changeTimer.current);
    },
    []
  );

  function shuffleQuote() {
    if (isChanging) return;

    let nextIndex = Math.floor(Math.random() * REFLECTIONS.length);
    if (nextIndex === quoteIndex) {
      nextIndex = (nextIndex + 1) % REFLECTIONS.length;
    }

    setIsChanging(true);
    changeTimer.current = setTimeout(() => {
      setQuoteIndex(nextIndex);
      setIsChanging(false);
    }, 140);
  }

  return (
    <section
      aria-label={heading}
      className="border-y border-[#DED7CD] bg-[#F5F1EB]"
    >
      <div className="mx-auto max-w-4xl px-6 py-14 text-center md:py-20">
        <h2 className="font-sans text-[11px] font-normal uppercase tracking-[0.2em] text-[#8F743C]">
          {heading}
        </h2>
        <div className="mx-auto mt-6 h-px w-12 bg-[#C6A96B]" aria-hidden="true" />
        <blockquote
          aria-live="polite"
          aria-atomic="true"
          className={`mx-auto mt-7 max-w-3xl whitespace-pre-line font-serif text-[1.4rem] leading-[1.6] text-[#413B35] transition-opacity duration-150 md:text-[1.75rem] md:leading-[1.55] ${
            isChanging ? "opacity-0" : "opacity-100"
          }`}
        >
          “{REFLECTIONS[quoteIndex]}”
        </blockquote>
        <button
          type="button"
          onClick={shuffleQuote}
          disabled={isChanging}
          className="mt-7 inline-flex min-h-11 items-center border-b border-transparent px-1 text-xs tracking-[0.08em] text-[#756C61] transition-colors hover:border-[#C6A96B] hover:text-[#4F4942] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#9A7B43] disabled:cursor-default"
        >
          <span aria-hidden="true" className="mr-2 text-[#A48A58]">
            ↻
          </span>
          Shuffle another thought
        </button>
      </div>
    </section>
  );
}
