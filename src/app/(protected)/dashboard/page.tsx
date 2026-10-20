import Link from "next/link";
import { PageHeader } from "@/components/page-header";
import { ClientDashboard } from "@/features/dashboard/client-dashboard";
export default function DashboardPage() { return <><PageHeader title="Overview" description="Track current orders, payments, procurement, and recent completed purchases." actions={<Link href="/procure" className="button button-primary">Procure items</Link>} /><ClientDashboard /></>; }
