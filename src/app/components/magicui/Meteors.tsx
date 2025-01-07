"use client";
import { useEffect, useState } from "react";

interface MeteorsProps {
  number?: number;
}

const cn = (...classes: (string | undefined)[]) => {
  return classes.filter(Boolean).join(" ");
};

export const Meteors = ({ number = 20 }: MeteorsProps) => {
  const [meteorStyles, setMeteorStyles] = useState<Array<React.CSSProperties>>(
    []
  );

  useEffect(() => {
    const styles = [...new Array(number)].map(() => ({
      top: -5,
      left: Math.floor(Math.random() * window.innerWidth) + "px",
      animationDelay: Math.random() * 1 + 0.2 + "s",
      animationDuration: Math.floor(Math.random() * 8 + 2) + "s",
    }));
    setMeteorStyles(styles);
  }, [number]);

  return (
    <div className="relative h-screen w-full bg-black overflow-hidden">
      {[...meteorStyles].map((style, idx) => (
        <span
          key={idx}
          className={cn(
            "pointer-events-none absolute left-1/2 top-1/2 h-1 w-1 rotate-[215deg] animate-meteor rounded-full bg-white opacity-75"
          )}
          style={style}
        >
          {/* Meteor Tail */}
          <div className="pointer-events-none absolute top-1/2 -z-10 h-[2px] w-[100px] -translate-y-1/2 bg-gradient-to-r from-white to-transparent" />
        </span>
      ))}
    </div>
  );
};
