import { Repeat, Link2, Database, ArrowUpRight } from "lucide-react";

const capabilities = [
  { Icon: Repeat, title: "Automate repetitive work", description: "Reduce manual steps in everyday operations with workflows built around your team." },
  { Icon: Link2, title: "Connect your tools", description: "Bring the systems you already use together so information can move between them." },
  { Icon: Database, title: "Put your data to work", description: "Turn scattered information into useful insights that help you make decisions." },
];

export default function AiSolutions() {
  return (
    <section className="border-t border-white/10 bg-zinc-950 px-5 py-16 text-white sm:px-8 sm:py-24" aria-labelledby="ai-heading">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2 lg:gap-20">
        <div>
          <h2 id="ai-heading" className="max-w-lg text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">AI that works for<br className="hidden sm:block" /> your business.</h2>
          <p className="mt-5 max-w-md text-base leading-7 text-white/60">Technology should make work simpler. We focus on practical AI and automation solutions that fit your operations and goals.</p>
          <a href="#contact" className="mt-7 inline-flex min-h-11 items-center gap-3 text-sm font-medium text-blue-400 transition-colors hover:text-blue-300">Discuss your workflow <ArrowUpRight size={16} aria-hidden="true" /></a>
        </div>
        <ul className="divide-y divide-white/10 border-y border-white/10">
          {capabilities.map(({ Icon, title, description }) => (
            <li key={title} className="flex gap-5 py-6 sm:py-7">
              <Icon size={22} strokeWidth={1.5} className="mt-1 shrink-0 text-blue-400" aria-hidden="true" />
              <div><h3 className="text-lg font-medium">{title}</h3><p className="mt-2 max-w-md text-sm leading-7 text-white/60">{description}</p></div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
