import ProductPage from '@/components/ProductPage';
export const metadata = {
  title: 'OzlerShield — Workforce Compliance Tracker',
  description: 'Real-time workforce compliance tracking for aged care and NDIS providers. Automate worker screening checks, credential expiry alerts, and compliance evidence generation.',
  alternates: { canonical: '/products/ozlershield' },
  openGraph: {
    title: 'OzlerShield — Workforce Compliance Tracker',
    description: 'Real-time workforce compliance tracking. Automate worker screening, credential alerts, and evidence generation.',
    url: '/products/ozlershield',
  },
};
export default function Page() { return <ProductPage productId="ozlershield" />; }
