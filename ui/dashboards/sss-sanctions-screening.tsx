import React, { useState } from 'react';

// SSS Sanctions Screening Dashboard
// Signature Sovereign Solutions LLC | AI-SMCC / SafeTrade Program
// Q1 2026 | OFAC / SDN Compliance

interface ScreeningRecord {
  id: string;
  entityName: string;
  entityType: string;
  jurisdiction: string;
  screenedDate: string;
  screenedBy: string;
  ofacResult: 'clear' | 'match' | 'potential_match' | 'pending';
  sdnResult: 'clear' | 'match' | 'potential_match' | 'pending';
  euResult: 'clear' | 'match' | 'potential_match' | 'pending';
  unResult: 'clear' | 'match' | 'potential_match' | 'pending';
  overallStatus: 'cleared' | 'flagged' | 'under_review' | 'pending';
  nextReviewDate: string;
  notes?: string;
}

const records: ScreeningRecord[] = [
  {
    id: 'SCR-2026-001',
    entityName: 'Meridian Capital Partners LP',
    entityType: 'Investment Fund',
    jurisdiction: 'USA (Delaware)',
    screenedDate: '2026-01-15',
    screenedBy: 'Compliance Officer',
    ofacResult: 'clear',
    sdnResult: 'clear',
    euResult: 'clear',
    unResult: 'clear',
    overallStatus: 'cleared',
    nextReviewDate: '2026-07-15',
  },
  {
    id: 'SCR-2026-002',
    entityName: 'Gulf Strategic Investment Fund',
    entityType: 'Sovereign Family Office',
    jurisdiction: 'UAE (DIFC)',
    screenedDate: '2026-02-01',
    screenedBy: 'Compliance Officer',
    ofacResult: 'clear',
    sdnResult: 'clear',
    euResult: 'clear',
    unResult: 'clear',
    overallStatus: 'cleared',
    nextReviewDate: '2026-08-01',
  },
  {
    id: 'SCR-2026-003',
    entityName: 'East Africa Trade Finance LLC',
    entityType: 'Institutional Investor',
    jurisdiction: 'Kenya (Nairobi)',
    screenedDate: '2026-02-14',
    screenedBy: 'Compliance Officer',
    ofacResult: 'clear',
    sdnResult: 'pending',
    euResult: 'clear',
    unResult: 'pending',
    overallStatus: 'under_review',
    nextReviewDate: '2026-03-31',
    notes: 'Additional due diligence requested for East Africa operations. Awaiting enhanced KYC documentation.',
  },
  {
    id: 'SCR-2026-004',
    entityName: 'Bihar Industrial Investment Trust',
    entityType: 'Strategic Partner',
    jurisdiction: 'India (Bihar)',
    screenedDate: '2026-01-20',
    screenedBy: 'Compliance Officer',
    ofacResult: 'clear',
    sdnResult: 'clear',
    euResult: 'clear',
    unResult: 'clear',
    overallStatus: 'cleared',
    nextReviewDate: '2026-07-20',
  },
  {
    id: 'SCR-2026-005',
    entityName: 'MMTC-PAMP India Pvt Ltd',
    entityType: 'Strategic Partner — Refinery',
    jurisdiction: 'India (New Delhi)',
    screenedDate: '2026-03-01',
    screenedBy: 'Compliance Officer',
    ofacResult: 'clear',
    sdnResult: 'clear',
    euResult: 'clear',
    unResult: 'clear',
    overallStatus: 'cleared',
    nextReviewDate: '2026-09-01',
  },
  {
    id: 'SCR-2026-006',
    entityName: 'Somaliland Development Partners',
    entityType: 'Development Finance',
    jurisdiction: 'UK (London)',
    screenedDate: '2026-03-05',
    screenedBy: 'Compliance Officer',
    ofacResult: 'pending',
    sdnResult: 'pending',
    euResult: 'pending',
    unResult: 'pending',
    overallStatus: 'pending',
    nextReviewDate: '2026-03-31',
  },
];

const resultColor = (result: string): string => {
  switch (result) {
    case 'clear': return 'bg-emerald-900 text-emerald-300';
    case 'match': return 'bg-red-900 text-red-300';
    case 'potential_match': return 'bg-orange-900 text-orange-300';
    case 'pending': return 'bg-slate-700 text-slate-300';
    default: return 'bg-slate-700 text-slate-300';
  }
};

const statusColor = (status: string): string => {
  switch (status) {
    case 'cleared': return 'bg-emerald-900 text-emerald-300';
    case 'flagged': return 'bg-red-900 text-red-300';
    case 'under_review': return 'bg-amber-900 text-amber-300';
    case 'pending': return 'bg-slate-700 text-slate-300';
    default: return 'bg-slate-700 text-slate-300';
  }
};

const labelify = (s: string): string =>
  s.replace(/_/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase());

export default function SSSSanctionsScreening() {
  const [selected, setSelected] = useState<string | null>(null);
  const [filter, setFilter] = useState<string>('all');

  const filtered = filter === 'all' ? records : records.filter((r) => r.overallStatus === filter);

  const counts = {
    cleared: records.filter((r) => r.overallStatus === 'cleared').length,
    under_review: records.filter((r) => r.overallStatus === 'under_review').length,
    pending: records.filter((r) => r.overallStatus === 'pending').length,
    flagged: records.filter((r) => r.overallStatus === 'flagged').length,
  };

  const selectedRecord = records.find((r) => r.id === selected);

  return (
    <div className="min-h-screen bg-slate-900 text-white p-6">
      {/* Header */}
      <div className="mb-8">
        <div className="text-amber-400 text-xs tracking-widest uppercase mb-2">
          Signature Sovereign Solutions LLC · SafeTrade Program
        </div>
        <h1 className="text-2xl font-light text-white mb-1">
          Sanctions Screening Dashboard
        </h1>
        <p className="text-slate-400 text-sm">
          OFAC / SDN · EU Sanctions · UN Sanctions · Q1 2026
        </p>
      </div>

      {/* Summary */}
      <div className="grid grid-cols-4 gap-4 mb-8">
        {[
          { label: 'Total Screened', value: records.length, color: 'border-amber-500' },
          { label: 'Cleared', value: counts.cleared, color: 'border-emerald-500' },
          { label: 'Under Review', value: counts.under_review, color: 'border-amber-500' },
          { label: 'Flagged', value: counts.flagged, color: 'border-red-500' },
        ].map((card) => (
          <div key={card.label} className={`bg-slate-800 border-t-2 ${card.color} p-4 rounded`}>
            <div className="text-xs text-amber-400 tracking-wider uppercase mb-2">{card.label}</div>
            <div className="text-3xl font-bold">{card.value}</div>
          </div>
        ))}
      </div>

      {/* Filter */}
      <div className="flex gap-2 mb-6">
        {['all', 'cleared', 'under_review', 'pending', 'flagged'].map((f) => (
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

      {/* Table */}
      <div className="bg-slate-800 rounded overflow-hidden mb-6">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-slate-700">
              <th className="text-left px-4 py-3 text-amber-400 text-xs tracking-wider uppercase">ID</th>
              <th className="text-left px-4 py-3 text-amber-400 text-xs tracking-wider uppercase">Entity</th>
              <th className="text-left px-4 py-3 text-amber-400 text-xs tracking-wider uppercase">Jurisdiction</th>
              <th className="text-left px-4 py-3 text-amber-400 text-xs tracking-wider uppercase">OFAC</th>
              <th className="text-left px-4 py-3 text-amber-400 text-xs tracking-wider uppercase">SDN</th>
              <th className="text-left px-4 py-3 text-amber-400 text-xs tracking-wider uppercase">EU</th>
              <th className="text-left px-4 py-3 text-amber-400 text-xs tracking-wider uppercase">UN</th>
              <th className="text-left px-4 py-3 text-amber-400 text-xs tracking-wider uppercase">Overall</th>
              <th className="text-left px-4 py-3 text-amber-400 text-xs tracking-wider uppercase">Next Review</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((rec) => (
              <tr
                key={rec.id}
                onClick={() => setSelected(selected === rec.id ? null : rec.id)}
                className="border-t border-slate-700 hover:bg-slate-750 cursor-pointer"
              >
                <td className="px-4 py-3 text-amber-400 font-mono text-xs">{rec.id}</td>
                <td className="px-4 py-3">
                  <div className="font-medium">{rec.entityName}</div>
                  <div className="text-slate-500 text-xs">{rec.entityType}</div>
                </td>
                <td className="px-4 py-3 text-slate-400 text-xs">{rec.jurisdiction}</td>
                <td className="px-4 py-3">
                  <span className={`text-xs px-2 py-0.5 rounded ${resultColor(rec.ofacResult)}`}>
                    {labelify(rec.ofacResult)}
                  </span>
                </td>
                <td className="px-4 py-3">
                  <span className={`text-xs px-2 py-0.5 rounded ${resultColor(rec.sdnResult)}`}>
                    {labelify(rec.sdnResult)}
                  </span>
                </td>
                <td className="px-4 py-3">
                  <span className={`text-xs px-2 py-0.5 rounded ${resultColor(rec.euResult)}`}>
                    {labelify(rec.euResult)}
                  </span>
                </td>
                <td className="px-4 py-3">
                  <span className={`text-xs px-2 py-0.5 rounded ${resultColor(rec.unResult)}`}>
                    {labelify(rec.unResult)}
                  </span>
                </td>
                <td className="px-4 py-3">
                  <span className={`text-xs px-2 py-0.5 rounded ${statusColor(rec.overallStatus)}`}>
                    {labelify(rec.overallStatus)}
                  </span>
                </td>
                <td className="px-4 py-3 text-slate-400 text-xs">{rec.nextReviewDate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Detail */}
      {selectedRecord && (
        <div className="bg-slate-800 border border-amber-500/30 rounded p-6">
          <div className="flex justify-between items-start mb-4">
            <div>
              <div className="text-amber-400 text-xs tracking-wider uppercase mb-1">Screening Detail</div>
              <h2 className="text-xl font-light">{selectedRecord.entityName}</h2>
              <p className="text-slate-400 text-sm">{selectedRecord.id} · {selectedRecord.entityType} · {selectedRecord.jurisdiction}</p>
            </div>
            <button onClick={() => setSelected(null)} className="text-slate-400 hover:text-white text-sm">
              ✕ Close
            </button>
          </div>
          <div className="grid grid-cols-2 gap-4 text-sm mb-4">
            <div>
              <div className="text-slate-400 text-xs uppercase tracking-wider mb-1">Screened Date</div>
              <div>{selectedRecord.screenedDate}</div>
            </div>
            <div>
              <div className="text-slate-400 text-xs uppercase tracking-wider mb-1">Screened By</div>
              <div>{selectedRecord.screenedBy}</div>
            </div>
            <div>
              <div className="text-slate-400 text-xs uppercase tracking-wider mb-1">Next Review</div>
              <div>{selectedRecord.nextReviewDate}</div>
            </div>
          </div>
          {selectedRecord.notes && (
            <div>
              <div className="text-slate-400 text-xs uppercase tracking-wider mb-2">Notes</div>
              <div className="text-slate-300 text-sm">{selectedRecord.notes}</div>
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
