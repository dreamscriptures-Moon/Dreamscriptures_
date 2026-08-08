"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  ["Dream Dictionary", "/dreams"],
  ["Categories", "/categories"],
  ["Emotions", "/emotions"],
  ["Guides", "/guides"],
  ["Submit Dream", "/submit-dream"],
  ["About", "/about"],
];

export default function SiteHeaderNav() {
  const pathname = usePathname();

  return (
    <div className="hidden items-center gap-1 text-xs md:flex lg:gap-4 lg:text-sm">
      {navItems.map(([label, href]) => {
        const isActive =
          pathname === href ||
          (href !== "/" && pathname.startsWith(`${href}/`));

        return (
          <Link
            key={href}
            href={href}
            className={`rounded-md px-2 py-2 transition-colors duration-200 lg:px-3 ${
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
