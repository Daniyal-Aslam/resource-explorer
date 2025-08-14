'use client';

import { useLocalStorage } from '@/hooks/useLocalStorage';

const  useFavorites = ()=> {
  const [favorites, setFavorites] = useLocalStorage<string[]>('favorites', []);

  const toggleFavorite = (name: string) => {
    setFavorites((prev) =>
      prev.includes(name) ? prev.filter((n) => n !== name) : [...prev, name]
    );
  };

  return { favorites, toggleFavorite };
}

export default useFavorites;