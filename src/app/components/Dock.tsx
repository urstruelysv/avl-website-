"use client";
import Image from "next/image";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export default function Dock({ logoSrc }: { logoSrc: string }) {
 const [open,setOpen]=useState(false);
 const ref=useRef<HTMLElement>(null);
 const toggle=useRef<HTMLButtonElement>(null);
 useEffect(()=>{
  if(!open)return;
  const key=(e:KeyboardEvent)=>{if(e.key==='Escape'){setOpen(false);toggle.current?.focus();}};
  const outside=(e:PointerEvent)=>{if(!ref.current?.contains(e.target as Node))setOpen(false);};
  document.addEventListener('keydown',key);document.addEventListener('pointerdown',outside);
  return()=>{document.removeEventListener('keydown',key);document.removeEventListener('pointerdown',outside);};
 },[open]);
 const links=[['What we do','#services'],['How we work','#how-we-work'],['The people','#about-us']];
 return <header className="signal-header" ref={ref}><a className="signal-brand" href="#" aria-label="Aethos Vision Labs home"><Image src={logoSrc} width={36} height={36} alt="" priority/><span>aethos<span className="brand-labs">vision labs</span></span></a><nav className="signal-desktop-nav" aria-label="Main navigation">{links.map(([label,href])=><a href={href} key={href}>{label}</a>)}</nav><a className="signal-nav-cta" href="#contact">Start a conversation <ArrowUpRight size={15}/></a><button ref={toggle} className="signal-menu-toggle" type="button" aria-label={open?'Close menu':'Open menu'} aria-expanded={open} aria-controls="signal-menu" onClick={()=>setOpen(!open)}>{open?<X size={22}/>:<Menu size={22}/>}</button>{open&&<nav id="signal-menu" className="signal-mobile-nav" aria-label="Mobile navigation">{[...links,['Start a conversation','#contact']].map(([label,href])=><a key={href} href={href} onClick={()=>setOpen(false)}>{label}<ArrowUpRight size={16}/></a>)}</nav>}</header>;
}
