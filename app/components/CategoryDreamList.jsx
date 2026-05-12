"use client";

import { useState } from "react";
import Link from "next/link";

const INITIAL_COUNT = 12;
const LOAD_MORE_COUNT = 6;

export default function CategoryDreamList({
  dreams = [],
  category,
}) {
  const [visibleCount, setVisibleCount] =
    useState(INITIAL_COUNT);

  const visibleDreams = dreams.slice(0, visibleCount);

  return (
    <>
      <div className="space-y-8 md:space-y-10 mt-12">
        {visibleDreams.map((dream) => (
          <Link
            key={dream.slug}
            href={`/dreams/${dream.slug}`}
            className="group block border border-[#EAE6E1] rounded-[28px] p-6 md:p-8 bg-[#FCFBF9] hover:border-[#C6A96B] transition-all duration-300"
          >
            {/* Title */}
            <h3 className="font-serif text-2xl md:text-3xl mb-4 leading-tight group-hover:text-[#8C6A3B] transition-colors">
              {dream.title}
            </h3>

            {/* Summary */}
            <p className="text-[#6B6B6B] leading-relaxed text-base md:text-lg max-w-2xl">
              {dream.microSummary || dream.summary}
            </p>

            {/* Categories */}
            {dream.categories?.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-5">
                {dream.categories.slice(0, 4).map((cat) => (
                  <span
                    key={cat}
                    className="text-xs px-3 py-1 rounded-full border border-[#EAE6E1] text-[#6B6B6B] bg-[#F7F5F2]"
                  >
                    {cat}
                  </span>
                ))}
              </div>
            )}

            {/* Footer */}
            <div className="mt-6 text-xs tracking-wide uppercase text-[#8A8A8A]">
              Related to {category} themes
            </div>
          </Link>
        ))}
      </div>

      {/* Counter */}
      <p className="text-xs text-[#8A8A8A] mt-8">
        Showing {Math.min(visibleCount, dreams.length)} of{" "}
        {dreams.length} dreams
      </p>

      {/* Load more */}
      {visibleCount < dreams.length && (
        <div className="mt-10 text-center">
          <button
            type="button"
            onClick={() =>
              setVisibleCount(
                (prev) => prev + LOAD_MORE_COUNT
              )
            }
            className="px-6 py-3 border border-[#EAE6E1] rounded-full bg-[#FCFBF9] hover:border-[#C6A96B] transition-colors"
          >
            Load more dreams
          </button>
        </div>
      )}
    </>
  );
}