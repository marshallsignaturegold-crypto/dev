// UI-003: SSS Treasury Management Dashboard
// SignatureSovereign SafeTrade Program — Signature Sovereign Solutions LLC
// Co-Founder & Chief Operating Officer: Marshall W. Morrison
// NOTE: First Republic Bank was seized by FDIC May 2023 (acquired by JPMorgan Chase).
//       All escrow functions are attributed to JPMorgan Chase (Escrow Services).

import { useState } from "react";

interface Account {
  id: string;
  name: string;
  bank: string;
  type: string;
  currency: string;
  balance: number;
  status: string;
}

interface Payment {
  id: string;
  description: string;
  amount: number;
  currency: string;
  date: string;
  status: string;
  category: string;
}

interface CashFlowMonth {
  month: string;
  inflow: number;
  outflow: number;
}

const accounts: Account[] = [
  {
    id: "ACC-001",
    name: "Operating Account",
    bank: "JPMorgan Chase",
    type: "Checking",
    currency: "USD",
    balance: 2_850_000,
    status: "Active",
  },
  {
    id: "ACC-002",
    name: "Investor Escrow",
    bank: "JPMorgan Chase (Escrow Services)",
    type: "Escrow",
    currency: "USD",
    balance: 12_500_000,
    status: "Active",
  },
  {
    id: "ACC-003",
    name: "Corridor Reserve",
    bank: "Citibank International",
    type: "Reserve",
    currency: "USD",
    balance: 5_000_000,
    status: "Active",
  },
  {
    id: "ACC-004",
    name: "Gold Settlement Account",
    bank: "LBMA Clearing Member",
    type: "Settlement",
    currency: "XAU",
    balance: 250.5,
    status: "Active",
  },
  {
    id: "ACC-005",
    name: "Bihar Operations Fund",
    bank: "State Bank of India",
    type: "Checking",
    currency: "INR",
    balance: 45_000_000,
    status: "Active",
  },
];

const bankRelationships = [
  { bank: "JPMorgan Chase", role: "Primary Operating Bank + Escrow Services", status: "Active" },
  { bank: "Citibank International", role: "Corridor Reserve + International Transfers", status: "Active" },
  { bank: "LBMA Clearing Member", role: "Gold Settlement", status: "Active" },
  { bank: "State Bank of India", role: "Bihar Operations", status: "Active" },
  { bank: "Bank of Somaliland", role: "Berbera BEZ Operations", status: "Preliminary" },
];

const recentPayments: Payment[] = [
  {
    id: "PAY-001",
    description: "Legal — Entity Formation (Delaware)",
    amount: 45_000,
    currency: "USD",
    date: "2026-03-15",
    status: "Completed",
    category: "Legal",
  },
  {
    id: "PAY-002",
    description: "DFC PRI Application Fee",
    amount: 25_000,
    currency: "USD",
    date: "2026-03-20",
    status: "Completed",
    category: "Regulatory",
  },
  {
    id: "PAY-003",
    description: "R3 Corda Pilot Programme Fee",
    amount: 150_000,
    currency: "USD",
    date: "2026-03-25",
    status: "Pending",
    category: "Technology",
  },
  {
    id: "PAY-004",
    description: "Bihar BIPPP-2025 Consultancy",
    amount: 35_000,
    currency: "USD",
    date: "2026-03-27",
    status: "Pending",
    category: "Consultancy",
  },
  {
    id: "PAY-005",
    description: "MIGA Engagement Fee",
    amount: 20_000,
    currency: "USD",
    date: "2026-04-05",
    status: "Scheduled",
    category: "Regulatory",
  },
];

const cashFlow: CashFlowMonth[] = [
  { month: "Jan 2026", inflow: 3_200_000, outflow: 850_000 },
  { month: "Feb 2026", inflow: 2_800_000, outflow: 1_200_000 },
  { month: "Mar 2026", inflow: 4_500_000, outflow: 2_100_000 },
  { month: "Apr 2026", inflow: 5_200_000, outflow: 1_800_000 },
  { month: "May 2026", inflow: 6_100_000, outflow: 2_400_000 },
  { month: "Jun 2026", inflow: 7_500_000, outflow: 3_200_000 },
];

const paymentStatusColors: Record<string, string> = {
  Completed: "text-emerald-400",
  Pending: "text-amber-400",
  Scheduled: "text-slate-400",
};

const fmt = (n: number, currency = "USD") => {
  if (currency === "XAU") return `${n.toFixed(2)} oz`;
  if (currency === "INR") return `₹${(n / 100_000).toFixed(1)}L`;
  return `$${(n / 1_000_000).toFixed(2)}M`;
};

export default function SSSTreasuryManagement() {
  const [tab, setTab] = useState<"accounts" | "payments" | "cashflow" | "banking">("accounts");

  const totalUSD = accounts
    .filter((a) => a.currency === "USD")
    .reduce((sum, a) => sum + a.balance, 0);

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
        <h1 className="text-2xl font-bold text-amber-400">Treasury Management</h1>
        <p className="text-slate-400 text-sm mt-1">
          UI-003 — Cash flow, liquidity, and banking relationship management
        </p>
      </div>

      {/* Summary KPIs */}
      <div className="grid grid-cols-4 gap-4 mb-6">
        <div className="bg-slate-800 rounded-lg p-4 border border-slate-700">
          <div className="text-2xl font-bold text-amber-400">{fmt(totalUSD)}</div>
          <div className="text-slate-400 text-sm">Total USD Liquidity</div>
        </div>
        <div className="bg-slate-800 rounded-lg p-4 border border-slate-700">
          <div className="text-2xl font-bold text-amber-400">
            {accounts.find((a) => a.id === "ACC-004")?.balance.toFixed(2)} oz
          </div>
          <div className="text-slate-400 text-sm">Gold Holdings (XAU)</div>
        </div>
        <div className="bg-slate-800 rounded-lg p-4 border border-slate-700">
          <div className="text-2xl font-bold text-emerald-400">{accounts.filter((a) => a.status === "Active").length}</div>
          <div className="text-slate-400 text-sm">Active Accounts</div>
        </div>
        <div className="bg-slate-800 rounded-lg p-4 border border-slate-700">
          <div className="text-2xl font-bold text-amber-400">{bankRelationships.length}</div>
          <div className="text-slate-400 text-sm">Banking Relationships</div>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex gap-2 mb-6">
        {(["accounts", "payments", "cashflow", "banking"] as const).map((t) => (
          <button
            key={t}
            onClick={() => setTab(t)}
            className={`px-4 py-2 rounded text-sm font-medium transition-colors capitalize ${
              tab === t
                ? "bg-amber-500 text-slate-900"
                : "bg-slate-700 text-slate-300 hover:bg-slate-600"
            }`}
          >
            {t === "cashflow" ? "Cash Flow" : t.charAt(0).toUpperCase() + t.slice(1)}
          </button>
        ))}
      </div>

      {/* Accounts Tab */}
      {tab === "accounts" && (
        <div className="bg-slate-800 rounded-lg border border-slate-700 overflow-hidden">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-slate-700">
                {["ID", "Account Name", "Bank", "Type", "Currency", "Balance", "Status"].map((h) => (
                  <th key={h} className="text-left px-4 py-3 text-slate-400 font-medium">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {accounts.map((acc) => (
                <tr key={acc.id} className="border-b border-slate-700/50 hover:bg-slate-700/30">
                  <td className="px-4 py-3 text-amber-400 font-mono">{acc.id}</td>
                  <td className="px-4 py-3 font-medium">{acc.name}</td>
                  <td className="px-4 py-3 text-slate-300">{acc.bank}</td>
                  <td className="px-4 py-3 text-slate-400">{acc.type}</td>
                  <td className="px-4 py-3 font-mono">{acc.currency}</td>
                  <td className="px-4 py-3 font-bold text-amber-400">{fmt(acc.balance, acc.currency)}</td>
                  <td className="px-4 py-3">
                    <span className="text-emerald-400 text-xs">{acc.status}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Payments Tab */}
      {tab === "payments" && (
        <div className="bg-slate-800 rounded-lg border border-slate-700 overflow-hidden">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-slate-700">
                {["ID", "Description", "Amount", "Date", "Category", "Status"].map((h) => (
                  <th key={h} className="text-left px-4 py-3 text-slate-400 font-medium">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {recentPayments.map((pay) => (
                <tr key={pay.id} className="border-b border-slate-700/50 hover:bg-slate-700/30">
                  <td className="px-4 py-3 text-amber-400 font-mono">{pay.id}</td>
                  <td className="px-4 py-3">{pay.description}</td>
                  <td className="px-4 py-3 font-bold">
                    ${pay.amount.toLocaleString()}
                  </td>
                  <td className="px-4 py-3 font-mono text-slate-400">{pay.date}</td>
                  <td className="px-4 py-3">
                    <span className="bg-slate-700 text-slate-300 text-xs px-2 py-0.5 rounded">
                      {pay.category}
                    </span>
                  </td>
                  <td className={`px-4 py-3 text-sm font-medium ${paymentStatusColors[pay.status]}`}>
                    {pay.status}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Cash Flow Tab */}
      {tab === "cashflow" && (
        <div className="bg-slate-800 rounded-lg border border-slate-700 p-6">
          <h2 className="font-semibold text-slate-200 mb-4">Cash Flow — Q1–Q2 2026</h2>
          <div className="space-y-4">
            {cashFlow.map((row) => {
              const net = row.inflow - row.outflow;
              const maxVal = Math.max(...cashFlow.map((r) => r.inflow));
              return (
                <div key={row.month} className="space-y-1">
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-400 w-24">{row.month}</span>
                    <span className="text-emerald-400">↑ {fmt(row.inflow)}</span>
                    <span className="text-red-400">↓ {fmt(row.outflow)}</span>
                    <span className={net >= 0 ? "text-amber-400 font-bold" : "text-red-400 font-bold"}>
                      Net: {fmt(net)}
                    </span>
                  </div>
                  <div className="flex gap-1 h-3">
                    <div
                      className="bg-emerald-500/60 rounded"
                      style={{ width: `${(row.inflow / maxVal) * 100}%` }}
                    />
                  </div>
                  <div className="flex gap-1 h-2">
                    <div
                      className="bg-red-500/40 rounded"
                      style={{ width: `${(row.outflow / maxVal) * 100}%` }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
          <p className="text-xs text-slate-500 mt-4">
            * All figures are prototype mock data. Not actual financial statements.
          </p>
        </div>
      )}

      {/* Banking Relationships Tab */}
      {tab === "banking" && (
        <div className="bg-slate-800 rounded-lg border border-slate-700 overflow-hidden">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-slate-700">
                {["Bank", "Role", "Status"].map((h) => (
                  <th key={h} className="text-left px-4 py-3 text-slate-400 font-medium">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {bankRelationships.map((rel) => (
                <tr key={rel.bank} className="border-b border-slate-700/50 hover:bg-slate-700/30">
                  <td className="px-4 py-3 font-medium text-amber-400">{rel.bank}</td>
                  <td className="px-4 py-3 text-slate-300">{rel.role}</td>
                  <td className="px-4 py-3">
                    <span
                      className={
                        rel.status === "Active"
                          ? "text-emerald-400"
                          : "text-amber-400"
                      }
                    >
                      {rel.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      <div className="mt-6 text-xs text-slate-500 text-center">
        Signature Sovereign Solutions LLC — Co-Founder & Chief Operating Officer: Marshall W. Morrison |
        SignatureSovereign SafeTrade Program | UI-003 | CONFIDENTIAL
      </div>
    </div>
  );
}
