import {FavoritesList} from '@/features/favorites/components/FavoritesList';
export default function FavoritesPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Favorite Pokémon</h1>
      <FavoritesList />
    </div>
  );
}
