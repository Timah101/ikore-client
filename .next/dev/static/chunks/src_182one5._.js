(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/data-state.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "EmptyState",
    ()=>EmptyState,
    "ErrorState",
    ()=>ErrorState,
    "LoadingState",
    ()=>LoadingState,
    "SuccessMessage",
    ()=>SuccessMessage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
function LoadingState({ label = "Loading" }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "state-block",
        role: "status",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-4 h-0.5 w-10 bg-[#c97a3e]"
            }, void 0, false, {
                fileName: "[project]/src/components/data-state.tsx",
                lineNumber: 2,
                columnNumber: 125
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-sm font-medium text-[#756d63]",
                children: [
                    label,
                    "..."
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/data-state.tsx",
                lineNumber: 2,
                columnNumber: 173
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/data-state.tsx",
        lineNumber: 2,
        columnNumber: 82
    }, this);
}
_c = LoadingState;
function EmptyState({ title, message, action }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "state-block",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "eyebrow mb-3",
                children: "Ready when you are"
            }, void 0, false, {
                fileName: "[project]/src/components/data-state.tsx",
                lineNumber: 3,
                columnNumber: 150
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "display-type text-xl font-semibold",
                children: title
            }, void 0, false, {
                fileName: "[project]/src/components/data-state.tsx",
                lineNumber: 3,
                columnNumber: 204
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mt-2 max-w-lg text-sm leading-6 text-[#756d63]",
                children: message
            }, void 0, false, {
                fileName: "[project]/src/components/data-state.tsx",
                lineNumber: 3,
                columnNumber: 267
            }, this),
            action ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-5 flex",
                children: action
            }, void 0, false, {
                fileName: "[project]/src/components/data-state.tsx",
                lineNumber: 3,
                columnNumber: 352
            }, this) : null
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/data-state.tsx",
        lineNumber: 3,
        columnNumber: 121
    }, this);
}
_c1 = EmptyState;
function ErrorState({ message, onRetry }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "notice notice-error",
        role: "alert",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-wrap items-center justify-between gap-3",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    children: message
                }, void 0, false, {
                    fileName: "[project]/src/components/data-state.tsx",
                    lineNumber: 4,
                    columnNumber: 219
                }, this),
                onRetry ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    className: "button button-secondary",
                    onClick: onRetry,
                    children: "Try again"
                }, void 0, false, {
                    fileName: "[project]/src/components/data-state.tsx",
                    lineNumber: 4,
                    columnNumber: 252
                }, this) : null
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/data-state.tsx",
            lineNumber: 4,
            columnNumber: 152
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/data-state.tsx",
        lineNumber: 4,
        columnNumber: 102
    }, this);
}
_c2 = ErrorState;
function SuccessMessage({ message }) {
    return message ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "notice",
        role: "status",
        children: message
    }, void 0, false, {
        fileName: "[project]/src/components/data-state.tsx",
        lineNumber: 5,
        columnNumber: 93
    }, this) : null;
}
_c3 = SuccessMessage;
var _c, _c1, _c2, _c3;
__turbopack_context__.k.register(_c, "LoadingState");
__turbopack_context__.k.register(_c1, "EmptyState");
__turbopack_context__.k.register(_c2, "ErrorState");
__turbopack_context__.k.register(_c3, "SuccessMessage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/status-badge.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "StatusBadge",
    ()=>StatusBadge
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$format$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/format.ts [app-client] (ecmascript)");
;
;
const positive = new Set([
    "ACTIVE",
    "CONFIRMED",
    "PAID",
    "DELIVERED",
    "COMPLETED"
]);
const warning = new Set([
    "PENDING",
    "SUBMITTED",
    "PAYMENT_SUBMITTED",
    "AWAITING_PAYMENT",
    "PROCUREMENT_IN_PROGRESS",
    "OUT_FOR_DELIVERY",
    "REFUND_PENDING"
]);
const negative = new Set([
    "INACTIVE",
    "REJECTED",
    "FAILED",
    "CANCELLED"
]);
function StatusBadge({ status }) {
    const style = positive.has(status) ? "status-positive" : warning.has(status) ? "status-warning" : negative.has(status) ? "status-negative" : "";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: `status-label ${style}`,
        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$format$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["humanizeStatus"])(status)
    }, void 0, false, {
        fileName: "[project]/src/components/status-badge.tsx",
        lineNumber: 3,
        columnNumber: 215
    }, this);
}
_c = StatusBadge;
var _c;
__turbopack_context__.k.register(_c, "StatusBadge");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/features/dashboard/client-dashboard.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ClientDashboard",
    ()=>ClientDashboard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$data$2d$state$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/data-state.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$status$2d$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/status-badge.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/api-client.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$format$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/format.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
const openStatuses = [
    "AWAITING_PAYMENT",
    "PAYMENT_SUBMITTED",
    "PAID",
    "PROCUREMENT_IN_PROGRESS",
    "OUT_FOR_DELIVERY",
    "DELIVERED"
];
function ClientDashboard() {
    _s();
    const [open, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [recent, setRecent] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const load = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ClientDashboard.useCallback[load]": async ()=>{
            await Promise.resolve();
            setError(null);
            try {
                const [openPages, completed] = await Promise.all([
                    Promise.all(openStatuses.map({
                        "ClientDashboard.useCallback[load]": (status)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiRequest"])(`orders?status=${status}&size=5`)
                    }["ClientDashboard.useCallback[load]"])),
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiRequest"])("orders?status=COMPLETED&size=5")
                ]);
                setOpen(openPages.flatMap({
                    "ClientDashboard.useCallback[load]": (page)=>page.content
                }["ClientDashboard.useCallback[load]"]).sort({
                    "ClientDashboard.useCallback[load]": (a, b)=>Date.parse(b.createdAt ?? "") - Date.parse(a.createdAt ?? "")
                }["ClientDashboard.useCallback[load]"]).slice(0, 5));
                setRecent(completed.content);
            } catch (caught) {
                setError(caught instanceof Error ? caught.message : "Your order overview could not be loaded.");
            }
        }
    }["ClientDashboard.useCallback[load]"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ClientDashboard.useEffect": ()=>{
            void Promise.resolve().then(load);
        }
    }["ClientDashboard.useEffect"], [
        load
    ]);
    if (error) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$data$2d$state$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ErrorState"], {
        message: error,
        onRetry: ()=>void load()
    }, void 0, false, {
        fileName: "[project]/src/features/dashboard/client-dashboard.tsx",
        lineNumber: 14,
        columnNumber: 21
    }, this);
    if (!open || !recent) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$data$2d$state$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LoadingState"], {
        label: "Loading your order overview"
    }, void 0, false, {
        fileName: "[project]/src/features/dashboard/client-dashboard.tsx",
        lineNumber: 14,
        columnNumber: 110
    }, this);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-10",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                "aria-labelledby": "current-orders",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-4 flex items-end justify-between gap-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "eyebrow",
                                        children: "In progress"
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/dashboard/client-dashboard.tsx",
                                        lineNumber: 15,
                                        columnNumber: 144
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        id: "current-orders",
                                        className: "display-type mt-1 text-2xl",
                                        children: "Current orders"
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/dashboard/client-dashboard.tsx",
                                        lineNumber: 15,
                                        columnNumber: 182
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/features/dashboard/client-dashboard.tsx",
                                lineNumber: 15,
                                columnNumber: 139
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/orders",
                                className: "text-action",
                                children: "View all"
                            }, void 0, false, {
                                fileName: "[project]/src/features/dashboard/client-dashboard.tsx",
                                lineNumber: 15,
                                columnNumber: 270
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/features/dashboard/client-dashboard.tsx",
                        lineNumber: 15,
                        columnNumber: 80
                    }, this),
                    open.length ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(OrderRows, {
                        orders: open,
                        current: true
                    }, void 0, false, {
                        fileName: "[project]/src/features/dashboard/client-dashboard.tsx",
                        lineNumber: 15,
                        columnNumber: 351
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$data$2d$state$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EmptyState"], {
                        title: "No orders in progress",
                        message: "Build an order from the live catalogue when you are ready to procure.",
                        action: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            className: "button button-primary",
                            href: "/procure",
                            children: "Browse catalogue"
                        }, void 0, false, {
                            fileName: "[project]/src/features/dashboard/client-dashboard.tsx",
                            lineNumber: 15,
                            columnNumber: 519
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/features/dashboard/client-dashboard.tsx",
                        lineNumber: 15,
                        columnNumber: 389
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/features/dashboard/client-dashboard.tsx",
                lineNumber: 15,
                columnNumber: 38
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                "aria-labelledby": "recent-purchases",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-4 flex items-end justify-between gap-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "eyebrow",
                                        children: "Purchase record"
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/dashboard/client-dashboard.tsx",
                                        lineNumber: 15,
                                        columnNumber: 721
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        id: "recent-purchases",
                                        className: "display-type mt-1 text-2xl",
                                        children: "Recently completed"
                                    }, void 0, false, {
                                        fileName: "[project]/src/features/dashboard/client-dashboard.tsx",
                                        lineNumber: 15,
                                        columnNumber: 763
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/features/dashboard/client-dashboard.tsx",
                                lineNumber: 15,
                                columnNumber: 716
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/history",
                                className: "text-action",
                                children: "Full history"
                            }, void 0, false, {
                                fileName: "[project]/src/features/dashboard/client-dashboard.tsx",
                                lineNumber: 15,
                                columnNumber: 857
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/features/dashboard/client-dashboard.tsx",
                        lineNumber: 15,
                        columnNumber: 657
                    }, this),
                    recent.length ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(OrderRows, {
                        orders: recent
                    }, void 0, false, {
                        fileName: "[project]/src/features/dashboard/client-dashboard.tsx",
                        lineNumber: 15,
                        columnNumber: 945
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$data$2d$state$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EmptyState"], {
                        title: "No completed purchases",
                        message: "Completed orders will form your purchase history here."
                    }, void 0, false, {
                        fileName: "[project]/src/features/dashboard/client-dashboard.tsx",
                        lineNumber: 15,
                        columnNumber: 977
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/features/dashboard/client-dashboard.tsx",
                lineNumber: 15,
                columnNumber: 613
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/features/dashboard/client-dashboard.tsx",
        lineNumber: 15,
        columnNumber: 10
    }, this);
}
_s(ClientDashboard, "9L5TDPu52Pjx4MK7LmR2BPoVlMI=");
_c = ClientDashboard;
function OrderRows({ orders, current = false }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "border-y border-[var(--line-strong)]",
        children: orders.map((order, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                href: `/orders/${encodeURIComponent(order.reference)}`,
                className: `group grid gap-3 py-4 transition-colors hover:bg-[#f7f3eb] sm:grid-cols-[minmax(0,1fr)_11rem_9rem_auto] sm:items-center sm:px-3 ${index ? "border-t border-[var(--line)]" : ""}`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "font-semibold text-[var(--forest-deep)]",
                                children: order.reference
                            }, void 0, false, {
                                fileName: "[project]/src/features/dashboard/client-dashboard.tsx",
                                lineNumber: 17,
                                columnNumber: 468
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-1 text-xs text-[var(--muted)]",
                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$format$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatDateTime"])(order.createdAt)
                            }, void 0, false, {
                                fileName: "[project]/src/features/dashboard/client-dashboard.tsx",
                                lineNumber: 17,
                                columnNumber: 548
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/features/dashboard/client-dashboard.tsx",
                        lineNumber: 17,
                        columnNumber: 463
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$status$2d$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StatusBadge"], {
                        status: order.status
                    }, void 0, false, {
                        fileName: "[project]/src/features/dashboard/client-dashboard.tsx",
                        lineNumber: 17,
                        columnNumber: 643
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "font-semibold tabular-nums sm:text-right",
                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$format$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatCurrency"])(order.totalAmount)
                    }, void 0, false, {
                        fileName: "[project]/src/features/dashboard/client-dashboard.tsx",
                        lineNumber: 17,
                        columnNumber: 680
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-action sm:text-right",
                        children: current ? "Track order" : "View receipt"
                    }, void 0, false, {
                        fileName: "[project]/src/features/dashboard/client-dashboard.tsx",
                        lineNumber: 17,
                        columnNumber: 781
                    }, this)
                ]
            }, order.reference, true, {
                fileName: "[project]/src/features/dashboard/client-dashboard.tsx",
                lineNumber: 17,
                columnNumber: 189
            }, this))
    }, void 0, false, {
        fileName: "[project]/src/features/dashboard/client-dashboard.tsx",
        lineNumber: 17,
        columnNumber: 105
    }, this);
}
_c1 = OrderRows;
var _c, _c1;
__turbopack_context__.k.register(_c, "ClientDashboard");
__turbopack_context__.k.register(_c1, "OrderRows");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/api-client.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ApiRequestError",
    ()=>ApiRequestError,
    "apiRequest",
    ()=>apiRequest
]);
class ApiRequestError extends Error {
    status;
    code;
    errors;
    constructor(message, status, code, errors){
        super(message), this.status = status, this.code = code, this.errors = errors;
    }
}
async function apiRequest(path, init) {
    const response = await fetch(`/api/client/${path.replace(/^\//, "")}`, {
        ...init,
        headers: {
            ...init?.body ? {
                "Content-Type": "application/json"
            } : {},
            ...init?.headers
        },
        cache: "no-store"
    });
    if (response.status === 401) {
        window.location.replace("/login");
        throw new ApiRequestError("Your session has expired.", 401, "UNAUTHENTICATED");
    }
    const data = await response.json().catch(()=>null);
    if (!response.ok) {
        const error = data;
        throw new ApiRequestError(error?.message ?? "The request could not be completed.", response.status, error?.code, error?.errors);
    }
    return data;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/format.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "formatCurrency",
    ()=>formatCurrency,
    "formatDateTime",
    ()=>formatDateTime,
    "humanizeStatus",
    ()=>humanizeStatus,
    "isSafeHttpUrl",
    ()=>isSafeHttpUrl
]);
function formatCurrency(value) {
    return new Intl.NumberFormat("en-NG", {
        style: "currency",
        currency: "NGN",
        maximumFractionDigits: 2
    }).format(value);
}
function formatDateTime(value) {
    return value ? new Intl.DateTimeFormat("en-NG", {
        dateStyle: "medium",
        timeStyle: "short"
    }).format(new Date(value)) : "Not available";
}
function humanizeStatus(value) {
    return value.toLowerCase().replaceAll("_", " ").replace(/^./, (letter)=>letter.toUpperCase());
}
function isSafeHttpUrl(value) {
    if (!value) return false;
    try {
        const url = new URL(value);
        return url.protocol === "http:" || url.protocol === "https:";
    } catch  {
        return false;
    }
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_182one5._.js.map