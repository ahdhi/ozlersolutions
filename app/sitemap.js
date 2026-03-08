import { blogPosts } from '@/lib/data';

const BASE = 'https://ozlercaresolutions.com.au';

export default function sitemap() {
  const staticPages = [
    { path: '/', priority: 1.0, changeFrequency: 'weekly' },
    { path: '/about', priority: 0.8, changeFrequency: 'monthly' },
    { path: '/solutions', priority: 0.9, changeFrequency: 'monthly' },
    { path: '/pricing', priority: 0.8, changeFrequency: 'monthly' },
    { path: '/compliance', priority: 0.8, changeFrequency: 'weekly' },
    { path: '/partners', priority: 0.7, changeFrequency: 'monthly' },
    { path: '/blog', priority: 0.8, changeFrequency: 'weekly' },
    { path: '/contact', priority: 0.7, changeFrequency: 'monthly' },
    { path: '/careers', priority: 0.6, changeFrequency: 'weekly' },
    { path: '/privacy', priority: 0.3, changeFrequency: 'yearly' },
    { path: '/terms', priority: 0.3, changeFrequency: 'yearly' },
    { path: '/security', priority: 0.5, changeFrequency: 'yearly' },
    // Products
    { path: '/products/ozlershield', priority: 0.9, changeFrequency: 'monthly' },
    { path: '/products/ozlersirs', priority: 0.9, changeFrequency: 'monthly' },
    { path: '/products/ozlerready', priority: 0.9, changeFrequency: 'monthly' },
    { path: '/products/ozlerpolicy', priority: 0.9, changeFrequency: 'monthly' },
    { path: '/products/ozlerpass', priority: 0.9, changeFrequency: 'monthly' },
    { path: '/products/ozlerscribe', priority: 0.9, changeFrequency: 'monthly' },
    { path: '/products/Skill2Care', priority: 0.9, changeFrequency: 'monthly' },
  ];

  const blogPages = blogPosts.map((post) => ({
    path: `/blog/${post.slug}`,
    priority: 0.6,
    changeFrequency: 'monthly',
  }));

  return [...staticPages, ...blogPages].map((page) => ({
    url: `${BASE}${page.path}`,
    lastModified: new Date().toISOString().split('T')[0],
    changeFrequency: page.changeFrequency,
    priority: page.priority,
  }));
}
