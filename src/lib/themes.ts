
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
  palette: ThemeColorPalette;
}

export const themes: Theme[] = [
  {
    name: "Oceanic Serenity",
    value: "oceanic",
    palette: {
      background: "210 40% 97%", // Light blue-gray
      foreground: "210 40% 10%",  // Dark blue-gray
      card: "210 40% 97%",
      cardForeground: "210 40% 10%",
      popover: "210 40% 97%",
      popoverForeground: "210 40% 10%",
      primary: "200 85% 50%",    // Bright deep blue
      primaryForeground: "210 40% 98%", // Almost white
      secondary: "210 30% 90%",   // Lighter blue-gray
      secondaryForeground: "210 30% 15%",  // Darker blue-gray
      muted: "210 30% 85%",
      mutedForeground: "210 30% 45%",
      accent: "190 70% 55%",     // Cyan-teal
      accentForeground: "210 40% 98%",
      destructive: "0 70% 55%",     // Standard red
      destructiveForeground: "0 0% 98%",
      border: "210 30% 80%",
      input: "210 30% 92%",
      ring: "200 85% 55%", // Ring matching primary
      chart1: "200 70% 50%", // Blue
      chart2: "170 60% 45%", // Seafoam green
      chart3: "220 50% 65%", // Lavender blue
      chart4: "180 40% 50%", // Teal
      chart5: "210 60% 70%", // Sky blue
      sidebarBackground: "210 40% 98%",
      sidebarForeground: "210 40% 10%",
      sidebarPrimary: "200 85% 50%",
      sidebarPrimaryForeground: "210 40% 98%",
      sidebarAccent: "190 70% 55%",
      sidebarAccentForeground: "210 40% 98%",
      sidebarBorder: "210 30% 88%",
      sidebarRing: "200 85% 55%",
    }
  },
  {
    name: "Forest Harmony",
    value: "forest",
    palette: {
      background: "120 10% 96%", // Very light green-gray
      foreground: "120 25% 12%", // Dark forest green
      card: "120 10% 96%",
      cardForeground: "120 25% 12%",
      popover: "120 10% 96%",
      popoverForeground: "120 25% 12%",
      primary: "130 60% 35%",    // Rich deep green
      primaryForeground: "120 10% 98%", // Almost white
      secondary: "110 15% 90%",   // Light moss green
      secondaryForeground: "110 20% 18%",  // Dark moss green
      muted: "110 15% 85%",
      mutedForeground: "110 20% 42%",
      accent: "100 50% 45%",     // Brighter olive/lime green
      accentForeground: "120 10% 98%",
      destructive: "0 65% 50%",     // Standard red
      destructiveForeground: "0 0% 98%",
      border: "110 15% 80%",
      input: "110 15% 92%",
      ring: "130 60% 40%", // Ring matching primary
      chart1: "130 50% 50%", // Green
      chart2: "80 60% 45%",  // Yellow-green
      chart3: "40 50% 55%",  // Earthy orange
      chart4: "100 30% 40%", // Muted lime
      chart5: "140 40% 60%", // Soft green
      sidebarBackground: "120 10% 97%",
      sidebarForeground: "120 25% 12%",
      sidebarPrimary: "130 60% 35%",
      sidebarPrimaryForeground: "120 10% 98%",
      sidebarAccent: "100 50% 45%",
      sidebarAccentForeground: "120 10% 98%",
      sidebarBorder: "110 15% 86%",
      sidebarRing: "130 60% 40%",
    }
  },
];
