"use client";
import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { Pause, Play } from "./StudioIcons";

const MotionContext = createContext({ enabled: true, reduced: false });
export const useSiteMotion = () => useContext(MotionContext);

export default function SiteMotion({ children }: { children: ReactNode }) {
  const [paused, setPaused] = useState(false);
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const query = matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduced(query.matches);
    update();
    query.addEventListener("change", update);
    return () => query.removeEventListener("change", update);
  }, []);
  const enabled = !paused && !reduced;
  return <MotionContext.Provider value={{ enabled, reduced }}>
    <a href="#main-content" className="skip-link">Skip to content</a>
    <main id="main-content" className="signal-site" data-motion={enabled ? "playing" : "paused"}>
      {children}
      {!reduced && <button type="button" className="motion-control" aria-pressed={paused} onClick={() => setPaused(!paused)}>
        {paused ? <Play size={14} /> : <Pause size={14} />} {paused ? "Play motion" : "Pause motion"}
      </button>}
    </main>
  </MotionContext.Provider>;
}
