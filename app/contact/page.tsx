import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import ContactForm from "@/components/ContactForm";
import Reveal from "@/components/Reveal";
import { profile } from "@/lib/data";
import { Mail, Phone, Github, Linkedin, MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Kundan Kumar Ojha — open to Backend Software Engineer opportunities.",
};

const details = [
  { icon: Mail, label: "Email", value: profile.email, href: `mailto:${profile.email}` },
  { icon: Phone, label: "Phone", value: profile.phone, href: `tel:${profile.phone.replace(/\s/g, "")}` },
  { icon: Linkedin, label: "LinkedIn", value: "View profile", href: profile.linkedin },
  { icon: Github, label: "GitHub", value: "View profile", href: profile.github },
];

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Let's build scalable software together."
        description="Open to Backend Software Engineer opportunities."
      />

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="space-y-4">
            {details.map((d, i) => (
              <Reveal key={d.label} delay={i * 0.06}>
                <a
                  href={d.href}
                  target={d.href.startsWith("http") ? "_blank" : undefined}
                  rel={d.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="glass glass-border-glow flex items-center gap-4 rounded-xl p-4 transition-colors hover:border-accent/40"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-accent/30 bg-accent/10 text-accent-cyan">
                    <d.icon size={17} />
                  </span>
                  <div>
                    <div className="font-mono text-[11px] text-ink-faint">{d.label}</div>
                    <div className="text-sm text-ink">{d.value}</div>
                  </div>
                </a>
              </Reveal>
            ))}

            <Reveal delay={0.24}>
              <div className="glass flex items-center gap-4 rounded-xl p-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-accent/30 bg-accent/10 text-accent-cyan">
                  <MapPin size={17} />
                </span>
                <div>
                  <div className="font-mono text-[11px] text-ink-faint">Based in</div>
                  <div className="text-sm text-ink">{profile.location}</div>
                </div>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.1}>
            <ContactForm />
          </Reveal>
        </div>
      </section>
    </>
  );
}
