import { PageHeader } from "@/components/page-header";
import { OrderDetailView } from "@/features/orders/order-detail";
export default async function OrderDetailPage({ params, searchParams }: { params: Promise<{ reference: string }>; searchParams: Promise<{ created?: string }> }) { const [{ reference }, query] = await Promise.all([params, searchParams]); return <><PageHeader title="Order details" description="Review order items, payment status, procurement, and delivery progress." /><OrderDetailView reference={decodeURIComponent(reference)} created={query.created === "1"} /></>; }
