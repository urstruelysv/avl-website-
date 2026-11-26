"use client";
import { useState } from "react";
import { ArrowUpRight, Compass, Layers, Rocket } from "lucide-react";
import PixelHeading from "./PixelHeading";
import ProjectStage from "./ProjectStage";

const steps=[
 {name:'Discover',title:'First, we get inside your world.',copy:'Your business is the starting point. We listen, ask questions, and get clear on what needs to change before choosing how to build it.',detail:'A shared brief. Clear priorities. A real problem to solve.',Icon:Compass},
 {name:'Build',title:'Then, we connect the right pieces.',copy:'Strategy, design, and engineering work together. We build around your goals and existing tools, with regular reviews along the way.',detail:'An agreed scope. Thoughtful execution. No black box.',Icon:Layers},
 {name:'Launch',title:'Finally, we put it to work.',copy:'We test, refine, and get the work ready for the people using it. You get a considered handover, with the context to keep moving.',detail:'Tested, documented, and ready for your team.',Icon:Rocket}
];
export default function OnboardingProcess(){
 const [phase,setPhase]=useState(0);
 return <section id="how-we-work" className="signal-process section-pad">
 <div className="signal-wrap"><div className="section-center"><PixelHeading lines={["From ‘what if’", "to what’s next."]}/><p>Good work doesn’t happen by accident.<br/>Here’s how we turn your ideas into something useful.</p></div>
 <div className="process-experience"><div className="process-controls" role="group" aria-label="Explore our process">{steps.map(({name,title,copy,detail,Icon},i)=><button type="button" key={name} className="process-choice" aria-pressed={phase===i} aria-controls="process-preview" onClick={()=>setPhase(i)}><span className="process-choice-top"><span className="process-index">0{i+1}</span><span>{name}</span><Icon size={18} strokeWidth={1.4}/></span><strong>{title}</strong><span className="process-choice-copy">{copy}</span>{phase===i&&<span className="process-choice-detail"><ArrowUpRight size={14}/>{detail}</span>}</button>)}</div><div className="process-preview" id="process-preview"><div className="process-mobile-explanation" aria-live="polite"><h3>{steps[phase].title}</h3><p>{steps[phase].copy}</p></div><ProjectStage phase={phase}/><p className="demo-caption">Illustrative workspace · an enquiry-to-follow-up project</p><div className="process-preview-bottom"><span>Built around your goals.<br/><b>Designed for the people using it.</b></span><a href="#contact" className="signal-link">Let’s talk about yours <ArrowUpRight size={16}/></a></div></div></div>
 </div></section>;
}
