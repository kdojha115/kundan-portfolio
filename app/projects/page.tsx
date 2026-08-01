"use client";

import { useMemo, useState } from "react";
import PageHeader from "@/components/PageHeader";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/lib/data";
import { Search } from "lucide-react";

const allTech = Array.from(new Set(projects.flatMap((p) => p.tech))).sort();

export default function ProjectsPage() {
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState<string | null>(null);

  const filtered = useMemo(() => {
    return projects.filter((p) => {
      const matchesQuery =
        query.trim() === "" ||
        p.name.toLowerCase().includes(query.toLowerCase()) ||
        p.tagline.toLowerCase().includes(query.toLowerCase());
      const matchesFilter = !filter || p.tech.includes(filter);
      return matchesQuery && matchesFilter;
    });
  }, [query, filter]);

  return (
    <>
      <PageHeader
        eyebrow="Projects"
        title="Selected work"
        description="Six production platforms spanning bookings, payments, insurance, and real-time communication."
      />

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="relative w-full max-w-sm">
            <Search
              size={16}
              className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-ink-faint"
            />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search projects..."
              className="w-full rounded-full border border-line bg-surface/60 py-2.5 pl-9 pr-4 text-sm text-ink outline-none transition-colors focus:border-accent"
            />
          </div>

          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setFilter(null)}
              className={`rounded-full border px-3 py-1.5 font-mono text-xs transition-colors ${
                !filter
                  ? "border-accent bg-accent/10 text-accent-cyan"
                  : "border-line text-ink-muted hover:text-ink"
              }`}
            >
              All
            </button>
            {allTech.map((tech) => (
              <button
                key={tech}
                onClick={() => setFilter(tech === filter ? null : tech)}
                className={`rounded-full border px-3 py-1.5 font-mono text-xs transition-colors ${
                  filter === tech
                    ? "border-accent bg-accent/10 text-accent-cyan"
                    : "border-line text-ink-muted hover:text-ink"
                }`}
              >
                {tech}
              </button>
            ))}
          </div>
        </div>

        {filtered.length === 0 ? (
          <p className="py-16 text-center text-ink-muted">
            No projects match that search. Try a different term.
          </p>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((p, i) => (
              <ProjectCard key={p.slug} project={p} delay={i * 0.05} />
            ))}
          </div>
        )}
      </section>
    </>
  );
}
