import { useState } from "react";

const tabs = [
  {
    num: "01",
    label: "Task Management",
    title: "Task Management",
    para: "Create, assign, and prioritize tasks with clear ownership and dependencies. Build workflows that mirror how your team actually works.",
    bullets: ["Clear ownership & task priority", "Smart due dates & recurrence", "Dependency linking between tasks"],
    accent: "hsl(246,90%,68%)",
    preview: (
      <div className="space-y-2">
        {[
          { label: "Design System Overhaul", tag: "In Progress", c: "hsl(38,95%,60%)", u: "R" },
          { label: "API v2 Integration", tag: "Done", c: "hsl(160,60%,55%)", u: "A" },
          { label: "Q4 Investor Deck", tag: "To Do", c: "hsl(246,90%,68%)", u: "K" },
          { label: "Backend Refactor", tag: "In Progress", c: "hsl(38,95%,60%)", u: "S" },
        ].map((t, i) => (
          <div key={i} className="flex items-center gap-3 px-3 py-2.5 rounded-lg"
            style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.05)" }}>
            <div className="w-0.5 h-5 rounded-full flex-shrink-0" style={{ background: t.c }} />
            <div className="w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold flex-shrink-0"
              style={{ background: t.c + "20", color: t.c, fontFamily: "'DM Mono',monospace" }}>{t.u}</div>
            <div className="flex-1 text-xs truncate" style={{ color: "hsl(var(--text-secondary))", fontFamily: "'DM Sans',sans-serif" }}>{t.label}</div>
            <div className="text-[10px] px-2 py-0.5 rounded mono flex-shrink-0" style={{ color: t.c, background: t.c + "15" }}>{t.tag}</div>
          </div>
        ))}
      </div>
    ),
  },
  {
    num: "02",
    label: "Deadline Tracking",
    title: "Deadline Tracking",
    para: "Get smart reminders, visualize timelines, and surface bottlenecks before they become blockers.",
    bullets: ["Intelligent deadline monitoring", "Timeline visualization", "Bottleneck detection alerts"],
    accent: "hsl(38,95%,60%)",
    preview: (
      <div>
        <div className="flex items-end gap-1.5 h-16 mb-3">
          {[65, 48, 72, 55, 80, 60, 90, 74, 85, 95].map((h, i) => (
            <div key={i} className="flex-1 rounded-sm transition-all"
              style={{ height: `${h}%`, background: i >= 8 ? "hsl(38,95%,60%)" : i >= 6 ? "rgba(251,191,36,0.3)" : "rgba(255,255,255,0.08)" }} />
          ))}
        </div>
        <div className="flex items-center justify-between">
          <div className="mono text-[10px]" style={{ color: "hsl(var(--text-ghost))" }}>Oct 1 → Oct 31</div>
          <div className="flex items-center gap-1.5">
            <div className="w-2 h-2 rounded-full" style={{ background: "hsl(38,95%,60%)" }} />
            <span className="mono text-[10px]" style={{ color: "hsl(var(--text-ghost))" }}>On track</span>
          </div>
        </div>
      </div>
    ),
  },
  {
    num: "03",
    label: "KPI Management",
    title: "KPI Management",
    para: "Define and track Key Performance Indicators. Connect every task to your business objectives so nothing is done in a vacuum.",
    bullets: ["Live KPI dashboards", "Goal-task linkage", "Progress reporting & history"],
    accent: "hsl(183,100%,56%)",
    preview: (
      <div className="space-y-3">
        {[
          { label: "Revenue Growth", val: 82, c: "hsl(183,100%,56%)" },
          { label: "Customer NPS", val: 67, c: "hsl(246,90%,68%)" },
          { label: "Sprint Velocity", val: 91, c: "hsl(38,95%,60%)" },
        ].map((k, i) => (
          <div key={i}>
            <div className="flex justify-between mb-1">
              <span className="text-xs" style={{ color: "hsl(var(--text-secondary))", fontFamily: "'DM Sans',sans-serif" }}>{k.label}</span>
              <span className="mono text-xs" style={{ color: k.c }}>{k.val}%</span>
            </div>
            <div className="h-1.5 rounded-full" style={{ background: "rgba(255,255,255,0.06)" }}>
              <div className="h-1.5 rounded-full" style={{ width: `${k.val}%`, background: k.c }} />
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
    para: "Plan, execute, and monitor projects with Kanban boards, lists, and timelines — built for teams that ship.",
    bullets: ["Kanban & list dual views", "Milestone tracking", "Multi-stage pipelines"],
    accent: "hsl(246,90%,68%)",
    preview: (
      <div className="grid grid-cols-3 gap-2">
        {[
          { col: "To Do", items: ["UI Audit", "Specs"], c: "hsl(246,90%,68%)" },
          { col: "In Progress", items: ["API Build", "Design"], c: "hsl(38,95%,60%)" },
          { col: "Done", items: ["Wireframes", "Research"], c: "hsl(160,60%,55%)" },
        ].map((col, ci) => (
          <div key={ci}>
            <div className="mono text-[9px] mb-2 text-center" style={{ color: col.c, letterSpacing: "0.06em" }}>{col.col}</div>
            {col.items.map((item, ii) => (
              <div key={ii} className="px-2 py-1.5 rounded-md mb-1 text-[10px]"
                style={{ background: "rgba(255,255,255,0.04)", color: "hsl(var(--text-muted))", border: "1px solid rgba(255,255,255,0.05)", fontFamily: "'DM Sans',sans-serif" }}>
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
    para: "Drill into your data with powerful custom filters by project, user, status, date, and priority.",
    bullets: ["Custom multi-field filter builder", "Saved filter views", "Cross-project search"],
    accent: "hsl(38,95%,60%)",
    preview: (
      <div className="space-y-2">
        <div className="flex gap-2 flex-wrap">
          {["Status: Active", "Owner: Riya", "Due: This Week"].map((f, i) => (
            <div key={i} className="px-2.5 py-1 rounded-full mono text-[10px] flex items-center gap-1"
              style={{ background: "rgba(139,160,255,0.08)", color: "hsl(246,90%,68%)", border: "1px solid rgba(139,160,255,0.2)" }}>
              {f}
              <span style={{ opacity: 0.5 }}>×</span>
            </div>
          ))}
        </div>
        <div className="px-3 py-2 rounded-lg mono text-[10px]"
          style={{ background: "rgba(255,255,255,0.03)", color: "hsl(var(--text-ghost))", border: "1px solid rgba(255,255,255,0.05)" }}>
          → 12 tasks match your filters
        </div>
      </div>
    ),
  },
  {
    num: "06",
    label: "Accessibility",
    title: "Cross-Platform Access",
    para: "Always in sync, on every device. Native apps for Web, iOS, and Android — no compromises.",
    bullets: ["Web + iOS + Android native", "Offline capable with sync", "Real-time collaborative updates"],
    accent: "hsl(183,100%,56%)",
    preview: (
      <div className="flex gap-3 items-center justify-center">
        {[
          { icon: "🌐", label: "Web" },
          { icon: "📱", label: "iOS" },
          { icon: "🤖", label: "Android" },
        ].map((d, i) => (
          <div key={i} className="flex flex-col items-center gap-2">
            <div className="w-12 h-12 rounded-2xl flex items-center justify-center text-2xl"
              style={{ background: "rgba(139,160,255,0.06)", border: "1px solid rgba(139,160,255,0.12)" }}>
              {d.icon}
            </div>
            <span className="mono text-[10px]" style={{ color: "hsl(var(--text-ghost))" }}>{d.label}</span>
          </div>
        ))}
        <div className="flex-1 ml-2 space-y-1">
          <div className="h-0.5 rounded-full" style={{ background: "linear-gradient(90deg, hsl(246,90%,68%), hsl(183,100%,56%))" }} />
          <div className="mono text-[10px] text-center" style={{ color: "hsl(183,100%,56%)" }}>Always synced</div>
        </div>
      </div>
    ),
  },
  {
    num: "07",
    label: "Meeting Scheduler",
    title: "Meeting Scheduler",
    para: "Plan and document meetings within OmniX, linked to specific projects and tasks.",
    bullets: ["Agenda builder & notes", "Project-linked meeting records", "Calendar integration"],
    accent: "hsl(246,90%,68%)",
    preview: (
      <div className="rounded-lg overflow-hidden" style={{ border: "1px solid rgba(255,255,255,0.06)" }}>
        <div className="px-3 py-2 mono text-[10px] flex items-center gap-2"
          style={{ background: "rgba(139,160,255,0.06)", color: "hsl(246,90%,68%)" }}>
          <span>◉</span> Sprint Planning · Oct 14
        </div>
        <div className="px-3 py-2 space-y-1.5" style={{ background: "rgba(255,255,255,0.02)" }}>
          {["Review KPIs", "Assign tasks", "Set milestones"].map((a, i) => (
            <div key={i} className="flex items-center gap-2 text-xs"
              style={{ color: "hsl(var(--text-muted))", fontFamily: "'DM Sans',sans-serif" }}>
              <div className="w-1 h-1 rounded-full" style={{ background: "rgba(139,160,255,0.4)" }} />
              {a}
            </div>
          ))}
        </div>
      </div>
    ),
  },
];

const Check = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
    <circle cx="12" cy="12" r="10" fill="rgba(139,160,255,0.1)" />
    <path d="M8 12l3 3 5-5" stroke="hsl(246,90%,68%)" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

export default function TabbedFeatures() {
  const [active, setActive] = useState(0);
  const t = tabs[active];

  return (
    <section className="relative py-24 section-void overflow-hidden">
      <div className="grid-overlay opacity-40" />
      <div className="glow-orb" style={{ width: 400, height: 400, top: "30%", right: "5%", background: `${tabs[active].accent}10` }} />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="text-center mb-16 reveal">
          <span className="section-label">Detailed Features</span>
          <h2 className="font-heading font-800 mt-2" style={{ fontSize: "clamp(28px,4vw,48px)", lineHeight: 1.05, letterSpacing: "-0.03em" }}>
            Deep Dive Into <span className="gradient-text">Every Feature</span>
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 reveal">
          {/* Tab nav */}
          <div className="lg:w-64 flex lg:flex-col overflow-x-auto lg:overflow-visible gap-1 shrink-0 pb-2 lg:pb-0">
            {tabs.map((tab, i) => (
              <button
                key={i}
                className={`tab-item whitespace-nowrap ${i === active ? "active" : ""}`}
                onClick={() => setActive(i)}
                style={{ borderLeftColor: i === active ? tab.accent : "transparent" }}
              >
                <span className="mono text-[10px]" style={{ color: "hsl(var(--text-ghost))", minWidth: 20 }}>{tab.num}</span>
                <span>{tab.label}</span>
              </button>
            ))}
          </div>

          {/* Content panel */}
          <div className="flex-1 rounded-2xl p-8 lg:p-10"
            style={{ background: "hsl(var(--bg-surface))", border: "1px solid rgba(255,255,255,0.06)", minHeight: 360, position: "relative" }}>
            {/* Accent corner */}
            <div className="absolute top-0 right-0 w-px h-16" style={{ background: `linear-gradient(180deg, ${t.accent}, transparent)` }} />
            <div className="absolute top-0 right-0 h-px w-16" style={{ background: `linear-gradient(270deg, ${t.accent}, transparent)` }} />

            <div className="mono text-xs mb-2" style={{ color: "hsl(var(--text-ghost))", letterSpacing: "0.1em" }}>{t.num} — FEATURE</div>
            <div className="mb-2" style={{ width: 32, height: 2, background: t.accent, borderRadius: 1 }} />
            <h3 className="font-heading font-800 text-2xl lg:text-3xl mb-3" style={{ color: "hsl(var(--text-primary))", letterSpacing: "-0.03em" }}>
              {t.title}
            </h3>
            <p className="text-base leading-relaxed mb-8 max-w-lg" style={{ color: "hsl(var(--text-secondary))", lineHeight: 1.7 }}>
              {t.para}
            </p>

            {/* Preview box */}
            <div className="rounded-xl p-4 mb-8" style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.05)" }}>
              {t.preview}
            </div>

            {/* Bullets */}
            <div className="space-y-3">
              {t.bullets.map((b, j) => (
                <div key={j} className="flex items-center gap-3">
                  <Check />
                  <span className="text-sm" style={{ color: "hsl(var(--text-secondary))", fontFamily: "'DM Sans',sans-serif" }}>{b}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}