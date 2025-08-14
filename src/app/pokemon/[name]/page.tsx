 
import PokemonDetailPageClient from '@/features/pokemon/components/PokemonDetailPageClient';

export default function PokemonDetailPage({ params }: { params: { name: string } }) {
  return <PokemonDetailPageClient name={params.name} />;
}
