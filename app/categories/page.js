import Link from "next/link";
import SiteFooter from "@/app/components/SiteFooter";
import SiteHeader from "@/app/components/SiteHeader";
import { dreams } from "@/data/dreams";
import { normalizeSlug } from "@/lib/normalizeSlug";
import { getDreamHref } from "@/lib/routes";
import SearchBar from "@/app/components/SearchBar";
import CategorySearchList from "@/app/components/CategorySearchList";
import LazyMobileQuickNav from "@/app/components/LazyMobileQuickNav";
function normalizeCategory(cat = "") {
  const c = cat.toLowerCase().trim();

  if (c === "relationships") return "relationship";
  if (c === "emotions") return "emotion";

  return c;
}

function formatCategory(cat) {
  return cat.charAt(0).toUpperCase() + cat.slice(1);
}

const categoryDescriptions = {
  fear:
    "Dreams connected to uncertainty, emotional threat, vulnerability, survival instincts, and emotional tension.",
  anxiety:
    "Dreams reflecting stress, pressure, emotional overwhelm, insecurity, or unresolved emotional experiences.",
  transformation:
    "Dreams about change, identity shifts, emotional growth, endings, and new beginnings unfolding beneath the surface.",
  spiritual:
    "Dreams connected to intuition, inner awareness, emotional depth, symbolism, and personal reflection.",
  relationship:
    "Dreams reflecting emotional connection, attachment, conflict, vulnerability, intimacy, or emotional distance.",
  hidden:
    "Dreams involving suppressed emotions, subconscious tension, secrecy, or emotional experiences beneath awareness.",
};

export default function CategoriesPage() {
  const categories = [
    ...new Set(
      dreams.flatMap((d) => (d.categories || []).map(normalizeCategory))
    ),
  ];
  function getCategoryThemes() {
  return [
    "Fear",
    "Anxiety",
    "Transformation",
    "Relationships",
    "Hidden emotions",
    "Spirituality",
  ];
}

  return (
    <main className="bg-[#F7F5F2] min-h-screen">
      <SiteHeader />

      <section className="max-w-3xl mx-auto px-6 py-2 md:py-32">
<nav aria-label="Breadcrumb" className="text-sm text-[#6B6B6B] mb-6">
  <ol className="flex items-center gap-2">
    <li>
      <Link href="/" className="hover:underline">
        Home
      </Link>
    </li>

    <li>/</li>

    <li className="text-[#1A1A1A]">
      Categories
    </li>
  </ol>
</nav>


        {/* 🔥 Title */}
        <h1 className="text-4xl md:text-5xl font-serif mb-4">
          Dream categories: Explore Dream Meanings by Theme
        </h1>

        {/* 🔥 Intro */}
        <p className="text-[#6B6B6B] leading-relaxed mb-10">
  Explore dream categories to understand what your dreams may mean based on
  emotional patterns, symbols, and recurring themes.

  <br /><br />

  Each category reflects a different aspect of your inner world, from fear and
  anxiety to transformation and spiritual meaning.
</p>
<section className="mb-12">
  <h2 className="font-serif text-2xl mb-4">
    Explore dream categories and meanings
  </h2>

  <div className="flex flex-wrap gap-3">
    {categories.map((cat) => (
      <Link
        key={cat}
        href={`/categories/${normalizeSlug(cat)}`}
        className="text-sm px-4 py-2 border border-[#EAE6E1] rounded-full hover:border-[#C6A96B] transition"
      >
        {formatCategory(cat)}
      </Link>
    ))}
  </div>
</section>

<section className="mt-16 border-t pt-10">
  <h2 className="font-serif text-2xl mb-4">
    Explore dream meanings by category
  </h2>

  <div className="flex flex-wrap gap-3">
    {categories.slice(0, 6).map((cat) => (
      <Link
        key={cat}
        href={`/categories/${normalizeSlug(cat)}`}
        className="group block border border-[#EAE6E1] rounded-[28px] p-6 md:p-8 bg-[#FCFBF9] hover:border-[#C6A96B] transition-all duration-300"
      >
        <h2 className="font-serif text-2xl md:text-3xl mb-4 group-hover:text-[#8C6A3B] transition-colors">
          {formatCategory(cat)} dreams
        </h2>

        <p className="text-[#6B6B6B] leading-relaxed text-base md:text-lg max-w-2xl">
          {categoryDescriptions[cat] ||
            `Dreams connected to ${cat} experiences, emotional patterns, and symbolic meaning.`}
        </p>

        <div className="mt-6 text-xs tracking-wide uppercase text-[#8A8A8A]">
          Explore category
        </div>
      </Link>
    ))}
  </div>
</section> 
<p className="text-sm text-[#8A8177] mt-4">
  You can also explore deeper insights in guides like{" "}
  <Link href="/guides/what-are-dreams" className="underline">what dreams are</Link>{" "}
  or{" "}
  <Link href="/guides/recurring-dreams" className="underline">why dreams repeat</Link>.
</p>
<LazyMobileQuickNav />
<p className="text-sm text-[#8A8177] mt-4">
  Many dream categories include common experiences like{" "}
  <Link href="/dreams/falling" className="underline">falling</Link>,{" "}
  <Link href="/dreams/chased" className="underline">being chased</Link>, and{" "}
  <Link href="/dreams/losing-control" className="underline">losing control</Link>.
</p>

        {/* 🔥 Themes section (authority boost) */}
      <section className="mt-14">
  <h2 className="font-serif text-2xl md:text-3xl mb-6">
    How dream categories connect through emotional patterns
  </h2>

  <div className="flex flex-wrap gap-3 mb-8">
   {getCategoryThemes().map((theme) => (
      <span
        key={theme}
        className="px-4 py-2 rounded-full border border-[#EAE6E1] text-sm text-[#6B6B6B] bg-[#FCFBF9]"
      >
        {theme}
      </span>
    ))}
  </div>

  <p className="text-[#6B6B6B] leading-relaxed text-base md:text-lg mb-6">
    Dream categories are not completely separate emotional experiences.
    Many dreams overlap through shared emotional patterns like fear,
    vulnerability, pressure, uncertainty, transformation, emotional conflict,
    or periods of inner change.
  </p>

  <p className="text-[#6B6B6B] leading-relaxed text-base md:text-lg">
    Exploring dreams through emotional themes instead of isolated symbols can
    often reveal deeper patterns beneath the surface of recurring dreams,
    emotional stress, relationships, identity shifts, or experiences your mind
    is still trying to emotionally process.
  </p>
</section>


        {/* 🔥 Category grid */}
       <CategorySearchList categories={categories} />

      
<section className="mt-20 border-t border-[#EAE6E1] pt-10 text-center">
  <h2 className="font-serif text-2xl md:text-3xl mb-4">
    Explore your own dream
  </h2>

  <p className="text-[#6B6B6B] mb-6">
    Search a symbol, person, or dream theme.
  </p>

  <SearchBar />
</section>

      <section className="mt-20 md:mt-32 pt-10 border-t border-[#EAE6E1]">
  <h2 className="font-serif text-4xl md:text-5xl mb-6">
    Related reading
  </h2>

  <div className="flex flex-col gap-8 text-[#6B6B6B]">
    
    <Link
      href="/guides/why-we-dream"
      className="hover:text-[#C6A96B] transition underline underline-offset-4"
    >
      Why do we dream?
    </Link>

    <Link
      href="/guides/what-are-dreams"
      className="hover:text-[#C6A96B] transition underline underline-offset-4"
    >
      What are dreams?
    </Link>

    <Link
      href="/guides/spiritual-dreams-meaning"
      className="hover:text-[#C6A96B] transition underline underline-offset-4"
    >
      Spiritual dreams meaning
    </Link>

    <Link
      href="/guides/recurring-dreams"
      className="hover:text-[#C6A96B] transition underline underline-offset-4"
    >
      Why do dreams repeat?
    </Link>

    <Link
      href="/guides/lucid-dreaming"
      className="hover:text-[#C6A96B] transition underline underline-offset-4"
    >
      What is lucid dreaming?
    </Link>

  </div>
</section>
<section className="mt-16">
  <h2 className="font-serif text-2xl mb-4">
    Popular dream meanings
  </h2>

  <div className="flex flex-wrap gap-3">
    {dreams
  .filter(
    (dream) =>
      dream.microSummary &&
      dream.relatedDreams?.length > 0
  )
  .slice(0, 15)
  .map((dream) => (
    <Link
      key={dream.slug}
      href={getDreamHref(dream)}
   className="text-sm px-4 py-2 border border-[#EAE6E1] rounded-full bg-white hover:border-[#C6A96B] transition"
    >
        {dream.title}
      </Link>
    ))}
  </div>
</section>
      </section>

      <SiteFooter />
    </main>
  );
}
