import { PageHeader } from "@/components/page-header";
import { OrderList } from "@/features/orders/order-list";
export default function HistoryPage() { return <><PageHeader title="Purchase history" description="View completed and cancelled orders with their historical item prices." /><OrderList history /></>; }
