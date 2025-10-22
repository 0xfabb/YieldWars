module.exports = [
"[externals]/stream [external] (stream, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("stream", () => require("stream"));

module.exports = mod;
}),
"[externals]/http [external] (http, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("http", () => require("http"));

module.exports = mod;
}),
"[externals]/url [external] (url, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("url", () => require("url"));

module.exports = mod;
}),
"[externals]/punycode [external] (punycode, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("punycode", () => require("punycode"));

module.exports = mod;
}),
"[externals]/https [external] (https, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("https", () => require("https"));

module.exports = mod;
}),
"[externals]/zlib [external] (zlib, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("zlib", () => require("zlib"));

module.exports = mod;
}),
"[project]/lib/supabase/client.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createClient",
    ()=>createClient
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@supabase/ssr/dist/module/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$createBrowserClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@supabase/ssr/dist/module/createBrowserClient.js [app-ssr] (ecmascript)");
;
function createClient() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$createBrowserClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createBrowserClient"])(("TURBOPACK compile-time value", "https://veogrelqwxpxhetwbmdx.supabase.co"), ("TURBOPACK compile-time value", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZlb2dyZWxxd3hweGhldHdibWR4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjEwNTc3MDEsImV4cCI6MjA3NjYzMzcwMX0.SVNXNReA35dnGxkn4wunuCFtutW9FexBPVL5CNrTI-E"));
}
}),
"[externals]/@prisma/client [external] (@prisma/client, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("@prisma/client", () => require("@prisma/client"));

module.exports = mod;
}),
"[project]/lib/utils.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cn",
    ()=>cn,
    "hasEnvVars",
    ()=>hasEnvVars,
    "prisma",
    ()=>prisma
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/clsx/dist/clsx.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/@prisma/client [external] (@prisma/client, cjs)");
;
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
const hasEnvVars = ("TURBOPACK compile-time value", "https://veogrelqwxpxhetwbmdx.supabase.co") && ("TURBOPACK compile-time value", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZlb2dyZWxxd3hweGhldHdibWR4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjEwNTc3MDEsImV4cCI6MjA3NjYzMzcwMX0.SVNXNReA35dnGxkn4wunuCFtutW9FexBPVL5CNrTI-E");
const prisma = new __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["PrismaClient"]();
}),
"[project]/components/ui/button.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Button",
    ()=>Button,
    "buttonVariants",
    ()=>buttonVariants
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-slot/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/class-variance-authority/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-ssr] (ecmascript)");
;
;
;
;
;
const buttonVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cva"])("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", {
    variants: {
        variant: {
            default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
            destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
            outline: "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
            secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
            ghost: "hover:bg-accent hover:text-accent-foreground",
            link: "text-primary underline-offset-4 hover:underline"
        },
        size: {
            default: "h-9 px-4 py-2",
            sm: "h-8 rounded-md px-3 text-xs",
            lg: "h-10 rounded-md px-8",
            icon: "h-9 w-9"
        }
    },
    defaultVariants: {
        variant: "default",
        size: "default"
    }
});
const Button = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](({ className, variant, size, asChild = false, ...props }, ref)=>{
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Slot"] : "button";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])(buttonVariants({
            variant,
            size,
            className
        })),
        ref: ref,
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/button.tsx",
        lineNumber: 47,
        columnNumber: 7
    }, ("TURBOPACK compile-time value", void 0));
});
Button.displayName = "Button";
;
}),
"[project]/components/ui/card.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Card",
    ()=>Card,
    "CardContent",
    ()=>CardContent,
    "CardDescription",
    ()=>CardDescription,
    "CardFooter",
    ()=>CardFooter,
    "CardHeader",
    ()=>CardHeader,
    "CardTitle",
    ()=>CardTitle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-ssr] (ecmascript)");
;
;
;
const Card = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("rounded-xl border bg-card text-card-foreground shadow", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/card.tsx",
        lineNumber: 9,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
Card.displayName = "Card";
const CardHeader = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("flex flex-col space-y-1.5 p-6", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/card.tsx",
        lineNumber: 24,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
CardHeader.displayName = "CardHeader";
const CardTitle = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("font-semibold leading-none tracking-tight", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/card.tsx",
        lineNumber: 36,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
CardTitle.displayName = "CardTitle";
const CardDescription = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("text-sm text-muted-foreground", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/card.tsx",
        lineNumber: 48,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
CardDescription.displayName = "CardDescription";
const CardContent = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("p-6 pt-0", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/card.tsx",
        lineNumber: 60,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
CardContent.displayName = "CardContent";
const CardFooter = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("flex items-center p-6 pt-0", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/card.tsx",
        lineNumber: 68,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
CardFooter.displayName = "CardFooter";
;
}),
"[project]/components/ui/badge.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Badge",
    ()=>Badge,
    "badgeVariants",
    ()=>badgeVariants
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/class-variance-authority/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-ssr] (ecmascript)");
;
;
;
const badgeVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cva"])("inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2", {
    variants: {
        variant: {
            default: "border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80",
            secondary: "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
            destructive: "border-transparent bg-destructive text-destructive-foreground shadow hover:bg-destructive/80",
            outline: "text-foreground"
        }
    },
    defaultVariants: {
        variant: "default"
    }
});
function Badge({ className, variant, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])(badgeVariants({
            variant
        }), className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/badge.tsx",
        lineNumber: 32,
        columnNumber: 5
    }, this);
}
;
}),
"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/node:crypto [external] (node:crypto, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:crypto", () => require("node:crypto"));

module.exports = mod;
}),
"[externals]/crypto [external] (crypto, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("crypto", () => require("crypto"));

module.exports = mod;
}),
"[externals]/events [external] (events, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("events", () => require("events"));

module.exports = mod;
}),
"[externals]/net [external] (net, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("net", () => require("net"));

module.exports = mod;
}),
"[externals]/tls [external] (tls, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("tls", () => require("tls"));

module.exports = mod;
}),
"[externals]/fs [external] (fs, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("fs", () => require("fs"));

module.exports = mod;
}),
"[externals]/path [external] (path, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("path", () => require("path"));

module.exports = mod;
}),
"[externals]/os [external] (os, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("os", () => require("os"));

module.exports = mod;
}),
"[externals]/buffer [external] (buffer, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("buffer", () => require("buffer"));

module.exports = mod;
}),
"[project]/lib/abis/arenaabi.json (json)", ((__turbopack_context__) => {

__turbopack_context__.v(JSON.parse("{\"_format\":\"hh3-artifact-1\",\"contractName\":\"ArenaVault\",\"sourceName\":\"contracts/ArenaVault.sol\",\"abi\":[{\"inputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"constructor\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"user\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"Deposited\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"user\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"Withdrawn\",\"type\":\"event\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"name\":\"balances\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"name\":\"battles\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"player1\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"player2\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"stake\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"winner\",\"type\":\"address\"},{\"internalType\":\"enum ArenaVault.BattleStatus\",\"name\":\"status\",\"type\":\"uint8\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"stake\",\"type\":\"uint256\"}],\"name\":\"createBattle\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"deposit\",\"outputs\":[],\"stateMutability\":\"payable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"getAllBattles\",\"outputs\":[{\"components\":[{\"internalType\":\"address\",\"name\":\"player1\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"player2\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"stake\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"winner\",\"type\":\"address\"},{\"internalType\":\"enum ArenaVault.BattleStatus\",\"name\":\"status\",\"type\":\"uint8\"}],\"internalType\":\"struct ArenaVault.Battle[]\",\"name\":\"\",\"type\":\"tuple[]\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"user\",\"type\":\"address\"}],\"name\":\"getBalance\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"battleId\",\"type\":\"uint256\"}],\"name\":\"getBattle\",\"outputs\":[{\"components\":[{\"internalType\":\"address\",\"name\":\"player1\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"player2\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"stake\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"winner\",\"type\":\"address\"},{\"internalType\":\"enum ArenaVault.BattleStatus\",\"name\":\"status\",\"type\":\"uint8\"}],\"internalType\":\"struct ArenaVault.Battle\",\"name\":\"\",\"type\":\"tuple\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"getOpenBattles\",\"outputs\":[{\"components\":[{\"internalType\":\"address\",\"name\":\"player1\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"player2\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"stake\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"winner\",\"type\":\"address\"},{\"internalType\":\"enum ArenaVault.BattleStatus\",\"name\":\"status\",\"type\":\"uint8\"}],\"internalType\":\"struct ArenaVault.Battle[]\",\"name\":\"\",\"type\":\"tuple[]\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"battleId\",\"type\":\"uint256\"}],\"name\":\"joinBattle\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"owner\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"name\":\"playerBattles\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"battleId\",\"type\":\"uint256\"}],\"name\":\"settleBattle\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"withdraw\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"}],\"bytecode\":\"0x6080604052348015600e575f5ffd5b50335f5f6101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550611ec48061005b5f395ff3fe6080604052600436106100c1575f3560e01c8063641ef4cd1161007e5780638da5cb5b116100585780638da5cb5b1461028557806394d44f12146102af578063d0e30db0146102d7578063f8b2cb4f146102e1576100c1565b8063641ef4cd146101e35780636dd0ce7a1461021f578063719d65db1461025b576100c1565b806327e235e3146100c55780632e1a7d4d1461010157806348eaa2f0146101295780634a042f0d146101515780635c93fc3d14610179578063606d2e96146101a3575b5f5ffd5b3480156100d0575f5ffd5b506100eb60048036038101906100e691906115e6565b61031d565b6040516100f89190611629565b60405180910390f35b34801561010c575f5ffd5b506101276004803603810190610122919061166c565b610332565b005b348015610134575f5ffd5b5061014f600480360381019061014a919061166c565b61049a565b005b34801561015c575f5ffd5b506101776004803603810190610172919061166c565b6106ea565b005b348015610184575f5ffd5b5061018d6109c3565b60405161019a9190611836565b60405180910390f35b3480156101ae575f5ffd5b506101c960048036038101906101c4919061166c565b610b62565b6040516101da959493929190611874565b60405180910390f35b3480156101ee575f5ffd5b50610209600480360381019061020491906118c5565b610c0d565b6040516102169190611629565b60405180910390f35b34801561022a575f5ffd5b506102456004803603810190610240919061166c565b610c38565b6040516102529190611969565b60405180910390f35b348015610266575f5ffd5b5061026f610db5565b60405161027c9190611836565b60405180910390f35b348015610290575f5ffd5b506102996110bf565b6040516102a69190611982565b60405180910390f35b3480156102ba575f5ffd5b506102d560048036038101906102d0919061166c565b6110e3565b005b6102df6113df565b005b3480156102ec575f5ffd5b50610307600480360381019061030291906115e6565b6114c4565b6040516103149190611629565b60405180910390f35b6001602052805f5260405f205f915090505481565b8060015f3373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205410156103b2576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016103a9906119f5565b60405180910390fd5b8060015f3373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f8282546103fe9190611a40565b925050819055503373ffffffffffffffffffffffffffffffffffffffff166108fc8290811502906040515f60405180830381858888f19350505050158015610448573d5f5f3e3d5ffd5b503373ffffffffffffffffffffffffffffffffffffffff167f7084f5476618d8e60b11ef0d7d3f06914655adb8793e28ff7f018d4c76d505d58260405161048f9190611629565b60405180910390a250565b5f600282815481106104af576104ae611a73565b5b905f5260205f2090600402019050600160028111156104d1576104d06116de565b5b8160030160149054906101000a900460ff1660028111156104f5576104f46116de565b5b14610535576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161052c90611aea565b60405180910390fd5b5f42825f015f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff16836001015f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1660405160200161059093929190611b6d565b604051602081830303815290604052805190602001205f1c90505f5f6002836105b99190611bd6565b146105e757826001015f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1661060b565b825f015f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff165b90505f6002846002015461061f9190611c06565b90508060015f8473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f82825461066d9190611c47565b9250508190555081846003015f6101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060028460030160146101000a81548160ff021916908360028111156106de576106dd6116de565b5b02179055505050505050565b5f600282815481106106ff576106fe611a73565b5b905f5260205f20906004020190505f60028111156107205761071f6116de565b5b8160030160149054906101000a900460ff166002811115610744576107436116de565b5b14610784576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161077b90611cc4565b60405180910390fd5b3373ffffffffffffffffffffffffffffffffffffffff16815f015f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1603610814576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161080b90611d2c565b60405180910390fd5b806002015460015f3373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f20541015610898576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161088f90611d94565b60405180910390fd5b806002015460015f3373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f8282546108e89190611a40565b9250508190555033816001015f6101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060018160030160146101000a81548160ff02191690836002811115610959576109586116de565b5b021790555060035f3373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f2082908060018154018082558091505060019003905f5260205f20015f90919091909150555050565b60606002805480602002602001604051908101604052809291908181526020015f905b82821015610b59578382905f5260205f2090600402016040518060a00160405290815f82015f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001600182015f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200160028201548152602001600382015f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016003820160149054906101000a900460ff166002811115610b3457610b336116de565b5b6002811115610b4657610b456116de565b5b81525050815260200190600101906109e6565b50505050905090565b60028181548110610b71575f80fd5b905f5260205f2090600402015f91509050805f015f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690806001015f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690806002015490806003015f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff16908060030160149054906101000a900460ff16905085565b6003602052815f5260405f208181548110610c26575f80fd5b905f5260205f20015f91509150505481565b610c4061150a565b60028281548110610c5457610c53611a73565b5b905f5260205f2090600402016040518060a00160405290815f82015f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001600182015f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200160028201548152602001600382015f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016003820160149054906101000a900460ff166002811115610d9857610d976116de565b5b6002811115610daa57610da96116de565b5b815250509050919050565b60605f5f90505f5f90505b600280549050811015610e44575f6002811115610de057610ddf6116de565b5b60028281548110610df457610df3611a73565b5b905f5260205f20906004020160030160149054906101000a900460ff166002811115610e2357610e226116de565b5b03610e37578180610e3390611db2565b9250505b8080600101915050610dc0565b505f8167ffffffffffffffff811115610e6057610e5f611df9565b5b604051908082528060200260200182016040528015610e9957816020015b610e8661150a565b815260200190600190039081610e7e5790505b5090505f5f90505f5f90505b6002805490508110156110b5575f6002811115610ec557610ec46116de565b5b60028281548110610ed957610ed8611a73565b5b905f5260205f20906004020160030160149054906101000a900460ff166002811115610f0857610f076116de565b5b036110a85760028181548110610f2157610f20611a73565b5b905f5260205f2090600402016040518060a00160405290815f82015f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001600182015f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200160028201548152602001600382015f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016003820160149054906101000a900460ff166002811115611065576110646116de565b5b6002811115611077576110766116de565b5b8152505083838151811061108e5761108d611a73565b5b602002602001018190525081806110a490611db2565b9250505b8080600101915050610ea5565b5081935050505090565b5f5f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b8060015f3373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f20541015611163576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161115a90611d94565b60405180910390fd5b8060015f3373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f8282546111af9190611a40565b925050819055505f6040518060a001604052803373ffffffffffffffffffffffffffffffffffffffff1681526020015f73ffffffffffffffffffffffffffffffffffffffff1681526020018381526020015f73ffffffffffffffffffffffffffffffffffffffff1681526020015f600281111561122f5761122e6116de565b5b8152509050600281908060018154018082558091505060019003905f5260205f2090600402015f909190919091505f820151815f015f6101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506020820151816001015f6101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550604082015181600201556060820151816003015f6101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060808201518160030160146101000a81548160ff02191690836002811115611362576113616116de565b5b0217905550505060035f3373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f2060016002805490506113b89190611a40565b908060018154018082558091505060019003905f5260205f20015f90919091909150555050565b5f3411611421576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161141890611e70565b60405180910390fd5b3460015f3373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f82825461146d9190611c47565b925050819055503373ffffffffffffffffffffffffffffffffffffffff167f2da466a7b24304f47e87fa2e1e5a81b9831ce54fec19055ce277ca2f39ba42c4346040516114ba9190611629565b60405180910390a2565b5f60015f8373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f20549050919050565b6040518060a001604052805f73ffffffffffffffffffffffffffffffffffffffff1681526020015f73ffffffffffffffffffffffffffffffffffffffff1681526020015f81526020015f73ffffffffffffffffffffffffffffffffffffffff1681526020015f6002811115611582576115816116de565b5b81525090565b5f5ffd5b5f73ffffffffffffffffffffffffffffffffffffffff82169050919050565b5f6115b58261158c565b9050919050565b6115c5816115ab565b81146115cf575f5ffd5b50565b5f813590506115e0816115bc565b92915050565b5f602082840312156115fb576115fa611588565b5b5f611608848285016115d2565b91505092915050565b5f819050919050565b61162381611611565b82525050565b5f60208201905061163c5f83018461161a565b92915050565b61164b81611611565b8114611655575f5ffd5b50565b5f8135905061166681611642565b92915050565b5f6020828403121561168157611680611588565b5b5f61168e84828501611658565b91505092915050565b5f81519050919050565b5f82825260208201905092915050565b5f819050602082019050919050565b6116c9816115ab565b82525050565b6116d881611611565b82525050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52602160045260245ffd5b6003811061171c5761171b6116de565b5b50565b5f81905061172c8261170b565b919050565b5f61173b8261171f565b9050919050565b61174b81611731565b82525050565b60a082015f8201516117655f8501826116c0565b50602082015161177860208501826116c0565b50604082015161178b60408501826116cf565b50606082015161179e60608501826116c0565b5060808201516117b16080850182611742565b50505050565b5f6117c28383611751565b60a08301905092915050565b5f602082019050919050565b5f6117e482611697565b6117ee81856116a1565b93506117f9836116b1565b805f5b8381101561182957815161181088826117b7565b975061181b836117ce565b9250506001810190506117fc565b5085935050505092915050565b5f6020820190508181035f83015261184e81846117da565b905092915050565b61185f816115ab565b82525050565b61186e81611731565b82525050565b5f60a0820190506118875f830188611856565b6118946020830187611856565b6118a1604083018661161a565b6118ae6060830185611856565b6118bb6080830184611865565b9695505050505050565b5f5f604083850312156118db576118da611588565b5b5f6118e8858286016115d2565b92505060206118f985828601611658565b9150509250929050565b60a082015f8201516119175f8501826116c0565b50602082015161192a60208501826116c0565b50604082015161193d60408501826116cf565b50606082015161195060608501826116c0565b5060808201516119636080850182611742565b50505050565b5f60a08201905061197c5f830184611903565b92915050565b5f6020820190506119955f830184611856565b92915050565b5f82825260208201905092915050565b7f496e73756666696369656e742062616c616e63650000000000000000000000005f82015250565b5f6119df60148361199b565b91506119ea826119ab565b602082019050919050565b5f6020820190508181035f830152611a0c816119d3565b9050919050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52601160045260245ffd5b5f611a4a82611611565b9150611a5583611611565b9250828203905081811115611a6d57611a6c611a13565b5b92915050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52603260045260245ffd5b7f426174746c65206e6f74206f6e676f696e6700000000000000000000000000005f82015250565b5f611ad460128361199b565b9150611adf82611aa0565b602082019050919050565b5f6020820190508181035f830152611b0181611ac8565b9050919050565b5f819050919050565b611b22611b1d82611611565b611b08565b82525050565b5f8160601b9050919050565b5f611b3e82611b28565b9050919050565b5f611b4f82611b34565b9050919050565b611b67611b62826115ab565b611b45565b82525050565b5f611b788286611b11565b602082019150611b888285611b56565b601482019150611b988284611b56565b601482019150819050949350505050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52601260045260245ffd5b5f611be082611611565b9150611beb83611611565b925082611bfb57611bfa611ba9565b5b828206905092915050565b5f611c1082611611565b9150611c1b83611611565b9250828202611c2981611611565b91508282048414831517611c4057611c3f611a13565b5b5092915050565b5f611c5182611611565b9150611c5c83611611565b9250828201905080821115611c7457611c73611a13565b5b92915050565b7f426174746c65206e6f74206f70656e00000000000000000000000000000000005f82015250565b5f611cae600f8361199b565b9150611cb982611c7a565b602082019050919050565b5f6020820190508181035f830152611cdb81611ca2565b9050919050565b7f43616e6e6f74206a6f696e206f776e20626174746c65000000000000000000005f82015250565b5f611d1660168361199b565b9150611d2182611ce2565b602082019050919050565b5f6020820190508181035f830152611d4381611d0a565b9050919050565b7f4e6f7420656e6f7567682062616c616e636500000000000000000000000000005f82015250565b5f611d7e60128361199b565b9150611d8982611d4a565b602082019050919050565b5f6020820190508181035f830152611dab81611d72565b9050919050565b5f611dbc82611611565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8203611dee57611ded611a13565b5b600182019050919050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b7f4e6f204554482073656e740000000000000000000000000000000000000000005f82015250565b5f611e5a600b8361199b565b9150611e6582611e26565b602082019050919050565b5f6020820190508181035f830152611e8781611e4e565b905091905056fea2646970667358221220a0e55005f5eab2864697408cf76670f1396a103b2b17201bda0ca4b5de2cee5d64736f6c634300081c0033\",\"deployedBytecode\":\"0x6080604052600436106100c1575f3560e01c8063641ef4cd1161007e5780638da5cb5b116100585780638da5cb5b1461028557806394d44f12146102af578063d0e30db0146102d7578063f8b2cb4f146102e1576100c1565b8063641ef4cd146101e35780636dd0ce7a1461021f578063719d65db1461025b576100c1565b806327e235e3146100c55780632e1a7d4d1461010157806348eaa2f0146101295780634a042f0d146101515780635c93fc3d14610179578063606d2e96146101a3575b5f5ffd5b3480156100d0575f5ffd5b506100eb60048036038101906100e691906115e6565b61031d565b6040516100f89190611629565b60405180910390f35b34801561010c575f5ffd5b506101276004803603810190610122919061166c565b610332565b005b348015610134575f5ffd5b5061014f600480360381019061014a919061166c565b61049a565b005b34801561015c575f5ffd5b506101776004803603810190610172919061166c565b6106ea565b005b348015610184575f5ffd5b5061018d6109c3565b60405161019a9190611836565b60405180910390f35b3480156101ae575f5ffd5b506101c960048036038101906101c4919061166c565b610b62565b6040516101da959493929190611874565b60405180910390f35b3480156101ee575f5ffd5b50610209600480360381019061020491906118c5565b610c0d565b6040516102169190611629565b60405180910390f35b34801561022a575f5ffd5b506102456004803603810190610240919061166c565b610c38565b6040516102529190611969565b60405180910390f35b348015610266575f5ffd5b5061026f610db5565b60405161027c9190611836565b60405180910390f35b348015610290575f5ffd5b506102996110bf565b6040516102a69190611982565b60405180910390f35b3480156102ba575f5ffd5b506102d560048036038101906102d0919061166c565b6110e3565b005b6102df6113df565b005b3480156102ec575f5ffd5b50610307600480360381019061030291906115e6565b6114c4565b6040516103149190611629565b60405180910390f35b6001602052805f5260405f205f915090505481565b8060015f3373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205410156103b2576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016103a9906119f5565b60405180910390fd5b8060015f3373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f8282546103fe9190611a40565b925050819055503373ffffffffffffffffffffffffffffffffffffffff166108fc8290811502906040515f60405180830381858888f19350505050158015610448573d5f5f3e3d5ffd5b503373ffffffffffffffffffffffffffffffffffffffff167f7084f5476618d8e60b11ef0d7d3f06914655adb8793e28ff7f018d4c76d505d58260405161048f9190611629565b60405180910390a250565b5f600282815481106104af576104ae611a73565b5b905f5260205f2090600402019050600160028111156104d1576104d06116de565b5b8160030160149054906101000a900460ff1660028111156104f5576104f46116de565b5b14610535576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161052c90611aea565b60405180910390fd5b5f42825f015f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff16836001015f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1660405160200161059093929190611b6d565b604051602081830303815290604052805190602001205f1c90505f5f6002836105b99190611bd6565b146105e757826001015f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1661060b565b825f015f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff165b90505f6002846002015461061f9190611c06565b90508060015f8473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f82825461066d9190611c47565b9250508190555081846003015f6101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060028460030160146101000a81548160ff021916908360028111156106de576106dd6116de565b5b02179055505050505050565b5f600282815481106106ff576106fe611a73565b5b905f5260205f20906004020190505f60028111156107205761071f6116de565b5b8160030160149054906101000a900460ff166002811115610744576107436116de565b5b14610784576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161077b90611cc4565b60405180910390fd5b3373ffffffffffffffffffffffffffffffffffffffff16815f015f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1603610814576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161080b90611d2c565b60405180910390fd5b806002015460015f3373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f20541015610898576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161088f90611d94565b60405180910390fd5b806002015460015f3373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f8282546108e89190611a40565b9250508190555033816001015f6101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060018160030160146101000a81548160ff02191690836002811115610959576109586116de565b5b021790555060035f3373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f2082908060018154018082558091505060019003905f5260205f20015f90919091909150555050565b60606002805480602002602001604051908101604052809291908181526020015f905b82821015610b59578382905f5260205f2090600402016040518060a00160405290815f82015f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001600182015f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200160028201548152602001600382015f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016003820160149054906101000a900460ff166002811115610b3457610b336116de565b5b6002811115610b4657610b456116de565b5b81525050815260200190600101906109e6565b50505050905090565b60028181548110610b71575f80fd5b905f5260205f2090600402015f91509050805f015f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690806001015f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690806002015490806003015f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff16908060030160149054906101000a900460ff16905085565b6003602052815f5260405f208181548110610c26575f80fd5b905f5260205f20015f91509150505481565b610c4061150a565b60028281548110610c5457610c53611a73565b5b905f5260205f2090600402016040518060a00160405290815f82015f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001600182015f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200160028201548152602001600382015f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016003820160149054906101000a900460ff166002811115610d9857610d976116de565b5b6002811115610daa57610da96116de565b5b815250509050919050565b60605f5f90505f5f90505b600280549050811015610e44575f6002811115610de057610ddf6116de565b5b60028281548110610df457610df3611a73565b5b905f5260205f20906004020160030160149054906101000a900460ff166002811115610e2357610e226116de565b5b03610e37578180610e3390611db2565b9250505b8080600101915050610dc0565b505f8167ffffffffffffffff811115610e6057610e5f611df9565b5b604051908082528060200260200182016040528015610e9957816020015b610e8661150a565b815260200190600190039081610e7e5790505b5090505f5f90505f5f90505b6002805490508110156110b5575f6002811115610ec557610ec46116de565b5b60028281548110610ed957610ed8611a73565b5b905f5260205f20906004020160030160149054906101000a900460ff166002811115610f0857610f076116de565b5b036110a85760028181548110610f2157610f20611a73565b5b905f5260205f2090600402016040518060a00160405290815f82015f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001600182015f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200160028201548152602001600382015f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016003820160149054906101000a900460ff166002811115611065576110646116de565b5b6002811115611077576110766116de565b5b8152505083838151811061108e5761108d611a73565b5b602002602001018190525081806110a490611db2565b9250505b8080600101915050610ea5565b5081935050505090565b5f5f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b8060015f3373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f20541015611163576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161115a90611d94565b60405180910390fd5b8060015f3373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f8282546111af9190611a40565b925050819055505f6040518060a001604052803373ffffffffffffffffffffffffffffffffffffffff1681526020015f73ffffffffffffffffffffffffffffffffffffffff1681526020018381526020015f73ffffffffffffffffffffffffffffffffffffffff1681526020015f600281111561122f5761122e6116de565b5b8152509050600281908060018154018082558091505060019003905f5260205f2090600402015f909190919091505f820151815f015f6101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506020820151816001015f6101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550604082015181600201556060820151816003015f6101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060808201518160030160146101000a81548160ff02191690836002811115611362576113616116de565b5b0217905550505060035f3373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f2060016002805490506113b89190611a40565b908060018154018082558091505060019003905f5260205f20015f90919091909150555050565b5f3411611421576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161141890611e70565b60405180910390fd5b3460015f3373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f82825461146d9190611c47565b925050819055503373ffffffffffffffffffffffffffffffffffffffff167f2da466a7b24304f47e87fa2e1e5a81b9831ce54fec19055ce277ca2f39ba42c4346040516114ba9190611629565b60405180910390a2565b5f60015f8373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f20549050919050565b6040518060a001604052805f73ffffffffffffffffffffffffffffffffffffffff1681526020015f73ffffffffffffffffffffffffffffffffffffffff1681526020015f81526020015f73ffffffffffffffffffffffffffffffffffffffff1681526020015f6002811115611582576115816116de565b5b81525090565b5f5ffd5b5f73ffffffffffffffffffffffffffffffffffffffff82169050919050565b5f6115b58261158c565b9050919050565b6115c5816115ab565b81146115cf575f5ffd5b50565b5f813590506115e0816115bc565b92915050565b5f602082840312156115fb576115fa611588565b5b5f611608848285016115d2565b91505092915050565b5f819050919050565b61162381611611565b82525050565b5f60208201905061163c5f83018461161a565b92915050565b61164b81611611565b8114611655575f5ffd5b50565b5f8135905061166681611642565b92915050565b5f6020828403121561168157611680611588565b5b5f61168e84828501611658565b91505092915050565b5f81519050919050565b5f82825260208201905092915050565b5f819050602082019050919050565b6116c9816115ab565b82525050565b6116d881611611565b82525050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52602160045260245ffd5b6003811061171c5761171b6116de565b5b50565b5f81905061172c8261170b565b919050565b5f61173b8261171f565b9050919050565b61174b81611731565b82525050565b60a082015f8201516117655f8501826116c0565b50602082015161177860208501826116c0565b50604082015161178b60408501826116cf565b50606082015161179e60608501826116c0565b5060808201516117b16080850182611742565b50505050565b5f6117c28383611751565b60a08301905092915050565b5f602082019050919050565b5f6117e482611697565b6117ee81856116a1565b93506117f9836116b1565b805f5b8381101561182957815161181088826117b7565b975061181b836117ce565b9250506001810190506117fc565b5085935050505092915050565b5f6020820190508181035f83015261184e81846117da565b905092915050565b61185f816115ab565b82525050565b61186e81611731565b82525050565b5f60a0820190506118875f830188611856565b6118946020830187611856565b6118a1604083018661161a565b6118ae6060830185611856565b6118bb6080830184611865565b9695505050505050565b5f5f604083850312156118db576118da611588565b5b5f6118e8858286016115d2565b92505060206118f985828601611658565b9150509250929050565b60a082015f8201516119175f8501826116c0565b50602082015161192a60208501826116c0565b50604082015161193d60408501826116cf565b50606082015161195060608501826116c0565b5060808201516119636080850182611742565b50505050565b5f60a08201905061197c5f830184611903565b92915050565b5f6020820190506119955f830184611856565b92915050565b5f82825260208201905092915050565b7f496e73756666696369656e742062616c616e63650000000000000000000000005f82015250565b5f6119df60148361199b565b91506119ea826119ab565b602082019050919050565b5f6020820190508181035f830152611a0c816119d3565b9050919050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52601160045260245ffd5b5f611a4a82611611565b9150611a5583611611565b9250828203905081811115611a6d57611a6c611a13565b5b92915050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52603260045260245ffd5b7f426174746c65206e6f74206f6e676f696e6700000000000000000000000000005f82015250565b5f611ad460128361199b565b9150611adf82611aa0565b602082019050919050565b5f6020820190508181035f830152611b0181611ac8565b9050919050565b5f819050919050565b611b22611b1d82611611565b611b08565b82525050565b5f8160601b9050919050565b5f611b3e82611b28565b9050919050565b5f611b4f82611b34565b9050919050565b611b67611b62826115ab565b611b45565b82525050565b5f611b788286611b11565b602082019150611b888285611b56565b601482019150611b988284611b56565b601482019150819050949350505050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52601260045260245ffd5b5f611be082611611565b9150611beb83611611565b925082611bfb57611bfa611ba9565b5b828206905092915050565b5f611c1082611611565b9150611c1b83611611565b9250828202611c2981611611565b91508282048414831517611c4057611c3f611a13565b5b5092915050565b5f611c5182611611565b9150611c5c83611611565b9250828201905080821115611c7457611c73611a13565b5b92915050565b7f426174746c65206e6f74206f70656e00000000000000000000000000000000005f82015250565b5f611cae600f8361199b565b9150611cb982611c7a565b602082019050919050565b5f6020820190508181035f830152611cdb81611ca2565b9050919050565b7f43616e6e6f74206a6f696e206f776e20626174746c65000000000000000000005f82015250565b5f611d1660168361199b565b9150611d2182611ce2565b602082019050919050565b5f6020820190508181035f830152611d4381611d0a565b9050919050565b7f4e6f7420656e6f7567682062616c616e636500000000000000000000000000005f82015250565b5f611d7e60128361199b565b9150611d8982611d4a565b602082019050919050565b5f6020820190508181035f830152611dab81611d72565b9050919050565b5f611dbc82611611565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8203611dee57611ded611a13565b5b600182019050919050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b7f4e6f204554482073656e740000000000000000000000000000000000000000005f82015250565b5f611e5a600b8361199b565b9150611e6582611e26565b602082019050919050565b5f6020820190508181035f830152611e8781611e4e565b905091905056fea2646970667358221220a0e55005f5eab2864697408cf76670f1396a103b2b17201bda0ca4b5de2cee5d64736f6c634300081c0033\",\"linkReferences\":{},\"deployedLinkReferences\":{},\"immutableReferences\":{},\"inputSourceName\":\"project/contracts/ArenaVault.sol\",\"buildInfoId\":\"solc-0_8_28-19932e75ff7a7929db46681cf116b20b4fc4c833\"}"));}),
"[project]/lib/arenaVault/arenaVault.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getArenaVaultContract",
    ()=>getArenaVaultContract
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__ = __turbopack_context__.i("[project]/node_modules/ethers/lib.esm/ethers.js [app-ssr] (ecmascript) <export * as ethers>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$abis$2f$arenaabi$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/lib/abis/arenaabi.json (json)");
;
;
const contractAddress = "0xEADC427fFE51D076Af599E5705856EF673297494";
const getArenaVaultContract = (signerOrProvider)=>{
    return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__["ethers"].Contract(contractAddress, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$abis$2f$arenaabi$2e$json__$28$json$29$__["default"].abi, signerOrProvider);
};
}),
"[project]/app/arena/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>BattleArena
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/supabase/client.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/button.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/card.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/badge.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$gamepad$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Gamepad2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/gamepad-2.js [app-ssr] (ecmascript) <export default as Gamepad2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wallet$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Wallet$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/wallet.js [app-ssr] (ecmascript) <export default as Wallet>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trophy$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Trophy$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trophy.js [app-ssr] (ecmascript) <export default as Trophy>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$coins$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Coins$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/coins.js [app-ssr] (ecmascript) <export default as Coins>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/zap.js [app-ssr] (ecmascript) <export default as Zap>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/users.js [app-ssr] (ecmascript) <export default as Users>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-left.js [app-ssr] (ecmascript) <export default as ArrowLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$crown$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Crown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/crown.js [app-ssr] (ecmascript) <export default as Crown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$target$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Target$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/target.js [app-ssr] (ecmascript) <export default as Target>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$flame$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Flame$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/flame.js [app-ssr] (ecmascript) <export default as Flame>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sparkles.js [app-ssr] (ecmascript) <export default as Sparkles>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__ = __turbopack_context__.i("[project]/node_modules/ethers/lib.esm/ethers.js [app-ssr] (ecmascript) <export * as ethers>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$arenaVault$2f$arenaVault$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/arenaVault/arenaVault.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
;
;
function BattleArena() {
    const [user, setUser] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [balance, setBalance] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [vaultBalance, setVaultBalance] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isLoadingBalances, setIsLoadingBalances] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [battles, setBattles] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [isLoadingBattles, setIsLoadingBattles] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isJoiningBattle, setIsJoiningBattle] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [selectedBattle, setSelectedBattle] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [battleAnimation, setBattleAnimation] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [winnerAnimation, setWinnerAnimation] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [stakeAmount, setStakeAmount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("0.1");
    const [isCreatingBattle, setIsCreatingBattle] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isSettlingBattle, setIsSettlingBattle] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const supabase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createClient"])();
    const mockLeaderboard = [
        {
            rank: 1,
            name: 'CryptoKing',
            address: '0x123...abc',
            wins: 15,
            totalEarnings: '2.45',
            streak: 5
        },
        {
            rank: 2,
            name: 'EthWarrior',
            address: '0x456...def',
            wins: 12,
            totalEarnings: '1.89',
            streak: 3
        },
        {
            rank: 3,
            name: 'DeFiMaster',
            address: '0x789...ghi',
            wins: 8,
            totalEarnings: '1.23',
            streak: 2
        }
    ];
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const checkAuth = async ()=>{
            const { data: { session } } = await supabase.auth.getSession();
            if (!session) {
                router.push("/auth/login");
                return;
            }
            try {
                const email = session.user.email;
                const response = await fetch(`/api/user/${email}`);
                if (response.ok) {
                    const userData = await response.json();
                    setUser(userData);
                }
            } catch (error) {
                console.error("Error fetching user data:", error);
            } finally{
                setIsLoading(false);
            }
        };
        checkAuth();
    }, [
        router,
        supabase.auth
    ]);
    // Fetch wallet balance from Sepolia
    const fetchWalletBalance = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async ()=>{
        if (!user?.connectedWallet) return;
        try {
            const provider = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__["ethers"].JsonRpcProvider("https://sepolia.infura.io/v3/f302b612a16e4208b8f64973e42e3b84");
            const balanceWei = await provider.getBalance(user.connectedWallet);
            const balanceEth = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__["ethers"].formatEther(balanceWei);
            setBalance(balanceEth);
            console.log(`Wallet Balance: ${balanceEth} ETH`);
        } catch (error) {
            console.error("Error fetching wallet balance:", error);
        }
    }, [
        user?.connectedWallet
    ]);
    // Fetch vault balance from contract
    const fetchVaultBalance = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async ()=>{
        if (!user?.connectedWallet) return;
        try {
            const provider = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__["ethers"].JsonRpcProvider("https://sepolia.infura.io/v3/f302b612a16e4208b8f64973e42e3b84");
            const vault = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$arenaVault$2f$arenaVault$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getArenaVaultContract"])(provider);
            const balance = await vault.getBalance(user.connectedWallet);
            const balanceEth = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__["ethers"].formatEther(balance);
            setVaultBalance(balanceEth);
            console.log("Vault balance:", balanceEth);
        } catch (error) {
            console.error("Failed to fetch vault balance:", error);
        }
    }, [
        user?.connectedWallet
    ]);
    // Fetch both balances when user connects
    const fetchAllBalances = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async ()=>{
        if (!user?.connectedWallet) return;
        setIsLoadingBalances(true);
        try {
            await Promise.all([
                fetchWalletBalance(),
                fetchVaultBalance()
            ]);
        } finally{
            setIsLoadingBalances(false);
        }
    }, [
        user?.connectedWallet,
        fetchWalletBalance,
        fetchVaultBalance
    ]);
    // Fetch battles from contract
    const fetchBattles = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async ()=>{
        if (!user?.connectedWallet) return;
        setIsLoadingBattles(true);
        try {
            const provider = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__["ethers"].JsonRpcProvider("https://sepolia.infura.io/v3/f302b612a16e4208b8f64973e42e3b84");
            const vault = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$arenaVault$2f$arenaVault$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getArenaVaultContract"])(provider);
            // Get all battles from contract
            const allBattles = await vault.getAllBattles();
            console.log("Raw battles from contract:", allBattles);
            // Transform contract data to our interface
            const transformedBattles = allBattles.map((battle, index)=>({
                    id: index,
                    player1: battle[0],
                    player2: battle[1],
                    stake: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__["ethers"].formatEther(battle[2]),
                    winner: battle[3],
                    status: battle[4],
                    // Display properties
                    stakeAmount: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__["ethers"].formatEther(battle[2]),
                    participants: battle[1] === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__["ethers"].ZeroAddress ? 1 : 2,
                    maxParticipants: 2,
                    creator: battle[0]
                }));
            setBattles(transformedBattles);
            console.log("Transformed battles:", transformedBattles);
        } catch (error) {
            console.error("Failed to fetch battles:", error);
        } finally{
            setIsLoadingBattles(false);
        }
    }, [
        user?.connectedWallet
    ]);
    // Fetch balances and battles when user is loaded
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (user?.connectedWallet) {
            fetchAllBalances();
            fetchBattles();
        }
    }, [
        user?.connectedWallet,
        fetchAllBalances,
        fetchBattles
    ]);
    const handleJoinBattle = async (battleId)=>{
        if (!user?.connectedWallet || !window.ethereum) {
            alert("Please connect your MetaMask wallet first!");
            return;
        }
        setIsJoiningBattle(true);
        setSelectedBattle(battleId.toString());
        setBattleAnimation(true);
        try {
            // Request account access
            await window.ethereum.request({
                method: 'eth_requestAccounts'
            });
            // Create provider and signer
            const provider = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__["ethers"].BrowserProvider(window.ethereum);
            const signer = await provider.getSigner();
            const vault = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$arenaVault$2f$arenaVault$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getArenaVaultContract"])(signer);
            console.log("Joining battle:", battleId);
            // Join the battle
            const tx = await vault.joinBattle(battleId);
            console.log("Transaction sent:", tx.hash);
            // Wait for transaction confirmation
            await tx.wait();
            console.log("Battle joined successfully!");
            // Refresh battles and balances
            await Promise.all([
                fetchBattles(),
                fetchAllBalances()
            ]);
            setBattleAnimation(false);
            setWinnerAnimation(true);
            setTimeout(()=>{
                setWinnerAnimation(false);
                setIsJoiningBattle(false);
                setSelectedBattle(null);
                alert("🎮 Battle joined successfully! Good luck!");
            }, 2000);
        } catch (error) {
            console.error("Failed to join battle:", error);
            setBattleAnimation(false);
            setIsJoiningBattle(false);
            setSelectedBattle(null);
            let errorMessage = "Failed to join battle. ";
            if (error && typeof error === 'object' && 'code' in error && (error.code === 4001 || error.code === 'ACTION_REJECTED')) {
                errorMessage = "Transaction was rejected by user.";
            } else if (error && typeof error === 'object' && 'reason' in error && error.reason === 'rejected') {
                errorMessage = "Transaction was rejected by user.";
            } else if (error && typeof error === 'object' && 'message' in error && typeof error.message === 'string') {
                if (error.message.includes("insufficient") || error.message.includes("Not enough balance")) {
                    errorMessage += "Insufficient balance in vault. Please deposit more ETH.";
                } else if (error.message.includes("user denied") || error.message.includes("rejected")) {
                    errorMessage = "Transaction was rejected by user.";
                } else if (error.message.includes("Battle not open")) {
                    errorMessage += "This battle is no longer available to join.";
                } else if (error.message.includes("Cannot join own battle")) {
                    errorMessage += "You cannot join your own battle.";
                } else {
                    errorMessage += error.message;
                }
            } else {
                errorMessage += "Unknown error occurred.";
            }
            alert(errorMessage);
        }
    };
    const handleCreateBattle = async ()=>{
        if (!user?.connectedWallet || !window.ethereum) {
            alert("Please connect your MetaMask wallet first!");
            return;
        }
        if (!stakeAmount || parseFloat(stakeAmount) <= 0) {
            alert("Please enter a valid stake amount!");
            return;
        }
        // Check vault balance before attempting transaction
        if (!vaultBalance || parseFloat(vaultBalance) < parseFloat(stakeAmount)) {
            alert(`Insufficient vault balance! You have ${vaultBalance || '0'} ETH in vault but need ${stakeAmount} ETH. Please deposit more ETH first.`);
            return;
        }
        setIsCreatingBattle(true);
        try {
            // Request account access
            await window.ethereum.request({
                method: 'eth_requestAccounts'
            });
            // Create provider and signer
            const provider = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__["ethers"].BrowserProvider(window.ethereum);
            const signer = await provider.getSigner();
            const vault = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$arenaVault$2f$arenaVault$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getArenaVaultContract"])(signer);
            const stakeWei = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__["ethers"].parseEther(stakeAmount);
            console.log("Creating battle with stake:", stakeAmount, "ETH (", stakeWei.toString(), "wei)");
            console.log("Current vault balance:", vaultBalance, "ETH");
            // Check balance again from contract to be sure
            const contractBalance = await vault.balances(user.connectedWallet);
            const contractBalanceEth = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__["ethers"].formatEther(contractBalance);
            console.log("Contract balance check:", contractBalanceEth, "ETH");
            if (parseFloat(contractBalanceEth) < parseFloat(stakeAmount)) {
                throw new Error(`Insufficient vault balance. Contract shows ${contractBalanceEth} ETH but need ${stakeAmount} ETH.`);
            }
            // Estimate gas first to catch errors early
            try {
                const gasEstimate = await vault.createBattle.estimateGas(stakeWei);
                console.log("Gas estimate:", gasEstimate.toString());
            } catch (gasError) {
                console.error("Gas estimation failed:", gasError);
                throw new Error("Transaction would fail. Please check your vault balance and try again.");
            }
            // Create the battle
            const tx = await vault.createBattle(stakeWei);
            console.log("Transaction sent:", tx.hash);
            // Wait for transaction confirmation
            await tx.wait();
            console.log("Battle created successfully!");
            // Refresh battles and balances
            await Promise.all([
                fetchBattles(),
                fetchAllBalances()
            ]);
            setIsCreatingBattle(false);
            alert("🎮 Battle created successfully! Waiting for opponents...");
        } catch (error) {
            console.error("Failed to create battle:", error);
            setIsCreatingBattle(false);
            let errorMessage = "Failed to create battle. ";
            if (error && typeof error === 'object' && 'code' in error && (error.code === 4001 || error.code === 'ACTION_REJECTED')) {
                errorMessage = "Transaction was rejected by user.";
            } else if (error && typeof error === 'object' && 'reason' in error && error.reason === 'rejected') {
                errorMessage = "Transaction was rejected by user.";
            } else if (error && typeof error === 'object' && 'message' in error && typeof error.message === 'string') {
                if (error.message.includes("insufficient") || error.message.includes("Not enough balance")) {
                    errorMessage += "Insufficient balance in vault. Please deposit more ETH.";
                } else if (error.message.includes("user denied") || error.message.includes("rejected")) {
                    errorMessage = "Transaction was rejected by user.";
                } else if (error.message.includes("missing revert data") || error.message.includes("CALL_EXCEPTION")) {
                    errorMessage += "Contract rejected the transaction. This usually means insufficient vault balance or invalid parameters. Please check your vault balance and try again.";
                } else if (error.message.includes("estimateGas")) {
                    errorMessage += "Transaction would fail. Please check your vault balance and ensure you have enough ETH deposited.";
                } else {
                    errorMessage += error.message;
                }
            } else {
                errorMessage += "Unknown error occurred.";
            }
            alert(errorMessage);
        }
    };
    // Settle battle function (for testing)
    const handleSettleBattle = async (battleId)=>{
        if (!user?.connectedWallet || !window.ethereum) {
            alert("Please connect your MetaMask wallet first!");
            return;
        }
        setIsSettlingBattle(true);
        try {
            // Request account access
            await window.ethereum.request({
                method: 'eth_requestAccounts'
            });
            // Create provider and signer
            const provider = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__["ethers"].BrowserProvider(window.ethereum);
            const signer = await provider.getSigner();
            const vault = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$arenaVault$2f$arenaVault$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getArenaVaultContract"])(signer);
            console.log("Settling battle:", battleId);
            // Settle the battle
            const tx = await vault.settleBattle(battleId);
            console.log("Transaction sent:", tx.hash);
            // Wait for transaction confirmation
            await tx.wait();
            console.log("Battle settled successfully!");
            // Refresh battles and balances
            await Promise.all([
                fetchBattles(),
                fetchAllBalances()
            ]);
            alert("🏆 Battle settled successfully!");
        } catch (error) {
            console.error("Failed to settle battle:", error);
            let errorMessage = "Failed to settle battle. ";
            if (error && typeof error === 'object' && 'code' in error && error.code === 4001) {
                errorMessage += "Transaction was rejected.";
            } else {
                errorMessage += error && typeof error === 'object' && 'message' in error && typeof error.message === 'string' ? error.message : "Unknown error occurred.";
            }
            alert(errorMessage);
        } finally{
            setIsSettlingBattle(false);
        }
    };
    // Deposit to vault function
    const handleDepositToVault = async (amount)=>{
        if (!user?.connectedWallet || !window.ethereum) {
            alert("Please connect your MetaMask wallet first!");
            return;
        }
        if (!amount || parseFloat(amount) <= 0) {
            alert("Please enter a valid deposit amount!");
            return;
        }
        try {
            // Request account access
            await window.ethereum.request({
                method: 'eth_requestAccounts'
            });
            // Create provider and signer
            const provider = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__["ethers"].BrowserProvider(window.ethereum);
            const signer = await provider.getSigner();
            const vault = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$arenaVault$2f$arenaVault$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getArenaVaultContract"])(signer);
            const depositWei = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__["ethers"].parseEther(amount);
            console.log("Depositing to vault:", amount, "ETH");
            // Deposit to vault
            const tx = await vault.deposit({
                value: depositWei
            });
            console.log("Transaction sent:", tx.hash);
            // Wait for transaction confirmation
            await tx.wait();
            console.log("Deposit successful!");
            // Refresh balances
            await fetchAllBalances();
            alert(`💰 Successfully deposited ${amount} ETH to your vault!`);
        } catch (error) {
            console.error("Failed to deposit:", error);
            let errorMessage = "Failed to deposit. ";
            if (error && typeof error === 'object' && 'code' in error && error.code === 4001) {
                errorMessage += "Transaction was rejected.";
            } else if (error && typeof error === 'object' && 'message' in error && typeof error.message === 'string' && error.message.includes("insufficient")) {
                errorMessage += "Insufficient wallet balance.";
            } else {
                errorMessage += error && typeof error === 'object' && 'message' in error && typeof error.message === 'string' ? error.message : "Unknown error occurred.";
            }
            alert(errorMessage);
        }
    };
    if (isLoading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen arena-gradient flex items-center justify-center",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-16 h-16 bg-primary rounded-lg flex items-center justify-center arena-glow mx-auto mb-4 animate-pulse",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$gamepad$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Gamepad2$3e$__["Gamepad2"], {
                            className: "w-8 h-8 text-primary-foreground"
                        }, void 0, false, {
                            fileName: "[project]/app/arena/page.tsx",
                            lineNumber: 483,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/arena/page.tsx",
                        lineNumber: 482,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-muted-foreground",
                        children: "Loading the Arena..."
                    }, void 0, false, {
                        fileName: "[project]/app/arena/page.tsx",
                        lineNumber: 485,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/arena/page.tsx",
                lineNumber: 481,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/arena/page.tsx",
            lineNumber: 480,
            columnNumber: 7
        }, this);
    }
    if (!user) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen arena-gradient flex items-center justify-center",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-muted-foreground mb-4",
                        children: "Please login to access the Battle Arena"
                    }, void 0, false, {
                        fileName: "[project]/app/arena/page.tsx",
                        lineNumber: 495,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                        onClick: ()=>router.push("/auth/login"),
                        children: "Login"
                    }, void 0, false, {
                        fileName: "[project]/app/arena/page.tsx",
                        lineNumber: 496,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/arena/page.tsx",
                lineNumber: 494,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/arena/page.tsx",
            lineNumber: 493,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen arena-gradient relative overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 opacity-20",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute top-1/4 left-1/4 w-64 h-64 bg-primary/30 rounded-full blur-3xl animate-pulse"
                    }, void 0, false, {
                        fileName: "[project]/app/arena/page.tsx",
                        lineNumber: 506,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000"
                    }, void 0, false, {
                        fileName: "[project]/app/arena/page.tsx",
                        lineNumber: 507,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute top-1/2 left-1/2 w-32 h-32 bg-purple-500/40 rounded-full blur-2xl animate-bounce"
                    }, void 0, false, {
                        fileName: "[project]/app/arena/page.tsx",
                        lineNumber: 508,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/arena/page.tsx",
                lineNumber: 505,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                className: "relative z-10 border-b border-border/40 backdrop-blur-sm bg-background/80",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "container mx-auto px-4 py-4 flex items-center justify-between",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center space-x-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                    variant: "ghost",
                                    onClick: ()=>router.push('/dashboard'),
                                    className: "p-2",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__["ArrowLeft"], {
                                        className: "w-5 h-5"
                                    }, void 0, false, {
                                        fileName: "[project]/app/arena/page.tsx",
                                        lineNumber: 516,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/arena/page.tsx",
                                    lineNumber: 515,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center space-x-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-8 h-8 bg-primary rounded-lg flex items-center justify-center arena-glow",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$target$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Target$3e$__["Target"], {
                                                className: "w-5 h-5 text-primary-foreground"
                                            }, void 0, false, {
                                                fileName: "[project]/app/arena/page.tsx",
                                                lineNumber: 520,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/arena/page.tsx",
                                            lineNumber: 519,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-xl sm:text-2xl font-bold arena-text-glow",
                                            children: "Battle Arena"
                                        }, void 0, false, {
                                            fileName: "[project]/app/arena/page.tsx",
                                            lineNumber: 522,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/arena/page.tsx",
                                    lineNumber: 518,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/arena/page.tsx",
                            lineNumber: 514,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center space-x-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "hidden sm:flex items-center space-x-4 text-sm",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center space-x-1",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wallet$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Wallet$3e$__["Wallet"], {
                                                    className: "w-4 h-4 text-primary"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/arena/page.tsx",
                                                    lineNumber: 530,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-muted-foreground",
                                                    children: "Wallet:"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/arena/page.tsx",
                                                    lineNumber: 531,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: `font-bold text-primary ${isLoadingBalances ? 'animate-pulse' : ''}`,
                                                    children: [
                                                        isLoadingBalances ? 'Loading...' : balance ? parseFloat(balance).toFixed(4) : '0.00',
                                                        " ETH"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/arena/page.tsx",
                                                    lineNumber: 532,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/arena/page.tsx",
                                            lineNumber: 529,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center space-x-1",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$coins$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Coins$3e$__["Coins"], {
                                                    className: "w-4 h-4 text-yellow-500"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/arena/page.tsx",
                                                    lineNumber: 537,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-muted-foreground",
                                                    children: "Vault:"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/arena/page.tsx",
                                                    lineNumber: 538,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: `font-bold text-yellow-500 ${isLoadingBalances ? 'animate-pulse' : ''}`,
                                                    children: [
                                                        isLoadingBalances ? 'Loading...' : vaultBalance ? parseFloat(vaultBalance).toFixed(4) : '0.00',
                                                        " ETH"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/arena/page.tsx",
                                                    lineNumber: 539,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/arena/page.tsx",
                                            lineNumber: 536,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/arena/page.tsx",
                                    lineNumber: 528,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center space-x-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                            size: "sm",
                                            variant: "outline",
                                            className: "arena-border-glow text-xs",
                                            onClick: ()=>{
                                                const amount = prompt("Enter amount to deposit (ETH):", "0.1");
                                                if (amount) handleDepositToVault(amount);
                                            },
                                            children: "Deposit"
                                        }, void 0, false, {
                                            fileName: "[project]/app/arena/page.tsx",
                                            lineNumber: 545,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Badge"], {
                                            variant: "secondary",
                                            className: "arena-glow",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$crown$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Crown$3e$__["Crown"], {
                                                    className: "w-3 h-3 mr-1"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/arena/page.tsx",
                                                    lineNumber: 557,
                                                    columnNumber: 17
                                                }, this),
                                                "Rank #--"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/arena/page.tsx",
                                            lineNumber: 556,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/arena/page.tsx",
                                    lineNumber: 544,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/arena/page.tsx",
                            lineNumber: 527,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/arena/page.tsx",
                    lineNumber: 513,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/arena/page.tsx",
                lineNumber: 512,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative z-10 container mx-auto px-4 py-6",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 lg:grid-cols-4 gap-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "lg:col-span-1 space-y-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Card"], {
                                    className: "arena-border-glow bg-background/90 backdrop-blur-sm",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardHeader"], {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardTitle"], {
                                                    className: "flex items-center space-x-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"], {
                                                            className: "w-5 h-5 text-primary"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/arena/page.tsx",
                                                            lineNumber: 573,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: "Battle Queue"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/arena/page.tsx",
                                                            lineNumber: 574,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/arena/page.tsx",
                                                    lineNumber: 572,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardDescription"], {
                                                    children: [
                                                        "Join an active battle or create your own",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                            fileName: "[project]/app/arena/page.tsx",
                                                            lineNumber: 578,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-xs text-muted-foreground",
                                                            children: "Battles use your vault balance, not wallet balance"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/arena/page.tsx",
                                                            lineNumber: 579,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/arena/page.tsx",
                                                    lineNumber: 576,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/arena/page.tsx",
                                            lineNumber: 571,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardContent"], {
                                            className: "space-y-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "p-3 border border-primary/20 rounded-lg bg-primary/5",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "space-y-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                className: "text-xs font-medium text-muted-foreground",
                                                                children: "Stake Amount (ETH)"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/arena/page.tsx",
                                                                lineNumber: 588,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "number",
                                                                step: "0.01",
                                                                min: "0.01",
                                                                value: stakeAmount,
                                                                onChange: (e)=>setStakeAmount(e.target.value),
                                                                className: "w-full p-2 bg-muted rounded text-sm border border-border focus:outline-none focus:ring-2 focus:ring-primary",
                                                                placeholder: "Enter stake amount",
                                                                "aria-label": "Stake amount in ETH"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/arena/page.tsx",
                                                                lineNumber: 589,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                                                onClick: handleCreateBattle,
                                                                disabled: isCreatingBattle || !user?.connectedWallet || !vaultBalance || parseFloat(vaultBalance) < parseFloat(stakeAmount),
                                                                className: "w-full bg-primary text-primary-foreground hover:bg-primary/90 text-xs arena-glow",
                                                                children: isCreatingBattle ? "Creating..." : !user?.connectedWallet ? "Connect Wallet" : !vaultBalance || parseFloat(vaultBalance) < parseFloat(stakeAmount) ? "Insufficient Vault Balance" : "Create Battle"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/arena/page.tsx",
                                                                lineNumber: 599,
                                                                columnNumber: 21
                                                            }, this),
                                                            vaultBalance && parseFloat(vaultBalance) < parseFloat(stakeAmount) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-xs text-red-400 mt-1",
                                                                children: "Deposit more ETH to your vault to create this battle"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/arena/page.tsx",
                                                                lineNumber: 610,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "text-xs text-muted-foreground mt-1 space-y-1",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        children: [
                                                                            " Creating a battle will deduct ",
                                                                            stakeAmount,
                                                                            " ETH from your vault balance"
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/app/arena/page.tsx",
                                                                        lineNumber: 615,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: `${vaultBalance && parseFloat(vaultBalance) >= parseFloat(stakeAmount) ? 'text-green-400' : 'text-red-400'}`,
                                                                        children: [
                                                                            "Vault: ",
                                                                            vaultBalance || '0',
                                                                            " ETH | Required: ",
                                                                            stakeAmount,
                                                                            " ETH"
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/app/arena/page.tsx",
                                                                        lineNumber: 616,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/arena/page.tsx",
                                                                lineNumber: 614,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/arena/page.tsx",
                                                        lineNumber: 587,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/arena/page.tsx",
                                                    lineNumber: 586,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "space-y-2",
                                                    children: isLoadingBattles ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-center py-4",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "animate-pulse text-sm text-muted-foreground",
                                                            children: "Loading battles..."
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/arena/page.tsx",
                                                            lineNumber: 627,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/arena/page.tsx",
                                                        lineNumber: 626,
                                                        columnNumber: 21
                                                    }, this) : battles.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-center py-4",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "text-sm text-muted-foreground",
                                                                children: "No battles available"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/arena/page.tsx",
                                                                lineNumber: 631,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "text-xs text-muted-foreground mt-1",
                                                                children: "Create the first battle!"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/arena/page.tsx",
                                                                lineNumber: 632,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/arena/page.tsx",
                                                        lineNumber: 630,
                                                        columnNumber: 21
                                                    }, this) : battles.map((battle)=>{
                                                        const statusText = battle.status === 0 ? 'Open' : battle.status === 1 ? 'Ongoing' : 'Completed';
                                                        const statusVariant = battle.status === 0 ? 'secondary' : battle.status === 1 ? 'default' : 'outline';
                                                        const canJoin = battle.status === 0 && battle.player1.toLowerCase() !== user?.connectedWallet?.toLowerCase();
                                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "p-3 border border-border/40 rounded-lg bg-muted/20 hover:bg-muted/40 transition-colors",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex justify-between items-start mb-2",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "flex items-center space-x-2",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$coins$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Coins$3e$__["Coins"], {
                                                                                    className: "w-4 h-4 text-yellow-500"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/app/arena/page.tsx",
                                                                                    lineNumber: 644,
                                                                                    columnNumber: 31
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    className: "font-bold text-yellow-500",
                                                                                    children: [
                                                                                        parseFloat(battle.stakeAmount || '0').toFixed(4),
                                                                                        " ETH"
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/app/arena/page.tsx",
                                                                                    lineNumber: 645,
                                                                                    columnNumber: 31
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/app/arena/page.tsx",
                                                                            lineNumber: 643,
                                                                            columnNumber: 29
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Badge"], {
                                                                            variant: statusVariant,
                                                                            children: statusText
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/arena/page.tsx",
                                                                            lineNumber: 647,
                                                                            columnNumber: 29
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/arena/page.tsx",
                                                                    lineNumber: 642,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "text-xs text-muted-foreground mb-2",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            children: [
                                                                                "Creator: ",
                                                                                battle.creator?.slice(0, 6),
                                                                                "...",
                                                                                battle.creator?.slice(-4)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/app/arena/page.tsx",
                                                                            lineNumber: 652,
                                                                            columnNumber: 29
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            children: [
                                                                                battle.participants,
                                                                                "/",
                                                                                battle.maxParticipants,
                                                                                " players"
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/app/arena/page.tsx",
                                                                            lineNumber: 653,
                                                                            columnNumber: 29
                                                                        }, this),
                                                                        battle.status === 1 && battle.winner !== __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__["ethers"].ZeroAddress && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "text-green-400",
                                                                            children: [
                                                                                "Winner: ",
                                                                                battle.winner.slice(0, 6),
                                                                                "...",
                                                                                battle.winner.slice(-4)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/app/arena/page.tsx",
                                                                            lineNumber: 655,
                                                                            columnNumber: 31
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/arena/page.tsx",
                                                                    lineNumber: 651,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "space-y-1",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                                                            size: "sm",
                                                                            className: "w-full text-xs",
                                                                            disabled: !canJoin || isJoiningBattle || !user?.connectedWallet,
                                                                            onClick: ()=>handleJoinBattle(battle.id),
                                                                            children: selectedBattle === battle.id.toString() && isJoiningBattle ? "Joining..." : !user?.connectedWallet ? "Connect Wallet" : battle.status !== 0 ? `Battle ${statusText}` : battle.player1.toLowerCase() === user?.connectedWallet?.toLowerCase() ? "Your Battle" : "Join Battle"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/arena/page.tsx",
                                                                            lineNumber: 659,
                                                                            columnNumber: 29
                                                                        }, this),
                                                                        battle.status === 1 && battle.participants === 2 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                                                            size: "sm",
                                                                            variant: "outline",
                                                                            className: "w-full text-xs",
                                                                            disabled: isSettlingBattle || !user?.connectedWallet,
                                                                            onClick: ()=>handleSettleBattle(battle.id),
                                                                            children: isSettlingBattle ? "Settling..." : "🏆 Settle Battle"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/arena/page.tsx",
                                                                            lineNumber: 672,
                                                                            columnNumber: 31
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/arena/page.tsx",
                                                                    lineNumber: 658,
                                                                    columnNumber: 27
                                                                }, this)
                                                            ]
                                                        }, battle.id, true, {
                                                            fileName: "[project]/app/arena/page.tsx",
                                                            lineNumber: 641,
                                                            columnNumber: 25
                                                        }, this);
                                                    })
                                                }, void 0, false, {
                                                    fileName: "[project]/app/arena/page.tsx",
                                                    lineNumber: 624,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/arena/page.tsx",
                                            lineNumber: 584,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/arena/page.tsx",
                                    lineNumber: 570,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Card"], {
                                    className: "arena-border-glow bg-background/90 backdrop-blur-sm",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardHeader"], {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardTitle"], {
                                                className: "flex items-center space-x-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trophy$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Trophy$3e$__["Trophy"], {
                                                        className: "w-5 h-5 text-yellow-500"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/arena/page.tsx",
                                                        lineNumber: 695,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: "Top Warriors"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/arena/page.tsx",
                                                        lineNumber: 696,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/arena/page.tsx",
                                                lineNumber: 694,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/arena/page.tsx",
                                            lineNumber: 693,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardContent"], {
                                            className: "space-y-2",
                                            children: mockLeaderboard.slice(0, 3).map((entry)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center justify-between p-2 rounded bg-muted/20",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center space-x-2",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: `w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${entry.rank === 1 ? 'bg-yellow-500 text-black' : entry.rank === 2 ? 'bg-gray-400 text-black' : 'bg-orange-600 text-white'}`,
                                                                    children: entry.rank
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/arena/page.tsx",
                                                                    lineNumber: 703,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "text-sm font-medium",
                                                                            children: entry.name
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/arena/page.tsx",
                                                                            lineNumber: 711,
                                                                            columnNumber: 25
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "text-xs text-muted-foreground",
                                                                            children: [
                                                                                entry.wins,
                                                                                " wins"
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/app/arena/page.tsx",
                                                                            lineNumber: 712,
                                                                            columnNumber: 25
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/arena/page.tsx",
                                                                    lineNumber: 710,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/arena/page.tsx",
                                                            lineNumber: 702,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-right",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "text-sm font-bold text-primary",
                                                                    children: [
                                                                        entry.totalEarnings,
                                                                        " ETH"
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/arena/page.tsx",
                                                                    lineNumber: 716,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "text-xs text-muted-foreground flex items-center",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$flame$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Flame$3e$__["Flame"], {
                                                                            className: "w-3 h-3 mr-1 text-orange-500"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/arena/page.tsx",
                                                                            lineNumber: 718,
                                                                            columnNumber: 25
                                                                        }, this),
                                                                        entry.streak
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/arena/page.tsx",
                                                                    lineNumber: 717,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/arena/page.tsx",
                                                            lineNumber: 715,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, entry.rank, true, {
                                                    fileName: "[project]/app/arena/page.tsx",
                                                    lineNumber: 701,
                                                    columnNumber: 19
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/app/arena/page.tsx",
                                            lineNumber: 699,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/arena/page.tsx",
                                    lineNumber: 692,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/arena/page.tsx",
                            lineNumber: 569,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "lg:col-span-3",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Card"], {
                                className: "arena-border-glow bg-background/90 backdrop-blur-sm min-h-[600px] relative overflow-hidden",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardContent"], {
                                    className: "p-0",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "relative h-[600px] flex items-center justify-center",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: `absolute z-20 ${battleAnimation ? 'battle-pulse' : 'eth-float'}`,
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "w-32 h-32 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center arena-glow shadow-2xl neon-flicker",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-center",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$coins$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Coins$3e$__["Coins"], {
                                                                    className: "w-8 h-8 text-black mx-auto mb-1"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/arena/page.tsx",
                                                                    lineNumber: 739,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "text-black font-bold text-sm",
                                                                    children: "ETH POT"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/arena/page.tsx",
                                                                    lineNumber: 740,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "text-black font-bold text-xs",
                                                                    children: "0.5 ETH"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/arena/page.tsx",
                                                                    lineNumber: 741,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/arena/page.tsx",
                                                            lineNumber: 738,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/arena/page.tsx",
                                                        lineNumber: 737,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/arena/page.tsx",
                                                    lineNumber: 736,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "absolute top-20 left-1/2 transform -translate-x-1/2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: `w-20 h-20 bg-primary rounded-full flex items-center justify-center arena-glow ${winnerAnimation ? 'victory-sparkle' : 'battle-pulse'}`,
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"], {
                                                                className: "w-8 h-8 text-primary-foreground"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/arena/page.tsx",
                                                                lineNumber: 749,
                                                                columnNumber: 23
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/arena/page.tsx",
                                                            lineNumber: 748,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-center mt-2",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "text-sm font-bold arena-text-glow",
                                                                    children: "You"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/arena/page.tsx",
                                                                    lineNumber: 752,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Badge"], {
                                                                    variant: "secondary",
                                                                    className: "text-xs arena-glow",
                                                                    children: "Ready"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/arena/page.tsx",
                                                                    lineNumber: 753,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/arena/page.tsx",
                                                            lineNumber: 751,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/arena/page.tsx",
                                                    lineNumber: 747,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "absolute bottom-20 left-1/2 transform -translate-x-1/2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: `w-20 h-20 bg-red-500 rounded-full flex items-center justify-center arena-glow ${battleAnimation ? 'cyber-glitch' : 'battle-pulse'}`,
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"], {
                                                                className: "w-8 h-8 text-white"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/arena/page.tsx",
                                                                lineNumber: 759,
                                                                columnNumber: 23
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/arena/page.tsx",
                                                            lineNumber: 758,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-center mt-2",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "text-sm font-bold arena-text-glow",
                                                                    children: "Opponent"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/arena/page.tsx",
                                                                    lineNumber: 762,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Badge"], {
                                                                    variant: "destructive",
                                                                    className: "text-xs arena-glow",
                                                                    children: "Waiting"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/arena/page.tsx",
                                                                    lineNumber: 763,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/arena/page.tsx",
                                                            lineNumber: 761,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/arena/page.tsx",
                                                    lineNumber: 757,
                                                    columnNumber: 19
                                                }, this),
                                                battleAnimation && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "absolute inset-0 bg-primary/20 animate-pulse"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/arena/page.tsx",
                                                            lineNumber: 770,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__["Zap"], {
                                                                className: "w-16 h-16 text-yellow-500 animate-spin"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/arena/page.tsx",
                                                                lineNumber: 772,
                                                                columnNumber: 25
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/arena/page.tsx",
                                                            lineNumber: 771,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true),
                                                winnerAnimation && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "absolute inset-0 flex items-center justify-center bg-green-500/20",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-center",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"], {
                                                                className: "w-24 h-24 text-yellow-500 animate-bounce mx-auto mb-4"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/arena/page.tsx",
                                                                lineNumber: 781,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "text-4xl font-bold text-green-500 animate-pulse",
                                                                children: "VICTORY!"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/arena/page.tsx",
                                                                lineNumber: 782,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "text-xl text-muted-foreground",
                                                                children: "You won 0.5 ETH!"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/arena/page.tsx",
                                                                lineNumber: 783,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/arena/page.tsx",
                                                        lineNumber: 780,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/arena/page.tsx",
                                                    lineNumber: 779,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "absolute inset-8 border-4 border-primary/30 rounded-full arena-ring-pulse"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/arena/page.tsx",
                                                    lineNumber: 789,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "absolute inset-16 border-2 border-primary/20 rounded-full arena-ring-pulse arena-ring-delay-1"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/arena/page.tsx",
                                                    lineNumber: 790,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "absolute inset-24 border border-primary/10 rounded-full arena-ring-pulse arena-ring-delay-2"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/arena/page.tsx",
                                                    lineNumber: 791,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/arena/page.tsx",
                                            lineNumber: 733,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "absolute bottom-0 left-0 right-0 p-4 bg-background/90 backdrop-blur-sm border-t border-border/40",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center justify-between",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center space-x-4",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Badge"], {
                                                                variant: "secondary",
                                                                className: "arena-glow",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$target$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Target$3e$__["Target"], {
                                                                        className: "w-3 h-3 mr-1"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/arena/page.tsx",
                                                                        lineNumber: 799,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    "Arena Status: Active"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/arena/page.tsx",
                                                                lineNumber: 798,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "text-sm text-muted-foreground",
                                                                children: [
                                                                    "Next battle starts in: ",
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "font-bold text-primary",
                                                                        children: "--:--"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/arena/page.tsx",
                                                                        lineNumber: 803,
                                                                        columnNumber: 48
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/arena/page.tsx",
                                                                lineNumber: 802,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/arena/page.tsx",
                                                        lineNumber: 797,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center space-x-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                                                size: "sm",
                                                                variant: "outline",
                                                                className: "arena-border-glow",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trophy$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Trophy$3e$__["Trophy"], {
                                                                        className: "w-4 h-4 mr-1"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/arena/page.tsx",
                                                                        lineNumber: 808,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    "View Stats"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/arena/page.tsx",
                                                                lineNumber: 807,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                                                size: "sm",
                                                                className: "arena-glow",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__["Zap"], {
                                                                        className: "w-4 h-4 mr-1"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/arena/page.tsx",
                                                                        lineNumber: 812,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    "Quick Battle"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/arena/page.tsx",
                                                                lineNumber: 811,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/arena/page.tsx",
                                                        lineNumber: 806,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/arena/page.tsx",
                                                lineNumber: 796,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/arena/page.tsx",
                                            lineNumber: 795,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/arena/page.tsx",
                                    lineNumber: 731,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/arena/page.tsx",
                                lineNumber: 730,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/arena/page.tsx",
                            lineNumber: 729,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/arena/page.tsx",
                    lineNumber: 566,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/arena/page.tsx",
                lineNumber: 565,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/arena/page.tsx",
        lineNumber: 503,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__7e132e0e._.js.map