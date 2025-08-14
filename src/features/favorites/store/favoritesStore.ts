'use client';

import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface FavoritesState {
  favorites: string[];
  addFavorite: (item: string) => void;
  removeFavorite: (item: string) => void;
  toggleFavorite: (item: string) => void;
}

export const useFavoritesStore = create<FavoritesState>()(
  persist(
    (set, get) => ({
      favorites: [],

      addFavorite: (item) => set((state) => ({ favorites: [...state.favorites, item] })),

      removeFavorite: (item) =>
        set((state) => ({ favorites: state.favorites.filter((fav) => fav !== item) })),

      toggleFavorite: (item) => {
        const { favorites, addFavorite, removeFavorite } = get();
        favorites.includes(item) ? removeFavorite(item) : addFavorite(item);
      },
    }),
    {
      name: 'favorites-storage', 
    }
  )
);
