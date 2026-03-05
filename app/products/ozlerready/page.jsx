import ProductPage from '@/components/ProductPage';
export const metadata = {
  title: 'OzlerReady — Audit Readiness Kit',
  description: 'Automated audit preparation for NDIS and aged care providers. Generate timestamped evidence packs, track compliance gaps, and pass audits with confidence.',
  alternates: { canonical: '/products/ozlerready' },
  openGraph: {
    title: 'OzlerReady — Audit Readiness Kit',
    description: 'Automated audit prep. Timestamped evidence packs and compliance gap tracking for aged care and NDIS audits.',
    url: '/products/ozlerready',
  },
};
export default function Page() { return <ProductPage productId="ozlerready" />; }
