'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import PokemonDetailCard from '@/features/pokemon/components/PokemonDetailCard';
import { getPokemonDetail } from '@/features/pokemon/api';
import Loader from '@/components/common/Loader';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

interface Props {
  name: string;
}

export default function PokemonDetailPageClient({ name }: Props) {
  const router = useRouter();
  const [pokemon, setPokemon] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      const data = await getPokemonDetail(name);
      setPokemon(data);
      setLoading(false);
    }
    fetchData();
  }, [name]);

  if (loading) return <Loader />;

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
