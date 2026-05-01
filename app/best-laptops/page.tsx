// ─────────────────────────────────────────────
// BEST LAPTOPS PAGE (/best-laptops)
// Renders ProductCard for each item in laptops.ts.
//
// To add new products: update /data/laptops.ts
// To add a new category page: create /app/monitors/page.tsx
// and import from /data/monitors.ts
// ─────────────────────────────────────────────

import ProductCard from "@/components/ProductCard";
import { laptops } from "@/data/laptops";

export const metadata = {
  title: "Best Budget Laptops for Coding (2026) — CodeSetupLab",
  description:
    "Our top picks for budget laptops for CS students and beginner developers in 2026.",
};

export default function BestLaptopsPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* ── Page Header ── */}
      <header className="mb-10">
        <span className="text-xs font-semibold tracking-widest uppercase text-emerald-500">
          2026 Guide
        </span>
        <h1 className="text-3xl sm:text-4xl font-black text-gray-900 mt-2 mb-4 leading-tight">
          Best Budget Laptops for Coding (2026)
        </h1>
        <p className="max-w-2xl text-gray-500 text-base leading-relaxed">
          Whether you&apos;re just starting your CS journey or grinding through coding bootcamps,
          these laptops deliver the best bang for your buck. All picks tested against
          real student workloads — no filler, no fluff.
        </p>
        <div className="mt-4 h-px bg-linear-to-r from-emerald-400 via-gray-200 to-transparent" />
      </header>

      {/* ── Product Grid ── */}
      {/*
        To reuse this grid on another page:
          1. Import ProductCard from "@/components/ProductCard"
          2. Import your data file
          3. Map over it just like below
      */}
      <section>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {laptops.map((laptop) => (
            // ProductCard accepts: name, price, specs, bestFor, image, link
            <ProductCard key={laptop.id} {...laptop} />
          ))}
        </div>
      </section>

      {/* ── Disclaimer ── */}
      <footer className="mt-12 text-center text-xs text-gray-400">
        Prices are approximate and may vary. Links may be affiliate links.
      </footer>
    </div>
  );
}