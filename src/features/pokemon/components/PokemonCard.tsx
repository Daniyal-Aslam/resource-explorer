'use client';
 
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import useFavorites from '@/features/favorites/hooks/useFavorites';
import Link from 'next/link'; 

export default function PokemonCard({ name }: { name: string }) {
  const { favorites, addFavorite, removeFavorite } = useFavorites();
  const isFav = favorites.includes(name); 
 
  return (
    <Card className="hover:shadow-lg transition">
      <CardHeader>
        <CardTitle className="capitalize">{name}</CardTitle>
      </CardHeader>
      <CardContent className="flex justify-between items-center"> 
        <div className="flex gap-2">
          <Link href={`/pokemon/${name}`}>
            <Button variant="outline" size="sm">View</Button>
          </Link>
          <Button
            variant={isFav ? 'default' : 'outline'}
            size="sm"
            onClick={() => isFav ? removeFavorite(name) : addFavorite(name)}
          >
            {isFav ? '★' : '☆'}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
