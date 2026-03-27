import React, { useState } from 'react';

// SSS Entity Structure Manager Dashboard
// Signature Sovereign Solutions LLC | AI-SMCC / SafeTrade Program
// Q1 2026 | 7-Entity Cascade Across 4 Jurisdictions

interface Entity {
  id: string;
  name: string;
  abbreviation: string;
  type: string;
  jurisdiction: string;
  parent: string | null;
  function: string;
  status: 'active' | 'in_progress' | 'pending' | 'planned';
  filedDate?: string;
  activeDate?: string;
  registeredAgent?: string;
  notes?: string;
}

const entities: Entity[] = [
  {
    id: 'SSS-001',
    name: 'Signature Sovereign Solutions LLC',
    abbreviation: 'SSS LLC',
    type: 'LLC (Delaware)',
    jurisdiction: 'Delaware, USA',
    parent: null,
    function: 'Parent holding entity — U.S. regulatory anchor',
    status: 'active',
    filedDate: '2025-Q3',
    activeDate: '2025-Q4',
    registeredAgent: 'Delaware Registered Agent (TBD)',
  },
  {
    id: 'SSS-002',
    name: 'IndiSovereign Operations LLC',
    abbreviation: 'IndiSov Ops',
    type: 'LLC (Delaware)',
    jurisdiction: 'Delaware, USA',
    parent: 'SSS-001',
    function: 'India corridor operations — Bihar refinery management',
    status: 'in_progress',
    filedDate: '2026-Q1',
    registeredAgent: 'Pending',
  },
  {
    id: 'SSS-003',
    name: 'SovereignSomaliland Trade LLC',
    abbreviation: 'SovSom Trade',
    type: 'LLC (Delaware)',
    jurisdiction: 'Delaware, USA',
    parent: 'SSS-001',
    function: 'Somaliland corridor operations — minerals origination',
    status: 'in_progress',
    filedDate: '2026-Q1',
    registeredAgent: 'Pending',
  },
  {
    id: 'SSS-004',
    name: 'Bihar Refinery Entity [TBD]',
    abbreviation: 'Bihar Refinery',
    type: 'Private Limited (India)',
    jurisdiction: 'Bihar, India',
    parent: 'SSS-002',
    function: 'BIPPP-2025 anchor refinery — MMTC-PAMP hallmarking',
    status: 'pending',
    notes: 'Awaiting BIPPP-2025 application approval',
  },
  {
    id: 'SSS-005',
    name: 'Somaliland Trade Entity [TBD]',
    abbreviation: 'SomTrade',
    type: 'Local Business Entity',
    jurisdiction: 'Somaliland',
    parent: 'SSS-003',
    function: 'Local minerals origination, export facilitation',
    status: 'planned',
    notes: 'Pending Bank of Somaliland MOU',
  },
  {
    id: 'SSS-006',
    name: 'UAE Free Zone Entity [TBD]',
    abbreviation: 'UAE FZE',
    type: 'Free Zone Establishment',
    jurisdiction: 'UAE (JAFZA)',
    parent: 'SSS-001',
    function: 'Jebel Ali transit hub — DP World interface',
    status: 'planned',
    notes: 'JAFZA formation pending corridor activation',
  },
  {
    id: 'SSS-007',
    name: 'Settlement Vehicle [TBD]',
    abbreviation: 'SettleCo',
    type: 'TBD',
    jurisdiction: 'TBD',
    parent: 'SSS-001',
    function: 'Fnality / R3 Corda settlement operations',
    status: 'planned',
    notes: 'Structure TBD pending DASP v2.0 technical finalization',
  },
];

const statusConfig = {
  active: { color: 'bg-emerald-900 text-emerald-300', label: 'Active' },
  in_progress: { color: 'bg-amber-900 text-amber-300', label: 'In Progress' },
  pending: { color: 'bg-blue-900 text-blue-300', label: 'Pending' },
  planned: { color: 'bg-slate-700 text-slate-300', label: 'Planned' },
};

export default function SSSEntityStructureManager() {
  const [selected, setSelected] = useState<string | null>(null);
  const [view, setView] = useState<'list' | 'hierarchy'>('list');

  const selectedEntity = entities.find((e) => e.id === selected);

  const children = (parentId: string) =>
    entities.filter((e) => e.parent === parentId);

  const HierarchyNode: React.FC<{ entity: Entity; depth: number }> = ({ entity, depth }) => {
    const kids = children(entity.id);
    return (
      <div style={{ marginLeft: depth * 32 }}>
        <div
          onClick={() => setSelected(selected === entity.id ? null : entity.id)}
          className={`flex items-center gap-3 p-3 rounded cursor-pointer mb-2 border ${
            selected === entity.id
              ? 'border-amber-500 bg-slate-700'
              : 'border-slate-700 bg-slate-800 hover:border-slate-500'
          }`}
        >
          {depth > 0 && <span className="text-slate-600">└</span>}
          <span className="text-amber-400 font-mono text-xs">{entity.id}</span>
          <span className="font-medium text-sm">{entity.name}</span>
          <span className={`ml-auto text-xs px-2 py-0.5 rounded ${statusConfig[entity.status].color}`}>
            {statusConfig[entity.status].label}
          </span>
        </div>
        {kids.map((child) => (
          <HierarchyNode key={child.id} entity={child} depth={depth + 1} />
        ))}
      </div>
    );
  };

  const rootEntities = entities.filter((e) => !e.parent);

  return (
    <div className="min-h-screen bg-slate-900 text-white p-6">
      {/* Header */}
      <div className="mb-8">
        <div className="text-amber-400 text-xs tracking-widest uppercase mb-2">
          Signature Sovereign Solutions LLC · SafeTrade Program
        </div>
        <h1 className="text-2xl font-light text-white mb-1">
          Entity Structure Manager
        </h1>
        <p className="text-slate-400 text-sm">
          7-Entity Cascade · 4 Jurisdictions · Q1 2026
        </p>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-4 gap-4 mb-8">
        {[
          { label: 'Total Entities', value: entities.length, color: 'border-amber-500' },
          { label: 'Active', value: entities.filter((e) => e.status === 'active').length, color: 'border-emerald-500' },
          { label: 'In Progress', value: entities.filter((e) => e.status === 'in_progress').length, color: 'border-amber-500' },
          { label: 'Pending / Planned', value: entities.filter((e) => ['pending', 'planned'].includes(e.status)).length, color: 'border-slate-500' },
        ].map((card) => (
          <div key={card.label} className={`bg-slate-800 border-t-2 ${card.color} p-4 rounded`}>
            <div className="text-xs text-amber-400 tracking-wider uppercase mb-2">{card.label}</div>
            <div className="text-3xl font-bold">{card.value}</div>
          </div>
        ))}
      </div>

      {/* View Toggle */}
      <div className="flex gap-2 mb-6">
        {(['list', 'hierarchy'] as const).map((v) => (
          <button
            key={v}
            onClick={() => setView(v)}
            className={`px-4 py-1.5 text-xs uppercase tracking-wider rounded ${
              view === v
                ? 'bg-amber-500 text-slate-900 font-bold'
                : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
            }`}
          >
            {v}
          </button>
        ))}
      </div>

      {/* List View */}
      {view === 'list' && (
        <div className="bg-slate-800 rounded overflow-hidden mb-6">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-slate-700">
                <th className="text-left px-4 py-3 text-amber-400 text-xs tracking-wider uppercase">ID</th>
                <th className="text-left px-4 py-3 text-amber-400 text-xs tracking-wider uppercase">Entity</th>
                <th className="text-left px-4 py-3 text-amber-400 text-xs tracking-wider uppercase">Type</th>
                <th className="text-left px-4 py-3 text-amber-400 text-xs tracking-wider uppercase">Jurisdiction</th>
                <th className="text-left px-4 py-3 text-amber-400 text-xs tracking-wider uppercase">Function</th>
                <th className="text-left px-4 py-3 text-amber-400 text-xs tracking-wider uppercase">Status</th>
                <th className="text-left px-4 py-3 text-amber-400 text-xs tracking-wider uppercase">Filed</th>
              </tr>
            </thead>
            <tbody>
              {entities.map((entity) => (
                <tr
                  key={entity.id}
                  onClick={() => setSelected(selected === entity.id ? null : entity.id)}
                  className="border-t border-slate-700 hover:bg-slate-750 cursor-pointer"
                >
                  <td className="px-4 py-3 text-amber-400 font-mono text-xs">{entity.id}</td>
                  <td className="px-4 py-3">
                    <div className="font-medium">{entity.name}</div>
                    {entity.parent && (
                      <div className="text-slate-500 text-xs">→ {entity.parent}</div>
                    )}
                  </td>
                  <td className="px-4 py-3 text-slate-400 text-xs">{entity.type}</td>
                  <td className="px-4 py-3 text-slate-300 text-xs">{entity.jurisdiction}</td>
                  <td className="px-4 py-3 text-slate-400 text-xs max-w-xs truncate">{entity.function}</td>
                  <td className="px-4 py-3">
                    <span className={`text-xs px-2 py-0.5 rounded ${statusConfig[entity.status].color}`}>
                      {statusConfig[entity.status].label}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-slate-400 text-xs">{entity.filedDate || '—'}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Hierarchy View */}
      {view === 'hierarchy' && (
        <div className="mb-6">
          {rootEntities.map((entity) => (
            <HierarchyNode key={entity.id} entity={entity} depth={0} />
          ))}
        </div>
      )}

      {/* Detail Panel */}
      {selectedEntity && (
        <div className="bg-slate-800 border border-amber-500/30 rounded p-6">
          <div className="flex justify-between items-start mb-4">
            <div>
              <div className="text-amber-400 text-xs tracking-wider uppercase mb-1">Entity Detail</div>
              <h2 className="text-xl font-light">{selectedEntity.name}</h2>
              <p className="text-slate-400 text-sm">{selectedEntity.id} · {selectedEntity.type}</p>
            </div>
            <button onClick={() => setSelected(null)} className="text-slate-400 hover:text-white text-sm">
              ✕ Close
            </button>
          </div>
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <div className="text-slate-400 text-xs uppercase tracking-wider mb-1">Jurisdiction</div>
              <div>{selectedEntity.jurisdiction}</div>
            </div>
            <div>
              <div className="text-slate-400 text-xs uppercase tracking-wider mb-1">Function</div>
              <div>{selectedEntity.function}</div>
            </div>
            {selectedEntity.filedDate && (
              <div>
                <div className="text-slate-400 text-xs uppercase tracking-wider mb-1">Filed</div>
                <div>{selectedEntity.filedDate}</div>
              </div>
            )}
            {selectedEntity.registeredAgent && (
              <div>
                <div className="text-slate-400 text-xs uppercase tracking-wider mb-1">Registered Agent</div>
                <div>{selectedEntity.registeredAgent}</div>
              </div>
            )}
            {selectedEntity.notes && (
              <div className="col-span-2">
                <div className="text-slate-400 text-xs uppercase tracking-wider mb-1">Notes</div>
                <div className="text-slate-300">{selectedEntity.notes}</div>
              </div>
            )}
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
