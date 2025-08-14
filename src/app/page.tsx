import PokemonList from '@/components/pokemon/PokemonList';
import SearchBar from '@/components/common/SearchBar'; 

export default function HomePage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row justify-between gap-4">
        <SearchBar /> 
      </div>
      <PokemonList />
    </div>
  );
}
