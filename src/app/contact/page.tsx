"use client";

import { FormEvent, useState } from "react";
import { MarketingShell } from "@/components/layout/MarketingShell";
import { SectionHeading } from "@/components/ui/SectionHeading";

export default function ContactPage() {
  const [sent, setSent] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSent(true);
    event.currentTarget.reset();
  }

  return (
    <MarketingShell>
      <section className="bg-white px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <SectionHeading
            eyebrow="Contact"
            title="Get in touch with the SaaS team"
            description="A complete contact page with form, support cards, and professional layout."
          />
          <div className="mt-12 grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
            <div className="space-y-4">
              {[
                ["Sales", "sales@nexaflow.example"],
                ["Support", "support@nexaflow.example"],
                ["Office", "Remote-first company"]
              ].map(([label, value]) => (
                <div key={label} className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
                  <p className="text-sm font-bold uppercase tracking-wide text-indigo-600">{label}</p>
                  <p className="mt-2 font-semibold text-slate-950">{value}</p>
                </div>
              ))}
            </div>
            <form onSubmit={handleSubmit} className="rounded-[2rem] border border-slate-200 bg-slate-50 p-6 sm:p-8">
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="text-sm font-semibold text-slate-700">
                  Name
                  <input required name="name" className="mt-2 w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:border-indigo-500" />
                </label>
                <label className="text-sm font-semibold text-slate-700">
                  Email
                  <input required type="email" name="email" className="mt-2 w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:border-indigo-500" />
                </label>
              </div>
              <label className="mt-5 block text-sm font-semibold text-slate-700">
                Message
                <textarea required name="message" rows={6} className="mt-2 w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:border-indigo-500" />
              </label>
              <button type="submit" className="mt-6 rounded-full bg-indigo-600 px-6 py-3 text-sm font-bold text-white hover:bg-indigo-700">
                Send message
              </button>
              {sent ? <p className="mt-4 rounded-2xl bg-emerald-50 px-4 py-3 text-sm font-semibold text-emerald-700">Message submitted successfully for demo.</p> : null}
            </form>
          </div>
        </div>
      </section>
    </MarketingShell>
  );
}
