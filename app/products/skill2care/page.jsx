import ProductPage from '@/components/ProductPage';
export const metadata = {
  title: 'Skill2Care — Compliance Training Platform',
  description: 'Targeted compliance training platform for aged care and NDIS workers. Micro-learning modules, automatic training gap detection, and credential updates on completion.',
  alternates: { canonical: '/products/Skill2Care' },
  openGraph: {
    title: 'Skill2Care — Compliance Training Platform',
    description: 'Targeted compliance training for care workers. Micro-learning, automatic gap detection, and credential updates.',
    url: '/products/Skill2Care',
  },
};
export default function Page() { return <ProductPage productId="Skill2Care" />; }
