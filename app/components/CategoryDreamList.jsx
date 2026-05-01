"use client";

import { useState } from "react";
import Link from "next/link";

const INITIAL_COUNT = 12;
const LOAD_MORE_COUNT = 6;

export default function CategoryDreamList({ dreams = [], category }) {
  const [visibleCount, setVisibleCount] = useState(INITIAL_COUNT);
  const visibleDreams = dreams.slice(0, visibleCount);

  return (
    <>
      <div className="space-y-4 mt-10">
        {visibleDreams.map((dream) => (
          <Link
            key={dream.slug}
            href={`/dreams/${dream.slug}`}
            className="block border border-[#EAE6E1] p-5 rounded-lg bg-white hover:border-[#C6A96B] transition"
          >
            <span className="block font-medium text-base md:text-lg">
              {dream.title}
            </span>

            <span className="block text-sm text-[#6B6B6B] mt-1">
              {(dream.description || "").slice(0, 120)}...
            </span>

            <span className="block text-xs text-[#8A8A8A] mt-2">
              Related to {category} themes
            </span>
          </Link>
        ))}
      </div>
<p className="text-xs text-[#8A8A8A] mb-4">
  Showing {Math.min(visibleCount, dreams.length)} of {dreams.length} dreams
</p>
      {visibleCount < dreams.length && (
        <div className="mt-10 text-center">
          <button
            type="button"
            onClick={() => setVisibleCount((prev) => prev + LOAD_MORE_COUNT)}
            className="px-6 py-2 border border-[#EAE6E1] rounded-full hover:border-[#C6A96B] transition"
          >
            Load more
          </button>
        </div>
      )}
    </>
  );
}
