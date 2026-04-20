"use client";

import Link from "next/link";
import { useState } from "react";
import { dreams } from "@/data/dream";

function truncate(text = "", words = 14) {
  return text.split(" ").slice(0, words).join(" ") + "...";
}

export default function HomeSearch() {
  const [search, setSearch] = useState("");

  const handleSearch = (value) => {
    setSearch(value);

    if (value.length > 2 && typeof window !== "undefined" && window.gtag) {
      window.gtag("event", "search", {
        search_term: value,
      });
    }
  };

  const filteredDreams = dreams.filter((dream) =>
    dream.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <form className="relative mx-auto max-w-3xl" role="search">
        <input
          type="text"
          value={search}
          onChange={(e) => handleSearch(e.target.value)}
          placeholder="Search a dream..."
          className="w-full bg-white/90 backdrop-blur border border-[#EAE6E1] rounded-xl px-6 py-5 outline-none text-base md:text-lg placeholder:text-[#A89F91] focus:border-[#C6A96B] transition"
        />

        {search && (
          <div className="absolute top-full left-0 w-full mt-2 bg-white border border-[#EAE6E1] rounded-xl shadow-md overflow-hidden z-50 text-left">
            {filteredDreams.length > 0 ? (
              filteredDreams.map((dream) => (
                <Link
                  key={dream.slug}
                  href={`/dreams/${dream.slug}`}
                  onClick={() => {
                    setSearch("");

                    if (typeof window !== "undefined" && window.gtag) {
                      window.gtag("event", "search_result_click", {
                        dream_title: dream.title,
                      });
                    }
                  }}
                  className="block px-4 py-3 border-b border-[#EAE6E1] hover:bg-[#FAF9F7] transition"
                >
                  <span className="block font-medium text-[#1A1A1A]">
                    {dream.title}
                  </span>
                  <span className="block text-sm text-[#6B6B6B] mt-1 leading-relaxed">
                    {truncate(dream.description, 14)}
                  </span>
                </Link>
              ))
            ) : (
              <p className="px-4 py-3 text-sm text-[#A89F91]">
                No dreams found for &quot;{search}&quot;
              </p>
            )}
          </div>
        )}
      </form>

      <div className="mt-6 flex flex-wrap justify-center gap-3">
        {["falling", "snake", "being-chased", "flying"].map((dream) => (
          <button
            key={dream}
            type="button"
            onClick={() => handleSearch(dream)}
            className="text-sm text-[#6B6B6B] border border-[#EAE6E1] px-3 py-1.5 rounded-full hover:border-[#C6A96B] hover:text-[#1A1A1A] transition"
          >
            {dream.replace("-", " ")}
          </button>
        ))}
      </div>
    </>
  );
}
