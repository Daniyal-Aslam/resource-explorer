import api from '@/lib/api';  
import { PokemonListResponse, PokemonDetail } from './types';

export async function getPokemonList(
  offset = 0,
  limit = 20,
  search?: string
): Promise<PokemonListResponse> {
  const res = await api.get(`/pokemon?offset=${offset}&limit=${limit}`);
  const data = res.data; 

  if (search) {
    data.results = data.results.filter((p: { name: string }) =>
      p.name.toLowerCase().includes(search.toLowerCase())
    );
    data.count = data.results.length;
  }

  return data;
}

export async function getPokemonListByType(
  type: string,
  search?: string,
  offset = 0,
  limit = 20
): Promise<PokemonListResponse> {
  const res = await api.get(`/type/${type}`);
  let results = res.data.pokemon.map((p: { pokemon: { name: string; url: string } }) => p.pokemon);

  if (search) {
    results = results.filter((p: { name: string }) =>
      p.name.toLowerCase().includes(search.toLowerCase())
    );
  }

  const paginated = results.slice(offset, offset + limit);

  return {
    count: results.length,
    next: offset + limit < results.length ? `?offset=${offset + limit}&limit=${limit}` : null,
    previous: offset > 0 ? `?offset=${Math.max(offset - limit, 0)}&limit=${limit}` : null,
    results: paginated,
  };
}

export async function getPokemonTypes(): Promise<{ label: string; value: string }[]> {
  const res = await api.get('/type');
  return res.data.results.map((t: { name: string }) => ({
    label: t.name.charAt(0).toUpperCase() + t.name.slice(1),
    value: t.name,
  }));
}

export async function getPokemonDetail(name: string): Promise<PokemonDetail> {
  const res = await api.get(`/pokemon/${name}`);
  return res.data;
}
