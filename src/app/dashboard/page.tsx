import { StatusBadge } from "@/components/dashboard/StatusBadge";
import { SimpleBarChart } from "@/components/dashboard/SimpleBarChart";
import { StatCard } from "@/components/dashboard/StatCard";
import { activityItems, dashboardMetrics, defaultDatabase, revenueChart, trafficSources } from "@/lib/data";
import { formatCurrency } from "@/lib/utils";

export default function DashboardPage() {
  const topProjects = defaultDatabase.projects.slice(0, 3);

  return (
    <div className="space-y-8">
      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-slate-950">Overview</h2>
          <p className="mt-2 text-slate-600">Track revenue, users, projects, and recent SaaS activity.</p>
        </div>
        <button className="rounded-full bg-indigo-600 px-5 py-3 text-sm font-bold text-white hover:bg-indigo-700">Export report</button>
      </div>

      <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
        {dashboardMetrics.map((metric) => (
          <StatCard key={metric.label} {...metric} />
        ))}
      </div>

      <div className="grid gap-6 xl:grid-cols-[1.4fr_0.8fr]">
        <SimpleBarChart title="Monthly recurring revenue" data={revenueChart} />
        <SimpleBarChart title="Traffic sources" data={trafficSources} />
      </div>

      <div className="grid gap-6 xl:grid-cols-[1.2fr_0.8fr]">
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <h3 className="text-lg font-bold text-slate-950">Top workspaces</h3>
          <div className="mt-5 overflow-x-auto">
            <table className="w-full min-w-[650px] text-left text-sm">
              <thead className="text-xs uppercase tracking-wide text-slate-500">
                <tr>
                  <th className="py-3">Workspace</th>
                  <th className="py-3">Plan</th>
                  <th className="py-3">Users</th>
                  <th className="py-3">Usage</th>
                  <th className="py-3">Spend</th>
                  <th className="py-3">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {topProjects.map((project) => (
                  <tr key={project.id}>
                    <td className="py-4 font-semibold text-slate-950">{project.name}</td>
                    <td className="py-4 text-slate-600">{project.plan}</td>
                    <td className="py-4 text-slate-600">{project.users.toLocaleString()}</td>
                    <td className="py-4 text-slate-600">{project.usage}%</td>
                    <td className="py-4 text-slate-600">{formatCurrency(project.monthlySpend)}</td>
                    <td className="py-4"><StatusBadge status={project.status} /></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <h3 className="text-lg font-bold text-slate-950">Recent activity</h3>
          <div className="mt-5 space-y-4">
            {activityItems.map((item) => (
              <div key={item.id} className="rounded-2xl bg-slate-50 p-4">
                <div className="flex items-start justify-between gap-4">
                  <p className="font-bold text-slate-950">{item.title}</p>
                  <span className="shrink-0 text-xs text-slate-500">{item.time}</span>
                </div>
                <p className="mt-1 text-sm leading-6 text-slate-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
