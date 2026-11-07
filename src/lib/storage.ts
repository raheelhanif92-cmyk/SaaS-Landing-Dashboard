"use client";

import { defaultDatabase, demoCredentials } from "./data";
import type { DemoDatabase, UserSession } from "./types";

const DB_KEY = "saas-landing-dashboard-db";
const SESSION_KEY = "saas-landing-dashboard-session";

export function getDatabase(): DemoDatabase {
  if (typeof window === "undefined") return defaultDatabase;

  const raw = window.localStorage.getItem(DB_KEY);
  if (!raw) {
    window.localStorage.setItem(DB_KEY, JSON.stringify(defaultDatabase));
    return defaultDatabase;
  }

  try {
    return JSON.parse(raw) as DemoDatabase;
  } catch {
    window.localStorage.setItem(DB_KEY, JSON.stringify(defaultDatabase));
    return defaultDatabase;
  }
}

export function saveDatabase(data: DemoDatabase) {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(DB_KEY, JSON.stringify(data));
}

export function resetDatabase() {
  if (typeof window === "undefined") return defaultDatabase;
  window.localStorage.setItem(DB_KEY, JSON.stringify(defaultDatabase));
  return defaultDatabase;
}

export function login(email: string, password: string): { ok: boolean; message: string } {
  if (email.toLowerCase() === demoCredentials.email && password === demoCredentials.password) {
    const session: UserSession = {
      email: demoCredentials.email,
      name: "Faizan Mahmood",
      role: "Owner",
      company: "NexaFlow SaaS"
    };
    window.localStorage.setItem(SESSION_KEY, JSON.stringify(session));
    return { ok: true, message: "Login successful" };
  }

  return { ok: false, message: "Invalid email or password. Use demo credentials from README." };
}

export function signup(name: string, email: string, company: string) {
  const session: UserSession = {
    email,
    name,
    role: "Owner",
    company
  };
  window.localStorage.setItem(SESSION_KEY, JSON.stringify(session));
  return session;
}

export function logout() {
  if (typeof window === "undefined") return;
  window.localStorage.removeItem(SESSION_KEY);
}

export function getSession(): UserSession | null {
  if (typeof window === "undefined") return null;
  const raw = window.localStorage.getItem(SESSION_KEY);
  if (!raw) return null;

  try {
    return JSON.parse(raw) as UserSession;
  } catch {
    window.localStorage.removeItem(SESSION_KEY);
    return null;
  }
}
