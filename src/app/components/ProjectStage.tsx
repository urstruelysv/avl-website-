"use client";
import { Check, FileText, Sliders, ArrowRight, Mail, GitBranch, UserCheck } from "lucide-react";
import { Stage, Window, Bar, Badge } from "@/components/stageshow/kit";
import { Row } from "@/components/stageshow/kit/parts/Row";
import { Card } from "@/components/stageshow/kit/parts/Card";
import { Text } from "@/components/stageshow/kit/window";
import "./project-stage.css";

export default function ProjectStage({ phase }: { phase: number }) {
 return <Stage width={720} height={480} compact={{below:560,width:358,height:450}} theme="dark" accent="#8cb9ff" className="project-stage">
 {(_s,_rect,layout)=>layout==='compact' ? <Card pad="medium" className="project-compact-document"><WorkspaceContent phase={phase}/></Card> : <Window title="Project workspace" className="project-window" sidebarWidth={136} sidebar={<aside className="project-side"><span className="project-side-label">WORKSPACE</span>{[['Brief',FileText],['Workflow',GitBranch],['Handover',UserCheck]].map(([label,Icon],i)=>{const Mark=Icon as typeof FileText;return <div key={i} className="project-side-item" data-on={phase===i||undefined}><Mark size={14}/><span>{label as string}</span></div>})}<div className="project-side-filler"><Bar w={70}/><Bar w={52}/><Bar w={64}/></div></aside>}><div className="project-body"><WorkspaceContent phase={phase}/></div></Window>}
 </Stage>;
}

function WorkspaceContent({phase}:{phase:number}) { return <><div className="project-heading"><Text className="project-overline">A sample project</Text><Text className="project-name">Customer enquiry workflow</Text></div>
   <div className="project-scenes">
    <div className="project-scene" data-active={phase===0||undefined} aria-hidden={phase!==0}>
     <div className="project-scene-title"><Text>Start with the right questions.</Text><Badge tone="neutral">Brief</Badge></div>
     <Row className="project-row" lead={<FileText size={18}/>} title={<Text>What needs to change?</Text>} preview={<Text wrap>Scattered enquiries. Manual follow-ups.</Text>}/>
     <Row className="project-row" lead={<Sliders size={18}/>} title={<Text>What should stay in place?</Text>} preview={<Text wrap>Your existing tools. Your team’s final say.</Text>}/>
     <Row className="project-row" lead={<UserCheck size={18}/>} title={<Text>Who is this for?</Text>} preview={<Text wrap>The team handling enquiries every day.</Text>}/>
     <div className="project-outcome"><Check size={15}/><Text wrap>A clear brief. A shared direction.</Text></div>
    </div>
    <div className="project-scene" data-active={phase===1||undefined} aria-hidden={phase!==1}>
     <div className="project-scene-title"><Text>Make the moving parts connect.</Text><Badge tone="accent">Workflow</Badge></div>
     {[[Mail,'Capture the enquiry','Website form → shared inbox'],[GitBranch,'Prepare a follow-up','AI-assisted draft, with context'],[UserCheck,'Keep a human in the loop','Your team reviews and approves']].map(([Icon,title,subtitle],i)=>{const Mark=Icon as typeof Mail;return <Row key={i} className="project-row" lead={<Mark size={18}/>} title={<Text>{title as string}</Text>} subtitle={<Text>{subtitle as string}</Text>} meta={<span className="project-row-step">0{i+1}</span>}/>})}
     <div className="project-outcome"><ArrowRight size={15}/><Text>One connected flow.</Text></div>
    </div>
    <div className="project-scene" data-active={phase===2||undefined} aria-hidden={phase!==2}>
     <div className="project-scene-title"><Text>Ready for the people using it.</Text><Badge tone="accent">Handover</Badge></div>
     <Card pad="medium" className="project-draft"><div className="project-draft-head"><Mail size={16}/><Text>Follow-up draft</Text><Badge tone="accent">Review</Badge></div><Text wrap className="project-draft-copy">Thanks for sharing your idea. We’d love to learn more about your goals and explore the right next steps together.</Text></Card>
     <Row className="project-row project-row-small" lead={<Check size={16}/>} title={<Text>Connected and tested</Text>}/>
     <Row className="project-row project-row-small" lead={<Check size={16}/>} title={<Text>Documented for your team</Text>}/>
     <div className="project-outcome"><UserCheck size={15}/><Text>Your team stays in control.</Text></div>
    </div>
   </div>
  </>; }
