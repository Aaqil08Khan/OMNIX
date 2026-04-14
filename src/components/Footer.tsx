const navLinks = ["Features", "Why OmniX", "Use Cases", "Tech Stack", "Contact"];

export default function Footer() {
  return (
    <footer className="section-void py-12 relative" style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}>
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <svg width="24" height="24" viewBox="0 0 28 28" fill="none">
                <rect x="2" y="2" width="10" height="10" rx="2" fill="hsl(246,90%,68%)" />
                <rect x="16" y="2" width="10" height="10" rx="2" fill="rgba(139,160,255,0.3)" />
                <rect x="2" y="16" width="10" height="10" rx="2" fill="rgba(139,160,255,0.2)" />
                <rect x="16" y="16" width="10" height="10" rx="2" fill="hsl(183,100%,56%)" opacity="0.8" />
              </svg>
              <span className="font-heading font-700 text-[17px]" style={{ letterSpacing: "-0.03em", color: "hsl(var(--text-primary))" }}>
                omni<span style={{ color: "hsl(183,100%,56%)" }}>X</span>
              </span>
            </div>
            <p className="text-sm mb-1" style={{ color: "hsl(var(--text-ghost))" }}>An Initiative for the Future</p>
            <p className="mono text-xs" style={{ color: "hsl(var(--electric-800))", letterSpacing: "0.04em" }}>by MavenAiTech</p>
          </div>

          <div className="flex flex-col gap-3">
            {navLinks.map(l => (
              <button key={l} className="nav-link text-left text-sm w-fit">{l}</button>
            ))}
          </div>

          <div className="space-y-2 md:text-right">
            <p className="font-heading font-600 text-sm mb-3" style={{ color: "hsl(var(--text-secondary))" }}>Get in Touch</p>
            {["+966 51 025 8383 (KSA)","+91 93814 72914 (IND)","info@mavenaitech.com","www.mavenaitech.com"].map((v, i) => (
              <p key={i} className="mono text-xs" style={{ color: "hsl(var(--text-ghost))", letterSpacing: "0.02em" }}>{v}</p>
            ))}
          </div>
        </div>

        <div className="pt-8 flex items-center justify-between flex-wrap gap-4" style={{ borderTop: "1px solid rgba(255,255,255,0.04)" }}>
          <p className="mono text-xs" style={{ color: "hsl(var(--text-ghost))", letterSpacing: "0.04em" }}>
            © 2025 MavenAiTech. All rights reserved.
          </p>
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full" style={{ background: "hsl(183,100%,56%)", boxShadow: "0 0 6px hsl(183,100%,56%)" }} />
            <span className="mono text-xs" style={{ color: "hsl(var(--text-ghost))", letterSpacing: "0.04em" }}>All systems operational</span>
          </div>
        </div>
      </div>
    </footer>
  );
}