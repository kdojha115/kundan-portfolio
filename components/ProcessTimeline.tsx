import { process } from "@/lib/data";
import Reveal from "@/components/Reveal";

export default function ProcessTimeline() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {process.map((step, i) => (
        <Reveal key={step} delay={i * 0.06}>
          <div className="glass relative h-full rounded-xl p-5">
            <span className="font-mono text-2xl font-semibold text-line">
              {String(i + 1).padStart(2, "0")}
            </span>
            <p className="mt-2 text-sm font-medium text-ink">{step}</p>
            {i < process.length - 1 && (
              <span className="absolute -right-4 top-1/2 hidden h-px w-4 bg-line lg:block" />
            )}
          </div>
        </Reveal>
      ))}
    </div>
  );
}
