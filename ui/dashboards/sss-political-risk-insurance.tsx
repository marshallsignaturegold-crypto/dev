// UI-004: SSS Political Risk Insurance Tracker
// SignatureSovereign SafeTrade Program — Signature Sovereign Solutions LLC
// Co-Founder & Chief Operating Officer: Marshall W. Morrison

import { useState } from "react";

interface Coverage {
  id: string;
  provider: string;
  type: string;
  jurisdiction: string;
  status: string;
  coverageAmount: number;
  applicationDate: string;
  expectedDecision: string;
  risks: string[];
  notes: string;
}

const coverages: Coverage[] = [
  {
    id: "PRI-001",
    provider: "DFC (US International Development Finance Corporation)",
    type: "Political Risk Insurance",
    jurisdiction: "Somaliland BEZ / UAE",
    status: "Concept Note In Progress",
    coverageAmount: 50_000_000,
    applicationDate: "2026-04-15",
    expectedDecision: "2026-09-30",
    risks: ["Expropriation", "Political Violence", "Currency Inconvertibility"],
    notes:
      "DFC current authorization ceiling: $60B under BUILD Act 2018. Concept note targeting Berbera BEZ operations under IMEC corridor alignment.",
  },
  {
    id: "PRI-002",
    provider: "MIGA (Multilateral Investment Guarantee Agency — World Bank)",
    type: "Investment Guarantee",
    jurisdiction: "India (Bihar)",
    status: "Planned — Q3 2026",
    coverageAmount: 25_000_000,
    applicationDate: "2026-07-01",
    expectedDecision: "2026-12-31",
    risks: ["Expropriation", "Currency Transfer", "War & Civil Disturbance"],
    notes:
      "MIGA coverage for BIBC operations. Dependent on entity formation completion and DFC concept note outcome.",
  },
  {
    id: "PRI-003",
    provider: "OPIC Legacy Framework / DFC",
    type: "Finance Guarantee",
    jurisdiction: "Corridor-Wide",
    status: "Research Phase",
    coverageAmount: 0,
    applicationDate: "2026-09-01",
    expectedDecision: "2027-03-31",
    risks: ["Debt Service Non-Payment", "Regulatory Change"],
    notes:
      "Finance guarantee instrument for DASP v2.0 settlement infrastructure. Subject to DFC board approval.",
  },
];

const statusColors: Record<string, string> = {
  "Concept Note In Progress": "bg-amber-500/20 text-amber-400 border border-amber-500/30",
  "Planned — Q3 2026": "bg-slate-500/20 text-slate-400 border border-slate-500/30",
  "Research Phase": "bg-slate-600/20 text-slate-500 border border-slate-600/30",
  Active: "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30",
};

const fmt = (n: number) =>
  n > 0 ? `$${(n / 1_000_000).toFixed(0)}M` : "TBD";

export default function SSS_PoliticalRiskInsurance() {
  const [selected, setSelected] = useState<string>(coverages[0].id);
  const selectedCoverage = coverages.find((c) => c.id === selected)!;

  const totalCoverage = coverages.reduce((sum, c) => sum + c.coverageAmount, 0);

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 p-6">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-8 h-8 bg-amber-500 rounded flex items-center justify-center text-slate-900 font-bold text-sm">
            SSS
          </div>
          <span className="text-slate-400 text-sm">SignatureSovereign SafeTrade Program</span>
        </div>
        <h1 className="text-2xl font-bold text-amber-400">Political Risk Insurance Tracker</h1>
        <p className="text-slate-400 text-sm mt-1">
          UI-004 — DFC / MIGA coverage applications and risk management
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-4 mb-6">
        <div className="bg-slate-800 rounded-lg p-4 border border-slate-700">
          <div className="text-2xl font-bold text-amber-400">{fmt(totalCoverage)}</div>
          <div className="text-slate-400 text-sm">Target Coverage (Projected)</div>
        </div>
        <div className="bg-slate-800 rounded-lg p-4 border border-slate-700">
          <div className="text-2xl font-bold text-amber-400">{coverages.length}</div>
          <div className="text-slate-400 text-sm">Coverage Applications</div>
        </div>
        <div className="bg-slate-800 rounded-lg p-4 border border-slate-700">
          <div className="text-2xl font-bold text-slate-400">2</div>
          <div className="text-slate-400 text-sm">Providers (DFC + MIGA)</div>
        </div>
      </div>

      {/* Coverage List */}
      <div className="space-y-3 mb-6">
        {coverages.map((cov) => (
          <div
            key={cov.id}
            className={`bg-slate-800 rounded-lg p-4 border cursor-pointer transition-colors ${
              selected === cov.id ? "border-amber-500/50" : "border-slate-700 hover:border-slate-600"
            }`}
            onClick={() => setSelected(cov.id)}
          >
            <div className="flex justify-between items-start">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-amber-400 font-mono text-sm">{cov.id}</span>
                  <span className={`px-2 py-0.5 rounded text-xs ${statusColors[cov.status]}`}>
                    {cov.status}
                  </span>
                </div>
                <div className="font-semibold text-slate-200">{cov.provider}</div>
                <div className="text-slate-400 text-sm">{cov.type} — {cov.jurisdiction}</div>
              </div>
              <div className="text-right">
                <div className="font-bold text-amber-400">{fmt(cov.coverageAmount)}</div>
                <div className="text-slate-500 text-xs">Coverage Amount</div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Detail Panel */}
      <div className="bg-slate-800 rounded-lg border border-slate-700 p-6">
        <h2 className="font-bold text-amber-400 mb-4">{selectedCoverage.provider}</h2>
        <div className="grid grid-cols-2 gap-6">
          <div>
            <h3 className="text-xs font-semibold text-slate-400 uppercase mb-3">Timeline</h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-slate-400">Application Date</span>
                <span className="font-mono">{selectedCoverage.applicationDate}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Expected Decision</span>
                <span className="font-mono">{selectedCoverage.expectedDecision}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Coverage Target</span>
                <span className="font-bold text-amber-400">{fmt(selectedCoverage.coverageAmount)}</span>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-xs font-semibold text-slate-400 uppercase mb-3">Risks Covered</h3>
            <ul className="space-y-1">
              {selectedCoverage.risks.map((risk) => (
                <li key={risk} className="text-sm text-slate-300 flex items-center gap-2">
                  <span className="text-amber-400">◆</span> {risk}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-4 p-3 bg-slate-700/50 rounded text-sm text-slate-400">
          <strong className="text-slate-300">Notes:</strong> {selectedCoverage.notes}
        </div>
      </div>

      {/* DFC Disclaimer */}
      <div className="mt-4 bg-slate-800/50 rounded p-3 text-xs text-slate-500 border border-slate-700/50">
        <strong>Reference:</strong> DFC current authorization ceiling is $60B under the BUILD Act of 2018 (enacted).
        Any reference to a $205B ceiling represents proposed/projected legislation — not currently enacted as of March 2026.
      </div>

      <div className="mt-4 text-xs text-slate-500 text-center">
        Signature Sovereign Solutions LLC — Co-Founder & Chief Operating Officer: Marshall W. Morrison |
        SignatureSovereign SafeTrade Program | UI-004 | CONFIDENTIAL
      </div>
    </div>
  );
}
