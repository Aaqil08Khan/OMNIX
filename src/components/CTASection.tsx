const CalendarIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="3" y="4" width="18" height="18" rx="3" /><line x1="3" y1="10" x2="21" y2="10" />
    <path d="M9 16l2 2 4-4" stroke="#10B981" strokeWidth="2" />
    <line x1="8" y1="2" x2="8" y2="6" /><line x1="16" y1="2" x2="16" y2="6" />
  </svg>
);
const MailIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="2" y="4" width="20" height="16" rx="3" /><polyline points="2 4 12 13 22 4" />
  </svg>
);
const PhoneIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.13.81.36 1.6.65 2.35a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.75.29 1.54.52 2.35.65a2 2 0 011.72 2.01z" />
  </svg>
);
const GlobeIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <circle cx="12" cy="12" r="10" /><ellipse cx="12" cy="12" rx="4" ry="10" /><line x1="2" y1="12" x2="22" y2="12" />
  </svg>
);

export default function CTASection() {
  return (
    <section id="contact" className="relative py-24 overflow-hidden" style={{ background: "linear-gradient(180deg, hsl(265 38% 5%) 0%, hsl(268 40% 11%) 100%)" }}>
      {/* Orb glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full pointer-events-none" style={{ background: "rgba(123,47,190,0.15)", filter: "blur(120px)" }} />

      <div className="container mx-auto px-6 lg:px-12 text-center relative z-10">
        <div className="max-w-2xl mx-auto reveal">
          <h2 className="font-heading font-bold text-[36px] md:text-[56px] leading-tight">
            Ready to Bring <span className="gradient-text">Clarity</span> to Your Work?
          </h2>
          <p className="text-lg mt-6 mb-10" style={{ color: "hsl(258 88% 85%)" }}>
            Stop juggling tools. Start driving results. Schedule a 15-minute personalized demo with the MavenAiTech team today.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <button className="btn-gradient btn-magnetic px-8 py-3.5 text-base font-body flex items-center gap-2">
              <CalendarIcon /> Schedule a Demo
            </button>
            <button className="btn-ghost px-6 py-3.5 text-base font-body flex items-center gap-2">
              <MailIcon /> Contact Us
            </button>
          </div>

          <div className="flex flex-wrap justify-center gap-6 md:gap-8 text-sm">
            {[
              { icon: <PhoneIcon />, text: "+966 51 025 8383 (KSA)" },
              { icon: <PhoneIcon />, text: "+91 93814 72914 (IND)" },
              { icon: <MailIcon />, text: "info@mavenaitech.com" },
              { icon: <GlobeIcon />, text: "www.mavenaitech.com" },
            ].map((c, i) => (
              <a key={i} href="#" className="flex items-center gap-2 transition-colors" style={{ color: "hsl(258 88% 85%)" }} onMouseOver={e => (e.currentTarget.style.color = "hsl(270 60% 97%)")} onMouseOut={e => (e.currentTarget.style.color = "hsl(258 88% 85%)")}>
                {c.icon} {c.text}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
