import Link from "next/link";
import LazyMobileQuickNav from "@/app/components/LazyMobileQuickNav";
import SearchBar from "@/app/components/SearchBar";
import SiteFooter from "@/app/components/SiteFooter";
import SiteHeader from "@/app/components/SiteHeader";
import { normalizeSlug } from "@/lib/normalizeSlug";

function TextBlocks({ text = "", className = "" }) {
  const paragraphs = String(text)
    .split(/\n{2,}/)
    .map((paragraph) => paragraph.trim())
    .filter(Boolean);

  if (paragraphs.length === 0) return null;

  return (
    <div className={`space-y-4 ${className}`.trim()}>
      {paragraphs.map((paragraph) => (
        <p
          key={paragraph.slice(0, 32)}
          className="text-[#6B6B6B] text-base md:text-lg leading-relaxed"
        >
          {paragraph}
        </p>
      ))}
    </div>
  );
}

export default function ClusterGuidePage({ clusterGuide }) {
  const breadcrumbSchema = {
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
        name: "Guides",
        item: "https://www.dreamscriptures.com/guides",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: clusterGuide.title,
        item: `https://www.dreamscriptures.com/guides/${clusterGuide.slug}`,
      },
    ],
  };

  return (
    <main className="bg-[#F7F5F2] min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <SiteHeader />

      <article className="max-w-3xl mx-auto px-6 pt-10 pb-10 md:pt-16 md:pb-24 text-[#3A3A3A] leading-relaxed">
        <nav
          aria-label="Breadcrumb"
          className="text-sm text-[#8A8175] mb-10 flex flex-wrap gap-2"
        >
          <Link href="/" className="hover:text-[#C6A96B] transition-colors">
            Home
          </Link>
          <span>/</span>
          <Link
            href="/guides"
            className="hover:text-[#C6A96B] transition-colors"
          >
            Guides
          </Link>
          <span>/</span>
          <span className="text-[#6B6B6B]">{clusterGuide.title}</span>
        </nav>

        <h1 className="text-3xl md:text-5xl font-serif mb-8 text-[#1A1A1A]">
          {clusterGuide.title}
        </h1>

        <nav className="mb-10 text-sm">
          <p className="text-[11px] uppercase tracking-[0.18em] text-[#8A8175] mb-3">
            On this page
          </p>
          <ul className="space-y-2 pl-4 relative">
            <li
              aria-hidden="true"
              className="absolute left-0 top-1 bottom-1 w-px bg-gradient-to-b from-[#EAE6E1] via-[#D8C7A0] to-[#EAE6E1]"
            />
            <li>
              <a
                href="#connected-dreams"
                className="text-[#6B6B6B] hover:text-[#C6A96B] transition-colors duration-200"
              >
                Connected dreams
              </a>
            </li>
            <li>
              <a
                href="#emotional-patterns"
                className="text-[#6B6B6B] hover:text-[#C6A96B] transition-colors duration-200"
              >
                Emotional patterns
              </a>
            </li>
            <li>
              <a
                href="#related-pathways"
                className="text-[#6B6B6B] hover:text-[#C6A96B] transition-colors duration-200"
              >
                Related pathways
              </a>
            </li>
          </ul>
        </nav>

        <LazyMobileQuickNav />

        <p className="text-xs tracking-widest text-[#A89F91] uppercase mb-8">
          Cluster guide - 5 min read
        </p>

        <TextBlocks text={clusterGuide.intro} className="mb-14" />

        <section id="connected-dreams" className="mt-14 scroll-mt-28">
          <h2 className="font-serif text-2xl md:text-3xl mb-6">
            Connected dreams
          </h2>
          <p className="text-[#6B6B6B] leading-relaxed text-base md:text-lg mb-8">
            These dreams are connected by the emotional structure underneath
            them, not only by the image or event that appears on the surface.
          </p>

          <div className="grid gap-4">
            {clusterGuide.dreams.map((dream) => (
              <Link
                key={dream.slug}
                href={`/dreams/${normalizeSlug(dream.slug || dream.title)}`}
                className="border border-[#EAE6E1] rounded-xl p-5 bg-[#FCFBF9] hover:border-[#C6A96B] transition-colors"
              >
                <h3 className="font-serif text-xl mb-2 text-[#1A1A1A]">
                  {dream.title}
                </h3>
                <p className="text-[#6B6B6B] leading-relaxed text-sm">
                  {dream.microSummary || dream.summary || dream.description}
                </p>
              </Link>
            ))}
          </div>
        </section>

        <section
          id="emotional-patterns"
          className="mt-20 border-t border-[#EAE6E1] pt-10 scroll-mt-28"
        >
          <h2 className="font-serif text-2xl md:text-3xl mb-6">
            Emotional patterns
          </h2>
          <div className="flex flex-wrap gap-3 mb-8">
            {clusterGuide.emotionalPatterns.map((pattern) => (
              <span
                key={pattern}
                className="px-4 py-2 rounded-full border border-[#EAE6E1] text-sm text-[#6B6B6B] bg-[#FCFBF9]"
              >
                {pattern}
              </span>
            ))}
          </div>
          <p className="text-[#6B6B6B] leading-relaxed text-base md:text-lg mb-6">
            The shared feeling in this cluster often matters more than any
            single symbol. Pressure, fear, urgency, avoidance, or instability
            can move through different dream scenes while pointing to the same
            underlying emotional state.
          </p>
          <p className="text-[#6B6B6B] leading-relaxed text-base md:text-lg">
            Looking across the cluster helps reveal the pattern your mind may be
            returning to, especially when different dreams leave behind a
            similar feeling after waking.
          </p>
        </section>

        <section
          id="related-pathways"
          className="mt-20 border-t border-[#EAE6E1] pt-10 scroll-mt-28"
        >
          <h2 className="font-serif text-2xl md:text-3xl mb-6">
            Related pathways
          </h2>
          <p className="text-[#6B6B6B] leading-relaxed text-base md:text-lg mb-8">
            Continue through nearby emotional pathways to understand how this
            cluster connects with broader dream themes.
          </p>
          <div className="grid gap-3">
            {clusterGuide.relatedPathways.map((pathway) => (
              <Link
                key={pathway.href}
                href={pathway.href}
                className="block border border-[#EAE6E1] rounded-xl p-5 bg-[#FCFBF9] hover:border-[#C6A96B] transition-colors"
              >
                <h3 className="font-serif text-lg mb-2 text-[#1A1A1A]">
                  {pathway.title}
                </h3>
                {pathway.description && (
                  <p className="text-[#6B6B6B] leading-relaxed text-sm">
                    {pathway.description}
                  </p>
                )}
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
      </article>

      <SiteFooter />
    </main>
  );
}
