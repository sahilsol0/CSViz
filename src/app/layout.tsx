
import type {Metadata, Viewport} from 'next';
import {Geist, Geist_Mono} from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/ThemeProvider';
// appThemes will now be an empty array, so allThemeValues will effectively be ["light", "dark", "system"]
import { themes as appThemes } from '@/lib/themes';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'CSViz: Mobile CSV Viewer',
  description: 'View CSV files easily on your mobile device.',
  applicationName: 'CSViz',
  manifest: '/manifest.json',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'CSViz',
    // startupImage: [...] // Optionally add startup images
  },
  formatDetection: {
    telephone: false,
  },
  msapplicationTileColor: '#008080', // Teal
  msapplicationTapHighlight: false,
  icons: {
    icon: '/icons/favicon.svg',
    apple: '/icons/apple-touch-icon.svg',
    shortcut: '/icons/favicon.svg',
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#008080' }, // Teal for light mode
    { media: '(prefers-color-scheme: dark)', color: '#00B3B3' }, // Brighter Teal for dark mode (matches --primary in dark theme)
  ],
  // 'color-scheme': 'light dark', // This can help adapt browser UI like scrollbars
};

// This will now correctly resolve to ["light", "dark", "system"]
// as appThemes from @/lib/themes is an empty array.
const allThemeValues = ["light", "dark", "system", ...appThemes.map(t => t.value)];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
          themes={allThemeValues} // Inform next-themes about all available theme names
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
