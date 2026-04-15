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
import TestimonialsSection from "@/components/TestimonialsSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function Index() {
  useEffect(() => {
    // === SCROLL PROGRESS BAR ===
    const bar = document.createElement("div");
    bar.id = "scroll-progress";
    document.body.appendChild(bar);
    const onScroll = () => {
      const pct = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
      bar.style.width = Math.min(pct, 100) + "%";
    };
    window.addEventListener("scroll", onScroll, { passive: true });

    // === CURSOR GLOW ===
    const glow = document.createElement("div");
    glow.style.cssText =
      "position:fixed;width:500px;height:500px;pointer-events:none;z-index:0;border-radius:50%;background:radial-gradient(circle,rgba(100,80,220,0.06) 0%,transparent 70%);transform:translate(-50%,-50%);transition:left 0.08s,top 0.08s;will-change:left,top;";
    document.body.appendChild(glow);
    const onMove = (e: MouseEvent) => {
      glow.style.left = e.clientX + "px";
      glow.style.top = e.clientY + "px";
    };
    document.addEventListener("mousemove", onMove, { passive: true });

    // === SCROLL REVEAL ===
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            (entry.target as HTMLElement).classList.add("visible");
            revealObserver.unobserve(entry.target); // Once visible, unobserve for performance
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -40px 0px" }
    );

    // Apply staggered delays to sibling reveals
    document.querySelectorAll(".reveal").forEach((el, i) => {
      const htmlEl = el as HTMLElement;
      // Check if this is inside a grid for stagger
      const parent = htmlEl.parentElement;
      if (parent) {
        const siblings = Array.from(parent.querySelectorAll(".reveal"));
        const sibIdx = siblings.indexOf(htmlEl);
        if (sibIdx > 0 && !htmlEl.style.transitionDelay) {
          htmlEl.style.transitionDelay = `${sibIdx * 80}ms`;
        }
      }
      revealObserver.observe(el);
    });

    // === CARD INNER GLOW ===
    const cards = document.querySelectorAll(".feat-card, .card-glass");
    const cardHandlers: Array<{ el: HTMLElement; move: (e: MouseEvent) => void; leave: () => void }> = [];

    cards.forEach((card) => {
      const el = card as HTMLElement;
      const originalBg = el.style.background;

      const move = (e: MouseEvent) => {
        const rect = el.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;
        el.style.backgroundImage = `radial-gradient(circle at ${x}% ${y}%, rgba(100,120,255,0.06) 0%, transparent 65%)`;
      };

      const leave = () => {
        el.style.backgroundImage = "";
      };

      el.addEventListener("mousemove", move);
      el.addEventListener("mouseleave", leave);
      cardHandlers.push({ el, move, leave });
    });

    // === SMOOTH ANCHOR CLICKS ===
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest("a[href^='#']") as HTMLAnchorElement;
      if (anchor) {
        e.preventDefault();
        const id = anchor.getAttribute("href")?.slice(1);
        if (id) document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      }
    };
    document.addEventListener("click", handleAnchorClick);

    return () => {
      document.removeEventListener("mousemove", onMove);
      window.removeEventListener("scroll", onScroll);
      document.removeEventListener("click", handleAnchorClick);
      glow.remove();
      bar.remove();
      revealObserver.disconnect();
      cardHandlers.forEach(({ el, move, leave }) => {
        el.removeEventListener("mousemove", move);
        el.removeEventListener("mouseleave", leave);
      });
    };
  }, []);

  return (
    <div style={{ overflowX: "hidden" }}>
      <Navbar />
      <HeroSection />
      <WaveDivider />
      <ProblemSection />
      <WaveDivider />
      <SolutionSection />
      <WaveDivider />
      <BentoSection />
      <WaveDivider />
      <TabbedFeatures />
      <WaveDivider />
      <WhyOmniXSection />
      <WaveDivider />
      <UseCasesSection />
      <WaveDivider />
      <WaveDivider />
      <TestimonialsSection />
      <WaveDivider />
      <CTASection />
      <WaveDivider />
      <Footer />
    </div>
  );
}