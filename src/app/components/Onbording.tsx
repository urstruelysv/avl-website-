import { MessageSquare, Map, CheckCircle2, ArrowRight } from "lucide-react";

const steps = [
  {
    title: "Understand your goals",
    description: "We start with your business, audience, and the problem you want to solve.",
    outcome: "A clear brief and shared priorities",
    Icon: MessageSquare,
  },
  {
    title: "Make a practical plan",
    description: "Together, we define the approach, deliverables, budget, and timeline before the work begins.",
    outcome: "An agreed scope and a roadmap",
    Icon: Map,
  },
  {
    title: "Build, review, and launch",
    description: "We bring the plan to life, share progress, and refine the work with your feedback before launch.",
    outcome: "A finished solution, ready to use",
    Icon: CheckCircle2,
  },
];

export default function OnboardingProcess() {
  return (
    <section className="border-t border-white/10 bg-black px-5 py-16 text-white sm:px-8 sm:py-24" aria-labelledby="process-heading">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-2xl">
          <h2 id="process-heading" className="text-3xl font-semibold tracking-tight sm:text-4xl">How We Do It</h2>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-white/60">A straightforward process. Clear expectations, close collaboration, and work that solves the right problem.</p>
        </div>
        <ol className="mt-10 grid gap-8 md:mt-14 md:grid-cols-3 md:gap-10">
          {steps.map(({ title, description, outcome, Icon }, index) => (
            <li key={title} className="relative border-t border-white/20 pt-6">
              <div className="mb-6 flex items-center justify-between">
                <Icon size={24} strokeWidth={1.5} className="text-blue-400" aria-hidden="true" />
                <span className="text-xs tabular-nums text-white/40">0{index + 1}</span>
              </div>
              <h3 className="text-xl font-semibold tracking-tight">{title}</h3>
              <p className="mt-3 text-sm leading-7 text-white/60">{description}</p>
              <p className="mt-5 flex items-start gap-2 text-xs leading-6 text-white/80"><ArrowRight size={14} className="mt-1 shrink-0 text-blue-400" aria-hidden="true" />{outcome}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
