import Link from "next/link";

export default function SubmitYourDreamCTA() {
  return (
    <section
      aria-labelledby="submit-your-dream-title"
      className="border-y border-[#E1DCD5] bg-[#F3ECDD] px-6 py-16 text-center md:py-20"
    >
      <div className="mx-auto max-w-2xl">
        <p className="mb-3 text-[11px] uppercase tracking-[0.2em] text-[#8A8175]">
          Your story matters
        </p>
        <h2
          id="submit-your-dream-title"
          className="font-serif text-4xl leading-tight text-[#1A1A1A] md:text-5xl"
        >
          Share Your Dream
        </h2>
        <div className="mx-auto my-6 h-px w-12 bg-[#C6A96B]" aria-hidden="true" />
        <div className="space-y-3 text-base leading-relaxed text-[#5F574E] md:text-lg">
          <p className="font-serif text-xl text-[#3A3A3A]">
            Have a dream you can&apos;t stop thinking about?
          </p>
          <p>
            Every dream tells a story. Share yours with DreamScriptures. Your
            dream may even inspire a future interpretation that helps someone
            else.
          </p>
        </div>
        <Link
          href="/submit-dream"
          className="mt-8 inline-flex min-h-12 items-center justify-center rounded-full bg-[#1A1A1A] px-7 py-3 font-medium text-white transition hover:bg-[#333333] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8F743C]"
        >
          <span aria-hidden="true">✨</span>&nbsp; Submit Your Dream
        </Link>
      </div>
    </section>
  );
}
