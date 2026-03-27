import React, { useState } from 'react';
import { Building, ChevronDown, ChevronRight, Globe, FileText, AlertCircle, CheckCircle } from 'lucide-react';

// Signature Sovereign Solutions LLC — Entity Structure Manager
// Programme: AIA-SMCC (Afro-Indian Strategic Minerals & Capital Corridor)
// Entity: Signature Sovereign Solutions LLC (Delaware LLC — NO comma before LLC)
// Leadership: Marshall W. Morrison, Co-Founder & Chief Operating Officer (Managing Member)
// Data as of Q1 2026 (scenario)

interface Entity {
  id: string;
  name: string;
  type: string;
  jurisdiction: string;
  formed: string;
  status: 'active' | 'pending' | 'dormant';
  ein?: string;
  registrationNumber?: string;
  parent?: string;
  purpose: string;
  complianceItems: ComplianceItem[];
}

interface ComplianceItem {
  id: string;
  description: string;
  status: 'complete' | 'pending' | 'overdue';
  dueDate?: string;
  completedDate?: string;
  notes?: string;
}

const entities: Entity[] = [
  {
    id: 'SSS-PARENT',
    name: 'Signature Sovereign Solutions LLC',
    // Delaware LLC — no comma before LLC per Delaware convention
    type: 'Delaware LLC',
    jurisdiction: 'Delaware, USA',
    formed: '2025-01-15',
    status: 'active',
    purpose: 'Parent holding entity for AIA-SMCC corridor operations. Managing Member: Marshall W. Morrison, Co-Founder & Chief Operating Officer.',
    complianceItems: [
      {
        id: 'CI-001',
        description: 'Delaware Annual Report & Franchise Tax',
        status: 'complete',
        completedDate: '2026-03-01',
        notes: 'Filed and paid. Executed January 2025.'
      },
      {
        id: 'CI-002',
        description: 'FinCEN Beneficial Ownership Information (BOI) Report',
        status: 'complete',
        completedDate: '2026-01-01',
        notes: 'Filed per Corporate Transparency Act. Marshall W. Morrison listed as beneficial owner.'
      },
      {
        id: 'CI-003',
        description: 'Florida Foreign LLC Registration',
        status: 'pending',
        dueDate: '2026-05-01',
        notes: 'Miami operations require Florida foreign LLC qualification.'
      },
      {
        id: 'CI-004',
        description: 'IRS EIN Assignment',
        status: 'complete',
        completedDate: '2026-03-15',
        notes: 'EIN assigned. W-9 on file.'
      }
    ]
  },
  {
    id: 'SSTLC-OPS',
    name: 'SovereignSomaliland Trade Logistics Company',
    type: 'Somaliland Registered Entity',
    jurisdiction: 'Berbera Economic Zone, Somaliland',
    formed: '2025-01-15',
    status: 'pending',
    parent: 'SSS-PARENT',
    purpose: 'Operating entity for SSTLC (Sovereign SafeTrade Logistics Complex) — mineral aggregation, assaying, and OECD-certified export from Berbera Economic Zone.',
    complianceItems: [
      {
        id: 'CI-005',
        description: 'Somaliland Business Registration',
        status: 'pending',
        dueDate: '2026-06-01',
        notes: 'Awaiting EoI confirmation from Mr. Ibrahim Dhamac, Somaliland Ministry of Finance.'
      },
      {
        id: 'CI-006',
        description: 'BEZ Operating License Application',
        status: 'pending',
        dueDate: '2026-06-01',
        notes: 'Berbera Economic Zone operating license — dependent on EoI acceptance.'
      }
    ]
  },
  {
    id: 'BIBC-OPS',
    name: 'IndiSovereign Bihar Bullion Centre SPV',
    type: 'India Private Limited Company',
    jurisdiction: 'Bihar, India',
    formed: '2025-01-15',
    status: 'pending',
    parent: 'SSS-PARENT',
    purpose: 'Special Purpose Vehicle for BIBC (Bihar International Bullion Centre) — LBMA-pathway refining, sovereign vaulting, and downstream manufacturing under Bihar PPP framework.',
    complianceItems: [
      {
        id: 'CI-007',
        description: 'MCA Company Registration (India)',
        status: 'pending',
        dueDate: '2026-05-01',
        notes: 'Ministry of Corporate Affairs registration. Requires local director.'
      },
      {
        id: 'CI-008',
        description: 'BIPPP-2025 PPP Agreement Execution',
        status: 'pending',
        dueDate: '2026-03-31',
        notes: '⚠️ CRITICAL — Bihar Industrial Policy & PPP 2025 formalization. Meeting with Amit Kumar scheduled 2026-03-15 (Atlanta).'
      },
      {
        id: 'CI-009',
        description: 'DFC VGF Documentation ($10M)',
        status: 'complete',
        completedDate: '2026-03-01',
        notes: 'Bihar VGF $10M 0% loan — APPROVED (EV-0088).'
      }
    ]
  }
];

const complianceStatusConfig = {
  complete: { icon: CheckCircle, color: 'text-green-600', bg: 'bg-green-50', label: 'Complete' },
  pending: { icon: AlertCircle, color: 'text-yellow-600', bg: 'bg-yellow-50', label: 'Pending' },
  overdue: { icon: AlertCircle, color: 'text-red-600', bg: 'bg-red-50', label: 'Overdue' }
};

export default function EntityStructureManager() {
  const [expanded, setExpanded] = useState<string[]>(['SSS-PARENT']);
  const [selectedEntity, setSelectedEntity] = useState<Entity>(entities[0]);

  const toggle = (id: string) => {
    setExpanded(prev =>
      prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]
    );
  };

  const parent = entities.find(e => !e.parent);
  const children = entities.filter(e => e.parent === parent?.id);

  const complianceSummary = (entity: Entity) => {
    const total = entity.complianceItems.length;
    const complete = entity.complianceItems.filter(c => c.status === 'complete').length;
    return { total, complete, pct: total > 0 ? Math.round((complete / total) * 100) : 0 };
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Entity Structure Manager</h1>
        <p className="text-sm text-gray-500 mt-1">
          Signature Sovereign Solutions LLC · AIA-SMCC Programme · Q1 2026 (scenario)
        </p>
      </div>

      <div className="grid grid-cols-3 gap-6">
        {/* Entity Tree */}
        <div className="col-span-1 bg-white rounded-lg shadow-sm p-4">
          <h2 className="text-sm font-semibold text-gray-700 uppercase tracking-wide mb-4">Entity Hierarchy</h2>

          {/* Parent */}
          {parent && (
            <div>
              <div
                className="flex items-center gap-2 p-2 rounded cursor-pointer hover:bg-gray-50"
                onClick={() => { toggle(parent.id); setSelectedEntity(parent); }}
              >
                {expanded.includes(parent.id)
                  ? <ChevronDown className="w-4 h-4 text-gray-400" />
                  : <ChevronRight className="w-4 h-4 text-gray-400" />}
                <Building className="w-4 h-4 text-blue-600" />
                <div>
                  <p className="text-sm font-medium text-gray-900">{parent.name}</p>
                  <p className="text-xs text-gray-400">{parent.type}</p>
                </div>
              </div>

              {/* Children */}
              {expanded.includes(parent.id) && (
                <div className="ml-6 border-l border-gray-200 pl-3 mt-1 space-y-1">
                  {children.map(child => (
                    <div
                      key={child.id}
                      className={`flex items-center gap-2 p-2 rounded cursor-pointer hover:bg-gray-50 ${selectedEntity.id === child.id ? 'bg-blue-50' : ''}`}
                      onClick={() => setSelectedEntity(child)}
                    >
                      <Globe className="w-4 h-4 text-green-600" />
                      <div>
                        <p className="text-sm font-medium text-gray-900">{child.name}</p>
                        <p className="text-xs text-gray-400">{child.jurisdiction}</p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>

        {/* Entity Detail */}
        <div className="col-span-2 space-y-4">
          {/* Info Card */}
          <div className="bg-white rounded-lg shadow-sm p-5">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h2 className="text-lg font-semibold text-gray-900">{selectedEntity.name}</h2>
                <p className="text-sm text-gray-500">{selectedEntity.type} · {selectedEntity.jurisdiction}</p>
              </div>
              <span className={`px-3 py-1 rounded-full text-xs font-medium uppercase ${
                selectedEntity.status === 'active' ? 'bg-green-100 text-green-700' :
                selectedEntity.status === 'pending' ? 'bg-yellow-100 text-yellow-700' :
                'bg-gray-100 text-gray-600'
              }`}>
                {selectedEntity.status}
              </span>
            </div>

            <div className="grid grid-cols-2 gap-4 text-sm mb-4">
              <div>
                <p className="text-xs text-gray-400 uppercase">Formed</p>
                <p className="text-gray-800">{selectedEntity.formed}</p>
              </div>
              {selectedEntity.parent && (
                <div>
                  <p className="text-xs text-gray-400 uppercase">Parent Entity</p>
                  <p className="text-gray-800">{entities.find(e => e.id === selectedEntity.parent)?.name}</p>
                </div>
              )}
            </div>

            <div className="text-sm text-gray-700 border-t border-gray-100 pt-3">
              <p className="text-xs text-gray-400 uppercase mb-1">Purpose</p>
              <p>{selectedEntity.purpose}</p>
            </div>
          </div>

          {/* Compliance Items */}
          <div className="bg-white rounded-lg shadow-sm p-5">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-sm font-semibold text-gray-700 uppercase tracking-wide">Compliance Items</h3>
              <div className="text-sm text-gray-500">
                {complianceSummary(selectedEntity).complete}/{complianceSummary(selectedEntity).total} complete
                ({complianceSummary(selectedEntity).pct}%)
              </div>
            </div>

            {/* Progress Bar */}
            <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
              <div
                className="bg-green-500 h-2 rounded-full transition-all"
                style={{ width: `${complianceSummary(selectedEntity).pct}%` }}
              />
            </div>

            <div className="space-y-3">
              {selectedEntity.complianceItems.map(item => {
                const sc = complianceStatusConfig[item.status];
                const StatusIcon = sc.icon;
                return (
                  <div key={item.id} className={`flex items-start gap-3 p-3 rounded-lg ${sc.bg}`}>
                    <StatusIcon className={`w-4 h-4 mt-0.5 flex-shrink-0 ${sc.color}`} />
                    <div className="flex-1">
                      <div className="flex justify-between">
                        <p className="text-sm font-medium text-gray-900">{item.description}</p>
                        <span className={`text-xs font-medium ${sc.color}`}>{sc.label}</span>
                      </div>
                      {item.dueDate && (
                        <p className="text-xs text-gray-500 mt-0.5">Due: {item.dueDate}</p>
                      )}
                      {item.completedDate && (
                        <p className="text-xs text-gray-500 mt-0.5">Completed: {item.completedDate}</p>
                      )}
                      {item.notes && (
                        <p className="text-xs text-gray-600 mt-1">{item.notes}</p>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <p className="text-xs text-gray-400 mt-6 text-center">
        SSS Entity Structure Manager · Signature Sovereign Solutions LLC · Data as of Q1 2026 (scenario)
      </p>
    </div>
  );
}
