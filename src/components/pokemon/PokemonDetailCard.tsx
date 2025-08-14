'use client';

import { PokemonDetail } from '../../app/features/pokemon/types';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function PokemonDetailCard({ pokemon }: { pokemon: PokemonDetail }) {
  const image =
    pokemon.sprites.other?.['official-artwork']?.front_default ||
    pokemon.sprites.front_default;

  return (
    <Card>
      <CardHeader>
        <CardTitle className="capitalize">{pokemon.name}</CardTitle>
      </CardHeader>
      <CardContent>
        <img src={image} alt={pokemon.name} className="w-48 h-48 mx-auto" />
        <div className="mt-4 space-y-2">
          <p><strong>ID:</strong> {pokemon.id}</p>
          <p><strong>Height:</strong> {pokemon.height}</p>
          <p><strong>Weight:</strong> {pokemon.weight}</p>
          <p><strong>Types:</strong> {pokemon.types.map(t => t.type.name).join(', ')}</p>
          <p><strong>Abilities:</strong> {pokemon.abilities.map(a => a.ability.name).join(', ')}</p>
        </div>
      </CardContent>
    </Card>
  );
}
