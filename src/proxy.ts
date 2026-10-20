import { NextRequest, NextResponse } from "next/server";
import { AUTH_COOKIE_NAME, readClientSession } from "@/lib/auth";

export function proxy(request: NextRequest) {
  const token = request.cookies.get(AUTH_COOKIE_NAME)?.value;
  const authenticated = Boolean(token && readClientSession(token));
  const isLogin = request.nextUrl.pathname === "/login";
  if (!authenticated && !isLogin) { const url = new URL("/login", request.url); url.searchParams.set("next", request.nextUrl.pathname); const response = NextResponse.redirect(url); if (token) response.cookies.set(AUTH_COOKIE_NAME, "", { path: "/", maxAge: 0 }); return response; }
  if (!authenticated && isLogin && token) { const response = NextResponse.next(); response.cookies.set(AUTH_COOKIE_NAME, "", { path: "/", maxAge: 0 }); return response; }
  if (authenticated && isLogin) return NextResponse.redirect(new URL("/dashboard", request.url));
  return NextResponse.next();
}
export const config = { matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"] };
