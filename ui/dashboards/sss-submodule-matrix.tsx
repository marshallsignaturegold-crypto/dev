import React, { useState } from 'react';
import { CheckCircle, Clock, AlertTriangle, XCircle, Layers, ArrowRight, Cpu } from 'lucide-react';

// Signature Sovereign Solutions LLC — Sub-Module Architecture Matrix
// Programme: AIA-SMCC (Afro-Indian Strategic Minerals & Capital Corridor)
// Entity: Signature Sovereign Solutions LLC
// Leadership: Marshall W. Morrison, Co-Founder & Chief Operating Officer

interface SubModule {
  id: string;
  name: string;
  category: string;
  node: 'SSTLC' | 'Dubai' | 'BIBC' | 'DASP' | 'SSS-Corp';
  status: 'live' | 'in_development' | 'planned' | 'blocked';
  priority: 'critical' | 'high' | 'medium' | 'low';
  dependencies: string[];
  description: string;
  owner: string;
}

const subModules: SubModule[] = [
  // DASP v2.0 Settlement Protocol
  {
    id: 'DASP-001',
    name: 'DASP v2.0 Core Settlement Engine',
    category: 'Settlement Infrastructure',
    node: 'DASP',
    status: 'in_development',
    priority: 'critical',
    dependencies: [],
    description: 'Dual-Anchor Settlement Protocol core: R3 Corda DLT, SWIFT gpi integration, India RTGS/UPI rails, Fnality wholesale settlement.',
    owner: 'Technology Team'
  },
  {
    id: 'DASP-002',
    name: 'PAPSS Integration Module',
    category: 'Settlement Infrastructure',
    node: 'DASP',
    status: 'planned',
    priority: 'high',
    dependencies: ['DASP-001'],
    description: 'Pan-African Payment and Settlement System (PAPSS) integration for intra-African leg from Somaliland/BEZ to Dubai hub.',
    owner: 'Technology Team'
  },
  {
    id: 'DASP-003',
    name: 'Fnality Wholesale Settlement Connector',
    category: 'Settlement Infrastructure',
    node: 'DASP',
    status: 'planned',
    priority: 'high',
    dependencies: ['DASP-001'],
    description: 'Fnality USC (Utility Settlement Coin) wholesale settlement integration for institutional counterparty settlement.',
    owner: 'Technology Team'
  },

  // SSTLC Modules
  {
    id: 'SSTLC-001',
    name: 'Mineral Intake & Aggregation System',
    category: 'Operations — SSTLC',
    node: 'SSTLC',
    status: 'planned',
    priority: 'critical',
    dependencies: ['SSTLC-003'],
    description: 'Intake processing, weight/grade recording, lot assignment, and chain of custody for Horn of Africa mineral suppliers.',
    owner: 'Operations — Berbera'
  },
  {
    id: 'SSTLC-002',
    name: 'Third-Party Assaying Integration',
    category: 'Operations — SSTLC',
    node: 'SSTLC',
    status: 'planned',
    priority: 'critical',
    dependencies: ['SSTLC-001'],
    description: 'Integration with OECD-certified third-party assayers for gold/silver purity verification and LBMA provenance documentation.',
    owner: 'Operations — Berbera'
  },
  {
    id: 'SSTLC-003',
    name: 'BEZ License & Compliance Module',
    category: 'Regulatory — SSTLC',
    node: 'SSTLC',
    status: 'blocked',
    priority: 'critical',
    dependencies: [],
    description: 'Berbera Economic Zone operating license. Dependent on EoI acceptance from Somaliland Ministry of Finance (Mr. Ibrahim Dhamac).',
    owner: 'Legal/Compliance'
  },

  // Dubai Hub Modules
  {
    id: 'DXB-001',
    name: 'JAFZA Free Zone Operations',
    category: 'Operations — Dubai',
    node: 'Dubai',
    status: 'in_development',
    priority: 'high',
    dependencies: [],
    description: 'Jebel Ali Free Zone Authority registration, operating license, and transshipment facility setup.',
    owner: 'Operations — Dubai'
  },
  {
    id: 'DXB-002',
    name: 'DMCC Bullion Trading Platform',
    category: 'Operations — Dubai',
    node: 'Dubai',
    status: 'planned',
    priority: 'high',
    dependencies: ['DXB-001'],
    description: 'Dubai Multi Commodities Centre membership and bullion spot/forward trading platform integration.',
    owner: 'Operations — Dubai'
  },
  {
    id: 'DXB-003',
    name: 'Value-Added Processing Facility',
    category: 'Operations — Dubai',
    node: 'Dubai',
    status: 'planned',
    priority: 'medium',
    dependencies: ['DXB-001', 'SSTLC-002'],
    description: 'Secondary processing and value addition prior to BIBC-bound shipments. LBMA Good Delivery compliance.',
    owner: 'Operations — Dubai'
  },

  // BIBC Modules
  {
    id: 'BIBC-001',
    name: 'Bihar PPP Agreement (BIPPP-2025)',
    category: 'Regulatory — BIBC',
    node: 'BIBC',
    status: 'in_development',
    priority: 'critical',
    dependencies: [],
    description: 'Bihar Industrial Policy & PPP 2025 formalization. Critical path item — deadline 2026-03-31. Meeting: Amit Kumar, Atlanta 2026-03-15.',
    owner: 'Legal/Government Affairs'
  },
  {
    id: 'BIBC-002',
    name: 'LBMA Accreditation Pathway',
    category: 'Operations — BIBC',
    node: 'BIBC',
    status: 'planned',
    priority: 'critical',
    dependencies: ['BIBC-001'],
    description: 'London Bullion Market Association Good Delivery refiner accreditation pathway for Bihar facility.',
    owner: 'Operations — Bihar'
  },
  {
    id: 'BIBC-003',
    name: 'IFSCA GIFT City Sandbox',
    category: 'Regulatory — BIBC',
    node: 'BIBC',
    status: 'planned',
    priority: 'high',
    dependencies: ['BIBC-001'],
    description: 'GIFT City International Financial Services Centre Authority regulatory sandbox application for bullion banking operations.',
    owner: 'Regulatory Affairs'
  },
  {
    id: 'BIBC-004',
    name: 'DFC VGF Documentation',
    category: 'Finance — BIBC',
    node: 'BIBC',
    status: 'live',
    priority: 'critical',
    dependencies: [],
    description: 'Bihar VGF $10M 0% loan documentation — APPROVED (EV-0088). Tranche disbursement schedule active.',
    owner: 'Finance Team'
  },

  // SSS Corporate
  {
    id: 'SSS-001',
    name: 'KYC/AML Compliance System',
    category: 'Compliance — Corporate',
    node: 'SSS-Corp',
    status: 'in_development',
    priority: 'critical',
    dependencies: [],
    description: 'FATF-compliant KYC/AML workflow management for all corridor counterparties, investors, and government entities.',
    owner: 'Compliance Team'
  },
  {
    id: 'SSS-002',
    name: 'Sanctions Screening Engine',
    category: 'Compliance — Corporate',
    node: 'SSS-Corp',
    status: 'in_development',
    priority: 'critical',
    dependencies: [],
    description: 'Real-time OFAC/EU/UN/HM Treasury sanctions screening with PEP database integration.',
    owner: 'Compliance Team'
  },
  {
    id: 'SSS-003',
    name: 'Political Risk Insurance Pipeline',
    category: 'Risk Management — Corporate',
    node: 'SSS-Corp',
    status: 'in_development',
    priority: 'high',
    dependencies: ['BIBC-001', 'SSTLC-003'],
    description: 'DFC, MIGA, and Lloyd\'s PRI application pipeline management.',
    owner: 'Risk Management'
  }
];

const statusConfig = {
  live: { icon: CheckCircle, color: 'text-green-600', bg: 'bg-green-100', label: 'Live' },
  in_development: { icon: Clock, color: 'text-blue-600', bg: 'bg-blue-100', label: 'In Development' },
  planned: { icon: Layers, color: 'text-gray-600', bg: 'bg-gray-100', label: 'Planned' },
  blocked: { icon: XCircle, color: 'text-red-600', bg: 'bg-red-100', label: 'Blocked' }
};

const priorityConfig = {
  critical: { color: 'text-red-700', bg: 'bg-red-100' },
  high: { color: 'text-orange-700', bg: 'bg-orange-100' },
  medium: { color: 'text-yellow-700', bg: 'bg-yellow-100' },
  low: { color: 'text-gray-600', bg: 'bg-gray-100' }
};

const nodeConfig = {
  SSTLC: { color: 'text-amber-700', bg: 'bg-amber-50', label: 'SSTLC (Berbera)' },
  Dubai: { color: 'text-blue-700', bg: 'bg-blue-50', label: 'Dubai Hub' },
  BIBC: { color: 'text-green-700', bg: 'bg-green-50', label: 'BIBC (Bihar)' },
  DASP: { color: 'text-purple-700', bg: 'bg-purple-50', label: 'DASP v2.0' },
  'SSS-Corp': { color: 'text-gray-700', bg: 'bg-gray-50', label: 'SSS Corporate' }
};

export default function SubModuleMatrix() {
  const [filterNode, setFilterNode] = useState<string>('all');
  const [filterStatus, setFilterStatus] = useState<string>('all');
  const [selectedModule, setSelectedModule] = useState<SubModule | null>(null);

  const filtered = subModules.filter(m => {
    if (filterNode !== 'all' && m.node !== filterNode) return false;
    if (filterStatus !== 'all' && m.status !== filterStatus) return false;
    return true;
  });

  const stats = {
    total: subModules.length,
    live: subModules.filter(m => m.status === 'live').length,
    inDev: subModules.filter(m => m.status === 'in_development').length,
    blocked: subModules.filter(m => m.status === 'blocked').length,
    critical: subModules.filter(m => m.priority === 'critical').length,
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Sub-Module Architecture Matrix</h1>
        <p className="text-sm text-gray-500 mt-1">
          Signature Sovereign Solutions LLC · AIA-SMCC Programme · Corridor Integration Status
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-5 gap-4 mb-6">
        {[
          { label: 'Total Modules', value: stats.total, color: 'text-gray-900' },
          { label: 'Live', value: stats.live, color: 'text-green-600' },
          { label: 'In Development', value: stats.inDev, color: 'text-blue-600' },
          { label: 'Blocked', value: stats.blocked, color: 'text-red-600' },
          { label: 'Critical Priority', value: stats.critical, color: 'text-orange-600' },
        ].map(s => (
          <div key={s.label} className="bg-white rounded-lg shadow-sm p-4">
            <p className="text-xs text-gray-500 uppercase tracking-wide">{s.label}</p>
            <p className={`text-3xl font-bold mt-1 ${s.color}`}>{s.value}</p>
          </div>
        ))}
      </div>

      {/* Filters */}
      <div className="flex gap-3 mb-4">
        <select
          value={filterNode}
          onChange={e => setFilterNode(e.target.value)}
          className="text-sm border border-gray-200 rounded px-3 py-1.5 bg-white"
        >
          <option value="all">All Nodes</option>
          {Object.keys(nodeConfig).map(n => (
            <option key={n} value={n}>{nodeConfig[n as keyof typeof nodeConfig].label}</option>
          ))}
        </select>
        <select
          value={filterStatus}
          onChange={e => setFilterStatus(e.target.value)}
          className="text-sm border border-gray-200 rounded px-3 py-1.5 bg-white"
        >
          <option value="all">All Statuses</option>
          <option value="live">Live</option>
          <option value="in_development">In Development</option>
          <option value="planned">Planned</option>
          <option value="blocked">Blocked</option>
        </select>
      </div>

      {/* Module Table */}
      <div className="bg-white rounded-lg shadow-sm overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-gray-50 border-b border-gray-200">
            <tr>
              <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500 uppercase">ID</th>
              <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500 uppercase">Module</th>
              <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500 uppercase">Node</th>
              <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500 uppercase">Priority</th>
              <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500 uppercase">Status</th>
              <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500 uppercase">Owner</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {filtered.map(mod => {
              const sc = statusConfig[mod.status];
              const pc = priorityConfig[mod.priority];
              const nc = nodeConfig[mod.node];
              const StatusIcon = sc.icon;
              return (
                <tr
                  key={mod.id}
                  className="hover:bg-gray-50 cursor-pointer"
                  onClick={() => setSelectedModule(mod)}
                >
                  <td className="px-4 py-3 font-mono text-xs text-gray-500">{mod.id}</td>
                  <td className="px-4 py-3">
                    <p className="font-medium text-gray-900">{mod.name}</p>
                    <p className="text-xs text-gray-400">{mod.category}</p>
                  </td>
                  <td className="px-4 py-3">
                    <span className={`px-2 py-0.5 rounded text-xs font-medium ${nc.bg} ${nc.color}`}>
                      {nc.label}
                    </span>
                  </td>
                  <td className="px-4 py-3">
                    <span className={`px-2 py-0.5 rounded-full text-xs font-medium uppercase ${pc.bg} ${pc.color}`}>
                      {mod.priority}
                    </span>
                  </td>
                  <td className="px-4 py-3">
                    <span className={`flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-medium w-fit ${sc.bg} ${sc.color}`}>
                      <StatusIcon className="w-3 h-3" />
                      {sc.label}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-xs text-gray-500">{mod.owner}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Detail Panel */}
      {selectedModule && (
        <div className="mt-4 bg-white rounded-lg shadow-sm p-5">
          <div className="flex justify-between items-start mb-3">
            <div>
              <h2 className="text-lg font-semibold text-gray-900">{selectedModule.name}</h2>
              <p className="text-xs font-mono text-gray-400">{selectedModule.id} · {selectedModule.category}</p>
            </div>
            <button onClick={() => setSelectedModule(null)} className="text-gray-400 hover:text-gray-600">✕</button>
          </div>
          <p className="text-sm text-gray-700 mb-3">{selectedModule.description}</p>
          {selectedModule.dependencies.length > 0 && (
            <div>
              <p className="text-xs text-gray-400 uppercase mb-1">Dependencies</p>
              <div className="flex flex-wrap gap-2">
                {selectedModule.dependencies.map(dep => (
                  <span key={dep} className="flex items-center gap-1 px-2 py-0.5 bg-gray-100 text-gray-600 text-xs rounded font-mono">
                    <ArrowRight className="w-3 h-3" />{dep}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      )}

      {/* Footer */}
      <p className="text-xs text-gray-400 mt-6 text-center">
        SSS Sub-Module Architecture Matrix · Signature Sovereign Solutions LLC · AIA-SMCC Corridor Integration
      </p>
    </div>
  );
}
