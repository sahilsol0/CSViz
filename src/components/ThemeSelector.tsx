
"use client";

import { useEffect, useState, type ChangeEvent } from "react";
import { useTheme } from "next-themes";
import { Palette } from "lucide-react";
import { themes as appThemes, type Theme } from "@/lib/themes"; // Import Theme type
import { Label } from "@/components/ui/label";

// Define a type for the theme options in the selector
interface DisplayThemeOption {
  name: string;
  value: string;
}

export function ThemeSelector() {
  const { theme, setTheme, systemTheme } = useTheme(); // Added systemTheme
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    // Render a placeholder to avoid hydration mismatch and layout shift
    return (
      <div className="flex items-center gap-2" aria-hidden="true">
        <Palette className="h-5 w-5 text-muted-foreground" />
        <div className="w-full sm:w-[180px] h-10 bg-muted rounded-md animate-pulse" />
      </div>
    );
  }

  const displayThemes: DisplayThemeOption[] = [
    {
      name: systemTheme ? `System (${systemTheme.charAt(0).toUpperCase() + systemTheme.slice(1)})` : "System",
      value: "system",
    },
    { name: "Light", value: "light" }, // Simplified name
    { name: "Dark", value: "dark" },   // Simplified name
    // Map appThemes to ensure they only include name and value for DisplayThemeOption type
    ...appThemes.map((t: Theme) => ({ name: t.name, value: t.value })),
  ];

  const handleThemeChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setTheme(event.target.value);
  };

  // `theme` from useTheme can be 'system', 'light', 'dark', or a custom theme value.
  // If it's undefined (e.g., initial load with system default), fallback to "system".
  const currentSelectValue = theme ?? "system";

  return (
    <div className="flex items-center gap-2">
      <Label htmlFor="theme-select" className="sr-only">
        Select Theme
      </Label>
      <Palette className="h-5 w-5 text-muted-foreground shrink-0" aria-hidden="true" />
      <select
        id="theme-select"
        value={currentSelectValue}
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
