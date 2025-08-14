import PokemonDetailPageClient from '@/features/pokemon/components/PokemonDetailPageClient';
import { Metadata } from 'next';

interface PageProps {
  params: { name: string };
}
 
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const name = params.name;

  return {
    title: `${name} | Pokémon Details`,
    description: `View detailed information about ${name}, including types, abilities, stats, and more.`,
    openGraph: {
      title: `${name} | Pokémon Details`,
      description: `Detailed stats and info about Pokémon ${name}.`,
      url: `/pokemon/${name}`,
    },
  };
}

export default function PokemonDetailPage({ params }: PageProps) { 
  return <PokemonDetailPageClient name={params.name} />;
}
