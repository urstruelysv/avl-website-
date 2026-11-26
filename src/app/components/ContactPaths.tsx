"use client";

import { trackContactEvent } from "@/lib/analytics";
import { ArrowUpRight } from "./StudioIcons";

export default function ContactPaths() {
  return (
    <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm">
      <a
        href="https://cal.com/vamshi007/15min"
        className="inline-flex items-center gap-2 text-blue-400 underline-offset-4 hover:underline"
        onClick={() => trackContactEvent("book_call", "contact")}
      >
        Book a call <ArrowUpRight size={16} aria-hidden="true" />
      </a>
      <a
        href="https://wa.me/917286885570"
        className="inline-flex items-center gap-2 text-blue-400 underline-offset-4 hover:underline"
        onClick={() => trackContactEvent("whatsapp", "contact")}
      >
        WhatsApp <ArrowUpRight size={16} aria-hidden="true" />
      </a>
    </div>
  );
}
