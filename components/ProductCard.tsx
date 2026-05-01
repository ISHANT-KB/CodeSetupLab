// ─────────────────────────────────────────────
// PRODUCT CARD — Reusable across any page.
// Usage:
//   import ProductCard from "@/components/ProductCard";
//   <ProductCard {...laptopData} />
//
// To use with a different data type, update or
// extend the `ProductCardProps` interface below.
// ─────────────────────────────────────────────

import Image from "next/image";
import type { Laptop } from "@/data/laptops";

type ProductCardProps = Pick<
  Laptop,
  "name" | "price" | "specs" | "bestFor" | "image" | "link"
>;

export default function ProductCard({
  name,
  price,
  specs,
  bestFor,
  image,
  link,
}: ProductCardProps) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-emerald-100">
      <div className="relative aspect-3/2 overflow-hidden bg-gray-100">
        <Image
          src={image}
          alt={name}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <div className="flex flex-1 flex-col p-6">
        <div className="mb-5 flex items-start justify-between gap-4">
          <div>
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.24em] text-emerald-500">
              Best For
            </p>
            <h2 className="text-xl font-black text-gray-900">{name}</h2>
            <p className="mt-1 text-sm text-gray-500">{bestFor}</p>
          </div>
          <p className="shrink-0 rounded-full bg-emerald-50 px-3 py-1 text-sm font-bold text-emerald-700">
            {price}
          </p>
        </div>

        <ul className="mb-6 space-y-2 text-sm leading-6 text-gray-600">
          {specs.map((spec) => (
            <li key={spec} className="flex items-start gap-2">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500" />
              <span>{spec}</span>
            </li>
          ))}
        </ul>

        <a
          href={link}
          target={link.startsWith("http") ? "_blank" : undefined}
          rel={link.startsWith("http") ? "noreferrer" : undefined}
          className="mt-auto inline-flex items-center justify-center rounded-2xl bg-gray-900 px-4 py-3 text-sm font-semibold text-white transition-colors duration-200 hover:bg-emerald-500"
        >
          View Deal
        </a>
      </div>
    </article>
  );
}