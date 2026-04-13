const testimonials = [
  {
    quote: "As an operations executive, it enables me to sort out my tasks for my day, week, and beyond. It stores all my files in one organized repository. It saves me the budget of an assistant.",
    name: "Operations Executive, MavenAiTech",
  },
  {
    quote: "The app has a clean interface and feels smooth to navigate. It looks promising and seems thoughtfully designed for an excellent user experience.",
    name: "Product Tester, MavenAiTech",
  },
  {
    quote: "As OmniX's designer, it consolidates my entire creative workflow — timelines, assets, and feedback all in one place. It cuts the clutter and just lets me design.",
    name: "UI/UX Designer, MavenAiTech",
  },
];

const QuoteMark = () => (
  <svg width="80" height="60" viewBox="0 0 80 60" className="absolute top-4 left-4" fill="rgba(147,51,234,0.18)">
    <path d="M20 45c-8 0-14-6-14-14 0-12 8-22 20-27l3 5c-8 4-12 10-12 16 0 1 0 2 1 2 2-2 4-3 7-3 5 0 9 4 9 9s-4 12-14 12zm38 0c-8 0-14-6-14-14 0-12 8-22 20-27l3 5c-8 4-12 10-12 16 0 1 0 2 1 2 2-2 4-3 7-3 5 0 9 4 9 9s-4 12-14 12z" />
  </svg>
);

const StarIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="#A855F7"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /></svg>
);

const AvatarSvg = () => (
  <svg width="36" height="36" viewBox="0 0 36 36">
    <defs><linearGradient id="av-grad" x1="0" y1="0" x2="36" y2="36"><stop offset="0%" stopColor="#4338CA" /><stop offset="100%" stopColor="#7B2FBE" /></linearGradient></defs>
    <circle cx="18" cy="18" r="18" fill="url(#av-grad)" />
    <circle cx="18" cy="14" r="5" fill="rgba(255,255,255,0.3)" />
    <ellipse cx="18" cy="28" rx="8" ry="6" fill="rgba(255,255,255,0.2)" />
  </svg>
);

export default function TestimonialsSection() {
  return (
    <section className="relative py-24 section-mid overflow-hidden">
      <div className="absolute bottom-0 right-0 w-1/2 h-1/2 pointer-events-none" style={{ background: "radial-gradient(ellipse at 80% 80%, rgba(123,47,190,0.08), transparent 60%)" }} />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="text-center mb-16 reveal">
          <span className="section-label">Testimonials</span>
          <h2 className="font-heading font-bold text-[32px] md:text-[44px] leading-tight mt-4" style={{ color: "hsl(270 60% 97%)" }}>
            What Our Team Is <span className="gradient-text">Saying</span>
          </h2>
          <p className="text-lg mt-4" style={{ color: "hsl(260 23% 55%)" }}>Real feedback from early adopters and team members.</p>
        </div>

        <div className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory lg:grid lg:grid-cols-3 lg:overflow-visible">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="min-w-[85vw] sm:min-w-[300px] lg:min-w-0 snap-start relative p-8 rounded-2xl transition-all duration-300 hover:-translate-y-1.5 reveal"
              style={{ background: "rgba(22,13,42,0.85)", border: "1px solid rgba(139,92,246,0.22)" }}
            >
              <QuoteMark />
              <div className="flex gap-1 mb-4 mt-6">
                {[0,1,2,3,4].map(j => <StarIcon key={j} />)}
              </div>
              <p className="text-sm leading-relaxed mb-6 italic" style={{ color: "hsl(258 88% 85%)", lineHeight: "1.7" }}>"{t.quote}"</p>
              <div className="flex items-center gap-3">
                <AvatarSvg />
                <span className="text-sm font-heading" style={{ color: "hsl(260 23% 55%)" }}>{t.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
