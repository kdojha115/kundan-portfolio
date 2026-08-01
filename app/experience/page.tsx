import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import ExperienceTimeline from "@/components/ExperienceTimeline";

export const metadata: Metadata = {
  title: "Experience",
  description: "Professional experience of Kundan Kumar Ojha across FindiBankit, Emo Matrix, and Paytm.",
};

export default function ExperiencePage() {
  return (
    <>
      <PageHeader
        eyebrow="Experience"
        title="Where I've built"
        description="Three roles across financial platforms, real-time communication systems, and enterprise onboarding — all backend-first."
      />
      <section className="mx-auto max-w-6xl px-6 py-20">
        <ExperienceTimeline />
      </section>
    </>
  );
}
