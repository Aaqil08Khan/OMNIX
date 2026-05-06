import { useState, useEffect } from "react";

const Logo = () => (
  <svg width="30" height="30" viewBox="0 0 32 32" fill="none">
    <rect x="2" y="2" width="12" height="12" rx="3" fill="hsl(248,90%,66%)" />
    <rect x="18" y="2" width="12" height="12" rx="3" fill="rgba(110,130,255,0.28)" />
    <rect x="2" y="18" width="12" height="12" rx="3" fill="rgba(110,130,255,0.18)" />
    <rect x="18" y="18" width="12" height="12" rx="3" fill="hsl(186,100%,54%)" opacity="0.85" />
  </svg>
);

const navLinks = [
  { label: "Features", id: "features" },      // BentoSection
  { label: "Migration", id: "migration" },      // MigrationEngine
  { label: "Why Vaize", id: "why-vaize" },
  { label: "Use Cases", id: "use-cases" },
  { label: "Contact", id: "contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 60);

      // Track active section
      const sections = navLinks.map(l => document.getElementById(l.id));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = sections[i];
        if (el && el.getBoundingClientRect().top <= 120) {
          setActiveSection(navLinks[i].id);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMobileOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-[1000] flex items-center justify-between px-6 lg:px-12"
        style={{
          height: scrolled ? "60px" : "68px",
          background: scrolled ? "rgba(6,8,18,0.88)" : "transparent",
          backdropFilter: scrolled ? "blur(24px) saturate(160%)" : "none",
          borderBottom: scrolled ? "1px solid rgba(255,255,255,0.055)" : "1px solid transparent",
          transition: "all 0.35s cubic-bezier(0.4,0,0.2,1)",
        }}
      >
        {/* Logo */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="flex items-center gap-3 group"
          style={{ background: "none", border: "none", cursor: "pointer", padding: 0 }}
        >
          <Logo />
          <span
            className="font-display font-700 text-[18px]"
            style={{ color: "hsl(var(--t-primary))", letterSpacing: "-0.04em" }}
          >
            Vaize
          </span>
          <span
            className="hidden sm:inline mono text-[10px] px-2 py-0.5 rounded"
            style={{
              color: "hsl(var(--p400))",
              border: "1px solid rgba(110,130,255,0.22)",
              background: "rgba(110,130,255,0.07)",
              letterSpacing: "0.1em",
            }}
          >
            BETA
          </span>
        </button>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((l) => (
            <button
              key={l.id}
              className="nav-item relative"
              onClick={() => scrollTo(l.id)}
            >
              {l.label}

              {activeSection === l.id && (
                <span
                  className="absolute left-0 -bottom-1 w-full h-[2px]"
                  style={{
                    background: "hsl(var(--p400))",
                    borderRadius: "2px",
                  }}
                />
              )}
            </button>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <button className="btn-ghost text-sm py-2.5 px-5" onClick={() => scrollTo("contact")}>
            Request Demo
          </button>
          <button
            className="btn-primary text-sm py-2.5 px-5"
            onClick={() => scrollTo("contact")}
          >
            Get Early Access
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Hamburger */}
        <button
          className="md:hidden p-2 rounded-xl"
          style={{ color: "hsl(var(--t-secondary))", background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)" }}
          onClick={() => setMobileOpen(true)}
          aria-label="Open menu"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
        </button>
      </nav>

      {/* Mobile overlay */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-[1001] flex flex-col"
          style={{ background: "rgba(4,6,16,0.97)", backdropFilter: "blur(32px)" }}
        >
          {/* Close */}
          <div className="flex items-center justify-between px-6 py-5">
            <div className="flex items-center gap-3">
              <Logo />
              <span className="font-display font-700 text-[17px]" style={{ color: "hsl(var(--t-primary))" }}>
                Vaize
              </span>
            </div>
            <button
              className="p-2 rounded-xl"
              style={{ color: "hsl(var(--t-secondary))", background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.08)" }}
              onClick={() => setMobileOpen(false)}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>

          {/* Links */}
          <div className="flex flex-col gap-2 px-6 mt-8 flex-1">
            {navLinks.map((l, i) => (
              <button
                key={l.id}
                className="text-left py-4 px-4 rounded-xl font-display text-lg font-500 transition-all"
                style={{
                  color: "hsl(var(--t-secondary))",
                  border: "1px solid rgba(255,255,255,0.05)",
                  background: "rgba(255,255,255,0.02)",
                  animationDelay: `${i * 60}ms`,
                }}
                onClick={() => scrollTo(l.id)}
              >
                <span className="mono text-xs mr-3" style={{ color: "hsl(var(--p400))", opacity: 0.6 }}>
                  0{i + 1}
                </span>
                {l.label}
              </button>
            ))}
          </div>

          <div className="px-6 pb-10">
            <button className="btn-primary w-full justify-center text-base py-4" onClick={() => scrollTo("contact")}>
              Get Early Access
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </>
  );
}