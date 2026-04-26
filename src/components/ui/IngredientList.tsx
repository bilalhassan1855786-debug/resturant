import { Ingredient } from "@/lib/types";

interface Props {
  ingredients: Ingredient[];
}

export default function IngredientList({ ingredients }: Props) {
  return (
    <ul className="list-disc list-inside mb-6">
      {ingredients.map((ing, idx) => (
        <li key={idx}>{ing.name} - {ing.quantity}</li>
      ))}
    </ul>
  );
}
