const cases = [
  {
    num: "01",
    title: "Corporate Teams",
    subtitle: "Marketing, IT, HR",
    desc: "Manage complex projects, track departmental KPIs, and streamline cross-functional workflows.",
    color: "hsl(246,90%,68%)",
    icon: "◈",
  },
  {
    num: "02",
    title: "Startups",
    subtitle: "Small Businesses",
    desc: "Get a powerful all-in-one tool to stay organized and focused on growth, without enterprise cost.",
    color: "hsl(38,95%,60%)",
    icon: "◇",
  },
  {
    num: "03",
    title: "Agencies",
    subtitle: "Project-Based & Consulting",
    desc: "Juggle multiple clients, manage resources, and keep projects on time and on budget.",
    color: "hsl(183,100%,56%)",
    icon: "⬡",
  },
  {
    num: "04",
    title: "Personal Use",
    subtitle: "Students & General Public",
    desc: "Organize your personal life. Manage freelance work, plan personal goals, or coordinate family tasks.",
    color: "hsl(246,90%,68%)",
    icon: "◉",
  },
];

export default function UseCasesSection() {
  return (
    <section id="use-cases" className="relative py-24 section-deep overflow-hidden">
      <div className="grid-overlay opacity-30" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="text-center mb-16 reveal">
          <span className="section-label">Use Cases</span>
          <h2 className="font-heading font-800 mt-2" style={{ fontSize: "clamp(28px,4.5vw,52px)", lineHeight: 1.05, letterSpacing: "-0.03em" }}>
            Built For{" "}
            <span className="gradient-text">Every Kind</span> of Team
          </h2>
          <p className="text-lg mt-4 max-w-md mx-auto" style={{ color: "hsl(var(--text-muted))" }}>
            Whether you're a solo founder or a Fortune 500, OmniX scales with you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {cases.map((c, i) => (
            <div key={i} className="use-case-card group reveal" style={{ transitionDelay: `${i * 80}ms` }}>
              <div className="flex items-center justify-between mb-6">
                <span className="mono text-xs" style={{ color: "hsl(var(--text-ghost))", letterSpacing: "0.08em" }}>{c.num}</span>
                <span className="text-xl" style={{ color: c.color }}>{c.icon}</span>
              </div>

              <div className="mb-1" style={{ width: 28, height: 2, background: c.color, borderRadius: 1 }} />
              <h3 className="font-heading font-700 text-xl mb-0.5" style={{ color: "hsl(var(--text-primary))" }}>{c.title}</h3>
              <p className="mono text-xs mb-3" style={{ color: c.color, letterSpacing: "0.04em" }}>{c.subtitle}</p>
              <p className="text-sm leading-relaxed" style={{ color: "hsl(var(--text-muted))", lineHeight: 1.7 }}>{c.desc}</p>

              <div className="mt-5 flex items-center gap-2 text-sm group-hover:gap-3 transition-all" style={{ color: c.color }}>
                <span style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 13 }}>Learn more</span>
                <span>→</span>
              </div>

              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
                style={{ background: `radial-gradient(circle at bottom right, ${c.color}07, transparent 55%)` }} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}