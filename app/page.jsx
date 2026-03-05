import Link from 'next/link';
import { Section, SectionHeader, StatsBar, TestimonialCard, CTASection, Card } from '@/components/UI';
import { products, stats, testimonials } from '@/lib/data';
import { ClockIcon, ClipboardDocumentCheckIcon, ExclamationTriangleIcon, ArrowPathIcon, BoltIcon, ArchiveBoxIcon, NewspaperIcon } from '@heroicons/react/24/outline';
import DashboardSection from '@/components/DashboardSection';
import ScrollSection, { MotionChild } from '@/components/ScrollSection';
import HeroContent from '@/components/HeroContent';
import ParticleCanvas from '@/components/ParticleCanvas';
import GradientOrbs from '@/components/GradientOrbs';

export const metadata = {
  title: 'Ozler Care Solutions — Compliance & Workforce Technology for Aged Care & NDIS',
  description: 'Australia\'s integrated compliance platform for aged care and NDIS providers. Worker screening, SIRS incident reporting, audit readiness, policy management, training, and clinical documentation — seven products, one ecosystem.',
  alternates: { canonical: '/' },
  openGraph: {
    title: 'Ozler Care Solutions — Technology for Safer Care',
    description: 'Integrated compliance ecosystem for Australian aged care and NDIS providers. Worker screening, incident reporting, audit readiness, and more.',
    url: '/',
  },
};

const colorBorder = { blue: 'border-t-oz-blue', red: 'border-t-red-500', teal: 'border-t-oz-teal', amber: 'border-t-amber-500', green: 'border-t-emerald-500' };

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center bg-gradient-to-br from-slate-50 via-teal-50/30 to-emerald-50/30 overflow-hidden pt-24 pb-16 animate-gradient-flow">
        <ParticleCanvas />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(21,138,128,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(21,138,128,0.03)_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none" />
        <GradientOrbs preset="hero" />
        <div className="max-w-7xl mx-auto px-6 md:px-8 w-full relative z-10">
          <HeroContent />
          <DashboardSection />
        </div>
      </section>

      {/* Stats */}
      <ScrollSection variant="blur">
        <Section>
          <SectionHeader center label="By the Numbers" title="The compliance stakes in Australian care" description="The sector is growing — and so is the regulatory burden. These are the numbers every provider needs to understand." />
          <StatsBar stats={stats} />
        </Section>
      </ScrollSection>

      {/* Problem */}
      <ScrollSection variant="scale" stagger>
        <Section gray>
          <SectionHeader center label="The Challenge" title="Australia's care sector faces its biggest regulatory shift in three decades" description="New quality standards, mandatory registration, worker screening renewals, and incident reporting obligations are creating an unprecedented compliance burden." />
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: ClockIcon, color: 'bg-red-50 text-red-500', title: 'Screening Expiry Wave', desc: 'First wave of 5-year NDIS Worker Screening Checks expiring from February 2026. One expired credential during audit = automatic non-conformance.' },
              { icon: ClipboardDocumentCheckIcon, color: 'bg-amber-50 text-amber-500', title: 'Mandatory Registration', desc: 'SIL and platform providers must register by July 2026 or cease operating. Most have never been audited.' },
              { icon: ExclamationTriangleIcon, color: 'bg-teal-50 text-oz-blue', title: '24-Hour Reporting', desc: 'Priority 1 incidents must be reported within 24 hours under SIRS. Significant civil penalties for non-compliance.' },
            ].map(c => (
              <MotionChild key={c.title}>
                <Card>
                  <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-5 ${c.color}`}>
                    <c.icon className="w-8 h-8" />
                  </div>
                  <h4 className="mb-3">{c.title}</h4>
                  <p className="text-slate-500 text-[0.95rem]">{c.desc}</p>
                </Card>
              </MotionChild>
            ))}
          </div>
        </Section>
      </ScrollSection>

      {/* Solutions Grid */}
      <ScrollSection variant="rotate" stagger>
        <Section>
          <SectionHeader center label="Our Solutions" title="Seven products. One integrated ecosystem." description="Every product anchored to a specific regulatory obligation. Data flows between products automatically." />
          <div className="grid md:grid-cols-3 gap-6">
            {products.filter(p => !p.comingSoon).map((p) => (
              <MotionChild key={p.id}>
                <Card href={`/products/${p.id}`} className={`border-t-[3px] ${colorBorder[p.color] || 'border-t-oz-blue'}`}>
                  <p.icon className="w-12 h-12 text-oz-blue mb-4 group-hover:scale-125 transition-transform" />
                  <h4 className="mb-2">{p.name}</h4>
                  <p className="text-slate-500 text-sm">{p.shortDesc}</p>
                  <span className="inline-flex items-center gap-1.5 mt-4 font-display font-semibold text-sm text-oz-blue">Learn more →</span>
                </Card>
              </MotionChild>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/solutions" className="btn btn-secondary btn-lg">View All Solutions →</Link>
          </div>
        </Section>
      </ScrollSection>

      {/* Flywheel */}
      <ScrollSection variant="fadeUp">
        <Section className="bg-gradient-to-br from-teal-50 via-slate-50 to-emerald-50 relative overflow-hidden">
          <GradientOrbs preset="section" />
          <div className="relative z-10">
            <SectionHeader center label="How It Works" title="The Integration Flywheel" description="Every action in one product triggers relevant workflows across the ecosystem." />
            <ScrollSection variant="fadeUp" stagger>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  { icon: ArrowPathIcon, color: 'text-oz-teal', bgColor: 'from-teal-50 to-cyan-50', title: 'Credential Renewal Loop', desc: 'First Aid expires → OzlerShield alerts → One-click Skill2Care enrolment → Completion auto-updates credential → OzlerPass reflects change' },
                  { icon: BoltIcon, color: 'text-amber-500', bgColor: 'from-amber-50 to-orange-50', title: 'Incident Response Loop', desc: 'Worker reports incident → OzlerSIRS captures → Investigation reveals training gap → Skill2Care module assigned automatically' },
                  { icon: ArchiveBoxIcon, color: 'text-oz-blue', bgColor: 'from-teal-50 to-cyan-50', title: 'Audit Evidence Loop', desc: 'Audit date approaches → OzlerReady generates pack → Pulls live data from Shield + SIRS + Policy → Timestamped, ready to submit' },
                  { icon: NewspaperIcon, color: 'text-oz-navy', bgColor: 'from-emerald-50 to-teal-50', title: 'Standards Update Loop', desc: 'Government updates standards → OzlerPolicy flags policies → Drafts revisions → Skill2Care pushes updated training' },
                ].map((c) => (
                  <MotionChild key={c.title}>
                    <div className={`bg-gradient-to-br ${c.bgColor} border border-slate-200 rounded-2xl p-8 transition-all duration-400 hover:shadow-[0_20px_60px_rgba(21,138,128,0.15)] hover:-translate-y-2 hover:scale-[1.02] group`}>
                      <c.icon className={`w-10 h-10 mb-3 ${c.color} group-hover:scale-110 transition-transform duration-400 icon-float`} />
                      <h4 className="text-oz-navy mb-2 group-hover:text-oz-blue transition-colors duration-300">{c.title}</h4>
                      <p className="text-slate-600 text-sm leading-relaxed">{c.desc}</p>
                    </div>
                  </MotionChild>
                ))}
              </div>
            </ScrollSection>
          </div>
        </Section>
      </ScrollSection>

      {/* Testimonials */}
      <ScrollSection variant="blur" stagger>
        <Section>
          <SectionHeader center label="Built for Australian Care" title="Trusted by forward-thinking providers" />
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t) => (
              <MotionChild key={t.name}>
                <TestimonialCard {...t} />
              </MotionChild>
            ))}
          </div>
        </Section>
      </ScrollSection>

      <ScrollSection variant="scale">
        <CTASection title="Ready to make compliance invisible?" description="Join providers across Australia who are replacing audit anxiety with continuous compliance." primaryText="Book a Demo" secondaryText="View Pricing" secondaryHref="/pricing" />
      </ScrollSection>
    </>
  );
}
