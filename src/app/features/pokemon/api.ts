import { PokemonListResponse, PokemonDetail } from './types';

const BASE_URL = 'https://pokeapi.co/api/v2';

export async function getPokemonList(offset = 0, limit = 20): Promise<PokemonListResponse> {
  const res = await fetch(`${BASE_URL}/pokemon?offset=${offset}&limit=${limit}`);
  if (!res.ok) throw new Error('Failed to fetch Pokémon list');
  return res.json();
}

export async function getPokemonDetail(name: string): Promise<PokemonDetail> {
  const res = await fetch(`${BASE_URL}/pokemon/${name}`);
  if (!res.ok) throw new Error('Failed to fetch Pokémon detail');
  return res.json();
}
