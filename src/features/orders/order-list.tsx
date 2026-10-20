"use client";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import { EmptyState, ErrorState, LoadingState } from "@/components/data-state";
import { Pagination } from "@/components/pagination";
import { StatusBadge } from "@/components/status-badge";
import { apiRequest } from "@/lib/api-client";
import { formatCurrency, formatDateTime } from "@/lib/format";
import type { OrderSummary, PageResponse } from "@/types/api";

export function OrderList({ history = false }: { history?: boolean }) { const [data, setData] = useState<PageResponse<OrderSummary> | null>(null); const [page, setPage] = useState(0); const [error, setError] = useState<string | null>(null); const load = useCallback(async () => { await Promise.resolve(); setError(null); try { const status = history ? "&status=COMPLETED&status=CANCELLED" : ""; setData(await apiRequest<PageResponse<OrderSummary>>(`orders?page=${page}&size=20${status}`)); } catch (caught) { setError(caught instanceof Error ? caught.message : "Orders could not be loaded."); } }, [history, page]); useEffect(() => { void Promise.resolve().then(load); }, [load]);
  if (error) return <ErrorState message={error} onRetry={() => void load()} />; if (!data) return <LoadingState label={history ? "Loading purchase history" : "Loading orders"} />; if (!data.content.length) return <EmptyState title={history ? "No purchase history" : "No orders yet"} message={history ? "Completed and cancelled orders will remain available here." : "Submit your first procurement order to begin."} action={!history ? <Link href="/procure" className="button button-primary">Procure items</Link> : undefined} />;
  return <><div className="border-y border-[var(--line-strong)]">{data.content.map((order, index) => <Link key={order.reference} className={`group grid gap-3 py-5 transition-colors hover:bg-[#f7f3eb] sm:grid-cols-[1fr_10rem_10rem_1.3fr_auto] sm:items-center sm:px-3 ${index ? "border-t border-[var(--line)]" : ""}`} href={`/orders/${encodeURIComponent(order.reference)}`}><div><div className="font-semibold text-[var(--forest-deep)]">{order.reference}</div><div className="mt-1 text-xs text-[var(--muted)]">{formatDateTime(order.createdAt)}</div></div><StatusBadge status={order.status} /><div className="font-semibold tabular-nums">{formatCurrency(order.totalAmount)}</div><div className="hidden truncate text-sm text-[var(--muted)] sm:block">{order.deliveryAddress}</div><span className="text-action">View order</span></Link>)}</div><Pagination page={data.page} totalPages={data.totalPages} onChange={setPage} /></>;
}
