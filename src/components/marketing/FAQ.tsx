import { SectionHeading } from "@/components/ui/SectionHeading";
import { faqs } from "@/lib/data";

export function FAQ() {
  return (
    <section className="bg-slate-50 px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <SectionHeading
          eyebrow="FAQ"
          title="Common project questions"
          description="Simple FAQ block for product pages, proposals, and landing page completeness."
        />
        <div className="mt-10 space-y-4">
          {faqs.map((item) => (
            <details key={item.question} className="group rounded-2xl border border-slate-200 bg-white p-6">
              <summary className="cursor-pointer list-none text-lg font-bold text-slate-950">
                <span className="flex items-center justify-between gap-4">
                  {item.question}
                  <span className="rounded-full bg-slate-100 px-3 py-1 text-sm group-open:bg-indigo-600 group-open:text-white">+</span>
                </span>
              </summary>
              <p className="mt-4 leading-7 text-slate-600">{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
