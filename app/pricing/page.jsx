import { Section, SectionHeader, PageHero, CTASection, PricingCard, Card, Accordion } from '@/components/UI';
import { pricingTiers, standaloneProducts } from '@/lib/data';
export const metadata = { title: 'Pricing' };

const faq = [
  { q: 'Is there a free trial?', a: 'We offer a free beta program for qualifying providers. Full access to OzlerShield for 30 days with dedicated onboarding. Contact us to check eligibility.' },
  { q: 'How is "per worker" counted?', a: 'Active workers on your roster during the billing period. Inactive or terminated workers don’t count.' },
  { q: 'Can I switch plans later?', a: 'Yes. Upgrade at any time. Downgrades take effect at the next billing cycle. No lock-in contracts.' },
  { q: 'Do you offer discounts for not-for-profits?', a: 'Yes. 15% discount for registered not-for-profit organisations. Contact sales with your ACNC registration details.' },
];

export default function PricingPage() {
  return (
    <>
      <PageHero breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Pricing' }]} label="Pricing" title="Simple, transparent pricing" description="Start with what you need. Scale as you grow. Every plan includes onboarding support." />
      <Section>
        <div className="grid md:grid-cols-3 gap-6">{pricingTiers.map(t => <PricingCard key={t.name} {...t} />)}</div>
      </Section>
      <Section gray>
        <SectionHeader center label="Standalone Products" title="Need just one solution?" />
        <div className="grid md:grid-cols-3 gap-6">{standaloneProducts.map(p => (
          <Card key={p.name} className="text-center"><h4>{p.name}</h4><div className="text-3xl font-extrabold text-oz-navy my-3 font-display">{p.price}</div><p className="text-slate-500 text-sm">{p.desc}</p></Card>
        ))}</div>
      </Section>
      <Section><div className="max-w-3xl mx-auto"><SectionHeader center label="FAQ" title="Pricing questions" /><Accordion items={faq} /></div></Section>
      <CTASection title="Still have questions?" description="Our team can help you find the right plan." primaryText="Talk to Us" primaryHref="/contact" />
    </>
  );
}