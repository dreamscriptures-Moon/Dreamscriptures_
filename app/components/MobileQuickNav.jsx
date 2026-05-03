"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const QUICK_NAV_LINKS = [
  { href: "/categories", label: "Categories" },
  { href: "/guides", label: "Guides" },
  { href: "/dreams", label: "Dreams" },
];

export default function MobileQuickNav() {
  const pathname = usePathname();

  return (
    <section className="md:hidden px-6 pb-6">
      <div className="flex gap-6 overflow-x-auto no-scrollbar text-sm">

        {QUICK_NAV_LINKS.map((link) => {
          const isActive = pathname.startsWith(link.href);

          return (
            <Link
              key={link.href}
              href={link.href}
              className={`whitespace-nowrap transition ${
                isActive
                  ? "text-[#1A1A1A] border-b border-[#C6A96B] pb-1"
                  : "text-[#6B6B6B] hover:text-[#1A1A1A]"
              }`}
            >
              {link.label}
            </Link>
          );
        })}

      </div>
    </section>
  );
}
