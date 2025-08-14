import PokemonDetailPageClient from '@/features/pokemon/components/PokemonDetailPageClient';

interface PokemonPageProps {
  params: { name: string };
  searchParams?: { [key: string]: string | string[] | undefined };
}

export default function PokemonDetailPage({ params }: PokemonPageProps) {
  return <PokemonDetailPageClient name={params.name} />;
}
