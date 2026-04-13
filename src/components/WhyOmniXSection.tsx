const statBlocks = [
  {
    icon: <svg width="32" height="32" viewBox="0 0 32 32" fill="none"><rect x="4" y="4" width="11" height="11" rx="2" fill="#7B2FBE" opacity="0.6" /><rect x="8" y="8" width="11" height="11" rx="2" fill="#9333EA" opacity="0.6" /><path d="M22 14l3 3m-3 0l3-3" stroke="#C026D3" strokeWidth="1.5" /></svg>,
    value: "3-4×", label: "Fewer Tools",
    desc: "Replaces project mgmt, files, KPI, and comms tools",
    valueColor: "#E11D7A",
  },
  {
    icon: <svg width="32" height="32" viewBox="0 0 32 32" fill="none"><circle cx="12" cy="16" r="5" fill="none" stroke="#A855F7" strokeWidth="1.5" /><circle cx="20" cy="16" r="5" fill="none" stroke="#C084FC" strokeWidth="1.5" /><path d="M15 13.5v5" stroke="#DDB6FF" strokeWidth="1" /></svg>,
    value: "Native", label: "Goal Linking",
    desc: "Every task tied directly to your business objectives",
    valueColor: "gradient",
  },
  {
    icon: <svg width="32" height="32" viewBox="0 0 32 32" fill="none"><circle cx="16" cy="16" r="10" fill="none" stroke="#A855F7" strokeWidth="1.5" /><circle cx="16" cy="16" r="4" fill="#7B2FBE" /><path d="M22 12l2-2" stroke="#10B981" strokeWidth="2" /></svg>,
    value: "1 Dashboard", label: "Total Clarity",
    desc: "The right information for every role, always visible",
    valueColor: "hsl(270 95% 75%)",
  },
  {
    icon: <svg width="32" height="32" viewBox="0 0 32 32" fill="none"><polygon points="16,4 22,10 22,18 16,24 10,18 10,10" fill="none" stroke="#A855F7" strokeWidth="1.2" /><polygon points="16,8 20,12 20,16 16,20 12,16 12,12" fill="#7B2FBE" opacity="0.3" /></svg>,
    value: "5 → 5,000", label: "Seamless Scale",
    desc: "Grows from solo teams to entire enterprises",
    valueColor: "gradient",
  },
];

const comparison = [
  { feature: "Unified Task + KPI", omnix: true, asana: false, notion: "partial", monday: false },
  { feature: "Goal-Linked Tasks", omnix: true, asana: "partial", notion: false, monday: "partial" },
  { feature: "Native Mobile App", omnix: true, asana: true, notion: "partial", monday: true },
  { feature: "File Hub Built-in", omnix: true, asana: false, notion: true, monday: false },
  { feature: "Role-Based Access", omnix: true, asana: "partial", notion: false, monday: true },
];

const CellIcon = ({ val }: { val: boolean | string }) => {
  if (val === true) return <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M20 6L9 17l-5-5" stroke="#10B981" strokeWidth="2.5" strokeLinecap="round" /></svg>;
  if (val === false) return <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M18 6L6 18M6 6l12 12" stroke="rgba(239,68,68,0.7)" strokeWidth="2" strokeLinecap="round" /></svg>;
  return <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M5 12h14" stroke="rgba(245,158,11,0.7)" strokeWidth="2.5" strokeLinecap="round" /></svg>;
};

export default function WhyOmniXSection() {
  return (
    <section id="why-omnix" className="relative py-24 section-deep overflow-hidden">
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
        <div className="w-[800px] h-[800px] rounded-full" style={{ background: "radial-gradient(circle, rgba(123,47,190,0.10), transparent 60%)" }} />
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="text-center mb-16 reveal">
          <span className="section-label">Why OmniX</span>
          <h2 className="font-heading font-bold text-[32px] md:text-[52px] leading-tight mt-4" style={{ color: "hsl(270 60% 97%)" }}>
            Not Just Another Tool. <span className="gradient-text">A Competitive Advantage.</span>
          </h2>
          <p className="text-lg mt-4 max-w-lg mx-auto" style={{ color: "hsl(260 23% 55%)" }}>
            What truly sets OmniX apart is how its features combine to deliver measurable impact.
          </p>
        </div>

        {/* Stat blocks */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {statBlocks.map((s, i) => (
            <div key={i} className="text-center p-6 rounded-2xl transition-transform duration-300 hover:scale-105 reveal" style={{ background: "rgba(22,13,42,0.5)", border: "1px solid rgba(139,92,246,0.12)" }}>
              <div className="flex justify-center mb-3">{s.icon}</div>
              {s.valueColor === "gradient" ? (
                <div className="gradient-text font-heading font-bold text-3xl md:text-[48px]">{s.value}</div>
              ) : (
                <div className="font-heading font-bold text-3xl md:text-[48px]" style={{ color: s.valueColor }}>{s.value}</div>
              )}
              <div className="font-heading font-semibold text-sm mt-1" style={{ color: "hsl(270 60% 97%)" }}>{s.label}</div>
              <div className="text-xs mt-2" style={{ color: "hsl(260 23% 55%)" }}>{s.desc}</div>
            </div>
          ))}
        </div>

        {/* Comparison table */}
        <div className="rounded-2xl overflow-hidden reveal" style={{ border: "1px solid rgba(139,92,246,0.22)" }}>
          <table className="w-full text-sm">
            <thead>
              <tr style={{ background: "hsl(var(--bg-surface-2))" }}>
                <th className="text-left p-4 font-heading" style={{ color: "hsl(270 60% 97%)" }}>Feature</th>
                <th className="p-4 font-heading" style={{ color: "hsl(270 60% 97%)", background: "rgba(123,47,190,0.12)" }}>OmniX</th>
                <th className="p-4 font-heading" style={{ color: "hsl(260 23% 55%)" }}>Asana</th>
                <th className="p-4 font-heading" style={{ color: "hsl(260 23% 55%)" }}>Notion</th>
                <th className="p-4 font-heading" style={{ color: "hsl(260 23% 55%)" }}>Monday</th>
              </tr>
            </thead>
            <tbody>
              {comparison.map((row, i) => (
                <tr key={i} style={{ background: i % 2 === 1 ? "rgba(22,13,42,0.4)" : "transparent" }}>
                  <td className="p-4" style={{ color: "hsl(258 88% 85%)" }}>{row.feature}</td>
                  <td className="p-4 text-center" style={{ background: "rgba(123,47,190,0.08)" }}><div className="flex justify-center"><CellIcon val={row.omnix} /></div></td>
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
