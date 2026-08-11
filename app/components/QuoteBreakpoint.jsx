"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import interpretationInsights from "@/data/interpretationInsights";

export default function QuoteBreakpoint({ heading, initialQuote }) {
  const matchedIndex = interpretationInsights.findIndex(({ insight }) => insight === initialQuote);
  const initialIndex = matchedIndex >= 0 ? matchedIndex : 0;
  const [insightIndex, setInsightIndex] = useState(initialIndex);
  const [isChanging, setIsChanging] = useState(false);
  const changeTimer = useRef(null);
  const recentIndexes = useRef([initialIndex]);
  const current = interpretationInsights[insightIndex];

  useEffect(() => () => {
    if (changeTimer.current) clearTimeout(changeTimer.current);
  }, []);

  function shuffleInsight() {
    if (isChanging) return;
    const allIndexes = interpretationInsights.map((_, index) => index);
    const unseen = allIndexes.filter((index) => !recentIndexes.current.includes(index));
    const pool = unseen.length ? unseen : allIndexes.filter((index) => index !== insightIndex);
    const nextIndex = pool[Math.floor(Math.random() * pool.length)];

    setIsChanging(true);
    changeTimer.current = setTimeout(() => {
      setInsightIndex(nextIndex);
      recentIndexes.current = [...recentIndexes.current, nextIndex].slice(-4);
      setIsChanging(false);
    }, 140);
  }

  return <section aria-label={heading} className="border-y border-[#DED7CD] bg-[#F5F1EB]">
    <div className="mx-auto max-w-4xl px-6 py-14 text-center md:py-20">
      <h2 className="text-[11px] font-normal uppercase tracking-[0.2em] text-[#8F743C]">{heading}</h2>
      <div className="mx-auto mt-6 h-px w-12 bg-[#C6A96B]" aria-hidden="true" />
      <div aria-live="polite" aria-atomic="true" className={`transition-opacity duration-150 motion-reduce:transition-none ${isChanging ? "opacity-0" : "opacity-100"}`}>
        <blockquote className="mx-auto mt-7 max-w-3xl font-serif text-[1.4rem] leading-[1.6] text-[#413B35] md:text-[1.75rem] md:leading-[1.55]">“{current.insight}”</blockquote>
        <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-[#6F675E] md:text-base">{current.prompt}</p>
      </div>
      <button type="button" onClick={shuffleInsight} disabled={isChanging} className="mt-7 inline-flex min-h-11 items-center border-b border-transparent px-2 text-xs tracking-[0.08em] text-[#756C61] hover:border-[#C6A96B] hover:text-[#4F4942] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#9A7B43] disabled:cursor-default">
        <span aria-hidden="true" className="mr-2 text-[#A48A58]">↻</span>Shuffle another insight
      </button>
      <div className="mt-4"><Link href={current.href} className="text-xs text-[#806431] underline decoration-[#C6A96B] underline-offset-4 hover:text-[#4F4942]">Explore this interpretation principle</Link></div>
    </div>
  </section>;
}
