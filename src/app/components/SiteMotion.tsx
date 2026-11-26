"use client";
import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

const MotionContext = createContext({ enabled: true, reduced: false });
export const useSiteMotion = () => useContext(MotionContext);

export default function SiteMotion({ children }: { children: ReactNode }) {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const query = matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduced(query.matches);
    update();
    query.addEventListener("change", update);
    return () => query.removeEventListener("change", update);
  }, []);
  useEffect(() => {
    if (matchMedia("(prefers-reduced-motion: reduce)").matches || !('IntersectionObserver' in window)) return;
    const elements = document.querySelectorAll<HTMLElement>('.services-intro, .signal-service, .signal-process .section-center');
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.classList.replace('reveal-pending', 'reveal-shown');
        observer.unobserve(entry.target);
      });
    }, { threshold: .12 });
    elements.forEach(element => {
      if (element.getBoundingClientRect().top < innerHeight) return;
      element.classList.add('reveal-pending');
      observer.observe(element);
    });
    return () => {
      observer.disconnect();
      elements.forEach(element => element.classList.remove('reveal-pending', 'reveal-shown'));
    };
  }, [reduced]);
  return <MotionContext.Provider value={{ enabled: !reduced, reduced }}>
    <a href="#main-content" className="skip-link">Skip to content</a>
    <main id="main-content" className="signal-site" data-motion={reduced ? "paused" : "playing"}>{children}</main>
  </MotionContext.Provider>;
}
