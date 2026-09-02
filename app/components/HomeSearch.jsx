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
        <div className="px-4 py-4 text-sm text-[#6B6B6B]">
          <p>No interpretation found for &quot;{displayQuery}&quot; yet.</p>
          <p className="mt-2 leading-relaxed">
            Try a broader word, browse the library, or describe the dream in
            Dream Compass.
          </p>
          <div className="mt-3 flex flex-wrap gap-3">
            <Link href="/dreams" className="font-medium text-[#8F743C] underline underline-offset-4">Browse the library</Link>
            <Link href="/dream-compass" className="font-medium text-[#8F743C] underline underline-offset-4">Try Dream Compass</Link>
            <Link href="/submit-dream" className="font-medium text-[#8F743C] underline underline-offset-4">Submit your dream</Link>
          </div>
        </div>
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

const SearchInput = memo(function SearchInput({ value, onChange, onFocus }) {
  return (
    <input
      type="text"
      value={value}
      onFocus={onFocus}
      onChange={(e) => onChange(e.target.value)}
      onKeyDown={(event) => {
        if (event.key === "Enter") {
          event.preventDefault();
          event.currentTarget.form?.requestSubmit();
        }
      }}
      placeholder="What did you dream about?"
      aria-label="Search the dream interpretation library"
      autoComplete="off"
      className="min-w-0 flex-1 bg-transparent px-5 py-4 text-base outline-none placeholder:text-[#A89F91] md:px-6 md:py-5 md:text-lg"
    />
  );
});

export default function HomeSearch({ showSuggestions = true }) {
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

  const handleResultClick = useCallback(() => {
    setSearch("");

    window.setTimeout(() => {
      if (typeof window !== "undefined" && window.gtag) {
        window.gtag("event", "search_result_click");
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
        const resultCount = searchRouting?.getSearchResults(debouncedSearch)?.length || 0;
        window.gtag("event", "search", {
          result_count: resultCount,
          result_bucket: resultCount === 0 ? "none" : resultCount < 4 ? "few" : "many",
        });
      }
    }, 400);

    return () => window.clearTimeout(timeout);
  }, [debouncedSearch, query.length, searchRouting]);

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
        <div className="flex items-stretch overflow-hidden rounded-2xl border border-[#D8CFC2] bg-white shadow-[0_16px_45px_rgba(73,60,40,0.08)] transition focus-within:border-[#B89B62]">
          <SearchInput
            value={search}
            onChange={handleSearch}
            onFocus={ensureSearchRouting}
          />
          <button
            type="submit"
            className="m-2 inline-flex min-h-12 shrink-0 items-center justify-center rounded-xl bg-[#1A1A1A] px-5 text-sm font-medium text-white transition hover:bg-[#333] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8F743C] md:px-7"
          >
            Search
          </button>
        </div>

        {displayQuery && query && searchRouting && (
          <SearchResults
            displayQuery={displayQuery}
            results={filteredDreams}
            onResultClick={handleResultClick}
          />
        )}
      </form>

      {showSuggestions && <SuggestedSearches onSelect={handleSearch} />}
    </>
  );
}
