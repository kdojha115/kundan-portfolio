import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import InfoCard from "@/components/InfoCard";
import ProcessTimeline from "@/components/ProcessTimeline";
import { engineeringPhilosophy, education, profile } from "@/lib/data";
import {
  ShieldCheck,
  Code2,
  Gauge,
  Network,
  GitPullRequest,
  BookOpen,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About",
  description: "The engineering journey behind Kundan Kumar Ojha's backend work.",
};

const philosophyIcons = [Code2, ShieldCheck, Gauge, Network, GitPullRequest, BookOpen];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About"
        title="The engineering journey"
        description="How three years of shipping enterprise backend systems shaped the way I build."
      />

      <section className="mx-auto max-w-3xl px-6 py-20">
        <Reveal>
          <div className="space-y-6 text-lg leading-relaxed text-ink-muted">
            <p>
              I started out drawn to the part of software that users never
              see — the layer where a request gets authenticated, validated,
              routed, and turned into something reliable enough to run a
              business on. That interest turned into a career: over the last{" "}
              {profile.years} years, I&apos;ve worked almost entirely on the
              backend of enterprise platforms, in financial services, travel
              booking, and real-time communication.
            </p>
            <p>
              At Paytm, my first role after graduating, I sat close to KYC
              and customer onboarding — validating backend services, REST
              APIs, and database workflows, and learning what it actually
              takes to ship safely into a production system used by millions
              of people. Regression testing, SQL validation, log analysis in
              Kibana, release verification — the unglamorous work that keeps
              a large platform trustworthy.
            </p>
            <p>
              That foundation carried into Emo Matrix, where I moved from
              verifying systems to building them. I designed and implemented
              60+ REST APIs for authentication, user management, and
              real-time communication, wired in JWT-based auth and
              role-based access control, and integrated third-party services
              like Agora, Razorpay, and Firebase. It&apos;s where I got
              comfortable owning a service end-to-end — from the database
              schema to the API contract to the production incident that
              taught me why exception handling matters.
            </p>
            <p>
              Today, at FindiBankit, I work on backend systems for financial
              and booking platforms — 35+ APIs spanning authentication,
              booking management, payments, and RBAC. A recurring theme in
              this role has been automation: using Spring Scheduler to take
              recurring manual workflows off a team&apos;s plate, which cut
              operational effort by 70% in one case. I still enjoy the
              frontend enough to pair closely with React developers on
              integration, but my center of gravity stays backend — API
              design, SQL performance, and the distributed-systems questions
              that come with scale.
            </p>
            <p>
              What ties these roles together is a preference for systems
              that are boring in the best way: predictable, secure, and easy
              to reason about under load. I like the problem of taking a
              real business requirement — a booking flow, a payment
              integration, a role hierarchy — and turning it into an API
              surface that&apos;s clean enough for another engineer to pick
              up without a walkthrough.
            </p>
          </div>
        </Reveal>
      </section>

      <section className="border-t border-line bg-surface/30">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <SectionHeading
            eyebrow="Philosophy"
            title="How I approach engineering work."
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {engineeringPhilosophy.map((item, i) => (
              <InfoCard
                key={item.title}
                title={item.title}
                detail={item.detail}
                Icon={philosophyIcons[i]}
                delay={i * 0.06}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-24">
        <SectionHeading
          eyebrow="Process"
          title="From requirement to production."
        />
        <div className="mt-12">
          <ProcessTimeline />
        </div>
      </section>

      <section className="border-t border-line bg-surface/30">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <Reveal>
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-accent-cyan">
              Education
            </span>
            <h3 className="mt-3 font-display text-xl font-semibold text-ink">
              {education.degree}
            </h3>
            <p className="mt-1 text-ink-muted">
              {education.school} · {education.period}
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
