import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import { AUTH_COOKIE_NAME } from "@/lib/auth";

const apiBaseUrl = process.env.API_BASE_URL ?? "http://localhost:8080/api/v1";
const allowedRoots = new Set(["client", "catalogue", "orders", "payments"]);
type RouteContext = { params: Promise<{ path: string[] }> };

async function forward(request: Request, context: RouteContext) {
  const token = (await cookies()).get(AUTH_COOKIE_NAME)?.value;
  if (!token) return NextResponse.json({ code: "UNAUTHENTICATED", message: "Authentication is required." }, { status: 401 });
  const { path } = await context.params;
  if (!path.length || !allowedRoots.has(path[0])) return NextResponse.json({ code: "ACCESS_DENIED", message: "This API path is not available." }, { status: 403 });
  const incomingUrl = new URL(request.url);
  const backendResponse = await fetch(`${apiBaseUrl}/${path.map(encodeURIComponent).join("/")}${incomingUrl.search}`, { method: request.method, headers: { Authorization: `Bearer ${token}`, ...(request.headers.get("content-type") ? { "Content-Type": request.headers.get("content-type") as string } : {}) }, body: ["GET", "HEAD"].includes(request.method) ? undefined : await request.arrayBuffer(), cache: "no-store" });
  const response = new NextResponse(await backendResponse.arrayBuffer(), { status: backendResponse.status, headers: { "Content-Type": backendResponse.headers.get("content-type") ?? "application/json" } });
  if (backendResponse.status === 401) response.cookies.set(AUTH_COOKIE_NAME, "", { path: "/", maxAge: 0 });
  return response;
}

export const GET = forward;
export const POST = forward;
