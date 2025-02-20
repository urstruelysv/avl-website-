"use client";
import { useEffect, useRef, ReactNode } from "react";

// This component implements the Once UI TiltFx effect.
function OnceTiltFx({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  const tiltRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = tiltRef.current;
    if (!el) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const deltaX = x - centerX;
      const deltaY = y - centerY;
      const percentX = deltaX / centerX;
      const percentY = deltaY / centerY;
      const maxTilt = 15; // maximum tilt in degrees
      const tiltX = percentY * maxTilt;
      const tiltY = -percentX * maxTilt;

      el.style.transform = `rotateX(${tiltX}deg) rotateY(${tiltY}deg)`;
    };

    const handleMouseLeave = () => {
      el.style.transform = "rotateX(0deg) rotateY(0deg)";
    };

    el.addEventListener("mousemove", handleMouseMove);
    el.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      el.removeEventListener("mousemove", handleMouseMove);
      el.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div ref={tiltRef} className={`once-ui-tiltfx ${className}`}>
      {children}
    </div>
  );
}

export default function Home() {
  return (
    <div className="container">
      <div className="overlay fixed inset-0 flex justify-center items-center">
        <h1
          className="text-center text-black-900 font-bold text-3xl"
          style={{ fontFamily: "'Montserrat', sans-serif" }}
        >
          AI is changing every day, Aethos will stay up for you
        </h1>
      </div>

      <OnceTiltFx className="tiltBox">
        <img src="aiimage.webp" alt="Full Width" className="image" />
      </OnceTiltFx>
      <style jsx>{`
        .container {
          position: relative;
          background: #000;
          width: 100%;
          height: 100vh;
          overflow: hidden;
        }
        .overlay {
          position: absolute;
          top: 20px;
          width: 100%;
          text-align: center;
          z-index: 2;
        }
        .overlay h1 {
          color: #fff;
          font-size: 2rem;
          margin: 0;
          font-family: sans-serif;
        }
        /* Once UI–inspired TiltFx styles */
        .once-ui-tiltfx {
          perspective: 1000px;
          transition: transform 0.2s ease;
          width: 100%;
          height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .image {
          width: 100%;
          height: auto;
          display: block;
        }
      `}</style>
    </div>
  );
}
