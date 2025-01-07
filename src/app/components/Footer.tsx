"use client";

import Link from "next/link";
import { useInView } from "react-intersection-observer";
import { cn } from "@/lib/utils";

export default function Footer() {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <footer
      ref={ref}
      className={cn(
        "relative bg-black text-white py-16 px-4 sm:px-6 lg:px-8 border-t border-white/10",
        "opacity-0 translate-y-4 transition-all duration-700 ease-out",
        inView && "opacity-100 translate-y-0"
      )}
    >
      <div className="max-w-7xl mx-auto">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-blue-400">
              Aethos Vision Labs
            </h3>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              {["Services", "About Us", "Contact"].map((item) => (
                <li key={item}>
                  <Link
                    href={`#${item.toLowerCase().replace(" ", "-")}`}
                    className="text-white/70 hover:text-blue-400 transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Get in Touch</h3>
            <div className="space-y-2">
              <p className="text-white/70">
                <span className="text-blue-400">Email:</span>{" "}
                hello@aethosvision.com
              </p>
            </div>
            {/* Social Links */}
            <div className="flex space-x-4 pt-4">
              {["Twitter", "LinkedIn", "GitHub"].map((platform) => (
                <Link
                  key={platform}
                  href="#"
                  className="text-white/50 hover:text-blue-400 transition-colors"
                >
                  {platform}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-white/10">
          <p className="text-center text-sm text-white/50">
            © {new Date().getFullYear()} Aethos Vision Labs. All rights
            reserved.
          </p>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 right-0 w-1/3 h-1/2 bg-blue-400/[0.02] blur-[100px] rounded-full -z-10" />
      <div className="absolute top-0 left-0 w-1/4 h-1/3 bg-blue-600/[0.02] blur-[100px] rounded-full -z-10" />
    </footer>
  );
}
