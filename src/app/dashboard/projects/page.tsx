"use client";

import { FormEvent, useEffect, useMemo, useState } from "react";
import { StatusBadge } from "@/components/dashboard/StatusBadge";
import { getDatabase, saveDatabase } from "@/lib/storage";
import type { DemoDatabase, PlanName, ProjectStatus, WorkspaceProject } from "@/lib/types";
import { formatCurrency, formatDate } from "@/lib/utils";

const plans: PlanName[] = ["Starter", "Growth", "Scale"];
const statuses: ProjectStatus[] = ["Active", "Paused", "At Risk"];

export default function ProjectsPage() {
  const [db, setDb] = useState<DemoDatabase | null>(null);
  const [query, setQuery] = useState("");

  useEffect(() => {
    setDb(getDatabase());
  }, []);

  const projects = useMemo(() => {
    return (db?.projects || []).filter((project) => project.name.toLowerCase().includes(query.toLowerCase()) || project.owner.toLowerCase().includes(query.toLowerCase()));
  }, [db, query]);

  function updateProjects(projectsList: WorkspaceProject[]) {
    if (!db) return;
    const next = { ...db, projects: projectsList };
    setDb(next);
    saveDatabase(next);
  }

  function addProject(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!db) return;
    const form = new FormData(event.currentTarget);
    const newProject: WorkspaceProject = {
      id: `prj-${Date.now()}`,
      name: String(form.get("name")),
      owner: String(form.get("owner")),
      plan: String(form.get("plan")) as PlanName,
      status: "Active",
      users: Number(form.get("users")),
      usage: Number(form.get("usage")),
      monthlySpend: Number(form.get("monthlySpend")),
      createdAt: new Date().toISOString().slice(0, 10)
    };
    updateProjects([newProject, ...db.projects]);
    event.currentTarget.reset();
  }

  function setStatus(projectId: string, status: ProjectStatus) {
    if (!db) return;
    updateProjects(db.projects.map((project) => (project.id === projectId ? { ...project, status } : project)));
  }

  if (!db) return <p className="text-sm font-semibold text-slate-500">Loading projects...</p>;

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold tracking-tight text-slate-950">Projects & workspaces</h2>
        <p className="mt-2 text-slate-600">Manage SaaS workspaces, owners, plans, usage, and account health.</p>
      </div>

      <form onSubmit={addProject} className="grid gap-4 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:grid-cols-2 xl:grid-cols-4">
        <input required name="name" placeholder="Workspace name" className="rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:border-indigo-500" />
        <input required name="owner" placeholder="Owner name" className="rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:border-indigo-500" />
        <select name="plan" className="rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:border-indigo-500">
          {plans.map((plan) => <option key={plan}>{plan}</option>)}
        </select>
        <input required type="number" name="users" placeholder="Users" className="rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:border-indigo-500" />
        <input required type="number" name="usage" placeholder="Usage %" min="0" max="100" className="rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:border-indigo-500" />
        <input required type="number" name="monthlySpend" placeholder="Monthly spend" className="rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:border-indigo-500" />
        <button className="rounded-2xl bg-indigo-600 px-4 py-3 text-sm font-bold text-white hover:bg-indigo-700 md:col-span-2">Add workspace</button>
      </form>

      <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <h3 className="text-lg font-bold text-slate-950">All workspaces</h3>
          <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search workspace or owner" className="rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:border-indigo-500" />
        </div>
        <div className="mt-5 overflow-x-auto">
          <table className="w-full min-w-[900px] text-left text-sm">
            <thead className="text-xs uppercase tracking-wide text-slate-500">
              <tr>
                <th className="py-3">Workspace</th>
                <th>Owner</th>
                <th>Plan</th>
                <th>Users</th>
                <th>Usage</th>
                <th>Spend</th>
                <th>Created</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {projects.map((project) => (
                <tr key={project.id}>
                  <td className="py-4 font-bold text-slate-950">{project.name}</td>
                  <td className="text-slate-600">{project.owner}</td>
                  <td className="text-slate-600">{project.plan}</td>
                  <td className="text-slate-600">{project.users.toLocaleString()}</td>
                  <td className="text-slate-600">{project.usage}%</td>
                  <td className="text-slate-600">{formatCurrency(project.monthlySpend)}</td>
                  <td className="text-slate-600">{formatDate(project.createdAt)}</td>
                  <td><StatusBadge status={project.status} /></td>
                  <td>
                    <select value={project.status} onChange={(event) => setStatus(project.id, event.target.value as ProjectStatus)} className="rounded-xl border border-slate-200 px-3 py-2">
                      {statuses.map((status) => <option key={status}>{status}</option>)}
                    </select>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
