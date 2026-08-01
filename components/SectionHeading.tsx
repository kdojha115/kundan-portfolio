import Reveal from "@/components/Reveal";

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}) {
  return (
    <Reveal className={align === "center" ? "text-center" : ""}>
      <div
        className={`mb-4 flex items-center gap-3 ${
          align === "center" ? "justify-center" : ""
        }`}
      >
        <span className="h-px w-8 bg-gradient-to-r from-accent to-accent-cyan" />
        <span className="font-mono text-xs uppercase tracking-[0.2em] text-accent-cyan">
          {eyebrow}
        </span>
      </div>
      <h2 className="font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p
          className={`mt-3 max-w-2xl text-ink-muted ${
            align === "center" ? "mx-auto" : ""
          }`}
        >
          {description}
        </p>
      )}
    </Reveal>
  );
}
