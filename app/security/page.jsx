import { Section, PageHero } from '@/components/UI';
export const metadata = {
  title: 'Security Policy',
  description: 'Ozler Care Solutions security policy. Technical and organisational measures for protecting information assets, data encryption, access controls, and incident response procedures.',
  alternates: { canonical: '/security' },
  robots: { index: true, follow: true },
};

export default function SecurityPage() {
  return (
    <>
      <PageHero breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Security Policy' }]} title="Security Policy">
        <p className="text-slate-400 mt-2">Effective Date: 1 March 2026 &nbsp;&middot;&nbsp; Version 1.0</p>
      </PageHero>
      <Section>
        <div className="max-w-3xl mx-auto prose prose-slate prose-lg">
          <p className="text-slate-500">Ozler Tech Pty Ltd (ABN Pending) trading as Ozler Care Solutions &middot; Melbourne, Victoria, Australia</p>
          <p>Technical and organisational measures for the protection of information assets.</p>

          <h2>1. Purpose and Scope</h2>
          <h3>1.1 Purpose</h3>
          <p>This Security Policy ("Policy") describes the technical and organisational security measures implemented by Ozler Tech Pty Ltd, trading as Ozler Care Solutions ("Ozler," "we," "our"), to protect the confidentiality, integrity, and availability of Customer Data, personal information, and the Services. This Policy forms part of our contractual commitments to Customers and supplements the <a href="/privacy" className="text-oz-blue">Privacy Policy</a> and <a href="/terms" className="text-oz-blue">Terms of Service</a>.</p>
          <h3>1.2 Scope</h3>
          <p>This Policy applies to:</p>
          <ul>
            <li>All Ozler Care Solutions products and services, including OzlerShield, OzlerSIRS, OzlerReady, OzlerPolicy, Skill2Care, OzlerPass, OzlerScribe, and associated APIs, web applications, and mobile applications;</li>
            <li>All infrastructure, systems, networks, and environments used to develop, test, deploy, and operate the Services;</li>
            <li>All personnel, including employees, contractors, sub-processors, and third-party service providers with access to Ozler systems or Customer Data;</li>
            <li>All Customer Data, personal information (as defined in the Privacy Act 1988 (Cth)), and Ozler proprietary information.</li>
          </ul>
          <h3>1.3 Regulatory Alignment</h3>
          <p>This Policy is designed to satisfy or exceed the requirements of:</p>
          <ul>
            <li>Australian Privacy Principles (APPs), in particular APP 11 (Security of Personal Information);</li>
            <li>NDIS Quality and Safeguards Commission &mdash; Practice Standard on Information Management;</li>
            <li>Aged Care Quality Standards &mdash; Standard 8 (Organisational Governance) as it relates to information security;</li>
            <li>Australian Signals Directorate (ASD) Essential Eight Maturity Model &mdash; target Maturity Level Two;</li>
            <li>ISO/IEC 27001:2022 &mdash; as a guiding framework (formal certification planned for 2027);</li>
            <li>SOC 2 Type II &mdash; Trust Services Criteria (Security, Availability, Confidentiality) &mdash; certification pathway initiated;</li>
            <li>OWASP Application Security Verification Standard (ASVS) Level 2;</li>
            <li>Australian Government Information Security Manual (ISM) &mdash; where applicable to cloud-hosted SaaS.</li>
          </ul>

          <h2>2. Security Governance</h2>
          <h3>2.1 Accountability</h3>
          <p>Ultimate accountability for information security rests with the Chief Executive Officer. Day-to-day security operations are managed by the designated Security Lead (or equivalent role). The Security Lead reports directly to the CEO and has authority to implement security controls, enforce compliance, and escalate risks.</p>
          <h3>2.2 Security Policies and Standards</h3>
          <p>Ozler maintains a suite of internal security policies, including: Information Security Policy; Acceptable Use Policy; Access Control Policy; Data Classification and Handling Policy; Incident Response Plan; Business Continuity and Disaster Recovery Plan; Vendor and Third-Party Risk Management Policy; Vulnerability Management Policy; Change Management Policy; Data Destruction and Retention Policy; Encryption Policy; and Physical Security Policy. All policies are reviewed at least annually, or more frequently following a material security incident, significant change to the threat landscape, or regulatory amendment.</p>
          <h3>2.3 Risk Management</h3>
          <p>Ozler conducts formal information security risk assessments at least annually, and on an ad-hoc basis when material changes occur (e.g., new product launch, infrastructure migration, new sub-processor). Risk assessments follow a structured methodology aligned with ISO 31000 and produce a risk register with assigned owners, treatment plans, and review dates.</p>
          <h3>2.4 Security Training and Awareness</h3>
          <ul>
            <li>All personnel complete security awareness training within 7 days of commencing engagement, and annually thereafter;</li>
            <li>Developers complete secure coding training (OWASP Top 10, injection prevention, authentication best practices) at onboarding and annually;</li>
            <li>Phishing simulation exercises are conducted quarterly;</li>
            <li>Security incident tabletop exercises are conducted at least bi-annually;</li>
            <li>Training records are maintained for audit purposes.</li>
          </ul>

          <h2>3. Infrastructure Security</h2>
          <h3>3.1 Cloud Hosting</h3>
          <table>
            <thead>
              <tr><th>Attribute</th><th>Detail</th></tr>
            </thead>
            <tbody>
              <tr><td>Cloud Provider</td><td>Amazon Web Services (AWS)</td></tr>
              <tr><td>Primary Region</td><td>ap-southeast-2 (Sydney, Australia)</td></tr>
              <tr><td>IRAP Assessment</td><td>AWS Sydney is IRAP-assessed to PROTECTED level</td></tr>
              <tr><td>Data Sovereignty</td><td>All Customer Data at rest stored exclusively within ap-southeast-2</td></tr>
              <tr><td>Availability Zones</td><td>Multi-AZ deployment for high availability</td></tr>
              <tr><td>Compute</td><td>AWS ECS/Fargate (containerised) or EC2 with hardened AMIs</td></tr>
              <tr><td>Database</td><td>Amazon RDS (PostgreSQL) with Multi-AZ, automated backups</td></tr>
              <tr><td>Object Storage</td><td>Amazon S3 with server-side encryption (SSE-S3 or SSE-KMS)</td></tr>
              <tr><td>CDN</td><td>Amazon CloudFront (TLS-only, geo-restricted where appropriate)</td></tr>
            </tbody>
          </table>
          <h3>3.2 Network Security</h3>
          <ul>
            <li><strong>Virtual Private Cloud (VPC):</strong> all application and database resources reside in private subnets within a dedicated VPC. No database or application server has a public IP address;</li>
            <li><strong>Security Groups and NACLs:</strong> inbound traffic restricted to HTTPS (443) and SSH (22, bastion host only). All other ports denied by default. Egress restricted to known-good destinations;</li>
            <li><strong>Web Application Firewall (WAF):</strong> AWS WAF deployed on all public-facing endpoints with OWASP Core Rule Set, rate limiting, and geo-blocking rules;</li>
            <li><strong>DDoS Protection:</strong> AWS Shield Standard on all resources; Shield Advanced on public-facing load balancers;</li>
            <li><strong>Bastion / Jump Host:</strong> administrative access to production environments exclusively via hardened bastion host with MFA and session recording;</li>
            <li><strong>Network segmentation:</strong> production, staging, and development environments are logically isolated. No lateral movement between environments;</li>
            <li><strong>DNS:</strong> Amazon Route 53 with DNSSEC where supported by client resolvers;</li>
            <li><strong>TLS Certificates:</strong> managed via AWS Certificate Manager (ACM) with automatic renewal. Minimum TLS 1.2; TLS 1.3 preferred.</li>
          </ul>
          <h3>3.3 Infrastructure Hardening</h3>
          <ul>
            <li>Operating systems: minimal base images with unnecessary packages removed. CIS Benchmark-hardened configurations;</li>
            <li>Containers: images scanned for vulnerabilities at build time. No root containers in production;</li>
            <li>Patching: automated patching for OS-level vulnerabilities within 14 days of vendor release for critical/high severity, 30 days for medium;</li>
            <li>Immutable infrastructure: production deployments via Infrastructure as Code (Terraform or AWS CDK). No manual changes to production systems;</li>
            <li>Service mesh / API gateway: internal service-to-service communication authenticated and encrypted via mTLS where applicable.</li>
          </ul>

          <h2>4. Data Security</h2>
          <h3>4.1 Data Classification</h3>
          <table>
            <thead>
              <tr><th>Classification</th><th>Description and Examples</th></tr>
            </thead>
            <tbody>
              <tr><td><strong>CRITICAL</strong></td><td>Sensitive Information as defined in the Privacy Act: health information in incident reports and clinical notes, Worker Screening Check outcomes, voice recordings (OzlerScribe)</td></tr>
              <tr><td><strong>CONFIDENTIAL</strong></td><td>Personal Information: Worker credentials, contact details, employment information, training records, Provider business data, billing information</td></tr>
              <tr><td><strong>INTERNAL</strong></td><td>Ozler proprietary: source code, architecture documentation, internal policies, security configurations, vulnerability reports</td></tr>
              <tr><td><strong>PUBLIC</strong></td><td>Published marketing materials, website content, publicly available regulatory guidance</td></tr>
            </tbody>
          </table>
          <h3>4.2 Encryption</h3>
          <p><strong>Encryption at Rest:</strong> Database: AES-256 encryption via AWS RDS encryption (using AWS KMS customer-managed keys or AWS-managed keys); Object storage (S3): server-side encryption with AES-256 (SSE-S3) or AWS KMS (SSE-KMS) for CRITICAL-classified data; File systems (EBS): AES-256 encryption; Backups: encrypted to the same standard as source data; Voice recordings (OzlerScribe): encrypted with dedicated KMS key; access restricted to the originating Provider's tenant.</p>
          <p><strong>Encryption in Transit:</strong> External communications: TLS 1.2 minimum, TLS 1.3 preferred. HSTS headers enforced on all web endpoints. Certificate Transparency monitoring enabled; Internal service-to-service: TLS 1.2+ or mTLS for sensitive data flows; API communications: all API endpoints require HTTPS. Plaintext HTTP connections rejected; Email: TLS opportunistic encryption. Sensitive notifications do not contain personal information in email body.</p>
          <p><strong>Key Management:</strong> AWS Key Management Service (KMS) for encryption key lifecycle management; Customer-managed keys (CMK) available for enterprise customers requiring independent key control; Key rotation: automatic annual rotation for KMS keys. Application-level secrets rotated at least every 90 days; No encryption keys stored in source code, configuration files, or environment variables in plaintext. Secrets managed via AWS Secrets Manager or equivalent.</p>
          <h3>4.3 Data Isolation and Multi-Tenancy</h3>
          <p>The Services operate on a multi-tenant architecture with logical data isolation:</p>
          <ul>
            <li>Each Customer's data is logically isolated at the application and database levels using tenant identifiers enforced in every query;</li>
            <li>Row-level security (RLS) or equivalent database-level controls prevent cross-tenant data access;</li>
            <li>API authentication and authorisation enforce tenant-scoped access. No API endpoint returns data from another tenant;</li>
            <li>OzlerScribe voice recordings and transcriptions are stored in tenant-specific S3 prefixes with bucket policies preventing cross-tenant access;</li>
            <li>Enterprise customers may request dedicated database instances (at additional cost) for physical data isolation.</li>
          </ul>
          <h3>4.4 Data Backup and Recovery</h3>
          <ul>
            <li>Automated daily database backups retained for 30 days;</li>
            <li>Point-in-time recovery (PITR) enabled with 5-minute granularity;</li>
            <li>Backups stored in the same AWS region (ap-southeast-2) and encrypted at rest;</li>
            <li>Cross-region backup replication available for enterprise customers;</li>
            <li>Recovery testing conducted quarterly with documented recovery time results;</li>
            <li>Recovery Point Objective (RPO): 1 hour. Recovery Time Objective (RTO): 4 hours for standard; 1 hour for enterprise SLA.</li>
          </ul>
          <h3>4.5 Data Destruction</h3>
          <p>When Customer Data is no longer required (upon contract termination, expiry of retention periods, or Customer request):</p>
          <ul>
            <li>Database records: cryptographic erasure (deletion of encryption keys rendering data unrecoverable) or logical deletion followed by physical overwrite within 90 days;</li>
            <li>Object storage: S3 object deletion with bucket lifecycle policies. AWS confirms physical media destruction per AWS SOC 2 controls;</li>
            <li>Backups: expired according to retention schedule. No manual intervention required;</li>
            <li>Paper records: cross-cut shredded (DIN 66399 Level P-4 equivalent);</li>
            <li>Confirmation: upon request, Ozler will provide a written certificate of destruction.</li>
          </ul>

          <h2>5. Application Security</h2>
          <h3>5.1 Secure Development Lifecycle (SDLC)</h3>
          <ul>
            <li>Threat modelling conducted for all new features affecting data handling, authentication, or authorisation;</li>
            <li>Code review: all production code changes require peer review by at least one other developer before merge;</li>
            <li>Static Application Security Testing (SAST): automated scanning integrated into CI/CD pipeline. Builds fail on critical or high findings;</li>
            <li>Dynamic Application Security Testing (DAST): automated scanning of staging environments before production deployment;</li>
            <li>Software Composition Analysis (SCA): automated dependency vulnerability scanning. Critical CVEs patched within 48 hours of disclosure;</li>
            <li>Secret scanning: pre-commit hooks and CI/CD checks to prevent accidental commitment of credentials, API keys, or tokens;</li>
            <li>Deployment: automated CI/CD pipelines. No manual deployments to production. All deployments logged and auditable.</li>
          </ul>
          <h3>5.2 Authentication and Authorisation</h3>
          <ul>
            <li>Authentication: email/password with enforced complexity (minimum 12 characters, NIST SP 800-63B compliant), or Single Sign-On (SSO) via SAML 2.0 / OpenID Connect for enterprise customers;</li>
            <li>Multi-Factor Authentication (MFA): mandatory for all administrative and privileged accounts. Supported factors: TOTP authenticator app, WebAuthn/FIDO2 hardware keys;</li>
            <li>Session management: server-side session tokens with configurable idle timeout (default 30 minutes). Secure, HttpOnly, SameSite=Strict cookies;</li>
            <li>Role-Based Access Control (RBAC): granular roles (Owner, Admin, Manager, Staff, Read-Only) with least-privilege defaults. Custom roles available for enterprise;</li>
            <li>API authentication: OAuth 2.0 bearer tokens with short-lived access tokens (15 minutes) and refresh tokens (7 days, revocable);</li>
            <li>Brute force protection: account lockout after 10 failed attempts (30-minute cooldown). Rate limiting on all authentication endpoints;</li>
            <li>Password storage: bcrypt with cost factor &ge; 12. No plaintext or reversibly encrypted passwords.</li>
          </ul>
          <h3>5.3 Input Validation and Output Encoding</h3>
          <ul>
            <li>All user input validated server-side against expected types, lengths, and patterns. Client-side validation treated as UX only;</li>
            <li>Parameterised queries (prepared statements) used for all database interactions. No string concatenation in SQL;</li>
            <li>Output encoding: context-appropriate encoding (HTML, JavaScript, URL, CSS) applied to all dynamic content rendered in web pages;</li>
            <li>Content Security Policy (CSP) headers enforced with strict directives;</li>
            <li>File uploads: validated by file type, size, and content (magic byte verification). Uploaded files stored outside the web root and served via signed URLs with short expiry.</li>
          </ul>
          <h3>5.4 API Security</h3>
          <ul>
            <li>All APIs require authentication. No anonymous endpoints serve Customer Data;</li>
            <li>Rate limiting applied per-tenant and per-endpoint to prevent abuse;</li>
            <li>Request size limits enforced (default 10MB, configurable for OzlerScribe voice uploads);</li>
            <li>API versioning: breaking changes introduced in new API versions. Deprecated versions supported for minimum 12 months;</li>
            <li>CORS: restrictive origin whitelisting. Wildcard origins (*) never used in production;</li>
            <li>Webhook signatures: all outbound webhooks signed with HMAC-SHA256 for integrity verification by recipients.</li>
          </ul>

          <h2>6. Access Control</h2>
          <h3>6.1 Principle of Least Privilege</h3>
          <p>All access to production systems, databases, and Customer Data is granted on the principle of least privilege. Access is granted only when required for a legitimate business purpose and is revoked promptly when no longer needed.</p>
          <h3>6.2 Administrative Access</h3>
          <ul>
            <li>Production infrastructure access restricted to designated SRE/DevOps personnel;</li>
            <li>All administrative access requires MFA and is conducted via hardened bastion host with session recording;</li>
            <li>Just-in-time (JIT) access: elevated privileges granted on-demand for a defined duration and automatically revoked;</li>
            <li>No persistent root or superuser credentials. Root account access requires dual authorisation (two-person rule);</li>
            <li>All administrative actions logged to a tamper-evident audit trail (AWS CloudTrail, centralised log management).</li>
          </ul>
          <h3>6.3 Customer Data Access by Ozler Personnel</h3>
          <p>Ozler personnel access Customer Data only when explicitly authorised by the Customer (e.g., support ticket requesting investigation), required to fulfil operational obligations (e.g., database maintenance, incident response), or required by law. All Customer Data access by Ozler personnel is logged with the identity of the accessor, the data accessed, the time, and the justification. These logs are retained for 12 months and available for Customer review upon request.</p>
          <h3>6.4 Personnel Security</h3>
          <ul>
            <li>Background checks: all employees and contractors with access to Customer Data undergo National Police Checks before commencement;</li>
            <li>Confidentiality agreements: all personnel sign binding confidentiality and non-disclosure agreements;</li>
            <li>Onboarding: security training, acceptable use policy acknowledgment, and access provisioning within first 7 days;</li>
            <li>Offboarding: access revoked within 4 hours of termination. Equipment returned and wiped within 48 hours. Exit checklist completed and signed;</li>
            <li>Access reviews: quarterly review of all user access to production systems and Customer Data. Stale access revoked.</li>
          </ul>

          <h2>7. Logging, Monitoring, and Detection</h2>
          <h3>7.1 Logging</h3>
          <ul>
            <li>Application logs: all authentication events (success and failure), authorisation decisions, data access, data modification, and administrative actions;</li>
            <li>Infrastructure logs: AWS CloudTrail (API calls), VPC Flow Logs (network traffic), S3 access logs, RDS audit logs;</li>
            <li>WAF logs: all blocked and flagged requests;</li>
            <li>Log format: structured JSON with timestamp, actor, action, resource, outcome, and source IP;</li>
            <li>Log integrity: logs shipped to a centralised SIEM in a separate account. Write-once, append-only storage to prevent tampering;</li>
            <li>Log retention: minimum 12 months online, 7 years archived (compressed, encrypted).</li>
          </ul>
          <h3>7.2 Monitoring and Alerting</h3>
          <ul>
            <li>Real-time monitoring of infrastructure health, application performance, and security events;</li>
            <li>Automated alerting for anomalous patterns: unusual login locations, bulk data export, privilege escalation, brute force attempts, and known attack signatures;</li>
            <li>Uptime monitoring: external synthetic checks every 60 seconds from multiple geographies;</li>
            <li>On-call rotation: 24/7 engineering on-call with defined escalation paths and response time SLAs.</li>
          </ul>
          <h3>7.3 Threat Detection</h3>
          <ul>
            <li>AWS GuardDuty for automated threat detection across CloudTrail, VPC Flow Logs, and DNS logs;</li>
            <li>SIEM correlation rules for multi-vector attack detection;</li>
            <li>Regular threat intelligence review to update detection rules.</li>
          </ul>

          <h2>8. Vulnerability Management</h2>
          <h3>8.1 Vulnerability Scanning</h3>
          <ul>
            <li>Automated infrastructure vulnerability scanning: weekly;</li>
            <li>Automated application vulnerability scanning (DAST): with every staging deployment;</li>
            <li>Container image scanning: at every build and weekly on running images;</li>
            <li>Dependency scanning (SCA): on every code merge and daily scheduled scan;</li>
            <li>Cloud configuration scanning: continuous compliance monitoring against CIS AWS Benchmarks.</li>
          </ul>
          <h3>8.2 Penetration Testing</h3>
          <ul>
            <li>External penetration testing by an independent, qualified third party: at least annually;</li>
            <li>Scope: all production web applications, APIs, and externally accessible infrastructure;</li>
            <li>Methodology: aligned with OWASP Testing Guide and PTES (Penetration Testing Execution Standard);</li>
            <li>Remediation: critical and high findings remediated within 14 days; medium within 30 days; low within 90 days;</li>
            <li>Re-test: critical and high findings re-tested to confirm remediation;</li>
            <li>Reports: executive summary available to enterprise customers under NDA upon request.</li>
          </ul>
          <h3>8.3 Responsible Disclosure</h3>
          <p>Ozler operates a responsible disclosure program. Security researchers may report vulnerabilities to <a href="mailto:security@ozlercare.com.au" className="text-oz-blue">security@ozlercare.com.au</a>. We commit to: acknowledging receipt within 2 business days; providing an initial assessment within 5 business days; keeping the reporter informed of remediation progress; and not pursuing legal action against reporters acting in good faith.</p>

          <h2>9. Incident Response</h2>
          <h3>9.1 Incident Classification</h3>
          <ul>
            <li><strong>Severity 1 (Critical):</strong> data breach confirmed or likely, service outage;</li>
            <li><strong>Severity 2 (High):</strong> suspected breach, significant vulnerability exploited;</li>
            <li><strong>Severity 3 (Medium):</strong> policy violation, anomalous activity;</li>
            <li><strong>Severity 4 (Low):</strong> informational, minor policy deviation.</li>
          </ul>
          <h3>9.2 Response Procedures</h3>
          <table>
            <thead>
              <tr><th>Phase</th><th>Activities and Timeframes</th></tr>
            </thead>
            <tbody>
              <tr><td>Detection &amp; Triage</td><td>Automated detection or manual report &rarr; initial triage within 30 minutes &rarr; severity classification &rarr; Incident Commander assigned</td></tr>
              <tr><td>Containment</td><td>Immediate containment actions within 1 hour of Sev 1 classification: isolate affected systems, revoke compromised credentials, block attacker infrastructure</td></tr>
              <tr><td>Investigation</td><td>Forensic evidence preservation &rarr; root cause analysis &rarr; scope determination (affected tenants, data types, time window) &rarr; documented findings</td></tr>
              <tr><td>Eradication</td><td>Remove threat actor presence &rarr; patch exploited vulnerability &rarr; validate remediation &rarr; restore from known-good state if required</td></tr>
              <tr><td>Recovery</td><td>Restore services &rarr; validate data integrity &rarr; confirm no persistence &rarr; gradual return to normal operations with enhanced monitoring</td></tr>
              <tr><td>Post-Incident</td><td>Blameless post-mortem within 5 business days &rarr; lessons learned &rarr; action items with owners and deadlines &rarr; IRP updates</td></tr>
            </tbody>
          </table>
          <h3>9.3 Customer Notification</h3>
          <ul>
            <li><strong>Severity 1:</strong> Customer notified within 24 hours of confirmation. Updates provided at least every 12 hours until resolution;</li>
            <li><strong>Severity 2:</strong> Customer notified within 48 hours. Updates provided every 24 hours;</li>
            <li><strong>Severity 3&ndash;4:</strong> included in the next scheduled security summary or upon Customer request.</li>
          </ul>
          <p>Notification content includes: description of the incident, data types and approximate records affected, timeline, containment actions taken, recommended Customer actions, and Ozler's remediation plan.</p>
          <h3>9.4 Regulatory Notification</h3>
          <p>Where an incident constitutes an Eligible Data Breach under Part IIIC of the Privacy Act 1988 (Cth), Ozler will notify the Office of the Australian Information Commissioner (OAIC) and affected individuals in accordance with the Notifiable Data Breaches (NDB) scheme. Ozler will coordinate with affected Customers to enable them to meet their own notification obligations to their Workers and Care Recipients.</p>

          <h2>10. Business Continuity and Disaster Recovery</h2>
          <h3>10.1 High Availability</h3>
          <ul>
            <li>Multi-Availability Zone (Multi-AZ) deployment: application and database tiers deployed across at least two AZs within ap-southeast-2;</li>
            <li>Auto-scaling: application tier scales horizontally based on demand;</li>
            <li>Load balancing: AWS Application Load Balancer with health checks and automatic failover;</li>
            <li>Database: Amazon RDS Multi-AZ with automatic failover (typically under 60 seconds).</li>
          </ul>
          <h3>10.2 Disaster Recovery</h3>
          <ul>
            <li>Recovery Point Objective (RPO): 1 hour (standard), 15 minutes (enterprise SLA);</li>
            <li>Recovery Time Objective (RTO): 4 hours (standard), 1 hour (enterprise SLA);</li>
            <li>Backup strategy: automated daily snapshots, continuous WAL archiving for PITR, encrypted backups;</li>
            <li>DR testing: full disaster recovery test conducted annually;</li>
            <li>Runbooks: documented step-by-step recovery procedures for all critical services.</li>
          </ul>
          <h3>10.3 Service Level Targets</h3>
          <table>
            <thead>
              <tr><th>Metric</th><th>Target</th></tr>
            </thead>
            <tbody>
              <tr><td>Availability (monthly)</td><td>99.9% uptime (standard) / 99.95% (enterprise SLA)</td></tr>
              <tr><td>Scheduled Maintenance</td><td>Pre-announced 48 hours in advance; performed during low-traffic windows (Sunday 02:00&ndash;06:00 AEST)</td></tr>
              <tr><td>Incident Response</td><td>Sev 1: 30 min acknowledgment, 1 hr containment; Sev 2: 1 hr acknowledgment</td></tr>
              <tr><td>Support Response</td><td>Standard: 8 business hours; Enterprise: 2 hours (critical), 4 hours (high)</td></tr>
            </tbody>
          </table>

          <h2>11. Third-Party and Vendor Security</h2>
          <h3>11.1 Vendor Risk Assessment</h3>
          <p>Before engaging any third-party service provider that will process, store, or have access to Customer Data or personal information, Ozler conducts a vendor security risk assessment including:</p>
          <ul>
            <li>Review of the vendor's security certifications (SOC 2, ISO 27001, IRAP, or equivalent);</li>
            <li>Assessment of data handling practices, encryption standards, and access controls;</li>
            <li>Evaluation of the vendor's incident response capabilities and breach notification commitments;</li>
            <li>Confirmation of data residency (Australian hosting required for Customer Data);</li>
            <li>Review of the vendor's sub-processor chain and notification obligations.</li>
          </ul>
          <h3>11.2 Contractual Controls</h3>
          <ul>
            <li>All sub-processors are bound by Data Processing Agreements (DPAs) requiring them to process data only on Ozler's documented instructions;</li>
            <li>DPAs include confidentiality obligations, security requirements, breach notification timelines, audit rights, and data return/destruction obligations;</li>
            <li>Sub-processors must notify Ozler within 24 hours of any security incident affecting Ozler data.</li>
          </ul>
          <h3>11.3 Key Sub-Processors</h3>
          <p>Ozler maintains a current list of sub-processors. Key sub-processors include Amazon Web Services (AWS) for cloud infrastructure hosting (ap-southeast-2, Sydney, Australia). A full sub-processor list is available to enterprise customers under NDA upon request.</p>

          <h2>Contact</h2>
          <p>For security-related enquiries or to report a vulnerability:</p>
          <ul>
            <li>Security: <a href="mailto:security@ozlercare.com.au" className="text-oz-blue">security@ozlercare.com.au</a></li>
            <li>Privacy Officer: <a href="mailto:privacy@ozlercare.com.au" className="text-oz-blue">privacy@ozlercare.com.au</a></li>
            <li>Address: Ozler Care Solutions, Melbourne VIC 3000, Australia</li>
          </ul>
        </div>
      </Section>
    </>
  );
}
