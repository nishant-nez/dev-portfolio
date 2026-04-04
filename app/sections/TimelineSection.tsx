"use client";

import { AnimatedSection } from "@/app/components/AnimatedSection";
import { SectionHeading } from "@/app/components/SectionHeading";
import { TimelineItem } from "@/app/lib/types";
import { motion } from "framer-motion";

type TimelineSectionProps = {
    id: string;
    eyebrow: string;
    title: string;
    subtitle: string;
    items: TimelineItem[];
};

export function TimelineSection({
    id,
    eyebrow,
    title,
    subtitle,
    items,
}: TimelineSectionProps) {
    return (
        <AnimatedSection id={id} className="mx-auto w-full max-w-6xl px-5 py-14 sm:px-8">
            <SectionHeading eyebrow={eyebrow} title={title} subtitle={subtitle} />
            <div className="relative mt-14">
                <div className="absolute left-4 top-0 hidden h-full w-px bg-[var(--ring)] md:left-1/2 md:block" />
                <div className="space-y-9 md:space-y-12">
                    {items.map((item, index) => {
                        const isRight = index % 2 !== 0;
                        return (
                            <motion.article
                                key={`${item.title}-${item.duration}`}
                                initial={{ opacity: 0, y: 22 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.25 }}
                                transition={{ duration: 0.45, delay: index * 0.04 }}
                                className={`relative md:grid md:grid-cols-2 ${isRight ? "" : ""}`}
                            >
                                <div className={`mb-3 md:mb-0 ${isRight ? "md:order-2 md:pl-10" : "md:pr-10"}`}>
                                    <div className="rounded-2xl border border-[var(--ring)] bg-[var(--surface)] p-6 shadow-lg shadow-black/5">
                                        <p className="text-xs font-medium uppercase tracking-[0.16em] text-[var(--accent)]">
                                            {item.duration}
                                        </p>
                                        <h3 className="mt-2 text-xl font-semibold text-[var(--text)]">{item.title}</h3>
                                        <p className="mt-1 text-sm font-medium text-[var(--muted)]">{item.organization}</p>
                                        <p className="mt-4 text-sm leading-7 text-[var(--muted)]">{item.description}</p>
                                    </div>
                                </div>
                                <div className={`hidden md:block ${isRight ? "md:order-1" : ""}`} />
                                <span className="absolute left-1/2 top-8 hidden h-3.5 w-3.5 -translate-x-[7px] rounded-full border border-[var(--ring)] bg-[var(--accent)] md:block" />
                            </motion.article>
                        );
                    })}
                </div>
            </div>
        </AnimatedSection>
    );
}
