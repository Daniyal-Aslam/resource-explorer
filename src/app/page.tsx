"use client";

import { useState } from 'react';
import PokemonList from '@/features/pokemon/components/PokemonList';
import SearchBar from '@/components/common/SearchBar';
import FilterBar from '@/components/common/FilterBar';

export default function HomePage() {
  const [selectedType, setSelectedType] = useState("");

  const handleTypeChange = (value: string) => {
    setSelectedType(value);
  };

  const handleClearFilters = () => {
    setSelectedType("");
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row justify-between gap-4">
        <SearchBar />
        <FilterBar
          selectedType={selectedType}
          onTypeChange={handleTypeChange}
          onClearFilters={handleClearFilters}
        />
      </div>
 
      <PokemonList filterType={selectedType} />
    </div>
  );
}
