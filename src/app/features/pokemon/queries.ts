'use client';

import { useQuery } from '@tanstack/react-query';
import { getPokemonList, getPokemonDetail } from './api';
import { PokemonDetail } from './types';

export function usePokemonList(page: number, search?: string) {
  const offset = (page - 1) * 20;

  return useQuery({
    queryKey: ['pokemonList', page, search],
    queryFn: () => getPokemonList(offset, 20),
    staleTime: 60 * 1000, // 1 min cache
  });
}

export function usePokemonDetail(name: string) {
  return useQuery<PokemonDetail>({
    queryKey: ['pokemonDetail', name],
    queryFn: () => getPokemonDetail(name),
    staleTime: 5 * 60 * 1000, // 5 min cache
  });
}
