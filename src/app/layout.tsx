import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://swayam-agrawal.vercel.app'),
  title: 'Swayam Agrawal',
  description: 'Portfolio of Swayam Agrawal',
  openGraph: {
    title: 'Swayam Agrawal',
    description: 'Portfolio of Swayam Agrawal',
    url: 'https://swayam-agrawal.vercel.app',
    siteName: 'Swayam Agrawal',
    images: [
      {
        url: '/assets/hero-landscape.jpg',
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Swayam Agrawal',
    description: 'Portfolio of Swayam Agrawal',
    images: ['/assets/hero-landscape.jpg'],
  },
  manifest: '/manifest.json',
  icons: {
    icon: '/favicon-32.png',
    apple: '/favicon-180.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
