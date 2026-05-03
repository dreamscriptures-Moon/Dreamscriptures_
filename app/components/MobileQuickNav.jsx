"use client";

import Link from "next/link";

export default function MobileQuickNav() {
  return (
    <section className="md:hidden px-6 pb-6">
      <div className="flex gap-3 overflow-x-auto no-scrollbar">

        <Link
          href="/categories"
          className="whitespace-nowrap px-4 py-2 border border-[#EAE6E1] rounded-full text-sm bg-white"
        >
          Categories
        </Link>

        <Link
          href="/guides"
          className="whitespace-nowrap px-4 py-2 border border-[#EAE6E1] rounded-full text-sm bg-white"
        >
          Guides
        </Link>

        <Link
          href="/dreams/teeth-falling-out"
          className="whitespace-nowrap px-4 py-2 border border-[#EAE6E1] rounded-full text-sm bg-white"
        >
          Popular
        </Link>

      </div>
    </section>
  );
}
