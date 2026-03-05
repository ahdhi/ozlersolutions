import ProductPage from '@/components/ProductPage';
export const metadata = {
  title: 'OzlerScribe — Clinical Documentation AI',
  description: 'AI-powered clinical documentation for aged care and NDIS providers. Voice-to-note conversion, progress note drafting, and compliance-aligned documentation with human approval workflow.',
  alternates: { canonical: '/products/ozlerscribe' },
  openGraph: {
    title: 'OzlerScribe — Clinical Documentation AI',
    description: 'AI-powered clinical documentation. Voice-to-note, progress note drafting, and compliance-aligned records.',
    url: '/products/ozlerscribe',
  },
};
export default function Page() { return <ProductPage productId="ozlerscribe" />; }
