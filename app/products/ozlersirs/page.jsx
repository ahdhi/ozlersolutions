import ProductPage from '@/components/ProductPage';
export const metadata = {
  title: 'OzlerSIRS — Serious Incident Response Scheme Manager',
  description: 'SIRS-compliant incident reporting for NDIS and aged care providers. 90-second mobile reporting, automatic classification, 24-hour deadline tracking, and Commission-ready exports.',
  alternates: { canonical: '/products/ozlersirs' },
  openGraph: {
    title: 'OzlerSIRS — Incident Manager',
    description: 'SIRS-compliant incident reporting. 90-second mobile capture, auto-classification, and Commission-ready exports.',
    url: '/products/ozlersirs',
  },
};
export default function Page() { return <ProductPage productId="ozlersirs" />; }
