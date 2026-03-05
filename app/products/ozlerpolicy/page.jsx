import ProductPage from '@/components/ProductPage';
export const metadata = {
  title: 'OzlerPolicy — Standards & Policy Engine',
  description: 'Automated policy management aligned to NDIS Practice Standards and Strengthened Aged Care Quality Standards. Version control, staff acknowledgement tracking, and regulatory change alerts.',
  alternates: { canonical: '/products/ozlerpolicy' },
  openGraph: {
    title: 'OzlerPolicy — Standards & Policy Engine',
    description: 'Automated policy management aligned to NDIS and aged care quality standards. Version control and regulatory alerts.',
    url: '/products/ozlerpolicy',
  },
};
export default function Page() { return <ProductPage productId="ozlerpolicy" />; }
