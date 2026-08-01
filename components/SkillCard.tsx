import Reveal from "@/components/Reveal";

export default function SkillCard({
  title,
  items,
  delay = 0,
}: {
  title: string;
  items: string[];
  delay?: number;
}) {
  return (
    <Reveal delay={delay}>
      <div className="glass glass-border-glow h-full rounded-2xl p-6">
        <h3 className="font-mono text-xs uppercase tracking-[0.15em] text-accent-cyan">
          {title}
        </h3>
        <div className="mt-4 flex flex-wrap gap-2">
          {items.map((item) => (
            <span
              key={item}
              className="rounded-lg border border-line bg-base/40 px-3 py-1.5 text-sm text-ink/90 transition-colors hover:border-accent/50 hover:text-ink"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </Reveal>
  );
}
