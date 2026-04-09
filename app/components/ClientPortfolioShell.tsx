"use client";

import dynamic from "next/dynamic";

const PortfolioShellNoSSR = dynamic(
    () => import("@/app/components/PortfolioShell").then((mod) => mod.PortfolioShell),
    { ssr: false }
);

export function ClientPortfolioShell() {
    return <PortfolioShellNoSSR />;
}