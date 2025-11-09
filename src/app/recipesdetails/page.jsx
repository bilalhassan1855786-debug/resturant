"use client"; // Required if you use client-side features later

import { useRouter } from "next/navigation";
import Link from "next/link";

// Recipes Data
const recipes = [
  {
    slug: "spaghetti-bolognese",
    title: "1.Spaghetti Bolognese",
    description: "Classic Italian pasta dish with rich meat sauce.",
    image: "/images/spaghetti.jpg",
    ingredients: [
      "200g spaghetti",
      "250g minced beef",
      "1 onion, chopped",
      "2 garlic cloves, minced",
      "400g tomato sauce",
      "Olive oil, salt, pepper, basil",
    ],
    steps: [
      "Boil spaghetti until al dente.",
      "Heat olive oil, sauté onion and garlic.",
      "Add minced beef and cook until browned.",
      "Add tomato sauce, salt, pepper and simmer for 15 minutes.",
      "Serve hot with basil garnish.",
    ],
  },
  {
    slug: "chicken-karahi",
    title: "2.Chicken Karahi",
    description: "Traditional Pakistani spicy chicken dish.",
    image: "/images/chicken-curry.jpg",
    ingredients: [
      "500g chicken pieces",
      "2 onions, chopped",
      "3 tomatoes, chopped",
      "2 tbsp ginger garlic paste",
      "Green chilies, coriander, garam masala, salt",
      "Oil",
    ],
    steps: [
      "Heat oil in a karahi, fry onions until golden.",
      "Add chicken and ginger garlic paste, cook 5-7 minutes.",
      "Add tomatoes, spices, and simmer until chicken is tender.",
      "Garnish with green chilies and coriander before serving.",
    ],
  },
  {
    slug: "beef-karahi",
    title: "3.Beef Karahi",
    description: "Rich and spicy Pakistani beef karahi.",
    image: "/images/karahi.jpg",
    ingredients: [
      "500g beef cubes",
      "3 tomatoes, chopped",
      "2 onions, chopped",
      "2 tbsp ginger garlic paste",
      "Spices, coriander, green chilies, oil, salt",
    ],
    steps: [
      "Heat oil and sauté onions until golden.",
      "Add beef and ginger garlic paste, cook until beef is browned.",
      "Add tomatoes and spices, simmer until beef is tender.",
      "Garnish with coriander and green chilies.",
    ],
  },
  {
    slug: "fluffy-pancakes",
    title: "4.Fluffy Pancakes",
    description: "Soft and fluffy breakfast pancakes.",
    image: "/images/pancakes.jpg",
    ingredients: [
      "1 cup flour",
      "1 egg",
      "1 cup milk",
      "1 tbsp sugar",
      "1 tsp baking powder",
      "Butter for frying",
    ],
    steps: [
      "Mix flour, sugar, and baking powder in a bowl.",
      "Add egg and milk, whisk until smooth.",
      "Heat pan, melt butter, pour batter.",
      "Cook until golden on both sides.",
      "Serve hot with syrup or honey.",
    ],
  },
  {
    slug: "chocolate-cake",
    title: "5.Chocolate Cake",
    description: "Rich and moist chocolate cake.",
    image: "/images/chocolate-cake.jpg",
    ingredients: [
      "1 1/2 cups flour",
      "1 cup sugar",
      "1/2 cup cocoa powder",
      "1 tsp baking soda",
      "1/2 cup oil",
      "1 cup milk",
      "2 eggs",
      "1 tsp vanilla extract",
    ],
    steps: [
      "Preheat oven to 180°C (350°F).",
      "Mix dry ingredients in a bowl.",
      "Add eggs, milk, oil, vanilla and whisk until smooth.",
      "Pour batter into greased cake pan.",
      "Bake 30-35 minutes, check with toothpick.",
      "Cool, then serve or frost as desired.",
    ],
  },
  {
    slug: "veggie-salad",
    title: "6.Veggie Salad",
    description: "Fresh and healthy vegetable salad.",
    image: "/images/salad.jpg",
    ingredients: [
      "1 cucumber, chopped",
      "2 tomatoes, chopped",
      "1 bell pepper, chopped",
      "1 carrot, grated",
      "Salt, pepper, olive oil, lemon juice",
    ],
    steps: [
      "Combine all vegetables in a bowl.",
      "Drizzle with olive oil and lemon juice.",
      "Season with salt and pepper.",
      "Toss well and serve chilled.",
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
  },
  {
    slug: "white-sauce-pasta",
    title: "8.White Sauce Pasta",
    description: "Creamy pasta with white sauce and veggies.",
    image: "/images/pasta.jpg",
    ingredients: [
      "200g pasta",
      "1 cup cream",
      "1 onion, chopped",
      "1 bell pepper, chopped",
      "1 tbsp butter",
      "Salt, pepper, cheese",
    ],
    steps: [
      "Cook pasta until al dente, drain.",
      "Melt butter, sauté onion and bell pepper.",
      "Add cream, cook 2-3 mins, season with salt and pepper.",
      "Mix pasta with sauce and sprinkle cheese.",
      "Serve hot.",
    ],
  },
];

export default function RecipesDetailsPage() {
  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold text-green-700 mb-8 text-center">
        All Recipe Details
      </h1>
      {recipes.map((recipe) => (
        <div
          key={recipe.slug}
          className="bg-white rounded-3xl shadow-lg p-6 mb-10"
        >
          <img
            src={recipe.image}
            alt={recipe.title}
            className="w-300 h-64 object-cover rounded-2xl mb-4"
          />
          <h2 className="text-2xl font-bold text-green-700 mb-2">
            {recipe.title}
          </h2>
          <p className="text-gray-700 mb-4">{recipe.description}</p>

          <h3 className="text-xl font-semibold text-green-600 mb-2">Ingredients:</h3>
          <ul className="list-disc list-inside text-gray-700 mb-4">
            {recipe.ingredients.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>

          <h3 className="text-xl font-semibold text-green-600 mb-2">Steps:</h3>
          <ol className="list-decimal list-inside text-gray-700">
            {recipe.steps.map((step, i) => (
              <li key={i} className="mb-2">{step}</li>
            ))}
          </ol>
        </div>
      ))}
      <div className="text-center mt-10">
        <Link
          href="/"
          className="bg-green-600 text-white px-6 py-3 rounded-full hover:bg-green-700 transition"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}
