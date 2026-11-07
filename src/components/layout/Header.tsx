"use client";

import Link from "next/link";
import { useState } from "react";
import { ButtonLink } from "@/components/ui/ButtonLink";

const navItems = [
  { href: "/features", label: "Features" },
  { href: "/pricing", label: "Pricing" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" }
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200/70 bg-white/85 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3 font-bold text-slate-950">
          <span className="grid h-10 w-10 place-items-center rounded-2xl bg-indigo-600 text-white">N</span>
          <span>NexaFlow</span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="text-sm font-medium text-slate-600 transition hover:text-slate-950">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <Link href="/login" className="text-sm font-semibold text-slate-700 hover:text-slate-950">
            Login
          </Link>
          <ButtonLink href="/signup">Start free</ButtonLink>
        </div>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          className="rounded-xl border border-slate-200 px-3 py-2 text-sm font-semibold md:hidden"
          aria-label="Toggle menu"
        >
          Menu
        </button>
      </div>

      {open ? (
        <div className="border-t border-slate-200 bg-white px-4 py-4 md:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-3">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} onClick={() => setOpen(false)} className="rounded-xl px-3 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-100">
                {item.label}
              </Link>
            ))}
            <Link href="/login" onClick={() => setOpen(false)} className="rounded-xl px-3 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-100">
              Login
            </Link>
            <ButtonLink href="/signup" className="mt-2">Start free</ButtonLink>
          </div>
        </div>
      ) : null}
    </header>
  );
}
