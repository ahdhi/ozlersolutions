# Ozler Care Solutions — Corporate Website

**Stack:** Next.js 14 (App Router) · React 18 · Tailwind CSS · Static Export  
**Domains:** ozlercaresolutions.com.au / ozlercaresolutions.au

---

## Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Start development server
npm run dev
# → Open http://localhost:3000

# 3. Build for production (static export)
npm run build
# → Output in /out directory, ready to deploy anywhere
```

---

## Project Architecture

```
ozlercare-next/
├── app/                              # Next.js App Router (file-based routing)
│   ├── layout.jsx                    # Root layout — header, footer, metadata
│   ├── page.jsx                      # Homepage /
│   ├── globals.css                   # Tailwind directives + custom styles
│   ├── about/page.jsx                # /about
│   ├── solutions/page.jsx            # /solutions
│   ├── pricing/page.jsx              # /pricing
│   ├── compliance/page.jsx           # /compliance
│   ├── partners/page.jsx             # /partners
│   ├── blog/
│   │   ├── page.jsx                  # /blog (listing)
│   │   └── [slug]/page.jsx           # /blog/:slug (dynamic blog posts)
│   ├── contact/page.jsx              # /contact
│   ├── privacy/page.jsx              # /privacy
│   ├── terms/page.jsx                # /terms
│   └── products/
│       ├── ozlershield/page.jsx      # /products/ozlershield
│       ├── ozlersirs/page.jsx        # /products/ozlersirs
│       ├── ozlerready/page.jsx       # /products/ozlerready
│       ├── ozlerpolicy/page.jsx      # /products/ozlerpolicy
│       ├── skill2care/page.jsx       # /products/skill2care
│       ├── ozlerpass/page.jsx        # /products/ozlerpass
│       └── ozlerscribe/page.jsx      # /products/ozlerscribe
│
├── components/                       # Reusable React components
│   ├── Header.jsx                    # Navigation with dropdown, mobile menu
│   ├── Footer.jsx                    # Site-wide footer with links
│   ├── UI.jsx                        # Section, Hero, CTA, Card, Badge, Accordion, 
│   │                                 # StatsBar, Timeline, PricingCard, Testimonial, etc.
│   └── ProductPage.jsx               # Shared product page template (used by all 7 products)
│
├── lib/
│   └── data.js                       # Centralized data: products, pricing, blog posts,
│                                     # regulatory timeline, testimonials, partner types, stats
│
├── public/                           # Static assets
│   └── images/                       # Add logos, screenshots, etc.
│
├── next.config.js                    # Static export config
├── tailwind.config.js                # Design tokens (colors, fonts, spacing)
├── postcss.config.js                 # PostCSS with Tailwind
├── jsconfig.json                     # Path aliases (@/components, @/lib)
├── package.json                      # Dependencies
└── .gitignore
```

---

## Pages (18 routes)

| Route | File | Purpose |
|-------|------|---------|
| `/` | `app/page.jsx` | Homepage — hero, stats, products, flywheel, testimonials |
| `/about` | `app/about/page.jsx` | Mission, values, timeline, company details |
| `/solutions` | `app/solutions/page.jsx` | All 7 products with descriptions |
| `/products/ozlershield` | `app/products/ozlershield/page.jsx` | OzlerShield product page |
| `/products/ozlersirs` | `app/products/ozlersirs/page.jsx` | OzlerSIRS product page |
| `/products/ozlerready` | `app/products/ozlerready/page.jsx` | OzlerReady product page |
| `/products/ozlerpolicy` | `app/products/ozlerpolicy/page.jsx` | OzlerPolicy product page |
| `/products/skill2care` | `app/products/skill2care/page.jsx` | skill2care product page |
| `/products/ozlerpass` | `app/products/ozlerpass/page.jsx` | OzlerPass product page |
| `/products/ozlerscribe` | `app/products/ozlerscribe/page.jsx` | OzlerScribe product page |
| `/pricing` | `app/pricing/page.jsx` | 3 tiers + standalone + FAQ |
| `/compliance` | `app/compliance/page.jsx` | Regulatory timeline + risk overview |
| `/partners` | `app/partners/page.jsx` | 4 partner types |
| `/blog` | `app/blog/page.jsx` | Blog listing with featured post |
| `/blog/:slug` | `app/blog/[slug]/page.jsx` | Individual blog posts |
| `/contact` | `app/contact/page.jsx` | Contact form + demo booking |
| `/privacy` | `app/privacy/page.jsx` | Privacy policy |
| `/terms` | `app/terms/page.jsx` | Terms of service |

---

## Key Design Decisions

### Why Next.js with Static Export?
- **File-based routing** → Each page is a real `/route`, not hash navigation
- **Static export** (`output: 'export'`) → Generates pure HTML/CSS/JS, deploys anywhere
- **React components** → Reusable, maintainable, modern DX
- **Zero server required** → No Node.js server in production
- **SEO-friendly** → Each page gets its own HTML file with proper metadata

### Component Architecture
- **`components/UI.jsx`** — All reusable UI primitives (Section, Hero, Card, Badge, etc.)
- **`components/ProductPage.jsx`** — Shared template for all 7 product pages
- **`lib/data.js`** — Single source of truth for all content (products, pricing, blog, etc.)
- Product pages are ~3 lines each — they just reference the shared template + data

### Data Architecture
All content lives in `lib/data.js`. To update product details, pricing, blog posts, or regulatory dates, edit one file. Every page pulls from this single source.

---

## Deployment

### Vercel (Recommended — zero config)
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Add custom domain in Vercel dashboard
# → ozlercaresolutions.com.au
```

### Netlify
```bash
npm run build
# Upload /out directory to Netlify
# Or connect GitHub repo → Build command: npm run build → Publish: out
```

### AWS S3 + CloudFront
```bash
npm run build
aws s3 sync out/ s3://ozlercaresolutions.com.au
# Configure CloudFront distribution + SSL certificate via ACM
```

### Any Static Host
```bash
npm run build
# Upload contents of /out directory
```

---

## Customization

### Brand Colors
Edit `tailwind.config.js`:
```js
colors: {
  oz: {
    navy: '#0A1628',
    blue: '#1B6EC2',
    teal: '#0EA5A0',
  }
}
```

### Adding Products
1. Add product object to `products` array in `lib/data.js`
2. Create `app/products/[new-id]/page.jsx` (3-line file using ProductPage component)
3. Product auto-appears in navigation dropdown, solutions page, and footer

### Adding Blog Posts
1. Add post object to `blogPosts` array in `lib/data.js`
2. Post auto-appears on blog listing and generates static route via `generateStaticParams()`
3. For full content, expand the `blog/[slug]/page.jsx` template

### Adding Images
Place in `public/images/`, reference as `/images/filename.png`

---

## Tech Stack

| Tool | Purpose |
|------|---------|
| Next.js 14 | React framework with App Router and static export |
| React 18 | UI components |
| Tailwind CSS 3.4 | Utility-first styling |
| lucide-react | Icon library |
| clsx | Conditional className utility |
| Google Fonts | DM Sans (display) + Source Sans 3 (body) |

**Zero CMS dependency** — all content is in `lib/data.js`.  
**Zero backend** — static export means no server to maintain.

---

## Next Steps

- [ ] Add actual logo SVG in `public/` and update Header/Footer
- [ ] Add product screenshots and images
- [ ] Connect contact form to backend (Formspree, Resend, or API route)
- [ ] Add Google Analytics / Plausible analytics
- [ ] Add Open Graph images for social sharing
- [ ] Write full blog post content
- [ ] Add sitemap.xml generation (next-sitemap package)
- [ ] Set up CI/CD pipeline
