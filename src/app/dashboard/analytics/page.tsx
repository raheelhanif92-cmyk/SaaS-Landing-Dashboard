import { SimpleBarChart } from "@/components/dashboard/SimpleBarChart";
import { StatCard } from "@/components/dashboard/StatCard";
import { funnelData, revenueChart, trafficSources } from "@/lib/data";

const retentionRows = [
  { cohort: "January", month1: "92%", month2: "84%", month3: "78%" },
  { cohort: "February", month1: "90%", month2: "82%", month3: "76%" },
  { cohort: "March", month1: "88%", month2: "81%", month3: "73%" }
];

export default function AnalyticsPage() {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold tracking-tight text-slate-950">Analytics</h2>
        <p className="mt-2 text-slate-600">Review user acquisition, revenue growth, retention, and conversion funnel.</p>
      </div>

      <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
        <StatCard label="Trial signups" value="3,240" change="+14.5%" />
        <StatCard label="Paid customers" value="1,284" change="+11.1%" />
        <StatCard label="ARPU" value="$38" change="+4.2%" />
        <StatCard label="Activation" value="61%" change="+7.4%" />
      </div>

      <div className="grid gap-6 xl:grid-cols-3">
        <div className="xl:col-span-2"><SimpleBarChart title="Revenue growth" data={revenueChart} /></div>
        <SimpleBarChart title="Conversion funnel" data={funnelData} />
      </div>

      <div className="grid gap-6 xl:grid-cols-[0.9fr_1.1fr]">
        <SimpleBarChart title="Traffic sources" data={trafficSources} />
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <h3 className="text-lg font-bold text-slate-950">Retention cohorts</h3>
          <div className="mt-5 overflow-x-auto">
            <table className="w-full min-w-[500px] text-left text-sm">
              <thead className="text-xs uppercase tracking-wide text-slate-500">
                <tr>
                  <th className="py-3">Cohort</th>
                  <th>Month 1</th>
                  <th>Month 2</th>
                  <th>Month 3</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {retentionRows.map((row) => (
                  <tr key={row.cohort}>
                    <td className="py-4 font-bold text-slate-950">{row.cohort}</td>
                    <td className="text-slate-600">{row.month1}</td>
                    <td className="text-slate-600">{row.month2}</td>
                    <td className="text-slate-600">{row.month3}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
