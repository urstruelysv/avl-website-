import { ArrowUpRight, ArrowDown, Cpu, Film, Code2 } from "./StudioIcons";
import DitherField from "./DitherField";
import PixelHeading from "./PixelHeading";

export default function Hero() {
  return <section id="top" className="signal-hero" aria-label="Aethos Vision Labs">
    <DitherField />
    <div className="hero-signal-tag tag-code"><Code2 size={15} /> Digital experiences</div>
    <div className="hero-signal-tag tag-ai"><Cpu size={15} /> Built around your business</div>
    <div className="hero-signal-tag tag-film"><Film size={15} /> Ideas into motion</div>
    <div className="signal-hero-content">
      <PixelHeading as="h1" lines={["Magic,", "at your service."]} />
      <p className="signal-hero-description">We design websites, build useful technology, and create content.<br className="desktop-break" /> A creative and engineering studio for your next big move.</p>
      <div className="signal-hero-actions"><a className="signal-button" href="#contact">Let’s build something <ArrowUpRight size={17} /></a><a className="signal-link" href="#work">See our work <ArrowDown size={15} /></a></div>
      <div className="hero-proof"><a href="#work">Selected work <span>Indo Global School</span><span>Alpha Fitness</span><span>Cirro</span><ArrowUpRight size={14}/></a></div><div className="hero-disciplines"><span>Strategy & design</span><i/><span>AI & engineering</span><i/><span>Video & content</span></div>
    </div>
    <div className="hero-ground"><span>Aethos Vision Labs</span><span>Hyderabad, India <span className="ground-dot"/> Working everywhere.</span><a href="#services">A little vision goes a long way <ArrowDown size={13}/></a></div>
  </section>;
}
