"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { getDreamHref } from "@/lib/routes";

const alphabet = Array.from({ length: 26 }, (_, index) =>
  String.fromCharCode(65 + index)
);

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
  const [activeCategory, setActiveCategory] = useState(null);

  const debouncedSearch = useDebouncedValue(search, 300);

  const query = debouncedSearch.trim().toLowerCase();
  const isSearching = query.length > 0;

  const filteredDreams = useMemo(() => {
    return dreams.filter((dream) => {
      const matchesSearch = query
              ? (dream.searchText || dream.normalizedTitle || dream.title.toLowerCase()).includes(query)
        : true;

      const matchesCategory = activeCategory
        ? dream.categoryKeys.includes(activeCategory)
        : true;

      return matchesSearch && matchesCategory;
    });
  }, [activeCategory, dreams, query]);

  const dreamGroups = useMemo(
    () =>
      alphabet
        .map((letter) => ({
          letter,
          dreams: filteredDreams.filter(
            (dream) => dream.title.trim().charAt(0).toUpperCase() === letter
          ),
        }))
        .filter((group) => group.dreams.length > 0),
    [filteredDreams]
  );

  const availableLetters = useMemo(
    () => new Set(dreamGroups.map((group) => group.letter)),
    [dreamGroups]
  );

  return (
    <>
      {/* Search */}

      <div className="mb-8">
        <div className="border border-[#EAE6E1] rounded-2xl px-5 py-4 bg-white focus-within:border-[#C6A96B] transition">
          <input
            type="text"
            placeholder="Search dreams like falling, snakes, teeth, pregnancy..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-transparent outline-none text-lg placeholder:text-[#A89F91]"
          />
        </div>
      </div>

      <nav aria-label="Browse dreams by first letter" className="mb-10 border-y border-[#E3DDD4] py-4">
        <div className="flex flex-wrap justify-center gap-x-1 gap-y-2 sm:gap-x-1.5">
          {alphabet.map((letter) =>
            availableLetters.has(letter) ? (
              <a
                key={letter}
                href={`#dreams-${letter.toLowerCase()}`}
                className="flex h-10 min-w-9 items-center justify-center rounded-full px-2 font-serif text-sm text-[#5F574E] transition hover:bg-white hover:text-[#8F743C] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8F743C]"
              >
                {letter}
              </a>
            ) : (
              <span
                key={letter}
                aria-disabled="true"
                className="flex h-10 min-w-9 cursor-not-allowed items-center justify-center px-2 font-serif text-sm text-[#B8B0A6]"
              >
                {letter}
              </span>
            )
          )}
        </div>
      </nav>

      {/* Categories */}

      {!isSearching && (
        <div className="mb-10">

          <div className="flex items-center justify-between mb-4">

            <div>

              <h2 className="font-serif text-2xl mb-2">
                Browse Dream Categories
              </h2>

              <p className="text-[#6B6B6B] text-sm">
                Filter dream meanings by category to quickly explore related symbols and themes.
              </p>

            </div>

            <Link
              href="/categories"
              className="text-sm text-[#8F743C] hover:underline whitespace-nowrap"
            >
              View All →
            </Link>

          </div>

          <div className="flex flex-wrap gap-3">

            <button
              type="button"
              onClick={() => {
                setActiveCategory(null);
              }}
              className={`px-4 py-2 rounded-full text-sm border transition ${
                !activeCategory
                  ? "border-[#C6A96B] text-[#1A1A1A]"
                  : "border-[#EAE6E1] text-[#6B6B6B] hover:border-[#C6A96B]"
              }`}
            >
              All
            </button>

            {categories.slice(0, 15).map((cat) => (
              <button
                key={cat.slug}
                type="button"
                onClick={() => {
                  setActiveCategory(cat.slug);
                }}
                className={`px-4 py-2 rounded-full text-sm border capitalize transition ${
                  activeCategory === cat.slug
                    ? "border-[#C6A96B] text-[#1A1A1A]"
                    : "border-[#EAE6E1] text-[#6B6B6B] hover:border-[#C6A96B]"
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
        {filteredDreams.length} dream meaning
        {filteredDreams.length !== 1 ? "s" : ""} available
      </p>

      {/* Results */}

      <div className="space-y-12 md:space-y-16">
        {dreamGroups.map((group) => (
          <section
            key={group.letter}
            id={`dreams-${group.letter.toLowerCase()}`}
            aria-labelledby={`dreams-${group.letter.toLowerCase()}-heading`}
            className="scroll-mt-24"
          >
            <div className="mb-6 flex items-center gap-4 border-b border-[#DED7CD] pb-3">
              <h2 id={`dreams-${group.letter.toLowerCase()}-heading`} className="font-serif text-3xl text-[#29251F]">
                {group.letter}
              </h2>
              <span className="text-xs text-[#8A8175]">
                {group.dreams.length} dream {group.dreams.length === 1 ? "meaning" : "meanings"}
              </span>
            </div>
            <div className="space-y-8 md:space-y-10">
              {group.dreams.map((dream) => (
          <Link
            key={dream.slug}
            href={getDreamHref(dream)}
            className="group block border border-[#EAE6E1] rounded-[28px] p-6 md:p-8 bg-[#FCFBF9] hover:border-[#C6A96B] transition-all duration-300"
          >
            <h2 className="font-serif text-2xl md:text-3xl mb-4 leading-tight group-hover:text-[#8C6A3B] transition-colors">
              {dream.title}
            </h2>

            <p className="text-[#6B6B6B] leading-relaxed text-base md:text-lg max-w-2xl">
              {dream.description}
            </p>

            <div className="mt-5 text-[#8F743C] font-medium">
              Read dream meaning →
            </div>

            {dream.categoryKeys?.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-5">
                {dream.categoryKeys.slice(0, 4).map((cat) => (
                  <span
                    key={cat}
                    className="text-xs px-3 py-1 rounded-full border border-[#EAE6E1] text-[#6B6B6B] bg-[#F7F5F2]"
                  >
                    {cat.charAt(0).toUpperCase() + cat.slice(1)}
                  </span>
                ))}
              </div>
            )}
          </Link>
              ))}
            </div>
          </section>
        ))}
      </div>

      {/* Empty State */}

      {filteredDreams.length === 0 && (
        <div className="text-center py-20">

          <h2 className="font-serif text-3xl mb-4">
            No dream meanings found
          </h2>

          <p className="text-[#6B6B6B] max-w-xl mx-auto">
            Try a nearby symbol, feeling, action, or situation. You can also
            explore the broader library or describe the dream in Dream Compass.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Link href="/dream-compass" className="rounded-full bg-[#1A1A1A] px-5 py-2.5 text-sm text-white hover:bg-[#333]">
              Try Dream Compass
            </Link>
            <Link href="/emotions" className="rounded-full border border-[#EAE6E1] px-5 py-2.5 text-sm text-[#6B6B6B] hover:border-[#C6A96B]">
              Browse emotions
            </Link>
            <Link href="/guides" className="rounded-full border border-[#EAE6E1] px-5 py-2.5 text-sm text-[#6B6B6B] hover:border-[#C6A96B]">
              Read a guide
            </Link>
          </div>

        </div>
      )}

    </>
  );
}
