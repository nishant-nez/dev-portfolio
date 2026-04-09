"use client";

import { BackgroundEffects } from "@/app/components/BackgroundEffects";
import { BackToTop } from "@/app/components/BackToTop";
import { Navbar } from "@/app/components/Navbar";
import { ScrollProgress } from "@/app/components/ScrollProgress";
import { useActiveSection } from "@/app/hooks/useActiveSection";
import { certifications, education, experience, projects, siteData, skills } from "@/app/lib/content";
import { ContactSection } from "@/app/sections/ContactSection";
import { HeroSection } from "@/app/sections/HeroSection";
import { ProjectsSection } from "@/app/sections/ProjectsSection";
import { SkillsSection } from "@/app/sections/SkillsSection";
import { TimelineSection } from "@/app/sections/TimelineSection";
import { motion } from "framer-motion";

const sectionIds = ["home", "experience", "education", "skills", "projects", "contact"];

export function PortfolioShell() {
    const activeSection = useActiveSection(sectionIds);

    return (
        <>
            <ScrollProgress />
            <BackgroundEffects />
            <Navbar items={siteData.navigation} activeSection={activeSection} />

            <motion.main
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
            >
                <HeroSection />
                <TimelineSection
                    id="experience"
                    eyebrow="Journey"
                    title="Experience Timeline"
                    subtitle="Professional milestones focused on backend systems, API design, and end-to-end product delivery."
                    items={experience}
                />
                <TimelineSection
                    id="education"
                    eyebrow="Academic Foundation"
                    title="Education Timeline"
                    subtitle="Education and foundational training that shaped practical software engineering skills."
                    items={education}
                />
                <SkillsSection skills={skills} certifications={certifications} />
                <ProjectsSection projects={projects} />
                <ContactSection />
            </motion.main>

            <footer className="border-t border-[var(--ring)] px-5 py-7 text-center text-xs text-[var(--muted)] sm:px-8">
                Copyright {new Date().getFullYear()} {siteData.name}.
            </footer>

            <BackToTop />
        </>
    );
}
