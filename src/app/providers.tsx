"use client";

import { ReactNode, createContext, useState, useContext } from "react";
import { Recipe } from "@/app/lib/types";

interface FavoritesContextType {
  favorites: Recipe[];
  addFavorite: (recipe: Recipe) => void;
  removeFavorite: (slug: string) => void;
}

const FavoritesContext = createContext<FavoritesContextType | undefined>(undefined);

export function FavoritesProvider({ children }: { children: ReactNode }) {
  const [favorites, setFavorites] = useState<Recipe[]>([]);

  const addFavorite = (recipe: Recipe) => {
    setFavorites((prev) => [...prev, recipe]);
  };

  const removeFavorite = (slug: string) => {
    setFavorites((prev) => prev.filter((r) => r.slug !== slug));
  };

  return (
    <FavoritesContext.Provider value={{ favorites, addFavorite, removeFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
}

export const useFavorites = () => {
  const context = useContext(FavoritesContext);
  if (!context) throw new Error("useFavorites must be used within FavoritesProvider");
  return context;
};
