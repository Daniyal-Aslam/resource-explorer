"use client";

import { useState, Suspense } from "react";
import PokemonList from "@/features/pokemon/components/PokemonList";
import SearchBar from "@/components/common/SearchBar";
import FilterBar from "@/components/common/FilterBar";
import Loader from "@/components/common/Loader";

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
        <Suspense fallback={<Loader />}>
          <SearchBar />
        </Suspense>

        <FilterBar
          selectedType={selectedType}
          onTypeChange={handleTypeChange}
          onClearFilters={handleClearFilters}
        />
      </div>

      <Suspense fallback={<Loader />}>
        <PokemonList filterType={selectedType} />
      </Suspense>
    </div>
  );
}
