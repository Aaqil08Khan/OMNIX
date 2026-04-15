import { useState } from "react";

const statBlocks = [
  { value: "3–4×", label: "Fewer Tools", desc: "Replaces project mgmt, files, KPI & comms apps", color: "hsl(var(--ember))" },
  { value: "Native", label: "Goal Linking", desc: "Every task tied directly to your business objectives", color: "hsl(var(--p400))" },
  { value: "1 View", label: "Total Clarity", desc: "The right info for every role, always visible", color: "hsl(var(--cyan))" },
  { value: "5→5k", label: "Seamless Scale", desc: "Grows from solo teams to entire enterprises", color: "hsl(var(--jade))" },
];

const features = [
  { feature: "Unified Task + KPI System", desc: "Tasks and performance metrics live together in one system", status: true },
  { feature: "Goal-Linked Execution", desc: "Every task is directly tied to measurable business outcomes", status: true },
  { feature: "Native Mobile Experience", desc: "Full functionality across devices without compromise", status: true },
  { feature: "Integrated File Hub", desc: "All documents, files, and assets stored and linked in one place", status: true },
  { feature: "Role-Based Access Control", desc: "Granular permissions tailored to every team role", status: true },
  { feature: "Real-Time KPI Sync", desc: "Performance metrics update instantly as work progresses", status: true },
];

const Check = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
    <circle cx="12" cy="12" r="10" fill="rgba(52,211,153,0.14)" />
    <path d="M8 12l3 3 5-5" stroke="#34d399" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default function WhyOmniXSection() {
  return (
    <section id="why-omnix" className="relative py-28 bg-deep overflow-hidden">
      <div className="grid-bg opacity-35" />
      <div
        className="glow-blob"
        style={{
          width: 700,
          height: 700,
          top: "50%",
          left: "50%",
          transform: "translate(-50%,-50%)",
          background: "hsla(248,72%,46%,0.09)",
        }}
      />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 reveal">
          <span className="section-tag">Why OmniX</span>
          <h2
            className="font-display mt-2"
            style={{
              fontSize: "clamp(32px,5vw,56px)",
              lineHeight: 1.04,
              letterSpacing: "-0.03em",
            }}
          >
            Not Just Another Tool.
            <br />
            <span className="grad-primary">A Competitive Advantage.</span>
          </h2>
          <p
            className="text-lg mt-5 max-w-lg mx-auto"
            style={{ color: "hsl(var(--t-muted))", lineHeight: 1.72 }}
          >
            OmniX is designed as a unified operating system for your business — not a collection of disconnected features.
          </p>
        </div>

        {/* Stat blocks */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {statBlocks.map((s, i) => (
            <div
              key={i}
              className="feat-card reveal group"
              style={{ transitionDelay: `${i * 80}ms`, padding: "28px 24px" }}
            >
              <div
                className="font-display font-700 mb-1"
                style={{
                  color: s.color,
                  fontSize: "clamp(28px,4vw,42px)",
                  letterSpacing: "-0.04em",
                }}
              >
                {s.value}
              </div>
              <div
                className="font-display font-600 text-[14px] mb-2"
                style={{ color: "hsl(var(--t-primary))" }}
              >
                {s.label}
              </div>
              <div
                className="text-[12.5px] leading-relaxed"
                style={{ color: "hsl(var(--t-muted))", lineHeight: 1.65 }}
              >
                {s.desc}
              </div>

              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
                style={{
                  background: `radial-gradient(circle at top left, ${s.color}0C, transparent 60%)`,
                  borderRadius: "inherit",
                }}
              />
            </div>
          ))}
        </div>

        {/* Feature Checklist */}
        <div
          className="reveal rounded-2xl overflow-hidden"
          style={{ border: "1px solid rgba(255,255,255,0.07)" }}
        >
          {/* Header */}
          <div
            className="px-6 py-4"
            style={{
              background: "hsl(var(--surface-2))",
              borderBottom: "1px solid rgba(255,255,255,0.05)",
            }}
          >
            <span
              className="mono text-[10px]"
              style={{
                color: "hsl(var(--t-ghost))",
                letterSpacing: "0.12em",
              }}
            >
              OMNIX CAPABILITY CHECKLIST
            </span>
          </div>

          {/* Rows */}
          {features.map((row, i) => (
            <div
              key={i}
              className="flex items-start gap-4 px-6 py-4"
              style={{
                borderTop: "1px solid rgba(255,255,255,0.04)",
                background: i % 2 === 1 ? "rgba(255,255,255,0.012)" : "transparent",
              }}
            >
              <div className="mt-1">
                <Check />
              </div>

              <div>
                <div
                  className="text-[14px] font-600 mb-1"
                  style={{ color: "hsl(var(--t-primary))" }}
                >
                  {row.feature}
                </div>
                <p
                  className="text-[12.5px] leading-relaxed"
                  style={{
                    color: "hsl(var(--t-muted))",
                    fontFamily: "'Outfit',sans-serif",
                  }}
                >
                  {row.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}