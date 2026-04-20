"use client";

import Link from "next/link";
import { useState } from "react";
import SiteFooter from "@/app/components/SiteFooter";
import SiteHeader from "@/app/components/SiteHeader";
import { dreams } from "@/data/dream";

const popularDreams = [
  "Falling",
  "Snakes",
  "Being Chased",
  "Teeth Falling Out",
  "Flying",
  "Water",
];

const featuredGuides = [
  {
    slug: "why-we-dream",
    title: "Why do we dream?",
    desc: "Understanding what dreams are and why they happen.",
  },
  {
    slug: "recurring-dreams",
    title: "Recurring dreams",
    desc: "Why some dreams repeat and what they might mean.",
  },
  {
    slug: "nightmares",
    title: "Nightmares",
    desc: "What causes intense or disturbing dreams.",
  },
  {
    slug: "dreams-and-emotions",
    title: "Dreams and emotions",
    desc: "How your emotional state shapes your dreams.",
  },
];

function truncate(text = "", words = 14) {
  return text.split(" ").slice(0, words).join(" ") + "...";
}

export default function Home() {
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
    <main className="bg-[#F7F5F2] text-[#1A1A1A] min-h-screen">
      <SiteHeader />

      <section className="max-w-3xl mx-auto px-6 py-20 md:py-32 text-center">
        <h1 className="text-4xl md:text-5xl leading-tight mb-8 font-serif tracking-tight">
          Dream meanings, symbols & interpretation
        </h1>

        <p className="text-[#6B6B6B] text-base md:text-lg mb-8 leading-relaxed">
          Search for your dream and explore what it might mean; from emotional
          signals to deeper symbolic patterns that shape your experience.
        </p>

        <p className="text-[#BFA06A] text-sm tracking-wide uppercase mb-10">
          Dreams do not follow one fixed meaning. What matters is what yours is
          reflecting.
        </p>

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
      </section>

      <section className="max-w-3xl mx-auto px-6 py-20 md:py-32">
        <h2 className="text-4xl md:text-5xl mb-4 text-center font-serif">
          Popular dreams
        </h2>
        <div className="w-24 h-[1px] bg-[#C6A96B] mx-auto mb-8 opacity-60" />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {popularDreams.map((dream) => (
            <Link
              key={dream}
              href={`/dreams/${dream.toLowerCase().replace(/\s+/g, "-")}`}
              onClick={() => {
                if (typeof window !== "undefined" && window.gtag) {
                  window.gtag("event", "popular_dream_click", {
                    dream_name: dream,
                  });
                }
              }}
              className="block border border-[#EAE6E1] p-6 rounded-xl hover:border-[#C6A96B] hover:bg-white/40 transition"
            >
              <p className="text-base md:text-lg font-medium">{dream}</p>
              <p className="text-sm text-[#6B6B6B] mt-2">
                Explore what this dream might mean
              </p>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-[#FAF9F7] px-6 py-20 md:py-32 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl mb-6 font-serif">
            How interpretation works
          </h2>
          <p className="text-[#6B6B6B] text-base md:text-lg leading-relaxed">
            Dreams are not one-size-fits-all. The same dream can mean different
            things depending on your emotions, your experiences, and what is
            happening in your life.
          </p>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-6 py-20 md:py-32">
        <h2 className="text-4xl md:text-5xl font-serif mb-10 text-center">
          Guides
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {featuredGuides.map((guide) => (
            <Link
              key={guide.slug}
              href={`/guides/${guide.slug}`}
              onClick={() => {
                if (typeof window !== "undefined" && window.gtag) {
                  window.gtag("event", "guide_click", {
                    guide_title: guide.title,
                  });
                }
              }}
              className="block border border-[#EAE6E1] p-6 rounded-xl bg-white hover:border-[#C6A96B] transition"
            >
              <span className="block font-medium text-base md:text-lg">
                {guide.title}
              </span>
              <span className="block text-sm text-[#6B6B6B] mt-2">
                {guide.desc}
              </span>
            </Link>
          ))}
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
