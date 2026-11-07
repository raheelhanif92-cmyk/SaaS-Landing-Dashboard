import type { ReactNode } from "react";
import { Footer } from "./Footer";
import { Header } from "./Header";

export function MarketingShell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-slate-50">
      <Header />
      {children}
      <Footer />
    </div>
  );
}
