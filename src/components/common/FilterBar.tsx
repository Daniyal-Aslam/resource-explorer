'use client';

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { usePokemonTypes } from "@/features/pokemon/queries";

interface FilterBarProps {
  selectedType: string;
  onTypeChange: (value: string) => void;
  onClearFilters: () => void;
  className?: string;
}

export default function FilterBar({
  selectedType,
  onTypeChange,
  onClearFilters,
  className,
}: FilterBarProps) {
  const [internalType, setInternalType] = useState(selectedType);

  useEffect(() => {
    setInternalType(selectedType);
  }, [selectedType]);

  const { data: typeOptions = [], isLoading } = usePokemonTypes();

  const handleChange = (value: string) => {
    const type = value === "all" ? "" : value;
    setInternalType(type);
    onTypeChange(type);
  };

  const handleClear = () => {
    setInternalType("");
    onClearFilters();
  };

  return (
    <div
      className={cn(
        "flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 px-2 py-2 rounded-lg",
        className
      )}
    >
      {!isLoading && typeOptions.length > 0 && (
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 w-full sm:w-auto">
          <Label htmlFor="type-select" className="font-semibold text-sm text-gray-700 dark:text-gray-200">
            Filter by Type:
          </Label>

          <div className="flex items-center gap-2 w-full sm:w-auto flex-1">
            <Select value={internalType || "all"} onValueChange={handleChange}>
              <SelectTrigger
                id="type-select"
                className="rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 hover:border-gray-400 dark:hover:border-gray-500 w-full"
              >
                <SelectValue placeholder="All types" />
              </SelectTrigger>

              <SelectContent className="bg-white dark:bg-gray-800 rounded-md shadow-lg text-gray-900 dark:text-gray-100">
                <SelectItem value="all" className="hover:bg-gray-100 dark:hover:bg-gray-700">
                  All
                </SelectItem>
                {typeOptions.map((option) => (
                  <SelectItem
                    key={option.value}
                    value={option.value}
                    className={cn(
                      "hover:bg-gray-100 dark:hover:bg-gray-700",
                      internalType === option.value && "bg-gray-200 dark:bg-gray-700 font-medium"
                    )}
                  >
                    {option.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            {internalType && (
              <Button
                variant="ghost"
                size="icon"
                className="p-2"
                onClick={handleClear}
              >
                <X className="w-4 h-4 text-gray-600 dark:text-gray-300 hover:text-red-500" />
              </Button>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
