const features = [
  { title: "Unified Workspace", desc: "All work in one place, zero context switching" },
  { title: "Goal-Linked Tasks", desc: "Every task tied to a real business objective" },
  { title: "Full-Stack Platform", desc: "Web + iOS + Android, always in sync" },
  { title: "Enterprise-Grade", desc: "Role-based access, secure and scalable" },
];

export default function SolutionSection() {
  const scrollToFeatures = () => {
    document.getElementById("features")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="features" className="relative py-28 bg-void overflow-hidden">
      <div className="grid-bg opacity-35"/>
      <div className="glow-blob" style={{ width: 600, height: 600, top: "10%", right: "-5%", background: "hsla(248,72%,46%,0.11)" }}/>
      <div className="glow-blob" style={{ width: 400, height: 400, bottom: "0%", left: "-5%", background: "hsla(186,80%,40%,0.07)" }}/>

      <div className="container mx-auto px-6 lg:px-12 flex flex-col lg:flex-row items-center gap-16 relative z-10">
        {/* LEFT — Phone mockup with real image backdrop */}
        <div className="flex-1 relative float-anim-slow reveal">
          {/* Background glow */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div style={{
              width: 300, height: 300, borderRadius: "50%",
              background: "radial-gradient(circle, hsla(248,72%,46%,0.2), transparent 70%)",
              filter: "blur(40px)"
            }}/>
          </div>

          {/* Real product image background */}
          <div className="relative mx-auto" style={{ maxWidth: 280 }}>
            {/* Background image card */}
            <div className="absolute -inset-8 rounded-3xl overflow-hidden opacity-20">
              <img
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80&auto=format"
                alt="Dashboard background"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Phone frame */}
            <div className="phone-chrome relative">
              {/* Status bar */}
              <div className="px-5 py-3 flex items-center justify-between" style={{ background: "hsl(226,28%,7%)" }}>
                <span className="mono text-[11px]" style={{ color: "hsl(var(--t-ghost))" }}>9:41</span>
                <span className="font-display text-[13px] font-700" style={{ color: "hsl(var(--p400))" }}>OmniX</span>
                <div className="flex items-center gap-1">
                  <div className="w-1.5 h-1.5 rounded-full" style={{ background: "hsl(var(--jade))", boxShadow: "0 0 6px hsl(var(--jade))" }}/>
                  <span className="mono text-[9px]" style={{ color: "hsl(var(--t-ghost))" }}>Live</span>
                </div>
              </div>

              {/* Content */}
              <div className="px-4 py-4 space-y-2.5" style={{ background: "hsl(226,26%,8%)" }}>
                <div className="mono text-[10px] mb-4" style={{ color: "hsl(var(--t-ghost))", letterSpacing: "0.09em" }}>TODAY — 6 TASKS</div>
                {[
                  { t: "Design System Review", d: "Oct 14", s: "In Progress", c: "hsl(var(--ember))" },
                  { t: "API v2 Integration", d: "Oct 12", s: "Done", c: "hsl(var(--jade))" },
                  { t: "Q4 Investor Deck", d: "Oct 18", s: "To Do", c: "hsl(var(--p400))" },
                  { t: "UX Audit Sprint 3", d: "Oct 20", s: "To Do", c: "hsl(var(--p400))" },
                  { t: "Backend Refactor", d: "Oct 16", s: "In Progress", c: "hsl(var(--ember))" },
                ].map((task, i) => (
                  <div key={i} className="flex items-center gap-2 px-3 py-2.5 rounded-xl"
                    style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.055)" }}>
                    <div className="w-1 h-6 rounded-full flex-shrink-0" style={{ background: task.c }}/>
                    <div className="flex-1 min-w-0">
                      <div className="text-[12px] truncate" style={{ color: "hsl(var(--t-secondary))", fontFamily: "'Outfit',sans-serif" }}>{task.t}</div>
                      <div className="mono text-[9px] mt-0.5" style={{ color: "hsl(var(--t-ghost))" }}>{task.d}</div>
                    </div>
                    <div className="text-[9px] px-1.5 py-0.5 rounded-md mono flex-shrink-0"
                      style={{ color: task.c, background: task.c + "15" }}>
                      {task.s}
                    </div>
                  </div>
                ))}

                {/* KPI bar */}
                <div className="rounded-xl p-3 mt-1"
                  style={{ background: "rgba(110,130,255,0.06)", border: "1px solid rgba(110,130,255,0.14)" }}>
                  <div className="flex justify-between items-center mb-2">
                    <span className="mono text-[10px]" style={{ color: "hsl(var(--t-ghost))" }}>Sprint KPI Score</span>
                    <span className="font-display font-700 text-[13px]" style={{ color: "hsl(var(--cyan))" }}>87%</span>
                  </div>
                  <div className="h-1.5 rounded-full" style={{ background: "rgba(255,255,255,0.07)" }}>
                    <div className="h-1.5 rounded-full" style={{
                      width: "87%",
                      background: "linear-gradient(90deg, hsl(var(--p500)), hsl(var(--cyan)))",
                      boxShadow: "0 0 8px hsl(var(--cyan) / 0.5)"
                    }}/>
                  </div>
                </div>
              </div>

              {/* Home indicator */}
              <div className="flex justify-center py-3" style={{ background: "hsl(226,26%,8%)" }}>
                <div className="w-24 h-1 rounded-full" style={{ background: "rgba(255,255,255,0.1)" }}/>
              </div>
            </div>

            {/* Floating notification */}
            <div className="absolute -bottom-3 -right-6 flex items-center gap-2.5 px-3.5 py-2.5 rounded-2xl"
              style={{ background: "hsl(var(--surface-2))", border: "1px solid rgba(52,211,153,0.22)", boxShadow: "0 8px 28px rgba(0,0,0,0.45)" }}>
              <div style={{ width: 7, height: 7, borderRadius: "50%", background: "#34d399", boxShadow: "0 0 8px #34d399" }}/>
              <span className="mono text-[10px]" style={{ color: "#34d399" }}>Task done · Riya</span>
            </div>
          </div>
        </div>

        {/* RIGHT — Text */}
        <div className="flex-1 space-y-7 reveal">
          <span className="section-tag">The Solution</span>
          <h2 className="font-display" style={{ fontSize: "clamp(30px,4.5vw,52px)", lineHeight: 1.04, letterSpacing: "-0.03em" }}>
            One Platform.<br/>
            <span className="grad-primary">Total Clarity.</span>
          </h2>
          <p className="text-lg leading-relaxed max-w-lg" style={{ color: "hsl(var(--t-secondary))", lineHeight: 1.72 }}>
            OmniX is a unified web and mobile platform that connects your daily tasks directly to your business goals. Beautiful by design, powerful by architecture.
          </p>

          {/* Feature list */}
          <div className="space-y-4">
            {features.map((f, i) => (
              <div key={i} className="flex items-start gap-4">
                <div className="flex-shrink-0 mt-0.5">
                  <div className="w-6 h-6 rounded-full flex items-center justify-center"
                    style={{ background: "rgba(110,130,255,0.12)", border: "1px solid rgba(110,130,255,0.22)" }}>
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
                      <path d="M5 12l5 5 9-9" stroke="hsl(248,90%,66%)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
                <div>
                  <span className="font-display font-600 text-[14px]" style={{ color: "hsl(var(--t-primary))" }}>{f.title}</span>
                  <span className="text-[14px] ml-2" style={{ color: "hsl(var(--t-muted))" }}>— {f.desc}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Platform badges */}
          <div className="flex gap-3 flex-wrap pt-2">
            {[
              { icon: "🌐", label: "Web App" },
              { icon: "📱", label: "iOS" },
              { icon: "🤖", label: "Android" },
            ].map((p, i) => (
              <div key={i} className="flex items-center gap-2 px-4 py-2 rounded-xl"
                style={{ background: "hsl(var(--surface))", border: "1px solid rgba(255,255,255,0.06)" }}>
                <span className="text-base">{p.icon}</span>
                <span className="text-[13px]" style={{ color: "hsl(var(--t-secondary))", fontFamily: "'Outfit',sans-serif" }}>{p.label}</span>
              </div>
            ))}
          </div>

          <button className="btn-ghost text-sm" onClick={scrollToFeatures}>
            See all features
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}