import Link from "next/link";
import SiteFooter from "@/app/components/SiteFooter";
import SiteHeader from "@/app/components/SiteHeader";
import { dreams } from "@/data/dream";
import { normalizeSlug } from "@/lib/normalizeSlug";
import SearchBar from "@/app/components/SearchBar";
import CategorySearchList from "@/app/components/CategorySearchList";

function normalizeCategory(cat = "") {
  const c = cat.toLowerCase().trim();

  if (c === "relationships") return "relationship";
  if (c === "emotions") return "emotion";

  return c;
}

function formatCategory(cat) {
  return cat.charAt(0).toUpperCase() + cat.slice(1);
}

export default function CategoriesPage() {
  const categories = [
    ...new Set(
      dreams.flatMap((d) => (d.categories || []).map(normalizeCategory))
    ),
  ];

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
          Dream categories
        </h1>

        {/* 🔥 Intro (VERY IMPORTANT) */}
        <p className="text-[#6B6B6B] leading-relaxed mb-10">
          Explore dreams by category to better understand the emotions, symbols,
          and patterns behind your experiences. Each category reflects a different
          aspect of your inner world, from fear and anxiety to transformation and
          spiritual meaning.
        </p>

        {/* 🔥 Themes section (authority boost) */}
        <section className="mb-12">
          <h2 className="font-serif text-2xl mb-4">
            What dream categories reveal
          </h2>

          <ul className="list-disc pl-5 text-[#6B6B6B] space-y-2">
            <li>Common emotional patterns behind your dreams</li>
            <li>Recurring symbols and situations</li>
            <li>Connections to real-life experiences</li>
          </ul>
        </section>

        {/* 🔥 Category grid */}
       <CategorySearchList categories={categories} />

        {/* 🔥 Internal linking */}
        <section className="mt-16 border-t pt-10">
          <h2 className="font-serif text-2xl mb-4">
            Explore dream meanings
          </h2>

          <div className="flex flex-wrap gap-3">
            {categories.slice(0, 6).map((cat) => (
              <Link
                key={cat}
                href={`/categories/${normalizeSlug(cat)}`}
                className="text-sm px-4 py-2 border rounded-full hover:border-[#C6A96B]"
              >
                {formatCategory(cat)}
              </Link>
            ))}
          </div>
        </section>

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

  <div className="flex flex-col gap-3 text-[#6B6B6B]">
    
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

      </section>

      <SiteFooter />
    </main>
  );
}