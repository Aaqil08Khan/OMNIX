const cases = [
  {
    title: "Corporate Teams (Marketing, IT, HR)",
    desc: "Manage complex projects, track departmental KPIs, and streamline cross-functional workflows.",
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
        <rect x="10" y="16" width="20" height="16" rx="3" fill="none" stroke="#A855F7" strokeWidth="1.5" />
        <rect x="14" y="8" width="12" height="10" rx="2" fill="#7B2FBE" opacity="0.4" />
        <circle cx="16" cy="28" r="2" fill="#5116B5" /><circle cx="20" cy="28" r="2" fill="#5116B5" /><circle cx="24" cy="28" r="2" fill="#5116B5" />
      </svg>
    ),
  },
  {
    title: "Small Businesses & Startups",
    desc: "Get a powerful all-in-one tool to stay organized and focused on growth, without enterprise cost.",
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
        <path d="M20 4L23 12H28L24 18L27 32L20 26L13 32L16 18L12 12H17L20 4z" fill="none" stroke="#A855F7" strokeWidth="1.5" />
        <path d="M15 36 C18 34 22 34 25 36" stroke="#A855F7" strokeWidth="1" strokeDasharray="2 2" />
        <circle cx="14" cy="38" r="1" fill="#A855F7" opacity="0.4" />
        <circle cx="26" cy="38" r="1" fill="#A855F7" opacity="0.4" />
        <path d="M18 22l2 3 4-5" stroke="#10B981" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    title: "Project-Based Agencies & Consulting",
    desc: "Juggle multiple clients, manage resources, and keep projects on time and on budget.",
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
        <rect x="10" y="14" width="20" height="16" rx="3" fill="none" stroke="#A855F7" strokeWidth="1.5" />
        <rect x="14" y="10" width="12" height="6" rx="1" fill="#7B2FBE" opacity="0.4" />
        <rect x="14" y="20" width="12" height="2" rx="0.5" fill="#4A3F6B" opacity="0.5" />
        <rect x="14" y="24" width="8" height="2" rx="0.5" fill="#4A3F6B" opacity="0.3" />
        <path d="M22 22l2 2 4-4" stroke="#10B981" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    title: "Students & General Public",
    desc: "Organize your personal life. Manage freelance work, plan personal goals, or coordinate family tasks.",
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
        <path d="M8 18l12-8 12 8-12 8z" fill="none" stroke="#A855F7" strokeWidth="1.5" />
        <path d="M14 22v6c0 2 3 4 6 4s6-2 6-4v-6" fill="none" stroke="#C084FC" strokeWidth="1.5" />
        <line x1="32" y1="18" x2="32" y2="28" stroke="#A855F7" strokeWidth="1.5" />
        <rect x="14" y="34" width="12" height="2" rx="0.5" fill="#4A3F6B" opacity="0.4" />
        <rect x="16" y="37" width="8" height="1.5" rx="0.5" fill="#4A3F6B" opacity="0.3" />
      </svg>
    ),
  },
];

export default function UseCasesSection() {
  return (
    <section id="use-cases" className="relative py-24 section-mid overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center mb-16 reveal">
          <span className="section-label">Use Cases</span>
          <h2 className="font-heading font-bold text-[32px] md:text-[52px] leading-tight mt-4" style={{ color: "hsl(270 60% 97%)" }}>
            Built For <span className="gradient-text">Every Kind</span> of Team
          </h2>
          <p className="text-lg mt-4 max-w-md mx-auto" style={{ color: "hsl(260 23% 55%)" }}>Whether you're a solo founder or a Fortune 500, OmniX scales with you.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {cases.map((c, i) => (
            <div key={i} className="feature-card use-case-card reveal group">
              <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-4" style={{ background: "rgba(123,47,190,0.15)" }}>
                {c.icon}
              </div>
              <h3 className="font-heading font-bold text-lg mb-2" style={{ color: "hsl(270 60% 97%)" }}>{c.title}</h3>
              <p className="text-sm leading-relaxed mb-4" style={{ color: "hsl(258 88% 85%)" }}>{c.desc}</p>
              <span className="text-sm font-body flex items-center gap-1" style={{ color: "hsl(271 91% 65%)" }}>
                Learn More
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="transition-transform duration-200 group-hover:translate-x-1"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
