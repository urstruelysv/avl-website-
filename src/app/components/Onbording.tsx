import { Compass, Layers, Rocket, Plus, ArrowUpRight } from "lucide-react";
import "./process.css";

const steps = [
  {
    title: "Discovery",
    description: "Your goals set the direction. We get to know your business, your audience, and what’s standing in the way.",
    detail: "We get clear on the problem",
    tasks: ["Understand your goals and priorities", "Identify bottlenecks and opportunities", "Agree on what success should look like"],
    Icon: Compass,
  },
  {
    title: "Analysis & planning",
    description: "A good idea needs a workable plan. We shape the right approach around your requirements, budget, and existing tools.",
    detail: "You know what comes next",
    tasks: ["Define the scope and deliverables", "Choose the right tools and integrations", "Agree on the timeline and budget"],
    Icon: Layers,
  },
  {
    title: "Execution",
    description: "Then we make it real. Design, engineering, and content come together, with your feedback guiding the work along the way.",
    detail: "We keep you in the loop",
    tasks: ["Share progress and review the work together", "Test and refine before launch", "Provide the handover and documentation"],
    Icon: Rocket,
  },
];

export default function OnboardingProcess() {
  return (
    <section className="avl-process" aria-labelledby="process-heading">
      <div className="avl-process-inner">
        <div className="avl-process-intro">
          <h2 id="process-heading">How We Do It</h2>
          <p>From the first conversation<br className="hidden sm:block" /> to something you can put to work.</p>
        </div>
        <ol className="avl-process-list">
          {steps.map(({ title, description, detail, tasks, Icon }, index) => (
            <li className="avl-process-row" key={title}>
              <div className="avl-process-phase"><span>Step {index + 1}</span><h3>{title}</h3></div>
              <div className="avl-process-content">
                <div className="avl-process-story"><p>{description}</p><Icon className="avl-process-icon" strokeWidth={1.15} aria-hidden="true" /></div>
                <details className="avl-process-details">
                  <summary>{detail}<Plus size={20} strokeWidth={1.5} aria-hidden="true" /></summary>
                  <ul>{tasks.map(task => <li key={task}><ArrowUpRight size={14} aria-hidden="true" />{task}</li>)}</ul>
                </details>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
