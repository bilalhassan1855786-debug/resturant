export interface Ingredient {
  name: string;
  quantity: string;
}

export interface Recipe {
  slug: string;
  title: string;
  description: string;
  image: string;
  ingredients: Ingredient[];
  steps: string[];
  category?: string;
}
