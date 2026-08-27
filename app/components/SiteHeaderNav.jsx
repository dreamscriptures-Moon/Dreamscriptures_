"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

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
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="hidden items-center gap-1 text-xs md:flex lg:gap-4 lg:text-sm">
        {navItems.map(([label, href]) => {
          const isActive =
            pathname === href ||
            (href !== "/" && pathname.startsWith(`${href}/`));

          return (
            <NavLink href={href} isActive={isActive} key={href} label={label} />
          );
        })}
      </div>

      <button
        aria-controls="mobile-site-navigation"
        aria-expanded={isOpen}
        aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
        className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-md border border-[#D8D1C8] text-xl text-[#3F3932] md:hidden"
        onClick={() => setIsOpen((current) => !current)}
        type="button"
      >
        <span aria-hidden="true">{isOpen ? "×" : "☰"}</span>
      </button>

      {isOpen && (
        <div
          className="absolute inset-x-4 top-[calc(100%+0.5rem)] z-[60] rounded-xl border border-[#DED7CD] bg-[#FAF8F5] p-3 shadow-xl md:hidden"
          id="mobile-site-navigation"
        >
          <div className="grid grid-cols-2 gap-1">
            {navItems.map(([label, href]) => {
              const isActive =
                pathname === href ||
                (href !== "/" && pathname.startsWith(`${href}/`));

              return (
                <NavLink
                  href={href}
                  isActive={isActive}
                  key={href}
                  label={label}
                  mobile
                  onNavigate={() => setIsOpen(false)}
                />
              );
            })}
          </div>
        </div>
      )}
    </>
  );
}

function NavLink({ href, isActive, label, mobile = false, onNavigate }) {
  return (
    <Link
      href={href}
      className={`rounded-md px-3 py-3 transition-colors duration-200 ${
        mobile ? "min-h-11 text-sm" : "px-2 py-2 lg:px-3"
      } ${
        isActive
          ? "bg-[#EEE8DE] text-[#1A1A1A]"
          : "text-[#6B6B6B] hover:bg-[#F2EEE8] hover:text-[#8F743C]"
      }`}
      aria-current={isActive ? "page" : undefined}
      onClick={onNavigate}
    >
      {label}
    </Link>
  );
}
