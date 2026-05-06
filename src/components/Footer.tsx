const Logo = () => (
  <svg width="26" height="26" viewBox="0 0 32 32" fill="none">
    <rect x="2" y="2" width="12" height="12" rx="3" fill="hsl(248,90%,66%)"/>
    <rect x="18" y="2" width="12" height="12" rx="3" fill="rgba(110,130,255,0.28)"/>
    <rect x="2" y="18" width="12" height="12" rx="3" fill="rgba(110,130,255,0.18)"/>
    <rect x="18" y="18" width="12" height="12" rx="3" fill="hsl(186,100%,54%)" opacity="0.85"/>
  </svg>
);

const navLinks = [
  { label: "Features", id: "features" },
  { label: "Migration", id: "migration" },
  { label: "Why Vaize", id: "why-vaize" },
  { label: "Use Cases", id: "use-cases" },
  { label: "Contact", id: "contact" },
];

export default function Footer() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="relative py-14 bg-void overflow-hidden" style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}>
      <div className="grid-bg opacity-30"/>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="flex items-center gap-3 mb-4"
              style={{ background: "none", border: "none", cursor: "pointer", padding: 0 }}
            >
              <Logo/>
              <span className="font-display font-700 text-[17px]" style={{ color: "hsl(var(--t-primary))", letterSpacing: "-0.04em" }}>
                Vaize
              </span>
            </button>
            <p className="text-[13.5px] mb-1" style={{ color: "hsl(var(--t-ghost))" }}>An Initiative for the Future</p>
            <p className="mono text-[11px]" style={{ color: "hsl(var(--p800))", letterSpacing: "0.05em" }}>by MavenAiTech</p>

            {/* Status indicator */}
            <div className="flex items-center gap-2 mt-5">
              <div className="w-1.5 h-1.5 rounded-full" style={{ background: "hsl(var(--jade))", boxShadow: "0 0 6px hsl(var(--jade))" }}/>
              <span className="mono text-[10px]" style={{ color: "hsl(var(--t-ghost))" }}>All systems operational</span>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex flex-col gap-3">
            <p className="font-display font-600 text-[13px] mb-1" style={{ color: "hsl(var(--t-secondary))" }}>Navigation</p>
            {navLinks.map(l => (
              <button
                key={l.id}
                className="nav-item text-left text-[13.5px]"
                onClick={() => scrollTo(l.id)}
                style={{ color: "hsl(var(--t-ghost))", fontSize: 13 }}
              >
                {l.label}
              </button>
            ))}
          </div>

          {/* Contact */}
          <div className="space-y-2">
            <p className="font-display font-600 text-[13px] mb-3" style={{ color: "hsl(var(--t-secondary))" }}>Get in Touch</p>
            {[
              { label: "KSA", val: "+966 51 025 8383" },
              { label: "IND", val: "+91 93814 72914" },
              { label: "Mail", val: "info@mavenaitech.com" },
              { label: "Web", val: "www.mavenaitech.com" },
            ].map((c, i) => (
              <div key={i} className="flex items-center gap-2">
                <span className="mono text-[9px] w-6" style={{ color: "hsl(var(--p700))", letterSpacing: "0.06em" }}>{c.label}</span>
                <span className="mono text-[11px]" style={{ color: "hsl(var(--t-ghost))" }}>{c.val}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex items-center justify-between flex-wrap gap-4"
          style={{ borderTop: "1px solid rgba(255,255,255,0.04)" }}>
          <p className="mono text-[11px]" style={{ color: "hsl(var(--t-ghost))", letterSpacing: "0.05em" }}>
            © 2025 MavenAiTech. All rights reserved.
          </p>
          <div className="flex items-center gap-5">
            <span className="mono text-[11px]" style={{ color: "hsl(var(--t-ghost))" }}>Privacy</span>
            <span className="mono text-[11px]" style={{ color: "hsl(var(--t-ghost))" }}>Terms</span>
            <span className="mono text-[11px]" style={{ color: "hsl(var(--t-ghost))" }}>Security</span>
          </div>
        </div>
      </div>
    </footer>
  );
}