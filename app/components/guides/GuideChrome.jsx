import Link from "next/link";
import SearchBar from "@/app/components/SearchBar";
import GuideCopyLink from "@/app/components/guides/GuideCopyLink";
import GuideTableOfContents from "@/app/components/guides/GuideTableOfContents";
import { GUIDE_UPDATED_LABEL } from "@/lib/guideExperience";

export function GuideSchemas({ schemas = [] }) {
  return schemas.map((schema) => <script key={schema["@type"]} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />);
}

export function GuideHero({ category = "Dream Guide", title, description, readingTime, updated = GUIDE_UPDATED_LABEL, toc = [] }) {
  return <>
    <header className="border-b border-[#E5DED4] bg-gradient-to-b from-white to-[#F7F5F2]">
      <div className="mx-auto max-w-4xl px-6 pb-14 pt-10 md:pb-20 md:pt-16">
        <nav aria-label="Breadcrumb" className="mb-10 flex flex-wrap items-center gap-2 text-sm text-[#766E64]"><Link className="rounded-sm hover:text-[#8F743C] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8F743C]" href="/">Home</Link><span aria-hidden="true">/</span><Link className="rounded-sm hover:text-[#8F743C] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8F743C]" href="/guides">Guides</Link><span aria-hidden="true">/</span><span aria-current="page">{title}</span></nav>
        <p className="mb-4 text-xs font-medium uppercase tracking-[0.22em] text-[#8F743C]">{category}</p>
        <h1 className="max-w-4xl font-serif text-4xl leading-[1.08] text-[#1A1A1A] md:text-6xl">{title}</h1>
        <p className="mt-7 max-w-3xl text-lg leading-8 text-[#5F574E] md:text-xl">{description}</p>
        <div className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-3 text-sm text-[#766E64]"><span>{readingTime} min read</span><span>Updated {updated}</span><GuideCopyLink /></div>
        <div className="mt-10"><SearchBar /></div>
      </div>
    </header>
    {toc.length >= 3 && <div className="mx-auto max-w-4xl px-6 pt-10"><GuideTableOfContents items={toc} /></div>}
  </>;
}

export function GuideCardGrid({ title, items = [], type = "guide" }) {
  if (!items.length) return null;
  return <section className="border-t border-[#E2DCD3] pt-12"><h2 className="mb-6 font-serif text-3xl text-[#1A1A1A]">{title}</h2><div className="grid gap-4 sm:grid-cols-2">{items.map((item) => {
    const slug = item.slug || item.href?.split("/").filter(Boolean).at(-1);
    const href = item.href || `/${type === "dream" ? "dreams" : "guides"}/${slug}`;
    return <Link key={href} href={href} className="rounded-2xl border border-[#E2DCD3] bg-white p-5 transition hover:-translate-y-0.5 hover:border-[#B79B5E] hover:shadow-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8F743C]"><h3 className="font-serif text-xl text-[#1A1A1A]">{item.title}</h3>{(item.description || item.summary) && <p className="mt-2 line-clamp-3 text-sm leading-6 text-[#6B6B6B]">{item.description || item.summary}</p>}</Link>;
  })}</div></section>;
}
