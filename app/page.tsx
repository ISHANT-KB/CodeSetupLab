// ─────────────────────────────────────────────
// HOMEPAGE (/)
// Hero section with CTA to /best-laptops.
// To add more sections (e.g., "Why Us", "Featured"),
// import new components and add them below the hero.
// ─────────────────────────────────────────────

import Link from "next/link";

export default function HomePage() {
  return (
    <div className="min-h-[calc(100vh-4rem)] flex flex-col">
      {/* ── Hero Section ── */}
      <section className="flex-1 flex flex-col items-center justify-center text-center px-4 py-24 bg-linear-to-b from-white to-gray-50">
        {/* Eyebrow */}
        <span className="inline-block mb-4 text-xs font-semibold tracking-widest uppercase text-emerald-500 bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-full">
          For Students & Beginner Devs
        </span>

        {/* Title */}
        <h1 className="font-mono text-5xl sm:text-6xl lg:text-7xl font-black text-gray-900 leading-none mb-6">
          {"<"}
          <span className="text-emerald-500">Code</span>
          {"SetupLab/>"}
        </h1>

        {/* Subtitle */}
        <p className="max-w-xl text-lg sm:text-xl text-gray-500 mb-10 leading-relaxed">
          Best Coding Setups &amp; Budget Tech for Students.
          <br />
          Real recommendations. Zero fluff.
        </p>

        {/* CTA Button */}
        <Link
          href="/best-laptops"
          className="inline-flex items-center gap-2 bg-gray-900 hover:bg-emerald-500 text-white font-semibold text-base px-8 py-3.5 rounded-2xl shadow-lg hover:shadow-emerald-200 transition-all duration-300 hover:-translate-y-0.5"
        >
          Browse Best Laptops
          <span className="text-lg">→</span>
        </Link>
      </section>

      {/* ── Stats / Trust Bar ── */}
      <section className="border-t border-gray-100 bg-white py-10 px-4">
        <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
          {[
            { value: "5+", label: "Curated Laptops" },
            { value: "100%", label: "Student-Focused" },
            { value: "$0", label: "Hidden Fees" },
          ].map((stat) => (
            <div key={stat.label}>
              <p className="text-4xl font-black text-gray-900 font-mono">{stat.value}</p>
              <p className="text-sm text-gray-400 mt-1 uppercase tracking-wide font-medium">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}