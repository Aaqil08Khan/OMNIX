const techs = [
  {
    title: "Programming Language",
    desc: "Server-side logic and API development. Powers the brain of OmniX.",
    icon: (
      <svg width="56" height="56" viewBox="0 0 56 56" fill="none">
        <rect x="4" y="4" width="48" height="48" rx="14" fill="rgba(123,47,190,0.12)" />
        <text x="14" y="38" fill="#C084FC" fontSize="24" fontFamily="monospace">&lt;/&gt;</text>
      </svg>
    ),
  },
  {
    title: "Database",
    desc: "Secure, organized, and optimized data storage for every workspace.",
    icon: (
      <svg width="56" height="56" viewBox="0 0 56 56" fill="none">
        <rect x="4" y="4" width="48" height="48" rx="14" fill="rgba(123,47,190,0.12)" />
        <ellipse cx="28" cy="18" rx="12" ry="5" fill="none" stroke="#C084FC" strokeWidth="1.5" />
        <path d="M16 18v10c0 2.8 5.4 5 12 5s12-2.2 12-5V18" fill="none" stroke="#C084FC" strokeWidth="1.5" />
        <path d="M16 28v10c0 2.8 5.4 5 12 5s12-2.2 12-5V28" fill="none" stroke="#A855F7" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    title: "UI Library",
    desc: "Creating the interactive, beautiful visual layer for users.",
    icon: (
      <svg width="56" height="56" viewBox="0 0 56 56" fill="none">
        <rect x="4" y="4" width="48" height="48" rx="14" fill="rgba(123,47,190,0.12)" />
        <rect x="14" y="14" width="16" height="16" rx="5" fill="none" stroke="#C084FC" strokeWidth="1.5" />
        <rect x="22" y="22" width="16" height="16" rx="5" fill="none" stroke="#A855F7" strokeWidth="1.5" />
        <rect x="30" y="30" width="12" height="12" rx="4" fill="none" stroke="#7B2FBE" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    title: "Native Bridge",
    desc: "Packages web code into native iOS and Android apps seamlessly.",
    icon: (
      <svg width="56" height="56" viewBox="0 0 56 56" fill="none">
        <rect x="4" y="4" width="48" height="48" rx="14" fill="rgba(123,47,190,0.12)" />
        <rect x="10" y="20" width="12" height="18" rx="3" fill="none" stroke="#C084FC" strokeWidth="1.5" />
        <rect x="34" y="20" width="12" height="18" rx="3" fill="none" stroke="#A855F7" strokeWidth="1.5" />
        <path d="M22 29 C26 24 30 24 34 29" stroke="#DDB6FF" strokeWidth="1.5" fill="none" />
        <path d="M22 29 C26 34 30 34 34 29" stroke="#DDB6FF" strokeWidth="1.5" fill="none" opacity="0.4" />
      </svg>
    ),
  },
];

export default function TechStackSection() {
  return (
    <section id="tech-stack" className="relative py-24 section-deep overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: "radial-gradient(rgba(139,92,246,0.07) 1px, transparent 1px)", backgroundSize: "28px 28px" }} />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="text-center mb-16 reveal">
          <span className="section-label">Tech Stack</span>
          <h2 className="font-heading font-bold text-[32px] md:text-[44px] leading-tight mt-4" style={{ color: "hsl(270 60% 97%)" }}>
            Built With Modern, <span className="gradient-text">Battle-Tested Technology</span>
          </h2>
          <p className="text-lg mt-4 max-w-lg mx-auto" style={{ color: "hsl(260 23% 55%)" }}>Every layer of OmniX is designed for performance, reliability, and scale.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {techs.map((t, i) => (
            <div key={i} className="tech-card text-center reveal">
              <div className="flex justify-center mb-4">{t.icon}</div>
              <h3 className="font-heading font-bold text-lg mb-2" style={{ color: "hsl(270 60% 97%)" }}>{t.title}</h3>
              <p className="text-sm" style={{ color: "hsl(258 88% 85%)" }}>{t.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
