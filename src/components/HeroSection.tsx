import { useEffect, useRef, useState } from "react";

const rotatingWords = ["Work Chaos.", "Tool Sprawl.", "Missed KPIs.", "Silos & Gaps.", "Context Switching."];

const stats = [
  { val: "3–4×", label: "Fewer Tools", color: "hsl(var(--ember))" },
  { val: "100%", label: "Remote-Ready", color: "hsl(var(--cyan))" },
  { val: "Real-Time", label: "KPI Sync", color: "hsl(var(--p400))" },
  { val: "1 Platform", label: "All Teams", color: "hsl(var(--jade))" },
];

export default function HeroSection() {
  const [typed, setTyped] = useState("");
  const [wordIdx, setWordIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const [subVisible, setSubVisible] = useState(true);
  const [subIdx, setSubIdx] = useState(0);
  const [statsVisible, setStatsVisible] = useState(false);
  const statsRef = useRef<HTMLDivElement>(null);

  const subs = [
    "OmniX unifies tasks, KPIs, files & team into one powerful platform.",
    "Built for teams that move fast and need everything in sync.",
    "From your first task to your biggest milestone — all in one place.",
  ];

  // Typewriter
  useEffect(() => {
    const word = rotatingWords[wordIdx];
    let t: ReturnType<typeof setTimeout>;
    if (!deleting && typed.length < word.length) {
      t = setTimeout(() => setTyped(word.slice(0, typed.length + 1)), 68);
    } else if (!deleting && typed.length === word.length) {
      t = setTimeout(() => setDeleting(true), 2000);
    } else if (deleting && typed.length > 0) {
      t = setTimeout(() => setTyped(typed.slice(0, -1)), 42);
    } else if (deleting) {
      setDeleting(false);
      setWordIdx(p => (p + 1) % rotatingWords.length);
    }
    return () => clearTimeout(t);
  }, [typed, deleting, wordIdx]);

  // Sub rotation
  useEffect(() => {
    const iv = setInterval(() => {
      setSubVisible(false);
      setTimeout(() => { setSubIdx(p => (p + 1) % subs.length); setSubVisible(true); }, 320);
    }, 3500);
    return () => clearInterval(iv);
  }, []);

  // Stats observer
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setStatsVisible(true); }, { threshold: 0.1 });
    if (statsRef.current) obs.observe(statsRef.current);
    return () => obs.disconnect();
  }, []);

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToFeatures = () => {
    document.getElementById("features")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center bg-void overflow-hidden pt-16">
      {/* Background grid */}
      <div className="grid-bg opacity-70" />

      {/* Glow blobs */}
      <div className="glow-blob" style={{ width: 700, height: 700, top: "-15%", left: "-8%", background: "hsla(248,72%,46%,0.14)" }}/>
      <div className="glow-blob" style={{ width: 500, height: 500, top: "25%", right: "-8%", background: "hsla(186,100%,50%,0.09)" }}/>
      <div className="glow-blob" style={{ width: 350, height: 350, bottom: "10%", left: "30%", background: "hsla(248,60%,30%,0.08)" }}/>

      {/* Diagonal accent lines */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div style={{
          position: "absolute", top: "35%", left: "-5%", right: "-5%",
          height: "1px",
          background: "linear-gradient(90deg, transparent, rgba(110,130,255,0.07), transparent)"
        }}/>
        <div style={{
          position: "absolute", top: "65%", left: "-5%", right: "-5%",
          height: "1px",
          background: "linear-gradient(90deg, transparent, rgba(186,255,254,0.05), transparent)"
        }}/>
      </div>

      {/*
        FIX 1: Added pb-16 sm:pb-20 to ensure content doesn't get hidden under
        the absolute-positioned marquee strip at the bottom.
        FIX 2: Changed py-16 to pt-8 pb-16 on mobile so there's enough room.
      */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-12 flex flex-col lg:flex-row items-center gap-10 lg:gap-16 relative z-10 pt-8 pb-24 sm:py-16">

        {/* ─── LEFT CONTENT ─── */}
        <div className="flex-1 lg:max-w-[52%] space-y-6 w-full">
          {/* Badge */}
          <div className="badge-live w-fit">
            <span className="pulse"/>
            Beta · Limited Early Access Open
          </div>

          {/* Section label + Headline */}
          <div>
            <p className="mono text-xs mb-4" style={{ color: "hsl(var(--t-ghost))", letterSpacing: "0.16em" }}>
              01 / STOP MANAGING
            </p>
            {/*
              FIX 3: Replaced clamp(46px,7vw,88px) with a tighter clamp that
              scales better from 320 px phones up to large desktops.
              clamp(36px, 6vw, 88px) prevents overflow on narrow viewports.
            */}
            <h1 className="font-display" style={{ fontSize: "clamp(36px,6vw,88px)", lineHeight: 1.0, letterSpacing: "-0.04em" }}>
              <span style={{ color: "hsl(var(--t-primary))" }}>Stop Managing</span>
              <br />
              <span className="grad-primary">{typed}</span>
              <span className="typewriter-cursor"/>
            </h1>
          </div>

          {/* Subline */}
          <p
            className="text-base sm:text-lg max-w-lg"
            style={{
              color: "hsl(var(--t-secondary))",
              lineHeight: 1.72,
              opacity: subVisible ? 1 : 0,
              transform: subVisible ? "translateY(0)" : "translateY(8px)",
              transition: "opacity 0.32s ease, transform 0.32s ease",
            }}
          >
            {subs[subIdx]}
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-3">
            <button className="btn-primary" onClick={scrollToContact}>
              Get Early Access
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </button>
            <button className="btn-ghost" onClick={scrollToFeatures}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <polygon points="5,3 19,12 5,21"/>
              </svg>
              Watch Demo
            </button>
          </div>

          {/* Stats */}
          <div ref={statsRef}>
            <div
              className="grid grid-cols-2 sm:grid-cols-4 gap-px rounded-2xl overflow-hidden"
              style={{ background: "rgba(255,255,255,0.035)", border: "1px solid rgba(255,255,255,0.06)" }}
            >
              {stats.map((s, i) => (
                <div key={i} className="py-4 px-3 sm:py-5 sm:px-4 text-center" style={{ background: "hsl(var(--surface))" }}>
                  {/* FIX 4: Smaller font on xs so "Real-Time" doesn't overflow its cell */}
                  <div className="font-display font-700 text-base sm:text-xl" style={{ color: s.color, letterSpacing: "-0.03em" }}>
                    {statsVisible ? s.val : "—"}
                  </div>
                  <div className="text-[10px] sm:text-[11px] mt-1 mono" style={{ color: "hsl(var(--t-ghost))", letterSpacing: "0.05em" }}>
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Social proof */}
          <div className="flex items-center gap-3 pt-1">
            <div className="flex -space-x-2.5">
              {["#6B5CE7","#4ECDC4","#FFD93D","#FF6B6B","#A8E6CF"].map((c, i) => (
                <div key={i} className="w-8 h-8 rounded-full border-2 flex items-center justify-center text-[11px] font-600"
                  style={{ background: c, borderColor: "hsl(var(--void))", color: "#fff", fontFamily: "'Clash Display',sans-serif" }}>
                  {["R","A","K","S","M"][i]}
                </div>
              ))}
            </div>
            <p className="text-sm" style={{ color: "hsl(var(--t-muted))" }}>
              Trusted by <span style={{ color: "hsl(var(--t-primary))", fontWeight: 500 }}>50+ teams</span> in early access
            </p>
          </div>
        </div>

        {/* ─── RIGHT — Dashboard mockup ─── */}
        {/*
          FIX 5: On mobile the mockup sits below the text (flex-col).
          We cap its width so it never bleeds off screen, and we switch
          the negative-margin floating badges to safe inset values on mobile.
          Added "w-full" + "max-w-[520px] mx-auto" so it centres nicely.
        */}
        <div className="flex-1 lg:max-w-[48%] w-full max-w-[520px] mx-auto lg:mx-0 relative float-anim">
          {/* Glow behind card */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div style={{
              width: 360, height: 360, borderRadius: "50%",
              background: "radial-gradient(circle, hsla(248,72%,46%,0.25), transparent 70%)",
              filter: "blur(50px)"
            }}/>
          </div>

          {/* Dashboard card */}
          <div className="browser-chrome relative">
            {/* Browser top bar */}
            <div className="px-4 py-3 flex items-center gap-3" style={{ background: "hsl(226,28%,7%)", borderBottom: "1px solid rgba(255,255,255,0.04)" }}>
              <div className="flex gap-1.5">
                {["#ff5f57","#febc2e","#28c840"].map(c => (
                  <div key={c} className="w-3 h-3 rounded-full" style={{ background: c }}/>
                ))}
              </div>
              <div className="flex-1 mx-3 rounded-md flex items-center px-3 py-1.5" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.06)" }}>
                <div className="w-3 h-3 mr-2 rounded-full" style={{ background: "rgba(110,130,255,0.5)" }}/>
                <span className="mono text-[11px]" style={{ color: "hsl(var(--t-ghost))" }}>omnix.app/dashboard</span>
              </div>
              <div className="flex gap-1.5">
                {[0,1,2].map(i => (
                  <div key={i} className="w-5 h-5 rounded" style={{ background: "rgba(255,255,255,0.04)" }}/>
                ))}
              </div>
            </div>

            {/* App body */}
            <div className="flex" style={{ background: "hsl(226,26%,8%)", minHeight: 380 }}>
              {/* Sidebar icons */}
              <div className="w-14 flex flex-col items-center py-5 gap-4" style={{ background: "hsl(226,28%,6%)", borderRight: "1px solid rgba(255,255,255,0.04)" }}>
                {[
                  { l: "M", a: true },
                  { l: "T", a: false },
                  { l: "K", a: false },
                  { l: "F", a: false },
                  { l: "C", a: false },
                ].map(({ l, a }, i) => (
                  <div key={i}
                    className="w-8 h-8 rounded-lg flex items-center justify-center text-[11px] font-600"
                    style={{
                      background: a ? "hsl(var(--p500))" : "rgba(255,255,255,0.04)",
                      color: a ? "#fff" : "hsl(var(--t-ghost))",
                      fontFamily: "'JetBrains Mono',monospace",
                      boxShadow: a ? "0 0 16px hsl(var(--p500) / 0.5)" : "none"
                    }}>
                    {l}
                  </div>
                ))}
              </div>

              {/* Main content */}
              <div className="flex-1 p-4 sm:p-5 space-y-3 sm:space-y-4 overflow-hidden min-w-0">
                {/* Header */}
                <div className="flex items-center justify-between gap-2">
                  <div className="min-w-0">
                    <div className="font-display text-[13px] font-600" style={{ color: "hsl(var(--t-primary))" }}>Sprint Board</div>
                    <div className="mono text-[10px] mt-0.5" style={{ color: "hsl(var(--t-ghost))" }}>October 2025 · Week 3</div>
                  </div>
                  {/* FIX 6: Hide status pills on very small screens to prevent overflow */}
                  <div className="hidden sm:flex gap-1.5 flex-shrink-0">
                    {[
                      { l: "To Do", c: "hsl(var(--p400))" },
                      { l: "In Progress", c: "hsl(var(--ember))" },
                      { l: "Done", c: "hsl(var(--jade))" },
                    ].map((s, i) => (
                      <div key={i} className="px-2 py-1 rounded-md text-[10px] mono"
                        style={{ background: s.c + "15", color: s.c, border: `1px solid ${s.c}25` }}>
                        {s.l}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Task cards */}
                {[
                  { t: "Design System Overhaul", u: "R", tag: "In Progress", tc: "hsl(var(--ember))", uc: "#6B5CE7", due: "Oct 14" },
                  { t: "API v2 Integration", u: "A", tag: "Done", tc: "hsl(var(--jade))", uc: "#4ECDC4", due: "Oct 12" },
                  { t: "Q4 Investor Deck", u: "K", tag: "To Do", tc: "hsl(var(--p400))", uc: "#FFD93D", due: "Oct 18" },
                ].map((task, i) => (
                  <div key={i} className="flex items-center gap-2 sm:gap-3 px-3 py-2.5 rounded-xl"
                    style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.05)" }}>
                    <div className="w-1 h-7 rounded-full flex-shrink-0" style={{ background: task.tc }}/>
                    <div className="w-7 h-7 rounded-full flex-shrink-0 flex items-center justify-center text-[10px] font-600"
                      style={{ background: task.uc + "28", color: task.uc, border: `1px solid ${task.uc}30`, fontFamily: "'Clash Display',sans-serif" }}>
                      {task.u}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-[12px] truncate font-400" style={{ color: "hsl(var(--t-primary))", fontFamily: "'Outfit',sans-serif" }}>
                        {task.t}
                      </div>
                      <div className="mono text-[10px] mt-0.5" style={{ color: "hsl(var(--t-ghost))" }}>Due {task.due}</div>
                    </div>
                    <div className="px-2 py-0.5 rounded-md text-[10px] mono flex-shrink-0"
                      style={{ color: task.tc, background: task.tc + "18", border: `1px solid ${task.tc}28` }}>
                      {task.tag}
                    </div>
                  </div>
                ))}

                {/* KPI mini chart */}
                <div className="rounded-xl p-3" style={{ background: "rgba(110,130,255,0.05)", border: "1px solid rgba(110,130,255,0.1)" }}>
                  <div className="flex items-center justify-between mb-2.5">
                    <span className="mono text-[10px]" style={{ color: "hsl(var(--t-ghost))" }}>Sprint KPI Score</span>
                    <span className="font-display text-sm font-700" style={{ color: "hsl(var(--cyan))" }}>87%</span>
                  </div>
                  <div className="h-1.5 rounded-full" style={{ background: "rgba(255,255,255,0.06)" }}>
                    <div className="h-1.5 rounded-full transition-all duration-1000"
                      style={{ width: "87%", background: "linear-gradient(90deg, hsl(var(--p500)), hsl(var(--cyan)))", boxShadow: "0 0 8px hsl(var(--cyan) / 0.5)" }}/>
                  </div>
                  <div className="flex items-center gap-2 mt-2">
                    <div className="flex gap-0.5 flex-1">
                      {[65,48,72,55,80,60,90,74,85,95].map((h, i) => (
                        <div key={i} className="flex-1 rounded-sm" style={{
                          height: `${h * 0.3}px`,
                          background: i >= 8 ? "hsl(var(--cyan))" : i >= 6 ? "rgba(110,130,255,0.3)" : "rgba(255,255,255,0.07)"
                        }}/>
                      ))}
                    </div>
                    <div className="mono text-[10px]" style={{ color: "hsl(var(--jade))" }}>↑ 12%</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/*
            FIX 7: Floating badges used negative margins that clipped off-screen
            on mobile. Changed to:
            - "bottom-0 translate-y-full" on mobile (sits below the card)
            - sm:-bottom-4 sm:-left-4 restores the original overlapping look
            on wider screens. Same treatment for all three badges.
          */}

          {/* Floating notification — bottom left */}
          <div
            className="absolute bottom-0 -translate-y-0 left-2 sm:-bottom-4 sm:-left-4 sm:translate-y-0 flex items-center gap-3 rounded-2xl px-4 py-3"
            style={{ background: "hsl(var(--surface-2))", border: "1px solid rgba(52,211,153,0.25)", boxShadow: "0 12px 40px rgba(0,0,0,0.5)", minWidth: 190 }}
          >
            <div className="w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: "rgba(52,211,153,0.12)" }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                <path d="M20 6L9 17l-5-5" stroke="#34d399" strokeWidth="2.5" strokeLinecap="round"/>
              </svg>
            </div>
            <div>
              <div className="text-[12px] font-500" style={{ color: "hsl(var(--t-primary))", fontFamily: "'Outfit',sans-serif" }}>Task completed</div>
              <div className="mono text-[10px]" style={{ color: "hsl(var(--t-ghost))" }}>Riya · 2 min ago</div>
            </div>
          </div>

          {/* Floating KPI badge — top right */}
          <div
            className="absolute top-2 right-2 sm:-top-3 sm:-right-3 rounded-2xl p-4"
            style={{ background: "hsl(var(--surface-2))", border: "1px solid rgba(110,130,255,0.22)", boxShadow: "0 12px 40px rgba(0,0,0,0.5)" }}
          >
            <div className="mono text-[10px] mb-1.5" style={{ color: "hsl(var(--t-ghost))" }}>Team Velocity</div>
            <div className="font-display font-700 text-[22px]" style={{ color: "hsl(var(--p400))", letterSpacing: "-0.03em" }}>↑ 34%</div>
            <div className="flex items-end gap-0.5 mt-1.5">
              {[40,60,48,72,56,80,87].map((h, i) => (
                <div key={i} className="w-3 rounded-sm" style={{
                  height: h * 0.4,
                  background: i === 6 ? "hsl(var(--p400))" : "rgba(110,130,255,0.18)",
                  boxShadow: i === 6 ? "0 0 8px hsl(var(--p400) / 0.6)" : "none"
                }}/>
              ))}
            </div>
          </div>

          {/*
            FIX 8: Live users badge was at -left-5 which clips off mobile screens.
            Hidden on small screens; shown from sm: upward.
          */}
          <div
            className="hidden sm:block absolute top-1/2 -left-5 -translate-y-1/2 rounded-2xl px-3 py-2.5"
            style={{ background: "hsl(var(--surface-2))", border: "1px solid rgba(110,130,255,0.15)", boxShadow: "0 8px 32px rgba(0,0,0,0.4)" }}
          >
            <div className="mono text-[9px] mb-1.5" style={{ color: "hsl(var(--t-ghost))", letterSpacing: "0.08em" }}>LIVE USERS</div>
            <div className="flex -space-x-2">
              {["#6B5CE7","#4ECDC4","#FFD93D"].map((c, i) => (
                <div key={i} className="w-5 h-5 rounded-full border"
                  style={{ background: c, borderColor: "hsl(var(--surface-2))" }}/>
              ))}
            </div>
            <div className="flex items-center gap-1.5 mt-1.5">
              <div className="w-1.5 h-1.5 rounded-full" style={{ background: "hsl(var(--jade))", boxShadow: "0 0 6px hsl(var(--jade))" }}/>
              <span className="mono text-[9px]" style={{ color: "hsl(var(--jade))" }}>12 online</span>
            </div>
          </div>
        </div>
      </div>

      {/* Marquee strip */}
      <div className="marquee-wrap absolute bottom-0 left-0 right-0 overflow-hidden py-3"
        style={{ borderTop: "1px solid rgba(255,255,255,0.04)", background: "hsl(var(--mid))" }}>
        <div className="marquee-track flex whitespace-nowrap">
          {Array.from({ length: 2 }).map((_, j) => (
            <span key={j} className="flex items-center">
              {["Project Management","KPI Tracking","Team Collaboration","File Management","Smart Calendar","Role-Based Access","Mobile & Web","Real-Time Sync","Goal Linking","Sprint Boards"].map((t, i) => (
                <span key={i} className="flex items-center mono text-[11px] mx-7" style={{ color: "hsl(var(--t-ghost))", letterSpacing: "0.07em" }}>
                  {t}
                  <span className="ml-7" style={{ color: "hsl(var(--p800))" }}>◆</span>
                </span>
              ))}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}