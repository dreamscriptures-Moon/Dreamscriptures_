"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { memo, useCallback, useEffect, useMemo, useState } from "react";

let searchRoutingPromise;

function loadSearchRouting() {
  if (!searchRoutingPromise) {
    searchRoutingPromise = import("@/lib/searchRouting");
  }

  return searchRoutingPromise;
}

const SUGGESTED_SEARCHES = ["falling", "snake", "being-chased", "flying"].map(
  (value) => ({
    value,
    label: value.replace("-", " "),
  })
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

const SearchResults = memo(function SearchResults({
  displayQuery,
  results,
  onResultClick,
}) {
  return (
    <div className="absolute top-full left-0 w-full mt-2 bg-white border border-[#EAE6E1] rounded-xl shadow-md overflow-hidden z-50 text-left">
      {results.length > 0 ? (
        results.map((dream) => (
          <Link
            key={dream.href}
            href={dream.href}
            onClick={() => onResultClick(dream.title)}
            className="block px-4 py-3 border-b border-[#EAE6E1] hover:bg-[#FAF9F7] focus:bg-[#FAF9F7] active:bg-[#F3EEE6] transition"
          >
            <span className="block font-medium text-[#1A1A1A]">
              {dream.title}
            </span>
            <span className="block text-sm text-[#6B6B6B] mt-1 leading-relaxed">
              {dream.snippet}
            </span>
          </Link>
        ))
      ) : (
        <p className="px-4 py-3 text-sm text-[#A89F91]">
          No dreams found for &quot;{displayQuery}&quot;
        </p>
      )}
    </div>
  );
});

const SuggestedSearches = memo(function SuggestedSearches({ onSelect }) {
  return (
    <div className="mt-6 flex flex-wrap justify-center gap-3">
      {SUGGESTED_SEARCHES.map((dream) => (
        <button
          key={dream.value}
          type="button"
          onClick={() => onSelect(dream.value)}
          className="text-sm text-[#6B6B6B] border border-[#EAE6E1] px-3 py-1.5 rounded-full hover:border-[#C6A96B] hover:text-[#1A1A1A] focus:border-[#C6A96B] focus:text-[#1A1A1A] active:bg-white transition"
        >
          {dream.label}
        </button>
      ))}
    </div>
  );
});

const SearchInput = memo(function SearchInput({ value, onChange }) {
  return (
    <input
      type="text"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder="Search a dream..."
      className="w-full bg-white/90 backdrop-blur border border-[#EAE6E1] rounded-xl px-6 py-5 outline-none text-base md:text-lg placeholder:text-[#A89F91] focus:border-[#C6A96B] active:border-[#C6A96B] transition"
    />
  );
});

export default function HomeSearch() {
  const router = useRouter();
  const [search, setSearch] = useState("");
  const [searchRouting, setSearchRouting] = useState(null);
  const debouncedSearch = useDebouncedValue(search, 300);
  const displayQuery = search.trim();
  const query = debouncedSearch.trim().toLowerCase();

  const ensureSearchRouting = useCallback(async () => {
    if (searchRouting) {
      return searchRouting;
    }

    const routingModule = await loadSearchRouting();
    setSearchRouting(routingModule);
    return routingModule;
  }, [searchRouting]);

  const handleSearch = useCallback(
    (value) => {
      setSearch(value);
      ensureSearchRouting();
    },
    [ensureSearchRouting]
  );

  const handleResultClick = useCallback((dreamTitle) => {
    setSearch("");

    window.setTimeout(() => {
      if (typeof window !== "undefined" && window.gtag) {
        window.gtag("event", "search_result_click", {
          dream_title: dreamTitle,
        });
      }
    }, 0);
  }, []);
  const handleSubmit = useCallback(
    async (event) => {
      event.preventDefault();

      const routing = await ensureSearchRouting();
      const href = routing.getBestSearchRoute(search);

      if (href) {
        setSearch("");
        router.push(href);
      }
    },
    [ensureSearchRouting, router, search]
  );

  useEffect(() => {
    if (query.length <= 2) {
      return;
    }

    const timeout = window.setTimeout(() => {
      if (typeof window !== "undefined" && window.gtag) {
        window.gtag("event", "search", {
          search_term: debouncedSearch,
        });
      }
    }, 400);

    return () => window.clearTimeout(timeout);
  }, [debouncedSearch, query.length]);

  const filteredDreams = useMemo(() => {
    if (!query) {
      return [];
    }

    return searchRouting?.getSearchResults(query) || [];
  }, [query, searchRouting]);

  return (
    <>
      <form
        className="relative mx-auto max-w-3xl"
        role="search"
        onSubmit={handleSubmit}
      >
        <SearchInput value={search} onChange={handleSearch} />

        {displayQuery && query && searchRouting && (
          <SearchResults
            displayQuery={displayQuery}
            results={filteredDreams}
            onResultClick={handleResultClick}
          />
        )}
      </form>

      <SuggestedSearches onSelect={handleSearch} />
    </>
  );
}
