"use client";
import { useEffect } from "react";
import { Check, ArrowUpRight, Compass, Code2, Globe } from "./StudioIcons";
import { Stage, Window, Badge } from "@/components/stageshow/kit";
import { Card } from "@/components/stageshow/kit/parts/Card";
import type { Act } from "@/components/stageshow/kit/act";
import "./project-stage.css";

type Scene = { phase: number };
const initial: Scene = { phase: 0 };
const poster: Scene = { phase: 2 };
async function story(a: Act<Scene>) {
  await a.wait(1800);
  a.mark("create");
  a.put({ phase: 1 });
  await a.wait(2800);
  a.mark("deliver");
  a.put({ phase: 2 });
  await a.wait(2600);
}

export default function ProjectStage({ phase, frozen, active, onPhase }: { phase: number | null; frozen: boolean; active: number; onPhase: (phase: number) => void }) {
  return <Stage<Scene> width={720} height={480} compact={{ below: 560, width: 358, height: 450 }} theme="dark" accent="#8cb9ff" initial={initial} poster={poster} script={phase === null && !frozen ? story : undefined} play="once" className="project-stage">
    {(scene, _rect, layout) => {
      const current = phase ?? (frozen ? active : scene.phase);
      return <><ReportPhase phase={current} onPhase={onPhase} /><div className="service-scene" data-phase={current} aria-hidden="true">
        {layout === "compact" ? <Card pad="large" gap={0} className="service-mobile-page service-webpage"><WebsiteContent /></Card> : <Window title="Website design · Aethos Vision Labs" className="service-window"><div className="service-webpage"><WebsiteContent /></div></Window>}
        <Card pad="medium" gap={12} className="service-brief"><div className="service-card-title"><Compass size={18} /><span>The starting point</span><Badge tone="neutral">Brief</Badge></div><strong>A site that feels like us.</strong><p>Clear story. Original design.<br />A better first impression.</p></Card>
        <Card pad="medium" gap={12} className="service-making"><div className="service-card-title"><Code2 size={18} /><span>Coming together</span><Badge tone="accent">Creating</Badge></div><div className="service-checks"><span><Check size={16} />Design direction</span><span><Check size={16} />Responsive build</span><span><Check size={16} />Your feedback, included</span></div></Card>
        <Card pad="medium" gap={12} className="service-delivery"><div className="service-card-title"><Globe size={18} /><span>Ready to go live</span><Badge tone="accent">Delivered</Badge></div><strong>From your idea.<br />To your next chapter.</strong><p><Check size={16} /> Designed. Built. Handed over.</p></Card>
      </div></>;
    }}
  </Stage>;
}
function ReportPhase({ phase, onPhase }: { phase: number; onPhase: (phase: number) => void }) {
  useEffect(() => onPhase(phase), [phase, onPhase]);
  return null;
}

function WebsiteContent() { return <>

            <div className="service-web-nav"><span>your business.</span><span>About <i /> Our work</span></div>
            <div className="service-web-copy"><span className="service-web-intro">A fresh perspective.</span><h3>Made for<br />what’s next.</h3><p>An original website.<br />Built around your business.</p><span className="service-web-action">Let’s talk <ArrowUpRight size={15} /></span></div>
            <div className="service-orbit"><img src="/studio-orb.svg" alt="" width={270} height={270} /><div className="service-design-ring" /></div>
            <div className="service-web-bottom"><span>Strategy</span><span>Design</span><span>Development</span></div>

</>; }
