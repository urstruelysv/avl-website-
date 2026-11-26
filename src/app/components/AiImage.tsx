import { ArrowUpRight } from "lucide-react";
import AutomationDemo from "./AutomationDemo";

export default function AiSolutions() {
  return (
    <section className="border-t border-white/10 bg-black px-5 py-16 text-white sm:px-8 sm:py-24" aria-labelledby="ai-heading">
      <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[.8fr_1.2fr] lg:gap-12">
        <div>
          <h2 id="ai-heading" className="max-w-lg text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">AI that works for<br className="hidden sm:block" /> your business.</h2>
          <p className="mt-5 max-w-md text-base leading-7 text-white/60">Technology should make work simpler. We focus on practical AI and automation solutions that fit your operations and goals.</p>
          <a href="#contact" className="mt-7 inline-flex min-h-11 items-center gap-3 text-sm font-medium text-blue-400 transition-colors hover:text-blue-300">Discuss your workflow <ArrowUpRight size={16} aria-hidden="true" /></a>
        </div>
        <figure className="min-w-0 overflow-hidden">
          <AutomationDemo />
          <figcaption className="mt-4 pl-4 text-xs text-white/40">An illustrative workflow: enquiry → draft → human review.</figcaption>
        </figure>
      </div>
    </section>
  );
}
