import Link from 'next/link';
import { Section, SectionHeader, PageHero, CTASection, Card, Accordion, Badge } from '@/components/UI';
import { getProduct } from '@/lib/data';

const faq = (name) => [
  { q: 'How quickly can we get started?', a: 'Most providers are up and running within a week. Our onboarding team handles data migration, configuration, and staff training with a dedicated success manager.' },
  { q: 'Does it integrate with our existing systems?', a: `${name} works alongside your existing rostering and care management systems. We offer API integrations and CSV import/export capabilities.` },
  { q: 'Is our data secure?', a: 'All data is hosted on Australian infrastructure (AWS Sydney). We comply with Australian Privacy Principles, implement encryption at rest and in transit, and are on the SOC 2 Type II pathway.' },
  { q: 'What support do you provide?', a: 'Every customer gets a dedicated success manager, email and phone support during business hours, and access to our knowledge base. Enterprise customers receive priority SLA support.' },
];

export default function ProductPage({ productId }) {
  const product = getProduct(productId);
  if (!product) return null;

  return (
    <>
      <PageHero
        dark
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Solutions', href: '/solutions' }, { label: product.name }]}
        label={product.subtitle}
        title={
          <span className="flex items-center gap-3">
            <product.icon className="w-12 h-12 inline-block" /> {product.name}
          </span>
        }
        description={product.tagline}
      >
        <p className="text-slate-300 mt-4">{product.description}</p>
        <div className="flex gap-4 mt-8 flex-wrap">
          <Link href="/contact#demo" className="btn btn-primary btn-lg">{product.comingSoon ? 'Join Waitlist' : 'Book a Demo'}</Link>
          <Link href="/pricing" className="btn btn-white btn-lg">View Pricing</Link>
        </div>
        <div className="flex gap-8 mt-8 flex-wrap">
          <div className="text-sm"><span className="text-slate-400">Regulatory Trigger:</span><br /><span className="text-oz-teal-light font-semibold">{product.trigger}</span></div>
          <div className="text-sm"><span className="text-slate-400">Pricing:</span><br /><span className="text-white font-semibold">{product.price}</span></div>
        </div>
      </PageHero>

      <Section>
        <SectionHeader center label="Key Features" title="Everything you need. Nothing you don't." />
        <div className="grid md:grid-cols-3 gap-6">
          {product.features.map((f, i) => (
            <Card key={i}>
              <h4 className="mb-3">{f.title}</h4>
              <p className="text-slate-500 text-sm">{f.desc}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section gray>
        <div className="max-w-3xl mx-auto">
          <SectionHeader center label="Frequently Asked Questions" title={`Common questions about ${product.name}`} />
          <Accordion items={faq(product.name)} />
        </div>
      </Section>

      <CTASection
        title={`Ready to see ${product.name} in action?`}
        description="Book a 30-minute demo and we'll show you exactly how it works for your organisation."
        primaryText={product.comingSoon ? 'Join Waitlist' : 'Book a Demo'}
        secondaryText="View All Solutions"
        secondaryHref="/solutions"
      />
    </>
  );
}
