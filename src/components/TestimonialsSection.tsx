const testimonials = [
  {
    quote: "As an operations executive, it enables me to sort out my tasks for my day, week, and beyond. It stores all my files in one organized repository. It saves me the budget of an assistant.",
    name: "Operations Executive",
    org: "MavenAiTech",
    initial: "O",
    color: "hsl(var(--p400))",
    avatar: "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=80&q=80&auto=format",
    rating: 5,
  },
  {
    quote: "The app has a clean interface and feels smooth to navigate. It looks promising and seems thoughtfully designed for an excellent user experience. Game-changer for our team.",
    name: "Product Tester",
    org: "MavenAiTech",
    initial: "P",
    color: "hsl(var(--cyan))",
    avatar: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=80&q=80&auto=format",
    rating: 5,
  },
  {
    quote: "As OmniX's designer, it consolidates my entire creative workflow — timelines, assets, and feedback all in one place. It cuts the clutter and just lets me design.",
    name: "UI/UX Designer",
    org: "MavenAiTech",
    initial: "D",
    color: "hsl(var(--ember))",
    avatar: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=80&q=80&auto=format",
    rating: 5,
  },
];

export default function TestimonialsSection() {
  return (
    <section className="relative py-28 bg-void overflow-hidden">
      <div className="glow-blob" style={{ width: 500, height: 500, bottom: "-10%", right: "10%", background: "hsla(186,80%,38%,0.07)" }}/>
      <div className="glow-blob" style={{ width: 400, height: 400, top: "5%", left: "5%", background: "hsla(248,70%,40%,0.07)" }}/>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 reveal">
          <span className="section-tag">Testimonials</span>
          <h2 className="font-display mt-2" style={{ fontSize: "clamp(30px,4.5vw,52px)", lineHeight: 1.04, letterSpacing: "-0.03em" }}>
            What Our Team Is <span className="grad-primary">Saying</span>
          </h2>
          <p className="text-lg mt-4 max-w-md mx-auto" style={{ color: "hsl(var(--t-muted))" }}>
            Early feedback from our beta users and internal team members.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <div key={i}
              className="feat-card group reveal"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              {/* Stars */}
              <div className="flex gap-1 mb-5">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <svg key={j} width="14" height="14" viewBox="0 0 24 24" fill={t.color}>
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                ))}
              </div>

              {/* Quote mark */}
              <div className="font-display font-700 text-5xl leading-none mb-4 select-none"
                style={{ color: t.color, opacity: 0.18, lineHeight: 0.8, fontFamily: "Georgia, serif" }}>
                "
              </div>

              <p className="text-[14px] leading-relaxed mb-8" style={{ color: "hsl(var(--t-secondary))", lineHeight: 1.76 }}>
                "{t.quote}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 mt-auto">
                <div className="relative flex-shrink-0">
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="w-10 h-10 rounded-full object-cover"
                    style={{ border: `2px solid ${t.color}40` }}
                  />
                  <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full"
                    style={{ background: "hsl(var(--jade))", border: "2px solid hsl(var(--surface))", boxShadow: "0 0 6px hsl(var(--jade))" }}/>
                </div>
                <div>
                  <div className="font-display font-600 text-[13px]" style={{ color: "hsl(var(--t-primary))" }}>{t.name}</div>
                  <div className="mono text-[11px]" style={{ color: "hsl(var(--t-ghost))" }}>{t.org}</div>
                </div>
              </div>

              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
                style={{ background: `radial-gradient(circle at top left, ${t.color}07, transparent 55%)` }}/>
            </div>
          ))}
        </div>

        {/* Logos / trust strip */}
        <div className="mt-16 text-center reveal">
          <p className="mono text-[11px] mb-6" style={{ color: "hsl(var(--t-ghost))", letterSpacing: "0.1em" }}>
            // USED BY TEAMS ACROSS INDUSTRIES
          </p>
          <div className="flex flex-wrap justify-center gap-8 items-center opacity-30">
            {["TECH CO.", "STARTUP INC.", "AGENCY LTD.", "ENTERPRISE CORP.", "STUDIO LLC."].map((name, i) => (
              <span key={i} className="font-display font-600 text-sm" style={{ color: "hsl(var(--t-muted))", letterSpacing: "0.12em" }}>
                {name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}