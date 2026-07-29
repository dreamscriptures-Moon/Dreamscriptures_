"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const QUICK_NAV_LINKS = [
  { href: "/dreams", label: "Dream Dictionary" },
  { href: "/categories", label: "Categories" },
  { href: "/guides", label: "Knowledge Hub" },
  { href: "/submit-dream", label: "Submit Dream" },
  { href: "/about", label: "About" },
];

export default function MobileQuickNav() {
  const pathname = usePathname();

  return (
    <nav className="md:hidden bg-[#F7F5F2]">
      <div className="flex gap-6 overflow-x-auto no-scrollbar px-1 py-5 text-sm">

        {QUICK_NAV_LINKS.map((link) => {
  const isActive =
    pathname === link.href ||
    (link.href !== "/dreams" && pathname.startsWith(link.href));

  return (
    <Link
      key={link.href}
      href={link.href}
      className={`whitespace-nowrap transition-colors duration-200 ${
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
