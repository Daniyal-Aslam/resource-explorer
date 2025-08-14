'use client';

import { Button } from '@/components/ui/button';
import { useRouter, useSearchParams } from 'next/navigation';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface PaginationProps {
  pageCount: number;
  currentPage: number;
  filterType?: string;
  onPageChange?: (newPage: number) => void;
}

export default function Pagination({ pageCount, currentPage, filterType, onPageChange }: PaginationProps) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const setPage = (page: number) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set('page', String(page));
 
    if (filterType && filterType !== 'all') {
      params.set('type', filterType);
    } else {
      params.delete('type');
    }

    router.push(`/?${params.toString()}`); 
    if (onPageChange) onPageChange(page);
  };

  return (
    <div className="flex gap-2 justify-center items-center mt-6"> 
      <Button
        variant="outline"
        size="icon"
        disabled={currentPage === 1}
        onClick={() => setPage(currentPage - 1)}
      >
        <ChevronLeft className="w-4 h-4" />
      </Button>
 
      <span className="text-sm font-medium">
        Page {currentPage} of {pageCount}
      </span> 
      <Button
        variant="outline"
        size="icon"
        disabled={currentPage === pageCount}
        onClick={() => setPage(currentPage + 1)}
      >
        <ChevronRight className="w-4 h-4" />
      </Button>
    </div>
  );
}
