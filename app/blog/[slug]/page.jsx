import Link from 'next/link';
import { Section, PageHero, Badge, CTASection } from '@/components/UI';
import { blogPosts } from '@/lib/data';

export function generateStaticParams() { return blogPosts.map(p => ({ slug: p.slug })); }
export function generateMetadata({ params }) { const post = blogPosts.find(p => p.slug === params.slug); return { title: post?.title || 'Blog Post' }; }

export default function BlogPost({ params }) {
  const post = blogPosts.find(p => p.slug === params.slug);
  if (!post) return <div className="pt-40 text-center"><h1>Post not found</h1></div>;
  return (
    <>
      <PageHero breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Blog', href: '/blog' }, { label: post.title.slice(0, 40) + '...' }]}>
        <div className="flex gap-2 mb-4 mt-2"><Badge color={post.tagColor}>{post.tag}</Badge></div>
        <h1>{post.title}</h1>
        <div className="flex gap-4 mt-4 text-sm text-slate-400"><span>By Ozler Care Solutions</span><span>·</span><span>{post.date}</span><span>·</span><span>{post.readTime} read</span></div>
      </PageHero>
      <Section>
        <div className="max-w-2xl mx-auto prose prose-slate prose-lg">
          <p className="text-lg leading-relaxed">{post.excerpt}</p>
          <p>This is a placeholder for the full blog post content. In production, this would contain the complete article with rich formatting, images, and embedded CTAs.</p>
          <p>The article would cover the topic of <strong>{post.title.toLowerCase()}</strong> in detail, providing actionable guidance for aged care and NDIS providers navigating Australia’s evolving regulatory landscape.</p>
          <div className="bg-sky-50 rounded-xl p-8 not-prose mt-10">
            <h3 className="text-lg font-bold text-oz-navy mb-3">Want to stay ahead of regulatory changes?</h3>
            <p className="text-slate-500 mb-4">Book a free compliance assessment and we’ll help you identify your biggest risks.</p>
            <Link href="/contact#demo" className="btn btn-primary">Book Free Assessment</Link>
          </div>
        </div>
      </Section>
    </>
  );
}