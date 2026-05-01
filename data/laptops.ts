// ─────────────────────────────────────────────
// DATA FILE — Add new products here.
// To add a new category (e.g., monitors), create
// a new file like: /data/monitors.ts
// ─────────────────────────────────────────────

export interface Laptop {
  id: number;
  name: string;
  price: string;
  specs: string[];
  bestFor: string;
  image: string;
  link: string;
}

export const laptops: Laptop[] = [
  {
    id: 1,
    name: "Acer Aspire 5",
    price: "$449",
    specs: ["AMD Ryzen 5 7520U", "8GB RAM", "512GB SSD", "15.6\" FHD IPS"],
    bestFor: "First-Year CS Students",
    image: "https://placehold.co/300x200/1a1a1a/ffffff?text=Acer+Aspire+5",
    link: "#",
  },
  {
    id: 2,
    name: "Lenovo IdeaPad Slim 3",
    price: "$379",
    specs: ["Intel Core i5-1235U", "8GB RAM", "256GB SSD", "15.6\" FHD"],
    bestFor: "Tightest Budgets",
    image: "https://placehold.co/300x200/1a1a1a/ffffff?text=Lenovo+IdeaPad",
    link: "#",
  },
  {
    id: 3,
    name: "ASUS VivoBook 15",
    price: "$529",
    specs: ["Intel Core i5-12500H", "16GB RAM", "512GB SSD", "15.6\" OLED"],
    bestFor: "Web & UI Developers",
    image: "https://placehold.co/300x200/1a1a1a/ffffff?text=ASUS+VivoBook",
    link: "#",
  },
  {
    id: 4,
    name: "HP Pavilion 14",
    price: "$489",
    specs: ["AMD Ryzen 7 5700U", "16GB RAM", "512GB SSD", "14\" FHD IPS"],
    bestFor: "Portability + Performance",
    image: "https://placehold.co/300x200/1a1a1a/ffffff?text=HP+Pavilion+14",
    link: "#",
  },
  {
    id: 5,
    name: "MacBook Air M1",
    price: "$749",
    specs: ["Apple M1 Chip", "8GB Unified RAM", "256GB SSD", "13.3\" Retina"],
    bestFor: "iOS / macOS Developers",
    image: "https://placehold.co/300x200/1a1a1a/ffffff?text=MacBook+Air+M1",
    link: "#",
  },
];