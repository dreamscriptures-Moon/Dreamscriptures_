"use client";

import { memo, useCallback, useEffect, useMemo, useState } from "react";
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

const SearchResults = memo(function SearchResults({ results }) {
  return (
    <div className="absolute left-6 right-6 mt-2 bg-white border border-[#EAE6E1] rounded-xl shadow-md overflow-hidden z-50">
      {results.length > 0 ? (
        results.map((item) => (
          <Link
            key={item.href}
            href={item.href}
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
  const router = useRouter();
  const [query, setQuery] = useState("");
  const [searchRouting, setSearchRouting] = useState(null);
  const debouncedQuery = useDebouncedValue(query, 300);
  const displayQuery = query.trim();
  const normalizedQuery = debouncedQuery.trim().toLowerCase();
  const ensureSearchRouting = useCallback(async () => {
    if (searchRouting) {
      return searchRouting;
    }

    const module = await loadSearchRouting();
    setSearchRouting(module);
    return module;
  }, [searchRouting]);
  const handleQueryChange = useCallback(
    (event) => {
      setQuery(event.target.value);
      ensureSearchRouting();
    },
    [ensureSearchRouting]
  );
  const handleSubmit = useCallback(
    async (event) => {
      event.preventDefault();

      const search = await ensureSearchRouting();
      const href = search.getBestSearchRoute(query);

      if (href) {
        setQuery("");
        router.push(href);
      }
    },
    [ensureSearchRouting, query, router]
  );

  const handleSearchFocus = useCallback(() => {
    ensureSearchRouting();
  }, [ensureSearchRouting]);

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
    if (!normalizedQuery || !searchRouting) {
      return [];
    }

    return searchRouting.getSearchResults(normalizedQuery);
  }, [normalizedQuery, searchRouting]);

  return (
    <form
      className="max-w-3xl mx-auto px-6 relative"
      role="search"
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        value={query}
        onFocus={handleSearchFocus}
        onChange={handleQueryChange}
        placeholder="Search another dream..."
        className="w-full mt-10 border border-[#EAE6E1] rounded-xl px-6 py-5 bg-white shadow-sm outline-none text-base md:text-lg placeholder:text-[#A89F91] focus:border-[#C6A96B] active:border-[#C6A96B] transition"
      />

      {displayQuery && normalizedQuery && searchRouting && (
        <SearchResults results={results} />
      )}
    </form>
  );
}
