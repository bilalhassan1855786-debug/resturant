"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function RecipesPage() {
  const [favorites, setFavorites] = useState<string[]>([]);

  const recipes = [
    {
      id: "1",
      title: "Chicken Biryani",
      image: "/images/biryani.jpg",
      description: "Aromatic rice with tender chicken pieces.",
    },
    {
      id: "2",
      title: "Beef Karahi",
      image: "/images/karahi.jpg",
      description: "Spicy and delicious traditional karahi.",
    },
    {
      id: "3",
      title: "White Sauce Pasta",
      image: "/images/pasta.jpg",
      description: "Creamy Italian pasta with cheese sauce.",
    },
    {
      id: "4",
      title: "Zinger Burger",
      image: "/images/burger.jpg",
      description: "Crispy chicken burger with spicy mayo.",
    },
  ];

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("favorites") || "[]");
    setFavorites(saved);
  }, []);

  const toggleFavorite = (id: string) => {
    let updated: string[];
    if (favorites.includes(id)) {
      updated = favorites.filter((fav) => fav !== id);
    } else {
      updated = [...favorites, id];
    }
    setFavorites(updated);
    localStorage.setItem("favorites", JSON.stringify(updated));
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-green-100 p-10">
      <h1 className="text-4xl font-bold text-center text-green-700 mb-10">
        🍽️ Our Delicious Recipes
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {recipes.map((recipe) => (
          <div
            key={recipe.id}
            className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-transform transform hover:-translate-y-2 p-5"
          >
            <img
              src={recipe.image}
              alt={recipe.title}
              className="w-200 h-56 object-cover rounded-lg"
            />
            <h2 className="text-xl font-semibold mt-4">{recipe.title}</h2>
            <p className="text-gray-600 mb-4">{recipe.description}</p>

            <div className="flex justify-between">
              <Link
  href={`/recipes/${recipe.id}`}
  className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition"
>
  View Details
</Link>

              <button
                onClick={() => toggleFavorite(recipe.id)}
                className={`px-4 py-2 rounded-lg font-semibold transition ${
                  favorites.includes(recipe.id)
                    ? "bg-red-500 text-white"
                    : "bg-gray-200 text-gray-800"
                }`}
              >
                {favorites.includes(recipe.id) ? "❤️ Added" : "🤍 Add"}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
