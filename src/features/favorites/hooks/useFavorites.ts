'use client';

import { useFavoritesStore } from '../store/favoritesStore';

export default function useFavorites() {
  const { favorites, addFavorite, removeFavorite, toggleFavorite } = useFavoritesStore();
  return { favorites, addFavorite, removeFavorite, toggleFavorite };
}
