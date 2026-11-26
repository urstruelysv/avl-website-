"use client";
import { useEffect, useRef } from "react";

const BAYER = [0,8,2,10,12,4,14,6,3,11,1,9,15,7,13,5];
export default function DitherField({ className = "" }: { className?: string }) {
  const ref = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const canvas=ref.current;
    if(!canvas) return;
    const ctx=canvas.getContext("2d",{alpha:true});
    if(!ctx) return;
    const motion=matchMedia('(prefers-reduced-motion: reduce)');
    let frame=0,last=0,visible=true,w=0,h=0;
    const draw=(time:number)=>{
      frame=requestAnimationFrame(draw);
      if(!visible || document.hidden || time-last<130 || (motion.matches && last>0)) return;
      last=time;
      const cell=w<700?5:6;
      const drift=motion.matches?0:Math.sin(time/22000)*.07;
      ctx.clearRect(0,0,w,h);
      for(let y=0;y<h;y+=cell){
        for(let x=0;x<w;x+=cell){
          const u=x/w,v=y/h;
          const right=Math.exp(-Math.pow((u-.94-Math.sin(v*5+drift)*.13)/.19,2));
          const left=Math.exp(-Math.pow((u-.04-Math.sin(v*6+1)*.09)/.13,2))*.55;
          const curve=Math.exp(-Math.pow((v-.93+Math.sin(u*5+drift)*.13)/.17,2))*.64;
          const protect=1-.94*Math.exp(-Math.pow((u-.5)/.29,4)-Math.pow((v-.44)/.36,4));
          const shade=Math.min(.82,(right+left+curve)*(.42+.22*Math.sin(u*9+v*7+drift))*protect);
          const threshold=(BAYER[((y/cell)&3)*4+((x/cell)&3)]+.5)/16;
          if(shade>threshold){
            ctx.fillStyle=((x/cell+y/cell)%7===0)?'#b1c9ee':'#5474a7';
            ctx.globalAlpha=.25+shade*.6;
            ctx.fillRect(x,y,cell-1,cell-1);
          }
        }
      }
      ctx.globalAlpha=1;
    };
    const size=()=>{w=canvas.clientWidth;h=canvas.clientHeight;canvas.width=w;canvas.height=h;last=0;};
    const observer=new ResizeObserver(size);observer.observe(canvas);size();
    const intersection=new IntersectionObserver(entries=>{visible=entries[0].isIntersecting;});intersection.observe(canvas);
    const change=()=>{last=0;};motion.addEventListener('change',change);
    frame=requestAnimationFrame(draw);
    return()=>{cancelAnimationFrame(frame);observer.disconnect();intersection.disconnect();motion.removeEventListener('change',change);};
  },[]);
  return <canvas ref={ref} className={`dither-field ${className}`} aria-hidden="true" />;
}
