const navLinks = ["Features", "Why OmniX", "Use Cases", "Tech Stack", "Contact"];

export default function Footer() {
  return (
    <footer className="section-void py-16" style={{ borderTop: "1px solid rgba(139,92,246,0.12)" }}>
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Left */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M13 2L4.09 12.63a1 1 0 00.78 1.62H11l-1 7.75L19.91 11.37a1 1 0 00-.78-1.62H13l1-7.75z" fill="url(#f-bolt)" /><defs><linearGradient id="f-bolt" x1="4" y1="2" x2="20" y2="22"><stop offset="0%" stopColor="#A855F7" /><stop offset="100%" stopColor="#C026D3" /></linearGradient></defs></svg>
              <span className="font-heading font-bold text-lg text-omnix-text-primary">omnix</span>
            </div>
            <p className="text-omnix-text-muted text-sm mb-2">An Initiative for the Future</p>
            <p className="text-omnix-text-ghost text-xs">Developed by MavenAiTech</p>
          </div>

          {/* Center */}
          <div className="flex flex-col items-start md:items-center gap-3">
            {navLinks.map(l => (
              <button key={l} className="nav-link font-body text-sm">{l}</button>
            ))}
          </div>

          {/* Right */}
          <div className="md:text-right space-y-2">
            <p className="text-omnix-text-primary font-heading font-semibold text-sm mb-3">Get in Touch</p>
            <p className="text-omnix-text-muted text-xs">+966 51 025 8383 (KSA)</p>
            <p className="text-omnix-text-muted text-xs">+91 93814 72914 (IND)</p>
            <p className="text-omnix-text-muted text-xs">info@mavenaitech.com</p>
            <p className="text-omnix-text-muted text-xs">www.mavenaitech.com</p>
          </div>
        </div>

        <div className="text-center text-omnix-text-ghost text-xs pt-8" style={{ borderTop: "1px solid rgba(139,92,246,0.08)" }}>
          © 2025 MavenAiTech. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
