const problems = [
  {
    title: "Scattered Information",
    desc: "Your data lives in five different apps. Nothing connects. Context is lost daily.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" strokeWidth="1.5">
        <rect x="2" y="2" width="9" height="12" rx="2" stroke="#A855F7" />
        <rect x="7" y="6" width="9" height="12" rx="2" stroke="#A855F7" opacity="0.6" />
        <rect x="12" y="10" width="9" height="12" rx="2" stroke="#A855F7" opacity="0.3" />
        <path d="M18 5l2 2m-2 0l2-2" stroke="#E11D7A" strokeWidth="2" />
      </svg>
    ),
  },
  {
    title: "Lack of Clarity",
    desc: "No one can see the big picture. Reports are manual. Goals feel disconnected from daily work.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#A855F7" strokeWidth="1.5">
        <circle cx="12" cy="14" r="8" />
        <circle cx="12" cy="14" r="3" />
        <path d="M11 4a1 1 0 011-1 1 1 0 011 1" stroke="#F59E0B" strokeWidth="2" fill="none" />
        <text x="11" y="7" fontSize="8" fill="#F59E0B" fontFamily="sans-serif" stroke="none">?</text>
      </svg>
    ),
  },
  {
    title: "Missed Deadlines",
    desc: "Tasks slip through the cracks. Reminders come too late, or not at all.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#A855F7" strokeWidth="1.5">
        <circle cx="12" cy="12" r="9" />
        <polyline points="12 6 12 12 16 14" />
        <path d="M18 4l2 2m-2 0l2-2" stroke="rgba(239,68,68,0.6)" strokeWidth="2" />
      </svg>
    ),
  },
  {
    title: "Wasted Time",
    desc: "Hours spent switching between tools, syncing data, and updating spreadsheets by hand.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#A855F7" strokeWidth="1.5">
        <path d="M7 3h10M7 21h10" />
        <path d="M8 3v4c0 2 4 4 4 6s-4 4-4 6v2" />
        <path d="M16 3v4c0 2-4 4-4 6s4 4 4 6v2" />
        <circle cx="12" cy="12" r="1" fill="#A855F7" />
        <circle cx="11" cy="14" r="0.7" fill="#A855F7" opacity="0.6" />
        <circle cx="13" cy="15" r="0.5" fill="#A855F7" opacity="0.4" />
      </svg>
    ),
  },
];

export default function ProblemSection() {
  return (
    <section className="relative py-24 section-void overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-1/2 pointer-events-none" style={{ background: "radial-gradient(ellipse at 100% 0%, rgba(180,30,30,0.04), transparent 60%)" }} />
      <div className="container mx-auto px-6 max-w-[900px] relative z-10">
        <div className="text-center mb-16 reveal">
          <span className="section-label">The Challenge</span>
          <h2 className="font-heading font-bold text-[32px] md:text-[52px] leading-tight mt-4" style={{ color: "hsl(270 60% 97%)" }}>
            Modern Teams Are <span className="gradient-text">Drowning</span> In Tool Overload
          </h2>
          <p className="text-lg mt-4 max-w-lg mx-auto" style={{ color: "hsl(260 23% 55%)" }}>
            Work is scattered. Deadlines are missed. No one has clarity. Sound familiar?
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {problems.map((p, i) => (
            <div key={i} className="feature-card reveal" style={{ background: "rgba(22,13,42,0.65)" }}>
              <div className="w-11 h-11 rounded-full flex items-center justify-center mb-4" style={{ background: "rgba(123,47,190,0.18)" }}>
                {p.icon}
              </div>
              <h3 className="font-heading font-bold text-lg mb-2" style={{ color: "hsl(270 60% 97%)" }}>{p.title}</h3>
              <p className="text-[15px] leading-relaxed" style={{ color: "hsl(258 88% 85%)" }}>{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
