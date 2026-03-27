// UI-005: SSS Sanctions Screening Dashboard
// SignatureSovereign SafeTrade Program — Signature Sovereign Solutions LLC
// Co-Founder & Chief Operating Officer: Marshall W. Morrison

import { useState } from "react";

interface ScreeningRecord {
  id: string;
  entityName: string;
  type: string;
  jurisdiction: string;
  screeningDate: string;
  lastUpdate: string;
  ofacResult: string;
  unResult: string;
  euResult: string;
  pepResult: string;
  overallStatus: string;
  notes?: string;
}

const screeningRecords: ScreeningRecord[] = [
  {
    id: "SCR-001",
    entityName: "Meridian Capital Partners",
    type: "Investor",
    jurisdiction: "United States",
    screeningDate: "2026-01-15",
    lastUpdate: "2026-03-01",
    ofacResult: "Clear",
    unResult: "Clear",
    euResult: "Clear",
    pepResult: "Not PEP",
    overallStatus: "Clear",
  },
  {
    id: "SCR-002",
    entityName: "Gulf Sovereign Ventures",
    type: "Investor",
    jurisdiction: "UAE",
    screeningDate: "2026-02-20",
    lastUpdate: "2026-03-10",
    ofacResult: "Clear",
    unResult: "Clear",
    euResult: "Clear",
    pepResult: "PEP — Review",
    overallStatus: "Under Review",
    notes: "PEP flag triggered due to government-affiliated beneficial owner. Enhanced due diligence in progress.",
  },
  {
    id: "SCR-003",
    entityName: "Bihar Growth Fund",
    type: "Investor",
    jurisdiction: "India",
    screeningDate: "2026-03-01",
    lastUpdate: "2026-03-15",
    ofacResult: "Clear",
    unResult: "Clear",
    euResult: "Clear",
    pepResult: "Not PEP",
    overallStatus: "Clear",
  },
  {
    id: "SCR-004",
    entityName: "Berbera Trade Consortium",
    type: "Strategic Partner",
    jurisdiction: "Somaliland",
    screeningDate: "2026-01-05",
    lastUpdate: "2026-02-15",
    ofacResult: "Clear",
    unResult: "Clear",
    euResult: "Clear",
    pepResult: "Not PEP",
    overallStatus: "Clear",
  },
  {
    id: "SCR-005",
    entityName: "DP World (Berbera)",
    type: "Infrastructure Partner",
    jurisdiction: "UAE / Somaliland",
    screeningDate: "2026-02-01",
    lastUpdate: "2026-03-20",
    ofacResult: "Clear",
    unResult: "Clear",
    euResult: "Clear",
    pepResult: "Not PEP",
    overallStatus: "Clear",
    notes: "DP World confirmed 30-year Berbera port concession. Verified active entity.",
  },
];

const resultColors: Record<string, string> = {
  Clear: "text-emerald-400",
  "Under Review": "text-amber-400",
  Flagged: "text-red-400",
  "PEP — Review": "text-amber-400",
  "Not PEP": "text-emerald-400",
};

const overallColors: Record<string, string> = {
  Clear: "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30",
  "Under Review": "bg-amber-500/20 text-amber-400 border border-amber-500/30",
  Flagged: "bg-red-500/20 text-red-400 border border-red-500/30",
};

const screeningLists = [
  { name: "OFAC SDN", description: "US Treasury Specially Designated Nationals", jurisdiction: "USA" },
  { name: "UN Consolidated", description: "United Nations Security Council sanctions", jurisdiction: "International" },
  { name: "EU Consolidated", description: "European Union sanctions list", jurisdiction: "EU" },
  { name: "HMT UK", description: "His Majesty's Treasury UK sanctions", jurisdiction: "UK" },
  { name: "PEP Database", description: "Politically Exposed Persons screening", jurisdiction: "Global" },
];

export default function SSSSanctionsScreening() {
  const [selected, setSelected] = useState<string | null>(null);
  const [tab, setTab] = useState<"records" | "lists">("records");

  const selectedRecord = screeningRecords.find((r) => r.id === selected);
  const clearCount = screeningRecords.filter((r) => r.overallStatus === "Clear").length;
  const reviewCount = screeningRecords.filter((r) => r.overallStatus === "Under Review").length;

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
        <h1 className="text-2xl font-bold text-amber-400">Sanctions Screening Dashboard</h1>
        <p className="text-slate-400 text-sm mt-1">
          UI-005 — OFAC/SDN, UN, EU, and PEP compliance screening
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-4 gap-4 mb-6">
        <div className="bg-slate-800 rounded-lg p-4 border border-slate-700">
          <div className="text-2xl font-bold text-amber-400">{screeningRecords.length}</div>
          <div className="text-slate-400 text-sm">Total Screened</div>
        </div>
        <div className="bg-slate-800 rounded-lg p-4 border border-slate-700">
          <div className="text-2xl font-bold text-emerald-400">{clearCount}</div>
          <div className="text-slate-400 text-sm">Clear</div>
        </div>
        <div className="bg-slate-800 rounded-lg p-4 border border-slate-700">
          <div className="text-2xl font-bold text-amber-400">{reviewCount}</div>
          <div className="text-slate-400 text-sm">Under Review</div>
        </div>
        <div className="bg-slate-800 rounded-lg p-4 border border-slate-700">
          <div className="text-2xl font-bold text-slate-400">{screeningLists.length}</div>
          <div className="text-slate-400 text-sm">Lists Monitored</div>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex gap-2 mb-6">
        {(["records", "lists"] as const).map((t) => (
          <button
            key={t}
            onClick={() => setTab(t)}
            className={`px-4 py-2 rounded text-sm font-medium transition-colors capitalize ${
              tab === t
                ? "bg-amber-500 text-slate-900"
                : "bg-slate-700 text-slate-300 hover:bg-slate-600"
            }`}
          >
            {t === "records" ? "Screening Records" : "Monitored Lists"}
          </button>
        ))}
      </div>

      {/* Records Tab */}
      {tab === "records" && (
        <>
          <div className="bg-slate-800 rounded-lg border border-slate-700 overflow-hidden mb-6">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-slate-700">
                  {["ID", "Entity", "Type", "Jurisdiction", "OFAC", "UN", "EU", "PEP", "Status", "Last Update"].map(
                    (h) => (
                      <th key={h} className="text-left px-3 py-3 text-slate-400 font-medium">
                        {h}
                      </th>
                    )
                  )}
                </tr>
              </thead>
              <tbody>
                {screeningRecords.map((rec) => (
                  <tr
                    key={rec.id}
                    className={`border-b border-slate-700/50 cursor-pointer transition-colors ${
                      selected === rec.id ? "bg-slate-700/70" : "hover:bg-slate-700/30"
                    }`}
                    onClick={() => setSelected(rec.id === selected ? null : rec.id)}
                  >
                    <td className="px-3 py-3 text-amber-400 font-mono text-xs">{rec.id}</td>
                    <td className="px-3 py-3 font-medium">{rec.entityName}</td>
                    <td className="px-3 py-3 text-slate-400 text-xs">{rec.type}</td>
                    <td className="px-3 py-3 text-slate-400 text-xs">{rec.jurisdiction}</td>
                    <td className={`px-3 py-3 text-xs font-medium ${resultColors[rec.ofacResult]}`}>{rec.ofacResult}</td>
                    <td className={`px-3 py-3 text-xs font-medium ${resultColors[rec.unResult]}`}>{rec.unResult}</td>
                    <td className={`px-3 py-3 text-xs font-medium ${resultColors[rec.euResult]}`}>{rec.euResult}</td>
                    <td className={`px-3 py-3 text-xs font-medium ${resultColors[rec.pepResult]}`}>{rec.pepResult}</td>
                    <td className="px-3 py-3">
                      <span className={`px-2 py-0.5 rounded text-xs ${overallColors[rec.overallStatus]}`}>
                        {rec.overallStatus}
                      </span>
                    </td>
                    <td className="px-3 py-3 font-mono text-xs text-slate-400">{rec.lastUpdate}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {selectedRecord && selectedRecord.notes && (
            <div className="bg-slate-800 rounded-lg border border-amber-500/30 p-4">
              <h3 className="font-semibold text-amber-400 mb-2">{selectedRecord.entityName} — Notes</h3>
              <p className="text-slate-300 text-sm">{selectedRecord.notes}</p>
            </div>
          )}
        </>
      )}

      {/* Lists Tab */}
      {tab === "lists" && (
        <div className="bg-slate-800 rounded-lg border border-slate-700 overflow-hidden">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-slate-700">
                {["List", "Description", "Jurisdiction", "Status"].map((h) => (
                  <th key={h} className="text-left px-4 py-3 text-slate-400 font-medium">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {screeningLists.map((list) => (
                <tr key={list.name} className="border-b border-slate-700/50">
                  <td className="px-4 py-3 font-bold text-amber-400">{list.name}</td>
                  <td className="px-4 py-3 text-slate-300">{list.description}</td>
                  <td className="px-4 py-3 text-slate-400">{list.jurisdiction}</td>
                  <td className="px-4 py-3 text-emerald-400 text-xs">Active</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      <div className="mt-6 text-xs text-slate-500 text-center">
        Signature Sovereign Solutions LLC — Co-Founder & Chief Operating Officer: Marshall W. Morrison |
        SignatureSovereign SafeTrade Program | UI-005 | CONFIDENTIAL
      </div>
    </div>
  );
}
