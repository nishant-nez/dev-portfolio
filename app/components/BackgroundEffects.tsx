"use client";

import { motion } from "framer-motion";

export function BackgroundEffects() {
    return (
        <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_15%,rgba(22,163,74,0.10),transparent_32%),radial-gradient(circle_at_80%_20%,rgba(6,182,212,0.14),transparent_30%),radial-gradient(circle_at_60%_80%,rgba(14,116,144,0.13),transparent_34%)]" />
            <motion.div
                animate={{ y: [0, -35, 0], x: [0, 24, 0] }}
                transition={{ duration: 13, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                className="absolute -left-24 top-24 h-72 w-72 rounded-full bg-emerald-500/15 blur-3xl"
            />
            <motion.div
                animate={{ y: [0, 42, 0], x: [0, -20, 0] }}
                transition={{ duration: 16, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                className="absolute right-0 top-1/3 h-80 w-80 rounded-full bg-cyan-400/20 blur-3xl"
            />
        </div>
    );
}
