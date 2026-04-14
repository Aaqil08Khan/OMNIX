export default function CTASection() {
  return (
    <section id="contact" className="relative py-28 overflow-hidden" style={{ background: "hsl(var(--bg-void))" }}>
      <div className="grid-overlay opacity-40" />
      <div className="glow-orb" style={{ width: 700, height: 700, top: "50%", left: "50%", transform: "translate(-50%,-50%)", background: "hsla(246,72%,48%,0.15)" }} />

      {/* Decorative lines */}
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "linear-gradient(90deg, transparent, rgba(139,160,255,0.2), transparent)" }} />
      <div className="absolute bottom-0 left-0 right-0 h-px" style={{ background: "linear-gradient(90deg, transparent, rgba(139,160,255,0.1), transparent)" }} />

      <div className="container mx-auto px-6 lg:px-12 text-center relative z-10">
        <div className="max-w-3xl mx-auto reveal">
          <span className="section-label">Get Started</span>
          <h2 className="font-heading font-800 mt-2 mb-6" style={{ fontSize: "clamp(36px,6vw,72px)", lineHeight: 1.02, letterSpacing: "-0.04em" }}>
            Ready to Bring<br />
            <span className="gradient-text">Clarity to Your Work?</span>
          </h2>
          <p className="text-lg mb-10 max-w-xl mx-auto" style={{ color: "hsl(var(--text-muted))", lineHeight: 1.7 }}>
            Stop juggling tools. Start driving results. Schedule a 15-minute personalized demo with the MavenAiTech team today.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-14">
            <button className="btn-gradient flex items-center gap-2">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="4" width="18" height="18" rx="3"/><line x1="3" y1="10" x2="21" y2="10"/>
                <path d="M9 15l2 2 4-4" stroke="#34d399" strokeWidth="2"/>
              </svg>
              Schedule a Demo
            </button>
            <button className="btn-ghost flex items-center gap-2">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="2" y="4" width="20" height="16" rx="3"/><polyline points="2 4 12 13 22 4"/>
              </svg>
              Contact Us
            </button>
          </div>

          {/* Contact grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              { label: "KSA Office", value: "+966 51 025 8383" },
              { label: "India Office", value: "+91 93814 72914" },
              { label: "Email", value: "info@mavenaitech.com" },
              { label: "Website", value: "mavenaitech.com" },
            ].map((c, i) => (
              <div key={i} className="rounded-xl p-4 text-left"
                style={{ background: "hsl(var(--bg-surface))", border: "1px solid rgba(255,255,255,0.05)" }}>
                <div className="mono text-[10px] mb-1" style={{ color: "hsl(var(--text-ghost))", letterSpacing: "0.08em" }}>
                  {c.label}
                </div>
                <div className="text-sm font-500 truncate" style={{ color: "hsl(var(--text-secondary))", fontFamily: "'DM Sans',sans-serif" }}>
                  {c.value}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}