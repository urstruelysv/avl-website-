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
      const pixel = size > 80 ? 2.2 : 1.3;
      surface.width = Math.ceil(element.clientWidth / pixel);
      surface.height = Math.ceil(element.clientHeight / pixel);
      ctx.clearRect(0, 0, surface.width, surface.height);
      ctx.fillStyle = style.color;
      ctx.font = `${size / pixel}px "AVL Serif"`;
      ctx.textAlign = "center";
      key.split("|").forEach((line, i) => {
        const m = ctx.measureText(line);
        const baseline = leading / pixel * (i + .5) + (m.actualBoundingBoxAscent - m.actualBoundingBoxDescent) / 2;
        const words = line.split(" ");
        const gap = size / pixel * .19;
        const total = words.reduce((sum, word) => sum + ctx.measureText(word).width, 0) + gap * (words.length - 1);
        let x = (surface.width - total) / 2;
        ctx.textAlign = "left";
        for (const word of words) { ctx.fillText(word, x, baseline); x += ctx.measureText(word).width + gap; }
      });
      setReady(true);
    };
    const observer = new ResizeObserver(draw);
    document.fonts.load('100px "AVL Serif"').then(() => { if (!stopped) { draw(); observer.observe(element); } });
    return () => { stopped = true; observer.disconnect(); };
  }, [key]);
  return <Tag ref={root} className={`pixel-heading ${className}`} data-ready={ready || undefined}><span>{lines.map((line,i)=><span className="pixel-line" key={i}>{line}</span>)}</span><canvas ref={canvas} aria-hidden="true" /></Tag>;
}
