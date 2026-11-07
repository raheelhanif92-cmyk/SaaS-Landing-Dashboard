"use client";

import { FormEvent, useEffect, useState } from "react";
import { getDatabase, resetDatabase, saveDatabase } from "@/lib/storage";
import type { CompanySettings, DemoDatabase } from "@/lib/types";

export default function SettingsPage() {
  const [db, setDb] = useState<DemoDatabase | null>(null);
  const [message, setMessage] = useState("");

  useEffect(() => setDb(getDatabase()), []);

  function updateSettings(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!db) return;
    const form = new FormData(event.currentTarget);
    const settings: CompanySettings = {
      companyName: String(form.get("companyName")),
      website: String(form.get("website")),
      contactEmail: String(form.get("contactEmail")),
      timezone: String(form.get("timezone")),
      currency: String(form.get("currency")),
      monthlyBudget: Number(form.get("monthlyBudget")),
      emailReports: form.get("emailReports") === "on",
      productUpdates: form.get("productUpdates") === "on",
      billingAlerts: form.get("billingAlerts") === "on"
    };
    const next = { ...db, settings };
    setDb(next);
    saveDatabase(next);
    setMessage("Settings saved successfully.");
  }

  function handleReset() {
    const next = resetDatabase();
    setDb(next);
    setMessage("Demo data has been reset.");
  }

  if (!db) return <p className="text-sm font-semibold text-slate-500">Loading settings...</p>;

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold tracking-tight text-slate-950">Settings</h2>
        <p className="mt-2 text-slate-600">Update company profile, notifications, billing preferences, and demo data.</p>
      </div>

      <form onSubmit={updateSettings} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
        <div className="grid gap-5 md:grid-cols-2">
          <label className="text-sm font-semibold text-slate-700">
            Company name
            <input name="companyName" defaultValue={db.settings.companyName} className="mt-2 w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:border-indigo-500" />
          </label>
          <label className="text-sm font-semibold text-slate-700">
            Website
            <input name="website" defaultValue={db.settings.website} className="mt-2 w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:border-indigo-500" />
          </label>
          <label className="text-sm font-semibold text-slate-700">
            Contact email
            <input type="email" name="contactEmail" defaultValue={db.settings.contactEmail} className="mt-2 w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:border-indigo-500" />
          </label>
          <label className="text-sm font-semibold text-slate-700">
            Timezone
            <input name="timezone" defaultValue={db.settings.timezone} className="mt-2 w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:border-indigo-500" />
          </label>
          <label className="text-sm font-semibold text-slate-700">
            Currency
            <select name="currency" defaultValue={db.settings.currency} className="mt-2 w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:border-indigo-500">
              <option>USD</option>
              <option>GBP</option>
              <option>EUR</option>
              <option>PKR</option>
            </select>
          </label>
          <label className="text-sm font-semibold text-slate-700">
            Monthly budget
            <input type="number" name="monthlyBudget" defaultValue={db.settings.monthlyBudget} className="mt-2 w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:border-indigo-500" />
          </label>
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {[
            ["emailReports", "Weekly email reports", db.settings.emailReports],
            ["productUpdates", "Product update emails", db.settings.productUpdates],
            ["billingAlerts", "Billing alerts", db.settings.billingAlerts]
          ].map(([name, label, checked]) => (
            <label key={String(name)} className="flex items-center gap-3 rounded-2xl bg-slate-50 p-4 text-sm font-semibold text-slate-700">
              <input type="checkbox" name={String(name)} defaultChecked={Boolean(checked)} className="h-5 w-5 rounded border-slate-300" />
              {label}
            </label>
          ))}
        </div>

        {message ? <p className="mt-5 rounded-2xl bg-emerald-50 px-4 py-3 text-sm font-semibold text-emerald-700">{message}</p> : null}

        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <button className="rounded-full bg-indigo-600 px-6 py-3 text-sm font-bold text-white hover:bg-indigo-700">Save settings</button>
          <button type="button" onClick={handleReset} className="rounded-full border border-slate-200 px-6 py-3 text-sm font-bold text-slate-700 hover:bg-slate-100">Reset demo data</button>
        </div>
      </form>
    </div>
  );
}
