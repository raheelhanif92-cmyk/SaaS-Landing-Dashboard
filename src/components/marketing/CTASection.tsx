import { ButtonLink } from "@/components/ui/ButtonLink";

export function CTASection() {
  return (
    <section className="bg-white px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-slate-950 px-6 py-16 text-center text-white shadow-soft sm:px-10">
        <p className="text-sm font-bold uppercase tracking-[0.25em] text-indigo-300">Ready to launch</p>
        <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-bold tracking-tight sm:text-5xl">
          A SaaS portfolio project that looks ready for real clients.
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-slate-300">
          Show landing pages, pricing, auth flow, and dashboard modules in one complete GitHub repository.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <ButtonLink href="/signup" variant="secondary">Create demo account</ButtonLink>
          <ButtonLink href="/dashboard" variant="dark" className="border border-white/15 bg-white/10 hover:bg-white/20">Open dashboard</ButtonLink>
        </div>
      </div>
    </section>
  );
}
