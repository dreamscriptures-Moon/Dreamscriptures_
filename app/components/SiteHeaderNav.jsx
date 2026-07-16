"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  ["Dream Dictionary", "/dreams"],
  ["Categories", "/categories"],
  ["Guides", "/guides"],
  ["About", "/about"],
];

export default function SiteHeaderNav() {
  const pathname = usePathname();

  return (
    <div className="hidden md:flex items-center gap-8 text-sm">
      {navItems.map(([label, href]) => {
        const isActive =
          pathname === href ||
          (href !== "/dreams" && pathname.startsWith(href));

        return (
          <Link
            key={href}
            href={href}
            className={`px-3 py-2 rounded-md transition-colors duration-200 ${
              isActive
                ? "text-[#1A1A1A]"
                : "text-[#6B6B6B] hover:text-[#C6A96B]"
            }`}
          >
            {label}
          </Link>
        );
      })}
    </div>
  );
}
