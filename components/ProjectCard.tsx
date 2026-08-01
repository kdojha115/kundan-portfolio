import { Project } from "@/lib/data";
import Reveal from "@/components/Reveal";
import { ExternalLink } from "lucide-react";

export default function ProjectCard({
  project,
  delay = 0,
}: {
  project: Project;
  delay?: number;
}) {
  return (
    <Reveal delay={delay}>
      <div className="glass glass-border-glow group flex h-full flex-col rounded-2xl p-6 transition-transform duration-300 hover:-translate-y-1">
        <div className="mb-4 flex items-start justify-between gap-3">
          <h3 className="font-display text-lg font-semibold text-ink">
            {project.name}
          </h3>
          {project.apiCount && (
            <span className="shrink-0 rounded-full border border-accent/40 bg-accent/10 px-2.5 py-1 font-mono text-[11px] text-accent-cyan">
              {project.apiCount} APIs
            </span>
          )}
        </div>

        <p className="text-sm text-ink-muted">{project.tagline}</p>

        <ul className="mt-4 space-y-2">
          {project.points.map((p) => (
            <li key={p} className="flex gap-2 text-sm leading-relaxed text-ink/85">
              <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
              {p}
            </li>
          ))}
        </ul>

        <div className="mt-auto pt-5">
          <div className="mb-3 flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <span
                key={t}
                className="rounded-full border border-line px-2.5 py-1 font-mono text-[11px] text-ink-muted"
              >
                {t}
              </span>
            ))}
          </div>

          {project.links && (
            <div className="flex gap-4 border-t border-line pt-3">
              {project.links.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  className="inline-flex items-center gap-1 text-xs text-ink-muted transition-colors hover:text-accent"
                >
                  {l.label} <ExternalLink size={12} />
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
    </Reveal>
  );
}
