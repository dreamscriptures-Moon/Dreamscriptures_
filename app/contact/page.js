"use client";

import Link from "next/link";
import { useState } from "react";
import { dreams } from "@/data/dream";

function normalizeCategory(cat = "") {
  const c = cat.toLowerCase().trim();

  if (c === "relationships") return "relationship";
  if (c === "emotions") return "emotion";

  return c;
}

function formatCategory(cat) {
  return cat.charAt(0).toUpperCase() + cat.slice(1);
}

export default function DreamDictionaryPage() {
  const [search, setSearch] = useState("");
  const [visibleCount, setVisibleCount] = useState(15);
  const [activeCategory, setActiveCategory] = useState(null);

  // get unique categories
  const categories = [
    ...new Set(
      dreams.flatMap((d) => (d.categories || []).map(normalizeCategory))
    ),
  ];

  // filter logic
  const filteredDreams = dreams.filter((dream) => {
    const matchesSearch = dream.title
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesCategory = activeCategory
      ? dream.categories?.some(
          (cat) => normalizeCategory(cat) === activeCategory
        )
      : true;

    return matchesSearch && matchesCategory;
  });

  return (
    <main className="bg-[#FAF8F5] min-h-screen px-6 py-20">

      <div className="max-w-4xl mx-auto">

        {/* TITLE */}
        <h1 className="text-4xl md:text-5xl font-serif mb-4">
          Dream dictionary
        </h1>

        <div className="w-12 h-[1px] bg-[#C6A96B] mb-6"></div>

        {/* INTRO */}
        <p className="text-[#6B6B6B] leading-relaxed mb-10 max-w-xl">
          Explore common dreams and what they might mean — through symbols,
          emotions, and patterns that often appear beneath the surface.
        </p>

        {/* SEARCH */}
        <div className="mb-10">
          <div className="border border-[#EAE6E1] rounded-xl px-5 py-4 bg-white focus-within:border-[#C6A96B] transition">
            <input
              type="text"
              placeholder="Search a dream..."
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
                setVisibleCount(15);
              }}
              className="w-full bg-transparent outline-none text-lg placeholder:text-[#A89F91]"
            />
          </div>
        </div>

        {/* CATEGORY SCROLL */}
        <div className="flex gap-3 overflow-x-auto pb-4 mb-12">

          <button
            onClick={() => setActiveCategory(null)}
            className={`px-4 py-2 rounded-full text-sm border ${
              !activeCategory
                ? "border-[#C6A96B] text-[#1A1A1A]"
                : "border-[#EAE6E1] text-[#6B6B6B]"
            }`}
          >
            All
          </button>

          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setActiveCategory(cat);
                setVisibleCount(15);
              }}
              className={`px-4 py-2 rounded-full text-sm border capitalize whitespace-nowrap ${
                activeCategory === cat
                  ? "border-[#C6A96B] text-[#1A1A1A]"
                  : "border-[#EAE6E1] text-[#6B6B6B]"
              }`}
            >
              {formatCategory(cat)}
            </button>
          ))}
        </div>

        {/* DREAM LIST */}
        <div className="space-y-4">

          {filteredDreams.slice(0, visibleCount).map((dream) => (
            <Link
              key={dream.slug}
              href={`/dreams/${dream.slug}`}
              className="block border border-[#EAE6E1] p-5 rounded-xl bg-white hover:border-[#C6A96B] hover:shadow-sm transition"
            >
              <p className="font-medium text-lg">
                {dream.title}
              </p>

              <p className="text-sm text-[#6B6B6B] mt-1">
                {dream.description.slice(0, 90)}...
              </p>
            </Link>
          ))}

        </div>

        {/* LOAD MORE */}
        {visibleCount < filteredDreams.length && (
          <div className="text-center mt-12">
            <button
              onClick={() => setVisibleCount((prev) => prev + 15)}
              className="px-6 py-3 border border-[#EAE6E1] rounded-xl hover:border-[#C6A96B] transition text-sm"
            >
              Load more
            </button>
          </div>
        )}

      </div>

    </main>
  );
}
