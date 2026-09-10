import type { Metadata, Viewport } from 'next';
import { Playfair_Display, Pinyon_Script, Archivo, Archivo_Black } from 'next/font/google';
import { Analytics } from '@vercel/analytics/next';
import 'lenis/dist/lenis.css';
import './globals.css';
import { SmoothScroll } from '@/components/SmoothScroll';
import { SITE_URL, CONTACT_EMAIL, LINKEDIN_URL } from '@/lib/site';

const archivoBlack = Archivo_Black({
  subsets: ['latin'],
  weight: '400',
  display: 'swap',
  variable: '--font-grotesk-var',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '700', '800'],
  style: ['normal', 'italic'],
  display: 'swap',
  variable: '--font-display-var',
});

const pinyon = Pinyon_Script({
  subsets: ['latin'],
  weight: '400',
  display: 'swap',
  variable: '--font-script-var',
});

const archivo = Archivo({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  display: 'swap',
  variable: '--font-ui-var',
});

const DESCRIPTION =
  'Swayam Agrawal is a finance student whose work runs from field research and financial-reporting compliance to go-to-market projects, the kind of work that ends with a number attached to it.';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Swayam Agrawal · Research & Finance',
    template: '%s · Swayam Agrawal',
  },
  description: DESCRIPTION,
  applicationName: 'Swayam Agrawal',
  authors: [{ name: 'Swayam Agrawal', url: SITE_URL }],
  creator: 'Swayam Agrawal',
  publisher: 'Swayam Agrawal',
  alternates: { canonical: '/' },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
  },
  openGraph: {
    type: 'website',
    title: 'Swayam Agrawal · Research & Finance',
    description: DESCRIPTION,
    url: '/',
    siteName: 'Swayam Agrawal',
    locale: 'en_IN',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Swayam Agrawal' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Swayam Agrawal · Research & Finance',
    description: DESCRIPTION,
    images: ['/og-image.jpg'],
  },
  manifest: '/manifest.json',
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon-32.png', type: 'image/png', sizes: '32x32' },
      { url: '/favicon-512.png', type: 'image/png', sizes: '512x512' },
    ],
    apple: '/favicon-180.png',
  },
};

export const viewport: Viewport = {
  themeColor: '#F2EFE6',
  colorScheme: 'light',
};

const personJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Swayam Agrawal',
  url: SITE_URL,
  email: `mailto:${CONTACT_EMAIL}`,
  jobTitle: 'Finance researcher',
  description: DESCRIPTION,
  address: { '@type': 'PostalAddress', addressLocality: 'Pune', addressCountry: 'IN' },
  alumniOf: [
    { '@type': 'CollegeOrUniversity', name: 'Indira College of Commerce and Science, Pune University' },
    { '@type': 'CollegeOrUniversity', name: 'Narsee Monjee College of Commerce and Economics, Mumbai University' },
  ],
  knowsAbout: ['Financial modeling', 'Field research', 'Ind AS / IFRS compliance', 'Go-to-market strategy', 'Data analysis'],
  sameAs: [LINKEDIN_URL],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${pinyon.variable} ${archivo.variable} ${archivoBlack.variable}`}
    >
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <SmoothScroll />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
