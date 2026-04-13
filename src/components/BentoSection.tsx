const ArrowIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="absolute top-5 right-5 transition-transform duration-200" style={{ color: "hsl(268 60% 47%)" }}>
    <path d="M7 17L17 7M17 7H7M17 7v10" />
  </svg>
);

const cards = [
  {
    title: "Task & Project Management",
    desc: "Create, assign, prioritize. Manage everything from a simple to-do to complex multi-stage projects with owners and dependencies.",
    span: "md:col-span-2 md:row-span-2",
    svg: (
      <svg viewBox="0 0 400 200" className="w-full h-40 mb-4">
        {[{ x: 10, label: "To Do", color: "#7B2FBE" }, { x: 140, label: "In Progress", color: "#F59E0B" }, { x: 270, label: "Done", color: "#10B981" }].map((col, ci) => (
          <g key={ci}>
            <rect x={col.x} y={0} width="120" height="195" rx="10" fill="#0E0919" />
            <text x={col.x + 12} y={18} fill={col.color} fontSize="9" fontFamily="Space Grotesk" fontWeight="700" style={{ textTransform: "uppercase" }}>{col.label}</text>
            {[28, 72].map((y, ri) => (
              <g key={ri}>
                <rect x={col.x + 8} y={y} width="104" height="36" rx="6" fill="#160D2A" />
                <rect x={col.x + 12} y={y + 4} width="3" height="28" rx="1.5" fill={col.color} />
                <rect x={col.x + 20} y={y + 8} width={50 + ri * 12} height="5" rx="2" fill="#4A3F6B" opacity="0.5" />
                <circle cx={col.x + 100} cy={y + 18} r="6" fill={ci === 0 ? "#3D1191" : ci === 1 ? "#5116B5" : "#2D0B6B"} />
                <rect x={col.x + 20} y={y + 22} width="30" height="4" rx="1" fill="#4A3F6B" opacity="0.25" />
              </g>
            ))}
          </g>
        ))}
      </svg>
    ),
  },
  {
    title: "Performance & KPI Tracking",
    desc: "Go beyond 'done.' Measure what matters.",
    span: "",
    svg: (
      <svg viewBox="0 0 160 80" className="w-full h-20 mb-4">
        <defs><linearGradient id="kpi-fill" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="rgba(6,182,212,0.3)" /><stop offset="100%" stopColor="transparent" /></linearGradient></defs>
        {/* Gridlines */}
        {[20, 35, 50, 65].map(y => <line key={y} x1="5" y1={y} x2="155" y2={y} stroke="rgba(6,182,212,0.08)" strokeWidth="0.5" />)}
        <polyline points="5,65 30,50 55,55 80,30 105,35 130,15 155,20" fill="none" stroke="#06B6D4" strokeWidth="2" />
        <polygon points="5,65 30,50 55,55 80,30 105,35 130,15 155,20 155,75 5,75" fill="url(#kpi-fill)" />
        {[5,30,55,80,105,130,155].map((x, i) => <circle key={i} cx={x} cy={[65,50,55,30,35,15,20][i]} r="3" fill="#06B6D4" />)}
      </svg>
    ),
  },
  {
    title: "Smart Calendar View",
    desc: "See all tasks, deadlines, and meetings at a glance.",
    span: "",
    svg: (
      <svg viewBox="0 0 140 100" className="w-full h-20 mb-4">
        {Array.from({ length: 28 }, (_, i) => {
          const x = (i % 7) * 18 + 5;
          const y = Math.floor(i / 7) * 18 + 5;
          const isToday = i === 14;
          return <rect key={i} x={x} y={y} width="15" height="15" rx="3" fill={isToday ? "#6B22D4" : "#160D2A"} stroke={isToday ? "#9333EA" : "none"} />;
        })}
        {/* Events spanning cells */}
        <rect x="23" y="27" width="33" height="3" rx="1" fill="#A855F7" opacity="0.6" />
        <rect x="59" y="45" width="33" height="3" rx="1" fill="#C084FC" opacity="0.4" />
        <rect x="5" y="63" width="51" height="3" rx="1" fill="#7B2FBE" opacity="0.5" />
      </svg>
    ),
  },
  {
    title: "Role-Based Access",
    desc: "Enterprise-grade security ensures the right people have the right access.",
    span: "",
    svg: (
      <svg viewBox="0 0 100 80" className="w-20 h-20 mb-4 mx-auto">
        <path d="M50 5L85 25v25c0 15-15 25-35 30C30 75 15 65 15 50V25L50 5z" fill="none" stroke="#A855F7" strokeWidth="1.5" />
        <circle cx="43" cy="38" r="6" fill="#7B2FBE" opacity="0.5" /><circle cx="57" cy="38" r="6" fill="#7B2FBE" opacity="0.5" />
        <rect x="36" y="48" width="14" height="4" rx="2" fill="#5116B5" /><rect x="50" y="48" width="14" height="4" rx="2" fill="#5116B5" />
        <rect x="45" y="16" width="10" height="10" rx="2" fill="none" stroke="#DDB6FF" strokeWidth="1" />
        <path d="M48 20l2 2 3-3" stroke="#DDB6FF" strokeWidth="1" fill="none" />
      </svg>
    ),
  },
  {
    title: "Collaboration + File Hub",
    desc: "Centralize all your communication, files, and schedules in one place.",
    span: "md:col-span-2",
    svg: (
      <div className="flex gap-6 mb-4">
        <svg viewBox="0 0 100 60" className="w-24 h-14">
          <rect x="5" y="10" width="60" height="35" rx="10" fill="#160D2A" />
          <rect x="12" y="18" width="40" height="4" rx="1" fill="#4A3F6B" opacity="0.4" />
          <rect x="12" y="26" width="28" height="4" rx="1" fill="#4A3F6B" opacity="0.3" />
          <circle cx="65" cy="20" r="10" fill="#3D1191" /><circle cx="75" cy="35" r="10" fill="#5116B5" /><circle cx="55" cy="35" r="10" fill="#2D0B6B" />
        </svg>
        <svg viewBox="0 0 80 60" className="w-20 h-14">
          <rect x="5" y="0" width="50" height="35" rx="4" fill="#160D2A" />
          <rect x="10" y="6" width="20" height="4" rx="1" fill="#A855F7" opacity="0.3" />
          <rect x="15" y="8" width="50" height="35" rx="4" fill="#1E1238" />
          <rect x="20" y="14" width="20" height="4" rx="1" fill="#06B6D4" opacity="0.3" />
          <rect x="25" y="16" width="50" height="35" rx="4" fill="#261645" />
          <rect x="30" y="22" width="20" height="4" rx="1" fill="#F59E0B" opacity="0.3" />
        </svg>
      </div>
    ),
  },
  {
    title: "Meeting Scheduler",
    desc: "Plan and document meetings linked to specific projects.",
    span: "",
    svg: (
      <svg viewBox="0 0 80 80" className="w-16 h-16 mb-4 mx-auto">
        <rect x="15" y="10" width="50" height="40" rx="8" fill="none" stroke="#A855F7" strokeWidth="1.5" />
        <line x1="15" y1="22" x2="65" y2="22" stroke="#A855F7" strokeWidth="1" opacity="0.4" />
        <path d="M30 35l8 8 12-12" stroke="#10B981" strokeWidth="2" fill="none" strokeLinecap="round" />
        <path d="M28 60c5 6 14 6 24 0" stroke="#C084FC" strokeWidth="1.5" fill="none" />
        <path d="M28 60c5-6 14-6 24 0" stroke="#C084FC" strokeWidth="1.5" fill="none" opacity="0.4" />
      </svg>
    ),
  },
];

export default function BentoSection() {
  return (
    <section className="relative py-24 section-deep overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center mb-16 reveal">
          <span className="section-label">Core Features</span>
          <h2 className="font-heading font-bold text-[32px] md:text-[52px] leading-tight mt-4" style={{ color: "hsl(270 60% 97%)" }}>
            Everything Your Team Needs. <span className="gradient-text">Nothing It Doesn't.</span>
          </h2>
          <p className="text-lg mt-4 max-w-md mx-auto" style={{ color: "hsl(260 23% 55%)" }}>OmniX is laser-focused on the workflows that matter.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((c, i) => (
            <div key={i} className={`bento-card group reveal ${c.span}`} style={{ transitionDelay: `${i * 120}ms` }}>
              <ArrowIcon />
              <div className="group-hover:[&_.arrow]:rotate-45">
                {typeof c.svg === "object" && "type" in c.svg ? c.svg : c.svg}
              </div>
              <h3 className="font-heading font-bold text-lg mb-2" style={{ color: "hsl(270 60% 97%)" }}>{c.title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: "hsl(258 88% 85%)" }}>{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
