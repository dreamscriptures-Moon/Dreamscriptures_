import { dreams } from "@/data/dream";
import DreamDictionaryControls from "@/app/components/DreamDictionaryControls";
import SiteFooter from "@/app/components/SiteFooter";
import SiteHeader from "@/app/components/SiteHeader";
import LazyMobileQuickNav from "../components/LazyMobileQuickNav";
function normalizeCategory(cat = "") {
  const c = cat.toLowerCase().trim();

  if (c === "relationships") return "relationship";
  if (c === "emotions") return "emotion";

  return c;
}

function formatCategory(cat) {
  return cat.charAt(0).toUpperCase() + cat.slice(1);
}

const categories = [
  ...new Set(dreams.flatMap((d) => (d.categories || []).map(normalizeCategory))),
].map((cat) => ({
  slug: cat,
  label: formatCategory(cat),
}));

const searchableDreams = dreams.map((dream) => ({
  slug: dream.slug,
  title: dream.title,
  normalizedTitle: dream.title.toLowerCase(),
  description: `${(dream.description || "").slice(0, 90)}...`,
  categoryKeys: (dream.categories || []).map(normalizeCategory),
}));

export default function DreamDictionaryPage() {
  return (
    <main className="bg-[#FAF8F5] min-h-screen">
      <SiteHeader />
      <div className="max-w-6xl mx-auto center px-6 py-12">
        <h1 className="text-4xl md:text-5xl font-serif mb-5">
          Dreams dictionary
        </h1>

        <div className="w-12 h-[1px] bg-[#C6A96B] mb-6" />

        <p className="text-[#6B6B6B] leading-relaxed text-base md:text-lg mb-10 max-w-2xl">
  Dreams rarely appear randomly. Many reflect emotional patterns,
  fears, unresolved tension, inner change, emotional pressure, or
  experiences unfolding beneath the surface of waking life.

  <br />
  <br />

  Explore dream meanings through emotional themes, symbolic patterns,
  psychological experiences, and recurring situations that often
  connect dreams together in deeper ways than the symbols alone.
</p>
<LazyMobileQuickNav />

        <DreamDictionaryControls
          dreams={searchableDreams}
          categories={categories}
        />
        
      </div>
      <SiteFooter />
    </main>
  );
}
