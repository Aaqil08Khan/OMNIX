const cases = [
  {
    num: "01",
    title: "Corporate Teams",
    subtitle: "Marketing, IT, HR",
    desc: "Manage complex projects, track departmental KPIs, and streamline cross-functional workflows across large organizations.",
    color: "hsl(var(--p400))",
    icon: "◈",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&q=80&auto=format",
  },
  {
    num: "02",
    title: "Startups",
    subtitle: "Small Businesses",
    desc: "Get a powerful all-in-one tool to stay organized and focused on growth, without the enterprise price tag or complexity.",
    color: "hsl(var(--ember))",
    icon: "◇",
    image: "https://images.unsplash.com/photo-1553028826-f4804a6dba3b?w=600&q=80&auto=format",
  },
  {
    num: "03",
    title: "Agencies",
    subtitle: "Project-Based & Consulting",
    desc: "Juggle multiple clients, manage resources, and keep every project on time and on budget — all in one place.",
    color: "hsl(var(--cyan))",
    icon: "⬡",
    image: "https://i.pinimg.com/1200x/b9/b5/b3/b9b5b3c87e8238e4e274a93ff9f57bac.jpg",
  },
  {
    num: "04",
    title: "Personal Use",
    subtitle: "Students & Freelancers",
    desc: "Organize your personal life. Manage freelance work, plan personal goals, or coordinate side projects with ease.",
    color: "hsl(var(--jade))",
    icon: "◉",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&q=80&auto=format",
  },
];

export default function UseCasesSection() {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="use-cases" className="relative py-28 bg-mid overflow-hidden">
      <div className="grid-bg opacity-40"/>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 reveal">
          <span className="section-tag">Use Cases</span>
          <h2 className="font-display mt-2" style={{ fontSize: "clamp(30px,4.5vw,56px)", lineHeight: 1.04, letterSpacing: "-0.03em" }}>
            Built For{" "}
            <span className="grad-primary">Every Kind</span> of Team
          </h2>
          <p className="text-lg mt-5 max-w-md mx-auto" style={{ color: "hsl(var(--t-muted))" }}>
            Whether you're a solo founder or a Fortune 500, OmniX scales with you effortlessly.
          </p>
        </div>

        {/* Case cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {cases.map((c, i) => (
            <div key={i}
              className="feat-card group reveal"
              style={{ transitionDelay: `${i * 80}ms`, padding: 0, overflow: "hidden" }}
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={c.image}
                  alt={c.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  style={{ filter: "brightness(0.35) saturate(0.5)" }}
                />
                <div className="absolute inset-0" style={{
                  background: `linear-gradient(135deg, ${c.color}25 0%, transparent 50%), linear-gradient(180deg, transparent 30%, hsl(var(--surface)) 100%)`
                }}/>
                {/* Badges */}
                <div className="absolute top-4 left-5 mono text-[10px]" style={{ color: "hsl(var(--t-ghost))", letterSpacing: "0.09em" }}>
                  {c.num}
                </div>
                <div className="absolute top-4 right-5 text-xl" style={{ color: c.color }}>{c.icon}</div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="mb-1.5" style={{ width: 28, height: 2, background: c.color, borderRadius: 1 }}/>
                <h3 className="font-display font-700 text-xl mb-1" style={{ color: "hsl(var(--t-primary))" }}>{c.title}</h3>
                <p className="mono text-[11px] mb-3" style={{ color: c.color, letterSpacing: "0.05em" }}>{c.subtitle}</p>
                <p className="text-[14px] leading-relaxed mb-5" style={{ color: "hsl(var(--t-muted))", lineHeight: 1.7 }}>{c.desc}</p>

                <button
                  className="flex items-center gap-2 text-[13px] transition-all group-hover:gap-3"
                  style={{ color: c.color, background: "none", border: "none", cursor: "pointer", fontFamily: "'Outfit',sans-serif", padding: 0 }}
                  onClick={scrollToContact}
                >
                  Get started
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </button>
              </div>

              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
                style={{ background: `radial-gradient(circle at bottom right, ${c.color}07, transparent 55%)` }}/>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}