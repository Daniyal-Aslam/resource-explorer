import PokemonDetailCard from '@/components/pokemon/PokemonDetailCard';
import { getPokemonDetail } from '@/app/features/pokemon/api';
 
export default async function PokemonDetailPage({ params }: { params: { name: string } }) {
  const pokemon = await getPokemonDetail(params.name);

  return (
    <div>
      <PokemonDetailCard pokemon={pokemon} />
    </div>
  );
}
