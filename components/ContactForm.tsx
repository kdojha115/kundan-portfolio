"use client";

import { FormEvent, useState } from "react";
import { Send } from "lucide-react";
import { profile } from "@/lib/data";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio inquiry from ${name || "a visitor"}`);
    const body = encodeURIComponent(
      `${message}\n\n— ${name}\n${email}`
    );
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
  };

  return (
    <form onSubmit={handleSubmit} className="glass glass-border-glow space-y-4 rounded-2xl p-6">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-1.5 block font-mono text-xs text-ink-muted">
            Name
          </label>
          <input
            id="name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full rounded-lg border border-line bg-base/60 px-3 py-2.5 text-sm text-ink outline-none transition-colors focus:border-accent"
            placeholder="Your name"
          />
        </div>
        <div>
          <label htmlFor="email" className="mb-1.5 block font-mono text-xs text-ink-muted">
            Email
          </label>
          <input
            id="email"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full rounded-lg border border-line bg-base/60 px-3 py-2.5 text-sm text-ink outline-none transition-colors focus:border-accent"
            placeholder="you@company.com"
          />
        </div>
      </div>

      <div>
        <label htmlFor="message" className="mb-1.5 block font-mono text-xs text-ink-muted">
          Message
        </label>
        <textarea
          id="message"
          required
          rows={5}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-full resize-none rounded-lg border border-line bg-base/60 px-3 py-2.5 text-sm text-ink outline-none transition-colors focus:border-accent"
          placeholder="Tell me about the role or project..."
        />
      </div>

      <button
        type="submit"
        className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-3 text-sm font-medium text-white transition-all hover:bg-accent/90 hover:shadow-[0_0_24px_rgba(59,130,246,0.35)]"
      >
        Send Message
        <Send size={15} />
      </button>
    </form>
  );
}
