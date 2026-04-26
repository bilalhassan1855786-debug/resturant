"use client";

import { useParams } from "next/navigation";
import Link from "next/link";

const recipes = [
  {
    id: "1",
    title: "Chicken Biryani",
    image: "/images/biryani.jpg",
    description:
      "A rich and flavorful rice dish made with aromatic spices and tender chicken.",
    ingredients: [
      "2 cups basmati rice",
      "500g chicken",
      "1 cup yogurt",
      "Spices (garam masala, cumin, coriander)",
    ],
    steps: [
      "Marinate chicken with yogurt and spices.",
      "Cook rice halfway and layer with chicken.",
      "Steam cook for 20 minutes.",
    ],
  },
  {
    id: "2",
    title: "Beef Karahi",
    image: "/images/karahi.jpg",
    description: "Traditional spicy beef curry cooked in a wok-style pan.",
    ingredients: [
      "500g beef",
      "3 tomatoes",
      "2 onions",
      "Spices (red chili, salt, cumin)",
    ],
    steps: [
      "Fry onions and tomatoes with spices.",
      "Add beef and cook until tender.",
      "Garnish with coriander and serve hot.",
    ],
  },
  {
    id: "3",
    title: "White Sauce Pasta",
    image: "/images/pasta.jpg",
    description: "Creamy and cheesy white sauce pasta made Italian-style.",
    ingredients: [
      "200g pasta",
      "1 cup milk",
      "2 tbsp butter",
      "1/4 cup cheese",
    ],
    steps: [
      "Boil pasta until soft.",
      "Make white sauce with butter, milk, and cheese.",
      "Mix pasta with sauce and serve warm.",
    ],
  },
{
    
  slug: "zinger-burger",
    title: "7.Zinger Burger",
    description: "Crispy fried chicken burger with spicy sauce.",
    image: "/images/burger.jpg",
    ingredients: [
      "2 chicken fillets",
      "Burger buns",
      "Lettuce, tomato slices",
      "Mayonnaise, ketchup",
      "Oil for frying, salt, pepper",
    ],
    steps: [
      "Marinate chicken with spices and salt.",
      "Coat in flour and fry until golden and cooked.",
      "Toast buns lightly.",
      "Assemble burger with lettuce, tomato, sauce, and chicken fillet.",
      "Serve hot.",
    ],
  }








];

export default function RecipeDetailPage() {
  const { id } = useParams();
  const recipe = recipes.find((r) => r.id === id);

  if (!recipe) {
    return (
      <div className="text-center text-red-600 mt-20 text-2xl">
        Recipe not found 😔
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-yellow-50 to-orange-100 p-10">
      <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-xl p-8">
        <img
          src={recipe.image}
          alt={recipe.title}
          className="w-800 h-72 object-cover rounded-xl mb-6"
        />
        <h1 className="text-3xl font-bold text-orange-700 mb-4">{recipe.title}</h1>
        <p className="text-gray-700 mb-6">{recipe.description}</p>

        <h2 className="text-2xl font-semibold text-orange-600 mb-2">
          🥕 Ingredients
        </h2>
        <ul className="list-disc list-inside mb-6 text-gray-700 space-y-1">
          {recipe.ingredients.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>

        <h2 className="text-2xl font-semibold text-orange-600 mb-2">
          👨‍🍳 Steps
        </h2>
        <ol className="list-decimal list-inside text-gray-700 space-y-1 mb-6">
          {recipe.steps.map((step, i) => (
            <li key={i}>{step}</li>
          ))}
        </ol>

        <Link
          href="/recipes"
          className="inline-block bg-orange-600 text-white px-6 py-2 rounded-lg hover:bg-orange-700 transition"
        >
          ← Back to Recipes
        </Link>
      </div>
    </div>
  );
}
