import { MarketingShell } from "@/components/layout/MarketingShell";
import { FAQ } from "@/components/marketing/FAQ";
import { PricingCards } from "@/components/marketing/PricingCards";
import { SectionHeading } from "@/components/ui/SectionHeading";

export default function PricingPage() {
  return (
    <MarketingShell>
      <section className="bg-white px-4 py-20 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Pricing"
          title="Simple pricing page for SaaS clients"
          description="Use this page to demonstrate pricing tables, plan comparison, CTA flows, and FAQ sections."
        />
      </section>
      <PricingCards />
      <FAQ />
    </MarketingShell>
  );
}
