"use client";

import { siteData } from "@/app/lib/content";
import { useTypewriter } from "@/app/hooks/useTypewriter";
import { motion } from "framer-motion";

export function HeroSection() {
    const typed = useTypewriter([".NET", "Java", "Python"], 80, 1200);

    return (
        <section id="home" className="relative mx-auto flex min-h-[calc(100vh-5rem)] w-full max-w-6xl items-center px-5 py-18 sm:px-8">
            <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
                <div>
                    <motion.p
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="mb-4 text-xs font-semibold uppercase tracking-[0.26em] text-[var(--accent)]"
                    >
                        {siteData.title}
                    </motion.p>

                    <motion.h1
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.08 }}
                        className="max-w-3xl text-6xl font-semibold leading-tight tracking-tight text-[var(--text)] sm:text-8xl"
                    >
                        {siteData.name}
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.15 }}
                        className="mt-7 max-w-2xl text-pretty text-xl leading-9 text-[var(--muted)] sm:text-2xl"
                    >
                        {siteData.tagline}
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.24 }}
                        className="mt-8 flex flex-wrap items-center gap-3"
                    >
                        <span className="inline-flex items-center rounded-full border border-[var(--ring)] bg-[var(--surface)] px-4 py-2 text-sm text-[var(--text)]">
                            Building with
                            <span className="ml-2 min-w-[6rem] font-semibold text-[var(--accent)]">{typed}</span>
                        </span>
                        <span className="h-2 w-2 rounded-full bg-[var(--accent)]" />
                        <span className="text-sm text-[var(--muted)]">Based in {siteData.location}</span>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.32 }}
                        className="mt-10 flex flex-wrap gap-3"
                    >
                        <a
                            href="#projects"
                            className="rounded-full bg-[var(--accent)] px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-1"
                        >
                            View Projects
                        </a>
                        <a
                            href="#contact"
                            className="rounded-full border border-[var(--ring)] bg-[var(--surface)] px-6 py-3 text-sm font-semibold text-[var(--text)] transition hover:-translate-y-1 hover:border-[var(--accent)]"
                        >
                            Contact Me
                        </a>
                        <a
                            href="/resume.pdf"
                            target="_blank"
                            rel="noreferrer"
                            className="rounded-full border border-[var(--ring)] bg-[var(--surface-soft)] px-6 py-3 text-sm font-semibold text-[var(--text)] transition hover:-translate-y-1 hover:border-[var(--accent)]"
                        >
                            Download Resume
                        </a>
                    </motion.div>
                </div>

                <motion.aside
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                    className="relative hidden lg:block"
                >
                    <div className="relative overflow-hidden rounded-3xl border border-[var(--ring)] bg-[var(--surface)] p-7 shadow-xl shadow-black/10">
                        <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-[var(--accent)]/20 blur-3xl" />
                        <div className="absolute -bottom-16 -left-16 h-40 w-40 rounded-full bg-cyan-400/20 blur-3xl" />

                        <div className="relative z-10">
                            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">Current Focus</p>
                            <h3 className="mt-3 text-2xl font-semibold text-[var(--text)]">US Healthcare Domain</h3>
                            <p className="mt-3 text-sm leading-7 text-[var(--muted)]">
                                Working as a Software Engineer on healthcare platforms, building secure workflows for clinical operations,
                                claims processing, and integrations across distributed systems.
                            </p>

                            <div className="mt-6 grid gap-3 sm:grid-cols-2">
                                {[
                                    { label: "Domain", value: "US Healthcare" },
                                    { label: "Role", value: "Software Engineer" },
                                    { label: "Focus", value: "Payment Technology" },
                                    { label: "Compliance", value: "HIPAA-aligned" },
                                ].map((item, index) => (
                                    <motion.div
                                        key={item.label}
                                        initial={{ opacity: 0, y: 8 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.35, delay: 0.35 + index * 0.08 }}
                                        className="rounded-xl border border-[var(--ring)] bg-[var(--surface-soft)] p-3"
                                    >
                                        <p className="text-[11px] uppercase tracking-[0.14em] text-[var(--muted)]">{item.label}</p>
                                        <p className="mt-1 text-sm font-semibold text-[var(--text)]">{item.value}</p>
                                    </motion.div>
                                ))}
                            </div>

                            <div className="mt-5 flex flex-wrap gap-2">
                                {["Bundles", "Pricing Engine", "Claims Engine"].map((item, index) => (
                                    <motion.span
                                        key={item}
                                        initial={{ opacity: 0, scale: 0.92 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ duration: 0.3, delay: 0.55 + index * 0.06 }}
                                        className="rounded-full border border-[var(--ring)] bg-[var(--surface-soft)] px-3 py-1 text-xs font-medium text-[var(--text)]"
                                    >
                                        {item}
                                    </motion.span>
                                ))}
                            </div>
                        </div>
                    </div>
                </motion.aside>
            </div>
        </section>
    );
}
