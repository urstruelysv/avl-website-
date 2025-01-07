import React from "react";
import { cn } from "@/lib/utils";

export function RetroGrid({
  className,
  angle = 65,
}: {
  className?: string;
  angle?: number;
}) {
  return (
    <div
      className={cn(
        "pointer-events-none absolute size-full overflow-hidden [perspective:200px]",
        className
      )}
      style={{ "--grid-angle": `${angle}deg` } as React.CSSProperties}
    >
      <div className="absolute inset-0 [transform:rotateX(var(--grid-angle))]">
        <div
          className={cn(
            "animate-grid",
            "[background-repeat:repeat] [background-size:60px_60px] [height:300vh] [inset:0%_0px] [margin-left:-50%] [transform-origin:100%_0_0] [width:600vw]",
            "[background-image:linear-gradient(to_right,rgba(255,255,255,0.2)_1px,transparent_0),linear-gradient(to_bottom,rgba(255,255,255,0.2)_1px,transparent_0)]"
          )}
        />
      </div>
    </div>
  );
}

export function RetroSection({
  children,
  className,
  gridAngle,
}: {
  children: React.ReactNode;
  className?: string;
  gridAngle?: number;
}) {
  return (
    <section className={cn("relative min-h-screen w-full bg-black", className)}>
      <RetroGrid angle={gridAngle} className="opacity-40" />
      <div className="relative z-10">{children}</div>
    </section>
  );
}

export default RetroSection;
