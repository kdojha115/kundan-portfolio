import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import InfoCard from "@/components/InfoCard";
import { achievements } from "@/lib/data";
import { Trophy, Star, Code2, Award } from "lucide-react";

export const metadata: Metadata = {
  title: "Achievements",
  description: "Competitive programming and recognition earned by Kundan Kumar Ojha.",
};

const icons = [Trophy, Star, Code2, Award];

export default function AchievementsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Achievements"
        title="Recognition"
        description="Competitive programming results and recognition from teams I've worked with."
      />
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-5 sm:grid-cols-2">
          {achievements.map((a, i) => (
            <InfoCard
              key={a.title}
              title={a.title}
              detail={a.detail}
              Icon={icons[i % icons.length]}
              delay={i * 0.08}
            />
          ))}
        </div>
      </section>
    </>
  );
}
