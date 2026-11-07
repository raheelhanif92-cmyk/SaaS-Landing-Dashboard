import { CTASection } from "@/components/marketing/CTASection";
import { FAQ } from "@/components/marketing/FAQ";
import { FeatureGrid } from "@/components/marketing/FeatureGrid";
import { Hero } from "@/components/marketing/Hero";
import { LogoCloud } from "@/components/marketing/LogoCloud";
import { PricingCards } from "@/components/marketing/PricingCards";
import { Testimonials } from "@/components/marketing/Testimonials";
import { MarketingShell } from "@/components/layout/MarketingShell";

export default function HomePage() {
  return (
    <MarketingShell>
      <Hero />
      <LogoCloud />
      <FeatureGrid />
      <PricingCards />
      <Testimonials />
      <FAQ />
      <CTASection />
    </MarketingShell>
  );
}
