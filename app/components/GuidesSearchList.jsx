"use client";

import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";

const INITIAL_COUNT = 12;
const LOAD_MORE_COUNT = 8;

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

export default function GuidesSearchList({ guides = [], children }) {
  const searchInput = useRef(null);
  const [search, setSearch] = useState("");
  const [visibleCount, setVisibleCount] = useState(INITIAL_COUNT);
  const debouncedSearch = useDebouncedValue(search, 300);
  const query = debouncedSearch.trim().toLowerCase();

  const filteredGuides = useMemo(() => {
    if (!query) {
      return guides;
    }

    return guides.filter((guide) => {
      return (
        guide.title.toLowerCase().includes(query) ||
        guide.slug.toLowerCase().includes(query) ||
        guide.description.toLowerCase().includes(query)
      );
    });
  }, [guides, query]);

  const visibleGuides = useMemo(
    () => filteredGuides.slice(0, visibleCount),
    [filteredGuides, visibleCount]
  );

  return (
    <>
      <div className="mb-6 mt-8 max-w-3xl">
        <label htmlFor="guide-search" className="mb-3 block font-medium text-[#3A3A3A]">What are you curious about?</label>
        <div className="border border-[#EAE6E1] rounded-2xl px-5 py-4 bg-white/90 backdrop-blur-sm focus-within:border-[#C6A96B] transition shadow-[0_10px_30px_rgba(26,26,26,0.04)]">
          <input
            ref={searchInput}
            id="guide-search"
            type="search"
            placeholder="Try lucid dreaming or sleep"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              window.setTimeout(() => {
                setVisibleCount(INITIAL_COUNT);
              }, 0);
            }}
            aria-describedby="guide-search-hint" aria-controls="guide-results"
            className="scroll-mt-28 w-full bg-transparent outline-none text-base md:text-lg placeholder:text-[#A89F91] text-[#1A1A1A]"
          />
        </div>
        <p id="guide-search-hint" className="mt-3 text-sm leading-6 text-[#756C61]">Search articles in the guide library. For a specific dream or symbol, use the <Link href="/dreams" className="underline underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8F743C]">Dream Dictionary</Link>.</p>
        {search && <button type="button" onClick={() => { setSearch(""); setVisibleCount(INITIAL_COUNT); searchInput.current?.focus(); }} className="mt-2 inline-flex min-h-11 items-center text-sm text-[#806431] underline underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#8F743C]">Clear search and browse</button>}
      </div>

      {!query && children}

      <section id="guide-results" aria-labelledby="collection-heading" className="border-t border-[#DED7CD] py-8 md:py-10">
        <h2 id="collection-heading" className="mb-4 font-serif text-2xl">{query ? "Search results" : "All guides"}</h2>
        <p className="mb-4 text-sm text-[#756C61]" role="status">{filteredGuides.length} {filteredGuides.length === 1 ? "guide" : "guides"}{query ? " found" : " to browse"}</p>
        <div className="divide-y divide-[#E2DCD3]">
          {filteredGuides.length > 0 ? (
            visibleGuides.map((guide) => (
              <Link
                key={guide.slug}
                href={`/guides/${guide.slug}`}
                className="block py-4 hover:text-[#806431] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#8F743C]"
              >
                <span className="block font-medium text-base md:text-lg">
                  {guide.title}
                </span>
                <span className="block text-sm leading-6 text-[#6B6B6B] mt-2">
                  {guide.description}
                </span>
              </Link>
            ))
          ) : (
            <div className="rounded-xl border border-[#EAE6E1] bg-white px-6 py-8 text-[#6B6B6B]">
              No guides match your search.
            </div>
          )}
        </div>

        {visibleCount < filteredGuides.length && (
          <div className="text-center mt-10">
            <button
              type="button"
              onClick={() => setVisibleCount((prev) => prev + LOAD_MORE_COUNT)}
              className="px-6 py-3 border border-[#EAE6E1] rounded-xl hover:border-[#C6A96B] focus:border-[#C6A96B] active:bg-white transition text-sm"
            >
              Load more
            </button>
          </div>
        )}
      </section>
    </>
  );
}
