import PokemonDetailPageClient from '@/features/pokemon/components/PokemonDetailPageClient';

export default async function PokemonDetailPage({
  params,
}: {
  params: Promise<{ name: string }>;
}) {
  const { name } = await params;  
  const pokemonName = name ?? 'pikachu';

  return <PokemonDetailPageClient name={pokemonName} />;
}
