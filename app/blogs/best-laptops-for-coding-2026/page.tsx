import Link from "next/link";

export const metadata = {
  title: "Best Laptops for Coding in India (2026 Guide) | CodeSetupLab",
  description:
    "A practical guide to picking a coding laptop in India for students and beginner developers.",
};

export default function BestLaptopsForCoding2026Page() {
  return (
    <article className="mx-auto max-w-4xl px-6 py-10">
      <header className="mb-8">
        <h1 className="mb-4 text-4xl font-bold text-gray-900">
          Best Laptops for Coding in India (2026 Guide)
        </h1>
        <p className="text-gray-600">
          Looking for the best laptop for coding in 2026? This guide will help you
          choose a practical machine for programming, coursework, and daily
          developer tasks in India.
        </p>
      </header>

      <section className="mb-8 rounded-xl bg-gray-100 p-4">
        <h2 className="mb-2 font-semibold text-gray-900">Who is this for?</h2>
        <ul className="ml-5 list-disc text-gray-700">
          <li>Students learning coding</li>
          <li>Web and Python developers</li>
          <li>Buyers targeting a budget under Rs 60,000</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="mb-3 text-2xl font-semibold text-gray-900">
          Minimum Requirements for Coding in 2026
        </h2>
        <ul className="ml-5 list-disc text-gray-700">
          <li>Processor: Intel Core i5 or AMD Ryzen 5 and above</li>
          <li>RAM: 8GB minimum, 16GB recommended</li>
          <li>Storage: SSD is essential</li>
          <li>Display: Full HD for comfortable daily use</li>
        </ul>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-gray-900">
          Top Laptops for Coding
        </h2>

        <div>
          <h3 className="text-xl font-semibold text-gray-900">
            Lenovo IdeaPad Slim 3 - Best Overall
          </h3>
          <p className="text-gray-600">
            A balanced option for students who want dependable performance,
            battery life, and price.
          </p>
          <Link
            href="/best-laptops"
            className="font-medium text-emerald-600 hover:text-emerald-700"
          >
            Check full details and latest price
          </Link>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-gray-900">
            HP Victus - Best for Coding and Light Gaming
          </h3>
          <p className="text-gray-600">
            A stronger pick if you want more headroom for heavier workloads and
            occasional gaming.
          </p>
          <Link
            href="/best-laptops"
            className="font-medium text-emerald-600 hover:text-emerald-700"
          >
            View price and specs
          </Link>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-gray-900">
            Acer Aspire Lite - Budget Pick
          </h3>
          <p className="text-gray-600">
            A beginner-friendly option for learning programming without stretching
            your budget too far.
          </p>
          <Link
            href="/best-laptops"
            className="font-medium text-emerald-600 hover:text-emerald-700"
          >
            See best deal
          </Link>
        </div>
      </section>

      <section className="mt-10 rounded-xl bg-black p-6 text-center text-white">
        <h2 className="mb-2 text-xl font-semibold">Want the best laptop deals?</h2>
        <p className="mb-4 text-gray-300">
          Check our handpicked list of the best laptops with current prices and
          student-friendly picks.
        </p>
        <Link
          href="/best-laptops"
          className="inline-flex rounded-lg bg-white px-6 py-2 font-medium text-black"
        >
          View Best Laptops
        </Link>
      </section>
    </article>
  );
}
