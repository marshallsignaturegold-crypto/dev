import React, { useState } from 'react';

// SSS Political Risk Insurance Tracker
// Signature Sovereign Solutions LLC | AI-SMCC / SafeTrade Program
// Q1 2026 | DFC / MIGA Coverage Dashboard

interface CoverageApplication {
  id: string;
  type: 'DFC' | 'MIGA' | 'OPIC-Legacy' | 'Private';
  coverageType: string;
  corridor: string;
  requestedAmount: number;
  approvedAmount?: number;
  status: 'drafting' | 'submitted' | 'under_review' | 'approved' | 'denied';
  submittedDate?: string;
  targetDate: string;
  risks: string[];
  notes?: string;
}

const applications: CoverageApplication[] = [
  {
    id: 'PRI-2026-001',
    type: 'DFC',
    coverageType: 'Political Risk Insurance — Equity Investment',
    corridor: 'Somaliland Corridor Node',
    requestedAmount: 15_000_000,
    status: 'drafting',
    targetDate: '2026-Q2',
    risks: [
      'Expropriation / nationalization',
      'Political violence / civil strife',
      'Currency inconvertibility',
      'Regulatory disruption',
    ],
    notes: 'Letter of Intent being drafted. Requires executed MOU with Bank of Somaliland prior to LOI submission.',
  },
  {
    id: 'PRI-2026-002',
    type: 'DFC',
    coverageType: 'Debt Financing Support — Bihar Refinery',
    corridor: 'India Corridor Node (Bihar)',
    requestedAmount: 25_000_000,
    status: 'drafting',
    targetDate: '2026-Q3',
    risks: [
      'Policy reversal (BIPPP-2025)',
      'Regulatory risk',
      'Force majeure',
    ],
    notes: 'DFC engagement requires BIPPP-2025 application approval first.',
  },
  {
    id: 'PRI-2026-003',
    type: 'MIGA',
    coverageType: 'Non-Commercial Risk Guarantee',
    corridor: 'Full AI-SMCC Corridor',
    requestedAmount: 40_000_000,
    status: 'drafting',
    targetDate: '2026-Q3',
    risks: [
      'Breach of contract by host governments',
      'Transfer restriction',
      'Expropriation',
      'War and civil disturbance',
    ],
    notes: 'MIGA application requires DFC LOI first to demonstrate U.S. government engagement.',
  },
  {
    id: 'PRI-2026-004',
    type: 'Private',
    coverageType: 'Trade Credit Insurance',
    corridor: 'UAE Transit Node',
    requestedAmount: 5_000_000,
    status: 'drafting',
    targetDate: '2026-Q2',
    risks: ['Counterparty default', 'Shipment loss'],
    notes: 'Atradius or Lloyd\'s of London engagement planned.',
  },
];

const statusConfig: Record<string, { color: string; label: string }> = {
  drafting: { color: 'bg-slate-700 text-slate-300', label: 'Drafting' },
  submitted: { color: 'bg-blue-900 text-blue-300', label: 'Submitted' },
  under_review: { color: 'bg-amber-900 text-amber-300', label: 'Under Review' },
  approved: { color: 'bg-emerald-900 text-emerald-300', label: 'Approved' },
  denied: { color: 'bg-red-900 text-red-300', label: 'Denied' },
};

const typeColor: Record<string, string> = {
  DFC: 'bg-blue-900 text-blue-300',
  MIGA: 'bg-purple-900 text-purple-300',
  'OPIC-Legacy': 'bg-slate-700 text-slate-300',
  Private: 'bg-amber-900 text-amber-300',
};

const fmt = (n: number): string => `$${(n / 1_000_000).toFixed(1)}M`;

export default function SSSPoliticalRiskInsurance() {
  const [selected, setSelected] = useState<string | null>(null);

  const totalRequested = applications.reduce((sum, a) => sum + a.requestedAmount, 0);
  const selectedApp = applications.find((a) => a.id === selected);

  return (
    <div className="min-h-screen bg-slate-900 text-white p-6">
      {/* Header */}
      <div className="mb-8">
        <div className="text-amber-400 text-xs tracking-widest uppercase mb-2">
          Signature Sovereign Solutions LLC · SafeTrade Program
        </div>
        <h1 className="text-2xl font-light text-white mb-1">
          Political Risk Insurance Tracker
        </h1>
        <p className="text-slate-400 text-sm">
          DFC / MIGA Coverage Applications · AI-SMCC Corridor · Q1 2026
        </p>
      </div>

      {/* Summary */}
      <div className="grid grid-cols-4 gap-4 mb-8">
        <div className="bg-slate-800 border-t-2 border-amber-500 p-4 rounded">
          <div className="text-xs text-amber-400 tracking-wider uppercase mb-2">Total Coverage Requested</div>
          <div className="text-3xl font-bold">{fmt(totalRequested)}</div>
        </div>
        <div className="bg-slate-800 border-t-2 border-blue-500 p-4 rounded">
          <div className="text-xs text-amber-400 tracking-wider uppercase mb-2">DFC Applications</div>
          <div className="text-3xl font-bold">
            {applications.filter((a) => a.type === 'DFC').length}
          </div>
        </div>
        <div className="bg-slate-800 border-t-2 border-purple-500 p-4 rounded">
          <div className="text-xs text-amber-400 tracking-wider uppercase mb-2">MIGA Applications</div>
          <div className="text-3xl font-bold">
            {applications.filter((a) => a.type === 'MIGA').length}
          </div>
        </div>
        <div className="bg-slate-800 border-t-2 border-slate-500 p-4 rounded">
          <div className="text-xs text-amber-400 tracking-wider uppercase mb-2">Applications Approved</div>
          <div className="text-3xl font-bold">
            {applications.filter((a) => a.status === 'approved').length}
          </div>
        </div>
      </div>

      {/* DFC Note */}
      <div className="bg-amber-950 border border-amber-700 rounded p-4 mb-6 text-xs text-amber-200">
        <strong>DFC Coverage Note:</strong> The DFC&apos;s current authorized exposure cap is <strong>$60 billion</strong> under the BUILD Act of 2018. References to a $205B ceiling in programme scenario models reflect the proposed DFC Modernization Act — <strong>pending Congressional action and not yet enacted as of Q1 2026</strong>.
      </div>

      {/* Application Cards */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        {applications.map((app) => (
          <div
            key={app.id}
            onClick={() => setSelected(selected === app.id ? null : app.id)}
            className={`bg-slate-800 p-4 rounded cursor-pointer border ${
              selected === app.id ? 'border-amber-500' : 'border-slate-700 hover:border-slate-500'
            }`}
          >
            <div className="flex justify-between items-start mb-3">
              <div>
                <span className={`text-xs px-2 py-0.5 rounded mr-2 ${typeColor[app.type]}`}>
                  {app.type}
                </span>
                <span className="text-amber-400 font-mono text-xs">{app.id}</span>
              </div>
              <span className={`text-xs px-2 py-0.5 rounded ${statusConfig[app.status].color}`}>
                {statusConfig[app.status].label}
              </span>
            </div>
            <div className="font-medium mb-1">{app.coverageType}</div>
            <div className="text-slate-400 text-xs mb-2">{app.corridor}</div>
            <div className="text-2xl font-bold">{fmt(app.requestedAmount)}</div>
            <div className="text-slate-500 text-xs mt-1">Target: {app.targetDate}</div>
          </div>
        ))}
      </div>

      {/* Detail Panel */}
      {selectedApp && (
        <div className="bg-slate-800 border border-amber-500/30 rounded p-6">
          <div className="flex justify-between items-start mb-4">
            <div>
              <div className="text-amber-400 text-xs tracking-wider uppercase mb-1">Application Detail</div>
              <h2 className="text-xl font-light">{selectedApp.coverageType}</h2>
              <p className="text-slate-400 text-sm">{selectedApp.id} · {selectedApp.type} · {selectedApp.corridor}</p>
            </div>
            <button onClick={() => setSelected(null)} className="text-slate-400 hover:text-white text-sm">
              ✕ Close
            </button>
          </div>
          <div className="mb-4">
            <div className="text-slate-400 text-xs uppercase tracking-wider mb-2">Covered Risks</div>
            <ul className="space-y-1">
              {selectedApp.risks.map((risk) => (
                <li key={risk} className="text-sm text-slate-300 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500 inline-block flex-shrink-0" />
                  {risk}
                </li>
              ))}
            </ul>
          </div>
          {selectedApp.notes && (
            <div>
              <div className="text-slate-400 text-xs uppercase tracking-wider mb-2">Notes</div>
              <div className="text-slate-300 text-sm">{selectedApp.notes}</div>
            </div>
          )}
        </div>
      )}

      {/* Footer */}
      <div className="mt-8 text-slate-600 text-xs text-center">
        Signature Sovereign Solutions LLC · AI-SMCC / SafeTrade Program · Q1 2026 · Prototype Dashboard
      </div>
    </div>
  );
}
