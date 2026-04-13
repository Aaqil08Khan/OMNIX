import { useEffect, useRef, useState } from "react";

const CheckCircle = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
    <circle cx="12" cy="12" r="10" fill="rgba(123,47,190,0.18)" />
    <path d="M8 12l3 3 5-5" stroke="#A855F7" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

const features = [
  { title: "Unified Workspace", desc: "All work in one place, zero context switching" },
  { title: "Goal-Linked Tasks", desc: "Every task tied to a real business objective" },
  { title: "Full-Stack Platform", desc: "Web + iOS + Android, always in sync" },
  { title: "Enterprise-Grade", desc: "Role-based access, secure and scalable" },
];

export default function SolutionSection() {
  const leftRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => {
      if (leftRef.current) {
        const rect = leftRef.current.getBoundingClientRect();
        const offset = (window.innerHeight / 2 - rect.top - rect.height / 2) * 0.15;
        leftRef.current.style.transform = `translateY(${offset}px)`;
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section id="features" className="relative py-24 section-mid overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 60% 60% at 50% 50%, rgba(123,47,190,0.10), transparent 65%)" }} />
      <div className="container mx-auto px-6 lg:px-12 flex flex-col lg:flex-row items-center gap-16 relative z-10">
        {/* Left — Phone mockup with parallax */}
        <div className="flex-1 relative reveal" ref={leftRef}>
          <svg viewBox="0 0 240 420" className="w-full max-w-[280px] mx-auto" xmlns="http://www.w3.org/2000/svg">
            <rect x="0" y="0" width="240" height="420" rx="36" fill="#1a1a2e" />
            <rect x="8" y="8" width="224" height="404" rx="30" fill="#09070F" />
            {/* Status bar */}
            <rect x="8" y="8" width="224" height="30" rx="15" fill="#160D2A" />
            <text x="100" y="28" fill="#7C6FAD" fontSize="8" fontFamily="Inter">9:41</text>
            {/* Header */}
            <text x="24" y="60" fill="#A855F7" fontSize="14" fontFamily="Space Grotesk" fontWeight="600">My Tasks</text>
            {/* Task rows */}
            {[75, 105, 135, 165, 195, 225].map((y, i) => (
              <g key={i}>
                <rect x="20" y={y} width="200" height="24" rx="6" fill="#160D2A" />
                <rect x="20" y={y} width="3" height="24" rx="1.5" fill={i < 3 ? "#9333EA" : "#5116B5"} />
                <rect x="30" y={y + 5} width="12" height="12" rx="3" fill={i < 2 ? "#10B981" : "transparent"} stroke={i < 2 ? "none" : "#7C6FAD"} strokeWidth="1" />
                <rect x="48" y={y + 8} width={80 + (i % 3) * 15} height="6" rx="2" fill="#4A3F6B" opacity="0.5" />
                <rect x="175" y={y + 8} width="36" height="6" rx="2" fill="#4A3F6B" opacity="0.25" />
              </g>
            ))}
            {/* Bottom fade for scrollable feel */}
            <defs><linearGradient id="fade-bot" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#09070F" stopOpacity="0" /><stop offset="100%" stopColor="#09070F" /></linearGradient></defs>
            <rect x="8" y="240" width="224" height="30" fill="url(#fade-bot)" />
          </svg>

          {/* Floating KPI card */}
          <div className="absolute top-8 -right-4 md:right-4 rounded-xl px-4 py-3 reveal" style={{ background: "hsl(var(--bg-surface))", border: "1px solid rgba(167,139,250,0.45)", transform: "rotate(-6deg)" }}>
            <div className="text-xs" style={{ color: "hsl(260 23% 55%)" }}>KPI Score</div>
            <div className="font-heading font-bold text-2xl" style={{ color: "hsl(270 95% 75%)" }}>87%</div>
            <svg width="60" height="24" viewBox="0 0 60 24" className="mt-1">
              {[0,1,2,3,4].map(i => <rect key={i} x={i*12} y={24-(i+1)*4} width="8" height={(i+1)*4} rx="1" fill="#06B6D4" opacity={0.4+i*0.12} />)}
            </svg>
          </div>

          {/* Floating notification */}
          <div className="absolute bottom-16 -right-2 md:right-0 rounded-full px-4 py-2 flex items-center gap-2 reveal" style={{ background: "rgba(16,185,129,0.12)", border: "1px solid rgba(16,185,129,0.3)" }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M20 6L9 17l-5-5" stroke="#10B981" strokeWidth="2.5" strokeLinecap="round" /></svg>
            <span className="text-xs" style={{ color: "#10B981" }}>Task completed by Riya</span>
          </div>
        </div>

        {/* Right — Text */}
        <div className="flex-1 space-y-8 reveal">
          <span className="section-label">The Solution</span>
          <h2 className="font-heading font-bold text-[32px] md:text-[44px] leading-tight">
            One Platform. <span className="gradient-text">Total Clarity.</span>
          </h2>
          <p className="text-lg leading-relaxed max-w-lg" style={{ color: "hsl(258 88% 85%)" }}>
            OmniX is a unified web and mobile platform that connects your daily tasks directly to your business goals. Beautiful by design, powerful by architecture.
          </p>
          <div className="space-y-4">
            {features.map((f, i) => (
              <div key={i} className="flex items-start gap-3">
                <div className="mt-0.5"><CheckCircle /></div>
                <div>
                  <span className="font-heading font-semibold" style={{ color: "hsl(270 60% 97%)" }}>{f.title}</span>
                  <span className="text-sm ml-2" style={{ color: "hsl(260 23% 55%)" }}>— {f.desc}</span>
                </div>
              </div>
            ))}
          </div>
          <button className="nav-link font-body text-sm" style={{ color: "hsl(271 91% 65%)" }}>See All Features →</button>
        </div>
      </div>
    </section>
  );
}
