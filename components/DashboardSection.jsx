'use client';

import { useState, useEffect } from 'react';
import { ChartBarIcon, UserGroupIcon, DocumentTextIcon, CheckCircleIcon, ExclamationTriangleIcon, ClockIcon } from '@heroicons/react/24/outline';

// Counter animation component
const AnimatedCounter = ({ value, isCurrency = false, isPercentage = false }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Parse the display value
    let target = 0;
    if (isPercentage) {
      target = parseFloat(value);
    } else if (isCurrency) {
      target = parseInt(value.replace(/[$,]/g, ''));
    } else {
      target = parseInt(value);
    }

    // Animation duration
    const duration = 2000; // 2 seconds
    const increment = target / (duration / 16); // 16ms per frame (60fps)
    let current = 0;

    const interval = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(interval);
      } else {
        setCount(Math.floor(current));
      }
    }, 16);

    return () => clearInterval(interval);
  }, [value, isCurrency, isPercentage]);

  if (isPercentage) return `${count.toFixed(1)}%`;
  if (isCurrency) return `$${count.toLocaleString()}`;
  return count.toLocaleString();
};

const colorMap = {
  emerald: {
    bar: 'bg-gradient-to-r from-emerald-400 to-emerald-500',
    text: 'text-emerald-600',
    card: 'bg-emerald-50 border-emerald-100',
    reportCard: 'bg-gradient-to-r from-emerald-50 to-slate-50 border-emerald-100',
  },
  amber: {
    bar: 'bg-gradient-to-r from-amber-400 to-amber-500',
    text: 'text-amber-600',
    card: 'bg-amber-50 border-amber-100',
    reportCard: 'bg-gradient-to-r from-amber-50 to-slate-50 border-amber-100',
  },
  red: {
    bar: 'bg-gradient-to-r from-red-400 to-red-500',
    text: 'text-red-600',
    card: 'bg-red-50 border-red-100',
    reportCard: 'bg-gradient-to-r from-red-50 to-slate-50 border-red-100',
  },
  blue: {
    bar: 'bg-gradient-to-r from-blue-400 to-blue-500',
    text: 'text-blue-600',
    card: 'bg-blue-50 border-blue-100',
    reportCard: 'bg-gradient-to-r from-blue-50 to-slate-50 border-blue-100',
  },
  teal: {
    bar: 'bg-gradient-to-r from-teal-400 to-teal-500',
    text: 'text-teal-600',
    card: 'bg-teal-50 border-teal-100',
    reportCard: 'bg-gradient-to-r from-teal-50 to-slate-50 border-teal-100',
  },
};

// Progress bar animation component
const AnimatedProgressBar = ({ value, total, color, label }) => {
  const [isAnimating, setIsAnimating] = useState(false);
  const percentage = (value / total) * 100;

  useEffect(() => {
    // Trigger animation after mount
    const timer = setTimeout(() => {
      setIsAnimating(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex gap-3 items-center">
      <div className="flex-[2] text-sm font-medium text-slate-600">{label}</div>
      <div className="flex-1 h-8 rounded-md bg-slate-200 relative overflow-hidden">
        <div
          className={`h-full rounded-md ${colorMap[color].bar} transition-all duration-[2s] ease-out`}
          style={isAnimating ? { width: `${percentage}%` } : { width: '0%' }}
        />
        <div
          className={`absolute inset-0 h-full rounded-md bg-gradient-to-r from-transparent to-white/30 pointer-events-none`}
        />
      </div>
      <div className={`text-sm font-bold ${colorMap[color].text} min-w-[70px] text-right font-display`}>
        {value.toLocaleString()}
      </div>
    </div>
  );
};

export default function DashboardSection() {
  const [activeTab, setActiveTab] = useState('dashboard');

  const dashboardData = {
    stats: [
      { v: '247', l: 'Compliant Workers', c: 'emerald', icon: CheckCircleIcon },
      { v: '12', l: 'Expiring in 30 Days', c: 'amber', icon: ClockIcon },
      { v: '3', l: 'Expired — Blocked', c: 'red', icon: ExclamationTriangleIcon },
      { v: '98.8%', l: 'Compliance Rate', c: 'blue', icon: ChartBarIcon },
    ],
    workers: [
      { name: 'J. Martinez', screening: 'Valid', firstAid: '30 days', wwcc: 'Valid', status: 'Expiring', statusColor: 'amber', statusIcon: ClockIcon },
      { name: 'K. Nguyen', screening: 'Expired', firstAid: 'Valid', wwcc: 'Valid', status: 'Blocked', statusColor: 'red', statusIcon: ExclamationTriangleIcon },
      { name: 'L. Ahmed', screening: 'Valid', firstAid: 'Valid', wwcc: 'Valid', status: 'Compliant', statusColor: 'emerald', statusIcon: CheckCircleIcon },
    ],
    reports: [
      { title: 'Weekly Compliance Summary', date: '25 Feb 2026', compliance: '98.8%', workers: '247', incidents: '0', color: 'blue' },
      { title: 'Expiring Credentials Report', date: '25 Feb 2026', compliance: '87.3%', workers: '12', incidents: 'N/A', color: 'amber' },
      { title: 'Blocked Workers Report', date: '25 Feb 2026', compliance: 'Critical', workers: '3', incidents: 'N/A', color: 'red' },
      { title: 'SIRS Incident Summary', date: '25 Feb 2026', compliance: '100%', workers: 'N/A', incidents: '2', color: 'teal' },
    ],
  };

  const renderDashboardTab = () => (
    <>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
        {dashboardData.stats.map((s, idx) => (
          <div key={s.l} className={`${colorMap[s.c].card} border rounded-lg p-4 text-center transition-all duration-400 hover:scale-105 hover:shadow-lg`} style={{ animationDelay: `${idx * 100}ms` }}>
            <s.icon className={`w-6 h-6 ${colorMap[s.c].text} mx-auto mb-2`} />
            <div className={`text-2xl font-bold ${colorMap[s.c].text} font-display`}>
              {s.l.includes('Rate') ? <AnimatedCounter value={s.v} isPercentage={true} /> : <AnimatedCounter value={s.v} />}
            </div>
            <div className="text-xs text-slate-600 mt-1">{s.l}</div>
          </div>
        ))}
      </div>
      
      <div className="space-y-4">
        <div className="text-xs font-medium text-slate-500 uppercase tracking-wide mb-4">Credentials Overview</div>
        <AnimatedProgressBar value={247} total={262} color="emerald" label="Compliant Workers" />
        <AnimatedProgressBar value={12} total={262} color="amber" label="Expiring in 30 Days" />
        <AnimatedProgressBar value={3} total={262} color="red" label="Expired — Blocked" />
        <AnimatedProgressBar value={98.8} total={100} color="blue" label="Compliance Rate (%)" />
      </div>
    </>
  );

  const renderWorkersTab = () => (
    <>
      <div className="space-y-3 mb-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          <div className="bg-blue-50 border border-blue-100 rounded-lg p-4 text-center">
            <div className="text-2xl font-bold text-blue-600">247</div>
            <div className="text-xs text-slate-600 mt-1">Total Workers</div>
          </div>
          <div className="bg-emerald-50 border border-emerald-100 rounded-lg p-4 text-center">
            <div className="text-2xl font-bold text-emerald-600">240</div>
            <div className="text-xs text-slate-600 mt-1">Verified & Screened</div>
          </div>
          <div className="bg-amber-50 border border-amber-100 rounded-lg p-4 text-center">
            <div className="text-2xl font-bold text-amber-600">12</div>
            <div className="text-xs text-slate-600 mt-1">Action Required</div>
          </div>
          <div className="bg-red-50 border border-red-100 rounded-lg p-4 text-center">
            <div className="text-2xl font-bold text-red-600">3</div>
            <div className="text-xs text-slate-600 mt-1">Blocked/Expired</div>
          </div>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-slate-200">
              <th className="text-left text-xs font-semibold text-slate-600 uppercase tracking-wide py-2 px-3">Worker</th>
              <th className="text-left text-xs font-semibold text-slate-600 uppercase tracking-wide py-2 px-3">Screening</th>
              <th className="text-left text-xs font-semibold text-slate-600 uppercase tracking-wide py-2 px-3">First Aid</th>
              <th className="text-left text-xs font-semibold text-slate-600 uppercase tracking-wide py-2 px-3">WWCC</th>
              <th className="text-left text-xs font-semibold text-slate-600 uppercase tracking-wide py-2 px-3">Status</th>
            </tr>
          </thead>
          <tbody>
            {dashboardData.workers.map((w, idx) => (
              <tr key={w.name} className="border-b border-slate-100 hover:bg-slate-50 transition-colors duration-200">
                <td className="py-3 px-3 text-sm font-medium text-slate-900">{w.name}</td>
                <td className="py-3 px-3 text-sm">
                  <span className="inline-flex items-center gap-1.5">
                    <span className={`w-2 h-2 rounded-full ${w.screening === 'Valid' ? 'bg-emerald-500' : 'bg-red-500'}`} />
                    <span className="text-slate-600">{w.screening}</span>
                  </span>
                </td>
                <td className="py-3 px-3 text-sm">
                  <span className={`text-slate-600 ${w.firstAid === 'Valid' ? '' : 'font-semibold text-amber-600'}`}>{w.firstAid}</span>
                </td>
                <td className="py-3 px-3 text-sm">
                  <span className={`inline-flex items-center gap-1.5`}>
                    <span className={`w-2 h-2 rounded-full ${w.wwcc === 'Valid' ? 'bg-emerald-500' : 'bg-red-500'}`} />
                    <span className="text-slate-600">{w.wwcc}</span>
                  </span>
                </td>
                <td className="py-3 px-3 text-sm font-semibold">
                  <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-bold ${
                    w.statusColor === 'emerald' ? 'bg-emerald-100 text-emerald-700' :
                    w.statusColor === 'amber' ? 'bg-amber-100 text-amber-700' :
                    'bg-red-100 text-red-700'
                  }`}>
                    <w.statusIcon className="w-3.5 h-3.5" />
                    {w.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );

  const renderReportsTab = () => (
    <>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
        <div className="bg-blue-50 border border-blue-100 rounded-lg p-4 text-center">
          <div className="text-2xl font-bold text-blue-600">98.8%</div>
          <div className="text-xs text-slate-600 mt-1">Overall Compliance</div>
        </div>
        <div className="bg-teal-50 border border-teal-100 rounded-lg p-4 text-center">
          <div className="text-2xl font-bold text-teal-600">2</div>
          <div className="text-xs text-slate-600 mt-1">Recent Incidents</div>
        </div>
        <div className="bg-emerald-50 border border-emerald-100 rounded-lg p-4 text-center">
          <div className="text-2xl font-bold text-emerald-600">0</div>
          <div className="text-xs text-slate-600 mt-1">24hr Late Reports</div>
        </div>
        <div className="bg-amber-50 border border-amber-100 rounded-lg p-4 text-center">
          <div className="text-2xl font-bold text-amber-600">12</div>
          <div className="text-xs text-slate-600 mt-1">Expiring Soon</div>
        </div>
      </div>

      <div className="space-y-3">
        {dashboardData.reports.map((r, idx) => (
          <div key={r.title} className={`${colorMap[r.color].reportCard} border rounded-lg p-4 hover:shadow-md transition-all duration-300 hover:scale-[1.02]`}>
            <div className="flex items-center justify-between">
              <div className="flex-1">
                <div className="font-semibold text-slate-900 mb-1">{r.title}</div>
                <div className="text-xs text-slate-500">{r.date}</div>
              </div>
              <div className="flex gap-4 ml-4">
                {r.compliance !== 'N/A' && <div className="text-right">
                  <div className={`font-bold text-sm ${colorMap[r.color].text}`}>{r.compliance}</div>
                  <div className="text-xs text-slate-500">Compliance</div>
                </div>}
                {r.workers !== 'N/A' && <div className="text-right">
                  <div className="font-bold text-sm text-slate-700">{r.workers}</div>
                  <div className="text-xs text-slate-500">Workers</div>
                </div>}
                {r.incidents !== 'N/A' && <div className="text-right">
                  <div className={`font-bold text-sm ${r.incidents === '0' ? 'text-emerald-600' : 'text-teal-600'}`}>{r.incidents}</div>
                  <div className="text-xs text-slate-500">Incidents</div>
                </div>}
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );

  return (
    <div className="mt-12 bg-white/90 backdrop-blur-sm border border-slate-200 rounded-2xl p-6 shadow-2xl shadow-slate-200/50 animate-scale-in" style={{ animationDelay: '500ms' }}>
      {/* Header */}
      <div className="flex items-center justify-between pb-4 border-b border-slate-200 mb-6">
        <div className="flex gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#28C840]" />
        </div>
        <div className="flex gap-2">
          {[
            { id: 'dashboard', label: 'Dashboard', icon: ChartBarIcon },
            { id: 'workers', label: 'Workers', icon: UserGroupIcon },
            { id: 'reports', label: 'Reports', icon: DocumentTextIcon }
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-3 py-1 text-xs rounded-md font-medium transition-all duration-300 flex items-center gap-1.5 ${
                activeTab === tab.id
                  ? 'bg-oz-blue text-white shadow-md'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              <tab.icon className="w-3.5 h-3.5" />
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Tab Content */}
      <div className="animate-fade-in duration-300">
        {activeTab === 'dashboard' && renderDashboardTab()}
        {activeTab === 'workers' && renderWorkersTab()}
        {activeTab === 'reports' && renderReportsTab()}
      </div>
    </div>
  );
}
