'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { products } from '@/lib/data';
import { Bars3Icon, XMarkIcon, ChevronDownIcon } from '@heroicons/react/24/outline';
import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';

const colorMap = {
  blue: 'bg-teal-50 text-oz-blue',
  red: 'bg-red-50 text-red-500',
  teal: 'bg-emerald-50 text-oz-teal',
  amber: 'bg-amber-50 text-amber-500',
  green: 'bg-emerald-50 text-emerald-500',
};

const dropdownVariants = {
  hidden: { opacity: 0, y: -8, scale: 0.97 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { type: 'spring', stiffness: 220, damping: 22 } },
  exit: { opacity: 0, y: -8, scale: 0.97, transition: { duration: 0.15, ease: 'easeIn' } },
};

const mobileNavVariants = {
  hidden: { opacity: 0, height: 0 },
  visible: { opacity: 1, height: 'auto', transition: { type: 'spring', stiffness: 220, damping: 26 } },
  exit: { opacity: 0, height: 0, transition: { duration: 0.18, ease: 'easeIn' } },
};

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-xl border-b transition-all duration-400 ${scrolled ? 'border-slate-200 shadow-lg shadow-slate-200/50' : 'border-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 md:px-8 flex items-center justify-between h-[72px]">
        {/* Logo */}
        <Link href="/" className="flex items-center group">
          <Image
            src="/Logosq.png"
            alt="Ozler Care Solutions"
            width={220}
            height={160}
            className="transition-all duration-400 group-hover:scale-105 group-hover:brightness-110"
            priority
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1">
          <NavLink href="/about">About</NavLink>

          {/* Solutions Dropdown */}
          <div className="relative" onMouseEnter={() => setDropdownOpen(true)} onMouseLeave={() => setDropdownOpen(false)}>
            <Link href="/solutions" className="flex items-center gap-1 px-4 py-2 font-display text-sm font-medium text-slate-600 rounded-md hover:text-oz-blue hover:bg-teal-50/60 transition-all duration-300">
              Solutions <ChevronDownIcon className={`w-4 h-4 transition-all duration-400 ease-expo-out ${dropdownOpen ? 'rotate-180 text-oz-teal' : ''}`} />
            </Link>
            <AnimatePresence>
              {dropdownOpen && (
                <motion.div
                  variants={dropdownVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className="absolute top-full left-0 w-80 bg-white border border-slate-200 rounded-xl shadow-2xl shadow-slate-200/50 p-2 mt-2"
                >
                  {products.map((p) => (
                    <Link key={p.id} href={`/products/${p.id}`} className="flex items-start gap-3 p-3 rounded-lg hover:bg-gradient-to-r hover:from-teal-50 hover:to-emerald-50/30 transition-all duration-300 group">
                      <div className={`w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-110 group-hover:shadow-md ${colorMap[p.color] || 'bg-slate-100'}`}>
                        <p.icon className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="font-display text-sm font-semibold text-oz-navy group-hover:text-oz-blue transition-colors duration-300">{p.name}</div>
                        <div className="text-xs text-slate-500 leading-snug">{p.subtitle}</div>
                      </div>
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <NavLink href="/pricing">Pricing</NavLink>
          <NavLink href="/compliance">Compliance</NavLink>
          <NavLink href="/partners">Partners</NavLink>
          <NavLink href="/blog">Blog</NavLink>
        </nav>

        {/* CTA */}
        <div className="flex items-center gap-3">
          <Link href="/contact" className="hidden md:inline-flex btn btn-secondary btn-sm">Contact Us</Link>
          <Link href="/contact#demo" className="hidden sm:inline-flex btn btn-primary btn-sm">Book a Demo</Link>
          <button onClick={() => setMobileOpen(!mobileOpen)} className="lg:hidden p-2" aria-label="Toggle menu">
            <AnimatePresence mode="wait" initial={false}>
              {mobileOpen
                ? <motion.span key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.15 }}>
                    <XMarkIcon className="w-6 h-6" />
                  </motion.span>
                : <motion.span key="open" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.15 }}>
                    <Bars3Icon className="w-6 h-6" />
                  </motion.span>
              }
            </AnimatePresence>
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.nav
            variants={mobileNavVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="lg:hidden bg-white border-t border-slate-200 shadow-lg overflow-hidden"
          >
            <div className="flex flex-col gap-1 p-4">
              <MobileLink href="/about" onClick={() => setMobileOpen(false)}>About</MobileLink>
              <MobileLink href="/solutions" onClick={() => setMobileOpen(false)}>Solutions</MobileLink>
              {products.map(p => (
                <Link key={p.id} href={`/products/${p.id}`} onClick={() => setMobileOpen(false)} className="pl-8 py-2 text-sm text-slate-500 hover:text-oz-blue flex items-center gap-2">
                  <p.icon className="w-4 h-4" /> {p.name}
                </Link>
              ))}
              <MobileLink href="/pricing" onClick={() => setMobileOpen(false)}>Pricing</MobileLink>
              <MobileLink href="/compliance" onClick={() => setMobileOpen(false)}>Compliance</MobileLink>
              <MobileLink href="/partners" onClick={() => setMobileOpen(false)}>Partners</MobileLink>
              <MobileLink href="/blog" onClick={() => setMobileOpen(false)}>Blog</MobileLink>
              <MobileLink href="/contact" onClick={() => setMobileOpen(false)}>Contact</MobileLink>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}

function NavLink({ href, children }) {
  return (
    <Link href={href} className="px-4 py-2 font-display text-sm font-medium text-slate-600 rounded-md hover:text-oz-blue hover:bg-teal-50/60 transition-all duration-300 relative group">
      <span className="relative z-10">{children}</span>
      <span className="absolute inset-0 bg-gradient-to-r from-oz-blue/0 via-oz-blue/5 to-oz-blue/0 opacity-0 group-hover:opacity-100 transition-opacity duration-400 rounded-md" />
    </Link>
  );
}

function MobileLink({ href, children, onClick }) {
  return (
    <Link href={href} onClick={onClick} className="py-3 px-4 font-display font-medium text-slate-700 hover:text-oz-blue rounded-lg hover:bg-gradient-to-r hover:from-teal-50 hover:to-emerald-50/30 transition-all duration-300">
      {children}
    </Link>
  );
}
