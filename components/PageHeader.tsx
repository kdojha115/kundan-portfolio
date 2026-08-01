import Reveal from "@/components/Reveal";

export default function PageHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <section className="section-grid border-b border-line">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <Reveal>
          <div className="mb-4 flex items-center gap-3">
            <span className="h-px w-8 bg-gradient-to-r from-accent to-accent-cyan" />
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-accent-cyan">
              {eyebrow}
            </span>
          </div>
          <h1 className="font-display text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
            {title}
          </h1>
          {description && (
            <p className="mt-4 max-w-2xl text-lg text-ink-muted">{description}</p>
          )}
        </Reveal>
      </div>
    </section>
  );
}
