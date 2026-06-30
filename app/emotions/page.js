import Link from "next/link";
import SiteHeader from "@/app/components/SiteHeader";
import SiteFooter from "@/app/components/SiteFooter";
import LazyMobileQuickNav from "@/app/components/LazyMobileQuickNav";
import { emotionalHubs } from "@/data/emotionalHubs";

export default function EmotionsPage() {
  const emotions = Object.entries(emotionalHubs).map(([slug, data]) => ({
    slug,
    ...data,
  }));

  return (
    <main className="bg-[#F7F5F2] min-h-screen">
      <SiteHeader />

      <section className="max-w-3xl mx-auto px-6 py-2 md:py-32">
        <nav className="text-sm text-[#6B6B6B] mb-6">
          <Link href="/">Home</Link> / <span>Emotions</span>
        </nav>

        <LazyMobileQuickNav />

        <h1 className="text-4xl md:text-5xl font-serif mb-6">
          Explore Dreams Through Emotion
        </h1>

        <p className="text-[#6B6B6B] mb-10 leading-relaxed">
       Dreams are often remembered for their emotions long before their symbols.

Whether you woke feeling afraid, hopeful, overwhelmed, peaceful, confused or deeply connected, exploring the emotion behind a dream can reveal patterns that symbols alone cannot.
</p>

{/* On This Page */}
<section className="mb-16">

<nav className="bg-white border border-[#EAE6E1] rounded-3xl p-8">

<p className="text-[11px] uppercase tracking-[0.18em] text-[#8A8175] mb-3">

Explore this page

</p>

<ul className="space-y-2">

<li>
<a href="#why-emotions-matter">Why emotions matter</a>
</li>

<li>
<a href="#popular-emotions">Popular emotional themes</a>
</li>

<li>
<a href="#all-emotions">Browse all emotions</a>
</li>

<li>
<a href="#how-to-use">How to use these guides</a>
</li>

</ul>

</nav>

</section>

<section
id="why-emotions-matter"
className="mb-20"
>

<h2 className="font-serif text-3xl mb-6">

Why Emotions Matter More Than Symbols

</h2>

<p className="leading-relaxed text-[#6B6B6B]">

Two people can dream about the same snake,
house or ocean while experiencing completely different emotions.

The symbol may stay the same,
but the emotional experience often changes the meaning.

That&apos;s why DreamScriptures encourages looking at both the dream itself and how it made you feel.

</p>

</section>

<section
id="popular-emotions"
className="mb-16"
>

<h2 className="font-serif text-3xl mb-6">

Popular Emotional Themes

</h2>

<div className="flex flex-wrap gap-3">

<Link href="/emotions/fear-of-abandonment">

Fear of Abandonment

</Link>

<Link href="/emotions/emotional-overwhelm">

Emotional Overwhelm

</Link>

<Link href="/emotions/relationship-confusion">

Relationship Confusion

</Link>

<Link href="/emotions/unspoken-feelings">

Unspoken Feelings

</Link>

<Link href="/emotions/personal-growth">

Personal Growth

</Link>

</div>

</section>

        {/* Emotion grid */}
      <section
id="all-emotions"
className="grid gap-6"
>
    {emotions.map((emotion) => (
            <Link
              key={emotion.slug}
              href={`/emotions/${emotion.slug}`}
              className="group block border border-[#EAE6E1] rounded-2xl p-6 bg-[#FCFBF9] hover:border-[#C6A96B] transition"
            >
              <h2 className="font-serif text-2xl mb-2">
                {emotion.title}
              </h2>

              <p className="text-[#6B6B6B] text-sm leading-relaxed">
                {emotion.intro}
              </p>

              <p className="mt-4 text-[#8F743C] font-medium">
                Explore emotion →
              </p>
            </Link>
          ))}
        </section>
      </section>

<section
id="how-to-use"
className="mt-20"
>

<h2 className="font-serif text-3xl mb-6">

How to Use These Emotional Guides

</h2>

<div className="grid md:grid-cols-3 gap-6">

<div>

1️⃣

Find the emotion that best matches your dream.

</div>

<div>

2️⃣

Explore dreams commonly connected with that feeling.

</div>

<div>

3️⃣

Compare symbols, life situations and emotional patterns.

</div>

</div>

</section>
 
 <table>

<thead>

<tr>

<th>

Start with...

</th>

<th>

Best if...

</th>

</tr>

</thead>

<tbody>

<tr>

<td>

Dream Dictionary

</td>

<td>

You remember the symbol.

</td>

</tr>

<tr>

<td>

Emotion Guides

</td>

<td>

You remember how the dream felt.

</td>

</tr>

<tr>

<td>

Dream Categories

</td>

<td>

You remember the situation.

</td>

</tr>

<tr>

<td>

Dream Library

</td>

<td>

You want to learn more about dreaming.

</td>

</tr>

</tbody>

</table>

<section className="text-center mt-24 border-t border-[#EAE6E1] pt-14">

<h2 className="font-serif text-3xl mb-4">

Still exploring your dream?

</h2>

<p className="text-[#6B6B6B] mb-8">

Search hundreds of dream meanings or learn how DreamScriptures approaches dream interpretation.

</p>

<div className="flex justify-center gap-4 flex-wrap">

<Link href="/dreams">

Dream Dictionary →

</Link>

<Link href="/guides">

Dream Library →

</Link>

</div>

</section>
      <SiteFooter />
    </main>
  );
}
