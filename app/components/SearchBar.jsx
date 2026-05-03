"use client";

import { memo, useCallback, useEffect, useMemo, useState } from "react";
import { dreamSearchIndex } from "@/data/dreamSearchIndex";
import Link from "next/link";

const MAX_RESULTS = 8;
const searchableDreams = dreamSearchIndex.map((item) => ({
  slug: item.slug,
  title: item.title,
  normalizedTitle: item.title.toLowerCase(),
}));

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

const SearchResults = memo(function SearchResults({ results }) {
  return (
    <div className="absolute left-6 right-6 mt-2 bg-white border border-[#EAE6E1] rounded-xl shadow-md overflow-hidden z-50">
      {results.length > 0 ? (
        results.map((item) => (
          <Link
            key={item.slug}
            href={`/dreams/${item.slug}`}
            className="block px-6 py-4 hover:bg-[#FAF7F2] focus:bg-[#FAF7F2] active:bg-[#F3EEE6] transition"
          >
            <p className="font-medium">{item.title}</p>
          </Link>
        ))
      ) : (
        <p className="px-6 py-4 text-sm text-[#8A8A8A]">No dreams found</p>
      )}
    </div>
  );
});

export default function SearchBar() {
  const [query, setQuery] = useState("");
  const debouncedQuery = useDebouncedValue(query, 300);
  const displayQuery = query.trim();
  const normalizedQuery = debouncedQuery.trim().toLowerCase();
  const handleQueryChange = useCallback((event) => {
    setQuery(event.target.value);
  }, []);

  useEffect(() => {
    if (normalizedQuery.length <= 2) {
      return;
    }

    const timeout = window.setTimeout(() => {
      if (typeof window !== "undefined" && window.gtag) {
        window.gtag("event", "search", {
          search_term: debouncedQuery,
        });
      }
    }, 400);

    return () => window.clearTimeout(timeout);
  }, [debouncedQuery, normalizedQuery.length]);

  const results = useMemo(() => {
    if (!normalizedQuery) {
      return [];
    }

    const matches = [];

    for (const item of searchableDreams) {
      if (item.normalizedTitle.includes(normalizedQuery)) {
        matches.push({
          slug: item.slug,
          title: item.title,
        });
      }

      if (matches.length >= MAX_RESULTS) {
        break;
      }
    }

    return matches;
  }, [normalizedQuery]);

  return (
    <form className="max-w-3xl mx-auto px-6 relative" role="search">
      <input
        type="text"
        value={query}
        onChange={handleQueryChange}
        placeholder="Search another dream..."
        className="w-full mt-10 border border-[#EAE6E1] rounded-xl px-6 py-5 bg-white shadow-sm outline-none text-base md:text-lg placeholder:text-[#A89F91] focus:border-[#C6A96B] active:border-[#C6A96B] transition"
      />

      {displayQuery && normalizedQuery && <SearchResults results={results} />}
    </form>
  );
}
