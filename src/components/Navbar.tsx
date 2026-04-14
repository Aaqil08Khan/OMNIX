import { useState, useEffect } from "react";

const Logo = () => (
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
    <rect x="2" y="2" width="10" height="10" rx="2" fill="hsl(246,90%,68%)" />
    <rect x="16" y="2" width="10" height="10" rx="2" fill="rgba(139,160,255,0.3)" />
    <rect x="2" y="16" width="10" height="10" rx="2" fill="rgba(139,160,255,0.2)" />
    <rect x="16" y="16" width="10" height="10" rx="2" fill="hsl(183,100%,56%)" opacity="0.8" />
  </svg>
);

const navLinks = ["Features", "Why OmniX", "Use Cases", "Tech Stack", "Contact"];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMobileOpen(false);
    document.getElementById(id.toLowerCase().replace(/\s/g, "-"))?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-[1000] h-16 flex items-center justify-between px-6 lg:px-12"
        style={{
          background: scrolled ? "rgba(8,10,16,0.85)" : "transparent",
          backdropFilter: scrolled ? "blur(20px) saturate(180%)" : "none",
          borderBottom: scrolled ? "1px solid rgba(255,255,255,0.05)" : "1px solid transparent",
          transition: "all 0.3s ease",
        }}
      >
        {/* Logo */}
        <div className="flex items-center gap-3">
          <Logo />
          <span
            className="font-heading font-700 text-[17px] tracking-tight"
            style={{ color: "hsl(var(--text-primary))", letterSpacing: "-0.03em" }}
          >
            omni<span style={{ color: "hsl(183,100%,56%)" }}>X</span>
          </span>
          <span
            className="hidden sm:inline mono text-[10px] px-2 py-0.5 rounded"
            style={{
              color: "hsl(var(--electric-400))",
              border: "1px solid rgba(139,160,255,0.2)",
              background: "rgba(139,160,255,0.06)",
              letterSpacing: "0.08em",
            }}
          >
            BETA
          </span>
        </div>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-7">
          {navLinks.map((l) => (
            <button key={l} className="nav-link" onClick={() => scrollTo(l)}>
              {l}
            </button>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <button className="btn-ghost">Request Demo</button>
          <button className="btn-gradient">Get Early Access</button>
        </div>

        {/* Hamburger */}
        <button
          className="md:hidden p-2 rounded-lg"
          style={{ color: "hsl(var(--text-secondary))", background: "rgba(255,255,255,0.04)" }}
          onClick={() => setMobileOpen(true)}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-[1001] flex flex-col items-center justify-center gap-8"
          style={{ background: "rgba(8,10,16,0.97)", backdropFilter: "blur(32px)" }}
        >
          <button
            className="absolute top-5 right-6 p-2 rounded-lg"
            style={{ color: "hsl(var(--text-secondary))", background: "rgba(255,255,255,0.06)" }}
            onClick={() => setMobileOpen(false)}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
          {navLinks.map((l) => (
            <button
              key={l}
              className="font-heading text-xl"
              style={{ color: "hsl(var(--text-secondary))" }}
              onClick={() => scrollTo(l)}
            >
              {l}
            </button>
          ))}
          <button className="btn-gradient mt-4">Get Early Access</button>
        </div>
      )}
    </>
  );
}