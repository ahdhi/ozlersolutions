import { Section, PageHero } from '@/components/UI';
export const metadata = { title: 'Terms of Service' };

export default function TermsPage() {
  return (
    <>
      <PageHero breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Terms of Service' }]} title="Terms of Service"><p className="text-slate-400 mt-2">Last updated: February 2026</p></PageHero>
      <Section>
        <div className="max-w-2xl mx-auto prose prose-slate prose-lg">
          <h2>1. Acceptance</h2><p>By accessing Ozler Care Solutions’ products, you agree to these Terms. If using on behalf of an organisation, you represent authority to bind that organisation.</p>
          <h2>2. Services</h2><p>We provide compliance management, workforce tracking, incident reporting, training, and related technology services. Our Services are tools to assist with compliance — not legal or audit advice.</p>
          <h2>3. AI Decision Support Disclaimer</h2><p>AI features are decision support tools only. All suggestions require human review and approval. We are not liable for decisions made based on AI suggestions.</p>
          <h2>4. Payment</h2><p>Fees are billed monthly or annually in Australian dollars, excluding GST. Pricing may be adjusted with 30 days’ notice.</p>
          <h2>5. Data Ownership</h2><p>You retain ownership of all data. We are granted a limited licence to process data solely for service delivery. Upon termination, data export is available for 30 days.</p>
          <h2>6. Limitation of Liability</h2><p>Liability is limited to fees paid in the 12 months preceding the claim, to the maximum extent permitted by Australian Consumer Law.</p>
          <h2>7. Governing Law</h2><p>These terms are governed by the laws of Victoria, Australia.</p>
          <h2>8. Contact</h2><p>Contact <a href="mailto:legal@ozlercare.com.au" className="text-oz-blue">legal@ozlercare.com.au</a>.</p>
        </div>
      </Section>
    </>
  );
}