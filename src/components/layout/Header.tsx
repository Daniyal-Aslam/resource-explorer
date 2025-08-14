'use client';

import Link from 'next/link';
import { Heart } from 'lucide-react';
import useFavorites from '@/features/favorites/hooks/useFavorites';
import ThemeSwitcher from '@/components/common/ThemeSwitcher';

export default function Header() {
  const { favorites } = useFavorites();

  return (
    <header className="border-b py-4 px-4 bg-white dark:bg-gray-900">
      <div className="container mx-auto flex justify-between items-center">
        <nav className="flex gap-4 items-center">
          <Link href="/" className="font-bold text-gray-900 dark:text-gray-100">
            Resource Explorer
          </Link>
 
          <Link
            href="/favorites"
            className="relative flex items-center gap-1 text-gray-900 dark:text-gray-100"
          >
            <Heart
              className={`w-5 h-5 ${favorites.length > 0 ? 'text-red-500 fill-red-500' : ''}`}
            />
            <span>Favorites</span>
            {favorites.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold px-1.5 py-0.5 rounded-full">
                {favorites.length}
              </span>
            )}
          </Link>
        </nav>

        <div>
          <ThemeSwitcher />
        </div>
      </div>
    </header>
  );
}
