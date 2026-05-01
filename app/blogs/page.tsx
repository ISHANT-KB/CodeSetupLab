import Link from "next/link";

const publishedBlogs = [
  {
    title: "Best Laptops for Coding in India (2026 Guide)",
    description:
      "Find the best budget laptops for coding, students, and developers in India.",
    slug: "best-laptops-for-coding-2026",
  },
] as const;

export const metadata = {
  title: "Blog | CodeSetupLab",
  description:
    "Guides, product roundups, and setup advice for students and beginner developers.",
};

export default function BlogsPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-10">
      <header className="mb-8">
        <h1 className="mb-4 text-4xl font-bold text-gray-900">Blog</h1>
        <p className="text-gray-600">
          Guides, setups, and tools to help you build the perfect coding workspace.
        </p>
      </header>

      <div className="grid gap-6 md:grid-cols-2">
        {publishedBlogs.map((blog) => (
          <article
            key={blog.slug}
            className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg"
          >
            <h2 className="text-xl font-semibold text-gray-900">{blog.title}</h2>
            <p className="mt-2 text-gray-600">{blog.description}</p>
            <Link
              href={`/blogs/${blog.slug}`}
              className="mt-4 inline-block font-medium text-emerald-600 hover:text-emerald-700"
            >
              Read more
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
}
