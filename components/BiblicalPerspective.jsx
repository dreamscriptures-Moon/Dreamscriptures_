import Link from "next/link";
import { getParagraphs } from "@/lib/dreams";
import { normalizeSlug } from "@/lib/normalizeSlug";

const biblicalSymbols = [
  { slug: "snake", label: "Snake dreams", pattern: /\b(snake|serpent)\b/i },
  { slug: "water", label: "Water dreams", pattern: /\b(water|river|ocean|flood|sea)\b/i },
  { slug: "house", label: "House dreams", pattern: /\b(house|home|building|room)\b/i },
  { slug: "fire", label: "Fire dreams", pattern: /\b(fire|flame|burning)\b/i },
  { slug: "blood", label: "Blood dreams", pattern: /\b(blood|bleeding)\b/i },
  { slug: "rainbow", label: "Rainbow dreams", pattern: /\brainbow\b/i },
  { slug: "death", label: "Death dreams", pattern: /\b(death|dead|dying|funeral)\b/i },
  { slug: "flying", label: "Flying dreams", pattern: /\b(fly|flying|sky|wings)\b/i },
];

function getRelevantBiblicalSymbols(dream = {}) {
  const currentSlug = normalizeSlug(dream.slug || dream.title);
  const context = [dream.slug, dream.title, dream.description || dream.uniqueDescription, dream.symbolic, dream.symbolicMeaning, dream.spiritual, dream.spiritualMeaning, ...(dream.categories || [])].filter(Boolean).join(" ");
  return biblicalSymbols.filter((symbol) => symbol.slug !== currentSlug && symbol.pattern.test(context)).slice(0, 3);
}

export default function BiblicalPerspective({ dream = {} }) {
  const customMeaning = typeof dream.biblicalMeaning === "string" ? dream.biblicalMeaning.trim() : "";

  if (!customMeaning) return null;

  const paragraphs = getParagraphs(customMeaning);
  const relatedSymbols = getRelevantBiblicalSymbols(dream);

  return (
    <section id="biblical-perspective" aria-labelledby="biblical-perspective-heading" className="border-t border-[#EAE6E1] pt-6 scroll-mt-28">
      <p className="mb-3 text-[11px] uppercase tracking-[0.18em] text-[#8A8175]">Faith and reflection</p>
      <h2 id="biblical-perspective-heading" className="font-serif text-4xl md:text-5xl mb-4">
        Biblical Meaning
      </h2>

      <div className="space-y-4">
        {paragraphs.map((paragraph, index) => (
          <p key={`${index}-${paragraph.slice(0, 24)}`} className="text-[#6B6B6B] text-base md:text-lg leading-relaxed">{paragraph}</p>
        ))}

        <p className="text-[#6B6B6B] text-base md:text-lg leading-relaxed">
          Continue with our <Link href="/guides/biblical-dreams" className="underline underline-offset-4 hover:text-[#C6A96B] transition-colors">biblical dreams guide</Link> and <Link href="/guides/spiritual-dreams-meaning" className="underline underline-offset-4 hover:text-[#C6A96B] transition-colors">spiritual dreams guide</Link> for a balanced approach to faith, symbolism, and personal reflection.
        </p>
      </div>

      {relatedSymbols.length > 0 && (
        <nav aria-label="Relevant biblical dream symbols" className="mt-6">
          <p className="mb-3 text-sm font-medium text-[#5F574E]">Related biblical dream symbols</p>
          <div className="flex flex-wrap gap-2">
            {relatedSymbols.map((symbol) => <Link key={symbol.slug} href={`/dreams/${symbol.slug}`} className="border border-[#EAE6E1] bg-white/70 px-3 py-2 text-sm text-[#5F574E] transition hover:border-[#C6A96B] hover:text-[#8F743C]">{symbol.label}</Link>)}
          </div>
        </nav>
      )}
    </section>
  );
}
