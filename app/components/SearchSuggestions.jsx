import Link from "next/link";
import { getDreamHref } from "@/lib/routes";

const searches = [
  "Snake",
  "Death",
  "Water",
  "House",
  "Baby",
  "Flying",
  "Wedding",
  "Rain",
];

export default function SearchSuggestions() {
  return (
    <div className="mt-5">
      <p className="mb-3 text-xs uppercase tracking-[0.18em] text-[#8A8175]">
        Popular Searches
      </p>

      <div className="flex flex-wrap justify-center gap-3">
        {searches.map((item) => (
          <Link
            key={item}
            href={getDreamHref(item)}
            className="rounded-full border border-[#EAE6E1] bg-white px-4 py-2 hover:border-[#C6A96B]"
          >
            {item}
          </Link>
        ))}
      </div>
    </div>
  );
}
