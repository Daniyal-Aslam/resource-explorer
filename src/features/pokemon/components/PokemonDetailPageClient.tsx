'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import PokemonDetailCard from '@/features/pokemon/components/PokemonDetailCard';
import { getPokemonDetail } from '@/features/pokemon/api';
import Loader from '@/components/common/Loader';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { PokemonDetail } from '@/features/pokemon/types';

interface Props {
  name: string;
}

export default function PokemonDetailPageClient({ name }: Props) {
  const router = useRouter();
  const [pokemon, setPokemon] = useState<PokemonDetail | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;

    async function fetchData() {
      try {
        setLoading(true);
        const data = await getPokemonDetail(name);
        if (isMounted) {
          setPokemon(data);
        }
      } catch (err) {
        console.error(err);
        if (isMounted) setError('Failed to fetch Pokémon details.');
      } finally {
        if (isMounted) setLoading(false);
      }
    }

    fetchData();

    return () => {
      isMounted = false;
    };
  }, [name]);

  if (loading) return <Loader />;
  if (error) return <p className="text-red-500">{error}</p>;
  if (!pokemon) return <p>No data found.</p>;

  return (
    <div className="max-w-7xl mx-auto p-4">
      <Button
        variant="outline"
        size="sm"
        className="mb-4 flex items-center gap-2 dark:border-gray-700 dark:text-gray-100 dark:hover:bg-gray-800"
        onClick={() => router.back()}
      >
        <ArrowLeft size={16} />
        Back
      </Button>

      <PokemonDetailCard pokemon={pokemon} />
    </div>
  );
}
