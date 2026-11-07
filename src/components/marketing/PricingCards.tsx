import { ButtonLink } from "@/components/ui/ButtonLink";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { pricingPlans } from "@/lib/data";
import { classNames } from "@/lib/utils";

export function PricingCards() {
  return (
    <section className="bg-slate-50 px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Pricing"
          title="Plans for every SaaS stage"
          description="A complete pricing section with highlighted plan, feature lists, and clean CTA buttons."
        />
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {pricingPlans.map((plan) => (
            <div
              key={plan.name}
              className={classNames(
                "rounded-[2rem] border p-8",
                plan.highlighted ? "border-indigo-600 bg-slate-950 text-white shadow-soft" : "border-slate-200 bg-white text-slate-950"
              )}
            >
              <div className="flex items-center justify-between">
                <h3 className="text-2xl font-bold">{plan.name}</h3>
                {plan.highlighted ? <span className="rounded-full bg-indigo-500 px-3 py-1 text-xs font-bold uppercase tracking-wide">Popular</span> : null}
              </div>
              <p className={classNames("mt-3 leading-7", plan.highlighted ? "text-slate-300" : "text-slate-600")}>{plan.description}</p>
              <div className="mt-7 flex items-end gap-2">
                <span className="text-5xl font-bold">{plan.price}</span>
                <span className={classNames("pb-2 text-sm", plan.highlighted ? "text-slate-300" : "text-slate-500")}>/month</span>
              </div>
              <ul className="mt-8 space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex gap-3 text-sm">
                    <span className="text-emerald-500">✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <ButtonLink href="/signup" variant={plan.highlighted ? "secondary" : "primary"} className="mt-8 w-full">
                Choose {plan.name}
              </ButtonLink>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
