import Link from "next/link";
import SiteFooter from "@/app/components/SiteFooter";
import SiteHeader from "@/app/components/SiteHeader";
import { guides, getGuideBySlug } from "@/app/data/guides";
import SearchBar from "@/app/components/SearchBar";

export function generateStaticParams() {
  return guides.map((guide) => ({
    slug: guide.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const guide = getGuideBySlug(slug);

  if (!guide) {
    return {
      title: "Guides | DreamScriptures",
      description: "Dream insights and meanings from DreamScriptures.",
      alternates: {
        canonical: "/guides",
      },
    };
  }

  return {
    title: `${guide.title} | DreamScriptures`,
    description: guide.description || guide.intro,
    alternates: {
      canonical: `/guides/${guide.slug}`,
    },
  };
}

export default async function GuidePage({ params }) {
  const { slug } = await params;
  const guide = getGuideBySlug(slug);
  const breadcrumbSchema = guide
  ? {
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
          name: guide.title,
          item: `https://www.dreamscriptures.com/guides/${guide.slug}`,
        },
      ],
    }
  : null;

  if (!guide) {
    return (
      <main className="bg-[#F7F5F2] min-h-screen">
        <SiteHeader />
        <p className="max-w-3xl mx-auto px-6 py-20">Guide not found</p>
      </main>
    );
  }
function linkifyText(text = "") {
  const mappings = [
    {
      phrase: "why we dream",
      href: "/guides/why-we-dream",
    },
    {
      phrase: "dream symbols",
      href: "/guides/how-to-interpret-dream-symbols",
    },
    {
      phrase: "spiritual dreams",
      href: "/guides/spiritual-dreams-meaning",
    },
    {
      phrase: "dreams and emotions",
      href: "/guides/dreams-and-emotions",
    },
    {
  phrase: "what dreams are",
  href: "/guides/what-are-dreams",
},
{
  phrase: "why dreams feel so real",
  href: "/guides/why-dreams-feel-so-real",
},
{
  phrase: "remember dreams",
  href: "/guides/how-to-remember-dreams",
},
{
  phrase: "recurring dreams",
  href: "/guides/recurring-dreams",
}
  ];

  let elements = [text];

  mappings.forEach(({ phrase, href }) => {
    elements = elements.flatMap((part) => {
      if (typeof part !== "string") return [part];

      const split = part.split(new RegExp(`(${phrase})`, "gi"));

      return split.map((piece, i) => {
        if (piece.toLowerCase() === phrase) {
          return (
            <Link key={i} href={href} className="text-[#C6A96B] hover:underline">
              {piece}
            </Link>
          );
        }
        return piece;
      });
    });
  });

  return elements;
}
  return (
   <main className="bg-[#F7F5F2] min-h-screen">
  <SiteHeader />

  {breadcrumbSchema && (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(breadcrumbSchema),
      }}
    />
  )}
      <article className="max-w-3xl mx-auto pt-10 pb-20 md:pt-16 md:pb-28 text-[#3A3A3A] leading-relaxed">
       <nav
  aria-label="Breadcrumb"
  className="text-sm text-[#8A8175] mb-10 flex flex-wrap gap-2"
>
  <Link href="/" className="hover:text-[#C6A96B] transition-colors">
    Home
  </Link>

  <span>›</span>

  <Link href="/guides" className="hover:text-[#C6A96B] transition-colors">
    Guides
  </Link>

  <span>›</span>

  <span className="text-[#6B6B6B]">{guide.title}</span>
</nav>

        <h1 className="text-4xl md:text-5xl font-serif mb-10 text-[#1A1A1A]">
          {guide.title}
        </h1>

       {guide.sections?.length > 0 && (
  <nav className="mb-12 text-sm">
    <p className="text-[11px] uppercase tracking-[0.18em] text-[#8A8175] mb-3">
      On this page
    </p>

    <ul className="space-y-2 pl-4 relative">
      <div className="absolute left-0 top-1 bottom-1 w-px bg-gradient-to-b from-[#EAE6E1] via-[#D8C7A0] to-[#EAE6E1]" />

      {guide.sections.map((section, i) => (
        <li key={section.title}>
          <a
            href={`#section-${i}`}
            className="text-[#6B6B6B] hover:text-[#C6A96B] transition-colors duration-200"
          >
            {section.title}
          </a>
        </li>
      ))}
    </ul>
  </nav>
)}

        <p className="text-xs tracking-widest text-[#A89F91] uppercase mb-8">
          Guide - 5 min read
        </p>

        {guide.intro && (
          <p className="text-base md:text-lg leading-relaxed mb-12">
            {guide.intro}
          </p>
        )}

        {guide.content?.length > 0 && (
          <section className="space-y-6 text-base md:text-lg mb-16">
            {guide.content.map((paragraph, i) => (
             <p key={i}>
  {linkifyText(paragraph)}
</p>
            ))}
          </section>
        )}

        {guide.sections?.length > 0 && (
          <section className="space-y-4 mb-16">
            {guide.sections.map((section, i) => (
              <details
                key={section.title}
                id={`section-${i}`}
                className="group border border-[#EAE6E1] rounded-xl p-6 bg-white transition hover:shadow-sm"
              >
                <summary className="flex justify-between items-center gap-4 font-serif text-base md:text-lg cursor-pointer">
                  {section.title}
                  <span className="text-[#A89F91] group-open:rotate-180 transition">
                    v
                  </span>
                </summary>
                <p className="mt-4">
  {linkifyText(section.body)}
</p>
              </details>
            ))}
          </section>
        )}

        {guide.quickInsight && (
          <section className="px-6 py-8 border border-[#EAE6E1] rounded-xl bg-white mb-10">
            <p className="text-xs tracking-widest text-[#A89F91] mb-3 uppercase">
              Key idea
            </p>
            <p className="text-base md:text-lg">{guide.quickInsight}</p>
          </section>
        )}

        {guide.reflection && (
          <section className="px-6 py-8 bg-[#FAF8F5] border border-[#EAE6E1] rounded-xl mb-10">
            <p className="text-xs tracking-widest text-[#A89F91] mb-3 uppercase">
              Take a moment
            </p>
            <p className="text-base md:text-lg italic">{guide.reflection}</p>
          </section>
        )}

        {guide.actions?.length > 0 && (
          <section className="mb-16">
            <h2 className="font-serif text-2xl md:text-3xl mb-4">
              What you can do with this
            </h2>
            <ul className="space-y-3 text-base md:text-lg">
              {guide.actions.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="text-[#C6A96B]">-</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>
        )}

        {guide.related?.length > 0 && (
          <section className="mt-16 border-t border-[#EAE6E1] pt-10">
            <h2 className="font-serif text-2xl md:text-3xl mb-4">
              Continue exploring
            </h2>
            <div className="space-y-3 text-sm text-[#6B6B6B]">
              {guide.related.map((relatedSlug) => {
                const relatedGuide = guides.find((g) => g.slug === relatedSlug);

                return (
                  <Link
                    key={relatedSlug}
                    href={`/guides/${relatedSlug}`}
                    className="block hover:text-[#1A1A1A]"
                  >
                    {relatedGuide?.title || relatedSlug}
                  </Link>
                );
              })}
            </div>
          </section>
        )}
      </article>

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
