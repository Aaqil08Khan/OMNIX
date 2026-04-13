import { useEffect, useRef, useState } from "react";

const ArrowRight = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
);
const PlayIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><polygon points="5,3 19,12 5,21" /></svg>
);

const subheadlines = [
  "OmniX unifies your tasks, KPIs, files & team into one beautifully powerful platform.",
  "Built for teams that move fast and need everything in sync.",
  "From your first task to your biggest goal — all in one place.",
];

const stats = [
  { value: "3-4×", label: "Fewer Tools", color: "#E11D7A" },
  { value: "100%", label: "Remote-Ready", color: "hsl(271 91% 65%)" },
  { value: "Real-Time", label: "KPI Sync", color: "hsl(271 91% 65%)" },
  { value: "1 Platform", label: "All Teams", color: "hsl(271 91% 65%)" },
];

export default function HeroSection() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [typedText, setTypedText] = useState("");
  const [showCursor, setShowCursor] = useState(true);
  const [subIndex, setSubIndex] = useState(0);
  const [subVisible, setSubVisible] = useState(true);
  const fullText = "Work Chaos.";

  // Typewriter effect
  useEffect(() => {
    if (typedText.length < fullText.length) {
      const t = setTimeout(() => setTypedText(fullText.slice(0, typedText.length + 1)), 60);
      return () => clearTimeout(t);
    } else {
      const t = setTimeout(() => setShowCursor(false), 2000);
      return () => clearTimeout(t);
    }
  }, [typedText]);

  // Subheadline cycling
  useEffect(() => {
    const interval = setInterval(() => {
      setSubVisible(false);
      setTimeout(() => {
        setSubIndex((p) => (p + 1) % subheadlines.length);
        setSubVisible(true);
      }, 400);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Count-up observer
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.2 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section className="relative min-h-screen flex items-center section-deep overflow-hidden pt-16">
      {/* Aurora */}
      <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 120% 60% at 50% 0%, rgba(123,47,190,0.18) 0%, transparent 70%)" }} />

      <div className="container mx-auto px-6 lg:px-12 flex flex-col lg:flex-row items-center gap-12 lg:gap-8 relative z-10">
        {/* Left */}
        <div className="flex-1 lg:max-w-[55%] space-y-8">
          <div className="pill-badge">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2z" fill="#A855F7" /></svg>
            Now in Beta — Limited Access
          </div>

          <h1 className="font-heading font-bold text-[36px] sm:text-[44px] md:text-[56px] lg:text-[72px] leading-[1.05]">
            Stop Managing<br />
            <span className="gradient-text">{typedText}</span>
            {showCursor && <span className="typewriter-cursor" />}
          </h1>

          <p
            className="text-lg md:text-[22px] leading-relaxed max-w-xl transition-all duration-400"
            style={{
              color: "hsl(258 88% 85%)",
              opacity: subVisible ? 1 : 0,
              transform: subVisible ? "translateY(0)" : "translateY(12px)",
              transition: "opacity 0.4s ease, transform 0.4s ease",
            }}
          >
            {subheadlines[subIndex]}
          </p>

          <div className="flex flex-wrap gap-4">
            <button className="btn-gradient btn-magnetic px-8 py-3.5 text-base font-body flex items-center gap-2">
              Get Early Access <ArrowRight />
            </button>
            <button className="btn-ghost px-6 py-3.5 text-base font-body flex items-center gap-2" style={{ borderColor: "rgba(139,92,246,0.45)" }}>
              <PlayIcon /> Watch Demo
            </button>
          </div>

          <div ref={ref} className="flex items-center gap-0 flex-wrap">
            {stats.map((s, i) => (
              <div key={i} className="flex items-center">
                <div className="text-center px-4 py-2">
                  <div className="font-heading font-bold text-xl md:text-2xl" style={{ color: s.color }}>
                    {visible ? s.value : "0"}
                  </div>
                  <div className="text-xs mt-1" style={{ color: "hsl(260 23% 55%)" }}>{s.label}</div>
                </div>
                {i < stats.length - 1 && <span style={{ color: "hsl(260 25% 33%)" }}>|</span>}
              </div>
            ))}
          </div>
        </div>

        {/* Right — Device mockup */}
        <div className="flex-1 lg:max-w-[45%] relative device-float">
          {/* Morphing blob */}
          <svg className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[360px] h-[360px] pointer-events-none" viewBox="0 0 500 400" xmlns="http://www.w3.org/2000/svg">
            <path fill="rgba(123,47,190,0.12)" style={{ animation: "morph-blob 8s ease-in-out infinite" }}>
              <animate
                attributeName="d"
                dur="8s"
                repeatCount="indefinite"
                values="M260,150 C310,80 420,120 400,200 C380,280 310,320 250,280 C190,240 210,220 260,150Z;
                        M270,130 C340,70 430,140 390,220 C350,300 280,340 230,290 C180,240 200,190 270,130Z;
                        M250,160 C300,90 410,130 410,210 C410,290 320,310 260,270 C200,230 200,230 250,160Z;
                        M260,150 C310,80 420,120 400,200 C380,280 310,320 250,280 C190,240 210,220 260,150Z"
              />
            </path>
          </svg>

          {/* Glow orb */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] h-[320px] rounded-full" style={{ background: "radial-gradient(circle, rgba(123,47,190,0.28), transparent)", filter: "blur(90px)" }} />

          {/* Laptop SVG */}
          <svg viewBox="0 0 520 340" className="w-full relative z-10" xmlns="http://www.w3.org/2000/svg">
            <rect x="40" y="10" width="440" height="280" rx="16" fill="#1a1a2e" />
            <rect x="52" y="22" width="416" height="256" rx="8" fill="#09070F" />
            {/* Top bar with dots */}
            <rect x="52" y="22" width="416" height="28" rx="8" fill="#5116B5" opacity="0.3" />
            <circle cx="70" cy="36" r="5" fill="#E11D7A" opacity="0.7" />
            <circle cx="86" cy="36" r="5" fill="#F59E0B" opacity="0.7" />
            <circle cx="102" cy="36" r="5" fill="#10B981" opacity="0.7" />

            {/* Sidebar */}
            <rect x="52" y="50" width="80" height="228" fill="#0E0919" />
            {[60, 80, 100, 120, 140].map((y, i) => (
              <g key={i}>
                <rect x="62" y={y} width="16" height="12" rx="3" fill={i === 0 ? "#6B22D4" : "#2D0B6B"} opacity={i === 0 ? 1 : 0.5} />
                <rect x="82" y={y + 2} width="38" height="8" rx="2" fill="#4A3F6B" opacity="0.3" />
              </g>
            ))}

            {/* Main area */}
            <text x="145" y="68" fill="#F8F4FF" fontSize="10" fontFamily="Space Grotesk">My Tasks — October 2025</text>

            {/* Task cards with avatars */}
            {[
              { y: 80, title: "Design System Review", color: "#F59E0B", status: "In Progress" },
              { y: 118, title: "API Integration", color: "#10B981", status: "Done" },
              { y: 156, title: "Client Proposal", color: "#F59E0B", status: "In Progress" },
            ].map((t, i) => (
              <g key={i}>
                <rect x="138" y={t.y} width="240" height="30" rx="6" fill="#160D2A" />
                <rect x="142" y={t.y + 4} width="3" height="22" rx="1.5" fill={t.color} />
                <circle cx="154" cy={t.y + 15} r="7" fill={i === 0 ? "#3D1191" : i === 1 ? "#5116B5" : "#2D0B6B"} />
                <text x="166" y={t.y + 19} fill="#C4B5FD" fontSize="9" fontFamily="Inter">{t.title}</text>
                <rect x="310" y={t.y + 8} width="55" height="14" rx="7" fill={t.color} opacity="0.2" />
                <text x="316" y={t.y + 19} fill={t.color} fontSize="7" fontFamily="Inter">{t.status}</text>
                <text x="362" y={t.y + 19} fill="#7C6FAD" fontSize="6" fontFamily="Inter">Oct {12 + i}</text>
              </g>
            ))}

            {/* KPI mini panel with gridlines */}
            <rect x="395" y="80" width="65" height="55" rx="6" fill="#160D2A" />
            <text x="400" y="93" fill="#7C6FAD" fontSize="6" fontFamily="Inter">Sprint KPI</text>
            {/* Gridlines */}
            {[100, 110, 120].map(y => <line key={y} x1="400" y1={y} x2="455" y2={y} stroke="rgba(6,182,212,0.08)" strokeWidth="0.5" />)}
            {[0, 1, 2, 3, 4].map((i) => (
              <rect key={i} x={402 + i * 11} y={127 - (i + 1) * 5} width="7" height={(i + 1) * 5} rx="1" fill="#06B6D4" opacity={0.4 + i * 0.12} />
            ))}

            {/* Hinge */}
            <rect x="20" y="290" width="480" height="14" rx="4" fill="#1a1a2e" />
            <rect x="200" y="292" width="120" height="8" rx="4" fill="#0E0919" />
          </svg>

          {/* Floating iPhone — slightly rotated */}
          <svg viewBox="0 0 120 200" className="absolute -bottom-4 -left-4 w-[100px] md:w-[120px] z-20" style={{ transform: "rotate(8deg)" }} xmlns="http://www.w3.org/2000/svg">
            <rect x="0" y="0" width="120" height="200" rx="28" fill="#1a1a2e" />
            <rect x="6" y="6" width="108" height="188" rx="22" fill="#09070F" />
            {/* Status bar */}
            <rect x="6" y="6" width="108" height="20" rx="10" fill="#160D2A" />
            <text x="40" y="18" fill="#7C6FAD" fontSize="6" fontFamily="Inter">9:41</text>
            <text x="15" y="40" fill="#A855F7" fontSize="8" fontFamily="Space Grotesk" fontWeight="600">OmniX</text>
            {/* Task rows */}
            {[50, 68, 86, 104, 122, 140].map((y, i) => (
              <g key={i}>
                <rect x="14" y={y} width="92" height="14" rx="4" fill="#160D2A" />
                <rect x="14" y={y} width="3" height="14" rx="1" fill={i < 2 ? "#9333EA" : "#5116B5"} />
                <rect x="20" y={y + 3} width="8" height="8" rx="2" fill={i < 2 ? "#10B981" : "transparent"} stroke={i < 2 ? "none" : "#7C6FAD"} strokeWidth="0.5" />
                <rect x="32" y={y + 4} width={40 + (i % 3) * 8} height="5" rx="1.5" fill="#4A3F6B" opacity="0.4" />
                <circle cx="96" cy={y + 7} r="2" fill={i === 0 ? "#10B981" : i === 1 ? "#F59E0B" : "#5116B5"} opacity="0.6" />
              </g>
            ))}
            {/* Home indicator */}
            <rect x="40" y="186" width="40" height="4" rx="2" fill="#4A3F6B" opacity="0.4" />
          </svg>
        </div>
      </div>

      {/* Marquee strip */}
      <div className="marquee-wrap absolute bottom-0 left-0 right-0 overflow-hidden py-4" style={{ borderTop: "1px solid rgba(139,92,246,0.08)", background: "hsl(260 40% 4%)" }}>
        <div className="marquee-track flex whitespace-nowrap">
          {Array.from({ length: 2 }).map((_, j) => (
            <span key={j} className="flex items-center">
              {["Project Management", "KPI Tracking", "Team Collaboration", "File Management", "Smart Calendar", "Role-Based Access", "Mobile + Web"].map((t, i) => (
                <span key={i} className="flex items-center text-sm font-body mx-4" style={{ color: "hsl(260 25% 33%)" }}>
                  {t} <span className="ml-4" style={{ color: "hsl(265 75% 40%)" }}>•</span>
                </span>
              ))}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
