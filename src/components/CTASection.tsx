export default function CTASection() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="contact" className="relative py-32 overflow-hidden" style={{ background: "hsl(var(--void))" }}>
      <div className="grid-bg opacity-55"/>

      {/* Background image */}
      <div className="absolute inset-0 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600&q=80&auto=format"
          alt="Office space"
          className="w-full h-full object-cover opacity-[0.04]"
        />
      </div>

      {/* Glow */}
      <div className="glow-blob" style={{ width: 800, height: 800, top: "50%", left: "50%", transform: "translate(-50%,-50%)", background: "hsla(248,72%,46%,0.16)" }}/>

      {/* Top/Bottom gradient lines */}
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "linear-gradient(90deg, transparent, rgba(110,130,255,0.25), transparent)" }}/>
      <div className="absolute bottom-0 left-0 right-0 h-px" style={{ background: "linear-gradient(90deg, transparent, rgba(110,130,255,0.12), transparent)" }}/>

      <div className="container mx-auto px-6 lg:px-12 text-center relative z-10">
        <div className="max-w-3xl mx-auto reveal">
          <span className="section-tag mx-auto">Get Started</span>
          <h2 className="font-display mt-2 mb-6"
            style={{ fontSize: "clamp(38px,6vw,76px)", lineHeight: 1.02, letterSpacing: "-0.04em" }}>
            Ready to Bring<br/>
            <span className="grad-primary">Clarity to Your Work?</span>
          </h2>
          <p className="text-lg mb-12 max-w-xl mx-auto" style={{ color: "hsl(var(--t-muted))", lineHeight: 1.72 }}>
            Stop juggling tools. Start driving results. Schedule a 15-minute personalized demo with the MavenAiTech team today.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            <button className="btn-primary text-base py-4 px-8" onClick={() => scrollTo("contact")}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="4" width="18" height="18" rx="3"/>
                <line x1="3" y1="10" x2="21" y2="10"/>
                <path d="M9 15l2 2 4-4" stroke="hsl(var(--jade))" strokeWidth="2"/>
              </svg>
              Schedule a Demo
            </button>
            <button className="btn-ghost text-base py-4 px-8" onClick={() => scrollTo("contact")}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="2" y="4" width="20" height="16" rx="3"/>
                <polyline points="2 4 12 13 22 4"/>
              </svg>
              Contact Us
            </button>
          </div>

          {/* Contact grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-12">
            {[
              { label: "KSA Office", value: "+966 51 025 8383", icon: "📞" },
              { label: "India Office", value: "+91 93814 72914", icon: "📞" },
              { label: "Email", value: "info@mavenaitech.com", icon: "✉️" },
              { label: "Website", value: "mavenaitech.com", icon: "🌐" },
            ].map((c, i) => (
              <div key={i} className="rounded-2xl p-4 text-left card-glass">
                <div className="text-base mb-2">{c.icon}</div>
                <div className="mono text-[10px] mb-1.5" style={{ color: "hsl(var(--t-ghost))", letterSpacing: "0.09em" }}>
                  {c.label}
                </div>
                <div className="text-[12.5px] font-500 break-all" style={{ color: "hsl(var(--t-secondary))", fontFamily: "'Outfit',sans-serif" }}>
                  {c.value}
                </div>
              </div>
            ))}
          </div>

          {/* Team photo strip */}
          <div className="flex items-center justify-center gap-2">
            <div className="flex -space-x-3">
              {[
                "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=60&q=80&auto=format",
                "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=60&q=80&auto=format",
                "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=60&q=80&auto=format",
                "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=60&q=80&auto=format",
              ].map((src, i) => (
                <img key={i} src={src} alt="Team member"
                  className="w-9 h-9 rounded-full object-cover"
                  style={{ border: "2px solid hsl(var(--void))" }}
                />
              ))}
            </div>
            <p className="text-[13px] ml-2" style={{ color: "hsl(var(--t-muted))" }}>
              Our team is ready to give you a personal demo
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}