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

export default function CategoriesPage() {
  const categories = [
    ...new Set(
      dreams.flatMap((d) => (d.categories || []).map(normalizeCategory))
    ),
  ];

  return (
    <main className="bg-[#F7F5F2] min-h-screen">
      <SiteHeader />

      <section className="max-w-3xl mx-auto px-6 py-20 md:py-32">
        <h1 className="text-4xl md:text-5xl font-serif mb-10">
          Browse by category
        </h1>

        <div className="grid md:grid-cols-2 gap-6">
          {categories.map((cat) => (
            <Link
              key={cat}
              href={`/categories/${normalizeSlug(cat)}`}
              className="border border-[#EAE6E1] p-6 rounded-xl bg-white block hover:border-[#C6A96B] transition"
            >
              <span className="font-medium capitalize text-base md:text-lg">
                {formatCategory(cat)}
              </span>
            </Link>
          ))}
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
