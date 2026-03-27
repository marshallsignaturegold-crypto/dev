import React, { useState } from 'react';

// SSS Sub-Module Architecture Matrix
// Signature Sovereign Solutions LLC | AI-SMCC / SafeTrade Program
// Q1 2026 | 48 Sub-Module Programme Architecture

interface SubModule {
  id: string;
  number: number;
  name: string;
  category: string;
  corridor: string;
  phase: number;
  status: 'complete' | 'in_progress' | 'pending' | 'planned';
  owner: string;
  description: string;
}

const modules: SubModule[] = [
  // Phase 1 — Foundation
  { id: 'SM-001', number: 1, name: 'Delaware LLC Formation (SSS)', category: 'Legal', corridor: 'All', phase: 1, status: 'complete', owner: 'Legal', description: 'Parent entity incorporation in Delaware' },
  { id: 'SM-002', number: 2, name: 'IndiSovereign LLC Formation', category: 'Legal', corridor: 'India', phase: 1, status: 'in_progress', owner: 'Legal', description: 'India corridor operating subsidiary' },
  { id: 'SM-003', number: 3, name: 'SovereignSomaliland LLC Formation', category: 'Legal', corridor: 'Somaliland', phase: 1, status: 'in_progress', owner: 'Legal', description: 'Somaliland corridor operating subsidiary' },
  { id: 'SM-004', number: 4, name: 'Reg D 506(c) Compliance Setup', category: 'Compliance', corridor: 'All', phase: 1, status: 'in_progress', owner: 'Legal', description: 'PPM, subscription documents, accredited investor verification' },
  { id: 'SM-005', number: 5, name: 'OFAC/SDN Screening Platform', category: 'Compliance', corridor: 'All', phase: 1, status: 'in_progress', owner: 'Compliance', description: 'Automated sanctions screening for all counterparties' },
  { id: 'SM-006', number: 6, name: 'KYC/AML Onboarding Pipeline', category: 'Compliance', corridor: 'All', phase: 1, status: 'in_progress', owner: 'Compliance', description: 'Investor identity verification and AML checks' },
  { id: 'SM-007', number: 7, name: 'Programme Brand Identity', category: 'Marketing', corridor: 'All', phase: 1, status: 'complete', owner: 'Morrison', description: 'SafeTrade Program / AI-SMCC brand system' },
  { id: 'SM-008', number: 8, name: 'Master Institutional Document v12.0', category: 'Documents', corridor: 'All', phase: 1, status: 'complete', owner: 'Morrison', description: 'AI-SMCC comprehensive institutional pitch document' },
  // Phase 2 — India Corridor
  { id: 'SM-009', number: 9, name: 'Bihar BIPPP-2025 Application', category: 'Regulatory', corridor: 'India', phase: 2, status: 'in_progress', owner: 'Morrison', description: 'Bihar industrial promotion policy application for refinery' },
  { id: 'SM-010', number: 10, name: 'MMTC-PAMP Partnership Outreach', category: 'Partnership', corridor: 'India', phase: 2, status: 'in_progress', owner: 'Morrison', description: 'Hallmarking and assay partnership discussions' },
  { id: 'SM-011', number: 11, name: 'Bihar Refinery Entity Formation', category: 'Legal', corridor: 'India', phase: 2, status: 'pending', owner: 'Legal', description: 'Indian private limited company for refinery operations' },
  { id: 'SM-012', number: 12, name: 'HDFC Bank Account Opening', category: 'Banking', corridor: 'India', phase: 2, status: 'pending', owner: 'Finance', description: 'Indian operating bank account for corridor operations' },
  { id: 'SM-013', number: 13, name: 'Bihar Refinery Site Selection', category: 'Operations', corridor: 'India', phase: 2, status: 'pending', owner: 'Operations', description: 'Site selection for BIPPP-2025 anchor refinery' },
  { id: 'SM-014', number: 14, name: 'iCET Framework Alignment', category: 'Policy', corridor: 'India', phase: 2, status: 'pending', owner: 'Morrison', description: 'U.S.-India Initiative on Critical and Emerging Technology' },
  { id: 'SM-015', number: 15, name: 'MSP Integration Planning', category: 'Policy', corridor: 'India', phase: 2, status: 'pending', owner: 'Morrison', description: 'Minerals Security Partnership engagement' },
  { id: 'SM-016', number: 16, name: 'India Capex Model (Phase 1)', category: 'Finance', corridor: 'India', phase: 2, status: 'pending', owner: 'Finance', description: 'Bihar refinery capital expenditure model' },
  // Phase 2 — Somaliland Corridor
  { id: 'SM-017', number: 17, name: 'Bank of Somaliland MOU', category: 'Partnership', corridor: 'Somaliland', phase: 2, status: 'in_progress', owner: 'Morrison', description: 'Corridor banking partnership MOU' },
  { id: 'SM-018', number: 18, name: 'USGS Mineral Survey Review', category: 'Research', corridor: 'Somaliland', phase: 2, status: 'complete', owner: 'Research', description: '72 MRDS records analysis for Somaliland region' },
  { id: 'SM-019', number: 19, name: 'Berbera Port Interface Planning', category: 'Operations', corridor: 'Somaliland', phase: 2, status: 'pending', owner: 'Operations', description: 'DP World Berbera port export logistics planning' },
  { id: 'SM-020', number: 20, name: 'Somaliland Trade Entity Formation', category: 'Legal', corridor: 'Somaliland', phase: 2, status: 'planned', owner: 'Legal', description: 'Local Somaliland operating entity' },
  { id: 'SM-021', number: 21, name: 'Minerals Provenance Framework', category: 'Compliance', corridor: 'Somaliland', phase: 2, status: 'planned', owner: 'Compliance', description: 'Conflict minerals and chain of custody compliance' },
  { id: 'SM-022', number: 22, name: 'Export Licensing Research', category: 'Regulatory', corridor: 'Somaliland', phase: 2, status: 'pending', owner: 'Legal', description: 'Somaliland minerals export regulatory framework' },
  { id: 'SM-023', number: 23, name: 'Somaliland Corridor Economics Model', category: 'Finance', corridor: 'Somaliland', phase: 2, status: 'pending', owner: 'Finance', description: 'Revenue and cost model for Somaliland operations' },
  { id: 'SM-024', number: 24, name: 'LBMA Provenance Integration', category: 'Compliance', corridor: 'Somaliland', phase: 2, status: 'planned', owner: 'Compliance', description: 'London Bullion Market Association provenance standards' },
  // Phase 3 — UAE / Transit Hub
  { id: 'SM-025', number: 25, name: 'JAFZA Entity Formation', category: 'Legal', corridor: 'UAE', phase: 3, status: 'planned', owner: 'Legal', description: 'Jebel Ali Free Zone establishment' },
  { id: 'SM-026', number: 26, name: 'DP World Interface Agreement', category: 'Partnership', corridor: 'UAE', phase: 3, status: 'planned', owner: 'Morrison', description: 'Jebel Ali–Berbera transit service agreement' },
  { id: 'SM-027', number: 27, name: 'UAE Transit Hub Operations', category: 'Operations', corridor: 'UAE', phase: 3, status: 'planned', owner: 'Operations', description: 'UAE transit logistics and storage operations' },
  { id: 'SM-028', number: 28, name: 'UAE Bank Account Opening', category: 'Banking', corridor: 'UAE', phase: 3, status: 'planned', owner: 'Finance', description: 'UAE correspondent banking establishment' },
  // Phase 3 — Technology / DASP v2.0
  { id: 'SM-029', number: 29, name: 'R3 Corda Node Setup', category: 'Technology', corridor: 'All', phase: 3, status: 'planned', owner: 'Tech', description: 'Permissioned DLT node for AI-SMCC settlement' },
  { id: 'SM-030', number: 30, name: 'SWIFT gpi Integration', category: 'Technology', corridor: 'All', phase: 3, status: 'planned', owner: 'Tech', description: 'SWIFT global payment innovation for cross-border settlement' },
  { id: 'SM-031', number: 31, name: 'Fnality International Onboarding', category: 'Technology', corridor: 'All', phase: 3, status: 'planned', owner: 'Tech', description: 'Wholesale settlement network integration' },
  { id: 'SM-032', number: 32, name: 'DASP v2.0 Smart Contract Deployment', category: 'Technology', corridor: 'All', phase: 3, status: 'planned', owner: 'Tech', description: 'R3 Corda smart contract layer for minerals settlement' },
  // Phase 3 — Risk / Insurance
  { id: 'SM-033', number: 33, name: 'DFC LOI Submission', category: 'Risk', corridor: 'All', phase: 3, status: 'in_progress', owner: 'Morrison', description: 'DFC Letter of Intent for political risk coverage' },
  { id: 'SM-034', number: 34, name: 'MIGA Application', category: 'Risk', corridor: 'All', phase: 3, status: 'planned', owner: 'Legal', description: 'MIGA non-commercial risk guarantee application' },
  { id: 'SM-035', number: 35, name: 'Trade Credit Insurance', category: 'Risk', corridor: 'All', phase: 3, status: 'planned', owner: 'Finance', description: 'Atradius / Lloyd\'s trade credit coverage' },
  // Phase 4 — Capital Formation
  { id: 'SM-036', number: 36, name: 'Reg D 506(c) PPM Finalization', category: 'Finance', corridor: 'All', phase: 4, status: 'in_progress', owner: 'Legal', description: 'Private Placement Memorandum for investor distribution' },
  { id: 'SM-037', number: 37, name: 'Anchor Investor Pipeline', category: 'Finance', corridor: 'All', phase: 4, status: 'in_progress', owner: 'Morrison', description: 'Qualified institutional investor identification and outreach' },
  { id: 'SM-038', number: 38, name: 'JPMorgan Escrow Account Setup', category: 'Banking', corridor: 'All', phase: 4, status: 'pending', owner: 'Finance', description: 'JPMorgan Chase (Escrow Services) account for Reg D 506(c)' },
  { id: 'SM-039', number: 39, name: 'Fund Closing Mechanics', category: 'Finance', corridor: 'All', phase: 4, status: 'planned', owner: 'Legal', description: 'Subscription agreement execution and escrow release' },
  // Phase 4 — Government Engagement
  { id: 'SM-040', number: 40, name: 'State Department Engagement', category: 'Government', corridor: 'All', phase: 4, status: 'pending', owner: 'Morrison', description: 'U.S. Department of State bilateral corridor briefing' },
  { id: 'SM-041', number: 41, name: 'USTDA Application', category: 'Government', corridor: 'India', phase: 4, status: 'planned', owner: 'Morrison', description: 'U.S. Trade and Development Agency grant application' },
  { id: 'SM-042', number: 42, name: 'Indian Ministry of Commerce Outreach', category: 'Government', corridor: 'India', phase: 4, status: 'pending', owner: 'Morrison', description: 'India MoC IMEC corridor alignment briefing' },
  // Phase 5 — Operational Launch
  { id: 'SM-043', number: 43, name: 'Pilot Shipment (Proof of Concept)', category: 'Operations', corridor: 'All', phase: 5, status: 'planned', owner: 'Operations', description: 'First certified minerals shipment via AI-SMCC corridor' },
  { id: 'SM-044', number: 44, name: 'Corridor Volume Ramp-Up', category: 'Operations', corridor: 'All', phase: 5, status: 'planned', owner: 'Operations', description: 'Scaling from pilot to full commercial operations' },
  { id: 'SM-045', number: 45, name: 'MMTC-PAMP Hallmarking Launch', category: 'Operations', corridor: 'India', phase: 5, status: 'planned', owner: 'Operations', description: 'Live hallmarking and assay services at Bihar refinery' },
  { id: 'SM-046', number: 46, name: 'R3 Corda Live Settlement', category: 'Technology', corridor: 'All', phase: 5, status: 'planned', owner: 'Tech', description: 'Live DLT settlement for corridor transactions' },
  { id: 'SM-047', number: 47, name: 'Investor Reporting System', category: 'Finance', corridor: 'All', phase: 5, status: 'planned', owner: 'Finance', description: 'Quarterly investor reporting and portal' },
  { id: 'SM-048', number: 48, name: 'Programme Audit & Certification', category: 'Compliance', corridor: 'All', phase: 5, status: 'planned', owner: 'Compliance', description: 'External audit and compliance certification for full operations' },
];

const statusConfig: Record<string, { color: string; label: string }> = {
  complete: { color: 'bg-emerald-900 text-emerald-300', label: 'Complete' },
  in_progress: { color: 'bg-amber-900 text-amber-300', label: 'In Progress' },
  pending: { color: 'bg-blue-900 text-blue-300', label: 'Pending' },
  planned: { color: 'bg-slate-700 text-slate-300', label: 'Planned' },
};

const categories = [...new Set(modules.map((m) => m.category))].sort();
const corridors = [...new Set(modules.map((m) => m.corridor))].sort();
const phases = [1, 2, 3, 4, 5];

export default function SSSSubmoduleMatrix() {
  const [selectedPhase, setSelectedPhase] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedCorridor, setSelectedCorridor] = useState<string>('all');
  const [selected, setSelected] = useState<string | null>(null);

  const filtered = modules.filter((m) => {
    if (selectedPhase && m.phase !== selectedPhase) return false;
    if (selectedCategory !== 'all' && m.category !== selectedCategory) return false;
    if (selectedCorridor !== 'all' && m.corridor !== selectedCorridor) return false;
    return true;
  });

  const stats = {
    complete: modules.filter((m) => m.status === 'complete').length,
    in_progress: modules.filter((m) => m.status === 'in_progress').length,
    pending: modules.filter((m) => m.status === 'pending').length,
    planned: modules.filter((m) => m.status === 'planned').length,
  };

  const pct = Math.round(((stats.complete + stats.in_progress * 0.5) / modules.length) * 100);
  const selectedModule = modules.find((m) => m.id === selected);

  return (
    <div className="min-h-screen bg-slate-900 text-white p-6">
      {/* Header */}
      <div className="mb-8">
        <div className="text-amber-400 text-xs tracking-widest uppercase mb-2">
          Signature Sovereign Solutions LLC · SafeTrade Program
        </div>
        <h1 className="text-2xl font-light text-white mb-1">
          48 Sub-Module Architecture Matrix
        </h1>
        <p className="text-slate-400 text-sm">
          AI-SMCC Programme Architecture · 5 Phases · Q1 2026
        </p>
      </div>

      {/* Summary */}
      <div className="grid grid-cols-5 gap-4 mb-8">
        <div className="bg-slate-800 border-t-2 border-amber-500 p-4 rounded">
          <div className="text-xs text-amber-400 tracking-wider uppercase mb-2">Progress</div>
          <div className="text-3xl font-bold">{pct}%</div>
          <div className="text-slate-500 text-xs mt-1">Estimated completion</div>
        </div>
        {Object.entries(stats).map(([status, count]) => (
          <div key={status} className={`bg-slate-800 border-t-2 ${statusConfig[status].color.replace('bg-', 'border-').replace(' text-emerald-300', '').replace(' text-amber-300', '').replace(' text-blue-300', '').replace(' text-slate-300', '')} p-4 rounded`}>
            <div className="text-xs text-amber-400 tracking-wider uppercase mb-2">{statusConfig[status].label}</div>
            <div className="text-3xl font-bold">{count}</div>
          </div>
        ))}
      </div>

      {/* Filters */}
      <div className="flex flex-wrap gap-4 mb-6">
        <div className="flex gap-2">
          <span className="text-slate-400 text-xs my-auto">Phase:</span>
          <button
            onClick={() => setSelectedPhase(null)}
            className={`px-3 py-1 text-xs rounded uppercase tracking-wider ${
              !selectedPhase ? 'bg-amber-500 text-slate-900 font-bold' : 'bg-slate-700 text-slate-300'
            }`}
          >
            All
          </button>
          {phases.map((p) => (
            <button
              key={p}
              onClick={() => setSelectedPhase(selectedPhase === p ? null : p)}
              className={`px-3 py-1 text-xs rounded uppercase tracking-wider ${
                selectedPhase === p ? 'bg-amber-500 text-slate-900 font-bold' : 'bg-slate-700 text-slate-300'
              }`}
            >
              P{p}
            </button>
          ))}
        </div>
        <div className="flex gap-2">
          <span className="text-slate-400 text-xs my-auto">Corridor:</span>
          <button
            onClick={() => setSelectedCorridor('all')}
            className={`px-3 py-1 text-xs rounded uppercase tracking-wider ${
              selectedCorridor === 'all' ? 'bg-amber-500 text-slate-900 font-bold' : 'bg-slate-700 text-slate-300'
            }`}
          >
            All
          </button>
          {corridors.map((c) => (
            <button
              key={c}
              onClick={() => setSelectedCorridor(c)}
              className={`px-3 py-1 text-xs rounded uppercase tracking-wider ${
                selectedCorridor === c ? 'bg-amber-500 text-slate-900 font-bold' : 'bg-slate-700 text-slate-300'
              }`}
            >
              {c}
            </button>
          ))}
        </div>
      </div>

      {/* Module Grid */}
      <div className="grid grid-cols-3 gap-3 mb-6">
        {filtered.map((mod) => (
          <div
            key={mod.id}
            onClick={() => setSelected(selected === mod.id ? null : mod.id)}
            className={`bg-slate-800 p-3 rounded cursor-pointer border ${
              selected === mod.id ? 'border-amber-500' : 'border-slate-700 hover:border-slate-500'
            }`}
          >
            <div className="flex justify-between items-start mb-2">
              <div className="flex gap-2">
                <span className="text-amber-400 font-mono text-xs">{mod.id}</span>
                <span className="text-slate-500 text-xs">P{mod.phase}</span>
              </div>
              <span className={`text-xs px-1.5 py-0.5 rounded ${statusConfig[mod.status].color}`}>
                {statusConfig[mod.status].label}
              </span>
            </div>
            <div className="font-medium text-sm mb-1">{mod.name}</div>
            <div className="flex gap-2">
              <span className="text-xs text-slate-500 bg-slate-700 px-1.5 py-0.5 rounded">{mod.category}</span>
              <span className="text-xs text-slate-500 bg-slate-700 px-1.5 py-0.5 rounded">{mod.corridor}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Detail */}
      {selectedModule && (
        <div className="bg-slate-800 border border-amber-500/30 rounded p-6">
          <div className="flex justify-between items-start mb-4">
            <div>
              <div className="text-amber-400 text-xs tracking-wider uppercase mb-1">Module Detail</div>
              <h2 className="text-xl font-light">{selectedModule.name}</h2>
              <p className="text-slate-400 text-sm">{selectedModule.id} · Phase {selectedModule.phase} · {selectedModule.category} · {selectedModule.corridor}</p>
            </div>
            <button onClick={() => setSelected(null)} className="text-slate-400 hover:text-white text-sm">
              ✕ Close
            </button>
          </div>
          <div className="grid grid-cols-3 gap-4 text-sm mb-4">
            <div>
              <div className="text-slate-400 text-xs uppercase tracking-wider mb-1">Owner</div>
              <div>{selectedModule.owner}</div>
            </div>
            <div>
              <div className="text-slate-400 text-xs uppercase tracking-wider mb-1">Status</div>
              <span className={`text-xs px-2 py-0.5 rounded ${statusConfig[selectedModule.status].color}`}>
                {statusConfig[selectedModule.status].label}
              </span>
            </div>
            <div>
              <div className="text-slate-400 text-xs uppercase tracking-wider mb-1">Corridor</div>
              <div>{selectedModule.corridor}</div>
            </div>
          </div>
          <div>
            <div className="text-slate-400 text-xs uppercase tracking-wider mb-2">Description</div>
            <div className="text-slate-300 text-sm">{selectedModule.description}</div>
          </div>
        </div>
      )}

      {/* Footer */}
      <div className="mt-8 text-slate-600 text-xs text-center">
        Signature Sovereign Solutions LLC · AI-SMCC / SafeTrade Program · Q1 2026 · Prototype Dashboard
      </div>
    </div>
  );
}
