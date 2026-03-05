import { Section, SectionHeader, PageHero, CTASection, Card, Timeline } from '@/components/UI';
import { regulatoryTimeline } from '@/lib/data';
export const metadata = {
  title: 'Compliance Hub — Regulatory Timeline & Resources',
  description: 'Stay ahead of aged care and NDIS regulatory changes. Key compliance dates, deadlines, and resources including SIRS reporting, worker screening expiry, mandatory registration, and strengthened quality standards.',
  alternates: { canonical: '/compliance' },
  openGraph: {
    title: 'Compliance Hub — Ozler Care Solutions',
    description: 'Your resource hub for understanding aged care and NDIS regulatory changes, deadlines, and how to prepare.',
    url: '/compliance',
  },
};

export default function CompliancePage() {
  return (
    <>
      <PageHero breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Compliance Hub' }]} label="Compliance Hub" title="Stay ahead of regulatory change" description="Your resource hub for understanding what’s changing, when it takes effect, and how to prepare." />
      <Section><SectionHeader label="Regulatory Timeline" title="Key dates and deadlines" /><div className="max-w-3xl"><Timeline items={regulatoryTimeline} /></div></Section>
      <Section gray>
        <SectionHeader center label="Risks" title="What happens if you’re not prepared?" />
        <div className="grid md:grid-cols-3 gap-8">
          {[{ t: 'Civil Penalties', d: 'Significant financial penalties for SIRS non-compliance and quality standard breaches. Penalties can exceed $500,000.', c: 'border-t-red-500' },
            { t: 'Registration Cancellation', d: 'Failure to meet requirements can result in conditions, suspension, or cancellation. Unregistered providers cannot deliver funded supports.', c: 'border-t-amber-500' },
            { t: 'Funding Reductions', d: 'Poor documentation leads to inadequate evidence at plan reassessments. Participants may receive reduced funding.', c: 'border-t-oz-navy' },
          ].map(r => <Card key={r.t} className={`border-t-[3px] ${r.c}`}><h4 className="mb-3">{r.t}</h4><p className="text-slate-500 text-sm">{r.d}</p></Card>)}
        </div>
      </Section>
      <CTASection title="Don’t wait until it’s too late" description="Book a compliance assessment with our team." primaryText="Book a Free Assessment" primaryHref="/contact#demo" />
    </>
  );
}