import Link from "next/link";
import { DreamCard } from "@/components/DreamCards";

export default function ContinueExploring({ dreams = [] }) {
  if (!dreams.length) return null;

  return (
    <section
      className="mt-20 scroll-mt-28 border-t border-[#EAE6E1] pt-14 md:mt-32"
      aria-labelledby="continue-exploring-heading"
    >
      <p className="mb-3 text-[11px] uppercase tracking-[0.18em] text-[#8A8175]">
        🌙 Continue Exploring
      </p>

      <h3
        id="continue-exploring-heading"
        className="mb-4 font-serif text-4xl text-[#1A1A1A] md:text-5xl"
      >
        Continue Your Dream Journey
      </h3>

      <p className="mb-10 max-w-2xl text-base leading-relaxed text-[#6B6B6B]">
        Dreams rarely exist in isolation. Explore other dream interpretations
        that share similar symbols, emotions, spiritual themes, or life
        situations. Sometimes the meaning you&apos;re searching for becomes clearer
        when viewed alongside related dreams.
      </p>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {dreams.map((dream) => (
          <DreamCard
            key={dream.slug || dream.title}
            dream={dream}
            compact
          />
        ))}
      </div>

      <div className="mt-12 rounded-2xl border border-[#EAE6E1] bg-[#FAF8F5] p-8 text-center">
        <h4 className="font-serif text-2xl text-[#1A1A1A]">
          Didn&apos;t find a dream like yours?
        </h4>

        <p className="mt-3 text-[#6B6B6B] leading-relaxed">
          Every dream is unique. Share your dream with us and explore a deeper
          interpretation based on its symbols, emotions, and spiritual meaning.
        </p>

        <Link
          href="/contact"
          className="mt-6 inline-flex items-center rounded-full bg-[#1A1A1A] px-6 py-3 text-sm font-medium text-white transition hover:bg-[#2D2D2D]"
        >
          Share Your Dream →
        </Link>
      </div>
    </section>
  );
}
