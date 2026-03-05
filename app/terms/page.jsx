import { Section, PageHero } from '@/components/UI';
export const metadata = {
  title: 'Terms of Service',
  description: 'Terms of service for Ozler Care Solutions products and services including OzlerShield, OzlerSIRS, OzlerReady, OzlerPolicy, Skill2Care, OzlerPass, and OzlerScribe.',
  alternates: { canonical: '/terms' },
  robots: { index: true, follow: true },
};

export default function TermsPage() {
  return (
    <>
      <PageHero breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Terms of Service' }]} title="Terms of Service">
        <p className="text-slate-400 mt-2">Effective Date: 1 March 2026 &nbsp;&middot;&nbsp; Version 1.0</p>
      </PageHero>
      <Section>
        <div className="max-w-3xl mx-auto prose prose-slate prose-lg">
          <p className="text-slate-500">Ozler Tech Pty Ltd (ABN Pending) trading as Ozler Care Solutions &middot; Melbourne, Victoria, Australia</p>

          <h2>1. Definitions and Interpretation</h2>
          <h3>1.1 Definitions</h3>
          <p>In these Terms, unless the context otherwise requires:</p>
          <p><strong>"Agreement"</strong> means these Terms of Service together with any Order Form, Service Level Agreement, Data Processing Agreement, and any other documents expressly incorporated by reference.</p>
          <p><strong>"Authorised User"</strong> means any individual whom the Customer authorises to access and use the Services, including employees, contractors, and agents of the Customer.</p>
          <p><strong>"Confidential Information"</strong> means all information disclosed by one party to the other that is designated as confidential, or that a reasonable person would understand to be confidential, including Customer Data, business plans, pricing, technical specifications, and security architecture. It excludes information that is publicly available, independently developed, or lawfully received from a third party without restriction.</p>
          <p><strong>"Customer"</strong> means the entity identified in the Order Form that subscribes to the Services, including aged care providers, NDIS providers, and related organisations.</p>
          <p><strong>"Customer Data"</strong> means all data, content, and information (including personal information) submitted to, stored within, or generated through the Services by or on behalf of the Customer, including Worker credential data, incident reports, policy documents, training records, voice recordings, and clinical documentation. Customer Data does not include Aggregated Data or Service Data.</p>
          <p><strong>"Services"</strong> means the Ozler Care Solutions software-as-a-service products subscribed to by the Customer, including OzlerShield, OzlerSIRS, OzlerReady, OzlerPolicy, Skill2Care, OzlerPass, OzlerScribe, and any associated APIs, integrations, and support services.</p>
          <p><strong>"Worker"</strong> means any care worker, support worker, or individual whose credential or employment information is processed through the Services.</p>
          <p><strong>"AI Features"</strong> means functionality within the Services that uses artificial intelligence or machine learning, including the OzlerSIRS AI Triage Engine, OzlerScribe voice-to-text and clinical restructuring, and the OzlerPolicy AI Update Engine.</p>
          <p><strong>"Aggregated Data"</strong> means data derived from Customer Data that has been de-identified and aggregated such that no individual Customer, Worker, or Care Recipient can be identified. Examples include industry benchmarks, compliance trends, and anonymised usage statistics.</p>
          <h3>1.2 Interpretation</h3>
          <ul>
            <li>A reference to legislation includes any amendment, re-enactment, or replacement of that legislation and any subordinate legislation made under it.</li>
            <li>Headings are for convenience only and do not affect interpretation.</li>
            <li>Where a word or phrase is defined, its other grammatical forms have corresponding meanings.</li>
            <li>A reference to "business day" means a day other than a Saturday, Sunday, or public holiday in Victoria, Australia.</li>
          </ul>

          <h2>2. Grant of Rights and Restrictions</h2>
          <h3>2.1 Licence Grant</h3>
          <p>Subject to the Customer's compliance with this Agreement and payment of applicable Fees, Ozler grants the Customer a non-exclusive, non-transferable, non-sublicensable, revocable licence to access and use the Services during the Subscription Term, solely for the Customer's internal business operations related to aged care, disability support, or related care services.</p>
          <h3>2.2 Restrictions</h3>
          <p>The Customer must not, and must ensure its Authorised Users do not:</p>
          <ul>
            <li>Copy, modify, adapt, translate, reverse engineer, decompile, disassemble, or create derivative works of the Services or any underlying software;</li>
            <li>Sublicense, sell, resell, lease, rent, loan, distribute, or otherwise make the Services available to any third party, except as expressly permitted by the Agreement;</li>
            <li>Use the Services to process data on behalf of any entity other than the Customer without Ozler's prior written consent;</li>
            <li>Circumvent or disable any security, access control, or usage-limiting features of the Services;</li>
            <li>Use the Services in any manner that violates applicable law, including the Privacy Act, the NDIS Act, or the Aged Care Act;</li>
            <li>Upload or transmit any malicious code, virus, or harmful component;</li>
            <li>Use the Services to develop a competing product or service;</li>
            <li>Remove, alter, or obscure any proprietary notices or branding within the Services;</li>
            <li>Use AI Features to make automated decisions affecting Workers or Care Recipients without human review as required by Section 6.</li>
          </ul>
          <h3>2.3 Fair Use</h3>
          <p>The Services are subject to reasonable usage limits. Ozler reserves the right to contact the Customer if usage significantly exceeds normal patterns and to implement throttling or additional charges if excessive use materially impacts service performance for other customers.</p>

          <h2>3. Customer Obligations</h2>
          <h3>3.1 Account Security</h3>
          <p>The Customer is responsible for maintaining the confidentiality of account credentials, enabling multi-factor authentication where available, and promptly notifying Ozler of any suspected unauthorised access. The Customer is liable for all activities under its account, except where caused by Ozler's breach of its security obligations.</p>
          <h3>3.2 Lawful Use</h3>
          <p>The Customer warrants that its use of the Services complies with all applicable laws, including the Privacy Act, the NDIS Act, the Aged Care Act, and any applicable state or territory health records legislation. The Customer is solely responsible for:</p>
          <ul>
            <li>Providing privacy notices to Workers and Care Recipients as required by APP 5;</li>
            <li>Obtaining necessary consents for data collection, including consent for voice recording where OzlerScribe is used;</li>
            <li>Ensuring the accuracy of information uploaded to the Services;</li>
            <li>Meeting its own regulatory obligations regarding incident reporting, worker screening, and quality standards &mdash; the Services are tools to assist compliance, not a substitute for the Customer's independent legal obligations;</li>
            <li>Responding to access and correction requests from Workers and Care Recipients in accordance with APPs 12 and 13.</li>
          </ul>
          <h3>3.3 Data Accuracy</h3>
          <p>The Customer acknowledges that the quality of outputs from the Services (including compliance dashboards, expiry alerts, and AI-generated suggestions) depends on the accuracy and completeness of input data. Ozler is not responsible for inaccurate outputs resulting from incomplete or incorrect Customer Data.</p>

          <h2>4. Fees, Payment, and Taxes</h2>
          <h3>4.1 Fees</h3>
          <p>The Customer will pay the Fees specified in the Order Form. Fees are denominated in Australian Dollars (AUD) and are exclusive of GST unless stated otherwise.</p>
          <h3>4.2 Billing</h3>
          <p>Fees are invoiced monthly or annually in advance, as specified in the Order Form. Payment is due within 14 days of the invoice date. Late payments accrue interest at the rate of 1.5% per month (or the maximum rate permitted by law, if lower), calculated daily on the overdue amount.</p>
          <h3>4.3 Price Changes</h3>
          <p>Ozler may adjust Fees by providing at least 60 days' written notice before the start of a new billing cycle. If the Customer does not accept the revised Fees, the Customer may terminate the Agreement in accordance with Section 10 before the revised Fees take effect.</p>
          <h3>4.4 Taxes</h3>
          <p>All Fees are exclusive of GST. Ozler will add GST to invoices at the prevailing rate. Each party is responsible for its own income tax obligations.</p>
          <h3>4.5 Suspension for Non-Payment</h3>
          <p>If any invoice remains unpaid for more than 30 days after the due date, Ozler may, after providing 10 business days' written notice, suspend access to the Services until outstanding amounts are paid in full. Ozler will not delete Customer Data during any suspension period, but will restore access promptly upon receipt of payment.</p>

          <h2>5. Intellectual Property</h2>
          <h3>5.1 Ozler IP</h3>
          <p>Ozler and its licensors retain all right, title, and interest in and to the Services, including all software, algorithms, models, user interfaces, documentation, trademarks, and trade secrets. Nothing in this Agreement transfers ownership of Ozler IP to the Customer.</p>
          <h3>5.2 Customer Data</h3>
          <p>The Customer retains all right, title, and interest in and to Customer Data. The Customer grants Ozler a limited, non-exclusive, worldwide licence to process Customer Data solely for the purpose of providing and improving the Services in accordance with this Agreement and the Privacy Policy.</p>
          <h3>5.3 Aggregated Data</h3>
          <p>Ozler may create Aggregated Data from Customer Data. Ozler owns all rights in Aggregated Data and may use it for any lawful purpose, including benchmarking, research, and product improvement, provided that Aggregated Data does not identify the Customer, any Worker, or any Care Recipient.</p>
          <h3>5.4 Feedback</h3>
          <p>If the Customer provides suggestions, feature requests, or other feedback about the Services, Ozler may use that feedback without restriction or obligation.</p>
          <h3>5.5 AI-Generated Outputs</h3>
          <p>Outputs generated by AI Features (including incident classification suggestions, policy draft revisions, and structured clinical notes) are generated by Ozler's proprietary algorithms using Customer Data as input. The Customer may use these outputs as part of the Services. Neither party claims copyright ownership of AI-generated outputs that do not reflect original creative expression.</p>

          <h2>6. AI Features &mdash; Decision Support Disclaimer</h2>
          <p className="font-semibold">This section is critical. The Customer must read it carefully.</p>
          <h3>6.1 Decision Support Only</h3>
          <p>All AI Features within the Services are decision support tools. They generate suggestions, recommendations, and draft content to assist human decision-makers. AI Features do not make autonomous decisions and must not be used as a substitute for human professional judgment.</p>
          <h3>6.2 Human Review Required</h3>
          <p>The Customer must ensure that all AI-generated outputs are reviewed and approved by a qualified human before being relied upon, submitted to a regulator, or used to make decisions affecting Workers or Care Recipients. Specifically:</p>
          <ul>
            <li><strong>OzlerSIRS AI Triage:</strong> the suggested incident classification (P1/P2/non-reportable) must be reviewed, and either approved or overridden, by an authorised manager before the classification is finalised. The Customer bears sole responsibility for the final classification decision.</li>
            <li><strong>OzlerScribe:</strong> structured clinical notes generated from voice recordings must be reviewed for accuracy by the Worker or a supervisor before being incorporated into care records.</li>
            <li><strong>OzlerPolicy:</strong> AI-drafted policy revisions must be reviewed by the Customer's governance or compliance team before publication.</li>
          </ul>
          <h3>6.3 No Guarantee of Accuracy</h3>
          <p>AI Features may produce inaccurate, incomplete, or inappropriate outputs. Ozler does not warrant that AI outputs are correct, suitable for any particular purpose, or compliant with any specific regulatory requirement. The Customer assumes all risk associated with reliance on AI outputs without adequate human review.</p>
          <h3>6.4 AI Liability Limitation</h3>
          <p>To the maximum extent permitted by law, Ozler excludes all liability for any loss, damage, fine, penalty, sanction, or adverse regulatory outcome arising from the Customer's reliance on AI-generated outputs, except where such reliance was reasonable in the circumstances and Ozler's AI Feature contained a material defect that was reported to Ozler and not remediated within a reasonable time.</p>

          <h2>7. Warranties and Disclaimers</h2>
          <h3>7.1 Ozler Warranties</h3>
          <p>Ozler warrants that:</p>
          <ul>
            <li>The Services will perform materially in accordance with the applicable documentation during the Subscription Term;</li>
            <li>It will provide the Services with reasonable care and skill;</li>
            <li>It has implemented security measures as described in its Security Policy;</li>
            <li>It will comply with the Privacy Act and APPs in its handling of personal information.</li>
          </ul>
          <h3>7.2 Disclaimer</h3>
          <p>Except as expressly set out in Section 7.1 and to the maximum extent permitted by law (including the Australian Consumer Law), the Services are provided "as is" and "as available." Ozler disclaims all other warranties, whether express, implied, or statutory, including warranties of merchantability, fitness for a particular purpose, and non-infringement.</p>
          <h3>7.3 Australian Consumer Law</h3>
          <p>Nothing in this Agreement excludes, restricts, or modifies any consumer guarantee under the Australian Consumer Law (Schedule 2 of the Competition and Consumer Act 2010 (Cth)) that cannot be excluded, restricted, or modified by agreement. To the extent that Ozler's liability for breach of a non-excludable consumer guarantee can be limited, Ozler's liability is limited to (at Ozler's election): re-supply of the Services; or payment of the cost of having the Services re-supplied.</p>

          <h2>8. Limitation of Liability</h2>
          <h3>8.1 Exclusion of Consequential Loss</h3>
          <p>To the maximum extent permitted by law, neither party will be liable to the other for any indirect, incidental, special, consequential, punitive, or exemplary damages, including loss of profits, revenue, business, goodwill, or data, even if advised of the possibility of such damages.</p>
          <h3>8.2 Liability Cap</h3>
          <p>Subject to Section 8.3, Ozler's total aggregate liability arising out of or in connection with this Agreement, whether in contract, tort (including negligence), statute, or otherwise, is limited to the greater of: (a) the total Fees paid by the Customer to Ozler in the 12 months immediately preceding the event giving rise to the claim; or (b) AUD $10,000.</p>
          <h3>8.3 Unlimited Liability</h3>
          <p>Nothing in this Agreement limits either party's liability for:</p>
          <ul>
            <li>Death or personal injury caused by negligence;</li>
            <li>Fraud or fraudulent misrepresentation;</li>
            <li>Wilful misconduct;</li>
            <li>Breach of Section 6 of the Privacy Act (Australian Privacy Principles) to the extent that liability cannot be limited by agreement;</li>
            <li>The Customer's obligation to pay Fees properly due under Section 4;</li>
            <li>Either party's indemnification obligations under Section 9.</li>
          </ul>

          <h2>9. Indemnification</h2>
          <h3>9.1 Ozler Indemnification</h3>
          <p>Ozler will defend, indemnify, and hold harmless the Customer from and against any third-party claim that the Services (excluding Customer Data) infringe any Australian patent, copyright, or trade mark, provided the Customer promptly notifies Ozler, grants Ozler sole control of the defence and settlement, and cooperates reasonably. If the Services are found to infringe, Ozler may, at its option: obtain the right for the Customer to continue use; modify the Services to be non-infringing; or terminate the affected Services and refund prepaid Fees for the unused portion of the Subscription Term.</p>
          <h3>9.2 Customer Indemnification</h3>
          <p>The Customer will defend, indemnify, and hold harmless Ozler from and against any third-party claim arising from: (a) Customer Data or its use within the Services; (b) the Customer's breach of applicable law, including the Privacy Act, NDIS Act, or Aged Care Act; (c) the Customer's reliance on AI-generated outputs without adequate human review as required by Section 6; or (d) the Customer's breach of this Agreement.</p>

          <h2>10. Term and Termination</h2>
          <h3>10.1 Term</h3>
          <p>The initial Subscription Term is specified in the Order Form. Unless either party provides written notice of non-renewal at least 30 days before the end of the current term, the Agreement automatically renews for successive periods of the same length.</p>
          <h3>10.2 Termination for Convenience</h3>
          <p>Either party may terminate the Agreement at the end of any billing period by providing at least 30 days' written notice.</p>
          <h3>10.3 Termination for Cause</h3>
          <p>Either party may terminate the Agreement immediately by written notice if the other party:</p>
          <ul>
            <li>Commits a material breach that is not remedied within 30 days of written notice specifying the breach;</li>
            <li>Becomes insolvent, enters administration, receivership, or liquidation, or is subject to any analogous proceeding;</li>
            <li>Is subject to a change of control that results in a direct competitor of the non-affected party acquiring control.</li>
          </ul>
          <h3>10.4 Effect of Termination</h3>
          <p>Upon termination or expiry:</p>
          <ul>
            <li>The Customer's access to the Services will cease at the end of the notice period or immediately upon termination for cause;</li>
            <li>The Customer may export Customer Data for a period of 30 days following termination ("Data Export Period"). Ozler will provide reasonable assistance with data export at no additional charge;</li>
            <li>After the Data Export Period, Ozler will securely destroy all Customer Data in accordance with its Data Destruction Policy, unless retention is required by law;</li>
            <li>All Fees accrued prior to termination remain payable;</li>
            <li>Sections 5 (IP), 6 (AI Disclaimer), 7 (Warranties), 8 (Limitation of Liability), 9 (Indemnification), 11 (Confidentiality), and 14 (Governing Law) survive termination.</li>
          </ul>

          <h2>11. Confidentiality</h2>
          <p>Each party will hold the other's Confidential Information in strict confidence and will not disclose it to any third party except to employees, contractors, and professional advisors who need to know and who are bound by confidentiality obligations at least as restrictive as this Section. Each party will protect Confidential Information using at least the same degree of care it uses for its own confidential information, but no less than a reasonable degree of care. These obligations continue for 3 years after termination of the Agreement, except for trade secrets, which are protected indefinitely.</p>

          <h2>12. Dispute Resolution</h2>
          <h3>12.1 Escalation</h3>
          <p>Before commencing formal proceedings, the parties will attempt to resolve any dispute through good faith negotiation between senior executives for a period of at least 20 business days.</p>
          <h3>12.2 Mediation</h3>
          <p>If negotiation is unsuccessful, either party may refer the dispute to mediation administered by the Resolution Institute in Melbourne, Victoria. The mediator will be appointed by agreement or, failing agreement, by the Chair of the Resolution Institute. The costs of mediation will be shared equally.</p>
          <h3>12.3 Litigation</h3>
          <p>If mediation is unsuccessful within 40 business days, either party may commence proceedings in the courts of Victoria, Australia. Nothing in this Section prevents either party from seeking urgent interlocutory relief.</p>

          <h2>13. Force Majeure</h2>
          <p>Neither party will be liable for failure to perform obligations (other than payment obligations) to the extent caused by circumstances beyond its reasonable control, including natural disasters, pandemics, government actions, war, terrorism, utility failures, or widespread internet outages. The affected party must promptly notify the other and take reasonable steps to mitigate the impact. If the force majeure event continues for more than 60 days, either party may terminate the Agreement.</p>

          <h2>14. Governing Law and Jurisdiction</h2>
          <p>This Agreement is governed by and construed in accordance with the laws of Victoria, Australia. Each party irrevocably submits to the exclusive jurisdiction of the courts of Victoria and the Federal Court of Australia sitting in Victoria, and waives any objection to venue.</p>

          <h2>15. General Provisions</h2>
          <h3>15.1 Entire Agreement</h3>
          <p>This Agreement constitutes the entire agreement between the parties regarding the subject matter and supersedes all prior negotiations, understandings, and agreements, whether written or oral.</p>
          <h3>15.2 Amendment</h3>
          <p>Ozler may amend these Terms by providing at least 30 days' written notice. Material changes will not apply to existing subscriptions until the next renewal period, unless the Customer accepts the changes earlier.</p>
          <h3>15.3 Assignment</h3>
          <p>Neither party may assign its rights or obligations without the other's prior written consent, except that either party may assign to an affiliate or in connection with a merger, acquisition, or sale of substantially all assets, provided the assignee agrees to be bound by this Agreement.</p>
          <h3>15.4 Severability</h3>
          <p>If any provision is held invalid or unenforceable, the remaining provisions continue in full force. The invalid provision will be modified to the minimum extent necessary to make it valid and enforceable while preserving the parties' original intent.</p>
          <h3>15.5 Waiver</h3>
          <p>Failure to enforce any provision does not constitute a waiver. Any waiver must be in writing and signed by the waiving party.</p>
          <h3>15.6 Notices</h3>
          <p>Notices must be in writing and sent to the email or postal address specified in the Order Form (or such other address as a party may designate). Notices are deemed received when sent by email (if no bounce-back is received), or 3 business days after posting by registered mail.</p>
          <h3>15.7 Relationship</h3>
          <p>The parties are independent contractors. Nothing in this Agreement creates an employment, partnership, joint venture, or agency relationship.</p>
          <h3>15.8 Third-Party Rights</h3>
          <p>This Agreement does not confer any rights on any person other than the parties, except that Workers may enforce their rights under the Privacy Policy as third-party beneficiaries to the extent applicable.</p>

          <h2>16. Contact</h2>
          <ul>
            <li>Legal and contractual enquiries: <a href="mailto:legal@ozlercare.com.au" className="text-oz-blue">legal@ozlercare.com.au</a></li>
            <li>Billing enquiries: <a href="mailto:billing@ozlercare.com.au" className="text-oz-blue">billing@ozlercare.com.au</a></li>
            <li>General support: <a href="mailto:support@ozlercare.com.au" className="text-oz-blue">support@ozlercare.com.au</a></li>
            <li>Address: Ozler Care Solutions, Melbourne VIC 3000, Australia</li>
          </ul>
        </div>
      </Section>
    </>
  );
}
