"use client";

import { AnimatedSection } from "@/app/components/AnimatedSection";
import { SectionHeading } from "@/app/components/SectionHeading";
import { Certification, SkillCategory } from "@/app/lib/types";
import { motion } from "framer-motion";
import Image from "next/image";

type SkillsSectionProps = {
  skills: SkillCategory[];
  certifications: Certification[];
};

export function SkillsSection({ skills, certifications }: SkillsSectionProps) {
  return (
    <AnimatedSection id="skills" className="mx-auto w-full max-w-6xl px-5 py-14 sm:px-8">
      <SectionHeading
        eyebrow="Capability"
        title="Skills"
        subtitle="A capability map focused on backend architecture, reliable delivery, and platform engineering."
      />

      <div className="grid gap-6 lg:grid-cols-3">
        {["System Design", "API Engineering", "Cloud Delivery"].map((item, index) => (
          <motion.article
            key={item}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.4, delay: index * 0.08 }}
            className="rounded-2xl border border-[var(--ring)] bg-[var(--surface)] p-5"
          >
            <p className="text-xs uppercase tracking-[0.14em] text-[var(--muted)]">Core Area</p>
            <h3 className="mt-2 text-lg font-semibold text-[var(--text)]">{item}</h3>
            <div className="mt-4 h-2 rounded-full bg-[var(--surface-soft)]">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.8, delay: 0.15 + index * 0.1 }}
                className="h-full rounded-full bg-gradient-to-r from-[var(--accent)] to-cyan-400"
              />
            </div>
            <p className="mt-3 text-sm text-[var(--muted)]">Hands-on delivery across production systems and product teams.</p>
          </motion.article>
        ))}
      </div>

      <div className="mt-8 space-y-6">
        {skills.map((group, groupIndex) => (
          <motion.div
            key={group.category}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.4, delay: groupIndex * 0.06 }}
            className="rounded-2xl border border-[var(--ring)] bg-[var(--surface)] p-6"
          >
            <div className="flex items-center justify-between gap-3">
              <h3 className="text-lg font-semibold text-[var(--text)]">{group.category}</h3>
              <span className="rounded-full border border-[var(--ring)] bg-[var(--surface-soft)] px-3 py-1 text-xs uppercase tracking-[0.12em] text-[var(--muted)]">
                {group.items.length} skills
              </span>
            </div>

            <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {group.items.map((skill, index) => (
                <motion.article
                  key={skill.name}
                  initial={{ opacity: 0, y: 10, scale: 0.98 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ duration: 0.35, delay: index * 0.04 }}
                  className="group rounded-xl border border-[var(--ring)] bg-[var(--surface-soft)] p-4"
                >
                  <div className="flex items-start justify-between gap-3">
                    <p className="text-sm font-semibold text-[var(--text)]">{skill.name}</p>
                    <span className="mt-0.5 h-2 w-2 rounded-full bg-[var(--accent)]" />
                  </div>
                  {skill.focus && (
                    <p className="mt-2 text-xs leading-6 text-[var(--muted)] transition group-hover:text-[var(--text)]">{skill.focus}</p>
                  )}
                </motion.article>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      <div id="certifications" className="mt-16">
        <SectionHeading
          eyebrow="Recognition"
          title="Certifications"
          subtitle="Professional credentials and ongoing learning milestones."
        />

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {certifications.map((cert, index) => (
            <motion.article
              key={cert.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: index * 0.06 }}
              className="group rounded-2xl border border-[var(--ring)] bg-[var(--surface)] p-4"
            >
              {cert.image && (
                <div className="relative mb-4 h-36 overflow-hidden rounded-xl border border-[var(--ring)]">
                  <Image src={cert.image} alt={cert.title} fill className="object-cover transition duration-500 group-hover:scale-105" />
                </div>
              )}
              <h4 className="text-sm font-semibold text-[var(--text)]">{cert.title}</h4>
              <p className="mt-1 text-sm text-[var(--muted)]">{cert.issuer}</p>
              <p className="mt-1 text-xs uppercase tracking-[0.14em] text-[var(--muted)]">{cert.date}</p>
              {cert.credentialUrl && (
                <a
                  href={cert.credentialUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-3 inline-flex text-sm font-medium text-[var(--accent)] hover:underline"
                >
                  View Credential
                </a>
              )}
            </motion.article>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
