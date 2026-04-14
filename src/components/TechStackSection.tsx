const techs = [
  {
    num: "01",
    title: "Programming Language",
    tag: "Backend",
    desc: "Server-side logic and API development. Powers the brain of OmniX — robust, typed, and highly scalable.",
    icon: "</>",
    color: "hsl(var(--p400))",
    bg: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&q=80&auto=format",
  },
  {
    num: "02",
    title: "Database",
    tag: "Storage",
    desc: "Secure, organized, and optimized data storage for every workspace. ACID-compliant with real-time replication.",
    icon: "⬡",
    color: "hsl(var(--cyan))",
    bg: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&q=80&auto=format",
  },
  {
    num: "03",
    title: "UI Library",
    tag: "Frontend",
    desc: "Creating the interactive, beautiful visual layer for users. Component-driven, performant, and accessible.",
    icon: "◈",
    color: "hsl(var(--ember))",
    bg: "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=400&q=80&auto=format",
  },
  {
    num: "04",
    title: "Native Bridge",
    tag: "Mobile",
    desc: "Packages web code into native iOS and Android apps seamlessly. One codebase, truly native performance.",
    icon: "◉",
    color: "hsl(var(--jade))",
    bg: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&q=80&auto=format",
  },
];

const principles = [
  { icon: "⚡", label: "Performance-First", desc: "Sub-100ms response times" },
  { icon: "🔒", label: "Security-Grade", desc: "SOC 2 compliant infrastructure" },
  { icon: "♾️", label: "Always Available", desc: "99.99% uptime SLA" },
  { icon: "🌐", label: "Global CDN", desc: "Edge-deployed worldwide" },
];

export default function TechStackSection() {
  return (
    <section id="tech-stack" className="relative py-28 bg-void overflow-hidden">
      <div className="grid-bg opacity-55"/>
      <div className="glow-blob" style={{ width: 500, height: 500, bottom: "10%", right: "5%", background: "hsla(186,80%,40%,0.08)" }}/>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 reveal">
          <span className="section-tag">Tech Stack</span>
          <h2 className="font-display mt-2" style={{ fontSize: "clamp(30px,4.5vw,52px)", lineHeight: 1.04, letterSpacing: "-0.03em" }}>
            Built With Modern,{" "}
            <span className="grad-primary">Battle-Tested Technology</span>
          </h2>
          <p className="text-lg mt-5 max-w-lg mx-auto" style={{ color: "hsl(var(--t-muted))" }}>
            Every layer of OmniX is engineered for performance, reliability, and infinite scale.
          </p>
        </div>

        {/* Tech cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {techs.map((t, i) => (
            <div key={i}
              className="feat-card group reveal"
              style={{ transitionDelay: `${i * 80}ms`, padding: 0, overflow: "hidden" }}
            >
              {/* Image backdrop */}
              <div className="relative h-28 overflow-hidden">
                <img src={t.bg} alt="" className="w-full h-full object-cover" style={{ filter: "brightness(0.2) saturate(0.3)" }}/>
                <div className="absolute inset-0" style={{
                  background: `linear-gradient(135deg, ${t.color}20 0%, transparent 60%), linear-gradient(180deg, transparent 40%, hsl(var(--surface)) 100%)`
                }}/>
                <div className="absolute top-3 right-3">
                  <span className="mono text-[10px] px-2 py-1 rounded-md" style={{ background: t.color + "20", color: t.color, border: `1px solid ${t.color}30` }}>
                    {t.tag}
                  </span>
                </div>
                <div className="absolute bottom-3 left-4 text-2xl font-mono" style={{ color: t.color }}>{t.icon}</div>
              </div>

              {/* Content */}
              <div className="p-5">
                <div className="mono text-[10px] mb-2" style={{ color: "hsl(var(--t-ghost))", letterSpacing: "0.09em" }}>{t.num}</div>
                <div className="mb-2" style={{ width: 24, height: 2, background: t.color, borderRadius: 1 }}/>
                <h3 className="font-display font-600 text-[14px] mb-2" style={{ color: "hsl(var(--t-primary))" }}>{t.title}</h3>
                <p className="text-[12.5px] leading-relaxed" style={{ color: "hsl(var(--t-muted))", lineHeight: 1.65 }}>{t.desc}</p>
              </div>

              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
                style={{ background: `radial-gradient(circle at bottom right, ${t.color}0C, transparent 55%)`, borderRadius: "inherit" }}/>
            </div>
          ))}
        </div>

        {/* Engineering principles */}
        <div className="reveal">
          <div className="rounded-2xl p-6 lg:p-8" style={{ background: "hsl(var(--surface))", border: "1px solid rgba(255,255,255,0.06)" }}>
            <p className="mono text-[11px] mb-5" style={{ color: "hsl(var(--t-ghost))", letterSpacing: "0.1em" }}>
              // ENGINEERING PRINCIPLES
            </p>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {principles.map((p, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="text-xl flex-shrink-0">{p.icon}</div>
                  <div>
                    <div className="font-display font-600 text-[13px]" style={{ color: "hsl(var(--t-primary))" }}>{p.label}</div>
                    <div className="mono text-[11px] mt-0.5" style={{ color: "hsl(var(--t-ghost))" }}>{p.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}