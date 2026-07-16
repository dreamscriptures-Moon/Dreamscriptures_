import Link from "next/link";
import {
  getDreamExcerpt,
  getDreamImage,
  getReadingTime,
} from "@/lib/dreamEngagement";
import { getDreamHref } from "@/lib/routes";

function DreamVisual({ dream }) {
  const image = getDreamImage(dream);
  const title = dream?.title || "Dream Interpretation";

  if (image) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={image}
        alt={title}
        loading="lazy"
        className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
      />
    );
  }

  return (
    <div
      role="img"
      aria-label={`${title} featured image`}
      className="flex h-full w-full flex-col items-center justify-center bg-[radial-gradient(circle_at_20%_20%,#FFF7DE_0,#F7F1E5_28%,#E8DED0_58%,#D7C3A0_100%)] p-6 text-center"
    >
      <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full border border-white/70 bg-white/40 text-3xl shadow-inner">
        🌙
      </div>

      <p className="font-serif text-lg text-[#5F574E]">
        DreamScriptures
      </p>
    </div>
  );
}

export function DreamCard({ dream, compact = false }) {
  const href = getDreamHref(dream);

  const excerpt = getDreamExcerpt(
    dream,
    compact ? 120 : 160
  );

  const readingTime = getReadingTime(dream);

  const category =
    dream.categories?.[0] ||
    dream.category ||
    null;

  return (
    <article className="group overflow-hidden rounded-2xl border border-[#EAE6E1] bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#C6A96B] hover:shadow-xl">
      <Link
        href={href}
        aria-label={`Read ${dream.title}`}
        className="block focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C6A96B] focus-visible:ring-offset-2"
      >
        <div className={compact ? "h-40 overflow-hidden" : "h-52 overflow-hidden"}>
          <DreamVisual dream={dream} />
        </div>

        <div className="p-6">

          {(category || readingTime) && (
            <div className="mb-3 flex flex-wrap items-center gap-2 text-xs uppercase tracking-wide text-[#8A8175]">

              {category && (
                <span className="rounded-full bg-[#F7F3EC] px-3 py-1">
                  {category}
                </span>
              )}

              <span>⏱ {readingTime} min read</span>

            </div>
          )}

          <h3 className="font-serif text-2xl leading-snug text-[#1A1A1A] transition group-hover:text-[#8F743C]">
            {dream.title}
          </h3>

          {excerpt && (
            <p className="mt-4 text-[15px] leading-7 text-[#6B6B6B]">
              {excerpt}
            </p>
          )}

          <div className="mt-5 flex flex-wrap gap-2">

            <span className="rounded-full bg-[#F7F3EC] px-3 py-1 text-xs">
              🕊 Spiritual
            </span>

            <span className="rounded-full bg-[#F7F3EC] px-3 py-1 text-xs">
              ✨ Symbolic
            </span>

            <span className="rounded-full bg-[#F7F3EC] px-3 py-1 text-xs">
              📖 Biblical
            </span>

          </div>

          <span className="mt-6 inline-flex items-center rounded-full bg-[#1A1A1A] px-5 py-3 text-sm font-medium text-white transition group-hover:bg-[#333]">
            Explore Meaning →
          </span>

        </div>
      </Link>
    </article>
  );
}

export function DreamFeatureCard({ dream }) {
  if (!dream) return null;

  const readingTime = getReadingTime(dream);

  const category =
    dream.categories?.[0] ||
    dream.category ||
    null;

  return (
    <article className="overflow-hidden rounded-2xl border border-[#EAE6E1] bg-white shadow-sm md:grid md:grid-cols-[0.95fr_1.05fr]">

      <div className="min-h-[150px] overflow-hidden">
        <DreamVisual dream={dream} />
      </div>

      <div className="flex flex-col justify-center p-8 md:p-8">

        <p className="mb-3 text-[11px] uppercase tracking-[0.18em] text-[#8A8175]">
          🌙 Dream of the Day
        </p>

        {(category || readingTime) && (
          <div className="mb-4 flex flex-wrap items-center gap-3 text-xs uppercase tracking-wide text-[#8A8175]">

            {category && (
              <span className="rounded-full bg-[#F7F3EC] px-3 py-1">
                {category}
              </span>
            )}

            <span>⏱ {readingTime} min read</span>

          </div>
        )}

        <h2 className="font-serif text-4xl leading-tight text-[#1A1A1A] md:text-5xl">
          {dream.title}
        </h2>

        <p className="mt-5 text-base leading-8 text-[#6B6B6B]">
          {getDreamExcerpt(dream, 220)}
        </p>

        <div className="mt-6 flex flex-wrap gap-2">

          <span className="rounded-full bg-[#F7F3EC] px-3 py-1 text-xs">
            🕊 Spiritual
          </span>

          <span className="rounded-full bg-[#F7F3EC] px-3 py-1 text-xs">
            ✨ Symbolic
          </span>

          <span className="rounded-full bg-[#F7F3EC] px-3 py-1 text-xs">
            📖 Biblical
          </span>

        </div>

        <Link
          href={getDreamHref(dream)}
          className="mt-8 inline-flex w-fit items-center rounded-full bg-[#1A1A1A] px-6 py-3 text-sm font-medium text-white transition hover:bg-[#333] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C6A96B] focus-visible:ring-offset-2"
        >
          Explore Meaning →
        </Link>

      </div>

    </article>
  );
}
