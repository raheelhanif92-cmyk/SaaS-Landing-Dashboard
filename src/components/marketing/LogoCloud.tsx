const logos = ["CloudDesk", "LaunchStack", "FlowPilot", "Acme", "Metricly", "BrightCRM"];

export function LogoCloud() {
  return (
    <section className="border-y border-slate-200 bg-white px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-5 text-center sm:flex-row sm:items-center sm:justify-between sm:text-left">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">Trusted style for modern startups</p>
        <div className="flex flex-wrap justify-center gap-5 text-sm font-bold text-slate-400 sm:justify-end">
          {logos.map((logo) => <span key={logo}>{logo}</span>)}
        </div>
      </div>
    </section>
  );
}
