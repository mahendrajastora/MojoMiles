"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";
import { cn } from "@/lib/utils";

export function ThemeToggle() {
  const { theme, toggleTheme, ready } = useTheme();

  if (!ready) {
    return null;
  }

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label="Toggle theme"
      className={cn(
        "inline-flex h-11 items-center justify-center rounded-full border border-white/10 bg-white/5 px-4 py-3 text-white/80 transition hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-[#1F3A2D]/30"
      )}
    >
      {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
    </button>
  );
}
