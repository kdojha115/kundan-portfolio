import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Production projects built by Kundan Kumar Ojha: booking platforms, payments, insurance, and real-time communication systems.",
};

export default function ProjectsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
