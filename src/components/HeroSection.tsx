import { useEffect, useRef, useState } from "react";

const words = ["Work Chaos.", "Tool Sprawl.", "Missed KPIs.", "Silos & Gaps."];

export default function HeroSection() {
  const [typedText, setTypedText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const [showCursor, setShowCursor] = useState(true);
  const [subIndex, setSubIndex] = useState(0);
  const [subVisible, setSubVisible] = useState(true);
  const [count, setCount] = useState(0);

  const sublines = [
    "OmniX unifies tasks, KPIs, files & team into one powerful platform.",
    "Built for teams that move fast and need everything in sync.",
    "From your first task to your biggest milestone — all in one place.",
  ];

  const stats = [
    { val: "3–4×", label: "Fewer Tools", color: "hsl(38,95%,60%)" },
    { val: "100%", label: "Remote-Ready", color: "hsl(183,100%,56%)" },
    { val: "Real-Time", label: "KPI Sync", color: "hsl(246,90%,68%)" },
    { val: "1 Platform", label: "All Teams", color: "hsl(183,100%,56%)" },
  ];

  // Typewriter + delete loop
  useEffect(() => {
    const current = words[wordIndex];
    let timeout: ReturnType<typeof setTimeout>;
    if (!deleting && typedText.length < current.length) {
      timeout = setTimeout(() => setTypedText(current.slice(0, typedText.length + 1)), 70);
    } else if (!deleting && typedText.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), 1800);
    } else if (deleting && typedText.length > 0) {
      timeout = setTimeout(() => setTypedText(typedText.slice(0, -1)), 45);
    } else if (deleting && typedText.length === 0) {
      setDeleting(false);
      setWordIndex((p) => (p + 1) % words.length);
    }
    return () => clearTimeout(timeout);
  }, [typedText, deleting, wordIndex]);

  // Subline rotation
  useEffect(() => {
    const iv = setInterval(() => {
      setSubVisible(false);
      setTimeout(() => {
        setSubIndex((p) => (p + 1) % sublines.length);
        setSubVisible(true);
      }, 350);
    }, 3200);
    return () => clearInterval(iv);
  }, []);

  // Count-up
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.1 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section className="relative min-h-screen flex items-center section-void overflow-hidden pt-16">
      {/* Grid */}
      <div className="grid-overlay opacity-60" />

      {/* Glow orbs */}
      <div className="glow-orb" style={{ width: 600, height: 600, top: "-10%", left: "-5%", background: "hsla(246,72%,48%,0.12)" }} />
      <div className="glow-orb" style={{ width: 400, height: 400, top: "30%", right: "-10%", background: "hsla(183,100%,56%,0.08)" }} />

      {/* Horizontal line accents */}
      <div className="absolute top-1/3 left-0 right-0 h-px" style={{ background: "linear-gradient(90deg, transparent, rgba(139,160,255,0.06), transparent)" }} />

      <div className="container mx-auto px-6 lg:px-12 flex flex-col lg:flex-row items-center gap-16 relative z-10 py-12">
        {/* LEFT */}
        <div className="flex-1 lg:max-w-[54%] space-y-8">

          {/* Badge */}
          <div className="pill-badge w-fit">
            <span className="dot" />
            Beta — Limited Access Open
          </div>

          {/* Headline */}
          <div>
            <p
              className="mono text-xs mb-3 tracking-widest"
              style={{ color: "hsl(var(--text-ghost))", letterSpacing: "0.15em" }}
            >
              01 / STOP MANAGING
            </p>
            <h1 className="font-heading font-800" style={{ fontSize: "clamp(44px,7vw,84px)", lineHeight: 1.0, letterSpacing: "-0.04em" }}>
              <span style={{ color: "hsl(var(--text-primary))" }}>Stop Managing</span>
              <br />
              <span className="gradient-text">{typedText}</span>
              <span className="typewriter-cursor" />
            </h1>
          </div>

          {/* Subline */}
          <p
            className="text-lg leading-relaxed max-w-lg"
            style={{
              color: "hsl(var(--text-secondary))",
              opacity: subVisible ? 1 : 0,
              transform: subVisible ? "translateY(0)" : "translateY(8px)",
              transition: "opacity 0.35s ease, transform 0.35s ease",
            }}
          >
            {sublines[subIndex]}
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-3">
            <button className="btn-gradient btn-magnetic flex items-center gap-2">
              Get Early Access
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </button>
            <button className="btn-ghost flex items-center gap-2">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><polygon points="5,3 19,12 5,21"/></svg>
              Watch Demo
            </button>
          </div>

          {/* Stats */}
          <div ref={ref} className="pt-2">
            <div
              className="grid grid-cols-2 sm:grid-cols-4 gap-px rounded-xl overflow-hidden"
              style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.06)" }}
            >
              {stats.map((s, i) => (
                <div key={i} className="py-4 px-4 text-center" style={{ background: "hsl(var(--bg-surface))" }}>
                  <div className="font-heading font-700 text-xl" style={{ color: s.color }}>
                    {visible ? s.val : "—"}
                  </div>
                  <div className="text-xs mt-1" style={{ color: "hsl(var(--text-ghost))", fontFamily: "'DM Mono', monospace", letterSpacing: "0.04em" }}>
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Social proof */}
          <div className="flex items-center gap-3 pt-1">
            <div className="flex -space-x-2">
              {["#6B5CE7","#4ECDC4","#FFD93D","#FF6B6B"].map((c, i) => (
                <div key={i} className="w-8 h-8 rounded-full border-2 flex items-center justify-center text-xs font-bold"
                  style={{ background: c, borderColor: "hsl(var(--bg-void))", color: "#fff" }}>
                  {["R","A","K","S"][i]}
                </div>
              ))}
            </div>
            <p className="text-sm" style={{ color: "hsl(var(--text-muted))" }}>
              Trusted by <span style={{ color: "hsl(var(--text-primary))" }}>50+ teams</span> in early access
            </p>
          </div>
        </div>

        {/* RIGHT — Dashboard mockup */}
        <div className="flex-1 lg:max-w-[46%] relative device-float">
          {/* Glow behind mockup */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div style={{ width: 320, height: 320, borderRadius: "50%", background: "radial-gradient(circle, hsla(246,72%,48%,0.22), transparent 70%)", filter: "blur(40px)" }} />
          </div>

          {/* Browser chrome mockup */}
          <div
            className="relative w-full rounded-2xl overflow-hidden"
            style={{ border: "1px solid rgba(139,160,255,0.15)", boxShadow: "0 40px 120px rgba(0,0,0,0.6), 0 0 0 1px rgba(139,160,255,0.06)" }}
          >
            {/* Browser top bar */}
            <div className="px-4 py-3 flex items-center gap-3" style={{ background: "hsl(224,24%,10%)", borderBottom: "1px solid rgba(255,255,255,0.04)" }}>
              <div className="flex gap-1.5">
                {["#ff5f57","#febc2e","#28c840"].map(c => <div key={c} className="w-3 h-3 rounded-full" style={{ background: c }} />)}
              </div>
              <div className="flex-1 mx-4 rounded-md flex items-center px-3 py-1" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.06)" }}>
                <span className="mono text-xs" style={{ color: "hsl(var(--text-ghost))" }}>omnix.app/dashboard</span>
              </div>
            </div>

            {/* App layout */}
            <div className="flex" style={{ background: "hsl(224,22%,9%)", minHeight: 360 }}>
              {/* Sidebar */}
              <div className="w-14 flex flex-col items-center py-4 gap-4" style={{ background: "hsl(224,24%,7%)", borderRight: "1px solid rgba(255,255,255,0.04)" }}>
                {["M","T","K","F","C"].map((icon, i) => (
                  <div key={i}
                    className="w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold"
                    style={{
                      background: i === 0 ? "hsl(246,72%,48%)" : "rgba(255,255,255,0.04)",
                      color: i === 0 ? "#fff" : "hsl(var(--text-ghost))",
                      fontFamily: "'DM Mono', monospace"
                    }}>
                    {icon}
                  </div>
                ))}
              </div>

              {/* Content area */}
              <div className="flex-1 p-5 space-y-4">
                {/* Header row */}
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-heading text-sm font-600" style={{ color: "hsl(var(--text-primary))" }}>Sprint Board</div>
                    <div className="mono text-[10px]" style={{ color: "hsl(var(--text-ghost))" }}>October 2025</div>
                  </div>
                  <div className="flex gap-2">
                    {["To Do","In Progress","Done"].map((s, i) => (
                      <div key={i} className="px-2 py-1 rounded text-[10px] mono"
                        style={{ background: ["rgba(139,160,255,0.1)","rgba(251,191,36,0.1)","rgba(52,211,153,0.1)"][i], color: ["hsl(246,90%,68%)","hsl(38,95%,60%)","hsl(160,60%,55%)"][i], border: `1px solid ${["rgba(139,160,255,0.2)","rgba(251,191,36,0.2)","rgba(52,211,153,0.2)"][i]}` }}>
                        {s}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Task cards */}
                {[
                  { title: "Design System Overhaul", user: "R", tag: "In Progress", tagC: "hsl(38,95%,60%)", due: "Oct 14", priority: "hsl(var(--electric-400))" },
                  { title: "API v2 Integration", user: "A", tag: "Done", tagC: "hsl(160,60%,55%)", due: "Oct 12", priority: "hsl(160,60%,55%)" },
                  { title: "Q4 Investor Deck", user: "K", tag: "To Do", tagC: "hsl(246,90%,68%)", due: "Oct 18", priority: "hsl(38,95%,60%)" },
                ].map((t, i) => (
                  <div key={i} className="rounded-lg p-3 flex items-center gap-3"
                    style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.05)" }}>
                    <div className="w-1 h-8 rounded-full flex-shrink-0" style={{ background: t.priority }} />
                    <div className="w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold"
                      style={{ background: ["hsl(246,72%,48%)","hsl(160,60%,39%)","hsl(38,80%,50%)"][i], color: "#fff" }}>
                      {t.user}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-xs font-500 truncate" style={{ color: "hsl(var(--text-primary))", fontFamily: "'DM Sans',sans-serif" }}>{t.title}</div>
                      <div className="mono text-[10px]" style={{ color: "hsl(var(--text-ghost))" }}>Due {t.due}</div>
                    </div>
                    <div className="px-2 py-0.5 rounded text-[10px] mono flex-shrink-0"
                      style={{ color: t.tagC, background: t.tagC + "18", border: `1px solid ${t.tagC}30` }}>
                      {t.tag}
                    </div>
                  </div>
                ))}

                {/* KPI mini chart */}
                <div className="rounded-lg p-3" style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.04)" }}>
                  <div className="flex items-center justify-between mb-2">
                    <span className="mono text-[10px]" style={{ color: "hsl(var(--text-ghost))" }}>Sprint KPI Score</span>
                    <span className="font-heading text-sm font-700" style={{ color: "hsl(183,100%,56%)" }}>87%</span>
                  </div>
                  <div className="h-1.5 rounded-full" style={{ background: "rgba(255,255,255,0.06)" }}>
                    <div className="h-1.5 rounded-full" style={{ width: "87%", background: "linear-gradient(90deg, hsl(246,90%,68%), hsl(183,100%,56%))" }} />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Floating notification */}
          <div
            className="absolute -bottom-4 -left-4 flex items-center gap-3 rounded-xl px-4 py-3"
            style={{ background: "hsl(224,22%,11%)", border: "1px solid rgba(52,211,153,0.25)", boxShadow: "0 8px 32px rgba(0,0,0,0.4)" }}
          >
            <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: "rgba(52,211,153,0.12)" }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M20 6L9 17l-5-5" stroke="#34d399" strokeWidth="2.5" strokeLinecap="round"/></svg>
            </div>
            <div>
              <div className="text-xs font-500" style={{ color: "hsl(var(--text-primary))", fontFamily: "'DM Sans',sans-serif" }}>Task completed</div>
              <div className="mono text-[10px]" style={{ color: "hsl(var(--text-ghost))" }}>Riya · 2 min ago</div>
            </div>
          </div>

          {/* Floating KPI */}
          <div
            className="absolute -top-4 -right-4 rounded-xl p-4"
            style={{ background: "hsl(224,22%,11%)", border: "1px solid rgba(139,160,255,0.2)", boxShadow: "0 8px 32px rgba(0,0,0,0.4)" }}
          >
            <div className="mono text-[10px] mb-1" style={{ color: "hsl(var(--text-ghost))" }}>Team Velocity</div>
            <div className="font-heading font-700 text-2xl" style={{ color: "hsl(246,90%,68%)" }}>↑ 34%</div>
            <div className="flex gap-1 mt-2">
              {[40,60,48,72,56,80,87].map((h, i) => (
                <div key={i} className="w-3 rounded-sm" style={{ height: h * 0.4, background: i === 6 ? "hsl(246,90%,68%)" : "rgba(139,160,255,0.2)" }} />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Marquee strip */}
      <div className="marquee-wrap absolute bottom-0 left-0 right-0 overflow-hidden py-3"
        style={{ borderTop: "1px solid rgba(255,255,255,0.04)", background: "hsl(224,22%,7%)" }}>
        <div className="marquee-track flex whitespace-nowrap">
          {Array.from({ length: 2 }).map((_, j) => (
            <span key={j} className="flex items-center">
              {["Project Management","KPI Tracking","Team Collaboration","File Management","Smart Calendar","Role-Based Access","Mobile & Web","Real-Time Sync"].map((t, i) => (
                <span key={i} className="flex items-center mono text-xs mx-6" style={{ color: "hsl(var(--text-ghost))", letterSpacing: "0.06em" }}>
                  {t}
                  <span className="ml-6" style={{ color: "hsl(var(--electric-800))" }}>◆</span>
                </span>
              ))}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}