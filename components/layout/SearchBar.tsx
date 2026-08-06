"use client";

import type { ChangeEventHandler } from "react";
import { Search } from "lucide-react";
import { SearchInput } from "@/components/ui/SearchInput";

interface SearchBarProps {
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
}

export default function SearchBar({ value, onChange }: SearchBarProps) {
  return <SearchInput value={value} onChange={onChange} placeholder="Search tees, categories, colors..." />;
}
