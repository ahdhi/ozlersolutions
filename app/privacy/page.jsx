import { Section, PageHero } from '@/components/UI';
export const metadata = { title: 'Privacy Policy' };

export default function PrivacyPage() {
  return (
    <>
      <PageHero breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Privacy Policy' }]} title="Privacy Policy"><p className="text-slate-400 mt-2">Last updated: February 2026</p></PageHero>
      <Section>
        <div className="max-w-2xl mx-auto prose prose-slate prose-lg">
          <h2>1. Overview</h2><p>Ozler Care Solutions is committed to protecting the privacy of our users in accordance with the Australian Privacy Act 1988 (Cth) and the Australian Privacy Principles (APPs).</p>
          <h2>2. Information We Collect</h2><p>We collect personal information necessary to provide our services, including contact details, employment information, credential and certification information, and technical usage data.</p>
          <h2>3. How We Use Information</h2><p>We use personal information to provide and improve our services, process credential verifications, send expiry alerts, generate compliance reports, and communicate about accounts.</p>
          <h2>4. Data Storage and Security</h2><p>All data is hosted on Australian infrastructure (AWS Sydney region). We implement encryption at rest and in transit, maintain strict access controls, and follow industry best practices. We are on the SOC 2 Type II pathway.</p>
          <h2>5. Disclosure</h2><p>We do not sell personal information. We may share information with employers (where authorised), regulatory bodies (where required by law), and service providers bound by confidentiality.</p>
          <h2>6. Your Rights</h2><p>Under the APPs, you have the right to access, correct, and request deletion of your personal information.</p>
          <h2>7. Contact</h2><p>For privacy enquiries, contact <a href="mailto:privacy@ozlercare.com.au" className="text-oz-blue">privacy@ozlercare.com.au</a>.</p>
        </div>
      </Section>
    </>
  );
}