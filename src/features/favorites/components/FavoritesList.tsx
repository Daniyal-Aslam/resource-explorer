'use client';

import PokemonCard from '@/features/pokemon/components/PokemonCard';
import useFavorites from '../hooks/useFavorites';

export function FavoritesList() {
  const { favorites } = useFavorites();

  if (!favorites.length) {
    return <p>No favorites yet. Go add some Pokémon!</p>;
  }

  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
      {favorites.map((name) => (
        <PokemonCard key={name} name={name} />
      ))}
    </div>
  );
}
