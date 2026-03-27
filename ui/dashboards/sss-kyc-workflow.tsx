import React, { useState } from 'react';

// SSS KYC/AML Investor Onboarding Workflow Dashboard
// Signature Sovereign Solutions LLC | AI-SMCC / SafeTrade Program
// Q1 2026 | Reg D 506(c) Compliance

interface Investor {
  id: string;
  name: string;
  type: string;
  jurisdiction: string;
  aum: string;
  kycStatus: 'pending' | 'in_review' | 'approved' | 'rejected';
  amlStatus: 'pending' | 'cleared' | 'flagged';
  accreditedStatus: 'pending' | 'verified' | 'failed';
  submittedDate: string;
  completedDate?: string;
  notes?: string;
}

const investors: Investor[] = [
  {
    id: 'INV-2026-001',
    name: 'Meridian Capital Partners LP',
    type: 'Family Office',
    jurisdiction: 'USA (Delaware)',
    aum: '$450M',
    kycStatus: 'approved',
    amlStatus: 'cleared',
    accreditedStatus: 'verified',
    submittedDate: '2026-01-15',
    completedDate: '2026-01-28',
  },
  {
    id: 'INV-2026-002',
    name: 'Gulf Strategic Investment Fund',
    type: 'Sovereign Family Office',
    jurisdiction: 'UAE (DIFC)',
    aum: '$2.1B',
    kycStatus: 'in_review',
    amlStatus: 'cleared',
    accreditedStatus: 'verified',
    submittedDate: '2026-02-01',
  },
  {
    id: 'INV-2026-003',
    name: 'East Africa Trade Finance LLC',
    type: 'Institutional Investor',
    jurisdiction: 'Kenya (Nairobi)',
    aum: '$85M',
    kycStatus: 'in_review',
    amlStatus: 'pending',
    accreditedStatus: 'pending',
    submittedDate: '2026-02-14',
  },
  {
    id: 'INV-2026-004',
    name: 'Bihar Industrial Investment Trust',
    type: 'Strategic Partner',
    jurisdiction: 'India (Bihar)',
    aum: '$120M',
    kycStatus: 'approved',
    amlStatus: 'cleared',
    accreditedStatus: 'verified',
    submittedDate: '2026-01-20',
    completedDate: '2026-02-05',
  },
  {
    id: 'INV-2026-005',
    name: 'Somaliland Development Partners',
    type: 'Development Finance',
    jurisdiction: 'UK (London)',
    aum: '$310M',
    kycStatus: 'pending',
    amlStatus: 'pending',
    accreditedStatus: 'pending',
    submittedDate: '2026-03-01',
  },
];

const statusColor = (status: string): string => {
  switch (status) {
    case 'approved':
    case 'cleared':
    case 'verified':
      return 'bg-emerald-900 text-emerald-300';
    case 'in_review':
      return 'bg-amber-900 text-amber-300';
    case 'pending':
      return 'bg-slate-700 text-slate-300';
    case 'rejected':
    case 'flagged':
    case 'failed':
      return 'bg-red-900 text-red-300';
    default:
      return 'bg-slate-700 text-slate-300';
  }
};

const statusLabel = (status: string): string =>
  status.replace(/_/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase());

export default function SSSKYCWorkflow() {
  const [selected, setSelected] = useState<string | null>(null);
  const [filter, setFilter] = useState<string>('all');

  const filtered = filter === 'all'
    ? investors
    : investors.filter((inv) => inv.kycStatus === filter);

  const counts = {
    approved: investors.filter((i) => i.kycStatus === 'approved').length,
    in_review: investors.filter((i) => i.kycStatus === 'in_review').length,
    pending: investors.filter((i) => i.kycStatus === 'pending').length,
    rejected: investors.filter((i) => i.kycStatus === 'rejected').length,
  };

  return (
    <div className="min-h-screen bg-slate-900 text-white p-6">
      {/* Header */}
      <div className="mb-8">
        <div className="text-amber-400 text-xs tracking-widest uppercase mb-2">
          Signature Sovereign Solutions LLC · SafeTrade Program
        </div>
        <h1 className="text-2xl font-light text-white mb-1">
          KYC / AML Investor Onboarding
        </h1>
        <p className="text-slate-400 text-sm">
          Reg D 506(c) · Accredited Investor Verification Pipeline · Q1 2026
        </p>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-4 gap-4 mb-8">
        {[
          { label: 'Total Investors', value: investors.length, color: 'border-amber-500' },
          { label: 'KYC Approved', value: counts.approved, color: 'border-emerald-500' },
          { label: 'In Review', value: counts.in_review, color: 'border-amber-500' },
          { label: 'Pending', value: counts.pending, color: 'border-slate-500' },
        ].map((card) => (
          <div
            key={card.label}
            className={`bg-slate-800 border-t-2 ${card.color} p-4 rounded`}
          >
            <div className="text-xs text-amber-400 tracking-wider uppercase mb-2">
              {card.label}
            </div>
            <div className="text-3xl font-bold">{card.value}</div>
          </div>
        ))}
      </div>

      {/* Filter */}
      <div className="flex gap-2 mb-6">
        {['all', 'approved', 'in_review', 'pending', 'rejected'].map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`px-3 py-1 text-xs rounded uppercase tracking-wider ${
              filter === f
                ? 'bg-amber-500 text-slate-900 font-bold'
                : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
            }`}
          >
            {f.replace(/_/g, ' ')}
          </button>
        ))}
      </div>

      {/* Investor Table */}
      <div className="bg-slate-800 rounded overflow-hidden mb-6">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-slate-700">
              <th className="text-left px-4 py-3 text-amber-400 text-xs tracking-wider uppercase">ID</th>
              <th className="text-left px-4 py-3 text-amber-400 text-xs tracking-wider uppercase">Investor</th>
              <th className="text-left px-4 py-3 text-amber-400 text-xs tracking-wider uppercase">Type</th>
              <th className="text-left px-4 py-3 text-amber-400 text-xs tracking-wider uppercase">Jurisdiction</th>
              <th className="text-left px-4 py-3 text-amber-400 text-xs tracking-wider uppercase">AUM</th>
              <th className="text-left px-4 py-3 text-amber-400 text-xs tracking-wider uppercase">KYC</th>
              <th className="text-left px-4 py-3 text-amber-400 text-xs tracking-wider uppercase">AML</th>
              <th className="text-left px-4 py-3 text-amber-400 text-xs tracking-wider uppercase">Accredited</th>
              <th className="text-left px-4 py-3 text-amber-400 text-xs tracking-wider uppercase">Submitted</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((inv) => (
              <tr
                key={inv.id}
                onClick={() => setSelected(selected === inv.id ? null : inv.id)}
                className="border-t border-slate-700 hover:bg-slate-750 cursor-pointer"
              >
                <td className="px-4 py-3 text-amber-400 font-mono text-xs">{inv.id}</td>
                <td className="px-4 py-3 font-medium">{inv.name}</td>
                <td className="px-4 py-3 text-slate-400 text-xs">{inv.type}</td>
                <td className="px-4 py-3 text-slate-400 text-xs">{inv.jurisdiction}</td>
                <td className="px-4 py-3 text-slate-300">{inv.aum}</td>
                <td className="px-4 py-3">
                  <span className={`text-xs px-2 py-0.5 rounded ${statusColor(inv.kycStatus)}`}>
                    {statusLabel(inv.kycStatus)}
                  </span>
                </td>
                <td className="px-4 py-3">
                  <span className={`text-xs px-2 py-0.5 rounded ${statusColor(inv.amlStatus)}`}>
                    {statusLabel(inv.amlStatus)}
                  </span>
                </td>
                <td className="px-4 py-3">
                  <span className={`text-xs px-2 py-0.5 rounded ${statusColor(inv.accreditedStatus)}`}>
                    {statusLabel(inv.accreditedStatus)}
                  </span>
                </td>
                <td className="px-4 py-3 text-slate-400 text-xs">{inv.submittedDate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Detail Panel */}
      {selected && (() => {
        const inv = investors.find((i) => i.id === selected);
        if (!inv) return null;
        return (
          <div className="bg-slate-800 border border-amber-500/30 rounded p-6">
            <div className="flex justify-between items-start mb-4">
              <div>
                <div className="text-amber-400 text-xs tracking-wider uppercase mb-1">Investor Detail</div>
                <h2 className="text-xl font-light">{inv.name}</h2>
                <p className="text-slate-400 text-sm">{inv.id} · {inv.type} · {inv.jurisdiction}</p>
              </div>
              <button
                onClick={() => setSelected(null)}
                className="text-slate-400 hover:text-white text-sm"
              >
                ✕ Close
              </button>
            </div>
            <div className="grid grid-cols-3 gap-4 text-sm">
              <div>
                <div className="text-slate-400 text-xs uppercase tracking-wider mb-1">AUM</div>
                <div>{inv.aum}</div>
              </div>
              <div>
                <div className="text-slate-400 text-xs uppercase tracking-wider mb-1">Submitted</div>
                <div>{inv.submittedDate}</div>
              </div>
              {inv.completedDate && (
                <div>
                  <div className="text-slate-400 text-xs uppercase tracking-wider mb-1">Completed</div>
                  <div>{inv.completedDate}</div>
                </div>
              )}
            </div>
          </div>
        );
      })()}

      {/* Footer */}
      <div className="mt-8 text-slate-600 text-xs text-center">
        Signature Sovereign Solutions LLC · AI-SMCC / SafeTrade Program · Q1 2026 · Prototype Dashboard
      </div>
    </div>
  );
}
