import React, { useState } from 'react';
import { Shield, Clock, CheckCircle, AlertTriangle, Globe, FileText, TrendingUp } from 'lucide-react';

// Signature Sovereign Solutions LLC — Political Risk Insurance Dashboard
// Programme: AIA-SMCC (Afro-Indian Strategic Minerals & Capital Corridor)
// Entity: Signature Sovereign Solutions LLC
// Leadership: Marshall W. Morrison, Co-Founder & Chief Operating Officer
// Data as of Q1 2026 (scenario)

interface PRIApplication {
  id: string;
  provider: string;
  project: string;
  node: string;
  coverageType: string[];
  coverageAmount: number;
  currency: string;
  status: 'drafting' | 'submitted' | 'under_review' | 'approved' | 'declined';
  applicationDate?: string;
  targetDate: string;
  premiumEstimate?: string;
  notes: string;
}

interface ApplicationTimeline {
  phase: string;
  period: string;
  activities: string[];
  status: 'complete' | 'active' | 'upcoming';
}

const applications: PRIApplication[] = [
  {
    id: 'PRI-001',
    provider: 'U.S. International Development Finance Corporation (DFC)',
    project: 'BIBC — Bihar International Bullion Centre',
    node: 'Bihar, India',
    coverageType: ['Expropriation', 'Political Violence', 'Currency Inconvertibility'],
    coverageAmount: 250000000,
    currency: 'USD',
    status: 'drafting',
    targetDate: 'Q2 2026',
    premiumEstimate: '1.5–2.0% p.a.',
    notes: 'DFC PRI concept note in preparation. Aligned with PGII framework and Bihar VGF approval (EV-0088). Maximum coverage $250M per project.'
  },
  {
    id: 'PRI-002',
    provider: 'Multilateral Investment Guarantee Agency (MIGA)',
    project: 'SSTLC — Berbera Economic Zone Operations',
    node: 'Somaliland (BEZ)',
    coverageType: ['Expropriation', 'War & Civil Disturbance', 'Breach of Contract'],
    coverageAmount: 100000000,
    currency: 'USD',
    status: 'drafting',
    targetDate: 'Q3 2026',
    premiumEstimate: '2.0–3.5% p.a. (conflict-adjacent jurisdiction premium)',
    notes: 'MIGA coverage required for Somaliland operations given unrecognized territory status. FATF greylisting monitoring active. Breach of contract coverage critical for BEZ concession agreement.'
  },
  {
    id: 'PRI-003',
    provider: 'Lloyds of London — Political Risk Syndicate',
    project: 'Dubai Transshipment Hub — JAFZA/DMCC',
    node: 'UAE',
    coverageType: ['Trade Disruption', 'License Revocation', 'Sanctions Risk'],
    coverageAmount: 50000000,
    currency: 'USD',
    status: 'drafting',
    targetDate: 'Q4 2026',
    premiumEstimate: '0.75–1.25% p.a.',
    notes: 'UAE operations carry lower political risk. Lloyd\'s syndicate coverage appropriate for trade disruption and license revocation scenarios. OFAC sanctions compliance pre-clearance in progress.'
  },
  {
    id: 'PRI-004',
    provider: 'Export-Import Bank of the United States (EXIM)',
    project: 'Supply Chain Finance — Mineral Export Corridor',
    node: 'Multi-node (SSTLC → Dubai → BIBC)',
    coverageType: ['Commercial Risk', 'Political Risk', 'Non-payment'],
    coverageAmount: 75000000,
    currency: 'USD',
    status: 'drafting',
    targetDate: 'Q2 2026',
    premiumEstimate: 'To be quoted',
    notes: 'EXIM supply-chain finance eligibility assessment requested. Coverage for U.S.-origin equipment and services in corridor infrastructure.'
  }
];

const timeline: ApplicationTimeline[] = [
  {
    phase: 'Phase 0 — Pre-Application Preparation',
    period: 'Q1 2026',
    activities: [
      'DFC concept note drafting',
      'MIGA project information form (PIF) preparation',
      'Legal entity structure finalization',
      'OFAC/sanctions pre-clearance consultation',
      'Master Institutional Document v12.0 completion'
    ],
    status: 'active'
  },
  {
    phase: 'Phase 1 — Initial Submissions',
    period: 'Q2 2026',
    activities: [
      'DFC PRI formal application submission',
      'EXIM supply-chain finance application',
      'Bihar BIPPP-2025 PPP agreement execution',
      'DFC VGF tranche documentation'
    ],
    status: 'upcoming'
  },
  {
    phase: 'Phase 2 — MIGA & Lloyds Submissions',
    period: 'Q3 2026',
    activities: [
      'MIGA formal application — SSTLC',
      'Somaliland EoI acceptance confirmation',
      'BEZ concession agreement draft',
      'IFSCA GIFT City sandbox application'
    ],
    status: 'upcoming'
  },
  {
    phase: 'Phase 3 — Coverage Activation',
    period: 'Q4 2026',
    activities: [
      'Lloyd\'s syndicate binding',
      'DFC coverage activation',
      'DASP v2.0 go-live',
      'First mineral shipment pilot'
    ],
    status: 'upcoming'
  }
];

const statusConfig = {
  drafting: { icon: FileText, color: 'text-gray-600', bg: 'bg-gray-100', label: 'Drafting' },
  submitted: { icon: Clock, color: 'text-blue-600', bg: 'bg-blue-50', label: 'Submitted' },
  under_review: { icon: AlertTriangle, color: 'text-yellow-600', bg: 'bg-yellow-50', label: 'Under Review' },
  approved: { icon: CheckCircle, color: 'text-green-600', bg: 'bg-green-50', label: 'Approved' },
  declined: { icon: AlertTriangle, color: 'text-red-600', bg: 'bg-red-50', label: 'Declined' }
};

export default function PoliticalRiskInsuranceDashboard() {
  const [selectedApp, setSelectedApp] = useState<PRIApplication | null>(null);

  const totalCoverage = applications.reduce((s, a) => s + a.coverageAmount, 0);

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Political Risk Insurance Manager</h1>
        <p className="text-sm text-gray-500 mt-1">
          Signature Sovereign Solutions LLC · AIA-SMCC Programme · Q1 2026 (scenario)
        </p>
      </div>

      {/* Summary */}
      <div className="grid grid-cols-4 gap-4 mb-6">
        <div className="bg-white rounded-lg shadow-sm p-4">
          <p className="text-xs text-gray-500 uppercase tracking-wide">Total Applications</p>
          <p className="text-3xl font-bold text-gray-900 mt-1">{applications.length}</p>
        </div>
        <div className="bg-white rounded-lg shadow-sm p-4">
          <p className="text-xs text-gray-500 uppercase tracking-wide">Total Coverage Sought</p>
          <p className="text-3xl font-bold text-blue-600 mt-1">${(totalCoverage / 1000000).toFixed(0)}M</p>
        </div>
        <div className="bg-white rounded-lg shadow-sm p-4">
          <p className="text-xs text-gray-500 uppercase tracking-wide">DFC Applications</p>
          <p className="text-3xl font-bold text-green-600 mt-1">1</p>
        </div>
        <div className="bg-white rounded-lg shadow-sm p-4">
          <p className="text-xs text-gray-500 uppercase tracking-wide">In Drafting</p>
          <p className="text-3xl font-bold text-gray-600 mt-1">{applications.filter(a => a.status === 'drafting').length}</p>
        </div>
      </div>

      {/* Applications */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        {applications.map(app => {
          const sc = statusConfig[app.status];
          const StatusIcon = sc.icon;
          return (
            <div
              key={app.id}
              className="bg-white rounded-lg shadow-sm p-4 cursor-pointer hover:shadow-md transition-shadow"
              onClick={() => setSelectedApp(app)}
            >
              <div className="flex justify-between items-start mb-3">
                <div>
                  <p className="text-xs font-mono text-gray-400">{app.id}</p>
                  <p className="font-semibold text-gray-900 text-sm mt-0.5">{app.provider}</p>
                </div>
                <span className={`flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-medium ${sc.bg} ${sc.color}`}>
                  <StatusIcon className="w-3 h-3" />
                  {sc.label}
                </span>
              </div>
              <p className="text-sm text-gray-700 mb-2">{app.project}</p>
              <div className="flex justify-between text-xs text-gray-500">
                <span className="flex items-center gap-1"><Globe className="w-3 h-3" />{app.node}</span>
                <span>Target: {app.targetDate}</span>
              </div>
              <div className="mt-2 pt-2 border-t border-gray-100 flex justify-between text-xs">
                <span className="text-gray-500">Coverage: <span className="font-medium text-gray-800">${(app.coverageAmount / 1000000).toFixed(0)}M</span></span>
                {app.premiumEstimate && <span className="text-gray-500">Premium: <span className="font-medium text-gray-800">{app.premiumEstimate}</span></span>}
              </div>
            </div>
          );
        })}
      </div>

      {/* Detail Modal */}
      {selectedApp && (
        <div className="bg-white rounded-lg shadow-sm p-5 mb-6">
          <div className="flex justify-between items-start mb-4">
            <h2 className="text-lg font-semibold text-gray-900">{selectedApp.provider}</h2>
            <button onClick={() => setSelectedApp(null)} className="text-gray-400 hover:text-gray-600">✕</button>
          </div>
          <div className="grid grid-cols-2 gap-4 text-sm mb-4">
            <div>
              <p className="text-xs text-gray-400 uppercase mb-1">Coverage Types</p>
              <div className="space-y-1">
                {selectedApp.coverageType.map(t => (
                  <div key={t} className="flex items-center gap-2">
                    <Shield className="w-3 h-3 text-blue-500" />
                    <span>{t}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <p className="text-xs text-gray-400 uppercase mb-1">Notes</p>
              <p className="text-gray-700">{selectedApp.notes}</p>
            </div>
          </div>
        </div>
      )}

      {/* Timeline */}
      <div className="bg-white rounded-lg shadow-sm p-5">
        <h2 className="text-sm font-semibold text-gray-700 uppercase tracking-wide mb-4">Application Timeline</h2>
        <div className="space-y-4">
          {timeline.map((phase, i) => (
            <div key={i} className="flex gap-4">
              <div className="flex flex-col items-center">
                <div className={`w-3 h-3 rounded-full mt-1 ${
                  phase.status === 'complete' ? 'bg-green-500' :
                  phase.status === 'active' ? 'bg-blue-500' :
                  'bg-gray-300'
                }`} />
                {i < timeline.length - 1 && <div className="w-0.5 bg-gray-200 flex-1 mt-1" />}
              </div>
              <div className="pb-4">
                <div className="flex items-center gap-3 mb-1">
                  <p className="text-sm font-medium text-gray-900">{phase.phase}</p>
                  <span className={`px-2 py-0.5 rounded text-xs font-medium ${
                    phase.status === 'complete' ? 'bg-green-100 text-green-700' :
                    phase.status === 'active' ? 'bg-blue-100 text-blue-700' :
                    'bg-gray-100 text-gray-500'
                  }`}>{phase.period}</span>
                </div>
                <ul className="text-xs text-gray-500 space-y-0.5">
                  {phase.activities.map(a => <li key={a}>• {a}</li>)}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <p className="text-xs text-gray-400 mt-6 text-center">
        SSS Political Risk Insurance Manager · Signature Sovereign Solutions LLC · Data as of Q1 2026 (scenario)
      </p>
    </div>
  );
}
