"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

interface DockProps {
  logoSrc: string;
}

export default function Dock({ logoSrc }: DockProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { title: "What We Do", href: "/what-we-do" },
    { title: "Contact Us", href: "/contact" },
    { title: "Work With Us", href: "/careers" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 p-5 flex justify-between items-center z-50 bg-black/75 backdrop-blur-sm">
      <Link href="/" className="relative w-32 h-32">
        <Image
          src="/logo1.png"
          alt="Logo"
          fill
          className="object-contain"
          priority
        />
      </Link>

      <div className="flex-grow border-t border-white mx-4"></div>

      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="w-10 h-10 flex items-center justify-center hover:bg-white/10 rounded-full transition-colors"
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
        <div className="absolute top-full right-0 mt-2 w-48 bg-black/95 rounded-lg shadow-lg overflow-hidden">
          {menuItems.map((item) => (
            <Link
              key={item.title}
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
