import Link from "next/link";

const categories = [
  { name: "Italian", slug: "italian" },
  { name: "Indian", slug: "indian" },
  { name: "Dessert", slug: "dessert" },
  { name: "Healthy", slug: "healthy" },
];

export default function CategoriesPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h2 className="text-4xl font-bold mb-8 text-center text-green-600">Categories</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {categories.map((cat) => (
          <Link
            key={cat.slug}
            href={`/recipes`}
            className="block p-6 bg-white shadow rounded-lg text-center hover:shadow-lg transition"
          >
            <h3 className="text-xl font-semibold">{cat.name}</h3>
          </Link>
        ))}
      </div>
    </main>
  );
}
