export function formatCurrency(value: number): string { return new Intl.NumberFormat("en-NG", { style: "currency", currency: "NGN", maximumFractionDigits: 2 }).format(value); }
export function formatDateTime(value?: string | null): string { return value ? new Intl.DateTimeFormat("en-NG", { dateStyle: "medium", timeStyle: "short" }).format(new Date(value)) : "Not available"; }
export function humanizeStatus(value: string): string { return value.toLowerCase().replaceAll("_", " ").replace(/^./, (letter) => letter.toUpperCase()); }
export function isSafeHttpUrl(value?: string | null): boolean { if (!value) return false; try { const url = new URL(value); return url.protocol === "http:" || url.protocol === "https:"; } catch { return false; } }
