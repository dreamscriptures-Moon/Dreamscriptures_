import Link from "next/link";
import { getDreamHref } from "@/lib/routes";
import { getDreamSummary } from "@/lib/editorialDiscovery";

export function Breadcrumbs({ items }) {
  return <nav aria-label="Breadcrumb" className="mb-8 text-sm text-[#766f67]"><ol className="flex flex-wrap items-center gap-2">{items.map((item, index) => <li key={item.label} className="flex items-center gap-2">{index > 0 && <span aria-hidden="true">/</span>}{item.href ? <Link className="rounded-sm underline-offset-4 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#9a7b43]" href={item.href}>{item.label}</Link> : <span aria-current="page" className="text-[#2b2824]">{item.label}</span>}</li>)}</ol></nav>;
}

export function SectionHeading({ eyebrow, title, intro }) {
  return <header className="max-w-2xl">{eyebrow && <p className="mb-3 text-[11px] uppercase tracking-[0.2em] text-[#8f743c]">{eyebrow}</p>}<h2 className="font-serif text-3xl leading-tight text-[#24211e] md:text-4xl">{title}</h2>{intro && <p className="mt-4 text-base leading-7 text-[#686159] md:text-lg">{intro}</p>}</header>;
}

export function DreamPreviewGrid({ dreams, limit = 6 }) {
  const items = dreams.slice(0, limit);
  if (!items.length) return null;
  return <div className="mt-8 grid gap-x-8 gap-y-5 md:grid-cols-2">{items.map((dream) => <Link key={dream.slug} href={getDreamHref(dream)} className="group border-t border-[#ded7cd] py-5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#9a7b43]"><h3 className="font-serif text-xl text-[#29251f] transition-colors group-hover:text-[#8f743c]">{dream.title}</h3>{getDreamSummary(dream) && <p className="mt-2 text-sm leading-6 text-[#70685f]">{getDreamSummary(dream)}</p>}<span className="mt-3 inline-block text-xs font-medium uppercase tracking-[0.14em] text-[#8f743c]">Read meaning →</span></Link>)}</div>;
}

export function GuideLinks({ guides }) {
  if (!guides.length) return null;
  return <div className="mt-7 grid gap-4 md:grid-cols-3">{guides.map((guide) => <Link key={guide.slug} href={`/guides/${guide.slug}`} className="rounded-2xl border border-[#ded7cd] bg-white/65 p-5 transition hover:border-[#b89b62] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#9a7b43]"><h3 className="font-serif text-lg">{guide.title}</h3>{guide.description && <p className="mt-2 text-sm leading-6 text-[#70685f]">{guide.description}</p>}</Link>)}</div>;
}

export function FAQSection({ items, title = "Frequently Asked Questions" }) {
  return <section className="border-t border-[#ded7cd] py-14 md:py-20"><SectionHeading title={title} /><div className="mt-8 divide-y divide-[#ded7cd]">{items.map((item) => <details key={item.question} className="group py-5"><summary className="cursor-pointer list-none pr-8 font-serif text-lg marker:hidden">{item.question}<span aria-hidden="true" className="float-right text-[#9a7b43] group-open:rotate-45">+</span></summary><p className="max-w-2xl pt-3 leading-7 text-[#686159]">{item.answer}</p></details>)}</div></section>;
}

export function LinkPills({ items, hrefFor }) {
  if (!items.length) return null;
  return <div className="mt-7 flex flex-wrap gap-3">{items.map((item) => <Link key={item.slug || item.key} href={hrefFor(item)} className="rounded-full border border-[#d9d0c4] bg-white/60 px-4 py-2 text-sm text-[#514b44] transition hover:border-[#b89b62] hover:text-[#765d30] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#9a7b43]">{item.title}{item.count ? ` · ${item.count}` : ""}</Link>)}</div>;
}
