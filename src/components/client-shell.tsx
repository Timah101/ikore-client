"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState, type ReactNode } from "react";
import type { ClientSession } from "@/lib/auth";

const navigation = [["Overview", "/dashboard"], ["Procure", "/procure"], ["Orders", "/orders"], ["History", "/history"]] as const;

export function ClientShell({ session, children }: { session: ClientSession; children: ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [loggingOut, setLoggingOut] = useState(false);

  async function logout() {
    setLoggingOut(true);
    await fetch("/api/auth/logout", { method: "POST" });
    router.replace("/login");
    router.refresh();
  }

  const links = navigation.map(([label, href]) => {
    const active = pathname === href || (href !== "/dashboard" && pathname.startsWith(`${href}/`));
    return <Link key={href} href={href} onClick={() => setOpen(false)} className={`relative py-2 text-sm font-semibold transition-colors ${active ? "text-[#2e5d34] after:absolute after:inset-x-0 after:-bottom-[17px] after:h-0.5 after:bg-[#c97a3e]" : "text-[#6f675d] hover:text-[#2a2a2a]"}`}>{label}</Link>;
  });

  return (
    <div className="min-h-screen bg-[#faf8f3]">
      <header className="sticky top-0 z-30 border-b border-[#ddd8ce] bg-[#faf8f3]">
        <div className="mx-auto flex h-[72px] max-w-[1240px] items-center justify-between px-4 sm:px-6">
          <div className="flex items-center gap-10">
            <Link href="/dashboard" className="display-type text-[1.75rem] font-semibold leading-none text-[#2e5d34]">Ikore</Link>
            <nav className="hidden items-center gap-7 md:flex" aria-label="Client navigation">{links}</nav>
          </div>
          <div className="hidden items-center gap-5 md:flex">
            <Link href="/profile" className="max-w-48 truncate text-xs font-medium text-[#6f675d] hover:text-[#2e5d34]">{session.email}</Link>
            <button className="text-xs font-semibold text-[#6f675d] hover:text-[#2a2a2a] disabled:opacity-50" disabled={loggingOut} onClick={logout}>{loggingOut ? "Signing out..." : "Sign out"}</button>
          </div>
          <button className="button button-secondary md:hidden" onClick={() => setOpen(true)}>Menu</button>
        </div>
      </header>

      {open ? <div className="fixed inset-0 z-50 md:hidden"><button className="absolute inset-0 bg-[#1d261f]/55" aria-label="Close navigation" onClick={() => setOpen(false)} /><aside className="absolute inset-y-0 right-0 flex w-[82%] max-w-sm flex-col bg-[#faf8f3] p-6"><div className="flex items-center justify-between border-b border-[#ddd8ce] pb-5"><span className="display-type text-2xl font-semibold text-[#2e5d34]">Ikore</span><button className="text-sm font-semibold text-[#6f675d]" onClick={() => setOpen(false)}>Close</button></div><nav className="flex flex-1 flex-col gap-1 py-6">{navigation.map(([label, href]) => <Link key={href} href={href} onClick={() => setOpen(false)} className={`border-b border-[#e7e2d9] py-4 text-base font-semibold ${pathname === href || (href !== "/dashboard" && pathname.startsWith(`${href}/`)) ? "text-[#2e5d34]" : "text-[#514b43]"}`}>{label}</Link>)}<Link href="/profile" onClick={() => setOpen(false)} className="border-b border-[#e7e2d9] py-4 text-base font-semibold text-[#514b43]">Business profile</Link></nav><div className="border-t border-[#ddd8ce] pt-5"><div className="truncate text-xs text-[#8a8174]">{session.email}</div><button className="button button-secondary mt-4 w-full" disabled={loggingOut} onClick={logout}>{loggingOut ? "Signing out..." : "Sign out"}</button></div></aside></div> : null}

      <main className="mx-auto w-full max-w-[1240px] px-4 py-8 sm:px-6 sm:py-10 lg:py-12">{children}</main>
    </div>
  );
}
