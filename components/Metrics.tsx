"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { metrics } from "@/lib/data";

function Counter({ target, suffix }: { target: number; suffix: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const duration = 1200;
    const start = performance.now();

    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(eased * target));
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [inView, target]);

  return (
    <span ref={ref}>
      {value}
      {suffix}
    </span>
  );
}

export default function Metrics() {
  return (
    <section className="border-y border-line bg-surface/40">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-line bg-line sm:grid-cols-5">
          {metrics.map((m, i) => (
            <motion.div
              key={m.label}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="bg-base px-4 py-8 text-center sm:text-left"
            >
              <div className="font-mono text-[11px] text-accent-cyan">
                metric.0{i + 1}
              </div>
              <div className="mt-2 font-display text-3xl font-semibold text-ink sm:text-4xl">
                <Counter target={parseInt(m.value, 10)} suffix={m.suffix} />
              </div>
              <div className="mt-1 text-xs text-ink-muted">{m.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
