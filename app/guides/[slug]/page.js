import Link from "next/link";
import SiteFooter from "@/app/components/SiteFooter";
import SiteHeader from "@/app/components/SiteHeader";
import { guides, getGuideBySlug } from "@/app/data/guides";

export function generateStaticParams() {
  return guides.map((guide) => ({
    slug: guide.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;

  return {
    title: slug.replace(/-/g, " "),
  };
}

export default async function GuidePage({ params }) {
  const { slug } = await params;
  const guide = getGuideBySlug(slug);

  if (!guide) {
    return (
      <main className="bg-[#F7F5F2] min-h-screen">
        <SiteHeader />
        <p className="max-w-3xl mx-auto px-6 py-20">Guide not found</p>
      </main>
    );
  }

  return (
    <main className="bg-[#F7F5F2] min-h-screen">
      <SiteHeader />

      <article className="max-w-3xl mx-auto px-6 py-20 md:py-32 text-[#3A3A3A] leading-relaxed">
        <Link
          href="/guides"
          className="text-sm text-[#6B6B6B] hover:text-[#1A1A1A] mb-10 inline-block"
        >
          {"<-"} Back to guides
        </Link>

        <h1 className="text-4xl md:text-5xl font-serif mb-10 text-[#1A1A1A]">
          {guide.title}
        </h1>

        {guide.sections?.length > 0 && (
          <nav className="mb-10">
            <p className="text-sm text-[#A89F91] mb-2">Navigate this guide</p>
            <div className="flex flex-wrap gap-4 text-sm text-[#6B6B6B]">
              {guide.sections.map((section, i) => (
                <a
                  key={section.title}
                  href={`#section-${i}`}
                  className="hover:text-[#C6A96B]"
                >
                  {section.title}
                </a>
              ))}
            </div>
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
              <p key={i}>{paragraph}</p>
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
                <p className="mt-4 text-base md:text-lg leading-relaxed">
                  {section.body}
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
            <h2 className="font-serif text-4xl md:text-5xl mb-4">
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
            <h2 className="font-serif text-4xl md:text-5xl mb-4">
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

      <SiteFooter />
    </main>
  );
}
