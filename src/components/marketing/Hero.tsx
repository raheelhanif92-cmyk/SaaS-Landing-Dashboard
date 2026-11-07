import { ButtonLink } from "@/components/ui/ButtonLink";
import { marketingStats } from "@/lib/data";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-slate-950 px-4 py-20 text-white sm:px-6 lg:px-8 lg:py-28">
      <div className="absolute left-1/2 top-0 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-indigo-600/30 blur-3xl" />
      <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <p className="inline-flex rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-semibold text-indigo-100">
            SaaS landing page + customer dashboard
          </p>
          <h1 className="mt-7 text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
            Launch a client-ready SaaS product experience.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            NexaFlow combines a high-converting SaaS website, pricing flow, demo authentication, and a responsive dashboard for analytics, teams, billing, and workspaces.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="/signup" variant="secondary">Start free demo</ButtonLink>
            <ButtonLink href="/dashboard" variant="dark" className="border border-white/15 bg-white/10 hover:bg-white/20">View dashboard</ButtonLink>
          </div>
          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {marketingStats.map((stat) => (
              <div key={stat.label} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="text-2xl font-bold">{stat.value}</p>
                <p className="mt-1 text-sm text-slate-400">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-[2rem] border border-white/10 bg-white/10 p-3 shadow-soft backdrop-blur">
          <div className="rounded-[1.5rem] bg-white p-5 text-slate-950">
            <div className="flex items-center justify-between border-b border-slate-100 pb-4">
              <div>
                <p className="text-sm font-semibold text-slate-500">Dashboard overview</p>
                <h3 className="text-xl font-bold">$48,290 MRR</h3>
              </div>
              <span className="rounded-full bg-emerald-100 px-3 py-1 text-sm font-bold text-emerald-700">+18.2%</span>
            </div>
            <div className="mt-6 grid grid-cols-3 items-end gap-3">
              {[45, 62, 54, 78, 69, 88, 96, 75, 92].map((height, index) => (
                <div key={index} className="rounded-xl bg-slate-100 p-2">
                  <div className="rounded-lg bg-indigo-600" style={{ height: `${height * 1.4}px` }} />
                </div>
              ))}
            </div>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              <div className="rounded-2xl bg-slate-50 p-4">
                <p className="text-sm text-slate-500">Active users</p>
                <p className="mt-2 text-2xl font-bold">12,840</p>
              </div>
              <div className="rounded-2xl bg-slate-50 p-4">
                <p className="text-sm text-slate-500">Conversion</p>
                <p className="mt-2 text-2xl font-bold">7.9%</p>
              </div>
            </div>
            <div className="mt-5 rounded-2xl bg-slate-950 p-4 text-white">
              <p className="text-sm text-slate-300">Next action</p>
              <p className="mt-1 font-semibold">Review 4 workspaces near usage limits.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
