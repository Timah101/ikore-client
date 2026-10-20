import type { ReactNode } from "react";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { ClientShell } from "@/components/client-shell";
import { AUTH_COOKIE_NAME, readClientSession } from "@/lib/auth";
export default async function ProtectedLayout({ children }: { children: ReactNode }) { const token = (await cookies()).get(AUTH_COOKIE_NAME)?.value; const session = token ? readClientSession(token) : null; if (!session) redirect("/login"); return <ClientShell session={session}>{children}</ClientShell>; }
