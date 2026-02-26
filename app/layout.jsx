import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AnimationProvider from '@/components/AnimationProvider';

export const metadata = {
  title: {
    default: 'Ozler Care Solutions — Technology for Safer Care',
    template: '%s | Ozler Care Solutions',
  },
  description: 'Australian care technology company building compliance and workforce management infrastructure for the aged care and NDIS sectors.',
  keywords: ['NDIS compliance', 'aged care technology', 'workforce management', 'SIRS reporting', 'audit readiness', 'Australia'],
  authors: [{ name: 'Ozler Care Solutions' }],
  openGraph: {
    type: 'website',
    locale: 'en_AU',
    url: 'https://ozlercaresolutions.com.au',
    siteName: 'Ozler Care Solutions',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <AnimationProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </AnimationProvider>
      </body>
    </html>
  );
}
