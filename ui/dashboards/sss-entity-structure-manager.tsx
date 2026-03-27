// UI-002: SSS Entity Structure Manager
// SignatureSovereign SafeTrade Program — Signature Sovereign Solutions LLC
// Co-Founder & Chief Operating Officer: Marshall W. Morrison

import { useState } from "react";

interface Entity {
  id: string;
  name: string;
  shortName: string;
  type: string;
  jurisdiction: string;
  role: string;
  status: string;
  formed: string;
  registrationNumber?: string;
  parent?: string;
  filings: Filing[];
}

interface Filing {
  name: string;
  due: string;
  status: string;
}

const entities: Entity[] = [
  {
    id: "ENT-001",
    name: "Signature Sovereign Solutions LLC",
    shortName: "SSS LLC",
    type: "LLC",
    jurisdiction: "Delaware, USA",
    role: "Parent / General Partner",
    status: "Active",
    formed: "2026-01-10",
    registrationNumber: "DE-SSS-2026-001",
    filings: [
      { name: "Annual Report", due: "2027-01-31", status: "Scheduled" },
      { name: "Registered Agent Filing", due: "2026-12-31", status: "Scheduled" },
    ],
  },
  {
    id: "ENT-002",
    name: "SignatureSovereign Trade & Logistics Co.",
    shortName: "SSTLC",
    type: "LLC / Free Zone Entity",
    jurisdiction: "Somaliland BEZ",
    role: "Trade Operations — Berbera Corridor",
    status: "Formation In Progress",
    formed: "2026-03-01",
    parent: "ENT-001",
    filings: [
      { name: "BEZ Registration", due: "2026-06-30", status: "In Progress" },
      { name: "Operating License", due: "2026-09-30", status: "Planned" },
    ],
  },
  {
    id: "ENT-003",
    name: "Bihar International Business Centre",
    shortName: "BIBC",
    type: "Private Limited Company",
    jurisdiction: "Bihar, India",
    role: "India Operations — IndiSovereign Brand",
    status: "Formation Planned",
    formed: "2026-04-01",
    parent: "ENT-001",
    filings: [
      { name: "MCA Incorporation", due: "2026-06-30", status: "Planned" },
      { name: "BIPPP-2025 Application", due: "2026-03-31", status: "CRITICAL" },
      { name: "IFSCA Sandbox", due: "2026-09-30", status: "Planned" },
    ],
  },
  {
    id: "ENT-004",
    name: "SignatureSovereign Capital Management Co.",
    shortName: "SCMC",
    type: "LLC",
    jurisdiction: "UAE Free Zone",
    role: "Capital Management — Dubai Hub",
    status: "Formation Planned",
    formed: "2026-05-01",
    parent: "ENT-001",
    filings: [
      { name: "DIFC/ADGM Registration", due: "2026-07-31", status: "Planned" },
      { name: "VARA / FSRA License", due: "2026-12-31", status: "Planned" },
    ],
  },
  {
    id: "ENT-005",
    name: "SSS SafeTrade Fund LP",
    shortName: "STF LP",
    type: "Limited Partnership",
    jurisdiction: "Delaware, USA",
    role: "Investment Vehicle — Reg D 506(c)",
    status: "Formation Planned",
    formed: "2026-06-01",
    parent: "ENT-001",
    filings: [
      { name: "Form D Filing (SEC)", due: "2026-08-15", status: "Planned" },
      { name: "LP Agreement Execution", due: "2026-07-31", status: "Planned" },
    ],
  },
];

const statusColors: Record<string, string> = {
  Active: "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30",
  "Formation In Progress": "bg-amber-500/20 text-amber-400 border border-amber-500/30",
  "Formation Planned": "bg-slate-500/20 text-slate-400 border border-slate-500/30",
};

const filingStatusColors: Record<string, string> = {
  Scheduled: "text-slate-400",
  "In Progress": "text-amber-400",
  Planned: "text-slate-500",
  CRITICAL: "text-red-400 font-bold",
  Complete: "text-emerald-400",
};

export default function SSSEntityStructureManager() {
  const [selected, setSelected] = useState<string>(entities[0].id);

  const selectedEntity = entities.find((e) => e.id === selected)!;

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
        <h1 className="text-2xl font-bold text-amber-400">Entity Structure Manager</h1>
        <p className="text-slate-400 text-sm mt-1">
          UI-002 — Corporate entity tracking and filing management
        </p>
      </div>

      {/* Hierarchy Overview */}
      <div className="bg-slate-800 rounded-lg p-4 mb-6 border border-slate-700">
        <h2 className="text-sm font-semibold text-slate-300 mb-3">Corporate Hierarchy</h2>
        <div className="space-y-2">
          {entities.map((entity) => (
            <div
              key={entity.id}
              className={`flex items-center gap-3 p-3 rounded cursor-pointer transition-colors ${
                selected === entity.id
                  ? "bg-slate-700 border border-amber-500/30"
                  : "hover:bg-slate-700/50"
              } ${entity.parent ? "ml-6" : ""}`}
              onClick={() => setSelected(entity.id)}
            >
              {entity.parent && (
                <span className="text-slate-600 text-xs">└─</span>
              )}
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <span className="font-medium text-sm">{entity.shortName}</span>
                  <span className="text-slate-500 text-xs">({entity.jurisdiction})</span>
                  <span
                    className={`px-2 py-0.5 rounded text-xs ${statusColors[entity.status]}`}
                  >
                    {entity.status}
                  </span>
                </div>
                <div className="text-slate-400 text-xs mt-0.5">{entity.role}</div>
              </div>
              <span className="text-slate-600 text-xs font-mono">{entity.id}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Entity Detail */}
      <div className="bg-slate-800 rounded-lg border border-slate-700 p-6">
        <div className="flex justify-between items-start mb-6">
          <div>
            <h2 className="text-lg font-bold text-amber-400">{selectedEntity.name}</h2>
            <p className="text-slate-400 text-sm">
              {selectedEntity.id} — {selectedEntity.type} — {selectedEntity.jurisdiction}
            </p>
          </div>
          <span className={`px-3 py-1 rounded text-sm ${statusColors[selectedEntity.status]}`}>
            {selectedEntity.status}
          </span>
        </div>

        <div className="grid grid-cols-2 gap-6 mb-6">
          <div>
            <h3 className="text-xs font-semibold text-slate-400 uppercase mb-3">Entity Details</h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-slate-400">Role</span>
                <span className="text-slate-200">{selectedEntity.role}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Formation Date</span>
                <span className="font-mono">{selectedEntity.formed}</span>
              </div>
              {selectedEntity.registrationNumber && (
                <div className="flex justify-between">
                  <span className="text-slate-400">Reg. Number</span>
                  <span className="font-mono text-amber-400">{selectedEntity.registrationNumber}</span>
                </div>
              )}
              {selectedEntity.parent && (
                <div className="flex justify-between">
                  <span className="text-slate-400">Parent Entity</span>
                  <span className="text-amber-400">{selectedEntity.parent}</span>
                </div>
              )}
            </div>
          </div>

          <div>
            <h3 className="text-xs font-semibold text-slate-400 uppercase mb-3">Filing Schedule</h3>
            <div className="space-y-2">
              {selectedEntity.filings.map((filing) => (
                <div
                  key={filing.name}
                  className="flex justify-between items-center text-sm bg-slate-700/50 rounded p-2"
                >
                  <span className="text-slate-300">{filing.name}</span>
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs text-slate-400">{filing.due}</span>
                    <span className={`text-xs ${filingStatusColors[filing.status]}`}>
                      {filing.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 text-xs text-slate-500 text-center">
        Signature Sovereign Solutions LLC — Co-Founder & Chief Operating Officer: Marshall W. Morrison |
        SignatureSovereign SafeTrade Program | UI-002 | CONFIDENTIAL
      </div>
    </div>
  );
}
