import { useState } from "react";

const tabs = [
  {
    num: "01",
    label: "Task Management",
    title: "Task Management",
    para: "Create, assign, and prioritize tasks with clear ownership and dependencies. Build workflows that mirror how your team actually works — from simple lists to complex multi-stage pipelines.",
    bullets: ["Clear ownership & task priority", "Smart due dates & recurrence", "Dependency linking between tasks"],
    accent: "hsl(var(--p400))",
    image: "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=700&q=80&auto=format",
    preview: (
      <div className="space-y-2">
        {[
          { label: "Design System Overhaul", tag: "In Progress", c: "hsl(var(--ember))", u: "R", prog: 68 },
          { label: "API v2 Integration", tag: "Done", c: "hsl(var(--jade))", u: "A", prog: 100 },
          { label: "Q4 Investor Deck", tag: "To Do", c: "hsl(var(--p400))", u: "K", prog: 15 },
          { label: "Backend Refactor", tag: "In Progress", c: "hsl(var(--ember))", u: "S", prog: 45 },
        ].map((t, i) => (
          <div key={i} className="flex items-center gap-3 px-3 py-2.5 rounded-xl"
            style={{ background: "rgba(255,255,255,0.035)", border: "1px solid rgba(255,255,255,0.05)" }}>
            <div className="w-0.5 h-6 rounded-full flex-shrink-0" style={{ background: t.c }}/>
            <div className="w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-600 flex-shrink-0"
              style={{ background: t.c + "20", color: t.c, fontFamily: "'Clash Display',sans-serif" }}>{t.u}</div>
            <div className="flex-1 min-w-0">
              <div className="text-[12px] truncate" style={{ color: "hsl(var(--t-secondary))", fontFamily: "'Outfit',sans-serif" }}>{t.label}</div>
              <div className="h-1 rounded-full mt-1" style={{ background: "rgba(255,255,255,0.06)" }}>
                <div className="h-1 rounded-full" style={{ width: `${t.prog}%`, background: t.c }}/>
              </div>
            </div>
            <div className="text-[10px] px-2 py-0.5 rounded-md mono flex-shrink-0" style={{ color: t.c, background: t.c + "15" }}>{t.tag}</div>
          </div>
        ))}
      </div>
    ),
  },
  {
    num: "02",
    label: "Deadline Tracking",
    title: "Deadline Tracking",
    para: "Get smart reminders, visualize timelines, and surface bottlenecks before they become blockers. Never miss another critical deadline.",
    bullets: ["Intelligent deadline monitoring", "Timeline visualization", "Bottleneck detection alerts"],
    accent: "hsl(var(--ember))",
    image: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?w=700&q=80&auto=format",
    preview: (
      <div>
        <div className="flex items-end gap-1.5 h-16 mb-3">
          {[65, 48, 72, 55, 80, 60, 90, 74, 85, 95].map((h, i) => (
            <div key={i} className="flex-1 rounded-sm transition-all"
              style={{
                height: `${h}%`,
                background: i >= 8 ? "hsl(var(--ember))" : i >= 6 ? "rgba(251,146,60,0.3)" : "rgba(255,255,255,0.07)",
                boxShadow: i >= 8 ? "0 0 8px hsl(var(--ember) / 0.5)" : "none"
              }}/>
          ))}
        </div>
        <div className="flex items-center justify-between">
          <div className="mono text-[10px]" style={{ color: "hsl(var(--t-ghost))" }}>Oct 1 → Oct 31</div>
          <div className="flex items-center gap-1.5">
            <div className="w-2 h-2 rounded-full" style={{ background: "hsl(var(--ember))" }}/>
            <span className="mono text-[10px]" style={{ color: "hsl(var(--t-ghost))" }}>On track</span>
          </div>
        </div>
      </div>
    ),
  },
  {
    num: "03",
    label: "KPI Management",
    title: "KPI Management",
    para: "Define and track Key Performance Indicators in real-time. Connect every task to your business objectives so nothing is ever done in a vacuum.",
    bullets: ["Live KPI dashboards", "Goal-task linkage", "Progress reporting & history"],
    accent: "hsl(var(--cyan))",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=700&q=80&auto=format",
    preview: (
      <div className="space-y-3">
        {[
          { label: "Revenue Growth", val: 82, c: "hsl(var(--cyan))" },
          { label: "Customer NPS", val: 67, c: "hsl(var(--p400))" },
          { label: "Sprint Velocity", val: 91, c: "hsl(var(--jade))" },
        ].map((k, i) => (
          <div key={i}>
            <div className="flex justify-between mb-1.5">
              <span className="text-[12px]" style={{ color: "hsl(var(--t-secondary))", fontFamily: "'Outfit',sans-serif" }}>{k.label}</span>
              <span className="mono text-[12px]" style={{ color: k.c }}>{k.val}%</span>
            </div>
            <div className="h-1.5 rounded-full" style={{ background: "rgba(255,255,255,0.06)" }}>
              <div className="h-1.5 rounded-full" style={{ width: `${k.val}%`, background: k.c, boxShadow: `0 0 8px ${k.c}55` }}/>
            </div>
          </div>
        ))}
      </div>
    ),
  },
  {
    num: "04",
    label: "Project Management",
    title: "Project Management",
    para: "Plan, execute, and monitor projects with Kanban boards, lists, and timelines — built for teams that ship fast and need full visibility.",
    bullets: ["Kanban & list dual views", "Milestone tracking", "Multi-stage pipelines"],
    accent: "hsl(var(--p400))",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=700&q=80&auto=format",
    preview: (
      <div className="grid grid-cols-3 gap-2">
        {[
          { col: "To Do", items: ["UI Audit", "Specs"], c: "hsl(var(--p400))" },
          { col: "In Progress", items: ["API Build", "Design"], c: "hsl(var(--ember))" },
          { col: "Done", items: ["Wireframes", "Research"], c: "hsl(var(--jade))" },
        ].map((col, ci) => (
          <div key={ci}>
            <div className="mono text-[9px] mb-2 text-center" style={{ color: col.c, letterSpacing: "0.07em" }}>{col.col}</div>
            {col.items.map((item, ii) => (
              <div key={ii} className="px-2.5 py-2 rounded-lg mb-1.5 text-[11px]"
                style={{ background: "rgba(255,255,255,0.04)", color: "hsl(var(--t-muted))", border: "1px solid rgba(255,255,255,0.055)", fontFamily: "'Outfit',sans-serif" }}>
                {item}
              </div>
            ))}
          </div>
        ))}
      </div>
    ),
  },
  {
    num: "05",
    label: "Advanced Filtering",
    title: "Advanced Filtering",
    para: "Drill into your data with powerful custom filters by project, user, status, date, and priority. Save your most-used views for instant access.",
    bullets: ["Custom multi-field filter builder", "Saved filter views", "Cross-project search"],
    accent: "hsl(var(--ember))",
    image: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=700&q=80&auto=format",
    preview: (
      <div className="space-y-2">
        <div className="flex gap-2 flex-wrap">
          {["Status: Active", "Owner: Riya", "Due: This Week"].map((f, i) => (
            <div key={i} className="px-2.5 py-1 rounded-full mono text-[10px] flex items-center gap-1"
              style={{ background: "rgba(110,130,255,0.08)", color: "hsl(var(--p400))", border: "1px solid rgba(110,130,255,0.22)" }}>
              {f}
              <span style={{ opacity: 0.5 }}>×</span>
            </div>
          ))}
        </div>
        <div className="px-3 py-2.5 rounded-xl mono text-[10px]"
          style={{ background: "rgba(255,255,255,0.03)", color: "hsl(var(--t-ghost))", border: "1px solid rgba(255,255,255,0.05)" }}>
          → 12 tasks match your filters
        </div>
      </div>
    ),
  },
  {
    num: "06",
    label: "Cross-Platform",
    title: "Cross-Platform Access",
    para: "Always in sync, on every device. Native apps for Web, iOS, and Android — no compromises, no feature gaps between platforms.",
    bullets: ["Web + iOS + Android native", "Offline capable with sync", "Real-time collaborative updates"],
    accent: "hsl(var(--jade))",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=700&q=80&auto=format",
    preview: (
      <div className="flex gap-4 items-center justify-center py-2">
        {[{ icon: "🌐", label: "Web" }, { icon: "📱", label: "iOS" }, { icon: "🤖", label: "Android" }].map((d, i) => (
          <div key={i} className="flex flex-col items-center gap-2">
            <div className="w-12 h-12 rounded-2xl flex items-center justify-center text-2xl"
              style={{ background: "rgba(110,130,255,0.07)", border: "1px solid rgba(110,130,255,0.14)" }}>
              {d.icon}
            </div>
            <span className="mono text-[10px]" style={{ color: "hsl(var(--t-ghost))" }}>{d.label}</span>
          </div>
        ))}
      </div>
    ),
  },
  {
    num: "07",
    label: "Meeting Scheduler",
    title: "Meeting Scheduler",
    para: "Plan and document meetings within OmniX, linked to specific projects and tasks. Keep everyone aligned without leaving the platform.",
    bullets: ["Agenda builder & notes", "Project-linked meeting records", "Calendar integration"],
    accent: "hsl(var(--p400))",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=700&q=80&auto=format",
    preview: (
      <div className="rounded-xl overflow-hidden" style={{ border: "1px solid rgba(255,255,255,0.06)" }}>
        <div className="px-3 py-2.5 mono text-[10px] flex items-center gap-2"
          style={{ background: "rgba(110,130,255,0.07)", color: "hsl(var(--p400))" }}>
          <span>◉</span> Sprint Planning · Oct 14
        </div>
        <div className="px-3 py-3 space-y-2" style={{ background: "rgba(255,255,255,0.02)" }}>
          {["Review KPIs", "Assign tasks", "Set milestones"].map((a, i) => (
            <div key={i} className="flex items-center gap-2 text-[12px]"
              style={{ color: "hsl(var(--t-muted))", fontFamily: "'Outfit',sans-serif" }}>
              <div className="w-1.5 h-1.5 rounded-full" style={{ background: "rgba(110,130,255,0.4)" }}/>
              {a}
            </div>
          ))}
        </div>
      </div>
    ),
  },
];

const CheckIcon = ({ color }: { color: string }) => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
    <circle cx="12" cy="12" r="10" fill={color + "18"}/>
    <path d="M8 12l3 3 5-5" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export default function TabbedFeatures() {
  const [active, setActive] = useState(0);
  const t = tabs[active];

  return (
    <section className="relative py-28 bg-void overflow-hidden">
      <div className="grid-bg opacity-40"/>
      <div className="glow-blob" style={{ width: 500, height: 500, top: "20%", right: "5%", background: `${tabs[active].accent}14` }}/>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 reveal">
          <span className="section-tag">Detailed Features</span>
          <h2 className="font-display mt-2" style={{ fontSize: "clamp(30px,4.5vw,52px)", lineHeight: 1.04, letterSpacing: "-0.03em" }}>
            Deep Dive Into <span className="grad-primary">Every Feature</span>
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 reveal">
          {/* Tab nav */}
          <div className="lg:w-60 flex lg:flex-col overflow-x-auto lg:overflow-visible gap-1 shrink-0 pb-2 lg:pb-0">
            {tabs.map((tab, i) => (
              <button
                key={i}
                className={`tab-btn whitespace-nowrap ${i === active ? "active" : ""}`}
                onClick={() => setActive(i)}
                style={{ borderLeftColor: i === active ? tab.accent : "transparent" }}
              >
                <span className="mono text-[10px]" style={{ color: "hsl(var(--t-ghost))", minWidth: 22 }}>{tab.num}</span>
                <span>{tab.label}</span>
              </button>
            ))}
          </div>

          {/* Content panel */}
          <div className="flex-1 rounded-2xl relative overflow-hidden"
            style={{
              background: "hsl(var(--surface))",
              border: "1px solid rgba(255,255,255,0.06)",
              minHeight: 380
            }}>
            {/* Background image */}
            <div className="absolute inset-0 overflow-hidden">
              <img
                src={t.image}
                alt={t.title}
                className="w-full h-full object-cover opacity-[0.05] transition-opacity duration-500"
              />
              <div className="absolute inset-0" style={{
                background: "linear-gradient(135deg, hsl(var(--surface)) 40%, transparent 100%)"
              }}/>
            </div>

            {/* Accent corner lines */}
            <div className="absolute top-0 right-0 w-px h-20" style={{ background: `linear-gradient(180deg, ${t.accent}, transparent)` }}/>
            <div className="absolute top-0 right-0 h-px w-20" style={{ background: `linear-gradient(270deg, ${t.accent}, transparent)` }}/>

            <div className="relative z-10 p-8 lg:p-10">
              <div className="mono text-[11px] mb-2" style={{ color: "hsl(var(--t-ghost))", letterSpacing: "0.12em" }}>{t.num} — FEATURE</div>
              <div className="mb-3" style={{ width: 36, height: 2, background: t.accent, borderRadius: 1 }}/>
              <h3 className="font-display font-700 text-2xl lg:text-3xl mb-3"
                style={{ color: "hsl(var(--t-primary))", letterSpacing: "-0.03em" }}>
                {t.title}
              </h3>
              <p className="text-[15px] leading-relaxed mb-8 max-w-lg"
                style={{ color: "hsl(var(--t-secondary))", lineHeight: 1.72 }}>
                {t.para}
              </p>

              {/* Preview */}
              <div className="rounded-2xl p-5 mb-8"
                style={{ background: "rgba(255,255,255,0.025)", border: "1px solid rgba(255,255,255,0.055)" }}>
                {t.preview}
              </div>

              {/* Bullets */}
              <div className="space-y-3">
                {t.bullets.map((b, j) => (
                  <div key={j} className="flex items-center gap-3">
                    <CheckIcon color={t.accent}/>
                    <span className="text-[14px]" style={{ color: "hsl(var(--t-secondary))", fontFamily: "'Outfit',sans-serif" }}>{b}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}