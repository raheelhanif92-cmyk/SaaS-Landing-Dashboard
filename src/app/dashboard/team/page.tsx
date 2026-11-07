"use client";

import { FormEvent, useEffect, useState } from "react";
import { StatusBadge } from "@/components/dashboard/StatusBadge";
import { getDatabase, saveDatabase } from "@/lib/storage";
import type { DemoDatabase, MemberStatus, TeamMember } from "@/lib/types";
import { getInitials } from "@/lib/utils";

type Role = TeamMember["role"];
const roles: Role[] = ["Admin", "Manager", "Member"];
const statuses: MemberStatus[] = ["Active", "Invited", "Suspended"];

export default function TeamPage() {
  const [db, setDb] = useState<DemoDatabase | null>(null);

  useEffect(() => setDb(getDatabase()), []);

  function updateTeam(team: TeamMember[]) {
    if (!db) return;
    const next = { ...db, team };
    setDb(next);
    saveDatabase(next);
  }

  function addMember(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!db) return;
    const form = new FormData(event.currentTarget);
    const member: TeamMember = {
      id: `mem-${Date.now()}`,
      name: String(form.get("name")),
      email: String(form.get("email")),
      role: String(form.get("role")) as Role,
      department: String(form.get("department")),
      status: "Invited",
      lastActive: "Pending"
    };
    updateTeam([member, ...db.team]);
    event.currentTarget.reset();
  }

  function updateStatus(memberId: string, status: MemberStatus) {
    if (!db) return;
    updateTeam(db.team.map((member) => (member.id === memberId ? { ...member, status } : member)));
  }

  if (!db) return <p className="text-sm font-semibold text-slate-500">Loading team...</p>;

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold tracking-tight text-slate-950">Team management</h2>
        <p className="mt-2 text-slate-600">Invite members, assign roles, and track access status.</p>
      </div>

      <form onSubmit={addMember} className="grid gap-4 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:grid-cols-2 xl:grid-cols-5">
        <input required name="name" placeholder="Name" className="rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:border-indigo-500" />
        <input required type="email" name="email" placeholder="Email" className="rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:border-indigo-500" />
        <input required name="department" placeholder="Department" className="rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:border-indigo-500" />
        <select name="role" className="rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:border-indigo-500">
          {roles.map((role) => <option key={role}>{role}</option>)}
        </select>
        <button className="rounded-2xl bg-indigo-600 px-4 py-3 text-sm font-bold text-white hover:bg-indigo-700">Invite member</button>
      </form>

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {db.team.map((member) => (
          <div key={member.id} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex items-start justify-between gap-4">
              <div className="flex items-center gap-4">
                <span className="grid h-12 w-12 place-items-center rounded-full bg-slate-950 text-sm font-bold text-white">{getInitials(member.name)}</span>
                <div>
                  <h3 className="font-bold text-slate-950">{member.name}</h3>
                  <p className="text-sm text-slate-500">{member.email}</p>
                </div>
              </div>
              <StatusBadge status={member.status} />
            </div>
            <div className="mt-5 grid grid-cols-2 gap-3 text-sm">
              <div className="rounded-2xl bg-slate-50 p-3">
                <p className="text-slate-500">Role</p>
                <p className="mt-1 font-bold text-slate-950">{member.role}</p>
              </div>
              <div className="rounded-2xl bg-slate-50 p-3">
                <p className="text-slate-500">Department</p>
                <p className="mt-1 font-bold text-slate-950">{member.department}</p>
              </div>
            </div>
            <div className="mt-4 flex items-center justify-between gap-4">
              <p className="text-sm text-slate-500">Last active: {member.lastActive}</p>
              <select value={member.status} onChange={(event) => updateStatus(member.id, event.target.value as MemberStatus)} className="rounded-xl border border-slate-200 px-3 py-2 text-sm">
                {statuses.map((status) => <option key={status}>{status}</option>)}
              </select>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
