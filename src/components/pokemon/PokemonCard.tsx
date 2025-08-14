'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import useFavorites from '@/app/features/favorites/useFavorites';
import Link from 'next/link';

export default function PokemonCard({ name }: { name: string }) {
  const { favorites, toggleFavorite } = useFavorites();
  const isFav = favorites.includes(name);

  return (
    <Card className="hover:shadow-lg transition">
      <CardHeader>
        <CardTitle className="capitalize">{name}</CardTitle>
      </CardHeader>
      <CardContent className="flex justify-between">
        <Link href={`/pokemon/${name}`}>
          <Button variant="outline" size="sm">View</Button>
        </Link>
        <Button
          variant={isFav ? 'default' : 'outline'}
          size="sm"
          onClick={() => toggleFavorite(name)}
        >
          {isFav ? '★' : '☆'}
        </Button>
      </CardContent>
    </Card>
  );
}
