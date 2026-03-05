import Link from 'next/link';
import { Section, PageHero, Badge } from '@/components/UI';
import { blogPosts } from '@/lib/data';
export const metadata = {
  title: 'Blog — Compliance Insights & Regulatory Updates',
  description: 'Expert analysis on aged care and NDIS regulatory changes, compliance best practices, workforce management, SIRS reporting, worker screening, and care technology trends in Australia.',
  alternates: { canonical: '/blog' },
  openGraph: {
    title: 'Blog — Ozler Care Solutions',
    description: 'Expert analysis on regulatory changes, compliance best practices, and care technology trends for Australian providers.',
    url: '/blog',
  },
};

const tagColors = { Compliance: 'red', Regulation: 'blue', SIRS: 'red', Standards: 'blue', Training: 'green', Workforce: 'blue', Technology: 'amber' };

export default function BlogPage() {
  const featured = blogPosts.find(p => p.featured);
  const rest = blogPosts.filter(p => !p.featured);
  return (
    <>
      <PageHero breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Blog' }]} label="Blog" title="Insights & Updates" description="Expert analysis on regulatory changes, compliance best practices, and care technology trends." />
      <Section>
        {featured && (
          <Link href={`/blog/${featured.slug}`} className="block mb-12 group">
            <div className="grid md:grid-cols-2 gap-0 bg-slate-50 rounded-2xl overflow-hidden">
              <div className={`bg-gradient-to-br ${featured.gradient} min-h-[300px] flex items-center justify-center`}>
                <featured.icon className="w-24 h-24 text-white/70" />
              </div>
              <div className="p-10 flex flex-col justify-center">
                <div className="flex gap-2 mb-3"><Badge color="red">Urgent</Badge><Badge color="blue">{featured.tag}</Badge></div>
                <h2 className="text-2xl group-hover:text-oz-blue transition-colors">{featured.title}</h2>
                <p className="text-slate-500 mt-3">{featured.excerpt}</p>
                <div className="text-sm text-slate-400 mt-4">{featured.date} · {featured.readTime} read</div>
              </div>
            </div>
          </Link>
        )}
        <div className="grid md:grid-cols-3 gap-8">
          {rest.map(p => (
            <Link key={p.slug} href={`/blog/${p.slug}`} className="group block rounded-2xl overflow-hidden border border-slate-200 hover:shadow-xl hover:-translate-y-1 transition-all">
              <div className={`bg-gradient-to-br ${p.gradient} h-52 flex items-center justify-center`}>
                <p.icon className="w-20 h-20 text-white/70" />
              </div>
              <div className="p-7">
                <div className="flex items-center gap-3 mb-3 text-xs text-slate-400"><Badge color={tagColors[p.tag] || 'blue'}>{p.tag}</Badge><span>{p.date}</span></div>
                <h3 className="text-lg group-hover:text-oz-blue transition-colors mb-2">{p.title}</h3>
                <p className="text-sm text-slate-500">{p.excerpt}</p>
              </div>
            </Link>
          ))}
        </div>
      </Section>
    </>
  );
}