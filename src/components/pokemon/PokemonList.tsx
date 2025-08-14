'use client';

import Loader from '@/components/common/Loader';
import ErrorState from '@/components/common/ErrorState';
import Pagination from '@/components/common/Pagination';
import PokemonCard from './PokemonCard';
import { usePokemonList } from '../../app/features/pokemon/queries';
import { useSearchParams } from 'next/navigation';

export default function PokemonList() {
  const searchParams = useSearchParams();
  const page = parseInt(searchParams.get('page') || '1', 10);
  const q = searchParams.get('q') || undefined;

  const { data, isLoading, isError, refetch } = usePokemonList(page, q);

  if (isLoading) return <Loader />;
  if (isError) return <ErrorState onRetry={refetch} />;

  if (!data?.results?.length) {
    return <p>No Pokémon found.</p>;
  }

  return (
    <>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {data.results.map((p) => (
          <PokemonCard key={p.name} name={p.name} />
        ))}
      </div>
      <Pagination pageCount={Math.ceil(data.count / 20)} />
    </>
  );
}
