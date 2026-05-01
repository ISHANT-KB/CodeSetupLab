import Link from "next/link";
import Image from "next/image";
import demoImage from "@/public/demo.png";
import { StaticImageData } from "next/image";

interface LaptopEntry {
  rank: number;
  name: string;
  price: string;
  bestFor: string;
  pros: string[];
  cons: string[];
  verdict: string;
  specs: { label: string; value: string }[];
  imageHref: StaticImageData;
}

const laptopEntries: LaptopEntry[] = [
  {
    rank: 1,
    name: "Acer Aspire Lite AMD Ryzen 5",
    price: "₹42,990",
    bestFor: "Best Overall Under ₹60K",
    pros: [
      "Excellent CPU performance",
      "Full HD IPS display",
      "Lightweight build",
    ],
    cons: ["No discrete GPU", "Average speakers"],
    verdict:
      "The Acer Aspire Lite with Ryzen 5 is the sweet spot for CS students — fast, thin, and affordable without cutting corners on display quality.",
    specs: [
      { label: "Processor", value: "AMD Ryzen 5 5500U" },
      { label: "RAM", value: "8GB DDR4 (upgradeable)" },
      { label: "Storage", value: "512GB NVMe SSD" },
      { label: "Display", value: '15.6" FHD IPS 60Hz' },
      { label: "Battery", value: "Up to 7 hrs" },
      { label: "Weight", value: "1.7 kg" },
    ],
    imageHref: demoImage,
  },
  {
    rank: 2,
    name: "Lenovo IdeaPad Slim 3 Gen 8",
    price: "₹44,490",
    bestFor: "Best Battery Life",
    pros: ["All-day battery", "Clean keyboard", "Good build quality"],
    cons: ["Dim display outdoors", "Integrated graphics only"],
    verdict:
      "If you're coding in college cafes and libraries all day, the IdeaPad Slim 3 outlasts everything in this budget. Reliable, no-fuss workhorse.",
    specs: [
      { label: "Processor", value: "Intel Core i5-12450H" },
      { label: "RAM", value: "8GB DDR5" },
      { label: "Storage", value: "512GB SSD" },
      { label: "Display", value: '15.6" FHD IPS' },
      { label: "Battery", value: "Up to 9 hrs" },
      { label: "Weight", value: "1.62 kg" },
    ],
    imageHref: demoImage,
  },
  {
    rank: 3,
    name: "ASUS VivoBook 15 OLED",
    price: "₹54,990",
    bestFor: "Best Display",
    pros: ["Gorgeous OLED panel", "Fast Ryzen 7", "16GB RAM"],
    cons: ["OLED burn-in risk long-term", "Slightly heavier"],
    verdict:
      "The OLED screen is genuinely stunning for the price. If you care about color accuracy for UI/UX or just want a premium feel, this is unbeatable under ₹60K.",
    specs: [
      { label: "Processor", value: "AMD Ryzen 7 5700U" },
      { label: "RAM", value: "16GB DDR4" },
      { label: "Storage", value: "512GB NVMe SSD" },
      { label: "Display", value: '15.6" FHD OLED 60Hz' },
      { label: "Battery", value: "Up to 6 hrs" },
      { label: "Weight", value: "1.8 kg" },
    ],
    imageHref: demoImage,
  },
  {
    rank: 4,
    name: "HP Pavilion 14-eh1047TU",
    price: "₹56,990",
    bestFor: "Best Compact Pick",
    pros: ['14" compact form', "Iris Xe graphics", "Solid thermals"],
    cons: ["Higher price in segment", "No Thunderbolt 4"],
    verdict:
      "The HP Pavilion 14 is for students who want a smaller, carry-everywhere machine without sacrificing build quality. Intel Iris Xe handles light rendering well.",
    specs: [
      { label: "Processor", value: "Intel Core i5-1235U" },
      { label: "RAM", value: "8GB DDR4" },
      { label: "Storage", value: "512GB SSD" },
      { label: "Display", value: '14" FHD IPS' },
      { label: "Battery", value: "Up to 8 hrs" },
      { label: "Weight", value: "1.41 kg" },
    ],
    imageHref: demoImage,
  },
  {
    rank: 5,
    name: "Mi Notebook Pro 14 (2023)",
    price: "₹49,999",
    bestFor: "Best Value Premium Feel",
    pros: ["Metal unibody build", "Fast display", "Slim & light"],
    cons: ["Limited service centers", "No SD card slot"],
    verdict:
      "Xiaomi delivers a MacBook-like build experience at half the price. If aesthetics and portability matter as much as specs, the Mi Notebook Pro punches above its weight.",
    specs: [
      { label: "Processor", value: "Intel Core i5-12450H" },
      { label: "RAM", value: "16GB LPDDR5" },
      { label: "Storage", value: "512GB PCIe SSD" },
      { label: "Display", value: '14" 2.5K IPS 120Hz' },
      { label: "Battery", value: "Up to 10 hrs" },
      { label: "Weight", value: "1.4 kg" },
    ],
    imageHref: demoImage,
  },
];

const medalColors: Record<number, string> = {
  1: "bg-yellow-400 text-yellow-900",
  2: "bg-gray-300 text-gray-800",
  3: "bg-amber-600 text-white",
};

export const metadata = {
  title: "Best Laptops for Coding Under ₹60K (2026) — CodeSetupLab",
  description:
    "Top 5 budget laptops for Indian CS students and developers under ₹60,000 in 2026.",
};

export default function BlogLaptopsUnder60K() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12">
      {/* Breadcrumb */}
      <nav className="text-xs text-gray-400 mb-8 flex items-center gap-1.5 flex-wrap">
        <Link href="/" className="hover:text-gray-700 transition-colors">
          Home
        </Link>
        <span>/</span>
        <Link href="/blog" className="hover:text-gray-700 transition-colors">
          Blog
        </Link>
        <span>/</span>
        <span className="text-gray-600">Best Laptops Under ₹60K (2026)</span>
      </nav>

      {/* Article Header */}
      <header className="mb-10">
        <span className="inline-block text-xs font-semibold tracking-widest uppercase text-emerald-500 bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-full mb-4">
          Buying Guide · 2026
        </span>
        <h1 className="text-3xl sm:text-4xl font-black text-gray-900 leading-tight mb-4">
          Best Laptops for Coding Under ₹60,000 (2026)
        </h1>
        <p className="text-gray-500 text-base leading-relaxed mb-5">
          Picking a laptop as a student developer in India is hard — too many
          options, too much noise. We filtered down to{" "}
          <strong className="text-gray-700">5 honest picks</strong> that handle
          real coding workloads: IDEs, local servers, Git, browser tabs, and
          more. All under ₹60,000.
        </p>
        <div className="flex items-center gap-4 text-xs text-gray-400 border-t border-gray-100 pt-4">
          <span>📅 Updated: January 2026</span>
          <span>·</span>
          <span>⏱ 6 min read</span>
          <span>·</span>
          <span>💻 5 laptops reviewed</span>
        </div>
      </header>

      {/* Quick Picks Table */}
      <section className="mb-12 bg-gray-50 border border-gray-200 rounded-2xl overflow-hidden">
        <div className="px-5 py-4 border-b border-gray-200">
          <h2 className="text-sm font-bold text-gray-700 uppercase tracking-wide">
            ⚡ Quick Picks
          </h2>
        </div>
        <ul className="divide-y divide-gray-100">
          {laptopEntries.map((l) => (
            <li
              key={l.rank}
              className="flex items-center justify-between px-5 py-3 text-sm"
            >
              <div className="flex items-center gap-3">
                <span
                  className={`w-6 h-6 rounded-full text-xs font-black flex items-center justify-center shrink-0 ${
                    medalColors[l.rank] ?? "bg-gray-100 text-gray-600"
                  }`}
                >
                  {l.rank}
                </span>
                <span className="font-medium text-gray-800">{l.name}</span>
              </div>
              <span className="font-bold text-gray-900 whitespace-nowrap">
                {l.price}
              </span>
            </li>
          ))}
        </ul>
      </section>

      {/* Laptop Entries */}
      <section className="space-y-16">
        {laptopEntries.map((laptop) => (
          <article key={laptop.rank} id={`pick-${laptop.rank}`}>
            {/* Rank + Name */}
            <div className="flex items-center gap-3 mb-4">
              <span
                className={`w-8 h-8 rounded-full text-sm font-black flex items-center justify-center shrink-0 ${
                  medalColors[laptop.rank] ?? "bg-gray-200 text-gray-700"
                }`}
              >
                {laptop.rank}
              </span>
              <h2 className="text-xl sm:text-2xl font-black text-gray-900">
                {laptop.name}
              </h2>
            </div>

            {/* Best For + Price */}
            <div className="flex flex-wrap items-center gap-2 mb-5">
              <span className="bg-emerald-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
                {laptop.bestFor}
              </span>
              <span className="bg-gray-900 text-white text-xs font-bold px-3 py-1 rounded-full font-mono">
                {laptop.price}
              </span>
            </div>

            {/* Product Image */}
            {/*
              HOW TO ADD REAL IMAGES:
              1. Find the laptop in the `laptopEntries` array above
              2. Replace the `imageHref` value with a real image URL
                 e.g. imageHref: "https://images.yoursite.com/acer-aspire.jpg"
              3. Recommended size: 800x450px (16:9)
              4. The grayscale + hover-color effect will still work automatically
              5. Remove the overlay <div> below once real images are added
            */}
            <div
              className="relative w-full rounded-2xl overflow-hidden mb-6 bg-gray-100 border border-gray-200"
              style={{ aspectRatio: "16/9" }}
            >
              <Image
                src={laptop.imageHref || "/demo.png"}
                alt={`${laptop.name} laptop`}
                fill
                sizes="(max-width: 768px) 100vw, 768px"
                priority={laptop.rank === 1} // boosts LCP for first image
                className="object-cover grayscale hover:grayscale-0 transition-all duration-500"
              />

              {/* Overlay hint (remove later) */}
              <div className="absolute inset-0 flex items-end p-3 pointer-events-none">
                <span className="bg-black/70 text-white text-xs font-mono px-3 py-1.5 rounded-lg">
                  📷 Replace /demo.png with real product image
                </span>
              </div>
            </div>

            {/* Specs Table */}
            <div className="mb-5 rounded-xl border border-gray-100 overflow-hidden">
              <table className="w-full text-sm">
                <tbody className="divide-y divide-gray-50">
                  {laptop.specs.map((spec) => (
                    <tr key={spec.label} className="even:bg-gray-50">
                      <td className="px-4 py-2.5 font-semibold text-gray-500 w-1/3">
                        {spec.label}
                      </td>
                      <td className="px-4 py-2.5 text-gray-800 font-medium">
                        {spec.value}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Pros & Cons */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-5">
              <div className="bg-emerald-50 border border-emerald-100 rounded-xl p-4">
                <p className="text-xs font-bold uppercase tracking-wide text-emerald-600 mb-2">
                  ✅ Pros
                </p>
                <ul className="space-y-1.5">
                  {laptop.pros.map((pro) => (
                    <li
                      key={pro}
                      className="text-sm text-emerald-900 flex items-start gap-2"
                    >
                      <span className="mt-0.5">+</span>
                      <span>{pro}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-red-50 border border-red-100 rounded-xl p-4">
                <p className="text-xs font-bold uppercase tracking-wide text-red-500 mb-2">
                  ❌ Cons
                </p>
                <ul className="space-y-1.5">
                  {laptop.cons.map((con) => (
                    <li
                      key={con}
                      className="text-sm text-red-900 flex items-start gap-2"
                    >
                      <span className="mt-0.5">−</span>
                      <span>{con}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Verdict */}
            <blockquote className="border-l-4 border-emerald-400 pl-4 italic text-gray-600 text-sm leading-relaxed mb-5">
              <strong className="not-italic text-gray-800 font-bold">
                Verdict:{" "}
              </strong>
              {laptop.verdict}
            </blockquote>

            {/* CTA — replace "#" with real affiliate link */}

            {/* CTA — replace "#" with real affiliate link */}
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gray-900 hover:bg-emerald-500 text-white text-sm font-semibold px-6 py-2.5 rounded-xl transition-colors duration-200"
            >
              Check Price on Amazon →
            </a>

            {/* Divider between entries */}
            {laptop.rank < laptopEntries.length && (
              <div className="mt-12 h-px bg-linear-to-r from-transparent via-gray-200 to-transparent" />
            )}
          </article>
        ))}
      </section>

      {/* Buying Guide */}
      <section className="mt-16 bg-gray-50 border border-gray-200 rounded-2xl p-6">
        <h2 className="text-lg font-black text-gray-900 mb-4">
          🛒 How to Choose the Right Laptop Under ₹60K
        </h2>
        <div className="space-y-4 text-sm text-gray-600 leading-relaxed">
          {[
            {
              title: "RAM — Minimum 8GB, Prefer 16GB",
              body: "Running VS Code, a browser with 20 tabs, and a local dev server simultaneously needs RAM. 8GB works but 16GB is the real sweet spot.",
            },
            {
              title: "Storage — SSD is Non-Negotiable",
              body: "Never buy an HDD laptop for coding. An NVMe SSD makes boot times, compilation, and file I/O dramatically faster. 512GB minimum.",
            },
            {
              title: "Processor — AMD Ryzen 5/7 or Intel i5 12th Gen+",
              body: "Stick to these generations for the best performance per rupee. Older Intel 10th/11th Gen laptops aren't worth it in 2026.",
            },
            {
              title: "Display — IPS Panel, Full HD Minimum",
              body: "You'll spend 8+ hrs staring at code. An IPS panel with good color accuracy reduces eye fatigue significantly over TN panels.",
            },
            {
              title: "GPU — Integrated is Fine for Most Devs",
              body: "Unless you're doing ML/AI or game dev, integrated Radeon or Intel Iris Xe graphics handle everything a typical developer needs.",
            },
          ].map((item) => (
            <div key={item.title}>
              <p className="font-bold text-gray-800 mb-1">{item.title}</p>
              <p>{item.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <div className="mt-10 text-center">
        <p className="text-sm text-gray-400 mb-3">
          Want the full product comparison?
        </p>
        <Link
          href="/best-laptops"
          className="inline-flex items-center gap-2 bg-gray-900 hover:bg-emerald-500 text-white font-semibold text-sm px-6 py-3 rounded-2xl transition-colors duration-200"
        >
          View Full Laptop Comparison →
        </Link>
      </div>

      {/* Disclaimer */}
      <p className="mt-10 text-center text-xs text-gray-400">
        Prices are approximate and subject to change. Some links may be
        affiliate links.
      </p>
    </div>
  );
}
