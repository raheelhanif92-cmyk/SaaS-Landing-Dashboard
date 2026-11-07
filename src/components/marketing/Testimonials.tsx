import { SectionHeading } from "@/components/ui/SectionHeading";
import { testimonials } from "@/lib/data";

export function Testimonials() {
  return (
    <section className="bg-white px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Clients"
          title="Built for real business proposals"
          description="Use testimonials and case-study style blocks to make the portfolio project feel complete and polished."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {testimonials.map((item) => (
            <article key={item.name} className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
              <p className="leading-7 text-slate-700">“{item.quote}”</p>
              <div className="mt-6 border-t border-slate-200 pt-5">
                <p className="font-bold text-slate-950">{item.name}</p>
                <p className="mt-1 text-sm text-slate-500">{item.role}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
