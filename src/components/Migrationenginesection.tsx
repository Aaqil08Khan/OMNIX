import { useState } from "react";

const importSources = [
    {
        name: "Project & Task Platforms",
        what: "Tasks, projects, assignees, statuses, comments, attachments",
        how: "Typically requires manual mapping and fragmented exports",
        icon: "◈",
        color: "hsl(var(--p400))",
    },
    {
        name: "Productivity Suites",
        what: "Documents, spreadsheets, calendars, shared files",
        how: "Often migrated file-by-file with limited structure retention",
        icon: "◇",
        color: "hsl(var(--cyan))",
    },
    {
        name: "Team Communication Tools",
        what: "Channels, conversations, pinned knowledge",
        how: "Conversations usually exported without context or linkage",
        icon: "⬡",
        color: "hsl(var(--ember))",
    },
    {
        name: "HR Systems",
        what: "Employee records, org structures, leave data",
        how: "Requires separate HR migration and manual reconciliation",
        icon: "◉",
        color: "hsl(var(--jade))",
    },
    {
        name: "Financial Systems",
        what: "Invoices, budgets, financial context",
        how: "Data imported in isolation without operational linkage",
        icon: "▣",
        color: "hsl(var(--p300))",
    },
    {
        name: "Spreadsheets / CSV",
        what: "Tasks, employee lists, project plans",
        how: "Manual cleanup and restructuring required before import",
        icon: "▢",
        color: "hsl(var(--t-muted))",
    },
];

const aiCapabilities = [
    {
        capability: "Smart field mapping",
        detail: "Reads source schema and auto-maps to OmniX — no manual column matching required",
        icon: "⟶",
        color: "hsl(var(--p400))",
    },
    {
        capability: "Duplicate detection",
        detail: '"3 tasks in Asana and 2 in Jira look identical. Merge them into one?"',
        icon: "◎",
        color: "hsl(var(--cyan))",
    },
    {
        capability: "Data cleanup",
        detail: '"62 tasks have no owner. 31 are overdue 90+ days. Archive stale records on import?"',
        icon: "✦",
        color: "hsl(var(--jade))",
    },
    {
        capability: "Org chart inference",
        detail: "Infers reporting hierarchy from task assignment patterns when no HR system is connected",
        icon: "◌",
        color: "hsl(var(--ember))",
    },
    {
        capability: "Instant KPI history",
        detail: "Recalculates historical performance from imported data — leaderboard live on Day 1",
        icon: "↑",
        color: "hsl(var(--p300))",
    },
];

const migrationSteps = [
    {
        step: "01",
        label: "Connect",
        desc: "OAuth connect to all your tools in one click per source",
        icon: "⬡",
    },
    {
        step: "02",
        label: "AI Maps",
        desc: "AI reads your data structure and proposes the mapping automatically",
        icon: "◈",
    },
    {
        step: "03",
        label: "Review",
        desc: "You adjust the mapping before committing — full control retained",
        icon: "◇",
    },
    {
        step: "04",
        label: "Import",
        desc: "One-click import with all relationships preserved intact",
        icon: "◉",
    },
    {
        step: "05",
        label: "Dual Sync",
        desc: "Optional 30-day dual-write: both platforms stay live during gradual transition",
        icon: "▣",
    },
];

export default function MigrationEngineSection() {
    const [activeSource, setActiveSource] = useState(0);

    return (
        <section
            id="migration"
            className="relative py-28 overflow-hidden"
            style={{ background: "hsl(var(--deep))" }}
        >
            <div className="grid-bg opacity-40" />
            <div
                className="glow-blob"
                style={{
                    width: 700,
                    height: 700,
                    top: "20%",
                    left: "-10%",
                    background: "hsla(248,72%,46%,0.10)",
                }}
            />
            <div
                className="glow-blob"
                style={{
                    width: 500,
                    height: 500,
                    bottom: "0%",
                    right: "-5%",
                    background: "hsla(186,100%,50%,0.07)",
                }}
            />

            <div className="container mx-auto px-6 lg:px-12 relative z-10">
                {/* ── Header ── */}
                <div className="text-center mb-20 reveal">
                    <span className="section-tag">Migration Engine</span>
                    <h2
                        className="font-display mt-3"
                        style={{
                            fontSize: "clamp(32px,5vw,60px)",
                            lineHeight: 1.04,
                            letterSpacing: "-0.03em",
                        }}
                    >
                        Up and Running in{" "}
                        <span className="grad-primary">1 Hour.</span>
                        <br />
                        Not 6 Months.
                    </h2>
                    <p
                        className="text-lg mt-5 max-w-xl mx-auto"
                        style={{ color: "hsl(var(--t-muted))", lineHeight: 1.72 }}
                    >
                        No company adopts a new platform if it means re-entering years of
                        data. The Migration Engine removes this barrier entirely — connect
                        your existing tools and OmniX does the rest.
                    </p>
                </div>

                {/* ── Two-column: Sources + AI Panel ── */}
                <div className="flex flex-col lg:flex-row gap-6 mb-10">
                    {/* LEFT — Import Sources Table */}
                    
                    <div
                        className="flex-1 rounded-2xl overflow-hidden reveal"
                        style={{
                            border: "1px solid rgba(255,255,255,0.07)",
                            background: "hsl(var(--surface))",
                        }}
                    >
                        {/* Table header */}
                        
                        <div
                            className="grid px-5 py-3"
                            style={{
                                gridTemplateColumns: "1.6fr 2.2fr 1.6fr",
                                background: "hsl(var(--surface-2))",
                                borderBottom: "1px solid rgba(255,255,255,0.05)",
                            }}
                        >
                            {["SOURCE", "DATA INCLUDED", "TYPICAL APPROACH"].map((h) => (
                                <span
                                    key={h}
                                    className="mono text-[10px]"
                                    style={{
                                        color: "hsl(var(--t-ghost))",
                                        letterSpacing: "0.12em",
                                    }}
                                >
                                    {h}
                                </span>
                            ))}
                        </div>

                        {/* Rows */}
                        {importSources.map((src, i) => (
                            <button
                                key={i}
                                className="w-full text-left grid px-5 py-3.5 transition-all duration-200"
                                style={{
                                    gridTemplateColumns: "1.6fr 2.2fr 1.6fr",
                                    gap: "12px",
                                    alignItems: "start",
                                    borderBottom: "1px solid rgba(255,255,255,0.04)",
                                    background:
                                        i === activeSource
                                            ? `${src.color}0A`
                                            : "transparent",
                                    cursor: "pointer",
                                    border: "none",
                                }}
                                onMouseEnter={() => setActiveSource(i)}
                            >
                                {/* Source name */}
                                <div className="flex items-start gap-2">
                                    <span
                                        className="flex-shrink-0 mt-0.5"
                                        style={{ color: src.color, fontSize: 13 }}
                                    >
                                        {src.icon}
                                    </span>
                                    <span
                                        className="text-[12.5px] leading-snug"
                                        style={{
                                            color:
                                                i === activeSource
                                                    ? "hsl(var(--t-primary))"
                                                    : "hsl(var(--t-secondary))",
                                            fontFamily: "'Outfit',sans-serif",
                                            fontWeight: i === activeSource ? 500 : 400,
                                        }}
                                    >
                                        {src.name}
                                    </span>
                                </div>

                                {/* What */}
                                <span
                                    className="text-[12px] leading-snug"
                                    style={{
                                        color: "hsl(var(--t-muted))",
                                        fontFamily: "'Outfit',sans-serif",
                                    }}
                                >
                                    {src.what}
                                </span>

                                {/* How */}
                                <div>
                                    <span
                                        className="text-[12px] leading-snug"
                                        style={{
                                            color: "hsl(var(--t-muted))",
                                            fontFamily: "'Outfit',sans-serif",
                                        }}
                                    >
                                        {src.how}
                                    </span>
                                </div>
                            </button>
                        ))}
                    </div>

                    {/* RIGHT — AI Capabilities */}
                    <div
                        className="lg:w-[340px] rounded-2xl p-6 reveal"
                        style={{
                            border: "1px solid rgba(110,130,255,0.16)",
                            background: "hsl(var(--surface))",
                        }}
                    >
                        <div className="flex items-center gap-2 mb-5">
                            <div
                                className="w-6 h-6 rounded-lg flex items-center justify-center text-xs"
                                style={{
                                    background: "rgba(110,130,255,0.12)",
                                    border: "1px solid rgba(110,130,255,0.25)",
                                    color: "hsl(var(--p400))",
                                }}
                            >
                                ✦
                            </div>
                            <span
                                className="mono text-[10px]"
                                style={{
                                    color: "hsl(var(--p400))",
                                    letterSpacing: "0.12em",
                                }}
                            >
                                AI ADVANTAGES IN MIGRATION
                            </span>
                        </div>

                        <div className="space-y-0">
                            {aiCapabilities.map((cap, i) => (
                                <div
                                    key={i}
                                    className="py-4"
                                    style={{
                                        borderBottom:
                                            i < aiCapabilities.length - 1
                                                ? "1px solid rgba(255,255,255,0.04)"
                                                : "none",
                                    }}
                                >
                                    <div className="flex items-center gap-2 mb-1.5">
                                        <span
                                            className="mono text-sm font-bold"
                                            style={{ color: cap.color }}
                                        >
                                            {cap.icon}
                                        </span>
                                        <span
                                            className="text-[13px] font-500"
                                            style={{
                                                color: "hsl(var(--t-primary))",
                                                fontFamily: "'Outfit',sans-serif",
                                            }}
                                        >
                                            {cap.capability}
                                        </span>
                                    </div>
                                    <p
                                        className="text-[12px] leading-relaxed pl-5 italic"
                                        style={{
                                            color: "hsl(var(--t-muted))",
                                            fontFamily: "'Outfit',sans-serif",
                                            lineHeight: 1.62,
                                        }}
                                    >
                                        {cap.detail}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* ── Migration Flow Steps ── */}
                <div
                    className="rounded-2xl overflow-hidden reveal"
                    style={{
                        border: "1px solid rgba(255,255,255,0.07)",
                        background: "hsl(var(--surface))",
                    }}
                >
                    {/* Header */}
                    <div
                        className="px-6 py-4"
                        style={{
                            background: "hsl(var(--surface-2))",
                            borderBottom: "1px solid rgba(255,255,255,0.05)",
                        }}
                    >
                        <div className="flex items-center gap-2">
                            <div
                                className="w-1.5 h-1.5 rounded-full"
                                style={{
                                    background: "hsl(var(--jade))",
                                    boxShadow: "0 0 6px hsl(var(--jade))",
                                }}
                            />
                            <span
                                className="mono text-[10px]"
                                style={{
                                    color: "hsl(var(--t-ghost))",
                                    letterSpacing: "0.12em",
                                }}
                            >
                                THE MIGRATION FLOW
                            </span>
                        </div>
                    </div>

                    {/* Steps row */}
                    <div className="grid grid-cols-2 md:grid-cols-5 divide-x divide-y md:divide-y-0"
                        style={{ borderColor: "rgba(255,255,255,0.04)" }}>
                        {migrationSteps.map((s, i) => (
                            <div
                                key={i}
                                className="relative p-5 group"
                                style={{
                                    borderColor: "rgba(255,255,255,0.04)",
                                }}
                            >
                                {/* Step number */}
                                <div
                                    className="mono text-[10px] mb-3"
                                    style={{
                                        color: "hsl(var(--t-ghost))",
                                        letterSpacing: "0.1em",
                                    }}
                                >
                                    {s.step}
                                </div>

                                {/* Icon */}
                                <div
                                    className="w-8 h-8 rounded-xl flex items-center justify-center mb-3 text-sm transition-all duration-200 group-hover:scale-110"
                                    style={{
                                        background: "rgba(110,130,255,0.08)",
                                        border: "1px solid rgba(110,130,255,0.18)",
                                        color: "hsl(var(--p400))",
                                    }}
                                >
                                    {s.icon}
                                </div>

                                <div
                                    className="font-display font-600 text-[14px] mb-1.5"
                                    style={{ color: "hsl(var(--t-primary))" }}
                                >
                                    {s.label}
                                </div>
                                <p
                                    className="text-[12px] leading-relaxed"
                                    style={{
                                        color: "hsl(var(--t-muted))",
                                        fontFamily: "'Outfit',sans-serif",
                                        lineHeight: 1.6,
                                    }}
                                >
                                    {s.desc}
                                </p>

                                {/* Arrow connector — hide on last */}
                                {i < migrationSteps.length - 1 && (
                                    <div
                                        className="hidden md:flex absolute top-1/2 -right-4 items-center"
                                        style={{ transform: "translateY(-50%)" }}
                                    >
                                        <svg
                                            width="50"
                                            height="50"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="hsl(var(--t-ghost))"
                                            strokeWidth="2.2"
                                        >
                                            <path d="M5 12h14M12 5l7 7-7 7" />
                                        </svg>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>

                    {/* Dual-write callout */}
                    <div
                        className="px-6 py-4 flex flex-wrap items-center gap-4"
                        style={{
                            borderTop: "1px solid rgba(255,255,255,0.05)",
                            background: "rgba(110,130,255,0.03)",
                        }}
                    >
                        <div
                            className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0"
                            style={{
                                background: "rgba(52,211,153,0.1)",
                                border: "1px solid rgba(52,211,153,0.2)",
                            }}
                        >
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                                <path
                                    d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"
                                    fill="#34d399"
                                />
                            </svg>
                        </div>
                        <div>
                            <span
                                className="text-[13px] font-500"
                                style={{
                                    color: "hsl(var(--t-primary))",
                                    fontFamily: "'Outfit',sans-serif",
                                }}
                            >
                                Zero hard cutover required.
                            </span>
                            <span
                                className="text-[13px] ml-1.5"
                                style={{
                                    color: "hsl(var(--t-muted))",
                                    fontFamily: "'Outfit',sans-serif",
                                }}
                            >
                                Enable 30-day dual-write sync — both platforms stay live while
                                your team transitions at their own pace.
                            </span>
                        </div>
                        <div
                            className="ml-auto mono text-[11px] px-3 py-1.5 rounded-xl flex-shrink-0"
                            style={{
                                background: "rgba(52,211,153,0.08)",
                                color: "#34d399",
                                border: "1px solid rgba(52,211,153,0.2)",
                            }}
                        >
                            Optional feature
                        </div>
                    </div>
                </div>

                {/* ── Bottom stat strip ── */}
                <div className="mt-10 reveal">
                    <div
                        className="grid grid-cols-2 md:grid-cols-4 gap-px rounded-2xl overflow-hidden"
                        style={{
                            background: "rgba(255,255,255,0.04)",
                            border: "1px solid rgba(255,255,255,0.06)",
                        }}
                    >
                        {[
                            { val: "< 1hr", label: "Avg. import time", color: "hsl(var(--p400))" },
                            { val: "6 tools", label: "Connectors available", color: "hsl(var(--cyan))" },
                            { val: "0", label: "Manual re-entry required", color: "hsl(var(--jade))" },
                            { val: "Day 1", label: "KPI history live", color: "hsl(var(--ember))" },
                        ].map((s, i) => (
                            <div
                                key={i}
                                className="py-5 px-4 text-center"
                                style={{ background: "hsl(var(--surface))" }}
                            >
                                <div
                                    className="font-display font-700 text-xl mb-1"
                                    style={{ color: s.color, letterSpacing: "-0.03em" }}
                                >
                                    {s.val}
                                </div>
                                <div
                                    className="mono text-[10px]"
                                    style={{
                                        color: "hsl(var(--t-ghost))",
                                        letterSpacing: "0.05em",
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