'use client';
import { Section, PageHero } from '@/components/UI';
import { EnvelopeIcon, PhoneIcon, MapPinIcon, BriefcaseIcon } from '@heroicons/react/24/outline';
// export const metadata = { title: 'Contact Us' };

export default function ContactPage() {
  return (
    <>
      <PageHero breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Contact' }]} label="Contact Us" title="Let’s talk about your compliance needs" description="Whether you’re ready for a demo, have questions, or want to explore a partnership — we’re here to help." />
      <Section>
        <div className="grid md:grid-cols-2 gap-16">
          <div id="demo">
            <h3 className="mb-6">Send us a message</h3>
            <form onSubmit={(e) => { e.preventDefault(); alert('Thank you! We’ll be in touch within 24 hours.'); }}>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div><label className="block font-display text-sm font-semibold text-oz-navy mb-1.5">First Name *</label><input required className="w-full px-4 py-3 border-2 border-slate-300 rounded-lg focus:border-oz-blue focus:outline-none transition-colors" placeholder="Your first name" /></div>
                <div><label className="block font-display text-sm font-semibold text-oz-navy mb-1.5">Last Name *</label><input required className="w-full px-4 py-3 border-2 border-slate-300 rounded-lg focus:border-oz-blue focus:outline-none transition-colors" placeholder="Your last name" /></div>
              </div>
              <div className="mb-4"><label className="block font-display text-sm font-semibold text-oz-navy mb-1.5">Email *</label><input type="email" required className="w-full px-4 py-3 border-2 border-slate-300 rounded-lg focus:border-oz-blue focus:outline-none transition-colors" placeholder="you@organisation.com.au" /></div>
              <div className="mb-4"><label className="block font-display text-sm font-semibold text-oz-navy mb-1.5">Organisation</label><input className="w-full px-4 py-3 border-2 border-slate-300 rounded-lg focus:border-oz-blue focus:outline-none transition-colors" placeholder="Your organisation name" /></div>
              <div className="mb-4"><label className="block font-display text-sm font-semibold text-oz-navy mb-1.5">Number of Workers</label>
                <select className="w-full px-4 py-3 border-2 border-slate-300 rounded-lg focus:border-oz-blue focus:outline-none transition-colors bg-white"><option value="">Select range</option><option>1–30</option><option>31–100</option><option>101–300</option><option>301–500</option><option>500+</option></select>
              </div>
              <div className="mb-4"><label className="block font-display text-sm font-semibold text-oz-navy mb-1.5">I’m interested in</label>
                <select className="w-full px-4 py-3 border-2 border-slate-300 rounded-lg focus:border-oz-blue focus:outline-none transition-colors bg-white"><option value="">Select an option</option><option>Booking a demo</option><option>Pricing information</option><option>Partnership enquiry</option><option>Technical question</option><option>General enquiry</option></select>
              </div>
              <div className="mb-6"><label className="block font-display text-sm font-semibold text-oz-navy mb-1.5">Message</label><textarea className="w-full px-4 py-3 border-2 border-slate-300 rounded-lg focus:border-oz-blue focus:outline-none transition-colors min-h-[140px] resize-y" placeholder="Tell us about your compliance challenges..." /></div>
              <button type="submit" className="btn btn-primary btn-lg w-full">Send Message</button>
            </form>
          </div>
          <div>
            <h3 className="mb-6">Other ways to reach us</h3>
            {[
              { icon: EnvelopeIcon, title: 'Email', main: 'hello@ozlercare.com.au', sub: 'We respond within 24 hours on business days.' },
              { icon: PhoneIcon, title: 'Phone', main: '1300 OZ CARE', sub: 'Monday–Friday, 9am–5pm AEST.' },
              { icon: MapPinIcon, title: 'Office', main: 'Melbourne, Victoria, Australia', sub: 'Available for in-person meetings by appointment.' },
            ].map(c => (
              <div key={c.title} className="bg-white border border-slate-200 rounded-2xl p-6 mb-4">
                <h4 className="mb-1 flex items-center gap-2">
                  <c.icon className="w-5 h-5 text-oz-blue" /> {c.title}
                </h4>
                <p className="text-oz-blue font-medium">{c.main}</p>
                <p className="text-sm text-slate-400">{c.sub}</p>
              </div>
            ))}
            <div id="careers" className="bg-white border border-slate-200 rounded-2xl p-6">
              <h4 className="mb-1 flex items-center gap-2">
                <BriefcaseIcon className="w-5 h-5 text-oz-blue" /> Careers
              </h4>
              <p className="text-slate-500">We're building a team of people who care about making care better.</p>
              <a href="/careers" className="text-oz-blue font-semibold text-sm mt-2 inline-block">View open positions →</a>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}