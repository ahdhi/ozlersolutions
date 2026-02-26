import Link from 'next/link';
import { Section, SectionHeader, PageHero, CTASection, Badge, FeatureList } from '@/components/UI';
import { products } from '@/lib/data';
export const metadata = { title: 'Solutions' };

export default function SolutionsPage() {
  return (
    <>
      <PageHero dark breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Solutions' }]} label="Our Solutions" title="One ecosystem. Complete compliance." description="Seven products, each anchored to a specific regulatory obligation. Together, they form an integrated platform where data flows automatically." />
      <Section>
        <div className="space-y-20">
          {products.map((p, i) => (
            <div key={p.id} className={`grid md:grid-cols-2 gap-16 items-center ${i % 2 === 1 ? 'md:[&>*:first-child]:order-2' : ''}`}>
              <div>
                <span className="label block mb-2">{p.subtitle}</span>
                <h3 className="text-2xl mb-4 flex items-center gap-2">
                  <p.icon className="w-8 h-8 text-oz-blue" /> {p.name} {p.comingSoon && <Badge color="blue">Coming Soon</Badge>}
                </h3>
                <p className="text-slate-500 mb-4">{p.description}</p>
                <FeatureList items={p.features.slice(0, 5).map(f => f.title)} />
                <div className="flex gap-3 mt-6">
                  <Link href={`/products/${p.id}`} className="btn btn-primary btn-sm">{p.comingSoon ? 'Join Waitlist' : 'Learn More'}</Link>
                  <Link href="/contact#demo" className="btn btn-ghost btn-sm">Book Demo</Link>
                </div>
              </div>
              <div className="bg-slate-50 rounded-3xl p-12 flex items-center justify-center min-h-[300px]">
                <p.icon className="w-32 h-32 text-slate-300" />
              </div>
            </div>
          ))}
        </div>
      </Section>
      <CTASection title="See how it all works together" description="Book a 30-minute demo." primaryText="Book a Demo" secondaryText="View Pricing" secondaryHref="/pricing" />
    </>
  );
}