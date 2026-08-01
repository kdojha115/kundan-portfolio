import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
import { Download } from "lucide-react";

export const metadata: Metadata = {
  title: "Resume",
  description: "Download the ATS-friendly resume of Kundan Kumar Ojha.",
};

export default function ResumePage() {
  return (
    <>
      <PageHeader
        eyebrow="Resume"
        title="Resume"
        description="ATS-friendly, one page, and up to date with current experience."
      />
      <section className="mx-auto max-w-4xl px-6 py-16">
        <Reveal>
          <div className="mb-6 flex justify-center">
            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-medium text-white transition-all hover:bg-accent/90 hover:shadow-[0_0_24px_rgba(59,130,246,0.35)]"
            >
              <Download size={16} />
              Download Resume (PDF)
            </a>
          </div>

          <div className="glass overflow-hidden rounded-2xl">
            <object
              data="/resume.pdf"
              type="application/pdf"
              className="h-[80vh] w-full"
              aria-label="Kundan Kumar Ojha resume preview"
            >
              <p className="p-8 text-center text-ink-muted">
                Your browser can&apos;t preview PDFs inline.{" "}
                <a href="/resume.pdf" className="text-accent-cyan underline">
                  Download the resume
                </a>{" "}
                instead.
              </p>
            </object>
          </div>
        </Reveal>
      </section>
    </>
  );
}
