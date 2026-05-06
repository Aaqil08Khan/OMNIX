import lackofClarity from "@/assets/images/lackofclarity.avif";
import missedDeadline from "@/assets/images/misseddeadlnes.avif";
import scatteredInfo from "@/assets/images/scatteredinformation.avif";
import wastedTime from "@/assets/images/wastedtime.avif";
const problems = [
  {
    num: "01",
    title: "Scattered Information",
    desc: "Your data lives across five different apps. Nothing connects. Context is lost daily and team knowledge evaporates into email threads.",
    icon: "◈",
    color: "hsl(var(--ember))",
    image: scatteredInfo,
  },
  {
    num: "02",
    title: "Lack of Clarity",
    desc: "No one can see the big picture. Reports are manual. Goals feel completely disconnected from daily work and deadlines.",
    icon: "◇",
    color: "hsl(var(--p400))",
    image: lackofClarity,
  },
  {
    num: "03",
    title: "Missed Deadlines",
    desc: "Tasks slip through the cracks. Reminders come too late or not at all. Projects run over time and over budget.",
    icon: "⬡",
    color: "hsl(0,75%,60%)",
    image: missedDeadline,
  },
  {
    num: "04",
    title: "Wasted Time",
    desc: "Hours spent switching between tools, syncing data, and updating spreadsheets manually instead of doing real work.",
    icon: "◉",
    color: "hsl(var(--cyan))",
    image: wastedTime,
  },
];

export default function ProblemSection() {
  return (
    <section className="relative py-28 bg-void overflow-hidden">
      <div className="grid-bg opacity-50"/>
      <div className="glow-blob" style={{ width: 600, height: 600, top: "10%", right: "-15%", background: "hsla(0,65%,38%,0.07)" }}/>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        {/* Header */}
        <div className="max-w-2xl mx-auto text-center mb-20 reveal">
          <span className="section-tag">The Challenge</span>
          <h2 className="font-display mt-2" style={{ fontSize: "clamp(32px,5vw,58px)", lineHeight: 1.04, letterSpacing: "-0.03em" }}>
            Modern Teams Are{" "}
            <span className="grad-warm">Drowning</span>
            <br />In Tool Overload
          </h2>
          <p className="text-lg mt-5 leading-relaxed" style={{ color: "hsl(var(--t-muted))", lineHeight: 1.72 }}>
            Work is scattered. Deadlines are missed. No single person has full context — and the tools meant to help are making it worse.
          </p>
        </div>

        {/* Problem cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {problems.map((p, i) => (
            <div key={i}
              className="feat-card reveal group"
              style={{ padding: 0, transitionDelay: `${i * 90}ms`, overflow: "hidden" }}
            >
              {/* Image strip */}
              <div className="relative h-36 overflow-hidden">
                <img
                  src={p.image}
                  alt={p.title}
                  className="w-full h-full object-cover"
                  style={{
                    filter: "brightness(0.3) saturate(0.6)",
                    transition: "filter 0.4s ease, transform 0.4s ease",
                  }}
                  onMouseEnter={e => {
                    (e.target as HTMLImageElement).style.filter = "brightness(0.4) saturate(0.7)";
                    (e.target as HTMLImageElement).style.transform = "scale(1.04)";
                  }}
                  onMouseLeave={e => {
                    (e.target as HTMLImageElement).style.filter = "brightness(0.3) saturate(0.6)";
                    (e.target as HTMLImageElement).style.transform = "scale(1)";
                  }}
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0" style={{
                  background: `linear-gradient(135deg, ${p.color}22 0%, transparent 60%), linear-gradient(180deg, transparent 40%, hsl(var(--surface)) 100%)`
                }}/>
                {/* Number */}
                <div className="absolute top-4 left-5 mono text-[11px]" style={{ color: "hsl(var(--t-ghost))", letterSpacing: "0.1em" }}>
                  {p.num}
                </div>
                {/* Icon */}
                <div className="absolute top-4 right-5 text-xl" style={{ color: p.color }}>{p.icon}</div>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Accent line */}
                <div className="mb-3" style={{ width: 32, height: 2, background: p.color, borderRadius: 1 }}/>
                <h3 className="font-display font-600 text-lg mb-3" style={{ color: "hsl(var(--t-primary))" }}>
                  {p.title}
                </h3>
                <p className="text-[14px] leading-relaxed" style={{ color: "hsl(var(--t-muted))", lineHeight: 1.72 }}>
                  {p.desc}
                </p>
              </div>

              {/* Hover glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
                style={{ background: `radial-gradient(circle at top left, ${p.color}08, transparent 55%)` }}/>
            </div>
          ))}
        </div>

        {/* Bottom callout */}
        <div className="mt-16 text-center reveal">
          <div className="inline-flex items-center gap-4 px-8 py-4 rounded-2xl"
            style={{ background: "hsl(var(--surface))", border: "1px solid rgba(255,255,255,0.06)" }}>
            <div style={{ width: 8, height: 8, borderRadius: "50%", background: "hsl(var(--ember))", boxShadow: "0 0 10px hsl(var(--ember))" }}/>
            <p className="text-sm" style={{ color: "hsl(var(--t-secondary))" }}>
              The average team uses <span style={{ color: "hsl(var(--t-primary))", fontWeight: 600 }}>6–8 different tools</span> to manage work. Vaize replaces them all.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}