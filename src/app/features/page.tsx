import { CTASection } from "@/components/marketing/CTASection";
import { FeatureGrid } from "@/components/marketing/FeatureGrid";
import { MarketingShell } from "@/components/layout/MarketingShell";
import { SectionHeading } from "@/components/ui/SectionHeading";

const platformBlocks = [
  { title: "For founders", text: "Present revenue, usage, churn, and customer activity in a way stakeholders can quickly understand." },
  { title: "For teams", text: "Manage workspaces, team roles, project status, and alerts in one responsive interface." },
  { title: "For clients", text: "A polished project structure that proves you can build more than a static landing page." }
];

export default function FeaturesPage() {
  return (
    <MarketingShell>
      <section className="bg-slate-950 px-4 py-20 text-white sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Platform"
          title="Feature-rich SaaS experience"
          description="A complete collection of pages and dashboard modules for a professional portfolio project."
        />
      </section>
      <FeatureGrid />
      <section className="bg-white px-4 pb-20 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-3">
          {platformBlocks.map((block) => (
            <div key={block.title} className="rounded-3xl border border-slate-200 p-7">
              <h3 className="text-xl font-bold text-slate-950">{block.title}</h3>
              <p className="mt-3 leading-7 text-slate-600">{block.text}</p>
            </div>
          ))}
        </div>
      </section>
      <CTASection />
    </MarketingShell>
  );
}
