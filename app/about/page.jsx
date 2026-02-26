import { Section, SectionHeader, PageHero, CTASection, Card, Timeline } from '@/components/UI';
import { companyValues } from '@/lib/data';
import Image from 'next/image';
export const metadata = { title: 'About Us' };

const timeline = [
  { date: 'November 2025', status: 'ACTIVE', title: 'Strengthened Quality Standards take effect', desc: 'The most detailed aged care standards in 30 years. Every provider must update their entire policy suite.' },
  { date: 'February 2026', status: 'NOW', title: 'Worker screening expiry wave begins', desc: 'First wave of 5-year checks expiring. Ozler Care Solutions is founded.' },
  { date: 'Q1 2026', status: 'UPCOMING', title: 'OzlerShield launches in beta', desc: 'Workforce compliance tracker enters beta with Victorian NDIS providers.' },
  { date: 'July 2026', status: 'UPCOMING', title: 'Mandatory registration deadline', desc: 'NDIS mandatory platform registration takes effect. Full product ecosystem operational.' },
];

export default function AboutPage() {
  return (
    <>
      <PageHero breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'About' }]} label="About Us" title="We’re building the compliance infrastructure Australia’s care sector needs" description="Ozler Care Solutions is a Melbourne-based care technology company. We help aged care and NDIS providers meet their regulatory obligations through intelligent software." />
      <Section>
        <div className="grid md:grid-cols-2 gap-12">
          <div><span className="label block mb-3">Our Mission</span><h3>Make regulatory compliance invisible — so care providers can focus on the people they support.</h3><p className="mt-4 text-slate-500">We believe compliance should be a continuous, automated background process — not a crisis before every audit.</p></div>
          <div><span className="label block mb-3 text-oz-teal">Our Vision</span><h3>A care sector where every provider is continuously compliant and every worker’s credentials are instantly verifiable.</h3><p className="mt-4 text-slate-500">We’re building towards a future where regulatory compliance is embedded into daily operations.</p></div>
        </div>
      </Section>
      <Section gray><SectionHeader center label="Our Values" title="What guides every decision we make" />
        <div className="grid md:grid-cols-3 gap-8">{companyValues.map(v => (
          <Card key={v.title}>
            <v.icon className="w-12 h-12 text-oz-blue mb-4" />
            <h4 className="mb-3">{v.title}</h4>
            <p className="text-slate-500 text-sm">{v.desc}</p>
          </Card>
        ))}</div>
      </Section>
      <Section><div className="max-w-3xl"><SectionHeader label="Our Story" title="Why we started Ozler" description="Australia’s care sector is undergoing its most significant regulatory transformation in three decades." /><Timeline items={timeline} /></div></Section>

      {/* Namesake */}
      <Section gray>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="label block mb-3 text-oz-teal">The Name Behind the Company</span>
            <h3 className="mb-4">Named after Sir William Osler</h3>
            <p className="text-slate-500 mb-4">
              "Ozler Care" is a tribute to <strong className="text-oz-navy">Sir William Osler (1849–1919)</strong>, widely regarded as the Father of Modern Medicine. Born in Canada, Osler transformed how medicine was taught and practised by insisting that doctors learn at the patient’s bedside — not just from textbooks. He believed that care was a calling, not a transaction.
            </p>
            <p className="text-slate-500 mb-4">
              Osler championed rigour, compassion, and continuous learning as the foundations of good care. He introduced the residency training system still used worldwide, and was the first Canadian physician to be knighted for his contributions to medicine.
            </p>
            <p className="text-slate-500">
              We chose his name because we share his conviction: that the people supporting others deserve every possible tool to do it well. When compliance is handled systematically and invisibly, care workers can be fully present for the people they support — exactly as Osler intended.
            </p>
          </div>
          <div className="flex flex-col gap-6">
            <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-lg">
              <Image
                src="/images/William_Osler.jpg"
                alt="Sir William Osler, Father of Modern Medicine"
                width={560}
                height={720}
                className="w-full h-auto"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-oz-navy/80 to-transparent px-5 py-4">
                <p className="text-white font-display font-semibold text-sm">Sir William Osler</p>
                <p className="text-white/70 text-xs">1849 – 1919 &nbsp;·&nbsp; Father of Modern Medicine</p>
              </div>
            </div>
            <blockquote className="border-l-4 border-oz-blue pl-6 py-2">
              <p className="text-lg italic text-oz-navy font-display leading-relaxed mb-3">
                "The practice of medicine is an art, not a trade; a calling, not a business; a vocation, not a livelihood."
              </p>
              <cite className="text-sm text-slate-400 not-italic">— Sir William Osler</cite>
            </blockquote>
            <div className="bg-white rounded-2xl border border-slate-200 p-6 grid grid-cols-2 gap-4">
              {[
                ["Born", "1849, Bond Head, Ontario, Canada"],
                ["Knighted", "1911, by King George V"],
                ["Known as", "Father of Modern Medicine"],
                ["Legacy", "Bedside teaching, residency training, evidence-based care"],
              ].map(([k, v]) => (
                <div key={k}>
                  <div className="text-xs font-semibold text-oz-blue uppercase tracking-wide mb-0.5">{k}</div>
                  <div className="text-sm text-slate-600">{v}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      <Section gray>
        <div className="grid md:grid-cols-2 gap-12">
          <div><span className="label block mb-3">Company Information</span><h3 className="mb-6">Ozler Care Solutions</h3>
            {[['Legal Entity','Ozler Tech Pty Ltd'],['Trading As','Ozler Care Solutions'],['Headquarters','Melbourne, Victoria, Australia'],['Founded','2026'],['Sector','Care Technology / RegTech'],['Target Industries','Aged Care, NDIS, Disability Support, Home Care']].map(([k,v])=>(<div key={k} className="py-2"><strong className="text-oz-navy">{k}:</strong> {v}</div>))}
          </div>
          <div><span className="label block mb-3 text-oz-teal">Our Approach</span><h3 className="mb-4">Regulatory insurance, not just software</h3><p className="text-slate-500 mb-4">We don’t sell technology. We sell peace of mind. Every product is anchored to a specific fine, registration cancellation, or funding cut.</p><p className="text-slate-500">Our integrated ecosystem means data flows automatically. Enter data once. Compliance happens everywhere.</p></div>
        </div>
      </Section>
      <CTASection title="Want to learn more?" description="Book a conversation with our team." primaryText="Book a Demo" secondaryText="Contact Us" secondaryHref="/contact" />
    </>
  );
}