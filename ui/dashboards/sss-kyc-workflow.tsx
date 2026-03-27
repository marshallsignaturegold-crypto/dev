// UI-001: SSS KYC/AML Workflow Dashboard
// SignatureSovereign SafeTrade Program — Signature Sovereign Solutions LLC
// Co-Founder & Chief Operating Officer: Marshall W. Morrison

import { useState } from "react";

const investors = [
  {
    id: "INV-001",
    name: "Meridian Capital Partners",
    type: "Institutional",
    jurisdiction: "United States",
    status: "Approved",
    tier: "Qualified Institutional Buyer",
    submitted: "2026-01-15",
    approved: "2026-02-03",
    lastUpdate: "2026-03-01",
    amlScore: 92,
    sanctions: "Clear",
    pep: false,
    documents: ["Passport", "Articles of Incorporation", "Proof of Funds", "Source of Wealth"],
  },
  {
    id: "INV-002",
    name: "Gulf Sovereign Ventures",
    type: "Institutional",
    jurisdiction: "UAE",
    status: "Under Review",
    tier: "Accredited Investor",
    submitted: "2026-02-20",
    approved: null,
    lastUpdate: "2026-03-10",
    amlScore: 78,
    sanctions: "Clear",
    pep: true,
    documents: ["Passport", "Commercial License", "Bank Reference"],
  },
  {
    id: "INV-003",
    name: "Bihar Growth Fund",
    type: "Institutional",
    jurisdiction: "India",
    status: "Pending Documents",
    tier: "Qualified Institutional Buyer",
    submitted: "2026-03-01",
    approved: null,
    lastUpdate: "2026-03-15",
    amlScore: 85,
    sanctions: "Clear",
    pep: false,
    documents: ["Passport"],
  },
  {
    id: "INV-004",
    name: "Berbera Trade Consortium",
    type: "Corporate",
    jurisdiction: "Somaliland",
    status: "Approved",
    tier: "Strategic Partner",
    submitted: "2026-01-05",
    approved: "2026-01-28",
    lastUpdate: "2026-02-15",
    amlScore: 88,
    sanctions: "Clear",
    pep: false,
    documents: ["Passport", "Business License", "Bank Statements", "Source of Funds"],
  },
];

const kycStages = [
  "Initial Submission",
  "Document Collection",
  "AML Screening",
  "Sanctions Check",
  "PEP Review",
  "Compliance Approval",
  "Legal Sign-off",
  "Onboarding Complete",
];

const statusColors: Record<string, string> = {
  Approved: "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30",
  "Under Review": "bg-amber-500/20 text-amber-400 border border-amber-500/30",
  "Pending Documents": "bg-red-500/20 text-red-400 border border-red-500/30",
};

export default function SSSKYCWorkflow() {
  const [selected, setSelected] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<"pipeline" | "detail">("pipeline");

  const selectedInvestor = investors.find((i) => i.id === selected);

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
        <h1 className="text-2xl font-bold text-amber-400">KYC / AML Investor Onboarding</h1>
        <p className="text-slate-400 text-sm mt-1">
          UI-001 — Compliance workflow for qualified investors | Reg D 506(c) | OFAC/SDN screened
        </p>
      </div>

      {/* Stats Bar */}
      <div className="grid grid-cols-4 gap-4 mb-6">
        {[
          { label: "Total Applicants", value: investors.length },
          { label: "Approved", value: investors.filter((i) => i.status === "Approved").length },
          { label: "Under Review", value: investors.filter((i) => i.status === "Under Review").length },
          { label: "Pending Docs", value: investors.filter((i) => i.status === "Pending Documents").length },
        ].map((stat) => (
          <div key={stat.label} className="bg-slate-800 rounded-lg p-4 border border-slate-700">
            <div className="text-2xl font-bold text-amber-400">{stat.value}</div>
            <div className="text-slate-400 text-sm">{stat.label}</div>
          </div>
        ))}
      </div>

      {/* KYC Stage Progress */}
      <div className="bg-slate-800 rounded-lg p-4 mb-6 border border-slate-700">
        <h2 className="text-sm font-semibold text-slate-300 mb-3">KYC Pipeline Stages</h2>
        <div className="flex gap-2 flex-wrap">
          {kycStages.map((stage, idx) => (
            <div
              key={stage}
              className="flex items-center gap-1 text-xs bg-slate-700 rounded px-2 py-1"
            >
              <span className="text-amber-400 font-bold">{idx + 1}</span>
              <span className="text-slate-300">{stage}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Investor Table */}
      <div className="bg-slate-800 rounded-lg border border-slate-700 overflow-hidden mb-6">
        <div className="p-4 border-b border-slate-700">
          <h2 className="font-semibold text-slate-200">Investor Pipeline</h2>
        </div>
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-slate-700">
              {["ID", "Name", "Jurisdiction", "Tier", "Status", "AML Score", "Last Update"].map((h) => (
                <th key={h} className="text-left px-4 py-3 text-slate-400 font-medium">
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {investors.map((inv) => (
              <tr
                key={inv.id}
                className={`border-b border-slate-700/50 cursor-pointer hover:bg-slate-700/50 transition-colors ${
                  selected === inv.id ? "bg-slate-700/70" : ""
                }`}
                onClick={() => {
                  setSelected(inv.id);
                  setActiveTab("detail");
                }}
              >
                <td className="px-4 py-3 text-amber-400 font-mono">{inv.id}</td>
                <td className="px-4 py-3 font-medium">{inv.name}</td>
                <td className="px-4 py-3 text-slate-300">{inv.jurisdiction}</td>
                <td className="px-4 py-3 text-slate-400 text-xs">{inv.tier}</td>
                <td className="px-4 py-3">
                  <span className={`px-2 py-1 rounded text-xs font-medium ${statusColors[inv.status]}`}>
                    {inv.status}
                  </span>
                </td>
                <td className="px-4 py-3">
                  <span
                    className={`font-bold ${
                      inv.amlScore >= 90 ? "text-emerald-400" : inv.amlScore >= 80 ? "text-amber-400" : "text-red-400"
                    }`}
                  >
                    {inv.amlScore}
                  </span>
                </td>
                <td className="px-4 py-3 text-slate-400 font-mono text-xs">{inv.lastUpdate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Detail Panel */}
      {selectedInvestor && activeTab === "detail" && (
        <div className="bg-slate-800 rounded-lg border border-slate-700 p-6">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h2 className="text-lg font-bold text-amber-400">{selectedInvestor.name}</h2>
              <p className="text-slate-400 text-sm">{selectedInvestor.id} — {selectedInvestor.jurisdiction}</p>
            </div>
            <span className={`px-3 py-1 rounded text-sm font-medium ${statusColors[selectedInvestor.status]}`}>
              {selectedInvestor.status}
            </span>
          </div>
          <div className="grid grid-cols-2 gap-6">
            <div>
              <h3 className="text-xs font-semibold text-slate-400 uppercase mb-2">Compliance Status</h3>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-slate-400">AML Score</span>
                  <span className="font-bold text-amber-400">{selectedInvestor.amlScore}/100</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-slate-400">Sanctions</span>
                  <span className="text-emerald-400">{selectedInvestor.sanctions}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-slate-400">PEP Status</span>
                  <span className={selectedInvestor.pep ? "text-amber-400" : "text-emerald-400"}>
                    {selectedInvestor.pep ? "PEP Flagged" : "Not PEP"}
                  </span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-slate-400">Submitted</span>
                  <span className="font-mono">{selectedInvestor.submitted}</span>
                </div>
                {selectedInvestor.approved && (
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-400">Approved</span>
                    <span className="font-mono">{selectedInvestor.approved}</span>
                  </div>
                )}
              </div>
            </div>
            <div>
              <h3 className="text-xs font-semibold text-slate-400 uppercase mb-2">Documents Received</h3>
              <ul className="space-y-1">
                {selectedInvestor.documents.map((doc) => (
                  <li key={doc} className="text-sm text-slate-300 flex items-center gap-2">
                    <span className="text-emerald-400">✓</span> {doc}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}

      <div className="mt-6 text-xs text-slate-500 text-center">
        Signature Sovereign Solutions LLC — Co-Founder & Chief Operating Officer: Marshall W. Morrison |
        SignatureSovereign SafeTrade Program | UI-001 | CONFIDENTIAL
      </div>
    </div>
  );
}
