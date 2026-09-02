import Link from "next/link";

export default function DreamCompassPageCTA({ dreamTitle = "this dream" }) {
  return (
    <aside className="mt-16 border border-[#D8C7A0] bg-[#FFFDF8] px-5 py-8 md:px-8 md:py-10" aria-labelledby="dream-compass-page-heading">
      <p className="text-[10px] uppercase tracking-[0.18em] text-[#8F743C]">Your version of the dream</p>
      <h2 id="dream-compass-page-heading" className="mt-3 font-serif text-3xl leading-tight md:text-4xl">
        The details around {dreamTitle.toLowerCase()} can change the meaning
      </h2>
      <p className="mt-4 max-w-2xl text-base leading-7 text-[#625C55]">
        What happened, which symbol or image stood out, and how you felt may point you toward a different part of this interpretation. Dream Compass can help you follow those details.
      </p>
      <Link href="/dream-compass" className="mt-6 inline-flex min-h-12 items-center bg-[#1A1A1A] px-6 text-sm font-medium text-white transition hover:bg-[#333]">
        Explore your dream with Dream Compass
      </Link>
    </aside>
  );
}
