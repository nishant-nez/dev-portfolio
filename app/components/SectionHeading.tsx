type SectionHeadingProps = {
    eyebrow: string;
    title: string;
    subtitle?: string;
};

export function SectionHeading({ eyebrow, title, subtitle }: SectionHeadingProps) {
    return (
        <div className="mx-auto mb-12 max-w-3xl text-center">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.26em] text-[var(--accent)]">
                {eyebrow}
            </p>
            <h2 className="text-balance text-3xl font-semibold tracking-tight text-[var(--text)] sm:text-4xl">
                {title}
            </h2>
            {subtitle && (
                <p className="mt-4 text-pretty text-base leading-7 text-[var(--muted)] sm:text-lg">
                    {subtitle}
                </p>
            )}
        </div>
    );
}
