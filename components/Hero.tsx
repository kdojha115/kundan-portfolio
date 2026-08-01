"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { ArrowRight, Download, Github, Linkedin } from "lucide-react";
import { profile } from "@/lib/data";
import ServiceMesh from "@/components/ServiceMesh";

function useTypedTitles(titles: string[]) {
  const [text, setText] = useState("");
  const [titleIndex, setTitleIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = titles[titleIndex];
    const speed = deleting ? 35 : 65;

    const timeout = setTimeout(() => {
      if (!deleting) {
        const next = current.slice(0, text.length + 1);
        setText(next);
        if (next === current) {
          setTimeout(() => setDeleting(true), 1200);
        }
      } else {
        const next = current.slice(0, text.length - 1);
        setText(next);
        if (next === "") {
          setDeleting(false);
          setTitleIndex((i) => (i + 1) % titles.length);
        }
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [text, deleting, titleIndex, titles]);

  return text;
}

export default function Hero() {
  const typed = useTypedTitles(profile.titles);

  return (
    <section className="relative overflow-hidden section-grid">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-base/60 to-base" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-6 pb-20 pt-16 md:grid-cols-[1.15fr_0.85fr] md:pb-28 md:pt-24">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-5 font-mono text-sm text-accent-cyan"
          >
            <span className="text-ink-faint">$</span> whoami
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="font-display text-4xl font-semibold leading-[1.1] tracking-tight text-ink sm:text-5xl lg:text-6xl"
          >
            Hi, I&apos;m{" "}
            <span className="text-gradient">{profile.name}</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mt-4 h-8 font-mono text-lg text-ink-muted sm:text-xl"
          >
            {typed}
            <span className="animate-pulse text-accent">_</span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="mt-6 max-w-xl text-base leading-relaxed text-ink-muted sm:text-lg"
          >
            Building scalable backend systems, enterprise APIs, and modern web
            applications — {profile.years} years turning business requirements
            into secure, production-grade software.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="mt-9 flex flex-wrap items-center gap-3"
          >
            <Link
              href="/resume"
              className="group inline-flex items-center gap-2 rounded-full bg-accent px-5 py-3 text-sm font-medium text-white shadow-[0_0_0_1px_rgba(59,130,246,0.4)] transition-all hover:bg-accent/90 hover:shadow-[0_0_24px_rgba(59,130,246,0.35)]"
            >
              <Download size={16} />
              Download Resume
            </Link>
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 rounded-full border border-line px-5 py-3 text-sm font-medium text-ink transition-colors hover:border-accent/60 hover:text-accent"
            >
              View Projects
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-medium text-ink-muted transition-colors hover:text-ink"
            >
              Contact Me
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="mt-8 flex items-center gap-4 text-ink-muted"
          >
            <a href={profile.github} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-accent" aria-label="GitHub">
              <Github size={18} />
            </a>
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-accent" aria-label="LinkedIn">
              <Linkedin size={18} />
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="glass glass-border-glow relative rounded-2xl p-4"
        >
          <ServiceMesh />
        </motion.div>
      </div>
    </section>
  );
}
