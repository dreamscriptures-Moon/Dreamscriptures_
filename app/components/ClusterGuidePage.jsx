import Link from "next/link";
import GuideLayout from "@/app/components/guides/GuideLayout";
import { getDreamHref } from "@/lib/routes";

export default function ClusterGuidePage({ clusterGuide }) {
  const toc = [{ id: "connected-dreams", title: "Connected dreams" }, { id: "emotional-patterns", title: "Emotional patterns" }, { id: "related-pathways", title: "Related pathways" }];
  const guide = { ...clusterGuide, category: "Dream Pattern Guide", sections: toc.map((item) => ({ title: item.title, id: item.id })) };
  return <GuideLayout guide={guide} toc={toc} relatedDreams={clusterGuide.dreams}>
    <section aria-label="Introduction"><p className="text-lg leading-9 text-[#4F4A44]">{clusterGuide.intro}</p></section>
    <section id="connected-dreams" className="scroll-mt-24 border-t border-[#E2DCD3] pt-12"><h2 className="mb-6 font-serif text-3xl text-[#1A1A1A] md:text-4xl">Connected dreams</h2><div className="grid gap-4 sm:grid-cols-2">{clusterGuide.dreams.map((dream) => <Link key={dream.slug} href={getDreamHref(dream)} className="rounded-2xl border border-[#E2DCD3] bg-white p-5 hover:border-[#B79B5E]"><h3 className="font-serif text-xl">{dream.title}</h3><p className="mt-2 text-sm leading-6 text-[#6B6B6B]">{dream.microSummary || dream.summary || dream.description}</p></Link>)}</div></section>
    <section id="emotional-patterns" className="scroll-mt-24 border-t border-[#E2DCD3] pt-12"><h2 className="mb-6 font-serif text-3xl text-[#1A1A1A] md:text-4xl">Emotional patterns</h2><div className="mb-7 flex flex-wrap gap-3">{clusterGuide.emotionalPatterns.map((pattern) => <span key={pattern} className="rounded-full border bg-white px-4 py-2 text-sm">{pattern}</span>)}</div><p className="text-lg leading-8 text-[#5F574E]">The shared feeling often matters more than a single symbol. Explore the <Link href="/emotions" className="underline">dream emotions library</Link> for broader pathways.</p></section>
    <section id="related-pathways" className="scroll-mt-24 border-t border-[#E2DCD3] pt-12"><h2 className="mb-6 font-serif text-3xl text-[#1A1A1A] md:text-4xl">Related pathways</h2><div className="grid gap-4">{clusterGuide.relatedPathways.map((pathway) => <Link key={pathway.href} href={pathway.href} className="rounded-2xl border bg-white p-5 hover:border-[#B79B5E]"><h3 className="font-serif text-xl">{pathway.title}</h3>{pathway.description && <p className="mt-2 text-sm leading-6 text-[#6B6B6B]">{pathway.description}</p>}</Link>)}</div></section>
  </GuideLayout>;
}
