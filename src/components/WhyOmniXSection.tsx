const statBlocks = [
  { value: "3–4×", label: "Fewer Tools", desc: "Replaces project mgmt, files, KPI & comms apps", color: "hsl(var(--ember))" },
  { value: "Native", label: "Goal Linking", desc: "Every task tied directly to your business objectives", color: "hsl(var(--p400))" },
  { value: "1 View", label: "Total Clarity", desc: "The right info for every role, always visible", color: "hsl(var(--cyan))" },
  { value: "5→5k", label: "Seamless Scale", desc: "Grows from solo teams to entire enterprises", color: "hsl(var(--jade))" },
];

const comparison = [
  { feature: "Unified Task + KPI", omnix: true, asana: false, notion: "partial", monday: false },
  { feature: "Goal-Linked Tasks", omnix: true, asana: "partial", notion: false, monday: "partial" },
  { feature: "Native Mobile App", omnix: true, asana: true, notion: "partial", monday: true },
  { feature: "File Hub Built-in", omnix: true, asana: false, notion: true, monday: false },
  { feature: "Role-Based Access", omnix: true, asana: "partial", notion: false, monday: true },
  { feature: "Real-Time KPI Sync", omnix: true, asana: false, notion: false, monday: "partial" },
];

const Check = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
    <circle cx="12" cy="12" r="10" fill="rgba(52,211,153,0.14)"/>
    <path d="M8 12l3 3 5-5" stroke="#34d399" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const Cross = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
    <circle cx="12" cy="12" r="10" fill="rgba(239,68,68,0.07)"/>
    <path d="M15 9l-6 6M9 9l6 6" stroke="rgba(239,68,68,0.45)" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

const Partial = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
    <circle cx="12" cy="12" r="10" fill="rgba(251,191,36,0.07)"/>
    <path d="M8 12h8" stroke="rgba(251,191,36,0.6)" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

const Cell = ({ val }: { val: boolean | string }) => {
  const el = val === true ? <Check/> : val === false ? <Cross/> : <Partial/>;
  return <div className="flex justify-center">{el}</div>;
};

const tools = [
  { name: "OmniX", highlight: true },
  { name: "Asana" },
  { name: "Notion" },
  { name: "Monday" },
];

export default function WhyOmniXSection() {
  return (
    <section id="why-omnix" className="relative py-28 bg-deep overflow-hidden">
      <div className="grid-bg opacity-35"/>
      <div className="glow-blob" style={{ width: 700, height: 700, top: "50%", left: "50%", transform: "translate(-50%,-50%)", background: "hsla(248,72%,46%,0.09)" }}/>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 reveal">
          <span className="section-tag">Why OmniX</span>
          <h2 className="font-display mt-2" style={{ fontSize: "clamp(32px,5vw,56px)", lineHeight: 1.04, letterSpacing: "-0.03em" }}>
            Not Just Another Tool.<br/>
            <span className="grad-primary">A Competitive Advantage.</span>
          </h2>
          <p className="text-lg mt-5 max-w-lg mx-auto" style={{ color: "hsl(var(--t-muted))", lineHeight: 1.72 }}>
            What sets OmniX apart is how its features combine to deliver measurable impact on your team's performance.
          </p>
        </div>

        {/* Stat blocks */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {statBlocks.map((s, i) => (
            <div key={i}
              className="feat-card reveal group"
              style={{ transitionDelay: `${i * 80}ms`, padding: "28px 24px" }}
            >
              <div className="font-display font-700 mb-1" style={{ color: s.color, fontSize: "clamp(28px,4vw,42px)", letterSpacing: "-0.04em" }}>
                {s.value}
              </div>
              <div className="font-display font-600 text-[14px] mb-2" style={{ color: "hsl(var(--t-primary))" }}>{s.label}</div>
              <div className="text-[12.5px] leading-relaxed" style={{ color: "hsl(var(--t-muted))", lineHeight: 1.65 }}>{s.desc}</div>
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
                style={{ background: `radial-gradient(circle at top left, ${s.color}0C, transparent 60%)`, borderRadius: "inherit" }}/>
            </div>
          ))}
        </div>

        {/* Comparison table */}
        <div className="reveal rounded-2xl overflow-hidden"
          style={{ border: "1px solid rgba(255,255,255,0.07)" }}>
          {/* Table header */}
          <div className="grid" style={{ gridTemplateColumns: "2fr 1fr 1fr 1fr 1fr", background: "hsl(var(--surface-2))" }}>
            <div className="p-4 font-display font-600 text-[13px]" style={{ color: "hsl(var(--t-primary))" }}>Feature</div>
            {tools.map(col => (
              <div key={col.name} className="p-4 text-center font-display font-600 text-[13px]"
                style={{
                  color: col.highlight ? "hsl(var(--p400))" : "hsl(var(--t-muted))",
                  background: col.highlight ? "rgba(110,130,255,0.07)" : undefined,
                  borderLeft: col.highlight ? "1px solid rgba(110,130,255,0.15)" : "1px solid rgba(255,255,255,0.04)"
                }}>
                {col.name}
                {col.highlight && (
                  <span className="block mono text-[9px] mt-0.5" style={{ color: "hsl(var(--p400))", opacity: 0.7 }}>★ Recommended</span>
                )}
              </div>
            ))}
          </div>

          {/* Rows */}
          {comparison.map((row, i) => (
            <div key={i} className="grid" style={{
              gridTemplateColumns: "2fr 1fr 1fr 1fr 1fr",
              background: i % 2 === 1 ? "rgba(255,255,255,0.012)" : "transparent",
              borderTop: "1px solid rgba(255,255,255,0.04)"
            }}>
              <div className="p-4 text-[13.5px]" style={{ color: "hsl(var(--t-secondary))", fontFamily: "'Outfit',sans-serif" }}>
                {row.feature}
              </div>
              <div className="p-4" style={{ background: "rgba(110,130,255,0.035)", borderLeft: "1px solid rgba(110,130,255,0.12)" }}>
                <Cell val={row.omnix}/>
              </div>
              <div className="p-4" style={{ borderLeft: "1px solid rgba(255,255,255,0.04)" }}><Cell val={row.asana}/></div>
              <div className="p-4" style={{ borderLeft: "1px solid rgba(255,255,255,0.04)" }}><Cell val={row.notion}/></div>
              <div className="p-4" style={{ borderLeft: "1px solid rgba(255,255,255,0.04)" }}><Cell val={row.monday}/></div>
            </div>
          ))}

          {/* Legend */}
          <div className="flex items-center gap-6 px-4 py-3 flex-wrap"
            style={{ background: "hsl(var(--surface))", borderTop: "1px solid rgba(255,255,255,0.04)" }}>
            {[
              { icon: <Check/>, label: "Full support" },
              { icon: <Partial/>, label: "Partial support" },
              { icon: <Cross/>, label: "Not supported" },
            ].map((l, i) => (
              <div key={i} className="flex items-center gap-2">
                {l.icon}
                <span className="mono text-[10px]" style={{ color: "hsl(var(--t-ghost))" }}>{l.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}