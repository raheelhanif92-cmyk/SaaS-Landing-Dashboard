import { SectionHeading } from "@/components/ui/SectionHeading";
import { features } from "@/lib/data";

export function FeatureGrid() {
  return (
    <section className="bg-white px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Features"
          title="Everything a SaaS dashboard needs"
          description="Use this project to demonstrate landing page design, user journeys, admin dashboards, and business-ready UI development."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div key={feature.title} className="rounded-3xl border border-slate-200 bg-slate-50 p-6 transition hover:-translate-y-1 hover:shadow-soft">
              <span className="text-4xl" aria-hidden>{feature.icon}</span>
              <h3 className="mt-5 text-xl font-bold text-slate-950">{feature.title}</h3>
              <p className="mt-3 leading-7 text-slate-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
