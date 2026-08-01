import { experience } from "@/lib/data";
import Reveal from "@/components/Reveal";

export default function ExperienceTimeline() {
  return (
    <div className="relative">
      <div className="absolute left-[15px] top-2 bottom-2 w-px bg-gradient-to-b from-accent via-line to-transparent sm:left-[19px]" />

      <div className="space-y-10">
        {experience.map((job, i) => (
          <Reveal key={job.company} delay={i * 0.08}>
            <div className="relative pl-10 sm:pl-14">
              <span className="absolute left-0 top-1 flex h-8 w-8 items-center justify-center rounded-full border border-accent/50 bg-base font-mono text-[11px] text-accent-cyan sm:h-10 sm:w-10">
                {String(i + 1).padStart(2, "0")}
              </span>

              <div className="glass glass-border-glow rounded-2xl p-6">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="font-display text-xl font-semibold text-ink">
                    {job.role} <span className="text-ink-muted">· {job.company}</span>
                  </h3>
                  <span className="font-mono text-xs text-accent-cyan">{job.period}</span>
                </div>

                <p className="mt-2 text-sm text-ink-muted">{job.summary}</p>

                <ul className="mt-4 space-y-2">
                  {job.highlights.map((h) => (
                    <li key={h} className="flex gap-2 text-sm leading-relaxed text-ink/90">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent-cyan" />
                      {h}
                    </li>
                  ))}
                </ul>

                <div className="mt-5 flex flex-wrap gap-2">
                  {job.stack.map((s) => (
                    <span
                      key={s}
                      className="rounded-full border border-line px-3 py-1 font-mono text-[11px] text-ink-muted"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
