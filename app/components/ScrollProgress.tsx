"use client";

import { motion, useScroll, useSpring } from "framer-motion";

export function ScrollProgress() {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 180,
        damping: 24,
        mass: 0.2,
    });

    return (
        <motion.div
            style={{ scaleX }}
            className="fixed inset-x-0 top-0 z-50 h-1 origin-left bg-gradient-to-r from-cyan-500 via-teal-400 to-emerald-400"
        />
    );
}
