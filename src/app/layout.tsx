import type {Metadata, Viewport} from 'next';
import {Geist, Geist_Mono} from 'next/font/google';
import './globals.css';

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
  themeColor: '#008080', // Teal for light mode
  // For dark mode, one could add:
  // { media: '(prefers-color-scheme: dark)', color: '#00B3B3' }
  // but this requires an array, and next-pwa might handle it better with manifest.
  // For simplicity, using a single theme color here that matches manifest.
  // Consider 'color-scheme': 'light dark' if you support both and want browser UI to adapt.
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
