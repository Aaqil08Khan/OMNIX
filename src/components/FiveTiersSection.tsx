import { useState, useRef } from "react";
import automation from "@/assets/images/automation.webp";
import operationCore from "@/assets/images/operationscore.avif";
import peopleHr from "@/assets/images/people&hr.avif";
import meetingIntelligence from "@/assets/images/meetingIntelligence.avif";
import businessInteligence from "@/assets/images/businessintelligence.avif";

const tiers = [
  {
    num: "01",
    label: "Operations Core",
    tag: "Foundation",
    tagline: "Ships first. The baseline every business needs.",
    desc: "The operational bedrock — tasks, projects, teams, documents, and KPIs unified in one place. Everything else builds on this.",
    accent: "hsl(248,90%,66%)",
    accentDim: "rgba(110,80,255,0.12)",
    icon: "◈",
    image: operationCore,
    modules: [
      { name: "Task Management", ai: "Create, assign, track, approve, summarize, predict delays" },
      { name: "Project Management", ai: '"How is Project X? Who\'s blocking? Will we hit the deadline?"' },
      { name: "Team Management", ai: '"Who\'s overloaded? Who has bandwidth? Rebalance this sprint."' },
      { name: "Document Hub", ai: '"Find the NDA template. Summarize Q1 report."' },
      { name: "KPI & Analytics", ai: '"How did Ahmed perform this quarter? Compare teams A vs B."' },
    ],
  },
  {
    num: "02",
    label: "People & HR",
    tag: "Expansion",
    tagline: "Replaces BambooHR, Rippling for most SMBs.",
    desc: "Full HR suite — attendance, onboarding, performance reviews, and payroll tracking — all AI-enhanced and connected to your operations layer.",
    accent: "hsl(28,95%,58%)",
    accentDim: "rgba(251,146,60,0.1)",
    icon: "◇",
    image: peopleHr,
    modules: [
      { name: "Attendance & Leave", ai: '"How many leaves does Ahmed have? Approve Fatima\'s request."' },
      { name: "Onboarding", ai: '"What\'s Noor\'s onboarding status? Send her the IT setup guide."' },
      { name: "Performance Reviews", ai: '"Draft Bilal\'s review based on his Q1 KPIs and project contributions."' },
      { name: "Payroll Integration", ai: '"How many overtime hours did the dev team log this month?"' },
    ],
  },
  {
    num: "03",
    label: "Meeting Intelligence",
    tag: "The Differentiator",
    tagline: "The capability no competitor has built.",
    desc: "OmniX's meeting AI is an active participant — it knows the projects, the people, the deadlines, and the blockers before the meeting starts. Fireflies transcribes. OmniX understands.",
    accent: "hsl(186,100%,54%)",
    accentDim: "rgba(80,220,220,0.1)",
    icon: "⬡",
    image: meetingIntelligence,
    highlight: true,
    modules: [
      { name: "AI in Meetings", ai: "OmniX joins Zoom / Teams / Google Meet with full company context loaded" },
      { name: "Live Answers", ai: 'CEO asks "Where are we on Project Alpha?" — AI answers instantly with live data' },
      { name: "Auto Action Items", ai: '"Talha, fix the API by Friday" → task auto-created, assigned, deadline set' },
      { name: "Meeting Summary", ai: "Structured summary, decisions made, action items sent to all participants" },
      { name: "Follow-up Engine", ai: '"Talha, the API fix from Monday\'s meeting is due in 2 days. Current status?"' },
      { name: "Meeting Analytics", ai: '"40% of meeting time was on Project X. It needs a dedicated standup."' },
    ],
  },
  {
    num: "04",
    label: "Business Intelligence",
    tag: "Predictions",
    tagline: "Compound insight from unified data.",
    desc: "Impossible to replicate without the full data graph. OmniX sees across every module to surface insights no siloed tool ever could.",
    accent: "hsl(158,64%,52%)",
    accentDim: "rgba(52,211,153,0.1)",
    icon: "◉",
    image: businessInteligence,
    modules: [
      { name: "Cross-Module Insights", ai: '"John is underperforming: he\'s on 3 overlapping projects with 40% team leave."' },
      { name: "Predictive Alerts", ai: '"Project Alpha will miss its deadline by 8 days. Recommend: add 1 resource."' },
      { name: "Burnout Detection", ai: '"Sarah has worked 60+ hours for 3 consecutive weeks. Elevated burnout risk."' },
      { name: "Leadership Digests", ai: "Auto-generated weekly org health report — zero manual work" },
      { name: "What-if Scenarios", ai: '"If we move Ahmed to Project Beta, what happens to Project Alpha\'s timeline?"' },
    ],
  },
  {
    num: "05",
    label: "Communication & Automation",
    tag: "Workflow",
    tagline: "Reduces context-switching. Keeps everything in one place.",
    desc: "Internal chat, approval chains, automation rules, and a client portal — all AI-searchable and context-aware, built right into your workspace.",
    accent: "hsl(248,100%,76%)",
    accentDim: "rgba(140,120,255,0.1)",
    icon: "▣",
    image: automation,
    modules: [
      { name: "Internal Chat", ai: "Slack-like messaging, fully AI-searchable and context-aware" },
      { name: "Approval Workflows", ai: "Custom chains: leave → manager → HR → payroll, with AI routing" },
      { name: "Automation Rules", ai: '"When a task is overdue 2 days, notify manager and escalate priority."' },
      { name: "Client Portal", ai: "External stakeholders check project status, invoices, deliverables" },
      { name: "Announcements", ai: "Company-wide updates with read-tracking and AI-assisted drafting" },
    ],
  },
];

export default function FiveTiersSection() {
  const nextTier = () => {
    setActive((prev) => (prev + 1) % tiers.length);
  };

  const prevTier = () => {
    setActive((prev) => (prev - 1 + tiers.length) % tiers.length);
  };

  const [active, setActive] = useState(0);
  const tier = tiers[active];

  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.changedTouches[0].screenX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    touchEndX.current = e.changedTouches[0].screenX;

    const diff = touchStartX.current - touchEndX.current;

    if (diff > 50) {
      // swipe left → next
      nextTier();
    } else if (diff < -50) {
      // swipe right → previous
      prevTier();
    }
  };

  return (
    <section
      id="platform"
      className="relative py-28 overflow-hidden"
      style={{ background: "hsl(var(--void))" }}
    >
      <div className="grid-bg opacity-40" />
      <div
        className="glow-blob"
        style={{
          width: 700,
          height: 700,
          top: "50%",
          left: "50%",
          transform: "translate(-50%,-50%)",
          background: `${tier.accent}14`,
          transition: "background 0.6s ease",
        }}
      />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        {/* ── Header ── */}
        <div className="text-center mb-20 reveal">
          <span className="section-tag">The Platform</span>
          <h2
            className="font-display mt-3"
            style={{
              fontSize: "clamp(32px,5vw,60px)",
              lineHeight: 1.04,
              letterSpacing: "-0.03em",
            }}
          >
            Five Tiers.{" "}
            <span className="grad-primary">One Platform.</span>
          </h2>
          <p
            className="text-lg mt-5 max-w-xl mx-auto"
            style={{ color: "hsl(var(--t-muted))", lineHeight: 1.72 }}
          >
            OmniX is structured as five capability tiers built in sequence. Each
            tier delivers standalone value while making the AI smarter than the
            tier before it.
          </p>
        </div>

        {/* ── Tier selector strip ── */}
        <div className="flex flex-wrap justify-center gap-2 mb-14 reveal">
          {tiers.map((t, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className="relative flex items-center gap-2.5 px-4 py-2.5 rounded-xl transition-all duration-300"
              style={{
                background:
                  i === active ? t.accent + "18" : "rgba(255,255,255,0.03)",
                border: `1px solid ${i === active ? t.accent + "55" : "rgba(255,255,255,0.06)"
                  }`,
                color:
                  i === active ? t.accent : "hsl(var(--t-ghost))",
                cursor: "pointer",
              }}
            >
              <span
                className="mono text-[10px]"
                style={{ opacity: 0.6 }}
              >
                {t.num}
              </span>
              <span
                className="font-display text-[13px] font-600 whitespace-nowrap"
                style={{ fontFamily: "'Outfit',sans-serif" }}
              >
                {t.label}
              </span>
              {t.highlight && (
                <span
                  className="mono text-[9px] px-1.5 py-0.5 rounded"
                  style={{
                    background: t.accent + "25",
                    color: t.accent,
                    letterSpacing: "0.06em",
                  }}
                >
                  ★
                </span>
              )}
            </button>
          ))}
        </div>

        {/* ── Main content panel ── */}
        <div
          className="relative rounded-3xl overflow-hidden reveal"
          style={{
            border: `1px solid ${tier.accent}22`,
            background: "hsl(var(--surface))",
            boxShadow: `0 40px 100px rgba(0,0,0,0.5), 0 0 0 1px ${tier.accent}10`,
            transition: "border-color 0.5s, box-shadow 0.5s",
          }}
        >

          {/* LEFT BUTTON */}
          <button
            onClick={prevTier}
            className=" hidden sm:flex absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center backdrop-blur-md transition-all hover:bg-white/10 hover:scale-110 active:scale-95"
            style={{
              background: "rgba(0,0,0,0.5)",
              border: "1px solid rgba(255,255,255,0.15)",
              color: "white",
              fontSize: "22px",
              fontWeight: "bold",
            }}
          >
            ‹
          </button>

          {/* RIGHT BUTTON */}
          <button
            onClick={nextTier}
            className=" hidden sm:flex absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center backdrop-blur-md transition-all hover:bg-white/10 hover:scale-110 active:scale-95"
            style={{
              background: "rgba(0,0,0,0.5)",
              border: "1px solid rgba(255,255,255,0.15)",
              color: "white",
              fontSize: "22px",
              fontWeight: "bold",
            }}
          >
            ›
          </button>
          <div
            className="flex flex-col lg:flex-row min-h-[520px] touch-pan-y"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            {/* LEFT — Image + intro */}
            <div className="lg:w-[42%] relative overflow-hidden">
              <img
                key={tier.num}
                src={tier.image}
                alt={tier.label}
                className="w-full h-full object-cover"
                style={{
                  minHeight: 300,
                  filter: "brightness(0.3) saturate(0.5)",
                  transition: "opacity 0.5s",
                }}
              />
              {/* Gradient overlay */}
              <div
                className="absolute inset-0"
                style={{
                  background: `linear-gradient(135deg, ${tier.accent}28 0%, transparent 55%), linear-gradient(270deg, hsl(var(--surface)) 0%, transparent 40%)`,
                }}
              />
              {/* Content over image */}
              <div className="absolute inset-0 flex flex-col justify-end p-8 lg:p-10">
                {/* Tier number */}
                <div
                  className="mono text-[11px] mb-3"
                  style={{
                    color: tier.accent,
                    letterSpacing: "0.18em",
                    opacity: 0.8,
                  }}
                >
                  TIER {tier.num} / 05
                </div>

                {/* Accent line */}
                <div
                  style={{
                    width: 40,
                    height: 2,
                    background: tier.accent,
                    borderRadius: 1,
                    marginBottom: 16,
                    boxShadow: `0 0 12px ${tier.accent}80`,
                  }}
                />

                <h3
                  className="font-display font-700 mb-2"
                  style={{
                    fontSize: "clamp(24px,3vw,36px)",
                    letterSpacing: "-0.03em",
                    color: "hsl(var(--t-primary))",
                    lineHeight: 1.1,
                  }}
                >
                  {tier.label}
                </h3>

                {/* Tag badge */}
                <div
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full mb-4 w-fit"
                  style={{
                    background: tier.accent + "18",
                    border: `1px solid ${tier.accent}35`,
                  }}
                >
                  <span style={{ color: tier.accent }}>
                    {tier.icon}
                  </span>
                  <span
                    className="mono text-[10px] font-600"
                    style={{ color: tier.accent, letterSpacing: "0.08em" }}
                  >
                    {tier.tag}
                  </span>
                </div>

                <p
                  className="text-[13.5px] leading-relaxed"
                  style={{
                    color: "hsl(var(--t-secondary))",
                    lineHeight: 1.7,
                    maxWidth: 320,
                  }}
                >
                  {tier.desc}
                </p>
              </div>
            </div>

            {/* RIGHT — Modules table */}
            <div className="flex-1 p-6 lg:p-10 flex flex-col">
              {/* Header row */}
              <div
                className="grid grid-cols-2 mb-4 pb-3"
                style={{
                  borderBottom: "1px solid rgba(255,255,255,0.06)",
                }}
              >
                <span
                  className="mono text-[10px]"
                  style={{
                    color: "hsl(var(--t-ghost))",
                    letterSpacing: "0.12em",
                  }}
                >
                  MODULE
                </span>
                <span
                  className="mono text-[10px]"
                  style={{
                    color: "hsl(var(--t-ghost))",
                    letterSpacing: "0.12em",
                  }}
                >
                  WHAT THE AI CAN DO
                </span>
              </div>

              {/* Module rows */}
              <div className="space-y-0 flex-1">
                {tier.modules.map((mod, i) => (
                  <div
                    key={i}
                    className="group grid grid-cols-2 gap-4 py-3.5 transition-all duration-200"
                    style={{
                      borderBottom: "1px solid rgba(255,255,255,0.04)",
                    }}
                  >
                    {/* Module name */}
                    <div className="flex items-start gap-2.5">
                      <div
                        className="mt-1 w-1.5 h-1.5 rounded-full flex-shrink-0 transition-all"
                        style={{
                          background: tier.accent,
                          boxShadow: `0 0 6px ${tier.accent}80`,
                          opacity: 0.7,
                        }}
                      />
                      <span
                        className="text-[13px] font-500"
                        style={{
                          color: "hsl(var(--t-primary))",
                          fontFamily: "'Outfit',sans-serif",
                          lineHeight: 1.4,
                        }}
                      >
                        {mod.name}
                      </span>
                    </div>

                    {/* AI capability */}
                    <div
                      className="rounded-lg px-3 py-1.5 transition-all duration-200"
                      style={{
                        background: "rgba(255,255,255,0.025)",
                        border: "1px solid rgba(255,255,255,0.04)",
                      }}
                    >
                      <span
                        className="text-[12px] italic leading-relaxed"
                        style={{
                          color: "hsl(var(--t-muted))",
                          fontFamily: "'Outfit',sans-serif",
                          lineHeight: 1.55,
                        }}
                      >
                        {mod.ai}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Tagline footer */}
              <div
                className="mt-6 pt-5 flex items-center gap-3"
                style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}
              >
                <div
                  className="w-7 h-7 rounded-lg flex items-center justify-center text-sm flex-shrink-0"
                  style={{
                    background: tier.accentDim,
                    border: `1px solid ${tier.accent}25`,
                    color: tier.accent,
                  }}
                >
                  ✦
                </div>
                <p
                  className="mono text-[11px]"
                  style={{
                    color: "hsl(var(--t-ghost))",
                    letterSpacing: "0.04em",
                    lineHeight: 1.5,
                  }}
                >
                  {tier.tagline}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ── Tier progress dots ── */}
        <div className="flex justify-center gap-3 mt-8">
          {tiers.map((t, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className="transition-all duration-300"
              style={{
                width: i === active ? 28 : 8,
                height: 8,
                borderRadius: 4,
                background: i === active ? t.accent : "rgba(255,255,255,0.12)",
                border: "none",
                cursor: "pointer",
                boxShadow: i === active ? `0 0 10px ${t.accent}70` : "none",
              }}
            />
          ))}
        </div>

        {/* ── Bottom callout ── */}
        <div className="mt-16 text-center reveal">
          <div
            className="inline-flex flex-wrap justify-center gap-8 items-center px-8 py-5 rounded-2xl"
            style={{
              background: "hsl(var(--surface))",
              border: "1px solid rgba(255,255,255,0.06)",
            }}
          >
            {[
              { val: "5", label: "Capability Tiers" },
              { val: "25+", label: "Modules" },
              { val: "1", label: "Platform" },
            ].map((s, i) => (
              <div key={i} className="text-center">
                <div
                  className="font-display font-700 text-2xl"
                  style={{
                    letterSpacing: "-0.04em",
                    background:
                      "linear-gradient(135deg, hsl(var(--p300)), hsl(var(--cyan)))",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  {s.val}
                </div>
                <div
                  className="mono text-[11px] mt-0.5"
                  style={{
                    color: "hsl(var(--t-ghost))",
                    letterSpacing: "0.07em",
                  }}
                >
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}