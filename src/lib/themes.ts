
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
      background: "210 40% 97%", 
      foreground: "210 40% 10%",  
      card: "210 40% 97%",
      cardForeground: "210 40% 10%",
      popover: "210 40% 97%",
      popoverForeground: "210 40% 10%",
      primary: "205 80% 48%",    // Slightly different blue, a bit deeper
      primaryForeground: "210 40% 98%", 
      secondary: "210 30% 90%",   
      secondaryForeground: "210 30% 15%",  
      muted: "210 30% 85%",
      mutedForeground: "210 30% 45%",
      accent: "185 65% 50%",     // A bit more teal/greenish
      accentForeground: "210 40% 98%",
      destructive: "0 70% 55%",     
      destructiveForeground: "0 0% 98%",
      border: "210 30% 80%",
      input: "210 30% 92%",
      ring: "205 80% 52%", // Ring matching new primary
      chart1: "205 70% 50%", 
      chart2: "170 60% 45%", 
      chart3: "220 50% 65%", 
      chart4: "185 40% 50%", 
      chart5: "210 60% 70%", 
      sidebarBackground: "210 40% 98%",
      sidebarForeground: "210 40% 10%",
      sidebarPrimary: "205 80% 48%",
      sidebarPrimaryForeground: "210 40% 98%",
      sidebarAccent: "185 65% 50%",
      sidebarAccentForeground: "210 40% 98%",
      sidebarBorder: "210 30% 88%",
      sidebarRing: "205 80% 52%",
    }
  },
  {
    name: "Forest Harmony",
    value: "forest",
    palette: {
      background: "120 10% 96%", 
      foreground: "120 25% 12%", 
      card: "120 10% 96%",
      cardForeground: "120 25% 12%",
      popover: "120 10% 96%",
      popoverForeground: "120 25% 12%",
      primary: "130 60% 35%",    
      primaryForeground: "120 10% 98%", 
      secondary: "110 15% 90%",   
      secondaryForeground: "110 20% 18%",  
      muted: "110 15% 85%",
      mutedForeground: "110 20% 42%",
      accent: "100 50% 45%",     
      accentForeground: "120 10% 98%",
      destructive: "0 65% 50%",     
      destructiveForeground: "0 0% 98%",
      border: "110 15% 80%",
      input: "110 15% 92%",
      ring: "130 60% 40%", 
      chart1: "130 50% 50%", 
      chart2: "80 60% 45%",  
      chart3: "40 50% 55%",  
      chart4: "100 30% 40%", 
      chart5: "140 40% 60%", 
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
