import { NextResponse } from "next/server";
import { AUTH_COOKIE_NAME } from "@/lib/auth";

type LoginResponse = { accessToken: string; expiresInSeconds: number; email: string; role: "ADMIN" | "CLIENT"; clientId?: number | null };
const apiBaseUrl = process.env.API_BASE_URL ?? "http://localhost:8080/api/v1";

export async function POST(request: Request) {
  const backendResponse = await fetch(`${apiBaseUrl}/auth/login`, { method: "POST", headers: { "Content-Type": "application/json" }, body: await request.text(), cache: "no-store" });
  const data = await backendResponse.json().catch(() => null);
  if (!backendResponse.ok) return NextResponse.json(data ?? { code: "LOGIN_FAILED", message: "Login could not be completed." }, { status: backendResponse.status });
  const login = data as LoginResponse;
  if (login.role !== "CLIENT" || !login.clientId) return NextResponse.json({ code: "ACCESS_DENIED", message: "Use a client account to access this application." }, { status: 403 });
  const response = NextResponse.json({ email: login.email, role: login.role });
  response.cookies.set(AUTH_COOKIE_NAME, login.accessToken, { httpOnly: true, secure: process.env.NODE_ENV === "production", sameSite: "lax", path: "/", maxAge: login.expiresInSeconds });
  return response;
}
