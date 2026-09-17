import Link from "next/link";
import SiteFooter from "@/app/components/SiteFooter";
import SiteHeader from "@/app/components/SiteHeader";
import { dreams } from "@/data/dream";
import { getDreamImage } from "@/lib/dreamEngagement";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Popular, Recurring, and Unusual Dreams",
  description:
    "Explore curated collections of popular, recurring, and unusual dreams using DreamScriptures' canonical dream interpretations.",
  path: "/guides/discover",
});

const popularDreamSlugs = [
  "snake",
  "falling",
  "chased",
  "being-chased-by-a-lion",
  "teeth-falling-out",
  "water",
  "death",
  "flying",
  "money",
  "pregnant",
];

const recurringDreamSlugs = [
  "chased",
  "falling",
  "being-lost",
  "missing-a-flight",
  "being-late",
  "teeth-falling-out",
  "going-back-to-school",
  "being-unable-to-scream",
  "failing-an-exam",
  "repeating-the-same-dream",
];

const unusualDreamSlugs = [
  "music-playing-from-nowhere",
  "familiar-place-turned-eerie",
  "seeing-your-future-self",
  "tree-with-a-human-face",
  "seeing-multiple-moons",
  "reading-an-ancient-scroll",
  "floating-in-a-dark-void",
  "person-changing-into-an-animal",
  "being-in-outer-space",
  "stuck-in-a-loop",
];

const collections = [
  {
    id: "popular",
    eyebrow: "Familiar starting points",
    title: "Most Popular Dreams",
    intro: [
      "The dreams that most often bring people to DreamScriptures.",
    ],
    slugs: popularDreamSlugs,
  },
  {
    id: "recurring",
    eyebrow: "Patterns that return",
    title: "Most Recurring Dreams",
    intro: [
      "Dreams and experiences that people find themselves returning to again and again.",
    ],
    slugs: recurringDreamSlugs,
  },
  {
    id: "unusual",
    eyebrow: "Beyond familiar symbols",
    title: "Unusual Dreams",
    intro: [
      "Dreams that are strange, specific, surreal, or simply difficult to forget.",
    ],
    slugs: unusualDreamSlugs,
  },
];

const dreamBySlug = new Map(dreams.map((dream) => [dream.slug, dream]));

function resolveCollection({ title, slugs }) {
  if (new Set(slugs).size !== slugs.length) {
    throw new Error(`${title} contains duplicate canonical slugs.`);
  }

  return slugs.map((slug) => {
    const dream = dreamBySlug.get(slug);
    if (!dream) throw new Error(`${title} references missing canonical dream: ${slug}`);
    return dream;
  });
}

function DreamVisual({ dream, index }) {
  const image = getDreamImage(dream);

  if (image) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={image}
        alt=""
        loading="lazy"
        className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
      />
    );
  }

  return (
    <div
      aria-hidden="true"
      className="relative flex h-full w-full items-end overflow-hidden bg-[linear-gradient(145deg,#F8F0DF,#E7D8BC)] p-3"
    >
      <span className="absolute -right-5 -top-5 h-20 w-20 rounded-full border border-white/70" />
      <span className="absolute right-3 top-3 h-8 w-8 rounded-full bg-white/45 shadow-[0_0_28px_rgba(255,255,255,0.8)]" />
      <span className="relative font-serif text-sm text-[#806431]">
        {String(index + 1).padStart(2, "0")}
      </span>
    </div>
  );
}

function DreamCard({ dream, index }) {
  const hasDescription =
    typeof dream.shortDescription === "string" &&
    dream.shortDescription.trim().length > 0;

  return (
    <article className="group border border-[#DED7CD] bg-[#FFFDF9] transition hover:border-[#B89B62] hover:shadow-[0_16px_40px_rgba(73,57,29,0.08)]">
      <div className="grid h-full grid-cols-[5rem_1fr] sm:grid-cols-[6rem_1fr]">
        <div className="min-h-32 overflow-hidden border-r border-[#E5DED4]">
          <DreamVisual dream={dream} index={index} />
        </div>
        <div className="flex min-w-0 flex-col p-5 sm:p-6">
          <h3 className="font-serif text-xl leading-snug text-[#29251F] sm:text-2xl">
            {dream.title}
          </h3>
          {hasDescription ? (
            <p className="mt-3 line-clamp-4 text-sm leading-6 text-[#6B645C]">
              {dream.shortDescription}
            </p>
          ) : (
            <p className="mt-3 border-l-2 border-[#B89B62] pl-3 text-xs font-medium uppercase tracking-[0.08em] text-[#806431]">
              Missing canonical shortDescription
            </p>
          )}
          <Link
            href={`/dreams/${dream.slug}`}
            aria-label={`Read more about ${dream.title}`}
            className="mt-auto inline-flex min-h-10 items-end pt-4 text-sm font-medium text-[#806431] underline decoration-[#C6A96B] underline-offset-4"
          >
            Read more →
          </Link>
        </div>
      </div>
    </article>
  );
}

function DreamCollection({ collection, position }) {
  const collectionDreams = resolveCollection(collection);
  const missingDescriptions = collectionDreams.filter(
    (dream) =>
      typeof dream.shortDescription !== "string" ||
      !dream.shortDescription.trim()
  );

  return (
    <section
      id={collection.id}
      aria-labelledby={`${collection.id}-heading`}
      className={position > 0 ? "border-t border-[#DED7CD] py-16 md:py-24" : "py-7 md:py-9"}
    >
      <div className="grid gap-10 lg:grid-cols-[minmax(15rem,0.72fr)_minmax(0,1.55fr)] lg:gap-14">
        <div className="lg:sticky lg:top-24 lg:self-start">
          <p className="text-[11px] uppercase tracking-[0.2em] text-[#8F743C]">
            {collection.eyebrow}
          </p>
          <h2
            id={`${collection.id}-heading`}
            className="mt-3 font-serif text-4xl leading-tight text-[#29251F] md:text-5xl"
          >
            {collection.title}
          </h2>
          <div className="mt-6 space-y-5 leading-7 text-[#686159]">
            {collection.intro.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          {missingDescriptions.length > 0 && (
            <p className="mt-6 border-l-2 border-[#B89B62] pl-4 text-sm leading-6 text-[#70685F]">
              {missingDescriptions.length} selected {missingDescriptions.length === 1 ? "entry is" : "entries are"} flagged because the canonical data does not yet contain a short description.
            </p>
          )}
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {collectionDreams.map((dream, index) => (
            <DreamCard key={dream.slug} dream={dream} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default function DreamDiscoveryPage() {
  return (
    <main className="min-h-screen bg-[#F7F5F2] text-[#29251F]">
      <SiteHeader />
      <header className="border-b border-[#DED7CD] bg-[#FBF9F5]">
        <div className="mx-auto max-w-6xl px-6 py-6 md:py-8">
          <nav aria-label="Breadcrumb" className="text-sm text-[#81786E]">
            <Link href="/" className="hover:text-[#806431]">Home</Link>
            <span aria-hidden="true" className="mx-2">/</span>
            <Link href="/guides" className="hover:text-[#806431]">Guides</Link>
            <span aria-hidden="true" className="mx-2">/</span>
            <span>Discover</span>
          </nav>
          <h1 className="mt-5 max-w-4xl font-serif text-4xl leading-tight md:text-5xl">
            Dream Discovery
          </h1>
          <p className="mt-3 max-w-4xl font-serif text-xl leading-8 text-[#3F3932] md:text-2xl">
            Some dreams are familiar. Others stay with you because they’re impossible to forget.
          </p>
          <p className="mt-3 max-w-4xl leading-7 text-[#686159]">
            Explore popular dreams, recurring dreams, and some of the more unusual dreams in the DreamScriptures collection.
          </p>
          <p className="mt-4 max-w-4xl text-sm leading-6 text-[#746C63]">
            These lists are editorially curated rather than fixed rankings. Dreams are selected based on a combination of reader interest, recurring themes, and the distinctive qualities of the dreams themselves. As DreamScriptures grows, the collections may change too—new dreams are added, patterns emerge, and our editorial selection evolves.
          </p>
          <p className="mt-2 max-w-4xl text-sm leading-6 text-[#5F574F]">
            The goal isn&apos;t to tell you what your dream must mean. It&apos;s to give you a thoughtful place to begin exploring it.
          </p>
        </div>
      </header>

      <div className="mx-auto max-w-6xl px-6">
        {collections.map((collection, index) => (
          <DreamCollection key={collection.id} collection={collection} position={index} />
        ))}
      </div>
      <SiteFooter />
    </main>
  );
}
