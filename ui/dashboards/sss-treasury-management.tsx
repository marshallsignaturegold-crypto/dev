import React, { useState } from 'react';
import { DollarSign, TrendingUp, ArrowUpRight, ArrowDownLeft, Building, CreditCard, RefreshCw } from 'lucide-react';

// Signature Sovereign Solutions LLC — Treasury Management Dashboard
// Programme: AIA-SMCC (Afro-Indian Strategic Minerals & Capital Corridor)
// Entity: Signature Sovereign Solutions LLC
// Leadership: Marshall W. Morrison, Co-Founder & Chief Operating Officer
// Data as of Q1 2026 (scenario)
// NOTE: First Republic Bank was seized by FDIC on May 1, 2023, and acquired by JPMorgan Chase.
//       All accounts previously attributed to First Republic Bank are now held at JPMorgan Chase.

interface Account {
  id: string;
  name: string;
  bank: string;
  accountType: string;
  currency: string;
  balance: number;
  available: number;
  status: 'active' | 'pending' | 'frozen';
}

interface Transaction {
  id: string;
  date: string;
  description: string;
  amount: number;
  currency: string;
  type: 'credit' | 'debit';
  account: string;
  reference: string;
  status: 'settled' | 'pending' | 'failed';
}

interface BankRelationship {
  bank: string;
  relationship: string;
  services: string[];
  status: 'active' | 'pending' | 'inactive';
  contact: string;
}

const accounts: Account[] = [
  {
    id: 'operating',
    name: 'Primary Operating',
    bank: 'JPMorgan Chase',
    accountType: 'Business Checking',
    currency: 'USD',
    balance: 4250000,
    available: 4250000,
    status: 'active'
  },
  {
    id: 'escrow',
    name: 'Investor Escrow',
    bank: 'JPMorgan Chase',
    accountType: 'Escrow / Trust',
    currency: 'USD',
    balance: 12500000,
    available: 0,
    status: 'active'
  },
  {
    id: 'fx-uae',
    name: 'FX / UAE Operations',
    bank: 'Emirates NBD',
    accountType: 'Multi-currency',
    currency: 'AED',
    balance: 3800000,
    available: 3800000,
    status: 'active'
  },
  {
    id: 'india-ops',
    name: 'India Operations',
    bank: 'HDFC Bank',
    accountType: 'Current Account',
    currency: 'INR',
    balance: 98000000,
    available: 95000000,
    status: 'pending'
  }
];

const transactions: Transaction[] = [
  {
    id: 'TXN-2026-001',
    date: '2026-03-15',
    description: 'DFC VGF Tranche 1 — Bihar BIBC',
    amount: 2500000,
    currency: 'USD',
    type: 'credit',
    account: 'operating',
    reference: 'EV-0088 / DFC-VGF-001',
    status: 'settled'
  },
  {
    id: 'TXN-2026-002',
    date: '2026-03-18',
    description: 'Legal — Master Institutional Document v12.0 preparation',
    amount: 45000,
    currency: 'USD',
    type: 'debit',
    account: 'operating',
    reference: 'DOC-DR-001',
    status: 'settled'
  },
  {
    id: 'TXN-2026-003',
    date: '2026-03-20',
    description: 'Investor Escrow Deposit — Series B Tranche 1',
    amount: 5000000,
    currency: 'USD',
    type: 'credit',
    account: 'escrow',
    reference: 'SH-0012 / ESCROW-001',
    status: 'settled'
  },
  {
    id: 'TXN-2026-004',
    date: '2026-03-22',
    description: 'JAFZA Registration Fees — Dubai Hub',
    amount: 18500,
    currency: 'USD',
    type: 'debit',
    account: 'operating',
    reference: 'JAFZA-2026-REG',
    status: 'pending'
  },
  {
    id: 'TXN-2026-005',
    date: '2026-04-01',
    description: 'DFC VGF Tranche 2 — Bihar BIBC (projected)',
    amount: 2500000,
    currency: 'USD',
    type: 'credit',
    account: 'operating',
    reference: 'EV-0088 / DFC-VGF-002',
    status: 'pending'
  },
  {
    id: 'TXN-2026-006',
    date: '2026-04-05',
    description: 'DASP v2.0 Technology Development',
    amount: 350000,
    currency: 'USD',
    type: 'debit',
    account: 'operating',
    reference: 'TECH-DASP-001',
    status: 'pending'
  }
];

// Bank relationships — JPMorgan Chase is primary after First Republic Bank
// was seized by FDIC on May 1, 2023 and acquired by JPMorgan Chase.
const bankRelationships: BankRelationship[] = [
  {
    bank: 'JPMorgan Chase',
    relationship: 'Primary + Escrow',
    services: ['Operating Accounts', 'Wire Transfers', 'FX', 'Escrow Services', 'Investor Funds'],
    status: 'active',
    contact: 'Relationship Manager, VP'
  },
  {
    bank: 'Emirates NBD',
    relationship: 'UAE Operations',
    services: ['Multi-currency Accounts', 'Trade Finance', 'FX'],
    status: 'active',
    contact: 'Corporate Banking, UAE'
  },
  {
    bank: 'HDFC Bank',
    relationship: 'India Operations',
    services: ['INR Current Account', 'RTGS/NEFT', 'Trade Finance'],
    status: 'pending',
    contact: 'Corporate Banking, Bihar Branch'
  },
  {
    bank: 'Standard Chartered',
    relationship: 'Correspondent Banking',
    services: ['USD Correspondent', 'SWIFT gpi', 'Cross-border Settlements'],
    status: 'active',
    contact: 'Transaction Banking'
  }
];

const fmt = (v: number, currency: string) => {
  if (currency === 'INR') return `₹${(v / 10000000).toFixed(2)}Cr`;
  if (currency === 'AED') return `AED ${(v / 1000000).toFixed(2)}M`;
  return `$${(v / 1000000).toFixed(2)}M`;
};

export default function TreasuryManagementDashboard() {
  const [activeTab, setActiveTab] = useState<'accounts' | 'transactions' | 'banking'>('accounts');

  const totalUSD = accounts
    .filter(a => a.currency === 'USD')
    .reduce((s, a) => s + a.balance, 0);

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Treasury Management</h1>
        <p className="text-sm text-gray-500 mt-1">
          Signature Sovereign Solutions LLC · AIA-SMCC Programme · Q1 2026 (scenario)
        </p>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-4 gap-4 mb-6">
        <div className="bg-white rounded-lg shadow-sm p-4">
          <p className="text-xs text-gray-500 uppercase tracking-wide">Total USD (Operating)</p>
          <p className="text-2xl font-bold text-gray-900 mt-1">${(totalUSD / 1000000).toFixed(1)}M</p>
        </div>
        <div className="bg-white rounded-lg shadow-sm p-4">
          <p className="text-xs text-gray-500 uppercase tracking-wide">Escrow Held</p>
          <p className="text-2xl font-bold text-blue-600 mt-1">$12.5M</p>
        </div>
        <div className="bg-white rounded-lg shadow-sm p-4">
          <p className="text-xs text-gray-500 uppercase tracking-wide">Active Accounts</p>
          <p className="text-2xl font-bold text-green-600 mt-1">{accounts.filter(a => a.status === 'active').length}</p>
        </div>
        <div className="bg-white rounded-lg shadow-sm p-4">
          <p className="text-xs text-gray-500 uppercase tracking-wide">Pending Transactions</p>
          <p className="text-2xl font-bold text-yellow-600 mt-1">{transactions.filter(t => t.status === 'pending').length}</p>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex gap-1 bg-gray-200 rounded-lg p-1 w-fit mb-6">
        {(['accounts', 'transactions', 'banking'] as const).map(tab => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-1.5 rounded text-sm font-medium capitalize transition-colors ${
              activeTab === tab ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-600 hover:text-gray-800'
            }`}
          >
            {tab === 'banking' ? 'Bank Relationships' : tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </div>

      {/* Accounts Tab */}
      {activeTab === 'accounts' && (
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          <table className="w-full text-sm">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500 uppercase">Account</th>
                <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500 uppercase">Bank</th>
                <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500 uppercase">Type</th>
                <th className="text-right px-4 py-3 text-xs font-semibold text-gray-500 uppercase">Balance</th>
                <th className="text-right px-4 py-3 text-xs font-semibold text-gray-500 uppercase">Available</th>
                <th className="text-center px-4 py-3 text-xs font-semibold text-gray-500 uppercase">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {accounts.map(acct => (
                <tr key={acct.id} className="hover:bg-gray-50">
                  <td className="px-4 py-3 font-medium text-gray-900">{acct.name}</td>
                  <td className="px-4 py-3 text-gray-600">{acct.bank}</td>
                  <td className="px-4 py-3 text-gray-500">{acct.accountType}</td>
                  <td className="px-4 py-3 text-right font-mono text-gray-900">{fmt(acct.balance, acct.currency)}</td>
                  <td className="px-4 py-3 text-right font-mono text-gray-600">{fmt(acct.available, acct.currency)}</td>
                  <td className="px-4 py-3 text-center">
                    <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${
                      acct.status === 'active' ? 'bg-green-100 text-green-700' :
                      acct.status === 'pending' ? 'bg-yellow-100 text-yellow-700' :
                      'bg-red-100 text-red-700'
                    }`}>{acct.status}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Transactions Tab */}
      {activeTab === 'transactions' && (
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          <table className="w-full text-sm">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500 uppercase">Date</th>
                <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500 uppercase">Description</th>
                <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500 uppercase">Reference</th>
                <th className="text-right px-4 py-3 text-xs font-semibold text-gray-500 uppercase">Amount</th>
                <th className="text-center px-4 py-3 text-xs font-semibold text-gray-500 uppercase">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {transactions.map(txn => (
                <tr key={txn.id} className="hover:bg-gray-50">
                  <td className="px-4 py-3 text-gray-500 text-xs font-mono">{txn.date}</td>
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-2">
                      {txn.type === 'credit'
                        ? <ArrowDownLeft className="w-4 h-4 text-green-500" />
                        : <ArrowUpRight className="w-4 h-4 text-red-500" />}
                      <span className="text-gray-900">{txn.description}</span>
                    </div>
                  </td>
                  <td className="px-4 py-3 text-xs font-mono text-gray-400">{txn.reference}</td>
                  <td className={`px-4 py-3 text-right font-mono font-medium ${
                    txn.type === 'credit' ? 'text-green-600' : 'text-red-600'
                  }`}>
                    {txn.type === 'credit' ? '+' : '-'}${txn.amount.toLocaleString()}
                  </td>
                  <td className="px-4 py-3 text-center">
                    <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${
                      txn.status === 'settled' ? 'bg-green-100 text-green-700' :
                      txn.status === 'pending' ? 'bg-yellow-100 text-yellow-700' :
                      'bg-red-100 text-red-700'
                    }`}>{txn.status}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Banking Tab */}
      {activeTab === 'banking' && (
        <div className="grid grid-cols-2 gap-4">
          {bankRelationships.map(rel => (
            <div key={rel.bank} className="bg-white rounded-lg shadow-sm p-4">
              <div className="flex justify-between items-start mb-3">
                <div className="flex items-center gap-2">
                  <Building className="w-5 h-5 text-blue-600" />
                  <div>
                    <p className="font-semibold text-gray-900">{rel.bank}</p>
                    <p className="text-xs text-gray-500">{rel.relationship}</p>
                  </div>
                </div>
                <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${
                  rel.status === 'active' ? 'bg-green-100 text-green-700' :
                  rel.status === 'pending' ? 'bg-yellow-100 text-yellow-700' :
                  'bg-gray-100 text-gray-500'
                }`}>{rel.status}</span>
              </div>
              <div className="mb-2">
                <p className="text-xs text-gray-400 uppercase mb-1">Services</p>
                <div className="flex flex-wrap gap-1">
                  {rel.services.map(s => (
                    <span key={s} className="px-2 py-0.5 bg-blue-50 text-blue-700 text-xs rounded">{s}</span>
                  ))}
                </div>
              </div>
              <p className="text-xs text-gray-500">Contact: {rel.contact}</p>
            </div>
          ))}
        </div>
      )}

      {/* Footer */}
      <p className="text-xs text-gray-400 mt-6 text-center">
        SSS Treasury · Cash & Liquidity Management · Data as of Q1 2026 (scenario)
      </p>
    </div>
  );
}
