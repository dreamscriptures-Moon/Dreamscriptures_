"use client";

import { useState } from "react";
import { dreams } from "@/data/dream";
import Link from "next/link";

export default function SearchBar() {
  const [query, setQuery] = useState("");

  const results = dreams.filter((item) =>
    item.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <form className="max-w-3xl mx-auto px-6 relative" role="search">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search another dream..."
        className="w-full mt-10 border border-[#EAE6E1] rounded-xl px-6 py-5 bg-white shadow-sm outline-none text-base md:text-lg placeholder:text-[#A89F91] focus:border-[#C6A96B] transition"
      />

      {query && (
        <div className="absolute left-6 right-6 mt-2 bg-white border border-[#EAE6E1] rounded-xl shadow-md overflow-hidden z-50">

          {results.length > 0 ? (
            results.slice(0, 5).map((item) => (
              <Link
                key={item.slug}
                href={`/dreams/${item.slug}`}
                className="block px-6 py-4 hover:bg-[#FAF7F2] transition"
              >
                <p className="font-medium">{item.title}</p>
                <p className="text-sm text-[#6B6B6B]">
                  {item.description.slice(0, 60)}...
                </p>
              </Link>
            ))
          ) : (
            <p className="px-6 py-4 text-sm text-[#8A8A8A]">
              No dreams found
            </p>
          )}
        </div>
      )}
    </form>
  );
}
