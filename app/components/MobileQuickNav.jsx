"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const QUICK_NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/dreams", label: "Dream Meanings" },
  { href: "/categories", label: "Categories" },
  { href: "/emotions", label: "Emotions" },
  { href: "/guides", label: "Guides" },
  { href: "/submit-dream", label: "Submit Dream" },
];

export default function MobileQuickNav() {
  const pathname = usePathname();

  return (
    <nav
      aria-label="Primary mobile navigation"
      className="relative bg-[#F7F5F2] after:pointer-events-none after:absolute after:inset-y-0 after:right-0 after:w-10 after:bg-gradient-to-l after:from-[#F7F5F2] after:to-transparent md:hidden"
    >
      <div className="no-scrollbar flex gap-6 overflow-x-auto py-4 pr-8 text-sm">

        {QUICK_NAV_LINKS.map((link) => {
  const isActive =
    pathname === link.href ||
    (link.href !== "/" && pathname.startsWith(`${link.href}/`));

  return (
    <Link
      key={link.href}
      href={link.href}
      className={`inline-flex min-h-11 items-center whitespace-nowrap transition-colors duration-200 ${
        isActive
          ? "text-[#C6A96B] font-medium"
          : "text-[#6B6B6B] hover:text-[#C6A96B]"
      }`}
    >
      {link.label}
    </Link>
  );
})}

      </div>
    </nav>
  );
}
