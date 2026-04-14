const cards = [
  {
    num: "01",
    title: "Task & Project Management",
    desc: "Create, assign, prioritize. Manage everything from a simple to-do to complex multi-stage projects with owners and dependencies.",
    span: "md:col-span-2 md:row-span-2",
    accent: "hsl(246,90%,68%)",
    icon: "◈",
    preview: (
      <div className="space-y-2 mb-4">
        {[
          { label: "Design System Review", status: "In Progress", color: "hsl(38,95%,60%)" },
          { label: "API Integration", status: "Done", color: "hsl(160,60%,55%)" },
          { label: "Client Proposal", status: "In Progress", color: "hsl(38,95%,60%)" },
        ].map((t, i) => (
          <div key={i} className="flex items-center gap-3 px-3 py-2 rounded-lg"
            style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.05)" }}>
            <div className="w-1 h-5 rounded-full" style={{ background: t.color }} />
            <div className="flex-1 text-xs" style={{ color: "hsl(var(--text-secondary))", fontFamily: "'DM Sans',sans-serif" }}>{t.label}</div>
            <div className="text-[10px] px-2 py-0.5 rounded mono" style={{ color: t.color, background: t.color + "15" }}>{t.status}</div>
          </div>
        ))}
      </div>
    ),
  },
  {
    num: "02",
    title: "KPI Tracking",
    desc: "Measure what matters. Live dashboards linked to every task.",
    span: "",
    accent: "hsl(183,100%,56%)",
    icon: "◇",
    preview: (
      <div className="mb-4">
        <div className="flex items-end gap-1 h-12 mb-2">
          {[40,55,48,70,62,85].map((h, i) => (
            <div key={i} className="flex-1 rounded-sm" style={{ height: `${h}%`, background: i === 5 ? "hsl(183,100%,56%)" : "rgba(139,160,255,0.15)" }} />
          ))}
        </div>
        <div className="font-heading font-700 text-xl" style={{ color: "hsl(183,100%,56%)" }}>87% <span className="text-xs font-400" style={{ color: "hsl(var(--text-ghost))" }}>Sprint Score</span></div>
      </div>
    ),
  },
  {
    num: "03",
    title: "Smart Calendar",
    desc: "See all tasks, deadlines, and meetings at a glance.",
    span: "",
    accent: "hsl(38,95%,60%)",
    icon: "⬡",
    preview: (
      <div className="grid grid-cols-7 gap-1 mb-4">
        {Array.from({ length: 21 }, (_, i) => (
          <div key={i} className="aspect-square rounded-sm flex items-center justify-center text-[9px]"
            style={{
              background: i === 10 ? "hsl(246,90%,68%)" : i % 7 === 2 || i % 7 === 5 ? "rgba(38,95%,60%,0.15)" : "rgba(255,255,255,0.04)",
              color: i === 10 ? "#fff" : "hsl(var(--text-ghost))",
              fontFamily: "'DM Mono',monospace",
            }}>
            {i + 1}
          </div>
        ))}
      </div>
    ),
  },
  {
    num: "04",
    title: "Role-Based Access",
    desc: "Enterprise-grade security. The right people have the right access.",
    span: "",
    accent: "hsl(246,90%,68%)",
    icon: "◉",
    preview: null,
  },
  {
    num: "05",
    title: "File Hub + Collaboration",
    desc: "Centralize all your files, communication, and schedules in one place.",
    span: "md:col-span-2",
    accent: "hsl(183,100%,56%)",
    icon: "◈",
    preview: (
      <div className="flex gap-3 mb-4">
        {["Design.fig","Roadmap.xlsx","Deck.pdf"].map((f, i) => (
          <div key={i} className="flex-1 rounded-lg p-2 text-center"
            style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.05)" }}>
            <div className="text-lg mb-1" style={{ color: ["hsl(246,90%,68%)","hsl(38,95%,60%)","hsl(183,100%,56%)"][i] }}>
              {["◈","▣","⬡"][i]}
            </div>
            <div className="mono text-[9px]" style={{ color: "hsl(var(--text-ghost))" }}>{f}</div>
          </div>
        ))}
      </div>
    ),
  },
];

export default function BentoSection() {
  return (
    <section className="relative py-24 section-deep overflow-hidden">
      <div className="grid-overlay opacity-40" />
      <div className="glow-orb" style={{ width: 500, height: 500, top: "30%", left: "10%", background: "hsla(246,72%,48%,0.08)" }} />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="text-center mb-16 reveal">
          <span className="section-label">Core Features</span>
          <h2 className="font-heading font-800 mt-2" style={{ fontSize: "clamp(28px,4.5vw,52px)", lineHeight: 1.05, letterSpacing: "-0.03em" }}>
            Everything Your Team Needs.{" "}
            <span className="gradient-text">Nothing It Doesn't.</span>
          </h2>
          <p className="text-lg mt-4 max-w-md mx-auto" style={{ color: "hsl(var(--text-muted))" }}>
            OmniX is laser-focused on workflows that matter.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {cards.map((c, i) => (
            <div key={i} className={`bento-card group reveal ${c.span}`} style={{ transitionDelay: `${i * 80}ms` }}>
              <div className="flex items-center justify-between mb-4">
                <span className="mono text-xs" style={{ color: "hsl(var(--text-ghost))", letterSpacing: "0.08em" }}>{c.num}</span>
                <span className="text-lg" style={{ color: c.accent }}>{c.icon}</span>
              </div>
              {c.preview}
              <div className="mb-1" style={{ width: 28, height: 2, background: c.accent, borderRadius: 1 }} />
              <h3 className="font-heading font-700 text-base mb-2" style={{ color: "hsl(var(--text-primary))" }}>{c.title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: "hsl(var(--text-muted))", lineHeight: 1.65 }}>{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}