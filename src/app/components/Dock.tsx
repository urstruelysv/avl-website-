"use client";
import { ArrowUpRight } from "./StudioIcons";
import { useEffect, useRef, useState } from "react";

export default function Dock() {
 const [open,setOpen]=useState(false);
 const ref=useRef<HTMLElement>(null);
 const toggle=useRef<HTMLButtonElement>(null);
 useEffect(()=>{
  if(!open)return;
  const previousOverflow = document.body.style.overflow;
  document.body.style.overflow = 'hidden';
  const focusFrame = requestAnimationFrame(() => ref.current?.querySelector<HTMLAnchorElement>('.signal-mobile-nav a')?.focus());
  const key=(e:KeyboardEvent)=>{
    if(e.key==='Escape'){setOpen(false);toggle.current?.focus();}
    if(e.key==='Tab'){
      const links=ref.current?.querySelectorAll<HTMLAnchorElement>('.signal-mobile-nav a');
      const last=links?.[links.length-1];
      if(!e.shiftKey&&document.activeElement===last){e.preventDefault();toggle.current?.focus();}
      else if(e.shiftKey&&document.activeElement===toggle.current){e.preventDefault();last?.focus();}
    }
  };
  const outside=(e:PointerEvent)=>{if(!ref.current?.contains(e.target as Node))setOpen(false);};
  document.addEventListener('keydown',key);document.addEventListener('pointerdown',outside);
  return()=>{cancelAnimationFrame(focusFrame);document.body.style.overflow=previousOverflow;document.removeEventListener('keydown',key);document.removeEventListener('pointerdown',outside);};
 },[open]);
 const links=[['Services','#services'],['How we work','#how-we-work']];
 return <header className="signal-header" ref={ref}><a className="signal-brand" href="#top" aria-label="Aethos Vision Labs home"><span>aethos<span className="brand-labs">vision labs</span></span></a><nav className="signal-desktop-nav" aria-label="Main navigation">{links.map(([label,href])=><a href={href} key={href}>{label}</a>)}</nav><a className="signal-nav-cta" href="#contact">Get in touch <ArrowUpRight size={16}/></a><button ref={toggle} className="signal-menu-toggle" type="button" aria-label={open?'Close menu':'Open menu'} aria-expanded={open} aria-controls="signal-menu" onClick={()=>setOpen(!open)}><span className="menu-glyph" data-open={open||undefined} aria-hidden="true"><i/><i/></span></button>{open&&<nav id="signal-menu" className="signal-mobile-nav" aria-label="Mobile navigation">{[...links,['Get in touch','#contact']].map(([label,href])=><a key={href} href={href} onClick={()=>setOpen(false)}>{label}<ArrowUpRight size={16}/></a>)}</nav>}</header>;
}
