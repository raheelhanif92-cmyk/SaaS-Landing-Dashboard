export type PlanName = "Starter" | "Growth" | "Scale";
export type ProjectStatus = "Active" | "Paused" | "At Risk";
export type MemberStatus = "Active" | "Invited" | "Suspended";
export type InvoiceStatus = "Paid" | "Pending" | "Overdue";

export interface UserSession {
  email: string;
  name: string;
  role: string;
  company: string;
}

export interface CompanySettings {
  companyName: string;
  website: string;
  contactEmail: string;
  timezone: string;
  currency: string;
  monthlyBudget: number;
  emailReports: boolean;
  productUpdates: boolean;
  billingAlerts: boolean;
}

export interface DashboardMetric {
  label: string;
  value: string;
  change: string;
  trend: "up" | "down";
}

export interface WorkspaceProject {
  id: string;
  name: string;
  owner: string;
  plan: PlanName;
  status: ProjectStatus;
  users: number;
  usage: number;
  monthlySpend: number;
  createdAt: string;
}

export interface TeamMember {
  id: string;
  name: string;
  email: string;
  role: "Owner" | "Admin" | "Manager" | "Member";
  department: string;
  status: MemberStatus;
  lastActive: string;
}

export interface Invoice {
  id: string;
  number: string;
  date: string;
  amount: number;
  status: InvoiceStatus;
  plan: PlanName;
}

export interface ActivityItem {
  id: string;
  title: string;
  description: string;
  time: string;
}

export interface ChartPoint {
  label: string;
  value: number;
}

export interface DemoDatabase {
  settings: CompanySettings;
  projects: WorkspaceProject[];
  team: TeamMember[];
  invoices: Invoice[];
}
