"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

interface DockProps {
  logoSrc: string;
}

export default function Dock({ logoSrc }: DockProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuRef = useRef<HTMLElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!isMenuOpen) return;
    const closeOutside = (event: PointerEvent) => {
      if (!menuRef.current?.contains(event.target as Node)) setIsMenuOpen(false);
    };
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
        toggleRef.current?.focus();
      }
    };
    document.addEventListener("pointerdown", closeOutside);
    document.addEventListener("keydown", closeOnEscape);
    return () => {
      document.removeEventListener("pointerdown", closeOutside);
      document.removeEventListener("keydown", closeOnEscape);
    };
  }, [isMenuOpen]);

  const menuItems = [
    { title: "What We Do", href: "#services" },
    { title: "Contact Us", href: "#contact" },
    { title: "Work With Us", href: "#contact" },
  ];

  return (
    <nav ref={menuRef} aria-label="Main navigation" className="fixed top-0 left-0 right-0 px-5 py-3 sm:px-8 sm:py-4 flex justify-between items-center z-50 bg-black/75 backdrop-blur-sm">
      <Link href="/" className="relative w-20 h-20 sm:w-24 sm:h-24">
        <Image
          src="/logo1.png"
          alt="Aethos Vision Labs"
          sizes="(max-width: 640px) 80px, 96px"
          fill
          className="object-contain"
          priority
        />
      </Link>

      <div className="flex-grow border-t border-white/40 mx-5 sm:mx-8"></div>

      <button
        ref={toggleRef}
        type="button"
        aria-expanded={isMenuOpen}
        aria-controls="site-menu"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="w-11 h-11 shrink-0 flex items-center justify-center hover:bg-white/10 rounded-full transition-colors"
        aria-label="Toggle menu"
      >
        <div className="w-5 h-4 flex flex-col justify-between">
          <span
            className={`w-full h-0.5 bg-white transition-transform ${
              isMenuOpen ? "rotate-45 translate-y-1.5" : ""
            }`}
          />
          <span
            className={`w-full h-0.5 bg-white transition-opacity ${
              isMenuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`w-full h-0.5 bg-white transition-transform ${
              isMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
            }`}
          />
        </div>
      </button>

      {isMenuOpen && (
        <div id="site-menu" className="absolute top-full right-5 sm:right-8 mt-2 w-52 border border-white/10 bg-black/95 rounded-lg shadow-lg overflow-hidden">
          {menuItems.map((item) => (
            <Link
              key={item.title}
              onClick={() => setIsMenuOpen(false)}
              href={item.href}
              className="block px-4 py-3 text-white hover:bg-white/10 transition-colors"
            >
              {item.title}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
