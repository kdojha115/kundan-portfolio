import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Hero from "@/components/Hero";
import TechMarquee from "@/components/TechMarquee";
import Metrics from "@/components/Metrics";
import SectionHeading from "@/components/SectionHeading";
import ExperienceTimeline from "@/components/ExperienceTimeline";
import ProjectCard from "@/components/ProjectCard";
import InfoCard from "@/components/InfoCard";
import Reveal from "@/components/Reveal";
import { projects, whyHireMe, profile } from "@/lib/data";
import {
  ShieldCheck,
  Server,
  Gauge,
  Briefcase,
  Users,
  Layers,
} from "lucide-react";

const whyIcons = [Server, Briefcase, Layers, Gauge, ShieldCheck, Users];

export default function Home() {
  const featured = projects.slice(0, 3);

  return (
    <>
      <Hero />
      <TechMarquee />
      <Metrics />

      {/* About preview */}
      <section className="mx-auto max-w-6xl px-6 py-24">
        <div className="grid gap-10 md:grid-cols-[0.9fr_1.1fr] md:items-start">
          <SectionHeading
            eyebrow="About"
            title="Backend-first, product-minded."
          />
          <Reveal delay={0.1}>
            <p className="text-base leading-relaxed text-ink-muted sm:text-lg">
              {profile.summary}
            </p>
            <Link
              href="/about"
              className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-accent-cyan transition-colors hover:text-accent"
            >
              Read the full story
              <ArrowRight size={15} />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Experience preview */}
      <section className="border-t border-line bg-surface/30">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <SectionHeading
            eyebrow="Experience"
            title="Three roles, one thread: reliable backend systems."
            description="A chronological look at the platforms I've built and maintained."
          />
          <div className="mt-12">
            <ExperienceTimeline />
          </div>
        </div>
      </section>

      {/* Projects preview */}
      <section className="mx-auto max-w-6xl px-6 py-24">
        <SectionHeading
          eyebrow="Projects"
          title="Systems shipped, not side-project screenshots."
          description="A sample of the platforms behind the metrics above."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {featured.map((p, i) => (
            <ProjectCard key={p.slug} project={p} delay={i * 0.08} />
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 rounded-full border border-line px-5 py-3 text-sm font-medium text-ink transition-colors hover:border-accent/60 hover:text-accent"
          >
            View all projects
            <ArrowRight size={15} />
          </Link>
        </div>
      </section>

      {/* Why hire me */}
      <section className="border-t border-line bg-surface/30">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <SectionHeading
            eyebrow="Why hire me"
            title="What I bring to an engineering team."
            align="center"
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {whyHireMe.map((item, i) => (
              <InfoCard
                key={item.title}
                title={item.title}
                detail={item.detail}
                Icon={whyIcons[i]}
                delay={i * 0.06}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-6xl px-6 py-24 text-center">
        <Reveal>
          <h2 className="font-display text-3xl font-semibold text-ink sm:text-4xl">
            Let&apos;s build scalable software together.
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-ink-muted">
            Open to Backend Software Engineer opportunities.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3.5 text-sm font-medium text-white transition-all hover:bg-accent/90 hover:shadow-[0_0_24px_rgba(59,130,246,0.35)]"
          >
            Get in touch
            <ArrowRight size={16} />
          </Link>
        </Reveal>
      </section>
    </>
  );
}
