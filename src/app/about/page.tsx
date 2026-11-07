import { MarketingShell } from "@/components/layout/MarketingShell";
import { CTASection } from "@/components/marketing/CTASection";
import { SectionHeading } from "@/components/ui/SectionHeading";

const values = [
  "Clean interface design",
  "Reusable component architecture",
  "Responsive dashboard modules",
  "Business-focused user journeys"
];

export default function AboutPage() {
  return (
    <MarketingShell>
      <section className="bg-slate-950 px-4 py-20 text-white sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-indigo-300">About</p>
            <h1 className="mt-4 text-4xl font-bold sm:text-6xl">Built to impress SaaS clients.</h1>
          </div>
          <p className="text-lg leading-8 text-slate-300">
            This project is a complete front-end SaaS experience with landing pages, pricing, authentication, and dashboard workflows. It can be used as a portfolio piece or as a starter for real SaaS development.
          </p>
        </div>
      </section>
      <section className="bg-white px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Why this project"
            title="A stronger portfolio than a basic landing page"
            description="Clients on Upwork usually want proof that you can build business flows, not just static sections."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value, index) => (
              <div key={value} className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
                <span className="grid h-10 w-10 place-items-center rounded-2xl bg-indigo-600 text-sm font-bold text-white">{index + 1}</span>
                <h3 className="mt-5 font-bold text-slate-950">{value}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
      <CTASection />
    </MarketingShell>
  );
}
