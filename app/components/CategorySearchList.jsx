"use client";

import { useState } from "react";
import Link from "next/link";
import { normalizeSlug } from "@/lib/normalizeSlug";

function formatCategory(cat) {
  return cat.charAt(0).toUpperCase() + cat.slice(1);
}

export default function CategorySearchList({ categories = [] }) {
  const [query, setQuery] = useState("");

  const filtered = categories.filter((cat) =>
    cat.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <>
      {/* 🔍 Search */}
      <div className="mb-8">
        <input
          type="text"
          placeholder="Search category (e.g. fear, love, spiritual...)"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full border border-[#EAE6E1] rounded-lg px-4 py-3 outline-none focus:border-[#C6A96B]"
        />
      </div>

      {/* 📦 Results */}
      <div className="grid md:grid-cols-2 gap-6">
        {filtered.map((cat) => (
          <Link
            key={cat}
            href={`/categories/${normalizeSlug(cat)}`}
            className="border border-[#EAE6E1] p-6 rounded-xl bg-white block hover:border-[#C6A96B] transition"
          >
            <span className="font-medium capitalize text-base md:text-lg">
              {formatCategory(cat)}
            </span>

            <span className="block text-sm text-[#8A8A8A] mt-2">
              Explore {cat} dream meanings and interpretations
            </span>
          </Link>
        ))}
      </div>

      {/* 😭 empty state */}
      {filtered.length === 0 && (
        <p className="text-[#8A8A8A] mt-6 text-center">
          No categories found.
        </p>
      )}
    </>
  );
}