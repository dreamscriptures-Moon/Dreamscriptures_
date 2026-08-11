"use client";

import { memo, useCallback, useEffect, useId, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

let searchRoutingPromise;

function loadSearchRouting() {
  if (!searchRoutingPromise) {
    searchRoutingPromise = import("@/lib/searchRouting");
  }

  return searchRoutingPromise;
}

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

const resultLabels = {
  dream: "Dream meaning",
  category: "Dream category",
  emotion: "Emotional pathway",
  guide: "Guide",
  "authority-alias": "Dream meaning",
  "authority-type": "Dream section",
};

const SearchResults = memo(function SearchResults({ results, resultsId, activeIndex, onActivate }) {
  return (
    <div id={resultsId} role="listbox" aria-label="Search suggestions" className="absolute left-6 right-6 mt-2 max-h-[70vh] overflow-y-auto bg-white border border-[#EAE6E1] rounded-xl shadow-md z-50">
      {results.length > 0 ? (
        results.map((item, index) => (
          <Link
            key={item.href}
            id={`${resultsId}-option-${index}`}
            href={item.href}
            role="option"
            aria-selected={index === activeIndex}
            onMouseEnter={() => onActivate(index)}
            className="block border-b border-[#F0ECE6] px-6 py-4 last:border-b-0 hover:bg-[#FAF7F2] focus:bg-[#FAF7F2] active:bg-[#F3EEE6] transition"
          >
            <span className="text-[10px] font-medium uppercase tracking-[0.16em] text-[#8F743C]">
              {resultLabels[item.source] || "Resource"}
            </span>
            <p className="mt-1 font-medium">{item.title}</p>
            {item.snippet && <p className="mt-1 line-clamp-2 text-sm leading-5 text-[#756D64]">{item.snippet}</p>}
          </Link>
        ))
      ) : (
        <p className="px-6 py-4 text-sm text-[#8A8A8A]">No matching dreams or resources found</p>
      )}
    </div>
  );
});

export default function SearchBar() {
  const router = useRouter();
  const searchId = useId();
  const [query, setQuery] = useState("");
  const [searchRouting, setSearchRouting] = useState(null);
  const [activeIndex, setActiveIndex] = useState(-1);
  const [isOpen, setIsOpen] = useState(true);
  const debouncedQuery = useDebouncedValue(query, 300);
  const displayQuery = query.trim();
  const resultsId = `${searchId}-results`;
  const normalizedQuery = debouncedQuery.trim().toLowerCase();
  const ensureSearchRouting = useCallback(async () => {
    if (searchRouting) {
      return searchRouting;
    }

    const routingModule = await loadSearchRouting();
    setSearchRouting(routingModule);
    return routingModule;
  }, [searchRouting]);
  const handleQueryChange = useCallback(
    (event) => {
      setQuery(event.target.value);
      setActiveIndex(-1);
      setIsOpen(true);
      ensureSearchRouting();
    },
    [ensureSearchRouting]
  );
  const handleSubmit = useCallback(
    async (event) => {
      event.preventDefault();

      const search = await ensureSearchRouting();
      const currentResults = search.getSearchResults(query);
      const href = currentResults[activeIndex]?.href || search.getBestSearchRoute(query);

      if (href) {
        setQuery("");
        setActiveIndex(-1);
        router.push(href);
      }
    },
    [activeIndex, ensureSearchRouting, query, router]
  );

  const handleSearchFocus = useCallback(() => {
    setIsOpen(true);
    ensureSearchRouting();
  }, [ensureSearchRouting]);

  const results = useMemo(() => {
    if (!normalizedQuery || !searchRouting) {
      return [];
    }

    return searchRouting.getSearchResults(normalizedQuery);
  }, [normalizedQuery, searchRouting]);

  const handleKeyDown = useCallback((event) => {
    if (event.key === "Escape") {
      setIsOpen(false);
      setActiveIndex(-1);
      return;
    }

    if (!results.length || (event.key !== "ArrowDown" && event.key !== "ArrowUp")) {
      return;
    }

    event.preventDefault();
    setIsOpen(true);
    setActiveIndex((current) => {
      if (event.key === "ArrowDown") return current >= results.length - 1 ? 0 : current + 1;
      return current <= 0 ? results.length - 1 : current - 1;
    });
  }, [results]);

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

  return (
    <form
      className="max-w-3xl mx-auto px-6 relative"
      role="search"
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        role="combobox"
        aria-label="Search dreams and interpretation resources"
        aria-autocomplete="list"
        aria-controls={displayQuery ? resultsId : undefined}
        aria-expanded={Boolean(isOpen && displayQuery && normalizedQuery && searchRouting)}
        aria-activedescendant={activeIndex >= 0 ? `${resultsId}-option-${activeIndex}` : undefined}
        value={query}
        onFocus={handleSearchFocus}
        onChange={handleQueryChange}
        onKeyDown={handleKeyDown}
        placeholder="Search dreams, emotions, categories, or guides..."
        className="w-full mt-10 border border-[#EAE6E1] rounded-xl px-6 py-5 bg-white shadow-sm outline-none text-base md:text-lg placeholder:text-[#A89F91] focus:border-[#C6A96B] active:border-[#C6A96B] transition"
      />

      {isOpen && displayQuery && normalizedQuery && searchRouting && (
        <SearchResults results={results} resultsId={resultsId} activeIndex={activeIndex} onActivate={setActiveIndex} />
      )}
    </form>
  );
}
