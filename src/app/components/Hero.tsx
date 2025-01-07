"use client";

import { Suspense } from "react";
import dynamic from "next/dynamic";
import RotatingWords from "./RotatingWords";
import { RetroGrid } from "./magicui/Retrogrid";

const Logo3D = dynamic(() => import("./Logo3D").then((mod) => mod.default), {
  ssr: false,
  loading: () => (
    <div className="w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64 border border-white/10 rounded-lg animate-pulse" />
  ),
});

export default function Hero() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[100svh] relative px-3 sm:px-4 md:px-6 lg:px-8">
      <RetroGrid className="z-10" />

      {/* Main Content Container */}
      <div className="relative w-full max-w-7xl mx-auto flex flex-col min-h-[100svh] z-20">
        {/* Top Section with Logo and Heading */}
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-6 sm:gap-8 lg:gap-16 pt-16 sm:pt-20 lg:pt-32">
          {/* Left side - Headings */}
          <div className="w-full lg:w-1/2 space-y-2 sm:space-y-4">
            <h1 className="text-2xl sm:text-3xl lg:text-5xl xl:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 via-purple-400 to-white text-center lg:text-left">
              Tailor-made services for your <RotatingWords />
            </h1>

            {/* <p className="text-xl sm:text-2xl lg:text-4xl xl:text-5xl font-bold text-white text-center lg:text-left">
              <RotatingWords />
            </p> */}
          </div>

          {/* Right side - Logo */}
          {/* <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
            <Suspense
              fallback={
                <div className="w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64 border border-white/10 rounded-lg" />
              }
            >
              <Logo3D />
            </Suspense>
          </div> */}
        </div>

        {/* Bottom Content */}
        <div className="absolute bottom-20 sm:bottom-24 lg:bottom-28 left-3 sm:left-8 lg:left-16 max-w-[calc(100%-1.5rem)] sm:max-w-lg md:max-w-xl lg:max-w-2xl">
          <p className="text-base sm:text-xl md:text-2xl lg:text-3xl font-bold mb-2 text-white/90">
            We are Aethos Vision Labs
          </p>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white/70 mb-3 sm:mb-4">
            An <span className="font-mono text-blue-400">engineering</span> team
            helping businesses and brands turn views into cash with AI solutions
            and video content.
          </p>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-1 sm:gap-2 text-xs sm:text-sm md:text-base text-white/60">
            <span>Based in Hyderabad, India</span>
            <span className="hidden sm:block w-1 h-1 bg-white/30 rounded-full" />
            <span>Tinkering from 2020</span>
          </div>
        </div>

        <div className="absolute bottom-4 sm:bottom-12 right-3 sm:right-12 w-20 sm:w-24 lg:w-32 h-20 sm:h-24 lg:h-32">
          <div className="relative w-full h-full">
            <div className="w-full h-full border-3 sm:border-4 border-white/10 border-t-white/90 rounded-full animate-spin" />
          </div>
        </div>
        <span className="pointer-events-none z-10 whitespace-pre-wrap bg-gradient-to-b from-[#ffd319] via-[#ff2975] to-[#8c1eff] bg-clip-text text-center text-7xl font-bold leading-none tracking-tighter text-transparent">
          You deserve the Best
        </span>
      </div>
    </div>
  );
}
