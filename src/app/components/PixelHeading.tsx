"use client";
import { useEffect, useRef, useState } from "react";

export default function PixelHeading({ lines, as: Tag = "h2", className = "" }: { lines: string[]; as?: "h1" | "h2"; className?: string }) {
  const root = useRef<HTMLHeadingElement>(null);
  const canvas = useRef<HTMLCanvasElement>(null);
  const [ready, setReady] = useState(false);
  const key = lines.join("|");
  useEffect(() => {
    const element = root.current;
    const surface = canvas.current;
    if (!element || !surface) return;
    let stopped = false;
    const draw = () => {
      if (stopped) return;
      const ctx = surface.getContext("2d");
      if (!ctx) return;
      const style = getComputedStyle(element);
      const size = parseFloat(style.fontSize);
      const leading = parseFloat(style.lineHeight);
      const pixel = size > 80 ? 1.7 : 1.2;
      surface.width = Math.ceil(element.clientWidth / pixel);
      surface.height = Math.ceil(element.clientHeight / pixel);
      ctx.clearRect(0, 0, surface.width, surface.height);
      ctx.fillStyle = style.color;
      ctx.fontKerning = "none";
      ctx.letterSpacing = "0px";
      ctx.textAlign = "left";
      let fontSize = size / pixel;
      const setFont = () => { ctx.font = `${fontSize}px "AVL Serif"`; };
      const widthOf = (word: string) => Array.from(word).reduce((width, letter) => width + ctx.measureText(letter).width, 0) + Math.max(0, Array.from(word).length - 1) * fontSize * .016;
      const lineWidth = (line: string) => line.split(" ").reduce((width, word) => width + widthOf(word), 0) + (line.split(" ").length - 1) * fontSize * .25;
      setFont();
      const longest = Math.max(...key.split("|").map(lineWidth));
      if (longest > surface.width - 4) {
        fontSize *= (surface.width - 4) / longest;
        setFont();
      }
      key.split("|").forEach((line, i) => {
        const m = ctx.measureText(line);
        const baseline = leading / pixel * (i + .5) + (m.actualBoundingBoxAscent - m.actualBoundingBoxDescent) / 2;
        const words = line.split(" ");
        const gap = fontSize * .25;
        const total = lineWidth(line);
        let x = (surface.width - total) / 2;
        ctx.textAlign = "left";
        for (const word of words) {
          for (const letter of Array.from(word)) {
            ctx.fillText(letter, x, baseline);
            x += ctx.measureText(letter).width + fontSize * .016;
          }
          x += gap - fontSize * .016;
        }
      });
      setReady(true);
    };
    const observer = new ResizeObserver(draw);
    document.fonts.load('100px "AVL Serif"').then(() => { if (!stopped) { draw(); observer.observe(element); } });
    return () => { stopped = true; observer.disconnect(); };
  }, [key]);
  return <Tag ref={root} className={`pixel-heading ${className}`} data-ready={ready || undefined}><span>{lines.map((line,i)=><span className="pixel-line" key={i}>{line}</span>)}</span><canvas ref={canvas} aria-hidden="true" /></Tag>;
}
