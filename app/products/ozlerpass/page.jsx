import ProductPage from '@/components/ProductPage';
export const metadata = {
  title: 'OzlerPass — Worker Credential Passport',
  description: 'Portable digital credential passport for aged care and NDIS workers. Store qualifications, screening checks, training records, and share verified credentials with providers instantly.',
  alternates: { canonical: '/products/ozlerpass' },
  openGraph: {
    title: 'OzlerPass — Worker Credential Passport',
    description: 'Portable digital credential passport for care workers. Verified qualifications, screening checks, and instant sharing.',
    url: '/products/ozlerpass',
  },
};
export default function Page() { return <ProductPage productId="ozlerpass" />; }
