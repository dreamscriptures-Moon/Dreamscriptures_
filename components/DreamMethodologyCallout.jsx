import Link from "next/link";

export default function DreamMethodologyCallout() {
  return (
    <aside
      aria-labelledby="interpretation-method-heading"
      className="my-14 border-y border-[#EAE6E1] bg-gradient-to-b from-white/80 to-[#F8F5EF] px-6 py-10"
    >
      <p className="mb-3 text-[11px] uppercase tracking-[0.18em] text-[#8A8175]">
        Interpretation methodology
      </p>

      <h2
        id="interpretation-method-heading"
        className="mb-5 font-serif text-2xl leading-tight text-[#1A1A1A] md:text-3xl"
      >
        Why emotional tone changes dream meaning
      </h2>

      <div className="space-y-5 text-base leading-relaxed text-[#5F574E]">
        <p>
          Dream interpretation is rarely about symbols alone.
        </p>

        <p>
          The same dream can carry a completely different meaning depending on
          the emotional atmosphere surrounding it.
        </p>

        <p>
          A snake appearing during fear may reflect emotional threat,
          mistrust, pressure, or hidden tension.
          The same snake appearing during calmness or transformation may
          symbolize healing, growth, awareness, or personal change.
        </p>

        <p>
          DreamScriptures approaches dreams through emotional realism,
          subconscious pattern recognition, symbolic behavior, spiritual
          reflection, and waking-life context rather than fixed one-line
          definitions.
        </p>

        <p>
          This is why interpretation here focuses not only on what appears
          in the dream, but how the experience feels while it unfolds.
        </p>
      </div>

      <div className="mt-8 flex flex-wrap gap-5 text-sm">
        <Link
          href="/methodology"
          className="underline underline-offset-4 transition hover:text-[#8F743C]"
        >
          Read the DreamScriptures interpretation approach
        </Link>

        <Link
          href="/guides/how-to-interpret-dream-symbols"
          className="underline underline-offset-4 transition hover:text-[#8F743C]"
        >
          Learn how dream symbols are interpreted
        </Link>
      </div>
    </aside>
  );
}