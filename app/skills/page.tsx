import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import SkillCard from "@/components/SkillCard";
import { skillGroups } from "@/lib/data";

export const metadata: Metadata = {
  title: "Skills",
  description: "Technical skills of Kundan Kumar Ojha across backend, frontend, database, and tooling.",
};

export default function SkillsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Skills"
        title="Toolkit"
        description="Grouped by where I use them most — backend depth first, full-stack fluency throughout."
      />
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, i) => (
            <SkillCard
              key={group.title}
              title={group.title}
              items={group.items}
              delay={i * 0.06}
            />
          ))}
        </div>
      </section>
    </>
  );
}
