"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { ReactNode, useEffect, useState } from "react";
import { getSession, logout } from "@/lib/storage";
import type { UserSession } from "@/lib/types";
import { classNames, getInitials } from "@/lib/utils";

const navItems = [
  { href: "/dashboard", label: "Overview", icon: "📈" },
  { href: "/dashboard/projects", label: "Projects", icon: "🧩" },
  { href: "/dashboard/team", label: "Team", icon: "👥" },
  { href: "/dashboard/billing", label: "Billing", icon: "💳" },
  { href: "/dashboard/analytics", label: "Analytics", icon: "📊" },
  { href: "/dashboard/settings", label: "Settings", icon: "⚙️" }
];

export function DashboardShell({ children }: { children: ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const [session, setSession] = useState<UserSession | null>(null);
  const [checking, setChecking] = useState(true);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    const activeSession = getSession();
    if (!activeSession) {
      router.replace("/login");
      return;
    }
    setSession(activeSession);
    setChecking(false);
  }, [router]);

  function handleLogout() {
    logout();
    router.push("/login");
  }

  if (checking) {
    return <div className="grid min-h-screen place-items-center bg-slate-50 text-sm font-semibold text-slate-500">Checking session...</div>;
  }

  return (
    <div className="min-h-screen bg-slate-50 lg:flex">
      <aside className={classNames("fixed inset-y-0 left-0 z-40 w-72 transform border-r border-slate-200 bg-white transition lg:static lg:translate-x-0", sidebarOpen ? "translate-x-0" : "-translate-x-full")}>
        <div className="flex h-full flex-col">
          <div className="flex items-center justify-between border-b border-slate-200 px-5 py-4">
            <Link href="/dashboard" className="flex items-center gap-3 font-bold text-slate-950">
              <span className="grid h-10 w-10 place-items-center rounded-2xl bg-indigo-600 text-white">N</span>
              <span>NexaFlow</span>
            </Link>
            <button type="button" onClick={() => setSidebarOpen(false)} className="rounded-xl border border-slate-200 px-3 py-2 text-sm lg:hidden">Close</button>
          </div>
          <nav className="dashboard-scrollbar flex-1 space-y-1 overflow-y-auto px-4 py-5">
            {navItems.map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setSidebarOpen(false)}
                  className={classNames("flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-semibold transition", active ? "bg-indigo-600 text-white" : "text-slate-600 hover:bg-slate-100 hover:text-slate-950")}
                >
                  <span>{item.icon}</span>
                  {item.label}
                </Link>
              );
            })}
          </nav>
          <div className="border-t border-slate-200 p-4">
            <div className="flex items-center gap-3 rounded-2xl bg-slate-50 p-3">
              <span className="grid h-11 w-11 place-items-center rounded-full bg-slate-950 text-sm font-bold text-white">{getInitials(session?.name || "User")}</span>
              <div className="min-w-0">
                <p className="truncate text-sm font-bold text-slate-950">{session?.name}</p>
                <p className="truncate text-xs text-slate-500">{session?.email}</p>
              </div>
            </div>
            <button type="button" onClick={handleLogout} className="mt-3 w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm font-bold text-slate-700 hover:bg-slate-100">
              Logout
            </button>
          </div>
        </div>
      </aside>

      {sidebarOpen ? <button type="button" aria-label="Close sidebar" className="fixed inset-0 z-30 bg-slate-950/40 lg:hidden" onClick={() => setSidebarOpen(false)} /> : null}

      <div className="min-w-0 flex-1">
        <header className="sticky top-0 z-20 flex items-center justify-between border-b border-slate-200 bg-white/90 px-4 py-4 backdrop-blur sm:px-6 lg:px-8">
          <button type="button" onClick={() => setSidebarOpen(true)} className="rounded-xl border border-slate-200 px-3 py-2 text-sm font-semibold lg:hidden">
            Menu
          </button>
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-indigo-600">Dashboard</p>
            <h1 className="text-xl font-bold text-slate-950">{session?.company}</h1>
          </div>
          <Link href="/" className="rounded-full border border-slate-200 px-4 py-2 text-sm font-bold text-slate-700 hover:bg-slate-100">
            Website
          </Link>
        </header>
        <main className="px-4 py-8 sm:px-6 lg:px-8">{children}</main>
      </div>
    </div>
  );
}
