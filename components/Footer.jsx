import Link from 'next/link';

const footerLinks = {
  Solutions: [
    { label: 'OzlerShield', href: '/products/ozlershield' },
    { label: 'OzlerSIRS', href: '/products/ozlersirs' },
    { label: 'OzlerReady', href: '/products/ozlerready' },
    { label: 'OzlerPolicy', href: '/products/ozlerpolicy' },
    { label: 'Skill2Care', href: '/products/Skill2Care' },
    { label: 'OzlerPass', href: '/products/ozlerpass' },
    { label: 'OzlerScribe', href: '/products/ozlerscribe' },
  ],
  Company: [
    { label: 'About Us', href: '/about' },
    { label: 'Partners', href: '/partners' },
    { label: 'Blog', href: '/blog' },
    { label: 'Contact', href: '/contact' },
    { label: 'Careers', href: '/careers' },
  ],
  Resources: [
    { label: 'Compliance Hub', href: '/compliance' },
    { label: 'Pricing', href: '/pricing' },
    { label: 'Case Studies', href: '/blog' },
    { label: 'Documentation', href: '#' },
    { label: 'API Reference', href: '#' },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400 pt-20">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10 pb-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-2">
            <Link href="/" className="flex items-center gap-2.5 font-display font-bold text-xl text-white">
            <div><img src="/Logosq.png" alt="Logo" width="240" /></div>
            </Link>
            <p className="mt-4 text-sm leading-relaxed max-w-xs">Technology for safer care. Helping Australian aged care and NDIS providers meet their regulatory obligations through intelligent compliance automation.</p>
          </div>

          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading}>
              <h5 className="text-white font-display text-xs font-semibold tracking-wide uppercase mb-5">{heading}</h5>
              <div className="flex flex-col gap-2">
                {links.map(link => (
                  <Link key={link.href + link.label} href={link.href} className="text-sm text-slate-400 hover:text-white transition-colors">{link.label}</Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="border-t border-white/10 py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs">
          <span>© 2026 Ozler Care Solutions. All rights reserved. ABN 49 695 522 724.</span>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link href="/security" className="hover:text-white transition-colors">Security</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
