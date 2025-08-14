'use client';

import { Input } from '@/components/ui/input';
import { useRouter, useSearchParams } from 'next/navigation';
import { useState, useEffect } from 'react';
import { getPokemonList } from '@/features/pokemon/api';
import Link from 'next/link';
import { X } from 'lucide-react'; 

export default function SearchBar() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [value, setValue] = useState(searchParams.get('q') || '');
  const [suggestions, setSuggestions] = useState<{ name: string }[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
 
  useEffect(() => {
    let active = true;
    const fetchSuggestions = async () => {
      if (!value.trim()) {
        setSuggestions([]);
        return;
      }
      const allData = await getPokemonList(0, 1000);
      const filtered = allData.results
        .filter((p) => p.name.toLowerCase().includes(value.toLowerCase()))
        .slice(0, 10);
      if (active) setSuggestions(filtered);
    };
    fetchSuggestions();
    return () => {
      active = false;
    };
  }, [value]);
 
  useEffect(() => {
    const handler = setTimeout(() => {
      const params = new URLSearchParams(searchParams.toString());
      if (value) {
        params.set('q', value);
        params.delete('page');
      } else {
        params.delete('q');
      }
      router.push(`/?${params.toString()}`);
    }, 400);

    return () => clearTimeout(handler);
  }, [value, router, searchParams]);

  const clearSearch = () => {
    setValue('');
    setSuggestions([]);
    const params = new URLSearchParams(searchParams.toString());
    params.delete('q');
    params.delete('page');
    router.push(`/?${params.toString()}`);
  };

  return (
    <div className="relative max-w-sm"> 
      <div className="relative">
        <Input
          placeholder="Search Pokémon..."
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
            setShowSuggestions(true);
          }}
          onFocus={() => setShowSuggestions(true)}
          onBlur={() => setTimeout(() => setShowSuggestions(false), 150)}
          className="pr-8"
        />
        {value && (
          <button
            type="button"
            onClick={clearSearch}
            className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
          >
            <X size={16} />
          </button>
        )}
      </div>
 
      {showSuggestions && suggestions.length > 0 && (
        <ul className="absolute z-10 bg-white border border-gray-200 rounded-md mt-1 w-full shadow-lg">
          {suggestions.map((p) => (
            <li key={p.name} className="hover:bg-gray-100">
              <Link
                href={`/pokemon/${p.name}`}
                className="block px-3 py-2 capitalize"
              >
                {p.name}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
