const statBlocks = [
  { value: "3–4×", label: "Fewer Tools", desc: "Replaces project mgmt, files, KPI & comms apps", color: "hsl(38,95%,60%)" },
  { value: "Native", label: "Goal Linking", desc: "Every task tied directly to your business objectives", color: "hsl(246,90%,68%)" },
  { value: "1 View", label: "Total Clarity", desc: "The right info for every role, always visible", color: "hsl(183,100%,56%)" },
  { value: "5→5k", label: "Seamless Scale", desc: "Grows from solo teams to entire enterprises", color: "hsl(246,90%,68%)" },
];

const comparison = [
  { feature: "Unified Task + KPI", omnix: true, asana: false, notion: "partial", monday: false },
  { feature: "Goal-Linked Tasks", omnix: true, asana: "partial", notion: false, monday: "partial" },
  { feature: "Native Mobile App", omnix: true, asana: true, notion: "partial", monday: true },
  { feature: "File Hub Built-in", omnix: true, asana: false, notion: true, monday: false },
  { feature: "Role-Based Access", omnix: true, asana: "partial", notion: false, monday: true },
];

const Check = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
    <circle cx="12" cy="12" r="10" fill="rgba(52,211,153,0.12)" />
    <path d="M8 12l3 3 5-5" stroke="#34d399" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);
const Cross = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
    <circle cx="12" cy="12" r="10" fill="rgba(239,68,68,0.08)" />
    <path d="M15 9l-6 6M9 9l6 6" stroke="rgba(239,68,68,0.5)" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);
const Partial = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
    <circle cx="12" cy="12" r="10" fill="rgba(251,191,36,0.08)" />
    <path d="M8 12h8" stroke="rgba(251,191,36,0.7)" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);
const CellIcon = ({ val }: { val: boolean | string }) => {
  if (val === true) return <Check />;
  if (val === false) return <Cross />;
  return <Partial />;
};

export default function WhyOmniXSection() {
  return (
    <section id="why-omnix" className="relative py-24 section-deep overflow-hidden">
      <div className="grid-overlay opacity-30" />
      <div className="glow-orb" style={{ width: 600, height: 600, top: "50%", left: "50%", transform: "translate(-50%,-50%)", background: "hsla(246,72%,48%,0.08)" }} />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="text-center mb-16 reveal">
          <span className="section-label">Why OmniX</span>
          <h2 className="font-heading font-800 mt-2" style={{ fontSize: "clamp(32px,5vw,52px)", lineHeight: 1.05, letterSpacing: "-0.03em" }}>
            Not Just Another Tool.<br />
            <span className="gradient-text">A Competitive Advantage.</span>
          </h2>
          <p className="text-lg mt-4 max-w-lg mx-auto" style={{ color: "hsl(var(--text-muted))" }}>
            What sets OmniX apart is how its features combine to deliver measurable impact.
          </p>
        </div>

        {/* Stat blocks */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {statBlocks.map((s, i) => (
            <div key={i} className="reveal p-6 rounded-xl group relative overflow-hidden"
              style={{ background: "hsl(var(--bg-surface))", border: "1px solid rgba(255,255,255,0.06)", transitionDelay: `${i * 80}ms` }}>
              <div className="font-heading font-800 text-3xl md:text-4xl mb-1" style={{ color: s.color, letterSpacing: "-0.04em" }}>
                {s.value}
              </div>
              <div className="font-heading font-600 text-sm mb-2" style={{ color: "hsl(var(--text-primary))" }}>{s.label}</div>
              <div className="text-xs leading-relaxed" style={{ color: "hsl(var(--text-muted))" }}>{s.desc}</div>
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
                style={{ background: `radial-gradient(circle at top left, ${s.color}0A, transparent 60%)` }} />
            </div>
          ))}
        </div>

        {/* Comparison table */}
        <div className="reveal rounded-2xl overflow-hidden" style={{ border: "1px solid rgba(255,255,255,0.06)" }}>
          <table className="w-full text-sm">
            <thead>
              <tr style={{ background: "hsl(var(--bg-surface-2))" }}>
                <th className="text-left p-4 font-heading font-600 text-sm" style={{ color: "hsl(var(--text-primary))" }}>
                  Feature
                </th>
                {[
                  { name: "OmniX", highlight: true },
                  { name: "Asana" },
                  { name: "Notion" },
                  { name: "Monday" },
                ].map((col) => (
                  <th key={col.name} className="p-4 text-center font-heading font-600 text-sm"
                    style={{
                      color: col.highlight ? "hsl(246,90%,68%)" : "hsl(var(--text-muted))",
                      background: col.highlight ? "rgba(139,160,255,0.06)" : undefined,
                    }}>
                    {col.name}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {comparison.map((row, i) => (
                <tr key={i} style={{ background: i % 2 === 1 ? "rgba(255,255,255,0.01)" : "transparent", borderTop: "1px solid rgba(255,255,255,0.04)" }}>
                  <td className="p-4 text-sm" style={{ color: "hsl(var(--text-secondary))", fontFamily: "'DM Sans', sans-serif" }}>
                    {row.feature}
                  </td>
                  <td className="p-4 text-center" style={{ background: "rgba(139,160,255,0.04)" }}>
                    <div className="flex justify-center"><CellIcon val={row.omnix} /></div>
                  </td>
                  <td className="p-4 text-center"><div className="flex justify-center"><CellIcon val={row.asana} /></div></td>
                  <td className="p-4 text-center"><div className="flex justify-center"><CellIcon val={row.notion} /></div></td>
                  <td className="p-4 text-center"><div className="flex justify-center"><CellIcon val={row.monday} /></div></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}