import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import WaveDivider from "@/components/WaveDivider";
import ProblemSection from "@/components/ProblemSection";
import SolutionSection from "@/components/SolutionSection";
import BentoSection from "@/components/BentoSection";
import TabbedFeatures from "@/components/TabbedFeatures";
import WhyOmniXSection from "@/components/WhyOmniXSection";
import UseCasesSection from "@/components/UseCasesSection";
import TechStackSection from "@/components/TechStackSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function Index() {
  useEffect(() => {
    // Scroll progress bar
    const bar = document.createElement("div");
    bar.id = "scroll-progress";
    document.body.appendChild(bar);
    const onScroll = () => {
      const pct = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
      bar.style.width = pct + "%";
    };
    window.addEventListener("scroll", onScroll);

    // Cursor glow
    const glow = document.createElement("div");
    glow.style.cssText =
      "position:fixed;width:400px;height:400px;pointer-events:none;z-index:1;border-radius:50%;background:radial-gradient(circle,rgba(123,47,190,0.07) 0%,transparent 70%);transform:translate(-50%,-50%);transition:left 0.06s,top 0.06s;";
    document.body.appendChild(glow);
    const onMove = (e: MouseEvent) => {
      glow.style.left = e.clientX + "px";
      glow.style.top = e.clientY + "px";
    };
    document.addEventListener("mousemove", onMove);

    // Scroll reveal
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            (entry.target as HTMLElement).style.opacity = "1";
            (entry.target as HTMLElement).style.transform = "translateY(0)";
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll(".reveal").forEach((el, i) => {
      const htmlEl = el as HTMLElement;
      htmlEl.style.opacity = "0";
      htmlEl.style.transform = "translateY(32px)";
      htmlEl.style.transition = `opacity 0.6s ease ${i * 0.08}s, transform 0.6s ease ${i * 0.08}s`;
      observer.observe(el);
    });

    // Card inner glow
    document.querySelectorAll(".bento-card, .feature-card, .use-case-card").forEach((card) => {
      const el = card as HTMLElement;
      el.addEventListener("mousemove", (e: MouseEvent) => {
        const rect = el.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;
        el.style.background = `radial-gradient(circle at ${x}% ${y}%, rgba(123,47,190,0.18) 0%, hsl(268 40% 11%) 65%)`;
      });
      el.addEventListener("mouseleave", () => {
        el.style.background = "hsl(268 40% 11%)";
      });
    });

    // Magnetic CTA buttons
    document.querySelectorAll(".btn-magnetic").forEach((btn) => {
      const el = btn as HTMLElement;
      el.addEventListener("mousemove", (e: MouseEvent) => {
        const r = el.getBoundingClientRect();
        const dx = e.clientX - (r.left + r.width / 2);
        const dy = e.clientY - (r.top + r.height / 2);
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 80) {
          el.style.transform = `translate(${dx * 0.22}px,${dy * 0.22}px) scale(1.04)`;
        }
      });
      el.addEventListener("mouseleave", () => {
        el.style.transform = "";
      });
    });

    return () => {
      document.removeEventListener("mousemove", onMove);
      window.removeEventListener("scroll", onScroll);
      glow.remove();
      bar.remove();
      observer.disconnect();
    };
  }, []);

  return (
    <div className="animate-fade-in">
      <Navbar />
      <HeroSection />
      <WaveDivider nextBg="#07050E" />
      <ProblemSection />
      <WaveDivider nextBg="#0E0919" />
      <SolutionSection />
      <WaveDivider nextBg="#09070F" />
      <BentoSection />
      <WaveDivider nextBg="#0E0919" />
      <TabbedFeatures />
      <WaveDivider nextBg="#09070F" />
      <WhyOmniXSection />
      <WaveDivider nextBg="#0E0919" />
      <UseCasesSection />
      <WaveDivider nextBg="#09070F" />
      <TechStackSection />
      <WaveDivider nextBg="#0E0919" />
      <TestimonialsSection />
      <WaveDivider nextBg="hsl(265 38% 5%)" />
      <CTASection />
      <WaveDivider nextBg="#07050E" />
      <Footer />
    </div>
  );
}
