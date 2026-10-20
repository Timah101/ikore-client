"use client";
import { FormEvent, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

export function LoginForm() {
  const router = useRouter(); const searchParams = useSearchParams(); const [error, setError] = useState<string | null>(null); const [submitting, setSubmitting] = useState(false);
  async function submit(event: FormEvent<HTMLFormElement>) { event.preventDefault(); setError(null); setSubmitting(true); const form = new FormData(event.currentTarget); try { const response = await fetch("/api/auth/login", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ email: form.get("email"), password: form.get("password") }) }); const data = await response.json().catch(() => null); if (!response.ok) throw new Error(data?.message ?? "Login could not be completed."); const nextPath = searchParams.get("next"); router.replace(nextPath?.startsWith("/") && !nextPath.startsWith("//") ? nextPath : "/dashboard"); router.refresh(); } catch (caught) { setError(caught instanceof Error ? caught.message : "Login could not be completed."); } finally { setSubmitting(false); } }
  return <form className="mt-8 space-y-5" onSubmit={submit}>{error ? <div className="notice notice-error" role="alert">{error}</div> : null}<label className="block"><span className="field-label">Email address</span><input className="input" name="email" type="email" autoComplete="username" required autoFocus /></label><label className="block"><span className="field-label">Password</span><input className="input" name="password" type="password" autoComplete="current-password" required /></label><button className="button button-primary w-full" disabled={submitting}>{submitting ? "Signing in..." : "Sign in"}</button></form>;
}
