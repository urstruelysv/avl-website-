"use client";

import { ArrowUpRight, ArrowDown } from "lucide-react";
import { RetroGrid } from "./magicui/Retrogrid";
import RotatingWords from "./RotatingWords";

export default function Hero() {
  return (
    <section className="avl-hero relative overflow-hidden bg-black text-white">
      <RetroGrid className="opacity-30" />
      <div className="relative z-10 mx-auto max-w-7xl px-5 pb-10 pt-44 sm:px-8 sm:pt-52 lg:pt-56">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-balance text-[clamp(1.75rem,5vw,3.75rem)] font-bold leading-[1.15] tracking-tight sm:text-5xl lg:text-6xl">
            Tailor-made services for your<br className="hidden sm:block" />{" "}
            <span className="inline-block min-h-[2.3em] max-w-full sm:min-h-[1.15em]"><RotatingWords /></span>
          </h1>
          <p className="mt-5 text-base text-white/60 sm:text-lg">Magic, At Your Service</p>
          <a href="#contact" className="mt-8 inline-flex min-h-12 items-center gap-6 rounded-md bg-blue-400 px-6 py-3 text-sm font-semibold text-black transition-colors hover:bg-blue-300">Work with us <ArrowUpRight size={18} aria-hidden="true" /></a>
        </div>
        <div className="mt-20 flex flex-col justify-between gap-8 border-t border-white/15 pt-8 sm:mt-24 sm:flex-row sm:items-end lg:mt-28">
          <div className="max-w-xl">
            <h2 className="mb-3 text-xl font-semibold sm:text-2xl">We are Aethos Vision Labs</h2>
            <p className="text-base leading-relaxed text-white/65">An <span className="text-blue-400">engineering</span> team helping businesses and brands turn views into cash with AI solutions and video content.</p>
          </div>
          <div className="space-y-3 sm:max-w-xs text-xs text-white/50 sm:text-right">
            <p>Based in Hyderabad, India · Tinkering since 2020</p>
            <a href="#services" className="inline-flex min-h-11 items-center gap-3 text-white/80 transition-colors hover:text-blue-400">Explore our services <ArrowDown size={14} aria-hidden="true" /></a>
          </div>
        </div>
      </div>
    </section>
  );
}
