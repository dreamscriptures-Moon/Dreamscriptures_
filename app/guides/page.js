import Link from "next/link";
import GuidesSearchList from "@/app/components/GuidesSearchList";
import LazyMobileQuickNav from "@/app/components/LazyMobileQuickNav";
import SearchBar from "@/app/components/SearchBar";
import SiteFooter from "@/app/components/SiteFooter";
import SiteHeader from "@/app/components/SiteHeader";
import DreamSchoolGrid from "@/app/components/DreamSchoolGrid";
import { getAllGuideEntries } from "@/lib/guideCatalog";
import { createGuideMetadata } from "@/lib/guideExperience";


export const metadata = createGuideMetadata({ slug: "", title: "Dream Guides & Knowledge Hub", description: "Explore dream psychology, sleep science, spirituality, symbolism, wellness, interpretation, and modern research." });

const guideSearchItems = getAllGuideEntries();

export default function GuidesPage() {
  return (
    <main className="bg-[#F7F5F2] min-h-screen">
      <SiteHeader  />

      <section className="max-w-3xl mx-auto px-6 py-2 md:py-32">
        
        <nav className="text-sm text-[#6B6B6B] mb-6">
          <Link href="/">Home</Link> / <span>Guides</span>
        </nav>
        
  <h1 className="text-4xl md:text-5xl font-serif mb-6">
  Dreams Guide & Knowledge Hub
</h1>

<p className="text-[#6B6B6B] text-base md:text-lg leading-relaxed mb-6">
  Explore dream psychology, sleep science, spirituality,
  symbolism, wellness and modern research through eight carefully
  organized learning libraries designed to help you understand
  dreams from multiple perspectives.
</p>

<div className="flex flex-wrap gap-3 text-sm text-[#6B6B6B] mb-8">
  <span>📚 8 Learning Libraries</span>
  <span>🧠 100+ Guides</span>
  <span>🌍 Psychology • Science • Spirituality</span>
</div>

<LazyMobileQuickNav />
<section className="mb-9 text-center">
  <p className="text-sm text-[#6B6B6B] mb-3">
    Search a dream or topic
  </p>

  <SearchBar />
</section>    

<DreamSchoolGrid />

<section className="my-16">

<h2 className="font-serif text-3xl mb-3">
Popular Dream Guides</h2>

<p className="text-[#6B6B6B] mb-8">
Explore the dream topics readers search for most often.
</p>

<div className="grid gap-4 md:grid-cols-2">

<Link
href="/guides/what-are-dreams"
className="bg-white border rounded-xl p-5 hover:shadow-sm"
>

<h3 className="font-serif text-xl mb-2">
What Are Dreams?
</h3>

<p className="text-[#6B6B6B]">
Learn what dreams are and why humans dream every night.
</p>

</Link>

<Link
href="/guides/why-we-dream"
className="bg-white border rounded-xl p-5 hover:shadow-sm"
>

<h3 className="font-serif text-xl mb-2">
Why Do We Dream?
</h3>

<p className="text-[#6B6B6B]">
Explore scientific, psychological and spiritual perspectives.
</p>

</Link>

<Link
href="/guides/lucid-dreaming"
className="bg-white border rounded-xl p-5 hover:shadow-sm"
>

<h3 className="font-serif text-xl mb-2">
 Lucid Dreaming
</h3>

<p className="text-[#6B6B6B]">
Understand conscious dreaming and current research.
</p>

</Link>

<Link
href="/guides/nightmares-meaning"
className="bg-white border rounded-xl p-5 hover:shadow-sm"
>

<h3 className="font-serif text-xl mb-2">
Nightmares
</h3>

<p className="text-[#6B6B6B]">
Why nightmares happen and what research suggests.
</p>

</Link>

</div>

</section>

<section className="mb-16">

  <h2 className="font-serif text-3xl mb-6">
 Why DreamScriptures Takes a Multi-Perspective Approach </h2>

  <p className="text-[#6B6B6B] leading-relaxed mb-6">
    DreamScriptures explores dreams through psychology,
    neuroscience, spirituality, symbolism, history,
    wellness and personal experience.
  </p>

  <p className="text-[#6B6B6B] leading-relaxed mb-6">
    Rather than assigning one fixed meaning to every dream,
    our guides encourage thoughtful interpretation by combining
    emotion, context, memory and subconscious patterns.
  </p>

  <p className="text-[#6B6B6B] leading-relaxed">
    Whether you&apos;re reading about nightmares,
    lucid dreaming, recurring dreams or spiritual symbolism,
    every guide is designed to help you build a deeper
    understanding of dreams.
  </p>

</section>

<h2 className="font-serif text-3xl mb-6">
Browse Every Dream Guide
</h2>

<p className="text-[#6B6B6B] mb-8">
Explore every guide in the DreamScriptures Knowledge Hub,
organized to help you understand dreams through science,
psychology, spirituality, symbolism and personal reflection.
</p>

<GuidesSearchList guides={guideSearchItems} />


     </section>

  <section className="mt-16 text-center">

<h2 className="font-serif text-2xl mb-4">
Continue Exploring
</h2>

<p className="text-[#6B6B6B]">

<Link href="/dreams">
Dream Dictionary
</Link>

{" • "}

<Link href="/categories">
Dream Categories
</Link>

{" • "}

<Link href="/dreams">
Popular Dreams
</Link>

</p>

</section>


      <section className="mt-20 border-t border-[#EAE6E1] pt-10 text-center">
        <h2 className="font-serif text-2xl md:text-3xl mb-4">
          Explore your own dream
        </h2>

        <p className="text-[#6B6B6B] mb-6">
          Search a symbol, person, or dream theme.
        </p>

        <SearchBar />
      </section>

      <SiteFooter />
    </main>
  );
}
