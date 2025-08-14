 
import PokemonDetailPageClient from '@/features/pokemon/components/PokemonDetailPageClient';

type PokemonPageProps = {
  params: { name: string };
};
export default function PokemonDetailPage({ params }: PokemonPageProps) {
  return <PokemonDetailPageClient name={params.name} />;
}