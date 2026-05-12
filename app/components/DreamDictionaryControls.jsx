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

export default function DreamDictionaryControls({
  dreams = [],
  categories = [],
}) {
  const [search, setSearch] = useState("");
  const [visibleCount, setVisibleCount] =
    useState(INITIAL_COUNT);

  const [activeCategory, setActiveCategory] =
    useState(null);

  const debouncedSearch = useDebouncedValue(
    search,
    300
  );

  const query = debouncedSearch
    .trim()
    .toLowerCase();

  const isSearching = query.length > 0;

  const filteredDreams = useMemo(() => {
    return dreams.filter((dream) => {
      const matchesSearch = query
        ? (
            dream.normalizedTitle ||
            dream.title.toLowerCase()
          ).includes(query)
        : true;

      const matchesCategory = activeCategory
        ? dream.categoryKeys.includes(
            activeCategory
          )
        : true;

      return (
        matchesSearch && matchesCategory
      );
    });
  }, [activeCategory, dreams, query]);

  const visibleDreams = useMemo(
    () =>
      filteredDreams.slice(
        0,
        visibleCount
      ),
    [filteredDreams, visibleCount]
  );

  const resetVisibleCount = () => {
    window.setTimeout(() => {
      setVisibleCount(INITIAL_COUNT);
    }, 0);
  };

  return (
    <>
      {/* Search */}
      <div className="mb-6">
        <div className="border border-[#EAE6E1] rounded-2xl px-5 py-4 bg-white focus-within:border-[#C6A96B] transition">
          <input
            type="text"
            placeholder="Search a dream, emotion, or symbol..."
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              resetVisibleCount();
            }}
            className="w-full bg-transparent outline-none text-lg placeholder:text-[#A89F91]"
          />
        </div>
      </div>

      {/* Themes + categories */}
      {!isSearching && (
        <div className="mb-10">
          <div className="text-center mb-8">
            <p className="text-xs uppercase tracking-[0.25em] text-[#A89F91] mb-4">
              Explore by emotional theme
            </p>

            <p className="text-[#6B6B6B] leading-relaxed max-w-2xl mx-auto text-sm md:text-base">
              Explore dreams through emotional
              patterns like fear,
              vulnerability, transformation,
              pressure, uncertainty, and hidden
              emotions.
            </p>
          </div>

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
                  setActiveCategory(
                    cat.slug
                  );

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
      )}

      {/* Count */}
      <p className="text-xs tracking-[0.2em] uppercase text-[#8A8A8A] mb-6">
        Showing {filteredDreams.length} dream
        meanings
      </p>

      {/* Results */}
      <div className="space-y-8 md:space-y-10">
        {visibleDreams.map((dream) => (
          <Link
            key={dream.slug}
            href={`/dreams/${dream.slug}`}
            className="group block border border-[#EAE6E1] rounded-[28px] p-6 md:p-8 bg-[#FCFBF9] hover:border-[#C6A96B] transition-all duration-300"
          >
            <h2 className="font-serif text-2xl md:text-3xl mb-4 leading-tight group-hover:text-[#8C6A3B] transition-colors">
              {dream.title}
            </h2>

            <p className="text-[#6B6B6B] leading-relaxed text-base md:text-lg max-w-2xl">
              {dream.description}
            </p>

            {dream.categoryKeys?.length >
              0 && (
              <div className="flex flex-wrap gap-2 mt-5">
                {dream.categoryKeys
                  .slice(0, 4)
                  .map((cat) => (
                    <span
                      key={cat}
                      className="text-xs px-3 py-1 rounded-full border border-[#EAE6E1] text-[#6B6B6B] bg-[#F7F5F2]"
                    >
                      {cat}
                    </span>
                  ))}
              </div>
            )}
          </Link>
        ))}
      </div>

      {/* Load more */}
      {visibleCount <
        filteredDreams.length && (
        <div className="text-center mt-12">
          <button
            type="button"
            onClick={() =>
              setVisibleCount(
                (prev) =>
                  prev +
                  LOAD_MORE_COUNT
              )
            }
            className="px-6 py-3 border border-[#EAE6E1] rounded-xl hover:border-[#C6A96B] focus:border-[#C6A96B] active:bg-white transition text-sm"
          >
            Load more
          </button>
        </div>
      )}
    </>
  );
}