import Link from "next/link";
import LazyMobileQuickNav from "@/app/components/LazyMobileQuickNav";
import SiteFooter from "@/app/components/SiteFooter";
import SiteHeader from "@/app/components/SiteHeader";
import HomeSearchWrapper from "./components/HomeSearchWrapper";


const popularDreams = [
  { title: "Falling", slug: "falling" },
  { title: "Snakes", slug: "snakes" },
  { title: "Being Chased", slug: "being-chased" },
  { title: "Teeth Falling Out", slug: "teeth-falling-out" },
  { title: "Flying", slug: "flying" },
  { title: "Water", slug: "water" },
];

const featuredGuides = [
  {
    slug: "why-we-dream",
    title: "Why do we dream?",
    desc: "Understanding what dreams are and why they happen.",
  },
  {
    slug: "recurring-dreams",
    title: "Recurring dreams",
    desc: "Why some dreams repeat and what they might mean.",
  },
  {
    slug: "nightmares",
    title: "Nightmares",
    desc: "What causes intense or disturbing dreams.",
  },
  {
    slug: "dreams-and-emotions",
    title: "Dreams and emotions",
    desc: "How your emotional state shapes your dreams.",
  },
];

export default function Home() {
  return (
<main className="bg-[#F7F5F2] text-[#1A1A1A] min-h-screen">
  <SiteHeader />

  {/* HERO */}
  <section className="max-w-3xl mx-auto px-6 pt-16 md:pt-24 pb-14 text-center">

    <h1 className="text-4xl md:text-5xl lg:text-6xl leading-[1.15] font-serif tracking-tight mb-6">
      Dream meanings, symbols & deeper interpretation
    </h1>

    <p className="text-[#6B6B6B] text-base md:text-lg leading-relaxed max-w-2xl mx-auto mb-6">
      Explore hundreds of dream meanings, including 
      <Link href="/dreams/teeth-falling-out" className="underline mx-1">
        teeth falling out dreams
      </Link>
      and
      <Link href="/dreams/being-chased" className="underline mx-1">
        being chased dreams
      </Link>
      through emotional, symbolic, spiritual, and waking-life perspectives.
    </p>

    <p className="text-[11px] uppercase tracking-[0.28em] text-[#8A8175]">
      Dreams do not follow one fixed meaning. What matters most is what your dream may be reflecting.
    </p>

   <div className="w-26 h-[1px] bg-[#EAE6E1] mx-auto mt-6 mb-3" />
  </section>

 <LazyMobileQuickNav />

  {/* EXPLANATION */}
  <section className="max-w-3xl mx-auto px-6 pb-12 text-left">
    <h2 className="text-2xl md:text-3xl font-serif mb-4">
      What do dreams really mean?
    </h2>

    <p className="text-[#6B6B6B] leading-relaxed mb-4">
      Dream meanings often reflect your emotions, experiences, and subconscious thoughts. 
      Whether you dream about falling, being chased, snakes, or losing teeth, these symbols 
      can represent fear, change, stress, or transformation in your waking life.
    </p>

    <p className="text-[#6B6B6B] leading-relaxed">
      Understanding your dreams involves looking at emotional patterns, symbolic meaning, 
      spiritual interpretation, and real-life context. Explore our dream dictionary to 
      discover what your dreams may be trying to tell you.
    </p>
  </section>

  {/* 🔥 SEARCH (moved here) */}
  <section className="max-w-3xl mx-auto px-6 pb-16 text-center">
    <div className="max-w-md mx-auto">
     <HomeSearchWrapper />
    </div>
  </section>

  {/* SEO INTERNAL LINKS */}
  <section className="max-w-3xl mx-auto px-6 pb-8 text-left">
    <p className="text-sm text-[#6B6B6B]">
      Some of the most searched dream meanings include{" "}
      <Link href="/dreams/teeth-falling-out" className="underline">
        teeth falling out
      </Link>
      ,{" "}
      <Link href="/dreams/being-chased" className="underline">
        being chased
      </Link>
      , and{" "}
      <Link href="/dreams/falling" className="underline">
        falling dreams
      </Link>
      .
    </p>
  </section>

      <section className="max-w-xl mx-auto px-6 py-2 md:py-22">
        <h2 className="text-4xl md:text-5xl mb-4 text-center font-serif">
          Popular dream meanings
        </h2>
        <div className="w-24 h-[1px] bg-[#C6A96B] mx-auto mb-8 opacity-60" />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {popularDreams.map((dream) => (
            <Link
              key={dream.slug}
              href={`/dreams/${dream.slug}`}
              className="block border border-[#EAE6E1] p-6 rounded-xl hover:border-[#C6A96B] hover:bg-white/40 transition"
            >
              <p className="text-base md:text-lg font-medium">{dream.title}</p>
             <p className="text-sm text-[#6B6B6B] mt-2">
              Explore the meaning of this dream and what it may reveal
             </p>
            </Link>
          ))}
        </div>
      </section>

      <div className="text-center mt-8">
  <Link
    href="/categories"
    className="text-sm text-[#6B6B6B] hover:text-[#1A1A1A] transition"
  >
    Browse all dream categories →
  </Link>
</div>

      <section className="bg-[#FAF9F7] px-6 py-20 md:py-32 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl mb-6 font-serif">
            How interpretation works
          </h2>
          <p className="text-[#6B6B6B] text-base md:text-lg leading-relaxed">
            Dreams are not one-size-fits-all. The same dream can mean different
            things depending on your emotions, your experiences, and what is
            happening in your life.
          </p>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-6 py-20 md:py-32">
        <h2 className="text-4xl md:text-5xl font-serif mb-10 text-center">
          Guides
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {featuredGuides.map((guide) => (
            <Link
              key={guide.slug}
              href={`/guides/${guide.slug}`}
              className="block border border-[#EAE6E1] p-6 rounded-xl bg-white hover:border-[#C6A96B] transition"
            >
              <span className="block font-medium text-base md:text-lg">
                {guide.title}
              </span>
              <span className="block text-sm text-[#6B6B6B] mt-2">
                {guide.desc}
              </span>
            </Link>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Link
            href="/guides"
            className="text-sm text-[#6B6B6B] hover:text-[#1A1A1A] transition"
          >
            Browse all guides →
          </Link>
        </div>
      </section>

<a
  href="/about"
  className="block max-w-5xl mx-auto px-6 pb-24"
>
  <section className="bg-[#FAF8F5] border border-[#EAE6E1] rounded-2xl px-8 md:px-12 py-12 hover:border-[#C6A96B] transition duration-300">

    <p className="text-[11px] uppercase tracking-[0.2em] text-[#8A8175] mb-4">
      About DreamScriptures
    </p>

    <h2 className="text-3xl md:text-4xl font-serif leading-tight mb-5 text-[#1A1A1A]">
      A more thoughtful way to understand dreams
    </h2>

    <p className="text-[#4A4A4A] max-w-2xl leading-relaxed text-base md:text-lg">
      We explore dreams through symbolism, emotional patterns, spiritual traditions,
      cultural perspectives, and modern dream research.
    </p>

    <div className="mt-8 inline-flex items-center gap-2 text-sm text-[#6B6B6B] group">
      <span className="group-hover:text-[#1A1A1A] transition">
        Learn more about our approach
      </span>
      <span className="group-hover:translate-x-1 transition">
        →
      </span>
    </div>

  </section>
</a>
<section className="max-w-xl mx-auto px-6 py-1 text-center">

  <div className="border-t border-[#EAE6E1] pt-16">

    <p className="font-serif text-3xl md:text-5xl leading-tight text-[#1A1A1A] max-w-3xl mx-auto">
      “Dreams speak in symbols when words are no longer enough.”
    </p>

    <p className="mt-8 text-sm tracking-[0.18em] uppercase text-[#8A8175]">
      DreamScriptures
    </p>

  </div>

</section>

      <SiteFooter />
    </main>
  );
}
