"use client";

import { AnimatedSection } from "@/app/components/AnimatedSection";
import { SectionHeading } from "@/app/components/SectionHeading";
import { siteData } from "@/app/lib/content";
import emailjs from "@emailjs/browser";
import { SendHorizontal } from "lucide-react";
import { FormEvent, useState } from "react";

type FormState = {
    name: string;
    email: string;
    subject: string;
    message: string;
};

type Status = {
    type: "success" | "error";
    text: string;
} | null;

function SocialIcon({ label }: { label: string }) {
    switch (label.toLowerCase()) {
        case "github":
            return (
                <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="h-4 w-4 shrink-0" stroke="currentColor" strokeWidth="1.8">
                    <path d="M12 2a10 10 0 0 0-3.17 19.48c.5.09.67-.22.67-.48v-1.69c-2.7.59-3.27-1.17-3.27-1.17-.44-1.12-1.07-1.42-1.07-1.42-.87-.59.07-.58.07-.58.96.07 1.46.99 1.46.99.84 1.45 2.2 1.03 2.73.79.08-.63.33-1.03.6-1.27-2.16-.25-4.43-1.08-4.43-4.79 0-1.06.38-1.92 1-2.6-.1-.25-.43-1.27.1-2.64 0 0 .82-.26 2.69 1a9.4 9.4 0 0 1 4.9 0c1.87-1.26 2.69-1 2.69-1 .53 1.37.2 2.39.1 2.64.62.68 1 1.54 1 2.6 0 3.72-2.28 4.53-4.45 4.78.34.29.64.86.64 1.74v2.58c0 .26.17.57.68.48A10 10 0 0 0 12 2Z" />
                </svg>
            );
        case "linkedin":
            return (
                <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="h-4 w-4 shrink-0" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="4" y="4" width="16" height="16" rx="4" />
                    <path d="M8 10.5V16" />
                    <circle cx="8" cy="8.2" r="1" fill="currentColor" stroke="none" />
                    <path d="M11.5 16v-3.1c0-1.5 1-2.4 2.2-2.4s2.3.9 2.3 2.4V16" />
                </svg>
            );
        default:
            return (
                <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="h-4 w-4 shrink-0" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3.5" y="5.5" width="17" height="13" rx="3" />
                    <path d="m5.5 7.5 6.5 5 6.5-5" />
                </svg>
            );
    }
}

const initialForm: FormState = {
    name: "",
    email: "",
    subject: "",
    message: "",
};

export function ContactSection() {
    const [form, setForm] = useState<FormState>(initialForm);
    const [status, setStatus] = useState<Status>(null);
    const [sending, setSending] = useState(false);

    const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setStatus(null);

        if (!form.name.trim() || !form.email.trim() || !form.subject.trim() || !form.message.trim()) {
            setStatus({ type: "error", text: "Please complete all fields." });
            return;
        }

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(form.email)) {
            setStatus({ type: "error", text: "Please enter a valid email address." });
            return;
        }

        const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
        const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
        const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

        if (!serviceId || !templateId || !publicKey) {
            setStatus({
                type: "error",
                text: "Email service is not configured. Add EmailJS variables in .env.local.",
            });
            return;
        }

        try {
            setSending(true);
            await emailjs.send(
                serviceId,
                templateId,
                {
                    from_name: form.name,
                    from_email: form.email,
                    from_subject: form.subject,
                    message: form.message,
                    reply_to: form.email,
                    to_name: siteData.name,
                },
                { publicKey },
            );

            setStatus({ type: "success", text: "Message sent successfully. Thanks for reaching out." });
            setForm(initialForm);
        } catch {
            setStatus({ type: "error", text: "Failed to send message. Please try again." });
        } finally {
            setSending(false);
        }
    };

    return (
        <AnimatedSection id="contact" className="mx-auto w-full max-w-6xl px-5 pt-14 pb-24 sm:px-8">
            <SectionHeading
                eyebrow="Let us connect"
                title="Contact Me"
                subtitle="Have an opportunity or idea in mind? Send a message and I will get back soon."
            />

            <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
                <div className="relative h-full overflow-hidden rounded-2xl border border-[var(--ring)] bg-[var(--surface)] p-6">
                    <div className="absolute -right-14 -top-16 h-36 w-36 rounded-full bg-[var(--accent)]/20 blur-3xl" />
                    <div className="absolute -bottom-16 -left-16 h-36 w-36 rounded-full bg-cyan-400/20 blur-3xl" />

                    <div className="relative z-10 flex h-full flex-col">
                        <div>
                            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--accent)]">Open To Collaborate</p>
                            <h3 className="mt-2 text-2xl font-semibold text-[var(--text)]">Let us build something meaningful</h3>
                            <p className="mt-3 text-sm leading-7 text-[var(--muted)]">
                                Share your idea, product challenge, or team requirement. I usually reply within 24 hours with a clear next-step plan.
                            </p>

                            <div className="mt-6 space-y-3 rounded-xl border border-[var(--ring)] bg-[var(--surface-soft)] p-4">
                                {[
                                    "Backend APIs and architecture",
                                    "Full-stack product features",
                                    "Cloud deployments and DevOps",
                                ].map((item) => (
                                    <div key={item} className="flex items-center gap-3 text-sm text-[var(--text)]">
                                        <span className="h-2 w-2 rounded-full bg-[var(--accent)]" />
                                        {item}
                                    </div>
                                ))}
                            </div>

                            <div className="mt-6 grid gap-3 sm:grid-cols-2">
                                <div className="rounded-xl border border-[var(--ring)] bg-[var(--surface-soft)] p-3">
                                    <p className="text-[11px] uppercase tracking-[0.14em] text-[var(--muted)]">Email</p>
                                    <a
                                        className="mt-1 block text-sm font-medium text-[var(--accent)] [overflow-wrap:anywhere] hover:underline"
                                        href={`mailto:${siteData.email}`}
                                    >
                                        {siteData.email}
                                    </a>
                                </div>
                                <div className="rounded-xl border border-[var(--ring)] bg-[var(--surface-soft)] p-3">
                                    <p className="text-[11px] uppercase tracking-[0.14em] text-[var(--muted)]">Location</p>
                                    <p className="mt-1 text-sm font-medium text-[var(--text)]">{siteData.location}</p>
                                </div>
                            </div>
                        </div>

                        <div className="mt-auto flex flex-wrap gap-3 pt-6">
                            {siteData.socials.map((social) => {
                                const isMailLink = social.url.startsWith("mailto:");

                                return (
                                    <a
                                        key={social.label}
                                        href={social.url}
                                        target={isMailLink ? undefined : "_blank"}
                                        rel={isMailLink ? undefined : "noreferrer"}
                                        className="inline-flex items-center gap-2 rounded-full border border-[var(--ring)] bg-[var(--surface-soft)] px-4 py-2 text-sm font-medium text-[var(--muted)] transition hover:-translate-y-0.5 hover:border-[var(--accent)] hover:text-[var(--text)]"
                                    >
                                        <SocialIcon label={social.label} />
                                        {social.label}
                                    </a>
                                );
                            })}
                        </div>
                    </div>
                </div>

                <form onSubmit={onSubmit} className="h-full space-y-4 rounded-2xl border border-[var(--ring)] bg-[var(--surface)] p-6">
                    <label className="block">
                        <span className="mb-2 block text-sm font-medium text-[var(--text)]">Name</span>
                        <input
                            type="text"
                            name="name"
                            value={form.name ?? ""}
                            onChange={(event) => setForm((prev) => ({ ...prev, name: event.target.value }))}
                            className="w-full rounded-xl border border-[var(--ring)] bg-[var(--surface-soft)] px-4 py-3 text-sm text-[var(--text)] outline-none transition focus:border-[var(--accent)]"
                            placeholder="Your name"
                            required
                        />
                    </label>
                    <label className="block">
                        <span className="mb-2 block text-sm font-medium text-[var(--text)]">Email</span>
                        <input
                            type="email"
                            name="email"
                            value={form.email ?? ""}
                            onChange={(event) => setForm((prev) => ({ ...prev, email: event.target.value }))}
                            className="w-full rounded-xl border border-[var(--ring)] bg-[var(--surface-soft)] px-4 py-3 text-sm text-[var(--text)] outline-none transition focus:border-[var(--accent)]"
                            placeholder="you@example.com"
                            required
                        />
                    </label>
                    <label className="block">
                        <span className="mb-2 block text-sm font-medium text-[var(--text)]">Subject</span>
                        <input
                            type="text"
                            name="subject"
                            value={form.subject ?? ""}
                            onChange={(event) => setForm((prev) => ({ ...prev, subject: event.target.value }))}
                            className="w-full rounded-xl border border-[var(--ring)] bg-[var(--surface-soft)] px-4 py-3 text-sm text-[var(--text)] outline-none transition focus:border-[var(--accent)]"
                            placeholder="What would you like to discuss?"
                            required
                        />
                    </label>
                    <label className="block">
                        <span className="mb-2 block text-sm font-medium text-[var(--text)]">Message</span>
                        <textarea
                            name="message"
                            value={form.message ?? ""}
                            onChange={(event) => setForm((prev) => ({ ...prev, message: event.target.value }))}
                            rows={6}
                            className="w-full resize-none rounded-xl border border-[var(--ring)] bg-[var(--surface-soft)] px-4 py-3 text-sm text-[var(--text)] outline-none transition focus:border-[var(--accent)]"
                            placeholder="Tell me about your project or opportunity"
                            required
                        />
                    </label>
                    <button
                        type="submit"
                        disabled={sending}
                        className="inline-flex items-center gap-2 rounded-full bg-[var(--accent)] px-5 py-2.5 text-sm font-semibold text-white transition hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-70"
                    >
                        <SendHorizontal size={16} />
                        {sending ? "Sending..." : "Send Message"}
                    </button>

                    {status && (
                        <p
                            className={`rounded-xl border px-4 py-3 text-sm ${status.type === "success"
                                ? "border-emerald-500/40 bg-emerald-500/10 text-emerald-300"
                                : "border-rose-500/40 bg-rose-500/10 text-rose-300"
                                }`}
                        >
                            {status.text}
                        </p>
                    )}
                </form>
            </div>
        </AnimatedSection>
    );
}
