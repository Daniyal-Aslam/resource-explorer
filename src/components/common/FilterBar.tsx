"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

export type FilterOption = {
  label: string;
  value: string;
};

interface FilterBarProps {
  typeOptions: FilterOption[];
  selectedType: string;
  onTypeChange: (value: string) => void;
  onClearFilters: () => void;
  className?: string;
}

export default function FilterBar({
  typeOptions,
  selectedType,
  onTypeChange,
  onClearFilters,
  className
}: FilterBarProps) {
  const [internalType, setInternalType] = useState(selectedType);

  const handleChange = (value: string) => {
    setInternalType(value);
    onTypeChange(value);
  };

  return (
    <div
      className={cn(
        "flex flex-wrap items-center gap-4 bg-muted p-4 rounded-lg",
        className
      )}
    >
      {/* Type Filter */}
      <div className="flex flex-col gap-1">
        <Label htmlFor="type-select">Filter by Type</Label>
        <Select value={internalType} onValueChange={handleChange}>
          <SelectTrigger id="type-select" className="w-[180px]">
            <SelectValue placeholder="All types" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="">All</SelectItem>
            {typeOptions.map((option) => (
              <SelectItem key={option.value} value={option.value}>
                {option.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Clear Filters */}
      <Button
        variant="outline"
        onClick={onClearFilters}
        className="mt-6 sm:mt-0"
      >
        Clear Filters
      </Button>
    </div>
  );
}
