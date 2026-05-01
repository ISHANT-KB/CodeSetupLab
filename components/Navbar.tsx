// ─────────────────────────────────────────────
// NAVBAR — Sticky top navigation.
// To add a new page link, add an item to navLinks.
// ─────────────────────────────────────────────

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Best Laptops", href: "/best-laptops" },
  { label: "Blog", href: "/blogs" },
  // ADD NEW PAGE LINKS HERE ↓
  // { label: "Accessories", href: "/accessories" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-sm border-b border-gray-100 shadow-sm">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <span className="text-xl font-black tracking-tight text-gray-900 font-mono">
            {"<"}
            <span className="text-emerald-500">Code</span>
            SetupLab
            {"/>"}
          </span>
        </Link>

        {/* Nav Links */}
        <ul className="flex items-center gap-1">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? "bg-gray-900 text-white"
                      : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}