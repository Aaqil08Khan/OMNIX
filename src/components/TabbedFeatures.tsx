import { useState } from "react";

const CheckSvg = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" fill="rgba(123,47,190,0.18)" /><path d="M8 12l3 3 5-5" stroke="#A855F7" strokeWidth="2" strokeLinecap="round" /></svg>
);

const tabIcons = [
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M9 11l3 3 5-5" stroke="#9333EA" strokeWidth="2" strokeLinecap="round" /><rect x="3" y="3" width="18" height="18" rx="4" stroke="#9333EA" strokeWidth="1.5" fill="none" /></svg>,
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="9" stroke="#9333EA" strokeWidth="1.5" fill="none" /><polyline points="12 6 12 12 16 14" stroke="#9333EA" strokeWidth="1.5" /></svg>,
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><polyline points="4 18 8 12 12 15 16 8 20 10" stroke="#06B6D4" strokeWidth="1.5" fill="none" />{[4,8,12,16,20].map((x,i)=><circle key={i} cx={x} cy={[18,12,15,8,10][i]} r="1.5" fill="#06B6D4" />)}</svg>,
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><rect x="3" y="5" width="7" height="6" rx="1.5" stroke="#9333EA" strokeWidth="1.5" fill="none" /><rect x="3" y="13" width="7" height="6" rx="1.5" stroke="#9333EA" strokeWidth="1.5" fill="none" /><rect x="14" y="5" width="7" height="14" rx="1.5" stroke="#9333EA" strokeWidth="1.5" fill="none" /></svg>,
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M4 6h16M8 12h8M10 18h4" stroke="#9333EA" strokeWidth="1.5" strokeLinecap="round" /></svg>,
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><rect x="3" y="4" width="8" height="14" rx="2" stroke="#9333EA" strokeWidth="1.5" fill="none" /><rect x="14" y="6" width="7" height="10" rx="1.5" stroke="#C084FC" strokeWidth="1.5" fill="none" /></svg>,
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><rect x="3" y="4" width="18" height="16" rx="3" stroke="#9333EA" strokeWidth="1.5" fill="none" /><line x1="3" y1="10" x2="21" y2="10" stroke="#9333EA" strokeWidth="1" /><path d="M9 15l2 2 4-4" stroke="#10B981" strokeWidth="1.5" fill="none" /></svg>,
];

const tabs = [
  {
    label: "Task Management",
    icon: <svg width="64" height="64" viewBox="0 0 64 64" fill="none"><rect x="8" y="8" width="48" height="48" rx="12" fill="rgba(123,47,190,0.15)" /><path d="M22 32l7 7 15-15" stroke="#A855F7" strokeWidth="3" strokeLinecap="round" /></svg>,
    title: "Task Management",
    para: "Create, assign, and prioritize tasks with clear ownership and dependencies.",
    bullets: ["Clear ownership & task priority", "Smart due dates & recurrence", "Dependency linking between tasks"],
  },
  {
    label: "Deadline Tracking",
    icon: <svg width="64" height="64" viewBox="0 0 64 64" fill="none"><circle cx="32" cy="32" r="22" fill="rgba(123,47,190,0.15)" /><circle cx="32" cy="32" r="16" fill="none" stroke="#A855F7" strokeWidth="2" /><polyline points="32,20 32,32 40,36" stroke="#C084FC" strokeWidth="2.5" /></svg>,
    title: "Deadline Tracking",
    para: "Get smart reminders, visualize timelines, and surface bottlenecks before they happen.",
    bullets: ["Intelligent deadline monitoring", "Timeline visualization", "Bottleneck detection alerts"],
  },
  {
    label: "KPI Management",
    icon: <svg width="64" height="64" viewBox="0 0 64 64" fill="none"><rect x="8" y="8" width="48" height="48" rx="12" fill="rgba(123,47,190,0.15)" /><polyline points="16,48 24,36 32,40 40,24 48,20" stroke="#06B6D4" strokeWidth="2.5" fill="none" />{[16,24,32,40,48].map((x,i)=><circle key={i} cx={x} cy={[48,36,40,24,20][i]} r="3" fill="#06B6D4" />)}</svg>,
    title: "KPI Management",
    para: "Define and track Key Performance Indicators. Connect every task to your business objectives.",
    bullets: ["Live KPI dashboards", "Goal-task linkage", "Progress reporting & history"],
  },
  {
    label: "Project Management",
    icon: <svg width="64" height="64" viewBox="0 0 64 64" fill="none"><rect x="8" y="8" width="48" height="48" rx="12" fill="rgba(123,47,190,0.15)" /><rect x="16" y="20" width="12" height="8" rx="2" fill="#7B2FBE" /><rect x="16" y="32" width="12" height="8" rx="2" fill="#5116B5" /><rect x="36" y="20" width="12" height="20" rx="2" fill="#9333EA" /></svg>,
    title: "Project Management",
    para: "Plan, execute, and monitor projects with Kanban boards, lists, and timelines.",
    bullets: ["Kanban & list dual views", "Milestone tracking", "Multi-stage pipelines"],
  },
  {
    label: "Advanced Filtering",
    icon: <svg width="64" height="64" viewBox="0 0 64 64" fill="none"><rect x="8" y="8" width="48" height="48" rx="12" fill="rgba(123,47,190,0.15)" /><path d="M20 22h24M26 32h12M30 42h4" stroke="#A855F7" strokeWidth="2.5" strokeLinecap="round" /></svg>,
    title: "Advanced Filtering",
    para: "Drill into your data with powerful custom filters by project, user, status, date, and priority.",
    bullets: ["Custom multi-field filter builder", "Saved filter views", "Cross-project search"],
  },
  {
    label: "Accessibility",
    icon: <svg width="64" height="64" viewBox="0 0 64 64" fill="none"><rect x="8" y="8" width="48" height="48" rx="12" fill="rgba(123,47,190,0.15)" /><rect x="16" y="16" width="14" height="22" rx="4" fill="none" stroke="#A855F7" strokeWidth="2" /><rect x="36" y="20" width="12" height="16" rx="3" fill="none" stroke="#C084FC" strokeWidth="2" /></svg>,
    title: "Accessibility",
    para: "Always in sync, on every device. Native apps for Web, iOS, and Android.",
    bullets: ["Web + iOS + Android native", "Offline capable with sync", "Real-time collaborative updates"],
  },
  {
    label: "Meeting Scheduler",
    icon: <svg width="64" height="64" viewBox="0 0 64 64" fill="none"><rect x="8" y="8" width="48" height="48" rx="12" fill="rgba(123,47,190,0.15)" /><rect x="18" y="18" width="28" height="22" rx="4" fill="none" stroke="#A855F7" strokeWidth="2" /><path d="M26 34l5 5 7-7" stroke="#10B981" strokeWidth="2" fill="none" /></svg>,
    title: "Meeting Scheduler",
    para: "Plan and document meetings within OmniX, linked to specific projects and tasks.",
    bullets: ["Agenda builder & notes", "Project-linked meeting records", "Calendar integration"],
  },
];

export default function TabbedFeatures() {
  const [active, setActive] = useState(0);

  return (
    <section className="relative py-24 section-mid overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center mb-16 reveal">
          <span className="section-label">Detailed Features</span>
          <h2 className="font-heading font-bold text-[32px] md:text-[44px] leading-tight mt-4" style={{ color: "hsl(270 60% 97%)" }}>
            Deep Dive Into <span className="gradient-text">Every Feature</span>
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 reveal">
          {/* Tab nav */}
          <div className="lg:w-[280px] flex lg:flex-col overflow-x-auto lg:overflow-visible gap-1 shrink-0">
            {tabs.map((t, i) => (
              <button
                key={i}
                className={`tab-item whitespace-nowrap text-left ${i === active ? "active" : ""}`}
                onClick={() => setActive(i)}
              >
                {tabIcons[i]}
                {t.label}
              </button>
            ))}
          </div>

          {/* Tab content */}
          <div className="flex-1 relative min-h-[340px]">
            {tabs.map((t, i) => (
              <div
                key={i}
                className="absolute inset-0 p-6 lg:p-8 rounded-2xl transition-all duration-300"
                style={{
                  opacity: i === active ? 1 : 0,
                  transform: i === active ? "translateX(0)" : "translateX(16px)",
                  pointerEvents: i === active ? "auto" : "none",
                  background: "hsl(var(--bg-surface))",
                  border: "1px solid rgba(139,92,246,0.15)",
                }}
              >
                <div className="mb-4">{t.icon}</div>
                <h3 className="font-heading font-bold text-[28px] mb-3" style={{ color: "hsl(270 60% 97%)" }}>{t.title}</h3>
                <p className="text-base leading-relaxed mb-6 max-w-lg" style={{ color: "hsl(258 88% 85%)" }}>{t.para}</p>
                <div className="space-y-3">
                  {t.bullets.map((b, j) => (
                    <div key={j} className="flex items-center gap-3">
                      <CheckSvg />
                      <span className="text-sm" style={{ color: "hsl(258 88% 85%)" }}>{b}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
