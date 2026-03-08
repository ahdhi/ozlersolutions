'use client';

import { useState, useRef, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { Section, SectionHeader, CTASection, Badge, Breadcrumb } from '@/components/UI';
import { jobOpenings } from '@/lib/data';
import GradientOrbs from '@/components/GradientOrbs';
import {
  MapPinIcon,
  BuildingOfficeIcon,
  CheckCircleIcon,
  SparklesIcon,
  RocketLaunchIcon,
  HeartIcon,
  UserGroupIcon,
  BriefcaseIcon,
} from '@heroicons/react/24/outline';

const badgeColorMap = {
  Internship: 'amber',
  'Full-time': 'blue',
  'Part-time': 'teal',
  Contract: 'green',
};

const perks = [
  {
    icon: SparklesIcon,
    title: 'Meaningful Impact',
    description:
      'Your code protects vulnerable Australians. Every feature you build directly improves care quality and safety for real people.',
  },
  {
    icon: RocketLaunchIcon,
    title: 'Growth & Learning',
    description:
      'Work with cutting-edge tech — AI, LLMs, and modern web frameworks. We invest in your development with learning budgets and mentorship.',
  },
  {
    icon: HeartIcon,
    title: 'Flexible Work',
    description:
      'Hybrid-first culture with flexible hours. We trust you to do your best work however and wherever suits you.',
  },
  {
    icon: UserGroupIcon,
    title: 'Collaborative Culture',
    description:
      "Small team, big ambition. You'll have a direct line to founders and real ownership over your work from day one.",
  },
];

export default function CareersPage() {
  return (
    <Suspense fallback={null}>
      <CareersContent />
    </Suspense>
  );
}

function CareersContent() {
  const searchParams = useSearchParams();
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [selectedPosition, setSelectedPosition] = useState('');
  const formRef = useRef(null);

  useEffect(() => {
    if (searchParams.get('submitted') === 'true') {
      setSubmitted(true);
      document.getElementById('apply')?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [searchParams]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSubmitting(true);

    try {
      const formData = new FormData(formRef.current);

      const response = await fetch('/api/apply', {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();

      if (!response.ok || !data?.success) {
        setError(data?.error || 'Something went wrong. Please try again.');
        setSubmitting(false);
        return;
      }

      setSubmitted(true);
      formRef.current?.reset();
      setSelectedPosition('');
      document.getElementById('apply')?.scrollIntoView({ behavior: 'smooth' });
    } catch (err) {
      setError('Network error. Please check your connection and try again.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      {/* Hero */}
      <section className="relative pt-36 pb-20 md:pt-40 md:pb-28 bg-gradient-to-br from-slate-50 via-teal-50/30 to-emerald-50/20 overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(21,138,128,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(21,138,128,0.03)_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none" />
        <GradientOrbs preset="hero" />

        <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
          <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: 'Careers' }]} />

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mt-2">
            {/* Left — Text */}
            <div>
              <span className="label block mb-3">Careers</span>
              <h1>Build the Future of Care Technology</h1>
              <p className="text-lg mt-6 leading-relaxed text-slate-500">
                We&apos;re on a mission to make Australian aged care and disability services safer through intelligent compliance technology. Join a team where your work genuinely matters.
              </p>
              <div className="flex flex-wrap gap-4 mt-8">
                <a href="#apply" className="btn btn-primary btn-lg">
                  Apply Now
                </a>
                <a href="#positions" className="btn btn-secondary btn-lg">
                  View Open Roles
                </a>
              </div>
              <div className="flex items-center gap-6 mt-8 text-sm text-slate-500">
                <span className="flex items-center gap-1.5">
                  <MapPinIcon className="w-4 h-4 text-oz-blue" /> Melbourne, Australia
                </span>
                <span className="flex items-center gap-1.5">
                  <BriefcaseIcon className="w-4 h-4 text-oz-blue" /> {jobOpenings.length} Open Roles
                </span>
              </div>
            </div>

            {/* Right — Role highlights */}
            <div className="hidden lg:flex flex-col gap-4">
              {jobOpenings.map((job) => (
                <a
                  key={job.id}
                  href="#positions"
                  className="bg-white border border-slate-200 rounded-2xl p-5 flex items-center gap-4 hover:border-oz-blue/30 hover:shadow-lg hover:shadow-slate-200/50 transition-all duration-300 group"
                >
                  <div
                    className={`w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-105 ${
                      job.color === 'blue'
                        ? 'bg-teal-50 text-oz-blue'
                        : job.color === 'teal'
                        ? 'bg-emerald-50 text-oz-teal'
                        : job.color === 'amber'
                        ? 'bg-amber-50 text-amber-500'
                        : 'bg-slate-100 text-slate-500'
                    }`}
                  >
                    <job.icon className="w-5 h-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="font-display text-sm font-bold text-oz-navy group-hover:text-oz-blue transition-colors">{job.title}</div>
                    <div className="text-xs text-slate-400">
                      {job.department} · {job.location}
                    </div>
                  </div>
                  <Badge color={badgeColorMap[job.type] || 'blue'}>{job.type}</Badge>
                </a>
              ))}

              {/* Stats row */}
              <div className="bg-white border border-slate-200 rounded-2xl p-5 flex items-center justify-between mt-1">
                <div className="text-center flex-1">
                  <div className="font-display text-2xl font-bold text-oz-blue">{jobOpenings.length}</div>
                  <div className="text-xs text-slate-400 mt-0.5">Open Roles</div>
                </div>
                <div className="w-px h-10 bg-slate-200" />
                <div className="text-center flex-1">
                  <div className="font-display text-2xl font-bold text-oz-teal">Hybrid</div>
                  <div className="text-xs text-slate-400 mt-0.5">Work Model</div>
                </div>
                <div className="w-px h-10 bg-slate-200" />
                <div className="text-center flex-1">
                  <div className="font-display text-2xl font-bold text-emerald-500">Melbourne</div>
                  <div className="text-xs text-slate-400 mt-0.5">Location</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <Section id="positions">
        <SectionHeader
          label="Open Positions"
          title="Current Opportunities"
          description="We're looking for talented people who care about making care better. Find your role below and apply directly."
          center
        />
        <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
          {jobOpenings.map((job) => (
            <div
              key={job.id}
              className="bg-white border border-slate-200 rounded-2xl p-8 hover:shadow-[0_20px_60px_rgba(21,138,128,0.12)] hover:border-oz-blue/30 transition-all duration-400 group flex flex-col"
            >
              <div className="flex items-start gap-4 mb-5">
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-110 group-hover:shadow-md ${
                    job.color === 'blue'
                      ? 'bg-teal-50 text-oz-blue'
                      : job.color === 'teal'
                      ? 'bg-emerald-50 text-oz-teal'
                      : job.color === 'amber'
                      ? 'bg-amber-50 text-amber-500'
                      : 'bg-slate-100 text-slate-500'
                  }`}
                >
                  <job.icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-display font-bold text-oz-navy mb-1">{job.title}</h3>
                  <div className="flex flex-wrap gap-2">
                    <Badge color={badgeColorMap[job.type] || 'blue'}>{job.type}</Badge>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-slate-500 mb-4">
                <span className="flex items-center gap-1">
                  <MapPinIcon className="w-4 h-4" /> {job.location}
                </span>
                <span className="flex items-center gap-1">
                  <BuildingOfficeIcon className="w-4 h-4" /> {job.department}
                </span>
              </div>

              <p className="text-slate-600 text-[0.95rem] leading-relaxed mb-5 flex-1">{job.description}</p>

              <div className="mb-5">
                <h4 className="font-display text-sm font-semibold text-oz-navy mb-2">Key Responsibilities</h4>
                <ul className="space-y-1.5">
                  {job.responsibilities.slice(0, 3).map((r, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-slate-600">
                      <CheckCircleIcon className="w-4 h-4 text-oz-teal flex-shrink-0 mt-0.5" />
                      <span>{r}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-6">
                <h4 className="font-display text-sm font-semibold text-oz-navy mb-2">Requirements</h4>
                <ul className="space-y-1.5">
                  {job.requirements.slice(0, 3).map((r, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-slate-600">
                      <CheckCircleIcon className="w-4 h-4 text-oz-blue flex-shrink-0 mt-0.5" />
                      <span>{r}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <a href="#apply" onClick={() => setSelectedPosition(job.title)} className="btn btn-primary w-full text-center">
                Apply Now
              </a>
            </div>
          ))}
        </div>
      </Section>

      {/* Why Ozler */}
      <Section gray>
        <SectionHeader
          label="Why Ozler"
          title="More Than a Job"
          description="We're building technology that protects vulnerable Australians. Here's what it's like to be part of the team."
          center
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {perks.map((perk) => (
            <div
              key={perk.title}
              className="bg-white border border-slate-200 rounded-2xl p-6 hover:shadow-[0_20px_60px_rgba(21,138,128,0.12)] hover:border-oz-blue/30 transition-all duration-400 group"
            >
              <div className="w-11 h-11 rounded-xl bg-teal-50 text-oz-blue flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110 group-hover:shadow-md">
                <perk.icon className="w-6 h-6" />
              </div>
              <h4 className="font-display font-bold text-oz-navy mb-2">{perk.title}</h4>
              <p className="text-sm text-slate-500 leading-relaxed">{perk.description}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Application Form */}
      <Section id="apply">
        <div className="max-w-2xl mx-auto">
          <SectionHeader
            label="Apply"
            title="Submit Your Application"
            description="Fill in your details below and upload your resume. We'll review every application and get back to you within 5 business days."
            center
          />

          {submitted ? (
            <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-8 text-center">
              <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center mx-auto mb-4">
                <CheckCircleIcon className="w-8 h-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-display font-bold text-oz-navy mb-2">Application Submitted!</h3>
              <p className="text-slate-600 mb-6">
                Thank you for your interest in joining Ozler Care. Our team will review your application and reach out within 5 business days.
              </p>
              <button onClick={() => setSubmitted(false)} className="btn btn-secondary btn-sm">
                Submit Another Application
              </button>
            </div>
          ) : (
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
              {/* Name */}
              <div>
                <label className="block font-display text-sm font-semibold text-oz-navy mb-1.5">Full Name *</label>
                <input
                  type="text"
                  name="fullName"
                  required
                  className="w-full px-4 py-3 border-2 border-slate-300 rounded-lg focus:border-oz-blue focus:outline-none transition-colors"
                  placeholder="Your full name"
                />
              </div>

              {/* Email & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-display text-sm font-semibold text-oz-navy mb-1.5">Email *</label>
                  <input
                    type="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 border-2 border-slate-300 rounded-lg focus:border-oz-blue focus:outline-none transition-colors"
                    placeholder="you@email.com"
                  />
                </div>
                <div>
                  <label className="block font-display text-sm font-semibold text-oz-navy mb-1.5">Phone *</label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    className="w-full px-4 py-3 border-2 border-slate-300 rounded-lg focus:border-oz-blue focus:outline-none transition-colors"
                    placeholder="04XX XXX XXX"
                  />
                </div>
              </div>

              {/* Position */}
              <div>
                <label className="block font-display text-sm font-semibold text-oz-navy mb-1.5">Position Applying For *</label>
                <select
                  name="position"
                  required
                  value={selectedPosition}
                  onChange={(e) => setSelectedPosition(e.target.value)}
                  className="w-full px-4 py-3 border-2 border-slate-300 rounded-lg focus:border-oz-blue focus:outline-none transition-colors bg-white"
                >
                  <option value="">Select a position</option>
                  {jobOpenings.map((job) => (
                    <option key={job.id} value={job.title}>
                      {job.title}
                    </option>
                  ))}
                </select>
              </div>

              {/* LinkedIn */}
              <div>
                <label className="block font-display text-sm font-semibold text-oz-navy mb-1.5">LinkedIn Profile</label>
                <input
                  type="url"
                  name="linkedin"
                  className="w-full px-4 py-3 border-2 border-slate-300 rounded-lg focus:border-oz-blue focus:outline-none transition-colors"
                  placeholder="https://linkedin.com/in/yourprofile"
                />
              </div>

              {/* Resume Upload */}
              <div>
                <label className="block font-display text-sm font-semibold text-oz-navy mb-1.5">Resume (PDF/DOC) *</label>
                <input
                  type="file"
                  name="resume"
                  accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                  required
                  className="w-full px-4 py-3 border-2 border-slate-300 rounded-lg focus:border-oz-blue focus:outline-none transition-colors bg-white"
                />
                <p className="text-xs text-slate-400 mt-2">Upload up to 10MB. We keep your file secure and only share it with the hiring team.</p>
              </div>

              {/* Cover Letter / Message */}
              <div>
                <label className="block font-display text-sm font-semibold text-oz-navy mb-1.5">Cover Letter / Message</label>
                <textarea
                  name="message"
                  className="w-full px-4 py-3 border-2 border-slate-300 rounded-lg focus:border-oz-blue focus:outline-none transition-colors min-h-[140px] resize-y"
                  placeholder="Tell us why you're interested in this role and what you'd bring to the team..."
                />
              </div>

              {/* Error */}
              {error && (
                <div className="bg-red-50 border border-red-200 text-red-700 text-sm rounded-lg px-4 py-3">
                  {error}
                </div>
              )}

              {/* Submit */}
              <button type="submit" disabled={submitting} className="btn btn-primary btn-lg w-full disabled:opacity-60">
                {submitting ? 'Submitting...' : 'Submit Application'}
              </button>

              <p className="text-xs text-slate-400 text-center">
                By submitting, you consent to Ozler Care Solutions storing and processing your personal data for recruitment purposes in accordance with our{' '}
                <a href="/privacy" className="text-oz-blue hover:underline">
                  Privacy Policy
                </a>
                .
              </p>
            </form>
          )}
        </div>
      </Section>

      {/* Healthcare Jobs Banner */}
      <Section gray>
        <div className="bg-white border border-slate-200 rounded-2xl p-8 md:p-10 flex flex-col md:flex-row items-center gap-6 md:gap-10">
          <div className="w-14 h-14 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center flex-shrink-0">
            <HeartIcon className="w-7 h-7" />
          </div>
          <div className="flex-1 text-center md:text-left">
            <h3 className="text-lg font-display font-bold text-oz-navy mb-1">Looking for Healthcare Jobs?</h3>
            <p className="text-slate-500 text-[0.95rem] leading-relaxed">
              If you're a nurse, support worker, care coordinator, or allied health professional looking for frontline healthcare roles with Ozler Care, head over to our main site to view current openings.
            </p>
          </div>
          <a
            href="https://ozlercare.com.au"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary btn-lg flex-shrink-0 whitespace-nowrap"
          >
            View Healthcare Jobs →
          </a>
        </div>
      </Section>

      {/* CTA */}
      <CTASection
        title="Have questions about a role?"
        description="Get in touch with our team. We're happy to chat about what it's like to work at Ozler Care."
        primaryText="Contact Us"
        primaryHref="/contact"
      />
    </>
  );
}
