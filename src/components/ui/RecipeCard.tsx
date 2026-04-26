import Link from "next/link";
import { Recipe } from "@/lib/types";

interface Props {
  recipe: Recipe;
}

export default function RecipeCard({ recipe }: Props) {
  return (
    <Link
      href={`/recipes/${recipe.slug}`}
      className="block bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
    >
      <img
        src={recipe.image}
        alt={recipe.title}
        className="w-medium h-48 sm:h-40 md:h-36 object-cover"
      />
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{recipe.title}</h3>
        <p className="text-gray-600">{recipe.description}</p>
      </div>
    </Link>
  );
}
