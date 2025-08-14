'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import Head from 'next/head';
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
    <> 
      <Head>
        <title>{pokemon.name} | Pokémon Details</title>
        <meta name="description" content={`View detailed information about ${pokemon.name}, including types, abilities, stats, and more.`} />
        <meta property="og:title" content={`${pokemon.name} | Pokémon Details`} />
        <meta property="og:description" content={`Detailed stats and info about Pokémon ${pokemon.name}.`} />
        {pokemon.sprites?.other?.['official-artwork']?.front_default && (
          <meta property="og:image" content={pokemon.sprites.other['official-artwork'].front_default} />
        )}
      </Head>

      <div className="max-w-7xl mx-auto p-4"> 
        <h1 className="text-3xl font-bold mb-4 capitalize dark:text-gray-100">
          {pokemon.name} Details
        </h1>

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
    </>
  );
}
