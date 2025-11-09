"use client";
import Link from "next/link";

// Sample featured recipes with ingredients & steps
const featuredRecipes = [
  {
    slug: "spaghetti-bolognese",
    title: "Spaghetti Bolognese",
    description: "A classic Italian pasta dish with rich, meaty sauce.",
    image: "/images/spaghetti.jpg",
    ingredients: [
      "200g spaghetti",
      "250g minced beef",
      "1 onion (chopped)",
      "2 garlic cloves (minced)",
      "400g tomato sauce",
      "Salt, pepper, olive oil, basil"
    ],
    steps: [
      "Boil spaghetti until al dente.",
      "In a pan, heat olive oil and sauté onion and garlic.",
      "Add minced beef, cook until browned.",
      "Stir in tomato sauce, salt, pepper, and simmer 15 minutes.",
      "Serve over spaghetti and garnish with basil."
    ],
    category: "Italian"
  },
  {
    slug: "chicken-curry",
    title: "Chicken Curry",
    description: "Spicy and flavorful Pakistani-style chicken curry.",
    image: "/images/chicken-curry.jpg",
    ingredients: [
      "500g chicken pieces",
      "2 onions (chopped)",
      "2 tomatoes (blended)",
      "1 tbsp ginger garlic paste",
      "Spices (red chili, turmeric, coriander, cumin, garam masala)"
    ],
    steps: [
      "Fry onions in oil until golden.",
      "Add ginger garlic paste and chicken; fry for 5 minutes.",
      "Add tomatoes and spices; cook until oil separates.",
      "Add 1 cup water and simmer until chicken is tender.",
      "Serve with naan or rice."
    ],
    category: "Pakistani"
  },
  {
    slug: "beef-karahi",
    title: "Beef Karahi",
    description: "Traditional spicy and rich Pakistani beef karahi.",
    image: "/images/karahi.jpg",
    ingredients: [
      "500g beef cubes",
      "3 tomatoes",
      "2 onions",
      "1 tbsp ginger garlic paste",
      "Green chilies, coriander, garam masala"
    ],
    steps: [
      "Fry onions until golden brown.",
      "Add beef and ginger garlic paste; fry well.",
      "Add chopped tomatoes and cook until soft.",
      "Add spices and simmer until beef is tender.",
      "Garnish with green chilies and coriander."
    ],
    category: "Pakistani"
  },
  {
    slug: "pancakes",
    title: "Fluffy Pancakes",
    description: "Soft and delicious pancakes for a perfect morning.",
    image: "/images/pancakes.jpg",
    ingredients: [
      "1 cup flour",
      "1 egg",
      "1 cup milk",
      "1 tbsp sugar",
      "1 tsp baking powder",
      "Butter for frying"
    ],
    steps: [
      "Mix flour, sugar, and baking powder.",
      "Whisk in egg and milk until smooth.",
      "Cook pancakes on a greased pan until golden.",
      "Serve with honey or syrup."
    ],
    category: "Breakfast"
  },
  {
    slug: "veggie-salad",
    title: "Veggie Salad",
    description: "Fresh, colorful, and healthy vegetable salad.",
    image: "/images/salad.jpg",
    ingredients: [
      "Lettuce, cucumber, tomato, carrot, corn",
      "Olive oil, lemon juice, salt, pepper"
    ],
    steps: [
      "Chop all vegetables into small pieces.",
      "Mix them in a large bowl.",
      "Add dressing of olive oil and lemon juice.",
      "Serve chilled."
    ],
    category: "Healthy"
  },
  {
    slug: "chocolate-cake",
    title: "Chocolate Cake",
    description: "Rich and moist chocolate cake for dessert lovers.",
    image: "/images/chocolate-cake.jpg",
    ingredients: [
      "1 cup flour",
      "½ cup cocoa powder",
      "2 eggs",
      "1 cup sugar",
      "½ cup butter",
      "1 cup milk"
    ],
    steps: [
      "Mix all dry ingredients together.",
      "Add eggs, milk, and butter, and mix until smooth.",
      "Bake at 180°C for 30–35 minutes.",
      "Let cool and serve."
    ],
    category: "Dessert"
  }
];

export default function HomePage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative h-[500px] flex items-center justify-center rounded-b-3xl overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-green-500 via-green-600 to-teal-600 opacity-80"></div>
        <div className="relative text-center px-6 text-white">
          <h1 className="text-5xl font-bold mb-4">Discover Delicious Recipes</h1>
          <p className="text-lg mb-6">Explore, cook, and enjoy your favorite meals at home</p>
          <Link
            href="/recipes"
            className="bg-white text-green-700 px-6 py-3 rounded-full font-semibold hover:bg-green-100 transition"
          >
            Explore All Recipes
          </Link>
        </div>
      </section>

      {/* Featured Recipes Section */}
      <section className="container mx-auto px-6 py-12 bg-green-50 rounded-3xl mt-12">
        <h2 className="text-3xl font-bold mb-8 text-center text-green-800">
          Featured Recipes
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredRecipes.map((recipe) => (
            <div
              key={recipe.slug}
              className="bg-green shadow-lg rounded-2xl overflow-hidden hover:scale-105 transition-transform"
            >
              <img
                src={recipe.image}
                alt={recipe.title}
                className="w-200 h-56 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-green-700 mb-2">
                  {recipe.title}
                </h3>
                <p className="text-gray-600 mb-4">{recipe.description}</p>
                <Link
                  href={`/recipes/${recipe.slug}`}
                  className="inline-block bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
