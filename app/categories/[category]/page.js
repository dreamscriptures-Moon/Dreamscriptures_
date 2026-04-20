import Link from "next/link";
import SiteFooter from "@/app/components/SiteFooter";
import SiteHeader from "@/app/components/SiteHeader";
import { dreams } from "@/data/dream";
import { normalizeSlug } from "@/lib/normalizeSlug";

function normalizeCategory(cat = "") {
  const c = cat.toLowerCase().trim();

  if (c === "relationships") return "relationship";
  if (c === "emotions") return "emotion";

  return c;
}

function formatCategory(cat) {
  return cat.charAt(0).toUpperCase() + cat.slice(1);
}

export default async function CategoryPage({ params }) {
  const { category } = await params;
  const normalizedCategory = normalizeCategory(String(category).replace(/-/g, " "));
  const filteredDreams = dreams.filter((dream) =>
    dream.categories?.some((cat) => normalizeCategory(cat) === normalizedCategory)
  );

  return (
    <main className="bg-[#F7F5F2] min-h-screen">
      <SiteHeader />

      <section className="max-w-3xl mx-auto px-6 py-20 md:py-32">
        <h1 className="text-4xl md:text-5xl font-serif mb-10 capitalize">
          {formatCategory(normalizedCategory)} dreams
        </h1>

        <div className="space-y-4">
          {filteredDreams.map((dream) => (
            <Link
              key={dream.slug}
              href={`/dreams/${dream.slug}`}
              className="block border border-[#EAE6E1] p-5 rounded-lg bg-white hover:border-[#C6A96B] transition"
            >
              <span className="block font-medium text-base md:text-lg">
                {dream.title}
              </span>
              <span className="block text-sm text-[#6B6B6B] mt-1">
                {dream.description}
              </span>
            </Link>
          ))}
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
