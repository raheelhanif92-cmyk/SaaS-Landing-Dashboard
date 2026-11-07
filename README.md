# SaaS Landing Dashboard

A complete portfolio-ready **SaaS landing page + customer dashboard** built with **Next.js 14, TypeScript, React, and Tailwind CSS**.

## Features

- Modern SaaS homepage with hero, feature cards, metrics, testimonials, FAQ, and CTA sections
- Separate feature, pricing, about, contact, login, and signup pages
- Demo authentication using browser localStorage
- Protected dashboard shell with responsive sidebar
- Dashboard overview with KPIs, revenue chart, usage cards, activity feed, and onboarding checklist
- Projects/workspaces management with add, edit, search, and status changes
- Team management with roles, departments, and member status
- Billing page with subscription plan, invoices, and payment history
- Analytics page with acquisition funnel, monthly revenue, retention, and traffic sources
- Settings page with company profile, notifications, billing preferences, and demo data reset
- Fully responsive layout for desktop, tablet, and mobile
- No backend required for demo: data is stored in localStorage

## Tech Stack

- Next.js 14 App Router
- React 18
- TypeScript
- Tailwind CSS
- localStorage demo database

## Demo Login

```txt
Email: admin@demo.com
Password: password123
```

## Installation

```bash
npm install
npm run dev
```

Open:

```txt
http://localhost:3000
```

## Build Check

```bash
npm run build
```

## Folder Structure

```txt
src/
  app/
    page.tsx
    features/page.tsx
    pricing/page.tsx
    about/page.tsx
    contact/page.tsx
    login/page.tsx
    signup/page.tsx
    dashboard/
      layout.tsx
      page.tsx
      projects/page.tsx
      team/page.tsx
      billing/page.tsx
      analytics/page.tsx
      settings/page.tsx
  components/
    auth/
    dashboard/
    layout/
    marketing/
    ui/
  lib/
    data.ts
    storage.ts
    types.ts
    utils.ts
```

## Suggested GitHub Repository

**Repository name**

```txt
saas-landing-dashboard
```

**Description**

```txt
A complete SaaS landing page with pricing, authentication screens, and a responsive customer dashboard built with Next.js, TypeScript, and Tailwind CSS.
```
