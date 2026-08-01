"use client";

import { motion } from "framer-motion";

// Signature visual: an API/microservice mesh — nodes representing services,
// edges representing calls between them, with light pulses traveling the
// edges. Ties directly to the "35+ / 60+ REST APIs, microservices, RBAC"
// identity rather than a generic particle field.

const nodes = [
  { id: "gateway", x: 300, y: 60, label: "API Gateway" },
  { id: "auth", x: 120, y: 160, label: "Auth / JWT" },
  { id: "booking", x: 300, y: 160, label: "Booking Svc" },
  { id: "payments", x: 480, y: 160, label: "Payments" },
  { id: "db1", x: 60, y: 280, label: "MySQL" },
  { id: "db2", x: 300, y: 300, label: "SQL Server" },
  { id: "notify", x: 480, y: 280, label: "Notify" },
];

const edges: [string, string][] = [
  ["gateway", "auth"],
  ["gateway", "booking"],
  ["gateway", "payments"],
  ["auth", "db1"],
  ["booking", "db2"],
  ["payments", "notify"],
  ["booking", "notify"],
];

function nodeById(id: string) {
  return nodes.find((n) => n.id === id)!;
}

export default function ServiceMesh() {
  return (
    <svg
      viewBox="0 0 560 340"
      className="h-full w-full"
      role="img"
      aria-label="Diagram of an API service mesh, representing microservices architecture"
    >
      <defs>
        <linearGradient id="pulseGrad" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#3B82F6" stopOpacity="0" />
          <stop offset="50%" stopColor="#3B82F6" stopOpacity="1" />
          <stop offset="100%" stopColor="#06B6D4" stopOpacity="0" />
        </linearGradient>
        <radialGradient id="nodeGlow">
          <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.55" />
          <stop offset="100%" stopColor="#3B82F6" stopOpacity="0" />
        </radialGradient>
      </defs>

      {edges.map(([a, b], i) => {
        const na = nodeById(a);
        const nb = nodeById(b);
        return (
          <g key={`${a}-${b}`}>
            <line
              x1={na.x}
              y1={na.y}
              x2={nb.x}
              y2={nb.y}
              stroke="#1E293B"
              strokeWidth={1.5}
            />
            <motion.circle
              r={3}
              fill="#06B6D4"
              initial={{ offsetDistance: "0%", opacity: 0 }}
              animate={{ offsetDistance: "100%", opacity: [0, 1, 1, 0] }}
              transition={{
                duration: 2.6,
                repeat: Infinity,
                delay: i * 0.5,
                ease: "linear",
              }}
              style={{
                offsetPath: `path("M${na.x} ${na.y} L${nb.x} ${nb.y}")`,
              }}
            />
          </g>
        );
      })}

      {nodes.map((n, i) => (
        <g key={n.id}>
          <circle cx={n.x} cy={n.y} r={26} fill="url(#nodeGlow)" />
          <motion.circle
            cx={n.x}
            cy={n.y}
            r={5}
            fill="#0B1120"
            stroke={n.id === "gateway" ? "#3B82F6" : "#06B6D4"}
            strokeWidth={2}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
          />
          <text
            x={n.x}
            y={n.y + 20}
            textAnchor="middle"
            className="fill-ink-faint"
            style={{ fontSize: 9, fontFamily: "var(--font-mono)" }}
          >
            {n.label}
          </text>
        </g>
      ))}
    </svg>
  );
}
