"use client";

import React from "react";
import { Search, X } from "lucide-react";
import { cn } from "@/lib/utils";

interface SearchBarProps {
  placeholder?: string;
  className?: string;
  onSearch?: (value: string) => void;
}

export function SearchBar({
  placeholder = "Discover videos...",
  className,
  onSearch,
}: SearchBarProps) {
  const [value, setValue] = React.useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    onSearch?.(e.target.value);
  };

  const handleClear = () => {
    setValue("");
    onSearch?.("");
  };

  return (
    <div className={cn("relative w-full", className)}>
      <Search
        className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground"
        aria-hidden="true"
      />
      <input
        type="search"
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        className="w-full pl-12 pr-10 py-3.5 h-12 bg-white border border-border text-foreground placeholder-muted-foreground rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent transition-all text-base"
        aria-label={placeholder}
      />
      {value && (
        <button
          onClick={handleClear}
          className="absolute right-4 top-1/2 -translate-y-1/2 p-1 hover:bg-secondary rounded-full transition-colors"
        >
          <X className="w-4 h-4 text-muted-foreground" />
        </button>
      )}
    </div>
  );
}
