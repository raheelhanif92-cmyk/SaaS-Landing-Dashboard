import type { ChartPoint } from "@/lib/types";

export function SimpleBarChart({ data, title }: { data: ChartPoint[]; title: string }) {
  const maxValue = Math.max(...data.map((item) => item.value), 1);

  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      <h3 className="text-lg font-bold text-slate-950">{title}</h3>
      <div className="mt-6 flex h-64 items-end gap-3">
        {data.map((item) => (
          <div key={item.label} className="flex flex-1 flex-col items-center gap-3">
            <div className="flex h-52 w-full items-end rounded-2xl bg-slate-100 p-1">
              <div className="w-full rounded-xl bg-indigo-600 transition-all" style={{ height: `${Math.max((item.value / maxValue) * 100, 8)}%` }} />
            </div>
            <span className="text-xs font-semibold text-slate-500">{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
