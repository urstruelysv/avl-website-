"use client";

import { useEffect, useState } from "react";
import { RetroGrid } from "./magicui/Retrogrid";
import RotatingWords from "./RotatingWords";

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null; // Prevents hydration issues
  }

  return (
    <section className="relative min-h-dvh w-full overflow-hidden">
      <RetroGrid className="z-10 " />

      <div className="relative mx-auto flex min-h-dvh w-full max-w-7xl flex-col px-4 sm:px-6 lg:px-8 ">
        {/* Hero Content */}
        <div className="mt-16 sm:mt-20 lg:mt-32 flex flex-col items-center justify-center text-center ">
          <h1 className="max-w-4xl bg-gradient-to-r from-indigo-300 via-purple-400 to-white bg-clip-text text-4xl font-extrabold tracking-tight text-transparent sm:text-5xl lg:text-6xl mt-32">
            Tailor-made services for your{" "}
            <span className="inline-block">
              <RotatingWords />
            </span>
          </h1>
        </div>

        {/* Company Info */}
        <div className="absolute bottom-20 left-4 max-w-2xl sm:bottom-24 sm:left-8 lg:bottom-28 lg:left-16">
          <h2 className="mb-2 text-xl font-bold text-white/90 sm:text-2xl lg:text-3xl">
            We are Aethos Vision Labs
          </h2>
          <p className="mb-4 text-base text-white/70 sm:text-lg lg:text-xl">
            An <span className="font-mono text-blue-400">engineering</span> team
            helping businesses and brands turn views into cash with AI solutions
            and video content.
          </p>
          <div className="flex flex-col gap-1 text-sm text-white/60 sm:flex-row sm:items-center sm:gap-2 lg:text-base">
            <span>Based in Hyderabad, India</span>
            <span className="hidden h-1 w-1 rounded-full bg-white/30 sm:inline-block" />
            <span>Tinkering since 2020</span>
          </div>
        </div>

        {/* Decorative Spinner */}
        <div className="absolute bottom-4 right-4 h-20 w-20 sm:bottom-12 sm:right-12 sm:h-24 sm:w-24 lg:h-32 lg:w-32">
          <div className="relative h-full w-full">
            <div className="h-full w-full rounded-full border-4 border-white/10 border-t-white/90 animate-[spin_3s_linear_infinite]" />
          </div>
        </div>

        {/* Background Text */}
        <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
          <span className="block whitespace-pre-wrap bg-gradient-to-b from-[#ffd319] via-[#ff2975] to-[#8c1eff] bg-clip-text text-4xl font-bold tracking-tighter text-transparent">
            Magic, At Your Service
          </span>
        </div>
      </div>
    </section>
  );
}
