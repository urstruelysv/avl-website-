"use client";

import { useState } from "react";

const email = "hello@aethoscompany.in";

export default function EmailCopy() {
  const [status, setStatus] = useState("");

  async function copyEmail() {
    try {
      if (!navigator.clipboard?.writeText) throw new Error("Clipboard unavailable");
      await navigator.clipboard.writeText(email);
      setStatus("Email copied.");
    } catch {
      setStatus("Could not copy. Select the email address or open the email link.");
    }
  }

  return (
    <div className="mt-8 text-sm">
      <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
        <a href={`mailto:${email}`} className="text-blue-400 underline-offset-4 hover:underline">
          {email}
        </a>
        <button
          type="button"
          onClick={copyEmail}
          aria-label="Copy email address"
          className="text-white/70 underline underline-offset-4 hover:text-white"
        >
          Copy
        </button>
      </div>
      <p role="status" aria-live="polite" className="mt-2 text-white/70">{status}</p>
    </div>
  );
}
