import React, { useState } from 'react';

// SSS Treasury Management Dashboard
// Signature Sovereign Solutions LLC | AI-SMCC / SafeTrade Program
// Q1 2026 | Cash Flow & Liquidity Management
//
// NOTE: First Republic Bank was seized by FDIC and acquired by JPMorgan Chase
// in May 2023. All escrow references use JPMorgan Chase (Escrow Services).

interface Account {
  id: string;
  name: string;
  institution: string;
  type: string;
  currency: string;
  balance: number;
  purpose: string;
  status: 'active' | 'pending' | 'restricted';
  lastUpdated: string;
}

interface Transaction {
  id: string;
  date: string;
  description: string;
  amount: number;
  type: 'credit' | 'debit';
  account: string;
  category: string;
}

const accounts: Account[] = [
  {
    id: 'ACC-2026-001',
    name: 'SSS Operating Account',
    institution: 'Citibank N.A.',
    type: 'Business Checking',
    currency: 'USD',
    balance: 485000,
    purpose: 'Day-to-day programme operations',
    status: 'active',
    lastUpdated: '2026-03-15',
  },
  {
    id: 'ACC-2026-002',
    name: 'Investor Escrow Account',
    institution: 'JPMorgan Chase (Escrow Services)',
    type: 'Escrow — Reg D 506(c)',
    currency: 'USD',
    balance: 2750000,
    purpose: 'Reg D 506(c) investor subscription funds held in escrow pending closing',
    status: 'active',
    lastUpdated: '2026-03-10',
  },
  {
    id: 'ACC-2026-003',
    name: 'Bihar Capex Reserve',
    institution: 'HDFC Bank (India)',
    type: 'Business Savings',
    currency: 'USD',
    balance: 850000,
    purpose: 'Bihar refinery capital expenditure reserve — BIPPP-2025',
    status: 'pending',
    lastUpdated: '2026-02-28',
  },
  {
    id: 'ACC-2026-004',
    name: 'Corridor Operations Reserve',
    institution: 'Institutional Bank (TBD)',
    type: 'Reserve Account',
    currency: 'USD',
    balance: 320000,
    purpose: 'Multi-corridor operational liquidity reserve',
    status: 'pending',
    lastUpdated: '2026-03-01',
  },
];

const transactions: Transaction[] = [
  {
    id: 'TXN-2026-001',
    date: '2026-03-15',
    description: 'Investor subscription — Meridian Capital Partners LP',
    amount: 500000,
    type: 'credit',
    account: 'ACC-2026-002',
    category: 'Investment',
  },
  {
    id: 'TXN-2026-002',
    date: '2026-03-10',
    description: 'Legal fees — Entity cascade formation (Q1 2026)',
    amount: 45000,
    type: 'debit',
    account: 'ACC-2026-001',
    category: 'Legal',
  },
  {
    id: 'TXN-2026-003',
    date: '2026-03-05',
    description: 'Investor subscription — Bihar Industrial Investment Trust',
    amount: 750000,
    type: 'credit',
    account: 'ACC-2026-002',
    category: 'Investment',
  },
  {
    id: 'TXN-2026-004',
    date: '2026-02-28',
    description: 'Bihar Capex Reserve — initial transfer',
    amount: 850000,
    type: 'credit',
    account: 'ACC-2026-003',
    category: 'Capital Allocation',
  },
  {
    id: 'TXN-2026-005',
    date: '2026-02-20',
    description: 'Compliance & KYC platform fees — Q1 2026',
    amount: 12500,
    type: 'debit',
    account: 'ACC-2026-001',
    category: 'Compliance',
  },
  {
    id: 'TXN-2026-006',
    date: '2026-02-15',
    description: 'Investor subscription — Gulf Strategic Investment Fund (partial)',
    amount: 1500000,
    type: 'credit',
    account: 'ACC-2026-002',
    category: 'Investment',
  },
];

const fmt = (n: number): string =>
  n >= 1_000_000
    ? `$${(n / 1_000_000).toFixed(2)}M`
    : `$${n.toLocaleString('en-US')}`;

export default function SSSTreasuryManagement() {
  const [selectedAccount, setSelectedAccount] = useState<string | null>(null);

  const totalBalance = accounts.reduce((sum, a) => sum + a.balance, 0);
  const escrowBalance = accounts
    .filter((a) => a.type.includes('Escrow'))
    .reduce((sum, a) => sum + a.balance, 0);
  const operatingBalance = accounts.find((a) => a.id === 'ACC-2026-001')?.balance ?? 0;

  const accountTransactions = selectedAccount
    ? transactions.filter((t) => t.account === selectedAccount)
    : transactions;

  return (
    <div className="min-h-screen bg-slate-900 text-white p-6">
      {/* Header */}
      <div className="mb-8">
        <div className="text-amber-400 text-xs tracking-widest uppercase mb-2">
          Signature Sovereign Solutions LLC · SafeTrade Program
        </div>
        <h1 className="text-2xl font-light text-white mb-1">
          Treasury Management
        </h1>
        <p className="text-slate-400 text-sm">
          Cash Flow & Liquidity Dashboard · Q1 2026 · Prototype (Demonstration Data)
        </p>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-3 gap-4 mb-8">
        <div className="bg-slate-800 border-t-2 border-amber-500 p-4 rounded">
          <div className="text-xs text-amber-400 tracking-wider uppercase mb-2">Total Programme Balance</div>
          <div className="text-3xl font-bold">{fmt(totalBalance)}</div>
          <div className="text-slate-500 text-xs mt-1">Across all accounts</div>
        </div>
        <div className="bg-slate-800 border-t-2 border-emerald-500 p-4 rounded">
          <div className="text-xs text-amber-400 tracking-wider uppercase mb-2">Investor Escrow</div>
          <div className="text-3xl font-bold">{fmt(escrowBalance)}</div>
          <div className="text-slate-500 text-xs mt-1">JPMorgan Chase (Escrow Services) · Reg D 506(c)</div>
        </div>
        <div className="bg-slate-800 border-t-2 border-blue-500 p-4 rounded">
          <div className="text-xs text-amber-400 tracking-wider uppercase mb-2">Operating Balance</div>
          <div className="text-3xl font-bold">{fmt(operatingBalance)}</div>
          <div className="text-slate-500 text-xs mt-1">Citibank N.A. · Day-to-day operations</div>
        </div>
      </div>

      {/* Accounts */}
      <div className="mb-8">
        <h2 className="text-amber-400 text-xs tracking-widest uppercase mb-4">Account Register</h2>
        <div className="grid grid-cols-2 gap-4">
          {accounts.map((acc) => (
            <div
              key={acc.id}
              onClick={() => setSelectedAccount(selectedAccount === acc.id ? null : acc.id)}
              className={`bg-slate-800 p-4 rounded cursor-pointer border ${
                selectedAccount === acc.id
                  ? 'border-amber-500'
                  : 'border-slate-700 hover:border-slate-500'
              }`}
            >
              <div className="flex justify-between items-start mb-3">
                <div>
                  <div className="text-amber-400 font-mono text-xs mb-1">{acc.id}</div>
                  <div className="font-medium">{acc.name}</div>
                  <div className="text-slate-400 text-xs">{acc.institution}</div>
                </div>
                <span
                  className={`text-xs px-2 py-0.5 rounded ${
                    acc.status === 'active'
                      ? 'bg-emerald-900 text-emerald-300'
                      : acc.status === 'pending'
                      ? 'bg-amber-900 text-amber-300'
                      : 'bg-red-900 text-red-300'
                  }`}
                >
                  {acc.status}
                </span>
              </div>
              <div className="text-2xl font-bold mb-1">{fmt(acc.balance)}</div>
              <div className="text-slate-500 text-xs">{acc.type}</div>
              <div className="text-slate-400 text-xs mt-2">{acc.purpose}</div>
              <div className="text-slate-600 text-xs mt-2">Updated: {acc.lastUpdated}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Transactions */}
      <div>
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-amber-400 text-xs tracking-widest uppercase">
            {selectedAccount ? `Transactions — ${selectedAccount}` : 'All Recent Transactions'}
          </h2>
          {selectedAccount && (
            <button
              onClick={() => setSelectedAccount(null)}
              className="text-slate-400 text-xs hover:text-white"
            >
              Show All
            </button>
          )}
        </div>
        <div className="bg-slate-800 rounded overflow-hidden">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-slate-700">
                <th className="text-left px-4 py-3 text-amber-400 text-xs tracking-wider uppercase">ID</th>
                <th className="text-left px-4 py-3 text-amber-400 text-xs tracking-wider uppercase">Date</th>
                <th className="text-left px-4 py-3 text-amber-400 text-xs tracking-wider uppercase">Description</th>
                <th className="text-left px-4 py-3 text-amber-400 text-xs tracking-wider uppercase">Category</th>
                <th className="text-right px-4 py-3 text-amber-400 text-xs tracking-wider uppercase">Amount</th>
              </tr>
            </thead>
            <tbody>
              {accountTransactions.map((txn) => (
                <tr key={txn.id} className="border-t border-slate-700">
                  <td className="px-4 py-3 text-amber-400 font-mono text-xs">{txn.id}</td>
                  <td className="px-4 py-3 text-slate-400 text-xs">{txn.date}</td>
                  <td className="px-4 py-3">{txn.description}</td>
                  <td className="px-4 py-3 text-slate-400 text-xs">{txn.category}</td>
                  <td
                    className={`px-4 py-3 text-right font-mono ${
                      txn.type === 'credit' ? 'text-emerald-400' : 'text-red-400'
                    }`}
                  >
                    {txn.type === 'credit' ? '+' : '-'}{fmt(txn.amount)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Escrow Note */}
      <div className="mt-6 bg-slate-800 border border-amber-500/20 rounded p-4 text-xs text-slate-400">
        <span className="text-amber-400 font-bold">Escrow Note:</span> Investor subscription funds are held in escrow at{' '}
        <strong className="text-white">JPMorgan Chase (Escrow Services)</strong> pending Reg D 506(c) offering close. Funds are not accessible to the issuer until closing conditions are satisfied. Previous escrow provider references to First Republic Bank have been updated — First Republic Bank was seized by the FDIC and acquired by JPMorgan Chase in May 2023.
      </div>

      {/* Footer */}
      <div className="mt-8 text-slate-600 text-xs text-center">
        Signature Sovereign Solutions LLC · AI-SMCC / SafeTrade Program · Q1 2026 · Prototype Dashboard (Demonstration Data Only)
      </div>
    </div>
  );
}
