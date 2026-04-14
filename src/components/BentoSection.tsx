const cards = [
  {
    num: "01",
    title: "Task & Project Management",
    desc: "Create, assign, and prioritize. Manage everything from a simple to-do to complex multi-stage projects with owners and dependencies.",
    span: "md:col-span-2 md:row-span-2",
    accent: "hsl(var(--p400))",
    icon: "◈",
    image: "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=600&q=80&auto=format",
    preview: (
      <div className="space-y-2 mb-5">
        {[
          { label: "Design System Review", status: "In Progress", color: "hsl(var(--ember))", prog: 68 },
          { label: "API Integration", status: "Done", color: "hsl(var(--jade))", prog: 100 },
          { label: "Client Proposal", status: "In Progress", color: "hsl(var(--ember))", prog: 42 },
        ].map((t, i) => (
          <div key={i} className="flex items-center gap-3 px-3 py-2.5 rounded-xl"
            style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.05)" }}>
            <div className="w-1 h-6 rounded-full" style={{ background: t.color }}/>
            <div className="flex-1">
              <div className="text-[12px] mb-1" style={{ color: "hsl(var(--t-secondary))", fontFamily: "'Outfit',sans-serif" }}>{t.label}</div>
              <div className="h-1 rounded-full" style={{ background: "rgba(255,255,255,0.06)" }}>
                <div className="h-1 rounded-full" style={{ width: `${t.prog}%`, background: t.color }}/>
              </div>
            </div>
            <div className="text-[10px] px-2 py-0.5 rounded-md mono" style={{ color: t.color, background: t.color + "15" }}>{t.status}</div>
          </div>
        ))}
      </div>
    ),
  },
  {
    num: "02",
    title: "KPI Tracking",
    desc: "Live dashboards linked to every task.",
    span: "",
    accent: "hsl(var(--cyan))",
    icon: "◇",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&q=80&auto=format",
    preview: (
      <div className="mb-4">
        <div className="flex items-end gap-1.5 h-14 mb-2">
          {[40,55,48,70,62,85].map((h, i) => (
            <div key={i} className="flex-1 rounded-sm" style={{
              height: `${h}%`,
              background: i === 5 ? "hsl(var(--cyan))" : "rgba(110,130,255,0.15)",
              boxShadow: i === 5 ? "0 0 10px hsl(var(--cyan) / 0.6)" : "none"
            }}/>
          ))}
        </div>
        <div className="font-display font-700 text-xl" style={{ color: "hsl(var(--cyan))", letterSpacing: "-0.03em" }}>
          87% <span className="text-xs font-400" style={{ color: "hsl(var(--t-ghost))" }}>Sprint Score</span>
        </div>
      </div>
    ),
  },
  {
    num: "03",
    title: "Smart Calendar",
    desc: "See all tasks, deadlines, and meetings at a glance.",
    span: "",
    accent: "hsl(var(--ember))",
    icon: "⬡",
    image: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?w=400&q=80&auto=format",
    preview: (
      <div className="grid grid-cols-7 gap-1 mb-4">
        {Array.from({ length: 21 }, (_, i) => (
          <div key={i} className="aspect-square rounded-lg flex items-center justify-center text-[9px]"
            style={{
              background: i === 10 ? "hsl(var(--p500))" : i % 7 === 2 || i % 7 === 5 ? "rgba(251,146,60,0.15)" : "rgba(255,255,255,0.04)",
              color: i === 10 ? "#fff" : "hsl(var(--t-ghost))",
              fontFamily: "'JetBrains Mono',monospace",
              boxShadow: i === 10 ? "0 0 10px hsl(var(--p500) / 0.6)" : "none"
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
    desc: "Enterprise-grade security. The right people have the right access at all times.",
    span: "",
    accent: "hsl(var(--p400))",
    icon: "◉",
    image: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=400&q=80&auto=format",
    preview: null,
  },
  {
    num: "05",
    title: "File Hub + Collaboration",
    desc: "Centralize all your files, communication, and schedules in one searchable place.",
    span: "md:col-span-2",
    accent: "hsl(var(--cyan))",
    icon: "◈",
    image: "https://images.unsplash.com/photo-1600267185393-1b14be2a9a5a?w=600&q=80&auto=format",
    preview: (
      <div className="flex gap-3 mb-4">
        {["Design.fig","Roadmap.xlsx","Deck.pdf"].map((f, i) => (
          <div key={i} className="flex-1 rounded-xl p-3 text-center"
            style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.06)" }}>
            <div className="text-xl mb-1.5" style={{ color: ["hsl(var(--p400))","hsl(var(--ember))","hsl(var(--cyan))"][i] }}>
              {["◈","▣","⬡"][i]}
            </div>
            <div className="mono text-[9px]" style={{ color: "hsl(var(--t-ghost))" }}>{f}</div>
          </div>
        ))}
      </div>
    ),
  },
];

export default function BentoSection() {
  return (
    <section className="relative py-28 bg-deep overflow-hidden">
      <div className="grid-bg opacity-50"/>
      <div className="glow-blob" style={{ width: 600, height: 600, top: "20%", left: "5%", background: "hsla(248,72%,46%,0.09)" }}/>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 reveal">
          <span className="section-tag">Core Features</span>
          <h2 className="font-display mt-2" style={{ fontSize: "clamp(30px,4.5vw,56px)", lineHeight: 1.04, letterSpacing: "-0.03em" }}>
            Everything Your Team Needs.{" "}
            <span className="grad-primary">Nothing It Doesn't.</span>
          </h2>
          <p className="text-lg mt-4 max-w-md mx-auto" style={{ color: "hsl(var(--t-muted))" }}>
            OmniX is laser-focused on workflows that matter most.
          </p>
        </div>

        {/* Bento grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {cards.map((c, i) => (
            <div key={i}
              className={`feat-card group reveal ${c.span}`}
              style={{ transitionDelay: `${i * 80}ms`, position: "relative", overflow: "hidden" }}
            >
              {/* Subtle image in bg */}
              {c.image && (
                <div className="absolute inset-0 opacity-[0.04] group-hover:opacity-[0.07] transition-opacity">
                  <img src={c.image} alt="" className="w-full h-full object-cover"/>
                </div>
              )}

              {/* Content */}
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <span className="mono text-[11px]" style={{ color: "hsl(var(--t-ghost))", letterSpacing: "0.09em" }}>{c.num}</span>
                  <span className="text-xl" style={{ color: c.accent }}>{c.icon}</span>
                </div>
                {c.preview}
                <div className="mb-2" style={{ width: 28, height: 2, background: c.accent, borderRadius: 1 }}/>
                <h3 className="font-display font-600 text-[15px] mb-2" style={{ color: "hsl(var(--t-primary))" }}>{c.title}</h3>
                <p className="text-[13.5px] leading-relaxed" style={{ color: "hsl(var(--t-muted))", lineHeight: 1.68 }}>{c.desc}</p>
              </div>

              {/* Hover glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
                style={{ background: `radial-gradient(circle at bottom right, ${c.accent}09, transparent 60%)` }}/>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}