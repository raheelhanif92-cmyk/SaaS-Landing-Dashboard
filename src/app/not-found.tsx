import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-950 px-6 text-white">
      <div className="max-w-lg text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.4em] text-indigo-300">404</p>
        <h1 className="mt-4 text-4xl font-bold">Page not found</h1>
        <p className="mt-3 text-slate-300">The page you are looking for does not exist or has been moved.</p>
        <Link href="/" className="mt-8 inline-flex rounded-full bg-white px-6 py-3 font-semibold text-slate-950">
          Back to homepage
        </Link>
      </div>
    </main>
  );
}
