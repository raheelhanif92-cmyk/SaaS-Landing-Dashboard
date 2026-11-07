import Link from "next/link";
import type { ReactNode } from "react";
import { classNames } from "@/lib/utils";

interface ButtonLinkProps {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "dark";
  className?: string;
}

export function ButtonLink({ href, children, variant = "primary", className }: ButtonLinkProps) {
  const variants = {
    primary: "bg-indigo-600 text-white hover:bg-indigo-700",
    secondary: "bg-white text-slate-900 ring-1 ring-slate-200 hover:bg-slate-50",
    dark: "bg-slate-950 text-white hover:bg-slate-800"
  };

  return (
    <Link
      href={href}
      className={classNames(
        "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition",
        variants[variant],
        className
      )}
    >
      {children}
    </Link>
  );
}
