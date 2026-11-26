"use client";
import { useEffect, useRef } from "react";
import { useSiteMotion } from "./SiteMotion";
const lines = ["You have a business to run.", "We make it look, feel, and work better."];
export default function StudioStatement() {
  const root = useRef<HTMLElement>(null);
  const { enabled } = useSiteMotion();
  useEffect(() => {
    if (!enabled || !root.current) return;
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => { if (entry.isIntersecting) { entry.target.setAttribute("data-read", ""); observer.unobserve(entry.target); } });
    }, { rootMargin: "0px 0px -15% 0px", threshold: 1 });
    root.current.querySelectorAll(".statement-word").forEach(word => observer.observe(word));
    return () => observer.disconnect();
  }, [enabled]);
  return <section ref={root} className="studio-statement" aria-label={lines.join(" ")} data-animated={enabled || undefined}>
    <p aria-hidden="true">{lines.map((line, i) => <span className="statement-line" key={line}>{line.split(" ").map((word, j) => <span className="statement-word" style={{ transitionDelay: `${j * 60}ms` }} key={`${i}:${j}`}>{word} </span>)}</span>)}</p>
  </section>;
}
