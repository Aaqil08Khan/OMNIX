const features = [
  { title: "Unified Workspace", desc: "All work in one place, zero context switching" },
  { title: "Goal-Linked Tasks", desc: "Every task tied to a real business objective" },
  { title: "Full-Stack Platform", desc: "Web + iOS + Android, always in sync" },
  { title: "Enterprise-Grade", desc: "Role-based access, secure and scalable" },
];

export default function SolutionSection() {
  return (
    <section id="features" className="relative py-24 section-void overflow-hidden">
      <div className="grid-overlay opacity-30" />
      <div className="glow-orb" style={{ width: 500, height: 500, top: "20%", right: "-5%", background: "hsla(246,72%,48%,0.10)" }} />

      <div className="container mx-auto px-6 lg:px-12 flex flex-col lg:flex-row items-center gap-16 relative z-10">
        {/* Phone mockup */}
        <div className="flex-1 relative device-float reveal">
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div style={{ width: 280, height: 280, borderRadius: "50%", background: "radial-gradient(circle, hsla(246,72%,48%,0.18), transparent 70%)", filter: "blur(30px)" }} />
          </div>

          {/* Phone */}
          <div className="w-64 mx-auto relative">
            <div className="rounded-3xl overflow-hidden" style={{ border: "1px solid rgba(139,160,255,0.15)", boxShadow: "0 40px 100px rgba(0,0,0,0.5)" }}>
              {/* Status bar */}
              <div className="px-5 py-3 flex items-center justify-between" style={{ background: "hsl(224,24%,8%)" }}>
                <span className="mono text-xs" style={{ color: "hsl(var(--text-ghost))" }}>9:41</span>
                <span className="font-heading text-sm font-700" style={{ color: "hsl(246,90%,68%)" }}>OmniX</span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="hsl(var(--text-ghost))" strokeWidth="2">
                  <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/>
                </svg>
              </div>

              {/* Content */}
              <div className="px-4 py-4 space-y-2" style={{ background: "hsl(224,22%,9%)" }}>
                <div className="mono text-[10px] mb-3" style={{ color: "hsl(var(--text-ghost))", letterSpacing: "0.08em" }}>TODAY — 6 TASKS</div>
                {[
                  { t: "Design System Review", d: "Oct 14", s: "In Progress", c: "hsl(38,95%,60%)" },
                  { t: "API v2 Integration", d: "Oct 12", s: "Done", c: "hsl(160,60%,55%)" },
                  { t: "Q4 Investor Deck", d: "Oct 18", s: "To Do", c: "hsl(246,90%,68%)" },
                  { t: "UX Audit Sprint 3", d: "Oct 20", s: "To Do", c: "hsl(246,90%,68%)" },
                  { t: "Backend Refactor", d: "Oct 16", s: "In Progress", c: "hsl(38,95%,60%)" },
                ].map((task, i) => (
                  <div key={i} className="flex items-center gap-2 px-3 py-2.5 rounded-xl"
                    style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.05)" }}>
                    <div className="w-1 h-6 rounded-full flex-shrink-0" style={{ background: task.c }} />
                    <div className="flex-1 min-w-0">
                      <div className="text-xs truncate" style={{ color: "hsl(var(--text-secondary))", fontFamily: "'DM Sans',sans-serif" }}>{task.t}</div>
                      <div className="mono text-[9px]" style={{ color: "hsl(var(--text-ghost))" }}>{task.d}</div>
                    </div>
                    <div className="text-[9px] px-1.5 py-0.5 rounded mono" style={{ color: task.c, background: task.c + "12" }}>{task.s}</div>
                  </div>
                ))}

                {/* KPI bar */}
                <div className="rounded-xl p-3 mt-2" style={{ background: "rgba(139,160,255,0.06)", border: "1px solid rgba(139,160,255,0.12)" }}>
                  <div className="flex justify-between items-center mb-2">
                    <span className="mono text-[10px]" style={{ color: "hsl(var(--text-ghost))" }}>KPI Score</span>
                    <span className="font-heading font-700 text-sm" style={{ color: "hsl(183,100%,56%)" }}>87%</span>
                  </div>
                  <div className="h-1 rounded-full" style={{ background: "rgba(255,255,255,0.08)" }}>
                    <div className="h-1 rounded-full" style={{ width: "87%", background: "linear-gradient(90deg, hsl(246,90%,68%), hsl(183,100%,56%))" }} />
                  </div>
                </div>
              </div>

              {/* Home indicator */}
              <div className="flex justify-center py-3" style={{ background: "hsl(224,22%,9%)" }}>
                <div className="w-24 h-1 rounded-full" style={{ background: "rgba(255,255,255,0.1)" }} />
              </div>
            </div>

            {/* Floating notification */}
            <div className="absolute -bottom-3 -right-6 flex items-center gap-2 px-3 py-2 rounded-xl"
              style={{ background: "hsl(224,22%,11%)", border: "1px solid rgba(52,211,153,0.2)", boxShadow: "0 8px 24px rgba(0,0,0,0.4)" }}>
              <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#34d399", boxShadow: "0 0 8px #34d399" }} />
              <span className="mono text-[10px]" style={{ color: "#34d399" }}>Task completed · Riya</span>
            </div>
          </div>
        </div>

        {/* Text */}
        <div className="flex-1 space-y-8 reveal">
          <span className="section-label">The Solution</span>
          <h2 className="font-heading font-800" style={{ fontSize: "clamp(28px,4vw,48px)", lineHeight: 1.05, letterSpacing: "-0.03em" }}>
            One Platform.<br />
            <span className="gradient-text">Total Clarity.</span>
          </h2>
          <p className="text-lg leading-relaxed max-w-lg" style={{ color: "hsl(var(--text-secondary))", lineHeight: 1.7 }}>
            OmniX is a unified web and mobile platform that connects your daily tasks directly to your business goals. Beautiful by design, powerful by architecture.
          </p>

          <div className="space-y-4">
            {features.map((f, i) => (
              <div key={i} className="flex items-start gap-4">
                <div className="flex-shrink-0 mt-1">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="12" r="10" fill="rgba(139,160,255,0.1)" />
                    <path d="M8 12l3 3 5-5" stroke="hsl(246,90%,68%)" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </div>
                <div>
                  <span className="font-heading font-600 text-sm" style={{ color: "hsl(var(--text-primary))" }}>{f.title}</span>
                  <span className="text-sm ml-2" style={{ color: "hsl(var(--text-muted))" }}>— {f.desc}</span>
                </div>
              </div>
            ))}
          </div>

          <button className="btn-ghost text-sm">
            See all features →
          </button>
        </div>
      </div>
    </section>
  );
}