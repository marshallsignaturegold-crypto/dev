// UI-006: SSS Sub-module Architecture Matrix
// SignatureSovereign SafeTrade Program — Signature Sovereign Solutions LLC
// Co-Founder & Chief Operating Officer: Marshall W. Morrison

import { useState } from "react";

interface SubModule {
  id: string;
  name: string;
  pillar: string;
  status: string;
  priority: string;
  description: string;
}

const pillars = [
  "Legal & Compliance",
  "Settlement Infrastructure",
  "Trade Operations",
  "Capital Markets",
  "Technology Platform",
  "Government Relations",
  "Risk Management",
  "Brand & Communications",
];

const subModules: SubModule[] = [
  // Legal & Compliance (6 modules)
  { id: "M-001", name: "Entity Formation Registry", pillar: "Legal & Compliance", status: "In Progress", priority: "Critical", description: "Track all 7 entities across 4 jurisdictions through formation milestones" },
  { id: "M-002", name: "OFAC / AML Compliance Protocol", pillar: "Legal & Compliance", status: "Active", priority: "Critical", description: "OFAC SDN screening, AML transaction monitoring, PEP management" },
  { id: "M-003", name: "Reg D 506(c) Offering Management", pillar: "Legal & Compliance", status: "Planned", priority: "High", description: "Accredited investor verification, Form D filings, securities compliance" },
  { id: "M-004", name: "BIPPP-2025 Application Tracker", pillar: "Legal & Compliance", status: "In Progress", priority: "Critical", description: "Bihar Industrial Promotion Policy 2025 — deadline 2026-03-31" },
  { id: "M-005", name: "IFSCA Sandbox Application", pillar: "Legal & Compliance", status: "Planned", priority: "High", description: "GIFT City IFSCA regulatory sandbox for fintech corridor operations" },
  { id: "M-006", name: "Legal Opinion Register", pillar: "Legal & Compliance", status: "In Progress", priority: "High", description: "LO-001 OFAC opinion, Somaliland jurisdiction memos, bilateral treaty analysis" },

  // Settlement Infrastructure (6 modules)
  { id: "M-007", name: "R3 Corda Integration", pillar: "Settlement Infrastructure", status: "Planned", priority: "High", description: "Enterprise DLT on R3 Corda platform for gold token issuance and settlement" },
  { id: "M-008", name: "SWIFT gpi Integration", pillar: "Settlement Infrastructure", status: "Planned", priority: "High", description: "Correspondent banking interoperability via SWIFT global payment innovation" },
  { id: "M-009", name: "Fnality Wholesale Settlement", pillar: "Settlement Infrastructure", status: "Planned", priority: "Medium", description: "Fnality International multi-currency wholesale settlement network" },
  { id: "M-010", name: "LBMA Gold Vaulting Protocol", pillar: "Settlement Infrastructure", status: "Planned", priority: "High", description: "LBMA-compliant gold provenance, vaulting, and settlement clearing" },
  { id: "M-011", name: "DASP v2.0 Architecture", pillar: "Settlement Infrastructure", status: "Active", priority: "Critical", description: "Digital Asset Settlement Protocol v2.0 — replacing DASP v1.0 (Bitcoin/Lightning deprecated)" },
  { id: "M-012", name: "Multi-Currency FX Layer", pillar: "Settlement Infrastructure", status: "Planned", priority: "Medium", description: "USD/AED/INR/SL-Shilling FX conversion layer for corridor settlements" },

  // Trade Operations (6 modules)
  { id: "M-013", name: "Berbera BEZ Operations Hub", pillar: "Trade Operations", status: "In Progress", priority: "Critical", description: "SSTLC operations at Berbera Business & Export Zone, Somaliland" },
  { id: "M-014", name: "DP World Port Integration", pillar: "Trade Operations", status: "Planned", priority: "High", description: "DP World Berbera 30-year concession — cargo routing and port operations coordination" },
  { id: "M-015", name: "Bihar BIBC Operations", pillar: "Trade Operations", status: "Planned", priority: "Critical", description: "IndiSovereign brand operations at Bihar International Business Centre" },
  { id: "M-016", name: "Dubai Hub Coordination", pillar: "Trade Operations", status: "Planned", priority: "High", description: "SCMC operations — Dubai free zone as corridor hub between Berbera and Bihar" },
  { id: "M-017", name: "MMTC-PAMP Integration", pillar: "Trade Operations", status: "Planned", priority: "High", description: "Gold refinery and hallmarking integration with MMTC-PAMP India" },
  { id: "M-018", name: "Trade Finance Instruments", pillar: "Trade Operations", status: "Planned", priority: "Medium", description: "Letter of credit, documentary collection, and trade finance product suite" },

  // Capital Markets (6 modules)
  { id: "M-019", name: "SSS SafeTrade Fund LP", pillar: "Capital Markets", status: "Planned", priority: "High", description: "Delaware LP investment vehicle for accredited investors under Reg D 506(c)" },
  { id: "M-020", name: "Investor Relations Platform", pillar: "Capital Markets", status: "Planned", priority: "Medium", description: "KYC-gated investor portal for reporting and capital calls" },
  { id: "M-021", name: "Gold-Backed Token Issuance", pillar: "Capital Markets", status: "Research", priority: "High", description: "Tokenized gold instrument on R3 Corda — institutional grade, LBMA-compliant" },
  { id: "M-022", name: "DFC Loan/Guarantee Facility", pillar: "Capital Markets", status: "Planned", priority: "High", description: "DFC BUILD Act financing facility — up to available ceiling under $60B cap" },
  { id: "M-023", name: "Secondary Market Framework", pillar: "Capital Markets", status: "Research", priority: "Low", description: "Framework for secondary trading of corridor participation instruments" },
  { id: "M-024", name: "Collateral Management", pillar: "Capital Markets", status: "Planned", priority: "Medium", description: "Gold and commodity collateral management protocol for leverage facilities" },

  // Technology Platform (6 modules)
  { id: "M-025", name: "KYC/AML Workflow System", pillar: "Technology Platform", status: "Active", priority: "Critical", description: "Investor onboarding, document management, AML scoring — see UI-001" },
  { id: "M-026", name: "Treasury Management System", pillar: "Technology Platform", status: "Active", priority: "Critical", description: "Multi-currency cash flow, banking relationships, payment processing — see UI-003" },
  { id: "M-027", name: "Entity Structure Manager", pillar: "Technology Platform", status: "Active", priority: "High", description: "Corporate hierarchy, filing schedule, compliance tracking — see UI-002" },
  { id: "M-028", name: "Sanctions Screening Engine", pillar: "Technology Platform", status: "Active", priority: "Critical", description: "Real-time OFAC/SDN, UN, EU screening — see UI-005" },
  { id: "M-029", name: "PRI Tracker", pillar: "Technology Platform", status: "Active", priority: "High", description: "DFC/MIGA political risk insurance application pipeline — see UI-004" },
  { id: "M-030", name: "Data Room Platform", pillar: "Technology Platform", status: "Active", priority: "High", description: "VDR for institutional document distribution — HTML master documents" },

  // Government Relations (6 modules)
  { id: "M-031", name: "DFC Engagement Pipeline", pillar: "Government Relations", status: "In Progress", priority: "Critical", description: "US DFC concept note → formal application → PRI issuance pipeline" },
  { id: "M-032", name: "MIGA / World Bank Engagement", pillar: "Government Relations", status: "Planned", priority: "High", description: "MIGA guarantee application for Bihar BIBC corridor operations" },
  { id: "M-033", name: "Bihar State Government Relations", pillar: "Government Relations", status: "In Progress", priority: "Critical", description: "BIADA engagement, BIPPP-2025 formal application, SGST refund negotiation" },
  { id: "M-034", name: "Somaliland Government Liaison", pillar: "Government Relations", status: "In Progress", priority: "High", description: "BEZ registration, Ministry of Finance coordination, Bank of Somaliland" },
  { id: "M-035", name: "US Congress / USTR Alignment", pillar: "Government Relations", status: "Planned", priority: "Medium", description: "Alignment with IMEC-supporting legislators, iCET framework advocates" },
  { id: "M-036", name: "UAE Government Relations", pillar: "Government Relations", status: "Planned", priority: "High", description: "DIFC/ADGM licensing, VARA digital asset regulation compliance" },

  // Risk Management (6 modules)
  { id: "M-037", name: "Geopolitical Risk Monitor", pillar: "Risk Management", status: "Active", priority: "High", description: "Horn of Africa stability, India-China tensions, US policy risk monitoring" },
  { id: "M-038", name: "Regulatory Change Tracker", pillar: "Risk Management", status: "Active", priority: "High", description: "OFAC rule updates, DFC policy changes, VARA licensing evolution" },
  { id: "M-039", name: "Counterparty Credit Risk", pillar: "Risk Management", status: "Planned", priority: "Medium", description: "Credit assessment framework for trade finance and settlement counterparties" },
  { id: "M-040", name: "Market Risk Framework", pillar: "Risk Management", status: "Planned", priority: "Medium", description: "Gold price, FX, and interest rate risk management protocols" },
  { id: "M-041", name: "Operational Risk Register", pillar: "Risk Management", status: "Active", priority: "High", description: "Key person risk, technology failure, corridor disruption scenarios" },
  { id: "M-042", name: "Insurance Coverage Matrix", pillar: "Risk Management", status: "In Progress", priority: "High", description: "PRI + D&O + E&O + cargo insurance coverage map for corridor operations" },

  // Brand & Communications (6 modules)
  { id: "M-043", name: "Brand Governance Protocol", pillar: "Brand & Communications", status: "Active", priority: "High", description: "Three sub-brand hierarchy: SignatureSovereign / IndiSovereign / SovereignSomaliland" },
  { id: "M-044", name: "Institutional Document Standards", pillar: "Brand & Communications", status: "Active", priority: "High", description: "Gold+navy design system, typography, classification markings" },
  { id: "M-045", name: "Investor Communications", pillar: "Brand & Communications", status: "Planned", priority: "Medium", description: "Quarterly investor letters, programme updates, capital call notices" },
  { id: "M-046", name: "Media & Press Strategy", pillar: "Brand & Communications", status: "Planned", priority: "Low", description: "Press release framework, media relations for corridor milestones" },
  { id: "M-047", name: "Government Outreach Letters", pillar: "Brand & Communications", status: "Active", priority: "High", description: "Standardized government correspondence templates — see DOC-BINDER-001" },
  { id: "M-048", name: "Repository Documentation", pillar: "Brand & Communications", status: "Active", priority: "High", description: "README, AGENTS.md, ADRs, and canonical directory structure maintenance" },
];

const statusColors: Record<string, string> = {
  Active: "bg-emerald-500/20 text-emerald-400",
  "In Progress": "bg-amber-500/20 text-amber-400",
  Planned: "bg-slate-500/20 text-slate-400",
  Research: "bg-purple-500/20 text-purple-400",
};

const priorityColors: Record<string, string> = {
  Critical: "text-red-400 font-bold",
  High: "text-amber-400",
  Medium: "text-slate-300",
  Low: "text-slate-500",
};

export default function SSSSubmoduleMatrix() {
  const [selectedPillar, setSelectedPillar] = useState<string | null>(null);
  const [selectedModule, setSelectedModule] = useState<SubModule | null>(null);

  const filtered = selectedPillar
    ? subModules.filter((m) => m.pillar === selectedPillar)
    : subModules;

  const pillarCounts = pillars.reduce(
    (acc, p) => {
      acc[p] = subModules.filter((m) => m.pillar === p).length;
      return acc;
    },
    {} as Record<string, number>
  );

  const activeCount = subModules.filter((m) => m.status === "Active").length;
  const inProgressCount = subModules.filter((m) => m.status === "In Progress").length;
  const plannedCount = subModules.filter((m) => m.status === "Planned").length;
  const criticalCount = subModules.filter((m) => m.priority === "Critical").length;

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
        <h1 className="text-2xl font-bold text-amber-400">Sub-module Architecture Matrix</h1>
        <p className="text-slate-400 text-sm mt-1">
          UI-006 — AI-SMCC v12.0 — 48 sub-modules across 8 pillars
        </p>
      </div>

      {/* Summary Stats */}
      <div className="grid grid-cols-4 gap-4 mb-6">
        <div className="bg-slate-800 rounded-lg p-4 border border-slate-700">
          <div className="text-2xl font-bold text-amber-400">{subModules.length}</div>
          <div className="text-slate-400 text-sm">Total Sub-modules</div>
        </div>
        <div className="bg-slate-800 rounded-lg p-4 border border-slate-700">
          <div className="text-2xl font-bold text-emerald-400">{activeCount}</div>
          <div className="text-slate-400 text-sm">Active</div>
        </div>
        <div className="bg-slate-800 rounded-lg p-4 border border-slate-700">
          <div className="text-2xl font-bold text-amber-400">{inProgressCount}</div>
          <div className="text-slate-400 text-sm">In Progress</div>
        </div>
        <div className="bg-slate-800 rounded-lg p-4 border border-slate-700">
          <div className="text-2xl font-bold text-red-400">{criticalCount}</div>
          <div className="text-slate-400 text-sm">Critical Priority</div>
        </div>
      </div>

      <div className="flex gap-6">
        {/* Pillar Sidebar */}
        <div className="w-56 flex-shrink-0">
          <h2 className="text-xs font-semibold text-slate-400 uppercase mb-3">Pillars</h2>
          <div className="space-y-1">
            <button
              className={`w-full text-left px-3 py-2 rounded text-sm transition-colors ${
                selectedPillar === null
                  ? "bg-amber-500 text-slate-900 font-medium"
                  : "text-slate-300 hover:bg-slate-700"
              }`}
              onClick={() => setSelectedPillar(null)}
            >
              All Pillars ({subModules.length})
            </button>
            {pillars.map((p) => (
              <button
                key={p}
                className={`w-full text-left px-3 py-2 rounded text-sm transition-colors ${
                  selectedPillar === p
                    ? "bg-amber-500 text-slate-900 font-medium"
                    : "text-slate-300 hover:bg-slate-700"
                }`}
                onClick={() => setSelectedPillar(p)}
              >
                {p} ({pillarCounts[p]})
              </button>
            ))}
          </div>
        </div>

        {/* Module Grid */}
        <div className="flex-1">
          <div className="space-y-2">
            {filtered.map((mod) => (
              <div
                key={mod.id}
                className={`bg-slate-800 rounded-lg p-3 border cursor-pointer transition-colors ${
                  selectedModule?.id === mod.id
                    ? "border-amber-500/50"
                    : "border-slate-700 hover:border-slate-600"
                }`}
                onClick={() =>
                  setSelectedModule(selectedModule?.id === mod.id ? null : mod)
                }
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="text-amber-400 font-mono text-xs w-12">{mod.id}</span>
                    <span className="font-medium text-sm">{mod.name}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className={`text-xs ${priorityColors[mod.priority]}`}>{mod.priority}</span>
                    <span className={`px-2 py-0.5 rounded text-xs ${statusColors[mod.status]}`}>
                      {mod.status}
                    </span>
                  </div>
                </div>
                {selectedModule?.id === mod.id && (
                  <div className="mt-2 pt-2 border-t border-slate-700">
                    <p className="text-slate-300 text-sm">{mod.description}</p>
                    <p className="text-slate-500 text-xs mt-1">Pillar: {mod.pillar}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-6 text-xs text-slate-500 text-center">
        Signature Sovereign Solutions LLC — Co-Founder & Chief Operating Officer: Marshall W. Morrison |
        SignatureSovereign SafeTrade Program | AI-SMCC v12.0 | UI-006 | CONFIDENTIAL
      </div>
    </div>
  );
}
