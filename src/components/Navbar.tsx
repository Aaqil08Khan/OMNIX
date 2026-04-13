import { useState, useEffect } from "react";

const LightningIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M13 2L4.09 12.63a1 1 0 00.78 1.62H11l-1 7.75L19.91 11.37a1 1 0 00-.78-1.62H13l1-7.75z" fill="url(#bolt-grad)" />
    <defs>
      <linearGradient id="bolt-grad" x1="4" y1="2" x2="20" y2="22">
        <stop offset="0%" stopColor="#A855F7" />
        <stop offset="100%" stopColor="#C026D3" />
      </linearGradient>
    </defs>
  </svg>
);

const HamburgerIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="18" x2="21" y2="18" />
  </svg>
);

const CloseIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

const navLinks = ["Features", "Why OmniX", "Use Cases", "Tech Stack", "Contact"];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
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
        className="fixed top-0 left-0 right-0 z-[1000] h-16 flex items-center justify-between px-6 lg:px-12 transition-all duration-300"
        style={{
          background: scrolled ? "rgba(7,5,14,0.75)" : "transparent",
          backdropFilter: scrolled ? "blur(24px) saturate(180%)" : "none",
          borderBottom: scrolled ? "1px solid rgba(139,92,246,0.12)" : "1px solid transparent",
        }}
      >
        <div className="flex items-center gap-2">
          <LightningIcon />
          <span className="font-heading font-bold text-lg text-omnix-text-primary">omnix</span>
        </div>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
            <button key={l} className="nav-link font-body" onClick={() => scrollTo(l)}>
              {l}
            </button>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <button className="btn-ghost px-5 py-2 text-sm font-body">Request Demo</button>
          <button className="btn-gradient px-5 py-2.5 text-sm font-body">Get Early Access</button>
        </div>

        <button className="md:hidden text-omnix-text-primary" onClick={() => setMobileOpen(true)}>
          <HamburgerIcon />
        </button>
      </nav>

      {mobileOpen && (
        <div className="fixed inset-0 z-[1001] flex flex-col items-center justify-center gap-8" style={{ background: "rgba(7,5,14,0.92)", backdropFilter: "blur(32px)" }}>
          <button className="absolute top-5 right-6 text-omnix-text-primary" onClick={() => setMobileOpen(false)}><CloseIcon /></button>
          {navLinks.map((l) => (
            <button key={l} className="text-omnix-text-secondary text-xl font-heading" onClick={() => scrollTo(l)}>{l}</button>
          ))}
          <button className="btn-gradient px-8 py-3 text-base font-body mt-4">Get Early Access</button>
        </div>
      )}
    </>
  );
}
