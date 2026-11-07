"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
import { login, signup } from "@/lib/storage";

interface AuthFormProps {
  mode: "login" | "signup";
}

export function AuthForm({ mode }: AuthFormProps) {
  const router = useRouter();
  const [error, setError] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const email = String(form.get("email") || "");
    const password = String(form.get("password") || "");

    if (mode === "login") {
      const result = login(email, password);
      if (!result.ok) {
        setError(result.message);
        return;
      }
      router.push("/dashboard");
      return;
    }

    const name = String(form.get("name") || "");
    const company = String(form.get("company") || "");
    signup(name, email, company || "NexaFlow SaaS");
    router.push("/dashboard");
  }

  return (
    <div className="min-h-screen bg-slate-950 px-4 py-10 text-white sm:px-6 lg:px-8">
      <div className="mx-auto grid min-h-[calc(100vh-80px)] max-w-6xl items-center gap-10 lg:grid-cols-2">
        <div>
          <Link href="/" className="inline-flex items-center gap-3 font-bold">
            <span className="grid h-10 w-10 place-items-center rounded-2xl bg-indigo-600">N</span>
            <span>NexaFlow</span>
          </Link>
          <h1 className="mt-10 text-4xl font-bold sm:text-6xl">
            {mode === "login" ? "Welcome back to your SaaS dashboard." : "Create your SaaS workspace in seconds."}
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-8 text-slate-300">
            {mode === "login"
              ? "Use the demo credentials to view dashboard pages, charts, projects, team management, billing, and settings."
              : "Signup is localStorage based for demo. It creates a temporary session and opens the dashboard immediately."}
          </p>
          <div className="mt-8 rounded-3xl border border-white/10 bg-white/10 p-5">
            <p className="text-sm font-bold text-indigo-200">Demo Login</p>
            <p className="mt-2 text-sm text-slate-300">Email: admin@demo.com</p>
            <p className="text-sm text-slate-300">Password: password123</p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="rounded-[2rem] bg-white p-6 text-slate-950 shadow-soft sm:p-8">
          <h2 className="text-2xl font-bold">{mode === "login" ? "Login" : "Create account"}</h2>
          <p className="mt-2 text-sm text-slate-500">
            {mode === "login" ? "Enter demo credentials to continue." : "Fill the fields below to create a demo session."}
          </p>

          {mode === "signup" ? (
            <div className="mt-6 grid gap-5 sm:grid-cols-2">
              <label className="text-sm font-semibold text-slate-700">
                Name
                <input required name="name" className="mt-2 w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:border-indigo-500" />
              </label>
              <label className="text-sm font-semibold text-slate-700">
                Company
                <input required name="company" className="mt-2 w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:border-indigo-500" />
              </label>
            </div>
          ) : null}

          <label className="mt-5 block text-sm font-semibold text-slate-700">
            Email
            <input required type="email" name="email" defaultValue={mode === "login" ? "admin@demo.com" : ""} className="mt-2 w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:border-indigo-500" />
          </label>
          <label className="mt-5 block text-sm font-semibold text-slate-700">
            Password
            <input required type="password" name="password" defaultValue={mode === "login" ? "password123" : ""} className="mt-2 w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:border-indigo-500" />
          </label>

          {error ? <p className="mt-4 rounded-2xl bg-red-50 px-4 py-3 text-sm font-semibold text-red-700">{error}</p> : null}

          <button type="submit" className="mt-6 w-full rounded-full bg-indigo-600 px-6 py-3 text-sm font-bold text-white hover:bg-indigo-700">
            {mode === "login" ? "Login to dashboard" : "Create demo workspace"}
          </button>

          <p className="mt-5 text-center text-sm text-slate-500">
            {mode === "login" ? "Need an account? " : "Already have an account? "}
            <Link href={mode === "login" ? "/signup" : "/login"} className="font-bold text-indigo-600">
              {mode === "login" ? "Sign up" : "Login"}
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
