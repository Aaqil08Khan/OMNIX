const techs = [
  {
    num: "01",
    title: "Programming Language",
    desc: "Server-side logic and API development. Powers the brain of OmniX.",
    icon: "</>",
    color: "hsl(246,90%,68%)",
  },
  {
    num: "02",
    title: "Database",
    desc: "Secure, organized, and optimized data storage for every workspace.",
    icon: "⬡",
    color: "hsl(183,100%,56%)",
  },
  {
    num: "03",
    title: "UI Library",
    desc: "Creating the interactive, beautiful visual layer for users.",
    icon: "◈",
    color: "hsl(38,95%,60%)",
  },
  {
    num: "04",
    title: "Native Bridge",
    desc: "Packages web code into native iOS and Android apps seamlessly.",
    icon: "◉",
    color: "hsl(246,90%,68%)",
  },
];

export default function TechStackSection() {
  return (
    <section id="tech-stack" className="relative py-24 section-void overflow-hidden">
      <div className="grid-overlay opacity-50" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="text-center mb-16 reveal">
          <span className="section-label">Tech Stack</span>
          <h2 className="font-heading font-800 mt-2" style={{ fontSize: "clamp(28px,4vw,48px)", lineHeight: 1.05, letterSpacing: "-0.03em" }}>
            Built With Modern,{" "}
            <span className="gradient-text">Battle-Tested Technology</span>
          </h2>
          <p className="text-lg mt-4 max-w-lg mx-auto" style={{ color: "hsl(var(--text-muted))" }}>
            Every layer of OmniX is designed for performance, reliability, and scale.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {techs.map((t, i) => (
            <div key={i} className="tech-card reveal group" style={{ transitionDelay: `${i * 80}ms` }}>
              <div className="flex items-start justify-between mb-6">
                <div className="mono text-xs" style={{ color: "hsl(var(--text-ghost))", letterSpacing: "0.08em" }}>{t.num}</div>
                <div className="text-2xl font-mono" style={{ color: t.color }}>{t.icon}</div>
              </div>
              <div className="mb-2" style={{ width: 28, height: 2, background: t.color, borderRadius: 1 }} />
              <h3 className="font-heading font-700 text-base mb-2" style={{ color: "hsl(var(--text-primary))" }}>{t.title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: "hsl(var(--text-muted))", lineHeight: 1.65 }}>{t.desc}</p>
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none rounded-xl"
                style={{ background: `radial-gradient(circle at bottom right, ${t.color}0C, transparent 60%)` }} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}