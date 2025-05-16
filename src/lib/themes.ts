
export interface ThemeColorPalette {
  background: string;
  foreground: string;
  card: string;
  cardForeground: string;
  popover: string;
  popoverForeground: string;
  primary: string;
  primaryForeground: string;
  secondary: string;
  secondaryForeground: string;
  muted: string;
  mutedForeground: string;
  accent: string;
  accentForeground: string;
  destructive: string;
  destructiveForeground: string;
  border: string;
  input: string;
  ring: string;
  chart1: string;
  chart2: string;
  chart3: string;
  chart4: string;
  chart5: string;
  sidebarBackground: string;
  sidebarForeground: string;
  sidebarPrimary: string;
  sidebarPrimaryForeground: string;
  sidebarAccent: string;
  sidebarAccentForeground: string;
  sidebarBorder: string;
  sidebarRing: string;
}

export interface Theme {
  name: string;
  value: string; // Used for CSS class and next-themes value
  palette?: ThemeColorPalette; // Palette is optional as light/dark/system don't define it here
}

// Custom application themes are now removed.
// The ThemeSelector will only show "Light", "Dark", and "System".
// The ThemeProvider in layout.tsx will be configured with only these themes.
export const themes: Theme[] = [];
