'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import clsx from 'clsx';
import { CheckIcon, PlusIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import { useInView } from 'framer-motion';
import { useTilt } from '@/hooks/useTilt';
import { useCountUp } from '@/hooks/useCountUp';
import GradientOrbs from '@/components/GradientOrbs';
import MagneticButton from '@/components/MagneticButton';

// --- Section wrapper ---
export function Section({ children, className, dark, gray, id }) {
  return (
    <section id={id} className={clsx('section-padding', dark && 'bg-oz-navy text-slate-200', gray && 'bg-slate-50', className)}>
      <div className="max-w-7xl mx-auto px-6 md:px-8">{children}</div>
    </section>
  );
}

// --- Section Header ---
export function SectionHeader({ label, labelColor, title, description, center, dark }) {
  return (
    <div className={clsx('max-w-xl mb-14', center && 'mx-auto text-center')}>
      {label && <span className={clsx('label block mb-3', labelColor, dark && 'opacity-80')}>{label}</span>}
      <h2 className={clsx('mb-4', dark && 'text-white')}>{title}</h2>
      {description && <p className={clsx('text-lg', dark ? 'text-slate-400' : 'text-slate-500')}>{description}</p>}
    </div>
  );
}

// --- Hero ---
export function PageHero({ breadcrumbs, label, title, description, children, dark }) {
  return (
    <section className={clsx(
      'pt-36 pb-20 md:pt-44 md:pb-28 relative overflow-hidden',
      dark ? 'bg-oz-navy text-white' : 'bg-white'
    )}>
      {/* Grid pattern */}
      <div className={clsx(
        'absolute inset-0 bg-[linear-gradient(rgba(21,138,128,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(21,138,128,0.04)_1px,transparent_1px)] bg-[size:48px_48px]',
        '[mask-image:radial-gradient(ellipse_80%_70%_at_50%_40%,black_20%,transparent_100%)]',
        dark && '!bg-[linear-gradient(rgba(21,138,128,0.07)_1px,transparent_1px),linear-gradient(90deg,rgba(21,138,128,0.07)_1px,transparent_1px)]'
      )} />

      {/* Gradient blur orbs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full blur-[120px] pointer-events-none" style={{
        background: dark
          ? 'radial-gradient(circle, rgba(21,138,128,0.15) 0%, transparent 70%)'
          : 'radial-gradient(circle, rgba(44,201,173,0.12) 0%, transparent 70%)',
      }} />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full blur-[100px] pointer-events-none" style={{
        background: dark
          ? 'radial-gradient(circle, rgba(23,184,165,0.1) 0%, transparent 70%)'
          : 'radial-gradient(circle, rgba(21,138,128,0.08) 0%, transparent 70%)',
      }} />

      {/* Decorative corner dots */}
      <div className="absolute top-20 right-10 md:right-20 opacity-20" aria-hidden="true">
        <svg width="120" height="120" viewBox="0 0 120 120" fill="none">
          {[0, 1, 2, 3, 4, 5].map(row =>
            [0, 1, 2, 3, 4, 5].map(col => (
              <circle key={`${row}-${col}`} cx={10 + col * 20} cy={10 + row * 20} r={row === col || row + col === 5 ? 3 : 1.5} className={dark ? 'fill-oz-teal' : 'fill-oz-blue'} />
            ))
          )}
        </svg>
      </div>

      {/* Bottom gradient edge */}
      <div className={clsx(
        'absolute bottom-0 left-0 right-0 h-px',
        dark ? 'bg-gradient-to-r from-transparent via-oz-blue/30 to-transparent' : 'bg-gradient-to-r from-transparent via-slate-200 to-transparent'
      )} />

      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        {breadcrumbs && <Breadcrumb items={breadcrumbs} dark={dark} />}
        <div className="max-w-3xl">
          {label && <span className={clsx('label block mb-4', dark && 'opacity-80')}>{label}</span>}
          <h1 className={clsx('tracking-tight', dark && 'text-white')}>{title}</h1>
          {/* Accent bar */}
          <div className="flex items-center gap-2 mt-6 mb-2">
            <div className="h-1 w-10 rounded-full bg-gradient-to-r from-oz-blue to-oz-teal" />
            <div className="h-1 w-3 rounded-full bg-oz-teal/40" />
            <div className="h-1 w-1.5 rounded-full bg-oz-teal/20" />
          </div>
          {description && <p className={clsx('text-lg mt-4 leading-relaxed max-w-2xl', dark ? 'text-slate-300' : 'text-slate-500')}>{description}</p>}
          {children}
        </div>
      </div>
    </section>
  );
}

// --- Breadcrumb ---
export function Breadcrumb({ items, dark }) {
  return (
    <nav className="flex items-center gap-2 text-sm mb-6">
      {items.map((item, i) => (
        <span key={i} className="flex items-center gap-2">
          {i > 0 && <ChevronRightIcon className={clsx('w-3.5 h-3.5', dark ? 'text-slate-600' : 'text-slate-300')} />}
          {item.href ? (
            <Link href={item.href} className={clsx('hover:text-oz-blue transition-colors duration-200', dark ? 'text-slate-400' : 'text-slate-400')}>{item.label}</Link>
          ) : (
            <span className={clsx('font-medium', dark ? 'text-slate-300' : 'text-slate-600')}>{item.label}</span>
          )}
        </span>
      ))}
    </nav>
  );
}

// --- CTA Section ---
export function CTASection({ title, description, primaryText, primaryHref, secondaryText, secondaryHref }) {
  return (
    <section className="bg-gradient-to-br from-oz-blue via-oz-accent to-oz-teal relative overflow-hidden py-20 animate-gradient-flow">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px]" />
      <GradientOrbs preset="cta" />
      <div className="max-w-xl mx-auto px-6 text-center relative z-10">
        <h2 className="text-white mb-4">{title}</h2>
        <p className="text-white/90 text-lg mb-8">{description}</p>
        <div className="flex gap-4 justify-center flex-wrap">
          <MagneticButton>
            <Link href={primaryHref || '/contact#demo'} className="btn btn-white btn-lg shadow-2xl shadow-black/20 hover:shadow-black/30">{primaryText || 'Book a Demo'}</Link>
          </MagneticButton>
          {secondaryText && (
            <MagneticButton>
              <Link href={secondaryHref || '/pricing'} className="btn btn-ghost border-white/50 text-white hover:bg-white/10 hover:border-white btn-lg">{secondaryText}</Link>
            </MagneticButton>
          )}
        </div>
      </div>
    </section>
  );
}

// --- Card ---
export function Card({ children, className, href, borderTop }) {
  const { ref, style, onMouseMove, onMouseLeave } = useTilt(6);
  const inner = (
    <div
      ref={ref}
      style={style}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      className={clsx(
        'bg-white border border-slate-200 rounded-2xl p-8 transition-colors duration-400 ease-expo-out',
        'hover:shadow-[0_20px_60px_rgba(21,138,128,0.12)] hover:border-oz-blue/30',
        'group relative overflow-hidden will-change-transform',
        borderTop && `border-t-[3px] border-t-${borderTop}`,
        className
      )}
    >
      {/* Glare overlay */}
      <div
        className="absolute inset-0 rounded-2xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{ background: 'radial-gradient(circle at var(--glare-x, 50%) var(--glare-y, 50%), rgba(255,255,255,0.18) 0%, transparent 60%)' }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-oz-blue/5 via-transparent to-oz-teal/5 opacity-0 group-hover:opacity-100 transition-opacity duration-600" />
      <div className="relative z-10">{children}</div>
    </div>
  );
  if (href) return <Link href={href} className="block no-underline">{inner}</Link>;
  return inner;
}

// --- Badge ---
const badgeColors = {
  blue: 'bg-teal-50 text-oz-blue border border-teal-100',
  teal: 'bg-emerald-50 text-oz-teal border border-emerald-100',
  green: 'bg-emerald-50 text-emerald-600 border border-emerald-100',
  amber: 'bg-amber-50 text-amber-600 border border-amber-100',
  red: 'bg-red-50 text-red-600 border border-red-100',
};

export function Badge({ children, color = 'blue' }) {
  return (
    <span className={clsx('inline-flex items-center gap-1.5 px-3 py-1 rounded-full font-display text-xs font-semibold transition-all duration-300 hover:scale-110', badgeColors[color])}>
      {children}
    </span>
  );
}

// --- Feature List ---
export function FeatureList({ items }) {
  return (
    <ul className="flex flex-col gap-3 mt-6">
      {items.map((item, i) => (
        <li key={i} className="flex items-start gap-3 text-[0.95rem] text-slate-600">
          <CheckIcon className="w-5 h-5 text-oz-teal font-bold mt-0.5 flex-shrink-0" />
          {item}
        </li>
      ))}
    </ul>
  );
}

// --- Accordion ---
export function Accordion({ items }) {
  const [openIndex, setOpenIndex] = useState(null);
  return (
    <div className="space-y-2">
      {items.map((item, i) => (
        <div key={i} className="border border-slate-200 rounded-xl overflow-hidden transition-all duration-300 hover:border-oz-blue/40 hover:shadow-md">
          <button
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
            className="w-full py-5 px-6 flex items-center justify-between text-left font-display text-base font-semibold text-oz-navy hover:text-oz-blue transition-all duration-300 bg-white hover:bg-slate-50"
          >
            <span className="pr-4">{item.q}</span>
            <PlusIcon className={clsx('w-5 h-5 text-oz-blue transition-all duration-400 ease-expo-out flex-shrink-0', openIndex === i && 'rotate-45 text-oz-teal')} />
          </button>
          <div className={clsx('overflow-hidden transition-all duration-400 ease-expo-out', openIndex === i ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0')}>
            <div className="px-6 pb-5 pt-2">
              <p className="text-slate-600 leading-relaxed">{item.a}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

// --- Stats Bar ---
function StatItem({ s }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  // Separate leading prefix (e.g. "$"), numeric part, and trailing suffix (e.g. "K+", "hr", "+")
  const prefixMatch = s.value.match(/^[^0-9]*/);
  const prefix = prefixMatch ? prefixMatch[0] : '';
  const withoutPrefix = s.value.slice(prefix.length).replace(/,/g, '');
  const numeric = parseFloat(withoutPrefix) || 0;
  const suffix = withoutPrefix.replace(/^[\d.]+/, '');
  const { count, start } = useCountUp({ target: numeric, duration: 1800 });

  useEffect(() => { if (isInView) start(); }, [isInView, start]);

  return (
    <div
      ref={ref}
      className="bg-white px-6 py-8 text-center rounded-xl transition-all duration-400 hover:shadow-lg hover:-translate-y-1 group cursor-default relative overflow-hidden"
    >
      <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-oz-blue via-oz-teal to-oz-blue opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
      <div className="font-display text-3xl md:text-4xl font-extrabold text-oz-navy leading-none mb-2 group-hover:text-oz-blue transition-colors duration-300">
        {isInView ? `${prefix}${count.toLocaleString()}${suffix}` : <span className="opacity-0">0</span>}
      </div>
      <div className="text-sm font-semibold text-slate-700 mb-1">{s.label}</div>
      {s.context && <div className="text-xs text-slate-400 leading-snug">{s.context}</div>}
    </div>
  );
}

export function StatsBar({ stats }) {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-1 bg-slate-100 rounded-2xl overflow-hidden p-1">
      {stats.map((s, i) => (
        <StatItem key={i} s={s} i={i} />
      ))}
    </div>
  );
}

// --- Testimonial ---
export function TestimonialCard({ text, name, role, initials }) {
  return (
    <div className="bg-white border border-slate-200 rounded-2xl p-9 transition-all duration-400 ease-expo-out hover:shadow-[0_20px_60px_rgba(21,138,128,0.12)] hover:-translate-y-2 hover:border-oz-blue/30 group">
      <div className="mb-5">
        <svg className="w-10 h-10 text-oz-blue/20 group-hover:text-oz-blue/40 transition-colors duration-400" fill="currentColor" viewBox="0 0 24 24">
          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
        </svg>
      </div>
      <p className="text-slate-600 italic leading-relaxed mb-5 text-[0.95rem]">{`"${text}"`}</p>
      <div className="flex items-center gap-3">
        <div className="w-11 h-11 rounded-full bg-gradient-to-br from-oz-blue to-oz-teal flex items-center justify-center text-white font-bold font-display text-sm group-hover:scale-110 transition-transform duration-400">
          {initials}
        </div>
        <div>
          <div className="font-display font-semibold text-sm text-oz-navy">{name}</div>
          <div className="text-xs text-slate-400">{role}</div>
        </div>
      </div>
    </div>
  );
}

// --- Pricing Card ---
export function PricingCard({ name, price, unit, description, features, cta, ctaStyle, featured }) {
  return (
    <div className={clsx(
      'bg-white border-2 rounded-2xl p-10 text-center transition-all duration-300 hover:shadow-2xl hover:-translate-y-1.5 relative',
      featured ? 'border-oz-blue shadow-lg' : 'border-slate-200'
    )}>
      {featured && (
        <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-oz-blue text-white px-5 py-1 rounded-full font-display text-xs font-semibold">Most Popular</span>
      )}
      <div className="font-display text-xs font-semibold tracking-wide uppercase text-oz-blue mb-2">{name}</div>
      <div className="font-display text-5xl font-extrabold text-oz-navy leading-none mb-1">{price}<span className="text-base font-medium text-slate-500">{unit}</span></div>
      <p className="text-slate-500 text-sm mb-6">{description}</p>
      <Link href="/contact#demo" className={clsx('btn w-full', ctaStyle || 'btn-primary')}>{cta}</Link>
      <ul className="text-left mt-6 flex flex-col gap-3">
        {features.map((f, i) => (
          <li key={i} className="flex items-center gap-2.5 text-sm text-slate-600">
            <CheckIcon className="w-4 h-4 text-oz-teal font-bold flex-shrink-0" />{f}
          </li>
        ))}
      </ul>
    </div>
  );
}

// --- Timeline ---
export function Timeline({ items }) {
  const statusColors = { ACTIVE: 'bg-green-500', NOW: 'bg-red-500', UPCOMING: 'bg-oz-blue' };
  return (
    <div className="relative pl-10">
      <div className="absolute left-[13px] top-0 bottom-0 w-0.5 bg-slate-200" />
      {items.map((item, i) => (
        <div key={i} className="relative pb-10">
          <div className={clsx('absolute -left-[27px] top-1 w-3.5 h-3.5 rounded-full border-[3px] border-white shadow-[0_0_0_2px]', statusColors[item.status] || 'bg-oz-blue', 'shadow-oz-blue')} />
          <div className="flex items-center gap-2 mb-1">
            <span className="font-display text-sm font-semibold text-oz-blue">{item.date}</span>
            {item.status && <Badge color={item.status === 'ACTIVE' || item.status === 'NOW' ? 'red' : 'blue'}>{item.status}</Badge>}
          </div>
          <h4 className="mb-2">{item.title}</h4>
          <p className="text-slate-500">{item.desc}</p>
        </div>
      ))}
    </div>
  );
}
