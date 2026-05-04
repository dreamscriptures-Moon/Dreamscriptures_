import Link from "next/link";
import GuidesSearchList from "@/app/components/GuidesSearchList";
import LazyMobileQuickNav from "@/app/components/LazyMobileQuickNav";
import SearchBar from "@/app/components/SearchBar";
import SiteFooter from "@/app/components/SiteFooter";
import SiteHeader from "@/app/components/SiteHeader";
import { guides } from "@/app/data/guides";

const guideSearchItems = guides.map((guide) => ({
  slug: guide.slug,
  title: guide.title,
  description: guide.description || "",
}));

export default function GuidesPage() {
  return (
    <main className="bg-[#F7F5F2] min-h-screen">
      <SiteHeader sticky />

      <section className="max-w-3xl mx-auto px-6 py-2 md:py-32">
        
        <nav className="text-sm text-[#6B6B6B] mb-6">
          <Link href="/">Home</Link> / <span>Guides</span>
        </nav>
        
        <h1 className="text-4xl md:text-5xl font-serif mb-6">
          Dream guides & meanings
        </h1>

        <p className="text-[#6B6B6B] text-base md:text-lg mb-8 leading-relaxed">
          A deeper look into how dreams work, why they happen, and how to
          understand them.
        </p>

        <section className="mb-12">
          <h2 className="font-serif text-2xl md:text-3xl mb-4">
            What do dream guides help you understand?
          </h2>

          <p className="text-[#6B6B6B] leading-relaxed mb-4">
            Dream guides help you understand why dreams happen, what they mean,
            and how to interpret the symbols and emotions you experience while
            dreaming.
          </p>

          <p className="text-[#6B6B6B] leading-relaxed">
            From recurring dreams and nightmares to spiritual dreams and
            emotional patterns, these guides explore how your subconscious mind
            communicates through dreams and how those experiences relate to your
            waking life.
          </p>
        </section>
<LazyMobileQuickNav />
        

        <GuidesSearchList guides={guideSearchItems} />
      </section>

      <p className="mb-4 text-sm text-[#6B6B6B] text-center">
        You can also explore meanings by{" "}
        <Link href="/categories" className="underline">
          dream categories
        </Link>
        .
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
