const testimonials = [
  {
    quote: "As an operations executive, it enables me to sort out my tasks for my day, week, and beyond. It stores all my files in one organized repository. It saves me the budget of an assistant.",
    name: "Operations Executive",
    org: "MavenAiTech",
    initial: "O",
    color: "hsl(246,90%,68%)",
  },
  {
    quote: "The app has a clean interface and feels smooth to navigate. It looks promising and seems thoughtfully designed for an excellent user experience.",
    name: "Product Tester",
    org: "MavenAiTech",
    initial: "P",
    color: "hsl(183,100%,56%)",
  },
  {
    quote: "As OmniX's designer, it consolidates my entire creative workflow — timelines, assets, and feedback all in one place. It cuts the clutter and just lets me design.",
    name: "UI/UX Designer",
    org: "MavenAiTech",
    initial: "D",
    color: "hsl(38,95%,60%)",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="relative py-24 section-void overflow-hidden">
      <div className="glow-orb" style={{ width: 400, height: 400, bottom: "-10%", right: "10%", background: "hsla(183,100%,40%,0.06)" }} />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="text-center mb-16 reveal">
          <span className="section-label">Testimonials</span>
          <h2 className="font-heading font-800 mt-2" style={{ fontSize: "clamp(28px,4vw,48px)", lineHeight: 1.05, letterSpacing: "-0.03em" }}>
            What Our Team Is <span className="gradient-text">Saying</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <div key={i}
              className="reveal rounded-xl p-8 relative group overflow-hidden transition-all duration-300 hover:-translate-y-1"
              style={{ background: "hsl(var(--bg-surface))", border: "1px solid rgba(255,255,255,0.06)", transitionDelay: `${i * 100}ms` }}>

              {/* Large quote mark */}
              <div className="font-heading font-800 text-6xl leading-none mb-4 select-none"
                style={{ color: t.color, opacity: 0.15, lineHeight: 0.8 }}>
                "
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, j) => (
                  <svg key={j} width="12" height="12" viewBox="0 0 24 24" fill={t.color}>
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                ))}
              </div>

              <p className="text-sm leading-relaxed mb-8" style={{ color: "hsl(var(--text-secondary))", lineHeight: 1.75 }}>
                "{t.quote}"
              </p>

              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full flex items-center justify-center font-heading font-700 text-sm"
                  style={{ background: t.color + "20", color: t.color, border: `1px solid ${t.color}30` }}>
                  {t.initial}
                </div>
                <div>
                  <div className="text-sm font-500" style={{ color: "hsl(var(--text-primary))", fontFamily: "'DM Sans',sans-serif" }}>{t.name}</div>
                  <div className="mono text-xs" style={{ color: "hsl(var(--text-ghost))" }}>{t.org}</div>
                </div>
              </div>

              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
                style={{ background: `radial-gradient(circle at top left, ${t.color}06, transparent 60%)` }} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}