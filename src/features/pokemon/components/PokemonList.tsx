'use client';

import Loader from '@/components/common/Loader';
import ErrorState from '@/components/common/ErrorState';
import Pagination from '@/components/common/Pagination';
import PokemonCard from './PokemonCard';
import { usePokemonList } from '../queries';
import { useSearchParams, useRouter } from 'next/navigation';

interface PokemonListProps {
  filterType?: string;
}


export default function PokemonList({ filterType }: PokemonListProps) {
  const searchParams = useSearchParams();
  const router = useRouter();
 
  const page = parseInt(searchParams.get('page') || '1', 10);
  const q = searchParams.get('q') || undefined;
 
  const { data, isLoading, isError, refetch } = usePokemonList(page, q, filterType);

  if (isLoading) return <Loader />;
  if (isError) return <ErrorState onRetry={refetch} />;
  if (!data?.results?.length) return <p>No Pokémon found.</p>;
 
  const handlePageChange = (newPage: number) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set('page', newPage.toString());
    router.push(`/?${params.toString()}`);
  };

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
        {data.results.map((p) => (
          <PokemonCard key={p.name} name={p.name} />
        ))}
      </div>
 
      {!filterType && data.count > 20 && (
        <Pagination
          pageCount={Math.ceil(data.count / 20)}
          currentPage={page}
          onPageChange={handlePageChange}
        />
      )}
    </>
  );
}
