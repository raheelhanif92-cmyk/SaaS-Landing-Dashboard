import { classNames } from "@/lib/utils";

interface StatCardProps {
  label: string;
  value: string;
  change?: string;
  trend?: "up" | "down";
}

export function StatCard({ label, value, change, trend = "up" }: StatCardProps) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      <p className="text-sm font-semibold text-slate-500">{label}</p>
      <div className="mt-4 flex items-end justify-between gap-4">
        <p className="text-3xl font-bold text-slate-950">{value}</p>
        {change ? (
          <span className={classNames("rounded-full px-3 py-1 text-xs font-bold", trend === "up" ? "bg-emerald-50 text-emerald-700" : "bg-red-50 text-red-700")}>
            {change}
          </span>
        ) : null}
      </div>
    </div>
  );
}
