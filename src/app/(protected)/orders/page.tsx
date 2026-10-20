import Link from "next/link";
import { PageHeader } from "@/components/page-header";
import { OrderList } from "@/features/orders/order-list";
export default function OrdersPage() { return <><PageHeader title="Orders" description="Review your organisation's orders, payments, and delivery status." actions={<Link href="/procure" className="button button-primary">New order</Link>} /><OrderList /></>; }
