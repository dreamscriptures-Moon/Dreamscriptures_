"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";

const INITIAL_COUNT = 15;
const LOAD_MORE_COUNT = 15;

function useDebouncedValue(value, delay = 300) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const timeout = window.setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => window.clearTimeout(timeout);
  }, [delay, value]);

  return debouncedValue;
}

export default function DreamDictionaryControls({ dreams = [], categories = [] }) {
  const [search, setSearch] = useState("");
  const [visibleCount, setVisibleCount] = useState(INITIAL_COUNT);
  const [activeCategory, setActiveCategory] = useState(null);
  const debouncedSearch = useDebouncedValue(search, 300);
  const query = debouncedSearch.trim().toLowerCase();

  const filteredDreams = useMemo(() => {
    return dreams.filter((dream) => {
      const matchesSearch = query
        ? (dream.normalizedTitle || dream.title.toLowerCase()).includes(query)
        : true;

      const matchesCategory = activeCategory
        ? dream.categoryKeys.includes(activeCategory)
        : true;

      return matchesSearch && matchesCategory;
    });
  }, [activeCategory, dreams, query]);

  const visibleDreams = useMemo(
    () => filteredDreams.slice(0, visibleCount),
    [filteredDreams, visibleCount]
  );

  const resetVisibleCount = () => {
    window.setTimeout(() => {
      setVisibleCount(INITIAL_COUNT);
    }, 0);
  };

  return (
    <>
      <div className="mb-10">
        <div className="border border-[#EAE6E1] rounded-xl px-5 py-4 bg-white focus-within:border-[#C6A96B] transition">
          <input
            type="text"
            placeholder="Search a dream..."
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              resetVisibleCount();
            }}
            className="w-full bg-transparent outline-none text-lg placeholder:text-[#A89F91]"
          />
        </div>
      </div>

      <div className="mb-12">
        <p className="text-xs uppercase tracking-widest text-[#A89F91] mb-6 text-center">
          Browse by theme
        </p>

        <div className="flex flex-wrap justify-center gap-3">
          <button
            type="button"
            onClick={() => {
              setActiveCategory(null);
              resetVisibleCount();
            }}
            className={`px-4 py-2 rounded-full text-sm border transition ${
              !activeCategory
                ? "border-[#C6A96B] text-[#1A1A1A]"
                : "border-[#EAE6E1] text-[#6B6B6B] hover:border-[#C6A96B] hover:text-[#1A1A1A]"
            }`}
          >
            All
          </button>

          {categories.map((cat) => (
            <button
              key={cat.slug}
              type="button"
              onClick={() => {
                setActiveCategory(cat.slug);
                resetVisibleCount();
              }}
              className={`px-4 py-2 rounded-full text-sm border capitalize transition ${
                activeCategory === cat.slug
                  ? "border-[#C6A96B] text-[#1A1A1A]"
                  : "border-[#EAE6E1] text-[#6B6B6B] hover:border-[#C6A96B] hover:text-[#1A1A1A]"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      <div className="space-y-4">
        {visibleDreams.map((dream) => (
          <Link
            key={dream.slug}
            href={`/dreams/${dream.slug}`}
            className="block border border-[#EAE6E1] p-5 rounded-xl bg-white hover:border-[#C6A96B] focus:border-[#C6A96B] active:bg-[#F7F5F2] hover:shadow-sm transition"
          >
            <p className="font-medium text-lg">{dream.title}</p>

            <p className="text-sm text-[#6B6B6B] mt-1">
              {dream.description}
            </p>
          </Link>
        ))}
      </div>

      {visibleCount < filteredDreams.length && (
        <div className="text-center mt-12">
          <button
            type="button"
            onClick={() => setVisibleCount((prev) => prev + LOAD_MORE_COUNT)}
            className="px-6 py-3 border border-[#EAE6E1] rounded-xl hover:border-[#C6A96B] focus:border-[#C6A96B] active:bg-white transition text-sm"
          >
            Load more
          </button>
        </div>
      )}
    </>
  );
}
