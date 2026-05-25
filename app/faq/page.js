import Link from "next/link";
import Script from "next/script";

import LazyMobileQuickNav from "@/app/components/LazyMobileQuickNav";
import SiteFooter from "@/app/components/SiteFooter";
import SiteHeader from "@/app/components/SiteHeader";

const faqItems = [
  {
    question: "How does DreamScriptures interpret dreams?",
    answer:
      "DreamScriptures approaches dreams through emotional tone, symbolic behavior, subconscious patterns, spiritual nuance, and waking-life context. A dream is not treated as a fixed code with one universal answer. The same symbol can carry very different meanings depending on fear, relief, grief, stress, vulnerability, uncertainty, or emotional transition surrounding the experience.",
  },

  {
    question: "Are dream meanings fixed?",
    answer:
      "No. Dream meanings are rarely fixed or universal. A symbol may carry common emotional patterns, but the meaning changes depending on context, personal history, emotional atmosphere, cultural background, relationships, memory, and current life circumstances. A snake dream, for example, may reflect fear for one person and transformation for another.",
  },

  {
    question: "Why does emotional tone matter so much in dream interpretation?",
    answer:
      "The emotional atmosphere often reveals more than the symbol itself. Water may feel peaceful in one dream and emotionally overwhelming in another. A house may feel comforting, abandoned, unsafe, or unfamiliar. DreamScriptures focuses heavily on emotional tone because the subconscious often communicates through emotional experience rather than direct explanation.",
  },

  {
    question: "Why do dreams feel so real?",
    answer:
      "Dreams can feel emotionally real because many parts of the brain connected to emotion, imagery, memory, fear, and perception remain active during sleep. Logical evaluation becomes quieter, which allows impossible experiences to feel believable while they are happening. Even after waking, the emotional impact can remain surprisingly strong.",
  },

  {
    question: "Why do recurring dreams happen?",
    answer:
      "Recurring dreams often reflect emotional patterns that remain unresolved beneath the surface. The dream may repeat because the emotional state connected to it is still active — fear, pressure, grief, uncertainty, longing, avoidance, emotional conflict, or transition. Sometimes the storyline changes while the emotional atmosphere remains the same.",
  },

  {
    question: "Can dreams reflect stress or emotional pressure?",
    answer:
      "Yes. Dreams frequently organize emotional tension into symbolic experiences. Stress, burnout, uncertainty, grief, fear, emotional overload, relationship conflict, and internal pressure can all appear symbolically during sleep. Dreams may exaggerate emotions so they become easier to emotionally recognize.",
  },

  {
    question: "What makes DreamScriptures different from dream dictionaries?",
    answer:
      "Most dream dictionaries focus on short symbolic definitions. DreamScriptures focuses on emotional realism, symbolic layering, subconscious patterns, spiritual openness, and interconnected emotional meaning. The goal is not simply to define symbols, but to understand the emotional experience surrounding them.",
  },

  {
    question: "Are dreams spiritual?",
    answer:
      "Some dreams can feel spiritually significant, emotionally profound, or deeply reflective. Others may simply process stress, memory, emotion, fear, or daily experience. DreamScriptures keeps both possibilities open without forcing every dream into supernatural certainty or fear-based interpretation.",
  },

  {
    question: "Do dreams predict the future?",
    answer:
      "Dreams are not treated here as guaranteed predictions. However, some dreams may feel meaningful because the subconscious notices emotional patterns, tension, change, or uncertainty before conscious awareness fully recognizes them. DreamScriptures approaches these experiences carefully and avoids absolute claims.",
  },

  {
    question: "Why do nightmares happen?",
    answer:
      "Nightmares often appear during periods of emotional overwhelm, stress, fear, unresolved tension, anxiety, grief, trauma, exhaustion, or instability. They may reflect emotional states that feel difficult to process directly while awake. What matters most is usually not only the frightening imagery, but the emotional pressure underneath it.",
  },

  {
    question: "Why do some dreams stay with you for years?",
    answer:
      "Certain dreams leave stronger emotional impressions than others. Sometimes this happens because the dream carried unusual emotional intensity, symbolic clarity, personal relevance, or emotional recognition. The dream may fade visually while the emotional atmosphere remains emotionally active for a long time afterward.",
  },

  {
    question: "How should I approach interpreting my own dreams?",
    answer:
      "Start with the emotional atmosphere before trying to force symbolic definitions. Ask what feeling remained strongest after waking. Fear, grief, pressure, longing, uncertainty, relief, emotional release, vulnerability, or transition often reveal more than isolated symbols alone. Then consider how similar emotional patterns may already exist in waking life.",
  },

  {
    question: "Can the same dream symbol mean different things?",
    answer:
      "Yes. Symbols are flexible rather than fixed. Fire may symbolize destruction, transformation, anger, passion, cleansing, fear, or emotional intensity depending on the emotional context of the dream. DreamScriptures avoids rigid interpretation because the subconscious communicates relationally rather than mechanically.",
  },

  {
    question: "Why do dreams sometimes feel emotionally confusing?",
    answer:
      "Dreams often combine memory, fear, imagination, stress, attachment, symbolism, and emotional association into experiences that do not follow normal logic. The subconscious prioritizes emotional connection over chronological structure, which can make dreams difficult to explain clearly after waking.",
  },
];

export const metadata = {
  title: "Dream Interpretation FAQ | DreamScriptures",

  description:
    "Explore thoughtful answers about dream meanings, emotional symbolism, recurring dreams, nightmares, subconscious patterns, and the DreamScriptures interpretation approach.",

  alternates: {
    canonical: "https://www.dreamscriptures.com/faq",
  },
};

function getFAQSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",

    mainEntity: faqItems.map((item) => ({
      "@type": "Question",

      name: item.question,

      acceptedAnswer: {
        "@type": "Answer",

        text: item.answer,
      },
    })),
  };
}

export default function FAQPage() {
  return (
    <main className="min-h-screen bg-[#FAF8F5]">
      <SiteHeader />

      <article className="mx-auto max-w-4xl px-6 py-10 md:py-28">
        <nav
          aria-label="Breadcrumb"
          className="mb-8 text-sm text-[#6B6B6B]"
        >
          <Link href="/" className="transition hover:text-[#8F743C]">
            Home
          </Link>{" "}
          / <span>FAQ</span>
        </nav>

        <p className="mb-4 text-[11px] uppercase tracking-[0.2em] text-[#8A8175]">
          DreamScriptures FAQ
        </p>

        <h1 className="mb-6 font-serif text-4xl leading-tight md:text-5xl">
          Frequently Asked Questions About Dream Meaning
        </h1>

        <p className="max-w-3xl text-lg leading-relaxed text-[#6B6B6B]">
          Thoughtful answers about dream interpretation, emotional symbolism,
          recurring dreams, nightmares, subconscious patterns, spiritual
          reflection, and how DreamScriptures approaches emotional dream meaning.
        </p>

        <section className="mt-12 border-l border-[#D8C7A0] bg-white/60 px-6 py-7">
          <p className="text-base leading-[1.9] text-[#5F574E] md:text-lg">
            Dreams rarely feel emotionally random while they are happening.
            Even when difficult to explain afterward, they often carry patterns
            connected to fear, pressure, uncertainty, attachment, grief,
            transformation, memory, longing, or emotional transition.
          </p>

          <p className="mt-5 text-base leading-[1.9] text-[#5F574E] md:text-lg">
            DreamScriptures approaches dreams through emotional realism,
            symbolic flexibility, subconscious pattern recognition, and
            spiritually open reflection rather than fixed symbolic definitions
            alone.
          </p>
        </section>

        <LazyMobileQuickNav />

        <div className="mt-16 space-y-2">
          {faqItems.map((item) => (
            <section
              key={item.question}
              className="border-t border-[#EAE6E1] pt-10 md:pt-12"
            >
              <h2 className="font-serif text-2xl leading-snug text-[#1A1A1A] md:text-3xl">
                {item.question}
              </h2>

              <p className="mt-5 text-base leading-[1.9] text-[#5F574E] md:text-lg">
                {item.answer}
              </p>
            </section>
          ))}
        </div>

        <section className="mt-20 border-y border-[#EAE6E1] bg-white/70 px-6 py-10">
          <p className="mb-3 text-[11px] uppercase tracking-[0.18em] text-[#8A8175]">
            Continue exploring
          </p>

          <h2 className="font-serif text-3xl leading-tight">
            Explore deeper dream pathways
          </h2>

          <p className="mt-4 max-w-2xl text-base leading-[1.9] text-[#6B6B6B]">
            Move from general questions into emotional dream categories,
            symbolic guides, recurring dream patterns, and long-form
            interpretations built around emotional meaning rather than fixed
            definitions alone.
          </p>

          <div className="mt-6 flex flex-wrap gap-4 text-sm">
            <Link
              href="/dreams"
              className="underline underline-offset-4 transition hover:text-[#8F743C]"
            >
              Dream meanings
            </Link>

            <Link
              href="/emotions"
              className="underline underline-offset-4 transition hover:text-[#8F743C]"
            >
              Emotional hubs
            </Link>

            <Link
              href="/guides"
              className="underline underline-offset-4 transition hover:text-[#8F743C]"
            >
              Dream guides
            </Link>

            <Link
              href="/author"
              className="underline underline-offset-4 transition hover:text-[#8F743C]"
            >
              Interpretation approach
            </Link>
          </div>
        </section>
      </article>

      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(getFAQSchema()),
        }}
      />

      <SiteFooter />
    </main>
  );
}