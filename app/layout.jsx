import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AnimationProvider from '@/components/AnimationProvider';

export const metadata = {
  metadataBase: new URL('https://ozlercaresolutions.com.au'),
  title: {
    default: 'Ozler Care Solutions — Technology for Safer Care',
    template: '%s | Ozler Care Solutions',
  },
  description: 'Australian care technology company building compliance, workforce management, and incident reporting infrastructure for the aged care and NDIS sectors. Seven integrated products covering worker screening, SIRS, audit readiness, policy management, training, and clinical documentation.',
  keywords: [
    'NDIS compliance software',
    'aged care technology Australia',
    'workforce compliance management',
    'SIRS reporting tool',
    'NDIS audit readiness',
    'worker screening check',
    'aged care compliance',
    'NDIS provider software',
    'care sector workforce management',
    'incident reporting aged care',
    'NDIS registration requirements',
    'OzlerShield',
    'OzlerSIRS',
    'Skill2Care',
    'clinical documentation AI',
    'policy management aged care',
  ],
  authors: [{ name: 'Ozler Care Solutions', url: 'https://ozlercaresolutions.com.au' }],
  creator: 'Ozler Care Solutions',
  publisher: 'Ozler Care Solutions',
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '48x48' },
      { url: '/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
      { url: '/favicon.svg', type: 'image/svg+xml' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180' },
    ],
  },
  manifest: '/site.webmanifest',
  appleWebApp: {
    title: 'Ozler Care',
  },
  openGraph: {
    type: 'website',
    locale: 'en_AU',
    url: 'https://ozlercaresolutions.com.au',
    siteName: 'Ozler Care Solutions',
    title: 'Ozler Care Solutions — Technology for Safer Care',
    description: 'Compliance, workforce management, and incident reporting infrastructure for Australian aged care and NDIS providers.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Ozler Care Solutions — Technology for Safer Care',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ozler Care Solutions — Technology for Safer Care',
    description: 'Compliance, workforce management, and incident reporting infrastructure for Australian aged care and NDIS providers.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://ozlercaresolutions.com.au',
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || '',
    // yandex: '',
    // bing: '',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': 'https://ozlercaresolutions.com.au/#organization',
      name: 'Ozler Care Solutions',
      url: 'https://ozlercaresolutions.com.au',
      logo: {
        '@type': 'ImageObject',
        url: 'https://ozlercaresolutions.com.au/favicon.svg',
      },
      description: 'Australian care technology company building compliance and workforce management infrastructure for the aged care and NDIS sectors.',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Melbourne',
        addressRegion: 'VIC',
        addressCountry: 'AU',
      },
      sameAs: [],
      contactPoint: {
        '@type': 'ContactPoint',
        contactType: 'sales',
        url: 'https://ozlercaresolutions.com.au/contact',
      },
    },
    {
      '@type': 'WebSite',
      '@id': 'https://ozlercaresolutions.com.au/#website',
      url: 'https://ozlercaresolutions.com.au',
      name: 'Ozler Care Solutions',
      publisher: { '@id': 'https://ozlercaresolutions.com.au/#organization' },
      description: 'Technology for safer care — compliance, workforce management, and incident reporting for Australian aged care and NDIS providers.',
    },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en-AU">
      <body className="min-h-screen flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <AnimationProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </AnimationProvider>
      </body>
    </html>
  );
}
