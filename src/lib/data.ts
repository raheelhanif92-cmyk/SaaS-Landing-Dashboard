import type { ActivityItem, ChartPoint, DemoDatabase, DashboardMetric } from "./types";

export const demoCredentials = {
  email: "admin@demo.com",
  password: "password123"
};

export const marketingStats = [
  { value: "42K+", label: "active users" },
  { value: "$8.4M", label: "revenue tracked" },
  { value: "99.9%", label: "platform uptime" },
  { value: "24/7", label: "business visibility" }
];

export const features = [
  {
    title: "Subscription billing",
    description: "Manage plans, invoices, renewals, and payment history from one clean dashboard.",
    icon: "💳"
  },
  {
    title: "Customer workspaces",
    description: "Create and track multiple SaaS projects, teams, usage limits, and account statuses.",
    icon: "🧩"
  },
  {
    title: "Product analytics",
    description: "Monitor revenue, activation, conversion funnels, churn, and user growth in real time.",
    icon: "📊"
  },
  {
    title: "Team permissions",
    description: "Invite admins, managers, and members with clear department and access information.",
    icon: "👥"
  },
  {
    title: "Usage monitoring",
    description: "Track active seats, API usage, storage, budget, and upcoming plan limits.",
    icon: "⚡"
  },
  {
    title: "Client-ready UI",
    description: "Responsive, polished, and easy to customize for real SaaS startup proposals.",
    icon: "🚀"
  }
];

export const pricingPlans = [
  {
    name: "Starter",
    price: "$19",
    description: "For freelancers and new SaaS products.",
    features: ["3 workspaces", "1,000 tracked users", "Basic analytics", "Email support"],
    highlighted: false
  },
  {
    name: "Growth",
    price: "$49",
    description: "For growing teams that need better visibility.",
    features: ["15 workspaces", "25,000 tracked users", "Advanced analytics", "Team roles", "Priority support"],
    highlighted: true
  },
  {
    name: "Scale",
    price: "$129",
    description: "For agencies and larger SaaS businesses.",
    features: ["Unlimited workspaces", "Custom limits", "Billing automation", "Audit logs", "Dedicated manager"],
    highlighted: false
  }
];

export const testimonials = [
  {
    name: "Sarah Mitchell",
    role: "Founder, CloudDesk",
    quote: "The dashboard gives our team a complete view of subscriptions, growth, and customer usage without switching tools."
  },
  {
    name: "Daniel Brooks",
    role: "Operations Lead, LaunchStack",
    quote: "This type of SaaS admin experience is exactly what we needed to present metrics clearly to stakeholders."
  },
  {
    name: "Amina Khan",
    role: "Product Manager, FlowPilot",
    quote: "Clean UI, useful pages, and responsive screens. It is a strong foundation for a real product dashboard."
  }
];

export const faqs = [
  {
    question: "Is this project connected to a backend?",
    answer: "This portfolio version uses localStorage so it can run immediately. The code is structured so Firebase, Supabase, Prisma, or a custom API can be added later."
  },
  {
    question: "Can I customize the colors and sections?",
    answer: "Yes. The project uses Tailwind CSS and reusable components, so branding, content, and pages are easy to update."
  },
  {
    question: "Does the dashboard work on mobile?",
    answer: "Yes. The landing pages and dashboard sidebar are responsive for desktop, tablet, and mobile screens."
  }
];

export const dashboardMetrics: DashboardMetric[] = [
  { label: "Monthly Revenue", value: "$48,290", change: "+18.2%", trend: "up" },
  { label: "Active Users", value: "12,840", change: "+9.8%", trend: "up" },
  { label: "Churn Rate", value: "2.4%", change: "-0.6%", trend: "up" },
  { label: "Conversion Rate", value: "7.9%", change: "+1.3%", trend: "up" }
];

export const revenueChart: ChartPoint[] = [
  { label: "Jan", value: 24 },
  { label: "Feb", value: 28 },
  { label: "Mar", value: 31 },
  { label: "Apr", value: 36 },
  { label: "May", value: 41 },
  { label: "Jun", value: 48 }
];

export const trafficSources: ChartPoint[] = [
  { label: "Organic", value: 42 },
  { label: "Paid", value: 26 },
  { label: "Referral", value: 18 },
  { label: "Social", value: 14 }
];

export const funnelData: ChartPoint[] = [
  { label: "Visitors", value: 100 },
  { label: "Trials", value: 62 },
  { label: "Activated", value: 38 },
  { label: "Paid", value: 18 }
];

export const activityItems: ActivityItem[] = [
  {
    id: "act-1",
    title: "Growth plan upgraded",
    description: "Acme Analytics upgraded from Starter to Growth.",
    time: "12 min ago"
  },
  {
    id: "act-2",
    title: "New team member invited",
    description: "Maya Chen was invited as a Manager.",
    time: "1 hour ago"
  },
  {
    id: "act-3",
    title: "Invoice paid",
    description: "Invoice INV-1042 was paid successfully.",
    time: "3 hours ago"
  },
  {
    id: "act-4",
    title: "Usage limit alert",
    description: "LaunchStack reached 84% of monthly usage.",
    time: "Yesterday"
  }
];

export const defaultDatabase: DemoDatabase = {
  settings: {
    companyName: "NexaFlow SaaS",
    website: "https://nexaflow.example",
    contactEmail: "admin@demo.com",
    timezone: "Asia/Karachi",
    currency: "USD",
    monthlyBudget: 50000,
    emailReports: true,
    productUpdates: true,
    billingAlerts: true
  },
  projects: [
    {
      id: "prj-1",
      name: "Acme Analytics",
      owner: "Sarah Mitchell",
      plan: "Growth",
      status: "Active",
      users: 8420,
      usage: 74,
      monthlySpend: 2490,
      createdAt: "2026-01-14"
    },
    {
      id: "prj-2",
      name: "LaunchStack CRM",
      owner: "Daniel Brooks",
      plan: "Scale",
      status: "Active",
      users: 22100,
      usage: 84,
      monthlySpend: 6120,
      createdAt: "2026-02-05"
    },
    {
      id: "prj-3",
      name: "FlowPilot Beta",
      owner: "Amina Khan",
      plan: "Starter",
      status: "At Risk",
      users: 1180,
      usage: 91,
      monthlySpend: 790,
      createdAt: "2026-03-18"
    },
    {
      id: "prj-4",
      name: "CloudDesk Support",
      owner: "Michael Torres",
      plan: "Growth",
      status: "Paused",
      users: 5300,
      usage: 38,
      monthlySpend: 1290,
      createdAt: "2026-04-10"
    }
  ],
  team: [
    {
      id: "mem-1",
      name: "Faizan Mahmood",
      email: "admin@demo.com",
      role: "Owner",
      department: "Leadership",
      status: "Active",
      lastActive: "Today"
    },
    {
      id: "mem-2",
      name: "Maya Chen",
      email: "maya@example.com",
      role: "Admin",
      department: "Product",
      status: "Active",
      lastActive: "2 hours ago"
    },
    {
      id: "mem-3",
      name: "Omar Ali",
      email: "omar@example.com",
      role: "Manager",
      department: "Sales",
      status: "Invited",
      lastActive: "Pending"
    },
    {
      id: "mem-4",
      name: "Elena Garcia",
      email: "elena@example.com",
      role: "Member",
      department: "Support",
      status: "Active",
      lastActive: "Yesterday"
    }
  ],
  invoices: [
    { id: "inv-1", number: "INV-1042", date: "2026-07-01", amount: 2490, status: "Paid", plan: "Growth" },
    { id: "inv-2", number: "INV-1041", date: "2026-06-01", amount: 2490, status: "Paid", plan: "Growth" },
    { id: "inv-3", number: "INV-1040", date: "2026-05-01", amount: 1990, status: "Paid", plan: "Starter" },
    { id: "inv-4", number: "INV-1039", date: "2026-04-01", amount: 1990, status: "Overdue", plan: "Starter" }
  ]
};
