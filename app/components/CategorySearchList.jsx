"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { normalizeSlug } from "@/lib/normalizeSlug";

const MAX_RESULTS = 24;

function formatCategory(cat) {
  return cat.charAt(0).toUpperCase() + cat.slice(1);
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

export default function CategorySearchList({ categories = [] }) {
  const [query, setQuery] = useState("");
  const debouncedQuery = useDebouncedValue(query, 300);
  const normalizedQuery = debouncedQuery.trim().toLowerCase();

  const filtered = useMemo(() => {
    return categories
      .filter((cat) =>
        normalizedQuery ? cat.toLowerCase().includes(normalizedQuery) : true
      )
      .slice(0, MAX_RESULTS)
      .map((cat) => ({
        slug: normalizeSlug(cat),
        label: formatCategory(cat),
        title: cat,
      }));
  }, [categories, normalizedQuery]);

  return (
    <>
      <div className="mb-8">
        <input
          type="text"
          placeholder="Search category (e.g. fear, love, spiritual...)"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full border border-[#EAE6E1] rounded-lg px-4 py-3 outline-none focus:border-[#C6A96B] active:border-[#C6A96B]"
        />
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {filtered.map((cat) => (
          <Link
            key={cat.slug}
            href={`/categories/${cat.slug}`}
            className="border border-[#EAE6E1] p-6 rounded-xl bg-white block hover:border-[#C6A96B] focus:border-[#C6A96B] active:bg-[#F7F5F2] transition"
          >
            <span className="font-medium capitalize text-base md:text-lg">
              {cat.label}
            </span>

            <span className="block text-sm text-[#8A8A8A] mt-2">
              Explore {cat.title} dream meanings and interpretations
            </span>
          </Link>
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="text-[#8A8A8A] mt-6 text-center">
          No categories found.
        </p>
      )}
    </>
  );
}
