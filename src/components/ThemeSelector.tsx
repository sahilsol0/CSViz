
"use client";

import { useEffect, useState, type ChangeEvent } from "react";
import { useTheme } from "next-themes";
import { Palette } from "lucide-react";
import { themes as appThemes } from "@/lib/themes";
import { Label } from "@/components/ui/label";

export function ThemeSelector() {
  const { theme, setTheme } = useTheme(); // `theme` holds the actual current theme string
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    // Render a placeholder to avoid hydration mismatch and layout shift
    return (
      <div className="flex items-center gap-2" aria-hidden="true">
        <Palette className="h-5 w-5 text-muted-foreground" />
        <div className="w-[180px] h-10 bg-muted rounded-md animate-pulse" />
      </div>
    );
  }

  const displayThemes = [
    { name: "System", value: "system" },
    { name: "Light (Default)", value: "light" },
    { name: "Dark (Default)", value: "dark" },
    ...appThemes, // Custom themes from lib/themes.ts
  ];

  const handleThemeChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setTheme(event.target.value);
  };

  return (
    <div className="flex items-center gap-2">
      <Label htmlFor="theme-select" className="sr-only">
        Select Theme
      </Label>
      <Palette className="h-5 w-5 text-muted-foreground shrink-0" aria-hidden="true" />
      <select
        id="theme-select"
        value={theme ?? "system"} // Ensure value is never undefined for the select
        onChange={handleThemeChange}
        className="w-full sm:w-[180px] h-10 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
        aria-label="Select color theme"
      >
        {displayThemes.map((t) => (
          <option key={t.value} value={t.value}>
            {t.name}
          </option>
        ))}
      </select>
    </div>
  );
}
