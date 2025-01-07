import React, { useState, useEffect } from "react";
import Image from "next/image";

const Logo3D = () => {
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [lastPosition, setLastPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    let animationFrame: number;
    const autoRotate = () => {
      if (!isDragging) {
        setRotation((prev) => ({
          x: prev.x * 0.95,
          y: prev.y + 0.5,
        }));
      }
      animationFrame = requestAnimationFrame(autoRotate);
    };

    animationFrame = requestAnimationFrame(autoRotate);
    return () => cancelAnimationFrame(animationFrame);
  }, [isDragging]);

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setLastPosition({
      x: e.clientX,
      y: e.clientY,
    });
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;

    const deltaX = e.clientX - lastPosition.x;
    const deltaY = e.clientY - lastPosition.y;

    setRotation((prev) => ({
      x: prev.x + deltaY * 0.5,
      y: prev.y + deltaX * 0.5,
    }));

    setLastPosition({
      x: e.clientX,
      y: e.clientY,
    });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  return (
    <div
      className="w-full h-full flex items-center justify-center [perspective:1000px]"
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
    >
      {/* Rotating Logo Container */}
      <div
        className="relative w-[min(60vw,60vh)] h-[min(60vw,60vh)] max-w-[32rem] max-h-[32rem] min-w-[200px] min-h-[200px] [transform-style:preserve-3d] cursor-grab active:cursor-grabbing"
        style={{
          transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
          transition: isDragging ? "none" : "transform 0.1s ease-out",
        }}
      >
        {/* Front face */}
        <div className="absolute inset-0">
          <Image
            src="/logo.svg"
            alt="Logo"
            fill
            className="object-contain p-[100%] invert"
            priority
          />
        </div>

        {/* Back face */}
        <div
          className="absolute inset-0"
          style={{ transform: "rotateY(180deg) translateZ(1px)" }}
        >
          <Image
            src="/logo.svg"
            alt="Logo"
            fill
            className="object-contain p-[10%] invert"
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default Logo3D;
