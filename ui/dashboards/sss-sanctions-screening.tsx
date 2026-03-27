import React, { useState } from 'react';
import { Search, AlertTriangle, CheckCircle, XCircle, Clock, Shield, RefreshCw } from 'lucide-react';

// Signature Sovereign Solutions LLC — Sanctions Screening Dashboard
// Programme: AIA-SMCC (Afro-Indian Strategic Minerals & Capital Corridor)
// Entity: Signature Sovereign Solutions LLC
// Leadership: Marshall W. Morrison, Co-Founder & Chief Operating Officer
// Data as of Q1 2026 (scenario)

interface ScreeningRecord {
  id: string;
  entityName: string;
  entityType: 'individual' | 'corporate' | 'vessel' | 'government';
  listsChecked: string[];
  result: 'clear' | 'potential_match' | 'confirmed_match' | 'pending';
  riskScore: number;
  lastUpdate: string;
  analyst: string;
  notes: string;
  date: string;
}

interface WatchlistStatus {
  list: string;
  authority: string;
  lastSync: string;
  totalEntries: number;
  status: 'current' | 'updating' | 'error';
}

const screeningRecords: ScreeningRecord[] = [
  {
    id: 'SCR-2026-001',
    entityName: 'Bihar Infrastructure Development Authority',
    entityType: 'government',
    listsChecked: ['OFAC-SDN', 'OFAC-NS-ISA', 'EU-Consolidated', 'UN-Consolidated', 'HM-Treasury'],
    result: 'clear',
    riskScore: 5,
    lastUpdate: '2026-03-15',
    date: '2026-03-15',
    analyst: 'Compliance Team',
    notes: 'Bihar state government authority. Sovereign entity — no matches on any list. PEP screening for signatory personnel conducted separately (SCR-2026-004).'
  },
  {
    id: 'SCR-2026-002',
    entityName: 'JAFZA Free Zone Authority',
    entityType: 'government',
    listsChecked: ['OFAC-SDN', 'OFAC-NS-ISA', 'EU-Consolidated', 'UN-Consolidated'],
    result: 'clear',
    riskScore: 8,
    lastUpdate: '2026-03-15',
    date: '2026-03-15',
    analyst: 'Compliance Team',
    notes: 'Jebel Ali Free Zone Authority (UAE). No matches. UAE is not subject to comprehensive OFAC sanctions. UAE FATF status: monitored.'
  },
  {
    id: 'SCR-2026-003',
    entityName: 'Ibrahim Dhamac — Somaliland Ministry of Finance',
    entityType: 'individual',
    listsChecked: ['OFAC-SDN', 'OFAC-NS-ISA', 'EU-Consolidated', 'UN-Consolidated', 'HM-Treasury', 'PEP-Database'],
    result: 'potential_match',
    riskScore: 42,
    lastUpdate: '2026-03-18',
    date: '2026-03-18',
    analyst: 'Senior Compliance Officer',
    notes: 'Somaliland government official — PEP classification required. Potential name match on PEP database (different individual — disambiguation in progress). Somaliland not subject to specific UN/OFAC sanctions but Somalia comprehensive sanctions apply to Somalia-proper entities. Somaliland distinction documented.'
  },
  {
    id: 'SCR-2026-004',
    entityName: 'Amit Kumar — Bihar Government Representative',
    entityType: 'individual',
    listsChecked: ['OFAC-SDN', 'EU-Consolidated', 'UN-Consolidated', 'PEP-Database', 'India-Financial-Intelligence-Unit'],
    result: 'clear',
    riskScore: 18,
    lastUpdate: '2026-03-20',
    date: '2026-03-20',
    analyst: 'Senior Compliance Officer',
    notes: 'Bihar state government representative. PEP classification applied — state-level official. No sanctions matches. Enhanced monitoring active. Atlanta meeting 2026-03-15 documented.'
  },
  {
    id: 'SCR-2026-005',
    entityName: 'Institutional Investor — Accredited Entity A',
    entityType: 'corporate',
    listsChecked: ['OFAC-SDN', 'OFAC-NS-ISA', 'EU-Consolidated', 'UN-Consolidated', 'FinCEN-314a'],
    result: 'clear',
    riskScore: 10,
    lastUpdate: '2026-03-22',
    date: '2026-03-22',
    analyst: 'Compliance Team',
    notes: 'U.S. accredited institutional investor. FinCEN 314(a) information-sharing check completed. Beneficial ownership verified. No matches.'
  },
  {
    id: 'SCR-2026-006',
    entityName: 'Emirates NBD (UAE Banking Partner)',
    entityType: 'corporate',
    listsChecked: ['OFAC-SDN', 'OFAC-NS-ISA', 'EU-Consolidated', 'FATF-Correspondent-Risk'],
    result: 'clear',
    riskScore: 12,
    lastUpdate: '2026-03-25',
    date: '2026-03-25',
    analyst: 'Compliance Team',
    notes: 'UAE correspondent bank. FATF correspondent banking risk assessment conducted. No sanctions exposure. UAE remains under FATF enhanced follow-up monitoring.'
  }
];

const watchlists: WatchlistStatus[] = [
  { list: 'OFAC SDN List', authority: 'U.S. Treasury / OFAC', lastSync: '2026-03-27', totalEntries: 12847, status: 'current' },
  { list: 'OFAC Non-SDN ISA List', authority: 'U.S. Treasury / OFAC', lastSync: '2026-03-27', totalEntries: 1205, status: 'current' },
  { list: 'EU Consolidated Sanctions List', authority: 'European Union', lastSync: '2026-03-26', totalEntries: 4312, status: 'current' },
  { list: 'UN Consolidated List', authority: 'UN Security Council', lastSync: '2026-03-25', totalEntries: 822, status: 'current' },
  { list: 'HM Treasury Sanctions List', authority: 'UK HM Treasury / OFSI', lastSync: '2026-03-26', totalEntries: 3014, status: 'current' },
  { list: 'PEP Global Database', authority: 'Refinitiv / Dow Jones', lastSync: '2026-03-27', totalEntries: 1250000, status: 'current' },
  { list: 'FinCEN 314(a)', authority: 'U.S. FinCEN', lastSync: '2026-03-20', totalEntries: 0, status: 'current' }
];

const resultConfig = {
  clear: { icon: CheckCircle, color: 'text-green-600', bg: 'bg-green-50', label: 'Clear' },
  potential_match: { icon: AlertTriangle, color: 'text-yellow-600', bg: 'bg-yellow-50', label: 'Potential Match' },
  confirmed_match: { icon: XCircle, color: 'text-red-600', bg: 'bg-red-50', label: 'Confirmed Match' },
  pending: { icon: Clock, color: 'text-gray-600', bg: 'bg-gray-50', label: 'Pending' }
};

export default function SanctionsScreeningDashboard() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedRecord, setSelectedRecord] = useState<ScreeningRecord | null>(null);
  const [activeTab, setActiveTab] = useState<'records' | 'watchlists'>('records');

  const filtered = screeningRecords.filter(r =>
    r.entityName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    r.id.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const stats = {
    total: screeningRecords.length,
    clear: screeningRecords.filter(r => r.result === 'clear').length,
    potentialMatch: screeningRecords.filter(r => r.result === 'potential_match').length,
    pending: screeningRecords.filter(r => r.result === 'pending').length,
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Sanctions Screening System</h1>
        <p className="text-sm text-gray-500 mt-1">
          Signature Sovereign Solutions LLC · AIA-SMCC Programme · Q1 2026 (scenario)
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-4 gap-4 mb-6">
        {[
          { label: 'Total Screenings', value: stats.total, color: 'text-gray-900' },
          { label: 'Clear', value: stats.clear, color: 'text-green-600' },
          { label: 'Potential Match', value: stats.potentialMatch, color: 'text-yellow-600' },
          { label: 'Pending', value: stats.pending, color: 'text-gray-500' },
        ].map(s => (
          <div key={s.label} className="bg-white rounded-lg shadow-sm p-4">
            <p className="text-xs text-gray-500 uppercase tracking-wide">{s.label}</p>
            <p className={`text-3xl font-bold mt-1 ${s.color}`}>{s.value}</p>
          </div>
        ))}
      </div>

      {/* Tabs */}
      <div className="flex gap-1 bg-gray-200 rounded-lg p-1 w-fit mb-6">
        {(['records', 'watchlists'] as const).map(tab => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-1.5 rounded text-sm font-medium capitalize transition-colors ${
              activeTab === tab ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-600 hover:text-gray-800'
            }`}
          >
            {tab === 'watchlists' ? 'Watchlist Status' : 'Screening Records'}
          </button>
        ))}
      </div>

      {/* Records Tab */}
      {activeTab === 'records' && (
        <>
          {/* Search */}
          <div className="relative mb-4">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search by entity name or ID..."
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 text-sm border border-gray-200 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            <table className="w-full text-sm">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500 uppercase">ID</th>
                  <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500 uppercase">Entity</th>
                  <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500 uppercase">Lists Checked</th>
                  <th className="text-center px-4 py-3 text-xs font-semibold text-gray-500 uppercase">Risk Score</th>
                  <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500 uppercase">Result</th>
                  <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500 uppercase">Last Updated</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {filtered.map(record => {
                  const rc = resultConfig[record.result];
                  const ResultIcon = rc.icon;
                  return (
                    <tr
                      key={record.id}
                      className="hover:bg-gray-50 cursor-pointer"
                      onClick={() => setSelectedRecord(record)}
                    >
                      <td className="px-4 py-3 font-mono text-xs text-gray-500">{record.id}</td>
                      <td className="px-4 py-3">
                        <p className="font-medium text-gray-900">{record.entityName}</p>
                        <p className="text-xs text-gray-400 capitalize">{record.entityType}</p>
                      </td>
                      <td className="px-4 py-3">
                        <p className="text-xs text-gray-500">{record.listsChecked.length} lists</p>
                      </td>
                      <td className="px-4 py-3 text-center">
                        <span className={`text-sm font-bold ${
                          record.riskScore < 20 ? 'text-green-600' :
                          record.riskScore < 50 ? 'text-yellow-600' :
                          'text-red-600'
                        }`}>{record.riskScore}</span>
                      </td>
                      <td className="px-4 py-3">
                        <span className={`flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-medium w-fit ${rc.bg} ${rc.color}`}>
                          <ResultIcon className="w-3 h-3" />
                          {rc.label}
                        </span>
                      </td>
                      <td className="px-4 py-3 text-xs text-gray-500">{record.lastUpdate}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          {selectedRecord && (
            <div className="mt-4 bg-white rounded-lg shadow-sm p-5">
              <div className="flex justify-between items-start mb-4">
                <h2 className="text-lg font-semibold text-gray-900">{selectedRecord.entityName}</h2>
                <button onClick={() => setSelectedRecord(null)} className="text-gray-400 hover:text-gray-600">✕</button>
              </div>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="text-xs text-gray-400 uppercase mb-1">Lists Checked</p>
                  <ul className="space-y-1">
                    {selectedRecord.listsChecked.map(l => (
                      <li key={l} className="flex items-center gap-1 text-gray-700">
                        <Shield className="w-3 h-3 text-gray-400" />{l}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="text-xs text-gray-400 uppercase mb-1">Analyst Notes</p>
                  <p className="text-gray-700">{selectedRecord.notes}</p>
                  <p className="text-xs text-gray-400 mt-2">Analyst: {selectedRecord.analyst} · Date: {selectedRecord.date}</p>
                </div>
              </div>
            </div>
          )}
        </>
      )}

      {/* Watchlists Tab */}
      {activeTab === 'watchlists' && (
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          <table className="w-full text-sm">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500 uppercase">List</th>
                <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500 uppercase">Authority</th>
                <th className="text-center px-4 py-3 text-xs font-semibold text-gray-500 uppercase">Entries</th>
                <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500 uppercase">Last Sync</th>
                <th className="text-center px-4 py-3 text-xs font-semibold text-gray-500 uppercase">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {watchlists.map(wl => (
                <tr key={wl.list} className="hover:bg-gray-50">
                  <td className="px-4 py-3 font-medium text-gray-900">{wl.list}</td>
                  <td className="px-4 py-3 text-gray-600">{wl.authority}</td>
                  <td className="px-4 py-3 text-center text-gray-700">{wl.totalEntries.toLocaleString()}</td>
                  <td className="px-4 py-3 text-gray-500 text-xs font-mono">{wl.lastSync}</td>
                  <td className="px-4 py-3 text-center">
                    <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${
                      wl.status === 'current' ? 'bg-green-100 text-green-700' :
                      wl.status === 'updating' ? 'bg-yellow-100 text-yellow-700' :
                      'bg-red-100 text-red-700'
                    }`}>{wl.status}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Footer */}
      <p className="text-xs text-gray-400 mt-6 text-center">
        SSS Sanctions Screening System · Signature Sovereign Solutions LLC · Data as of Q1 2026 (scenario)
      </p>
    </div>
  );
}
