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
  return <MotionContext.Provider value={{ enabled: !reduced, reduced }}>
    <a href="#main-content" className="skip-link">Skip to content</a>
    <main id="main-content" className="signal-site" data-motion={reduced ? "paused" : "playing"}>{children}</main>
  </MotionContext.Provider>;
}
