"use client";

import { BorderBeam } from "./magicui/BorderBeam";

export default function WhatWeDo() {
  return (
    <div className="min-h-screen bg-black text-white relative py-24 sm:py-32">
      {/* Top separator line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-8 sm:space-y-12">
          {/* Main description */}
          <p className="text-lg sm:text-xl lg:text-2xl text-white/80 leading-relaxed max-w-3xl">
            At{" "}
            <span className="font-bold text-blue-400">Aethos Vision Labs</span>,
            we're your all-in-one digital partner. Whether you need AI tools to
            streamline operations, automated solutions to boost efficiency, or
            creative content that turns views into loyal customers, we deliver
            results that fit your unique goals.
          </p>

          {/* Services Grid */}
          <div className="relative">
            {/* Adjust the number of meteors as needed */}
            <BorderBeam></BorderBeam>
            {/* Your main content goes here */}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 relative z-10">
              <div className="bg-white/5 rounded-lg p-6 sm:p-8 hover:bg-white/10 transition-colors backdrop-blur-sm border border-white/10">
                <h3 className="text-lg sm:text-xl font-bold mb-3 text-blue-400">
                  Digital Presence
                </h3>
                <p className="text-base text-white/70">
                  From logo design to web development, social media strategy to
                  digital marketing—we handle every aspect of your digital
                  footprint with precision and creativity.
                </p>
              </div>

              <div className="bg-white/5 rounded-lg p-6 sm:p-8 hover:bg-white/10 transition-colors backdrop-blur-sm border border-white/10">
                <BorderBeam></BorderBeam>
                <h3 className="text-lg sm:text-xl font-bold mb-3 text-blue-400">
                  AI-Driven Solutions
                </h3>
                <p className="text-base text-white/70">
                  Every decision is backed by data, delivering campaigns and
                  tools that work for you through our advanced AI-driven
                  insights and analytics.
                </p>
              </div>
            </div>
          </div>

          {/* Bottom highlight */}
          <div className="mt-8 border-l-2 border-blue-400 pl-4 bg-blue-400/5 py-4 rounded-r-lg backdrop-blur-sm">
            <p className="text-sm text-white/90">
              We're here to empower your business, brand, or YouTube channel
              with everything it needs to{" "}
              <span className="font-bold text-blue-400">
                stand out and grow
              </span>
              .
            </p>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 right-0 w-2/3 sm:w-1/2 h-1/3 sm:h-1/2 bg-blue-400/[0.03] blur-[50px] sm:blur-[100px] rounded-full -z-10" />
      <div className="absolute top-0 left-0 w-1/2 sm:w-1/3 h-1/4 sm:h-1/3 bg-blue-600/[0.03] blur-[50px] sm:blur-[100px] rounded-full -z-10" />

      {/* Bottom separator line */}
      <div className="absolute bottom-[20%] left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
    </div>
  );
}
