"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";

const featuredSlugs = [
  "what-are-dreams",          
  "why-we-dream",            
  "dreams-and-emotions",  
  "spiritual-dreams-meaning", 
  "how-to-interpret-dream-symbols", 
  "how-to-remember-dreams",   
  "lucid-dreaming",           
  "recurring-dreams", 
  "prophetic-dreams-meaning",
  ];    

const INITIAL_COUNT = 12;
const LOAD_MORE_COUNT = 8;

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

export default function GuidesSearchList({ guides = [] }) {
  const [search, setSearch] = useState("");
  const [visibleCount, setVisibleCount] = useState(INITIAL_COUNT);
  const debouncedSearch = useDebouncedValue(search, 300);
  const query = debouncedSearch.trim().toLowerCase();

  const filteredGuides = useMemo(() => {
    if (!query) {
      return guides;
    }

    return guides.filter((guide) => {
      return (
        guide.title.toLowerCase().includes(query) ||
        guide.slug.toLowerCase().includes(query) ||
        guide.description.toLowerCase().includes(query)
      );
    });
  }, [guides, query]);

  const featuredGuides = useMemo(() => {
    return featuredSlugs
      .map((slug) => filteredGuides.find((guide) => guide.slug === slug))
      .filter(Boolean);
  }, [filteredGuides]);

  const visibleGuides = useMemo(
    () => filteredGuides.slice(0, visibleCount),
    [filteredGuides, visibleCount]
  );

  return (
    <>
      <div className="mb-16">
        <div className="border border-[#EAE6E1] rounded-2xl px-5 py-4 bg-white/90 backdrop-blur-sm focus-within:border-[#C6A96B] transition shadow-[0_10px_30px_rgba(26,26,26,0.04)]">
          <input
            type="text"
            placeholder="Search dream guides..."
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              window.setTimeout(() => {
                setVisibleCount(INITIAL_COUNT);
              }, 0);
            }}
            aria-label="Search dream guides"
            className="w-full bg-transparent outline-none text-base md:text-lg placeholder:text-[#A89F91] text-[#1A1A1A]"
          />
        </div>
      </div>

      <section className="mb-16">
        <div className="flex items-end justify-between gap-6 mb-6">
          <div>
          <p className="text-[11px] tracking-[0.25em] text-[#A89F91] uppercase mb-2">
  Editor&apos;s Picks
</p>

<h2 className="font-serif text-2xl md:text-3xl text-[#1A1A1A]">
  Featured Learning
</h2>

<p className="text-[#6B6B6B] mt-3 max-w-2xl leading-relaxed">
  Explore some of the most popular and foundational guides in the
  DreamScriptures Knowledge Hub.
</p>
          </div>
        </div>

       <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {featuredGuides.map((guide, index) => (
            <Link
              key={guide.slug}
              href={`/guides/${guide.slug}`}
              className="group relative overflow-hidden rounded-2xl border border-[#EAE6E1] bg-white p-6 md:p-7 transition duration-300 hover:-translate-y-0.5 hover:border-[#C6A96B] focus:border-[#C6A96B] active:bg-[#F7F5F2] hover:shadow-[0_18px_50px_rgba(26,26,26,0.08)]"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#FBF8F2] via-white to-[#F3EEE6] opacity-90" />
              <div className="absolute right-0 top-0 h-24 w-24 rounded-full bg-[#C6A96B]/10 blur-2xl" />
              <div className="relative">
               <p className="text-[11px] tracking-[0.25em] text-[#A89F91] uppercase mb-4">
  Recommended Guide
</p>
                <h3 className="font-serif text-xl md:text-2xl text-[#1A1A1A] leading-tight mb-3 group-hover:text-[#C6A96B] transition-colors">
                  {guide.title}
                </h3>
                <p className="text-sm md:text-base text-[#6B6B6B] leading-relaxed">
                  {guide.description}
                </p>
                <span className="inline-flex items-center mt-6 text-sm text-[#1A1A1A]">
                  Read guide
                  <span className="ml-2 text-[#C6A96B] transition-transform group-hover:translate-x-1">
                    -&gt;
                  </span>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

    <div className="mb-8">

  <h2 className="font-serif text-3xl md:text-4xl text-[#1A1A1A]">
    Browse All Dream Guides
  </h2>

  <p className="text-[#6B6B6B] mt-3 max-w-2xl leading-relaxed">
    Search or browse every guide in the DreamScriptures Knowledge Hub,
    covering dream psychology, sleep science, spirituality,
    symbolism, wellness and modern dream research.
  </p>

</div> 

      <div className="space-y-6">
        {filteredGuides.length > 0 ? (
          visibleGuides.map((guide) => (
            <Link
              key={guide.slug}
              href={`/guides/${guide.slug}`}
              className="block border border-[#EAE6E1] p-6 rounded-xl bg-white hover:border-[#C6A96B] focus:border-[#C6A96B] active:bg-[#F7F5F2] transition"
            >
              <span className="block text-[11px] tracking-wide text-[#A89F91] mb-1">
                GUIDE
              </span>
              <span className="block font-medium text-base md:text-lg">
                {guide.title}
              </span>
              <span className="block text-sm text-[#6B6B6B] mt-2">
                {guide.description}
              </span>
            </Link>
          ))
        ) : (
          <div className="rounded-xl border border-[#EAE6E1] bg-white px-6 py-8 text-[#6B6B6B]">
            No guides match your search.
          </div>
        )}
      </div>

      {visibleCount < filteredGuides.length && (
        <div className="text-center mt-10">
          <button
            type="button"
            onClick={() => setVisibleCount((prev) => prev + LOAD_MORE_COUNT)}
            className="px-6 py-3 border border-[#EAE6E1] rounded-xl hover:border-[#C6A96B] focus:border-[#C6A96B] active:bg-white transition text-sm"
          >
            Load more
          </button>
        </div>
      )}
    </>
  );
}
