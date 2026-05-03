import Link from "next/link";
import CategoryDreamList from "@/app/components/CategoryDreamList";
import MobileQuickNav from "@/app/components/MobileQuickNav";
import SiteFooter from "@/app/components/SiteFooter";
import SiteHeader from "@/app/components/SiteHeader";
import { dreams } from "@/data/dream";
import { normalizeSlug } from "@/lib/normalizeSlug";

function normalizeCategory(cat = "") {
  const c = cat.toLowerCase().trim();

  if (c === "relationships") return "relationship";
  if (c === "emotions") return "emotion";

  return c;
}

function formatCategory(cat) {
  return cat.charAt(0).toUpperCase() + cat.slice(1);
}

export default async function CategoryPage({ params }) {
  const { category } = await params;

  const normalizedCategory = normalizeCategory(
    String(category).replace(/-/g, " ")
  );

  const filteredDreams = dreams.filter((dream) =>
    dream.categories?.some(
      (cat) => normalizeCategory(cat) === normalizedCategory
    )
  );

  // 🔥 Category descriptions
  const categoryDescriptions = {
    transformation:
      "Transformation dreams often reflect change, growth, and inner shifts. They appear when something in your life is evolving, ending, or becoming something new.",
    anxiety:
      "Anxiety dreams often reflect stress, pressure, or unresolved emotions. These dreams can highlight what is worrying you beneath the surface.",
    fear:
      "Fear-based dreams often reflect uncertainty, vulnerability, or situations where you feel out of control or threatened emotionally.",
    spiritual:
      "Spiritual dreams often connect to deeper awareness, intuition, and inner guidance. They may reflect growth beyond the physical or emotional level.",
  };

  const description =
    categoryDescriptions[normalizedCategory] ||
    `Dreams about ${normalizedCategory} often reflect emotions, patterns, and experiences connected to your waking life.`;

  // 🔥 FAQs
  const categoryFAQs = {
    transformation: [
      {
        q: "What do transformation dreams mean?",
        a: "Transformation dreams often reflect personal change, growth, or endings that lead to new beginnings. They usually appear during important life transitions.",
      },
      {
        q: "Why do I keep dreaming about transformation?",
        a: "Repeated transformation dreams often suggest you are going through ongoing emotional or personal change that has not fully settled yet.",
      },
    ],
    anxiety: [
      {
        q: "What do anxiety dreams mean?",
        a: "Anxiety dreams often reflect stress, pressure, or unresolved emotions. They can highlight what is worrying you beneath the surface.",
      },
    ],
  };

  const faqs =
    categoryFAQs[normalizedCategory] || [
      {
        q: `What do ${normalizedCategory} dreams mean?`,
        a: `${formatCategory(normalizedCategory)} dreams often reflect emotional patterns, life experiences, or internal changes connected to your waking life.`,
      },
    ];
  return (
    <main className="bg-[#F7F5F2] min-h-screen">
      {/* 🔥 Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((item) => ({
              "@type": "Question",
              name: item.q,
              acceptedAnswer: {
                "@type": "Answer",
                text: item.a,
              },
            })),
          }),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item: "https://www.dreamscriptures.com/",
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "Categories",
                item: "https://www.dreamscriptures.com/categories",
              },
              {
                "@type": "ListItem",
                position: 3,
                name: formatCategory(normalizedCategory),
                item: `https://www.dreamscriptures.com/categories/${normalizeSlug(normalizedCategory)}`,
              },
            ],
          }),
        }}
      />

      <SiteHeader />

      <section className="max-w-3xl mx-auto px-6 py-2 md:py-32">
        {/* 🔥 Breadcrumb */}
        <nav
          aria-label="Breadcrumb"
          className="text-sm text-[#6B6B6B] mb-6"
        >
          <ol className="flex items-center gap-2">
            <li>
              <Link href="/" className="hover:underline">
                Home
              </Link>
            </li>
            <li>/</li>
            <li>
              <Link href="/categories" className="hover:underline">
                Categories
              </Link>
            </li>
            <li>/</li>
            <li className="text-[#1A1A1A] capitalize">
              {formatCategory(normalizedCategory)}
            </li>
          </ol>
        </nav>

        {/* 🔥 Title */}
        <h1 className="text-4xl md:text-5xl font-serif mb-4 capitalize">
          {formatCategory(normalizedCategory)} dreams
        </h1>

        {/* 🔥 Description */}
        <p className="text-[#6B6B6B] leading-relaxed mb-10">
          {description}
        </p>

        <MobileQuickNav />

        {/* 🔥 Themes */}
        <section className="mt-10">
          <h2 className="font-serif text-2xl mb-4">
            Common themes in {normalizedCategory} dreams
          </h2>

          <ul className="list-disc pl-5 text-[#6B6B6B] space-y-2">
            <li>Emotional patterns connected to {normalizedCategory}</li>
            <li>Recurring symbols and situations</li>
            <li>Connections to real-life experiences</li>
          </ul>

          {/* 🔥 Authority paragraph */}
          <p className="mt-6 text-[#6B6B6B] leading-relaxed">
            {formatCategory(normalizedCategory)} dreams often appear during
            moments of emotional change, personal reflection, or internal
            conflict. These dreams can highlight patterns, fears, or
            transitions that are unfolding beneath the surface.
          </p>
        </section>


        {/* 🔥 Dream list */}
        <CategoryDreamList
          dreams={filteredDreams}
          category={normalizedCategory}
        />
        {/* 🔥 FAQ */}
        <section className="mt-16 border-t pt-10">
          <h2 className="font-serif text-2xl mb-6">
            Common questions about {normalizedCategory} dreams
          </h2>

          <div className="space-y-6">
            {faqs.map((item, i) => (
              <div key={i}>
                <h3 className="font-medium text-lg">{item.q}</h3>
                <p className="text-[#6B6B6B] mt-2">{item.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 🔥 Explore more */}
        <section className="mt-16 border-t pt-10">
          <h2 className="font-serif text-2xl mb-4">
            Explore more dream meanings
          </h2>

          <div className="flex flex-wrap gap-3">
            {["fear", "anxiety", "transformation", "spiritual"].map((cat) => (
              <Link
                key={cat}
                href={`/categories/${cat}`}
                className="text-sm px-4 py-2 border rounded-full hover:border-[#C6A96B]"
              >
                {formatCategory(cat)}
              </Link>
            ))}
          </div>
        </section>
      </section>

      <SiteFooter />
    </main>
  );
}
