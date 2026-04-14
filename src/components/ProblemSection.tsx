const problems = [
  {
    title: "Scattered Information",
    desc: "Your data lives in five different apps. Nothing connects. Context is lost daily.",
    icon: "◈",
    color: "hsl(38,95%,60%)",
    num: "01",
  },
  {
    title: "Lack of Clarity",
    desc: "No one can see the big picture. Reports are manual. Goals feel disconnected from daily work.",
    icon: "◇",
    color: "hsl(246,90%,68%)",
    num: "02",
  },
  {
    title: "Missed Deadlines",
    desc: "Tasks slip through the cracks. Reminders come too late, or not at all.",
    icon: "⬡",
    color: "hsl(0,75%,60%)",
    num: "03",
  },
  {
    title: "Wasted Time",
    desc: "Hours spent switching between tools, syncing data, and updating spreadsheets by hand.",
    icon: "◉",
    color: "hsl(183,100%,50%)",
    num: "04",
  },
];

export default function ProblemSection() {
  return (
    <section className="relative py-24 section-void overflow-hidden">
      <div className="grid-overlay opacity-40" />
      <div className="glow-orb" style={{ width: 500, height: 500, top: "20%", right: "-10%", background: "hsla(0,75%,40%,0.06)" }} />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 reveal">
            <span className="section-label">The Challenge</span>
            <h2 className="font-heading font-800 mt-2" style={{ fontSize: "clamp(32px,5vw,56px)", lineHeight: 1.05, letterSpacing: "-0.03em" }}>
              Modern Teams Are <span className="gradient-text-warm">Drowning</span>
              <br />In Tool Overload
            </h2>
            <p className="text-lg mt-4 max-w-lg mx-auto" style={{ color: "hsl(var(--text-muted))" }}>
              Work is scattered. Deadlines are missed. No one has clarity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-px rounded-2xl overflow-hidden reveal"
            style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.05)" }}>
            {problems.map((p, i) => (
              <div key={i} className="p-8 group transition-all duration-300 hover:z-10 relative"
                style={{ background: "hsl(var(--bg-surface))" }}>
                {/* Number */}
                <div className="mono text-xs mb-4" style={{ color: "hsl(var(--text-ghost))", letterSpacing: "0.1em" }}>{p.num}</div>

                {/* Icon */}
                <div className="text-2xl mb-4" style={{ color: p.color }}>{p.icon}</div>

                {/* Line */}
                <div className="mb-3" style={{ width: 32, height: 2, background: p.color, borderRadius: 1 }} />

                <h3 className="font-heading font-700 text-lg mb-3" style={{ color: "hsl(var(--text-primary))" }}>
                  {p.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "hsl(var(--text-muted))", lineHeight: 1.7 }}>
                  {p.desc}
                </p>

                {/* Hover glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
                  style={{ background: `radial-gradient(circle at top left, ${p.color}08, transparent 60%)` }} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}