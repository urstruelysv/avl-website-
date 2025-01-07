import { useState, useEffect, useRef } from "react";

const words = [
  "Business",
  "Brand",
  "Social Media",
  "YouTube",
  "SEO",
  "Content Creation",
  "AI Services",
  "Online Course Development",
  "Digital Marketing",
  "voice over",
  "Podcast Production",
];

export default function RotatingWords() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [width, setWidth] = useState<number>(0);
  const spanRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    // Update width when word changes
    if (spanRef.current) {
      const tempSpan = document.createElement("span");
      tempSpan.style.visibility = "hidden";
      tempSpan.style.position = "absolute";
      tempSpan.style.fontSize = window.getComputedStyle(
        spanRef.current
      ).fontSize;
      tempSpan.style.fontFamily = window.getComputedStyle(
        spanRef.current
      ).fontFamily;
      tempSpan.style.fontWeight = window.getComputedStyle(
        spanRef.current
      ).fontWeight;
      tempSpan.innerText = words[currentIndex];
      document.body.appendChild(tempSpan);
      const width = tempSpan.getBoundingClientRect().width;
      document.body.removeChild(tempSpan);
      setWidth(width + 20); // Add 20px padding
    }
  }, [currentIndex]);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % words.length);
        setIsVisible(true);
      }, 1000);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <span
      ref={spanRef}
      className={`text-blue-400 inline-block transition-all duration-1000  ${
        isVisible
          ? "opacity-100 transform translate-y-0"
          : "opacity-0 transform translate-y-4"
      }`}
      style={{ width: width ? `${width}px` : "auto" }}
    >
      {words[currentIndex]}
    </span>
  );
}
