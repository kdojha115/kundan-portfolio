import { techStack } from "@/lib/data";

export default function TechMarquee() {
  const doubled = [...techStack, ...techStack];

  return (
    <div className="border-y border-line bg-surface/60 py-5">
      <div className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-base to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-base to-transparent" />

        <div className="flex w-max animate-marquee gap-10">
          {doubled.map((tech, i) => (
            <span
              key={`${tech}-${i}`}
              className="font-mono text-sm text-ink-faint transition-colors hover:text-accent-cyan"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
