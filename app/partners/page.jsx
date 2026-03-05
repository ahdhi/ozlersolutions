import Link from 'next/link';
import { Section, SectionHeader, PageHero, CTASection, Card, FeatureList } from '@/components/UI';
import { partnerTypes } from '@/lib/data';
export const metadata = {
  title: 'Partner Program — Grow with Ozler',
  description: 'Partner with Ozler Care Solutions as an RTO, quality auditor, consultant, or technology provider. Revenue sharing, referral pipelines, API integrations, and co-marketing opportunities.',
  alternates: { canonical: '/partners' },
  openGraph: {
    title: 'Partner Program — Ozler Care Solutions',
    description: 'Grow with Ozler. Partnerships for RTOs, auditors, consultants, and technology providers.',
    url: '/partners',
  },
};

export default function PartnersPage() {
  return (
    <>
      <PageHero breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Partners' }]} label="Partner Program" title="Grow with Ozler" description="We partner with RTOs, quality auditors, consultants, and technology providers to deliver comprehensive compliance solutions.">
        <Link href="/contact" className="btn btn-primary btn-lg mt-6">Become a Partner</Link>
      </PageHero>
      <Section>
        <SectionHeader center label="Partnership Types" title="Find the right partnership for you" />
        <div className="grid md:grid-cols-2 gap-8">{partnerTypes.map(p => (
          <Card key={p.title}>
            <p.icon className="w-12 h-12 text-oz-blue mb-4" />
            <h3 className="mb-3">{p.title}</h3>
            <p className="text-slate-500 mb-4">{p.desc}</p>
            <FeatureList items={p.features} />
          </Card>
        ))}</div>
      </Section>
      <CTASection title="Ready to partner with us?" description="Let’s explore how we can work together." primaryText="Get in Touch" primaryHref="/contact" />
    </>
  );
}