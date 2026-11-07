"use client";

import { useEffect, useState } from "react";
import { StatusBadge } from "@/components/dashboard/StatusBadge";
import { getDatabase } from "@/lib/storage";
import type { DemoDatabase } from "@/lib/types";
import { formatCurrency, formatDate } from "@/lib/utils";

export default function BillingPage() {
  const [db, setDb] = useState<DemoDatabase | null>(null);

  useEffect(() => setDb(getDatabase()), []);

  if (!db) return <p className="text-sm font-semibold text-slate-500">Loading billing...</p>;

  const paidTotal = db.invoices.filter((invoice) => invoice.status === "Paid").reduce((total, invoice) => total + invoice.amount, 0);

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold tracking-tight text-slate-950">Billing</h2>
        <p className="mt-2 text-slate-600">Manage subscription plan, invoices, and billing preferences.</p>
      </div>

      <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="rounded-3xl border border-slate-200 bg-slate-950 p-6 text-white shadow-sm">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-indigo-300">Current plan</p>
          <h3 className="mt-4 text-4xl font-bold">Growth</h3>
          <p className="mt-3 text-slate-300">Best for growing SaaS teams with dashboards, team roles, and advanced analytics.</p>
          <div className="mt-6 rounded-2xl bg-white/10 p-4">
            <p className="text-sm text-slate-300">Monthly budget</p>
            <p className="mt-1 text-2xl font-bold">{formatCurrency(db.settings.monthlyBudget, db.settings.currency)}</p>
          </div>
          <button className="mt-6 w-full rounded-full bg-white px-5 py-3 text-sm font-bold text-slate-950">Upgrade plan</button>
        </div>

        <div className="grid gap-5 sm:grid-cols-3">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-sm text-slate-500">Paid total</p>
            <p className="mt-3 text-3xl font-bold text-slate-950">{formatCurrency(paidTotal, db.settings.currency)}</p>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-sm text-slate-500">Invoices</p>
            <p className="mt-3 text-3xl font-bold text-slate-950">{db.invoices.length}</p>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-sm text-slate-500">Payment method</p>
            <p className="mt-3 text-3xl font-bold text-slate-950">Visa</p>
          </div>
        </div>
      </div>

      <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
        <h3 className="text-lg font-bold text-slate-950">Invoice history</h3>
        <div className="mt-5 overflow-x-auto">
          <table className="w-full min-w-[650px] text-left text-sm">
            <thead className="text-xs uppercase tracking-wide text-slate-500">
              <tr>
                <th className="py-3">Invoice</th>
                <th>Date</th>
                <th>Plan</th>
                <th>Amount</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {db.invoices.map((invoice) => (
                <tr key={invoice.id}>
                  <td className="py-4 font-bold text-slate-950">{invoice.number}</td>
                  <td className="text-slate-600">{formatDate(invoice.date)}</td>
                  <td className="text-slate-600">{invoice.plan}</td>
                  <td className="text-slate-600">{formatCurrency(invoice.amount, db.settings.currency)}</td>
                  <td><StatusBadge status={invoice.status} /></td>
                  <td><button className="rounded-full border border-slate-200 px-4 py-2 text-xs font-bold text-slate-700 hover:bg-slate-100">Download</button></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
