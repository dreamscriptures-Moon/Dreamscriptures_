import { dreams } from "@/data/dreams";
import { notFound } from "next/navigation";

export const metadata = { robots: { index: false, follow: false } };

export default function DreamListPage() {
  if (process.env.NODE_ENV === "production") notFound();
  const sortedDreams = [...dreams].sort((a, b) =>
    a.title.localeCompare(b.title)
  );

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white p-8">
      <div className="max-w-5xl mx-auto">
        <div className="mb-10">
          <h1 className="text-5xl font-bold tracking-tight">
            Dream Library
          </h1>

          <p className="text-gray-500 mt-2">
            {sortedDreams.length} dream entries
          </p>
        </div>

        <div className="bg-white border border-gray-200 rounded-3xl shadow-sm overflow-hidden">
          {sortedDreams.map((dream, index) => (
            <div
              key={dream.slug}
              className="flex items-center gap-4 px-6 py-4 border-b last:border-b-0 hover:bg-gray-50 transition-colors"
            >
              <div className="text-gray-400 font-mono w-12">
                {index + 1}
              </div>

              <div className="font-medium">
                {dream.title}
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
