"use client";

import Link from "next/link";
import { useState } from "react";
import MobileQuickNav from "@/app/components/MobileQuickNav";
import SiteFooter from "@/app/components/SiteFooter";
import SiteHeader from "@/app/components/SiteHeader";
import { guides } from "@/app/data/guides";
import SearchBar from "../components/SearchBar";

const featuredSlugs = [
  "why-we-dream",
  "spiritual-dreams-meaning",
  "how-to-remember-dreams",
  "lucid-dreaming",
];

export default function GuidesPage() {
  const [search, setSearch] = useState("");

  const query = search.trim().toLowerCase();

  const filteredGuides = guides.filter((guide) => {
    if (!query) return true;

    return (
      guide.title.toLowerCase().includes(query) ||
      guide.slug.toLowerCase().includes(query) ||
      (guide.description || "").toLowerCase().includes(query)
    );
  });

  const featuredGuides = featuredSlugs
    .map((slug) => filteredGuides.find((guide) => guide.slug === slug))
    .filter(Boolean);

  return (
    <main className="bg-[#F7F5F2] min-h-screen">
      <SiteHeader />

      <section className="max-w-3xl mx-auto px-6 py-2 md:py-32">
        <nav className="text-sm text-[#6B6B6B] mb-6">
  <Link href="/">Home</Link> / <span>Guides</span>
</nav>
        <h1 className="text-4xl md:text-5xl font-serif mb-6">Dream guides & meanings</h1>

        <p className="text-[#6B6B6B] text-base md:text-lg mb-8 leading-relaxed">
          A deeper look into how dreams work, why they happen, and how to
          understand them.
        </p>

        <section className="mb-12">
  <h2 className="font-serif text-2xl md:text-3xl mb-4">
    What do dream guides help you understand?
  </h2>

  <p className="text-[#6B6B6B] leading-relaxed mb-4">
    Dream guides help you understand why dreams happen, what they mean, and how
    to interpret the symbols and emotions you experience while dreaming.
  </p>

  <p className="text-[#6B6B6B] leading-relaxed">
    From recurring dreams and nightmares to spiritual dreams and emotional
    patterns, these guides explore how your subconscious mind communicates
    through dreams and how those experiences relate to your waking life.
  </p>
</section>

        <MobileQuickNav />

        <div className="mb-16">
          <div className="border border-[#EAE6E1] rounded-2xl px-5 py-4 bg-white/90 backdrop-blur-sm focus-within:border-[#C6A96B] transition shadow-[0_10px_30px_rgba(26,26,26,0.04)]">
            <input
              type="text"
              placeholder="Search dream guides..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              aria-label="Search dream guides"
              className="w-full bg-transparent outline-none text-base md:text-lg placeholder:text-[#A89F91] text-[#1A1A1A]"
            />
          </div>
        </div>

        <section className="mb-16">
          <div className="flex items-end justify-between gap-6 mb-6">
            <div>
              <p className="text-[11px] tracking-[0.25em] text-[#A89F91] uppercase mb-2">
                Featured Guides
              </p>
              <h2 className="font-serif text-2xl md:text-3xl text-[#1A1A1A]">
                Selected reads to start with
              </h2>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {featuredGuides.map((guide, index) => (
              <Link
                key={guide.slug}
                href={`/guides/${guide.slug}`}
                className="group relative overflow-hidden rounded-2xl border border-[#EAE6E1] bg-white p-6 md:p-7 transition duration-300 hover:-translate-y-0.5 hover:border-[#C6A96B] hover:shadow-[0_18px_50px_rgba(26,26,26,0.08)]"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#FBF8F2] via-white to-[#F3EEE6] opacity-90" />
                <div className="absolute right-0 top-0 h-24 w-24 rounded-full bg-[#C6A96B]/10 blur-2xl" />
                <div className="relative">
                  <p className="text-[11px] tracking-[0.25em] text-[#A89F91] uppercase mb-4">
                    Featured {index + 1}
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

        <div className="flex items-center gap-4 mb-8">
          <div className="h-px flex-1 bg-[#EAE6E1]" />
          <h2 className="font-serif text-2xl md:text-3xl text-[#1A1A1A]">
            All Guides
          </h2>
          <div className="h-px flex-1 bg-[#EAE6E1]" />
        </div>

        <div className="space-y-6">
          {filteredGuides.length > 0 ? (
            filteredGuides.map((guide) => (
              <Link
                key={guide.slug}
                href={`/guides/${guide.slug}`}
                className="block border border-[#EAE6E1] p-6 rounded-xl bg-white hover:border-[#C6A96B] transition"
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
      </section>

<p className="mb-4 text-sm text-[#6B6B6B] text-center">
  You can also explore meanings by{" "}
  <Link href="/categories" className="underline">
    dream categories
  </Link>.
</p>

<section className="mt-20 border-t border-[#EAE6E1] pt-10 text-center">
  <h2 className="font-serif text-2xl md:text-3xl mb-4">
    Explore your own dream
  </h2>

  <p className="text-[#6B6B6B] mb-6">
    Search a symbol, person, or dream theme.
  </p>

  <SearchBar />
</section>

      <SiteFooter />
    </main>
  );
}
