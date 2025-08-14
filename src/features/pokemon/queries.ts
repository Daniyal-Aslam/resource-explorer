'use client';

import { useQuery } from '@tanstack/react-query';
import { getPokemonList, getPokemonListByType, getPokemonDetail, getPokemonTypes } from './api';
import { PokemonDetail } from './types';

export function usePokemonList(page: number, search?: string, type?: string) {
  const offset = (page - 1) * 20;

  return useQuery({
    queryKey: ['pokemonList', page, search, type],
    queryFn: async () => {
      if (type && type !== 'all') {
        return getPokemonListByType(type, search, offset, 20);
      }
      return getPokemonList(offset, 20, search);
    },
    staleTime: 60 * 1000,
  });
}

export function usePokemonTypes() {
  return useQuery({
    queryKey: ['pokemonTypes'],
    queryFn: getPokemonTypes,
    staleTime: 10 * 60 * 1000,  
  });
}

export function usePokemonDetail(name: string) {
  return useQuery<PokemonDetail>({
    queryKey: ['pokemonDetail', name],
    queryFn: () => getPokemonDetail(name),
    staleTime: 5 * 60 * 1000,
  });
}
