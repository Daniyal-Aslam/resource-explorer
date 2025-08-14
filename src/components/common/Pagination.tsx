'use client';

import { Button } from '@/components/ui/button';
import { useRouter, useSearchParams } from 'next/navigation';

export default function Pagination({ pageCount }: { pageCount: number }) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const currentPage = parseInt(searchParams.get('page') || '1', 10);

  const setPage = (page: number) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set('page', String(page));
    router.push(`/?${params.toString()}`);
  };

  return (
    <div className="flex gap-2 justify-center mt-6">
      <Button disabled={currentPage === 1} onClick={() => setPage(currentPage - 1)}>
        Previous
      </Button>
      <Button disabled={currentPage === pageCount} onClick={() => setPage(currentPage + 1)}>
        Next
      </Button>
    </div>
  );
}
