import { dreams } from "@/data/dream";
import DreamDictionaryControls from "@/app/components/DreamDictionaryControls";
import SiteFooter from "@/app/components/SiteFooter";
import SiteHeader from "@/app/components/SiteHeader";
import Link from "next/link";
import LazyMobileQuickNav from "../components/LazyMobileQuickNav";
function normalizeCategory(cat = "") {
  const c = cat.toLowerCase().trim();

  if (c === "relationships") return "relationship";
  if (c === "emotions") return "emotion";

  return c;
}

function formatCategory(cat) {
  return cat.charAt(0).toUpperCase() + cat.slice(1);
}

const categories = [
  ...new Set(dreams.flatMap((d) => (d.categories || []).map(normalizeCategory))),
].map((cat) => ({
  slug: cat,
  label: formatCategory(cat),
}));

const searchableDreams = dreams.map((dream) => ({
  slug: dream.slug,
  title: dream.title,
  normalizedTitle: dream.title.toLowerCase(),
  description: `${(dream.description || "").slice(0, 90)}...`,
  categoryKeys: (dream.categories || []).map(normalizeCategory),
}));

export default function DreamDictionaryPage() {
  return (
    <main className="bg-[#FAF8F5] min-h-screen">
      <SiteHeader />
      <div className="max-w-6xl mx-auto center px-6 py-12">
       
       <nav className="text-sm text-[#8A8175] mb-8">

  <Link href="/">Home</Link>

  <span> › </span>

  <span>Dream Dictionary</span>

</nav>
       
       <h1 className="text-4xl md:text-5xl font-serif mb-5">
  Dream Dictionary: Explore Common Dreams and Their Meanings
</h1>

        <div className="w-12 h-[1px] bg-[#C6A96B] mb-6" />

     <p className="text-[#6B6B6B] leading-relaxed text-base md:text-lg mb-10 max-w-2xl">

  A dream dictionary helps you understand what your dreams may mean,
  from common symbols to emotional and psychological patterns.

  <br /><br />

  Dreams rarely appear randomly. Many reflect emotional patterns,
  fears, unresolved tension, inner change, emotional pressure, or
  experiences unfolding beneath the surface of waking life.

  <br /><br />

  Explore dream meanings through emotional themes, symbolic patterns,
  psychological experiences, and recurring situations that connect
  dreams together in deeper ways than the symbols alone.

</p>


<section className="grid md:grid-cols-3 gap-4 mb-12">

  <div className="bg-white border border-[#EAE6E1] rounded-2xl p-5">

    <div className="text-2xl mb-3">📖</div>

    <h2 className="font-serif text-xl mb-2">

      Dream Symbols

    </h2>

    <p className="text-[#6B6B6B] text-sm leading-relaxed">

      Browse hundreds of dream meanings organized by symbol and theme.

    </p>

  </div>

  <div className="bg-white border border-[#EAE6E1] rounded-2xl p-5">

    <div className="text-2xl mb-3">❤️</div>

    <h2 className="font-serif text-xl mb-2">

      Emotional Themes

    </h2>

    <p className="text-[#6B6B6B] text-sm leading-relaxed">

      Explore dreams through feelings, emotions and recurring life experiences.

    </p>

  </div>

  <div className="bg-white border border-[#EAE6E1] rounded-2xl p-5">

    <div className="text-2xl mb-3">🗂</div>

    <h2 className="font-serif text-xl mb-2">

      Categories

    </h2>

    <p className="text-[#6B6B6B] text-sm leading-relaxed">

      Discover dreams grouped by people, places, emotions, animals and more.

    </p>

  </div>

</section>

<LazyMobileQuickNav />

<section className="mb-10">

<div className="bg-white border border-[#EAE6E1] rounded-2xl p-6">

<p className="text-[#6B6B6B] leading-relaxed">

<strong className="text-[#1A1A1A]">

How to use the Dream Dictionary:

</strong>

Search for a dream symbol, browse by category, or explore related themes to discover possible emotional, psychological, symbolic and spiritual meanings.

</p>

</div>

</section>

<section className="mb-12">

  <div className="flex items-center justify-between mb-4">

    <h2 className="text-2xl font-serif">
      Popular Dream Symbols
    </h2>

    <Link
      href="/popular-dreams"
      className="text-sm text-[#8F743C] hover:underline"
    >
      View All →
    </Link>

  </div>

  <div className="flex flex-wrap gap-3">

    {searchableDreams.slice(0, 10).map((dream) => (
      <Link
        key={dream.slug}
        href={`/dreams/${dream.slug}`}
        className="text-sm px-4 py-2 border border-[#EAE6E1] rounded-full text-[#6B6B6B] hover:border-[#C6A96B] hover:text-[#8F743C] transition"
      >
        {dream.title}
      </Link>
    ))}

  </div>

</section>

<p className="text-sm text-[#8A8177] mb-6">
 Search for a dream symbol or browse by category to explore possible emotional, psychological, symbolic and spiritual meanings.
</p>
        <DreamDictionaryControls
          dreams={searchableDreams}
          categories={categories}
        />
        
<section className="mt-20 text-center">

  <p className="uppercase tracking-[0.2em] text-[#B79B5E] text-xs mb-3">

    KEEP LEARNING

  </p>

  <h2 className="font-serif text-4xl mb-5">

    Still Learning About Dreams?

  </h2>

  <p className="text-[#6B6B6B] max-w-2xl mx-auto mb-8">

    Explore our Dream Library to learn about dream psychology,
    symbolism, spirituality, sleep science and practical dream interpretation.

  </p>

  <Link
    href="/guides"
    className="inline-flex items-center gap-2 bg-[#1A1A1A] text-white rounded-full px-6 py-3 hover:bg-[#333] transition"
  >
    Explore the Dream Library →
  </Link>

</section>

      </div>
      <SiteFooter />
    </main>
  );
}
