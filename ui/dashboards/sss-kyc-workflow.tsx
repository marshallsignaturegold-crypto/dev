import React, { useState } from 'react';
import { CheckCircle, Clock, AlertTriangle, XCircle, User, Building, FileText, Shield } from 'lucide-react';

// Signature Sovereign Solutions LLC — KYC/AML Workflow Dashboard
// Programme: AIA-SMCC (Afro-Indian Strategic Minerals & Capital Corridor)
// Entity: Signature Sovereign Solutions LLC
// Leadership: Marshall W. Morrison, Co-Founder & Chief Operating Officer
// Data as of Q1 2026 (scenario)

interface KYCEntity {
  id: string;
  name: string;
  type: 'individual' | 'corporate' | 'government';
  jurisdiction: string;
  tier: 'standard' | 'enhanced' | 'simplified';
  status: 'approved' | 'pending' | 'review' | 'rejected' | 'expired';
  riskLevel: 'low' | 'medium' | 'high' | 'critical';
  lastUpdate: string;
  assignedTo: string;
  documents: string[];
  notes: string;
}

const kycEntities: KYCEntity[] = [
  {
    id: 'KYC-001',
    name: 'Bihar Infrastructure Development Authority',
    type: 'government',
    jurisdiction: 'India',
    tier: 'simplified',
    status: 'approved',
    riskLevel: 'low',
    lastUpdate: '2026-03-10',
    assignedTo: 'Compliance Team',
    documents: ['Government charter', 'Authorization letter', 'Signatory verification'],
    notes: 'Sovereign counterparty — Bihar PPP anchor entity. Enhanced due diligence waived per sovereign exemption.'
  },
  {
    id: 'KYC-002',
    name: 'JAFZA Free Zone Authority',
    type: 'government',
    jurisdiction: 'UAE',
    tier: 'simplified',
    status: 'approved',
    riskLevel: 'low',
    lastUpdate: '2026-03-11',
    assignedTo: 'Compliance Team',
    documents: ['Free zone license', 'MOU draft', 'Contact verification'],
    notes: 'Jebel Ali Free Zone Authority — Dubai transshipment hub regulatory counterparty.'
  },
  {
    id: 'KYC-003',
    name: 'Somaliland Ministry of Finance',
    type: 'government',
    jurisdiction: 'Somaliland',
    tier: 'enhanced',
    status: 'pending',
    riskLevel: 'medium',
    lastUpdate: '2026-03-12',
    assignedTo: 'Senior Compliance Officer',
    documents: ['EoI letter', 'Contact verification — Mr. Ibrahim Dhamac', 'Jurisdiction analysis'],
    notes: 'Somaliland is an unrecognized territory — enhanced due diligence required. FATF greylist monitoring active.'
  },
  {
    id: 'KYC-004',
    name: 'Amit Kumar (Bihar Govt. Representative)',
    type: 'individual',
    jurisdiction: 'India',
    tier: 'enhanced',
    status: 'review',
    riskLevel: 'medium',
    lastUpdate: '2026-03-08',
    assignedTo: 'Senior Compliance Officer',
    documents: ['Government ID', 'Appointment letter', 'PEP screening'],
    notes: 'Politically Exposed Person (PEP) — Bihar state government representative. Atlanta meeting scheduled 2026-03-15.'
  },
  {
    id: 'KYC-005',
    name: 'Institutional Investor — Accredited Entity A',
    type: 'corporate',
    jurisdiction: 'United States',
    tier: 'standard',
    status: 'approved',
    riskLevel: 'low',
    lastUpdate: '2026-03-13',
    assignedTo: 'Compliance Team',
    documents: ['SEC accreditation', 'Certificate of formation', 'Beneficial ownership declaration', 'W-9'],
    notes: 'Accredited institutional investor — Series B participation. FINRA cross-reference completed.'
  }
];

const statusConfig = {
  approved: { icon: CheckCircle, color: 'text-green-600', bg: 'bg-green-50', label: 'Approved' },
  pending: { icon: Clock, color: 'text-yellow-600', bg: 'bg-yellow-50', label: 'Pending' },
  review: { icon: AlertTriangle, color: 'text-orange-600', bg: 'bg-orange-50', label: 'Under Review' },
  rejected: { icon: XCircle, color: 'text-red-600', bg: 'bg-red-50', label: 'Rejected' },
  expired: { icon: XCircle, color: 'text-gray-600', bg: 'bg-gray-50', label: 'Expired' }
};

const riskConfig = {
  low: { color: 'text-green-700', bg: 'bg-green-100' },
  medium: { color: 'text-yellow-700', bg: 'bg-yellow-100' },
  high: { color: 'text-orange-700', bg: 'bg-orange-100' },
  critical: { color: 'text-red-700', bg: 'bg-red-100' }
};

export default function KYCWorkflowDashboard() {
  const [selectedEntity, setSelectedEntity] = useState<KYCEntity | null>(null);
  const [filterStatus, setFilterStatus] = useState<string>('all');
  const [filterRisk, setFilterRisk] = useState<string>('all');

  const filtered = kycEntities.filter(e => {
    if (filterStatus !== 'all' && e.status !== filterStatus) return false;
    if (filterRisk !== 'all' && e.riskLevel !== filterRisk) return false;
    return true;
  });

  const stats = {
    total: kycEntities.length,
    approved: kycEntities.filter(e => e.status === 'approved').length,
    pending: kycEntities.filter(e => e.status === 'pending').length,
    review: kycEntities.filter(e => e.status === 'review').length,
  };

  const typeIcon = (type: KYCEntity['type']) => {
    if (type === 'individual') return <User className="w-4 h-4" />;
    if (type === 'government') return <Shield className="w-4 h-4" />;
    return <Building className="w-4 h-4" />;
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">KYC / AML Compliance Workflow</h1>
        <p className="text-sm text-gray-500 mt-1">
          Signature Sovereign Solutions LLC · AIA-SMCC Programme · Q1 2026 (scenario)
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-4 gap-4 mb-6">
        {[
          { label: 'Total Entities', value: stats.total, color: 'text-gray-900' },
          { label: 'Approved', value: stats.approved, color: 'text-green-600' },
          { label: 'Pending', value: stats.pending, color: 'text-yellow-600' },
          { label: 'Under Review', value: stats.review, color: 'text-orange-600' },
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
          value={filterStatus}
          onChange={e => setFilterStatus(e.target.value)}
          className="text-sm border border-gray-200 rounded px-3 py-1.5 bg-white"
        >
          <option value="all">All Statuses</option>
          <option value="approved">Approved</option>
          <option value="pending">Pending</option>
          <option value="review">Under Review</option>
          <option value="rejected">Rejected</option>
        </select>
        <select
          value={filterRisk}
          onChange={e => setFilterRisk(e.target.value)}
          className="text-sm border border-gray-200 rounded px-3 py-1.5 bg-white"
        >
          <option value="all">All Risk Levels</option>
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
          <option value="critical">Critical</option>
        </select>
      </div>

      {/* Entity Table */}
      <div className="bg-white rounded-lg shadow-sm overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-gray-50 border-b border-gray-200">
            <tr>
              <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500 uppercase">ID</th>
              <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500 uppercase">Entity</th>
              <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500 uppercase">Jurisdiction</th>
              <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500 uppercase">Tier</th>
              <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500 uppercase">Risk</th>
              <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500 uppercase">Status</th>
              <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500 uppercase">Last Updated</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {filtered.map(entity => {
              const sc = statusConfig[entity.status];
              const rc = riskConfig[entity.riskLevel];
              const StatusIcon = sc.icon;
              return (
                <tr
                  key={entity.id}
                  className="hover:bg-gray-50 cursor-pointer"
                  onClick={() => setSelectedEntity(entity)}
                >
                  <td className="px-4 py-3 font-mono text-xs text-gray-500">{entity.id}</td>
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-2">
                      {typeIcon(entity.type)}
                      <span className="font-medium text-gray-900">{entity.name}</span>
                    </div>
                  </td>
                  <td className="px-4 py-3 text-gray-600">{entity.jurisdiction}</td>
                  <td className="px-4 py-3">
                    <span className="capitalize text-gray-600">{entity.tier}</span>
                  </td>
                  <td className="px-4 py-3">
                    <span className={`px-2 py-0.5 rounded-full text-xs font-medium uppercase ${rc.bg} ${rc.color}`}>
                      {entity.riskLevel}
                    </span>
                  </td>
                  <td className="px-4 py-3">
                    <span className={`flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-medium ${sc.bg} ${sc.color}`}>
                      <StatusIcon className="w-3 h-3" />
                      {sc.label}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-gray-500 text-xs">{entity.lastUpdate}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Detail Panel */}
      {selectedEntity && (
        <div className="mt-6 bg-white rounded-lg shadow-sm p-5">
          <div className="flex justify-between items-start mb-4">
            <h2 className="text-lg font-semibold text-gray-900">{selectedEntity.name}</h2>
            <button onClick={() => setSelectedEntity(null)} className="text-gray-400 hover:text-gray-600">✕</button>
          </div>
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <p className="text-xs text-gray-500 uppercase mb-1">Documents Required</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700">
                {selectedEntity.documents.map(d => <li key={d}>{d}</li>)}
              </ul>
            </div>
            <div>
              <p className="text-xs text-gray-500 uppercase mb-1">Compliance Notes</p>
              <p className="text-gray-700">{selectedEntity.notes}</p>
              <p className="text-xs text-gray-400 mt-2">Assigned to: {selectedEntity.assignedTo}</p>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <p className="text-xs text-gray-400 mt-6 text-center">
        SSS KYC/AML Workflow · Signature Sovereign Solutions LLC · Data as of Q1 2026 (scenario)
      </p>
    </div>
  );
}
