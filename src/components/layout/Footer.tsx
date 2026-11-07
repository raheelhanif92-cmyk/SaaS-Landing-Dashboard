import Link from "next/link";

const footerLinks = [
  { href: "/features", label: "Features" },
  { href: "/pricing", label: "Pricing" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
  { href: "/login", label: "Login" }
];

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 py-10 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
        <div>
          <div className="flex items-center gap-3 font-bold text-slate-950">
            <span className="grid h-9 w-9 place-items-center rounded-2xl bg-indigo-600 text-white">N</span>
            <span>NexaFlow</span>
          </div>
          <p className="mt-3 max-w-md text-sm text-slate-500">A modern SaaS landing page and dashboard project for portfolio and client proposal use.</p>
        </div>
        <div className="flex flex-wrap gap-4 text-sm font-medium text-slate-600">
          {footerLinks.map((item) => (
            <Link key={item.href} href={item.href} className="hover:text-slate-950">
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
