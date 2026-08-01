import Reveal from "@/components/Reveal";
import { LucideIcon } from "lucide-react";

export default function InfoCard({
  title,
  detail,
  index,
  delay = 0,
  Icon,
}: {
  title: string;
  detail: string;
  index?: number;
  delay?: number;
  Icon?: LucideIcon;
}) {
  return (
    <Reveal delay={delay}>
      <div className="glass glass-border-glow h-full rounded-2xl p-6 transition-transform duration-300 hover:-translate-y-1">
        <div className="mb-4 flex items-center gap-3">
          {Icon ? (
            <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-accent/30 bg-accent/10 text-accent-cyan">
              <Icon size={16} />
            </span>
          ) : (
            typeof index === "number" && (
              <span className="font-mono text-xs text-accent-cyan">
                {String(index + 1).padStart(2, "0")}
              </span>
            )
          )}
          <h3 className="font-display text-base font-semibold text-ink">{title}</h3>
        </div>
        <p className="text-sm leading-relaxed text-ink-muted">{detail}</p>
      </div>
    </Reveal>
  );
}
