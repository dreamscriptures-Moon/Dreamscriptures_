import Link from "next/link";
import SiteFooter from "@/app/components/SiteFooter";
import SiteHeader from "@/app/components/SiteHeader";
import { guides } from "@/app/data/guides";

export const dynamic = "force-dynamic";
export const metadata = {
  title: "Dream Guides",
}

export default function GuidesPage() {
  return (
    <main className="bg-[#F7F5F2] min-h-screen">
      <SiteHeader />

      <section className="max-w-3xl mx-auto px-6 py-20 md:py-32">
        <h1 className="text-4xl md:text-5xl font-serif mb-6">Guides</h1>

        <p className="text-[#6B6B6B] text-base md:text-lg mb-16 leading-relaxed">
          A deeper look into how dreams work, why they happen, and how to
          understand them.
        </p>

        <div className="space-y-6">
          {guides.map((guide) => (
            <Link
              key={guide.slug}
              href={`/guides/${guide.slug}`}
              className="block border border-[#EAE6E1] p-6 rounded-xl bg-white hover:border-[#C6A96B] transition"
            >
              <span className="block text-[11px] tracking-wide text-[#A89F91] mb-1">
                GUIDE
              </span>
              <span className="block font-medium text-base md:text-lg">
                {guide.title}
              </span>
              <span className="block text-sm text-[#6B6B6B] mt-2">
                {guide.description}
              </span>
            </Link>
          ))}
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
