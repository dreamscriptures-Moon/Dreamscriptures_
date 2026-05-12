import Link from "next/link";
import CategoryDreamList from "@/app/components/CategoryDreamList";
import LazyMobileQuickNav from "@/app/components/LazyMobileQuickNav";
import SiteFooter from "@/app/components/SiteFooter";
import SiteHeader from "@/app/components/SiteHeader";
import { dreams } from "@/data/dream";
import { normalizeSlug } from "@/lib/normalizeSlug";
import { categoriesData } from "@/data/categories";

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
  transformation: `
Transformation dreams often appear during periods of personal growth, emotional change, endings, or major shifts in identity and direction. These dreams usually reflect something in your life evolving beneath the surface, even if the full meaning of that change is not completely clear yet.

Transformation can appear in many forms within dreams — death and rebirth imagery, changing bodies, unfamiliar places, spiritual symbols, or situations where something old no longer feels stable or aligned. Even unsettling transformation dreams often carry themes of movement, transition, and emotional evolution rather than literal loss.

The emotional tone matters. Some transformation dreams feel peaceful or meaningful, while others feel confusing, emotional, or overwhelming. Fear within the dream can reflect resistance to change, uncertainty about the future, or difficulty letting go of something familiar.

In many cases, transformation dreams appear when your inner world is adjusting to a new emotional reality, identity, relationship, or phase of life that is still unfolding.
`,

anxiety: `
Anxiety dreams often appear during periods of emotional pressure, stress, uncertainty, or situations where your mind feels overwhelmed beneath the surface. These dreams can reflect worries, fears, emotional tension, or unresolved experiences that continue lingering even when you are trying to move forward.

Anxiety can appear in dreams through many different situations — being late, losing control, falling, being chased, forgetting something important, struggling to escape, or feeling emotionally trapped. Even when the symbols change, the emotional pattern underneath is often connected to pressure, insecurity, vulnerability, or fear of failure.

The intensity of the dream matters. Some anxiety dreams feel chaotic and overwhelming, while others carry quieter feelings of dread, unease, emotional exhaustion, or instability slowly building over time.

In many cases, anxiety dreams are less about literal danger and more about emotional stress your mind has not fully processed, released, or understood yet.
`,
fear: `
Fear dreams often appear during periods of emotional pressure, uncertainty, vulnerability, or situations where something in life feels difficult to control or fully understand.

These dreams can take many forms — being chased, trapped, attacked, watched, overwhelmed, or unable to escape danger. Even when the symbols change, the emotional pattern underneath is often connected to anxiety, emotional tension, survival instincts, or fear of losing stability.

The emotional tone matters. Intense panic may reflect overwhelm or emotional urgency, while quieter fear can point to stress, uncertainty, mistrust, or emotional pressure building beneath the surface over time.

In many cases, fear dreams are less about literal danger and more about emotional experiences your mind is still trying to process, avoid, or understand.
`,
spiritual: `
Spiritual dreams often connect to deeper awareness, intuition, inner guidance, or emotional experiences that feel meaningful beyond ordinary daily life. These dreams can appear during periods of reflection, emotional change, awakening, grief, uncertainty, or moments where you feel drawn toward something deeper within yourself.

Spiritual symbolism can appear in many forms — light, unknown voices, ancestors, death and rebirth imagery, floating, sacred places, mirrors, animals, overwhelming calmness, or experiences that feel emotionally powerful and difficult to explain logically. Even unsettling spiritual dreams often carry themes of transformation, inner searching, or emotional truths rising to the surface.

The emotional tone matters. Some spiritual dreams feel peaceful, comforting, or deeply connected, while others may feel intense, mysterious, overwhelming, or emotionally exposing. In many cases, the dream reflects not just external symbols, but your relationship with meaning, identity, intuition, or emotional growth itself.

Spiritual dreams are often less about predicting the future and more about helping you process emotional transitions, inner awareness, personal transformation, or aspects of yourself that are becoming harder to ignore.
`,
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
    const categoryData = categoriesData[normalizedCategory];
   

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

        <LazyMobileQuickNav />

       {/* 🔥 Emotional themes */}
<section className="mt-1">
  <h2 className="font-serif text-2xl md:text-3xl mb-6">
    Emotional patterns connected to{" "}
    {formatCategory(normalizedCategory)} dreams
  </h2>

  <div className="flex flex-wrap gap-3 mb-8">
    {[
      "Fear",
      "Anxiety",
      "Vulnerability",
      "Overwhelm",
      "Uncertainty",
      "Hidden emotions",
    ].map((theme) => (
      <span
        key={theme}
        className="px-4 py-2 rounded-full border border-[#EAE6E1] text-sm text-[#6B6B6B] bg-[#FCFBF9]"
      >
        {theme}
      </span>
    ))}
  </div>

  <p className="text-[#6B6B6B] leading-relaxed text-base md:text-lg mb-6">
    {formatCategory(normalizedCategory)} dreams often appear during periods of
    emotional tension, vulnerability, uncertainty, or situations where something
    in life feels emotionally unresolved or difficult to fully understand.
  </p>

  <p className="text-[#6B6B6B] leading-relaxed text-base md:text-lg">
    Even when the symbols change, the emotional patterns underneath these dreams
    are often connected to pressure, emotional conflict, fear of change, inner
    instability, or experiences your mind is still trying to process beneath the
    surface.
  </p>
</section>

<section className="mt-16">
  <h2 className="font-serif text-2xl md:text-3xl mb-6">
    Common {normalizedCategory} dreams
  </h2>

  <p className="text-[#6B6B6B] leading-relaxed text-base md:text-lg mb-8">
    Dreams connected to {normalizedCategory} can appear in many different forms.
    Some feel intense and emotionally overwhelming, while others carry quieter
    feelings of uncertainty, emotional pressure, vulnerability, or inner conflict.
  </p>
</section>
{categoryData?.framework?.map((section) => (
  <section key={section.title} className="mt-14">
    <h2 className="font-serif text-2xl md:text-3xl mb-4">
      {section.title}
    </h2>

    <p className="text-[#6B6B6B] leading-relaxed mb-6">
      {section.description}
    </p>
<div className="grid gap-4">
  {section.dreams.map((slug) => {
    const dream = dreams.find((d) => d.slug === slug);

    if (!dream) return null;

    return (
      <Link
        key={slug}
        href={`/dreams/${slug}`}
        className="border border-[#EAE6E1] rounded-2xl p-5 bg-[#FCFBF9] hover:border-[#C6A96B] transition-colors"
      >
        <h3 className="font-serif text-xl mb-2">
          {dream.title}
        </h3>

        <p className="text-[#6B6B6B] leading-relaxed text-sm">
          {dream.microSummary || dream.summary}
        </p>
      </Link>
    );
  })}
</div>
   
  </section>
))}

<section className="mt-20 border-t border-[#EAE6E1] pt-10">
  <h2 className="font-serif text-2xl md:text-3xl mb-6">
    The feeling matters more than the symbol
  </h2>

  <p className="text-[#6B6B6B] leading-relaxed text-base md:text-lg mb-6">
    Two people can dream about the same thing and experience completely different meanings emotionally.
    In many cases, the emotional tone of the dream reveals more than the symbol itself.
  </p>

  <p className="text-[#6B6B6B] leading-relaxed text-base md:text-lg mb-6">
    Panic may reflect emotional overwhelm or urgency, while quieter unease can point to uncertainty,
    vulnerability, emotional pressure, or experiences that are slowly building beneath the surface over time.
  </p>

  <p className="text-[#6B6B6B] leading-relaxed text-base md:text-lg">
    Repeating dreams can suggest unresolved emotional patterns that your mind continues returning to,
    while one-time dreams may reflect temporary stress, emotional processing, or a specific experience
    that left a strong emotional impression.
  </p>
</section>

<section className="mt-20 border-t border-[#EAE6E1] pt-10">
  <h2 className="font-serif text-2xl md:text-3xl mb-6">
    How to understand your own{" "}
    {normalizedCategory} dream
  </h2>

  <p className="text-[#6B6B6B] leading-relaxed text-base md:text-lg mb-6">
    The most important part of a dream is often not the symbol itself, but the
    emotional experience surrounding it. The same dream can carry different
    meanings depending on the emotional tone, your personal experiences, and
    what is currently happening in your life emotionally.
  </p>

  <p className="text-[#6B6B6B] leading-relaxed text-base md:text-lg mb-6">
    Try paying attention to what stood out most strongly in the dream. Was it
    panic, pressure, helplessness, confusion, vulnerability, urgency, or the
    feeling that something was emotionally unresolved?
  </p>

  <p className="text-[#6B6B6B] leading-relaxed text-base md:text-lg">
    In many cases, dreams connected to {normalizedCategory} reflect emotional
    experiences, stress patterns, fears, transitions, or situations your mind
    is still trying to emotionally process beneath the surface of daily life.
  </p>
</section>

        {/*  Dream list */}
        <CategoryDreamList
          dreams={filteredDreams}
          category={normalizedCategory}
        />
        {/*  FAQ */}
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
          <h2 className="font-serif text-2xl md:text-3xl mb-4">
  Related emotional dream themes
</h2>
<p className="text-[#6B6B6B] leading-relaxed mb-6">
  {formatCategory(normalizedCategory)} dreams are often closely connected to
  emotional pressure, hidden emotions, transformation, uncertainty, and periods
  of inner change or emotional tension.
</p>
          <div className="flex flex-wrap gap-3">
            {["fear", "anxiety", "transformation", "spiritual"].map((cat) => (
              <Link
                key={cat}
                href={`/categories/${cat}`}
              className="text-sm px-4 py-2 border border-[#EAE6E1] rounded-full bg-[#FCFBF9] hover:border-[#C6A96B] transition-colors" >
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
