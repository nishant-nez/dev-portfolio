"use client";

import { AnimatedSection } from "@/app/components/AnimatedSection";
import { SectionHeading } from "@/app/components/SectionHeading";
import { Project } from "@/app/lib/types";
import { AnimatePresence, motion } from "framer-motion";
import { ExternalLink, GitBranch, X } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

type ProjectsSectionProps = {
    projects: Project[];
};

export function ProjectsSection({ projects }: ProjectsSectionProps) {
    const [activeProject, setActiveProject] = useState<Project | null>(null);

    return (
        <>
            <AnimatedSection id="projects" className="mx-auto w-full max-w-6xl px-5 py-14 sm:px-8">
                <SectionHeading
                    eyebrow="Featured Work"
                    title="Projects Built for Real Users"
                    subtitle="A sample of production-minded projects focused on performance, usability, and maintainability."
                />

                <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                    {projects.map((project, index) => (
                        <motion.article
                            key={project.title}
                            initial={{ opacity: 0, y: 18 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ duration: 0.45, delay: index * 0.06 }}
                            className="group overflow-hidden rounded-2xl border border-[var(--ring)] bg-[var(--surface)]"
                        >
                            <button
                                type="button"
                                onClick={() => setActiveProject(project)}
                                className="block w-full text-left"
                            >
                                <div className="relative h-44 overflow-hidden">
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        fill
                                        loading="lazy"
                                        className="object-cover transition duration-500 group-hover:scale-105"
                                    />
                                </div>
                                <div className="p-5">
                                    <h3 className="text-lg font-semibold text-[var(--text)]">{project.title}</h3>
                                    <p className="mt-3 text-sm leading-7 text-[var(--muted)]">{project.description}</p>
                                    <div className="mt-4 flex flex-wrap gap-2">
                                        {project.techStack.map((tech) => (
                                            <span
                                                key={tech}
                                                className="rounded-full bg-[var(--surface-soft)] px-2.5 py-1 text-xs font-medium text-[var(--muted)]"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </button>
                            <div className="flex items-center gap-4 border-t border-[var(--ring)] px-5 py-4 text-sm">
                                <a href={project.githubUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-[var(--muted)] hover:text-[var(--text)]">
                                    <GitBranch size={16} /> GitHub
                                </a>
                                <a href={project.demoUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-[var(--muted)] hover:text-[var(--text)]">
                                    <ExternalLink size={16} /> Live Demo
                                </a>
                            </div>
                        </motion.article>
                    ))}
                </div>
            </AnimatedSection>

            <AnimatePresence>
                {activeProject && (
                    <motion.div
                        className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/70 p-4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setActiveProject(null)}
                    >
                        <motion.div
                            initial={{ opacity: 0, y: 22, scale: 0.96 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 16, scale: 0.96 }}
                            transition={{ duration: 0.25 }}
                            className="relative w-full max-w-3xl overflow-hidden rounded-2xl border border-[var(--ring)] bg-[var(--surface)]"
                            onClick={(event) => event.stopPropagation()}
                        >
                            <button
                                type="button"
                                onClick={() => setActiveProject(null)}
                                className="absolute right-3 top-3 inline-flex h-9 w-9 items-center justify-center rounded-full bg-black/50 text-white"
                                aria-label="Close details"
                            >
                                <X size={18} />
                            </button>
                            <div className="relative h-56 sm:h-72">
                                <Image src={activeProject.image} alt={activeProject.title} fill className="object-cover" />
                            </div>
                            <div className="p-6">
                                <h3 className="text-2xl font-semibold text-[var(--text)]">{activeProject.title}</h3>
                                <p className="mt-4 text-sm leading-7 text-[var(--muted)]">{activeProject.details}</p>
                                <div className="mt-5 flex flex-wrap gap-2">
                                    {activeProject.techStack.map((tech) => (
                                        <span key={tech} className="rounded-full bg-[var(--surface-soft)] px-3 py-1 text-xs font-medium text-[var(--muted)]">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
