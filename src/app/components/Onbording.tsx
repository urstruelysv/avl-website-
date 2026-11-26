"use client";
import { useState } from "react";
import { ArrowUpRight, Compass, PenTool, Send, Play } from "./StudioIcons";
import PixelHeading from "./PixelHeading";
import ProjectStage from "./ProjectStage";
import { useSiteMotion } from "./SiteMotion";

const steps = [
  { name: "Discover", title: "Understand the brief.", copy: "We get to know your business, your audience, and what you want to change. Then we agree on the scope, budget, and next steps.", Icon: Compass },
  { name: "Build", title: "Design and build.", copy: "Design, development, and content come together around your brief. You see the work as it develops, with room for feedback along the way.", Icon: PenTool },
  { name: "Launch", title: "Deliver and hand over.", copy: "We test the details, help get everything live, and hand it over properly. A website, an automation, or content your team can put to work.", Icon: Send },
];

export default function OnboardingProcess() {
  const [selected, setSelected] = useState<number | null>(null);
  const [active, setActive] = useState(0);
  const [run, setRun] = useState(0);
  const { enabled, reduced } = useSiteMotion();
  const phase = selected ?? active;
  return <section id="how-we-work" className="signal-process section-pad">
    <div className="signal-wrap">
      <div className="section-center"><PixelHeading lines={["How we work."]} /><p>A clear brief, regular feedback, and a proper handover.</p></div>
      <div className="process-experience">
        <div className="process-controls" role="group" aria-label="Explore our services process">
          {steps.map(({ name, title, copy, Icon }, i) => <button type="button" key={name} className="process-choice" aria-pressed={phase === i} aria-controls="process-preview" onClick={() => { setSelected(i); setActive(i); }}>
            <span className="process-choice-top"><span className="process-index">0{i + 1}</span><span>{name}</span><Icon size={48} strokeWidth={1.25} aria-hidden="true" /></span>
            <strong>{title}</strong><span className="process-choice-copy">{copy}</span>
          </button>)}
        </div>
        <div className="process-preview" id="process-preview">
          <div className="process-mobile-explanation" aria-live={selected === null ? "off" : "polite"}><h3>{steps[phase].title}</h3><p>{steps[phase].copy}</p></div>
          <ProjectStage key={run} phase={selected} frozen={!enabled && !reduced} active={active} onPhase={setActive} />
          <div className="process-demo-meta"><p className="demo-caption">A website project, in a nutshell · illustrative process</p><button type="button" className="replay-control" onClick={() => { setSelected(null); setActive(0); setRun(run + 1); }} disabled={!enabled}><Play size={13} /> Replay</button></div>
          <div className="process-preview-bottom"><a href="#contact" className="signal-link">Let’s talk about yours <ArrowUpRight size={16} aria-hidden="true" /></a></div>
        </div>
      </div>
    </div>
  </section>;
}
