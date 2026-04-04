"use client";

import type { NavItem } from "@/app/lib/types";
import dynamic from "next/dynamic";

const ThemeToggle = dynamic(
    () => import("@/app/components/ThemeToggle").then((mod) => mod.ThemeToggle),
    {
        ssr: false,
        loading: () => (
            <span className="inline-flex h-10 w-10 rounded-full border border-[var(--ring)] bg-[var(--surface)]" />
        ),
    },
);

type NavbarProps = {
    items: NavItem[];
    activeSection: string;
};

export function Navbar({ items, activeSection }: NavbarProps) {
    return (
        <header className="sticky top-0 z-40 border-b border-[var(--ring)] bg-[color:var(--surface-soft)]/80 backdrop-blur-xl">
            <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3 sm:px-8">
                <a href="#home" className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--text)]">
                    NK
                </a>

                <div className="hidden items-center gap-1 md:flex">
                    {items.map((item) => {
                        const isActive = activeSection === item.id;
                        return (
                            <a
                                key={item.id}
                                href={`#${item.id}`}
                                className={`rounded-full px-3 py-2 text-sm transition ${isActive
                                        ? "bg-[var(--accent)]/16 text-[var(--text)]"
                                        : "text-[var(--muted)] hover:text-[var(--text)]"
                                    }`}
                            >
                                {item.label}
                            </a>
                        );
                    })}
                </div>

                <div className="flex items-center gap-3">
                    <a
                        href="/resume.pdf"
                        target="_blank"
                        rel="noreferrer"
                        className="hidden rounded-full border border-[var(--ring)] bg-[var(--surface)] px-4 py-2 text-sm font-medium text-[var(--text)] transition hover:-translate-y-0.5 hover:border-[var(--accent)] lg:inline-flex"
                    >
                        Resume
                    </a>
                    <a
                        href="#contact"
                        className="hidden rounded-full bg-[var(--accent)] px-4 py-2 text-sm font-medium text-white transition hover:-translate-y-0.5 sm:inline-flex"
                    >
                        Contact Me
                    </a>
                    <ThemeToggle />
                </div>
            </nav>

            <div className="scrollbar-none flex gap-2 overflow-x-auto border-t border-[var(--ring)] px-5 py-2 md:hidden">
                {items.map((item) => {
                    const isActive = activeSection === item.id;
                    return (
                        <a
                            key={item.id}
                            href={`#${item.id}`}
                            className={`whitespace-nowrap rounded-full px-3 py-1.5 text-xs ${isActive
                                    ? "bg-[var(--accent)]/16 text-[var(--text)]"
                                    : "bg-[var(--surface)] text-[var(--muted)]"
                                }`}
                        >
                            {item.label}
                        </a>
                    );
                })}
            </div>
        </header>
    );
}
