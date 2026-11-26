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
      <p className="signal-hero-description">We help businesses with websites and brand design, AI tools and workflow automation, and video and social content.</p>
      <div className="signal-hero-actions"><a className="signal-button" href="#contact">Start a project <span className="button-arrow"><ArrowUpRight size={20} /></span></a><a className="signal-link" href="#services">Explore our services <ArrowDown size={15} /></a></div>
      {/* TODO: Confirm the next available project slot and starting project price in INR. */}
      <div className="hero-disciplines"><span>Taking 1 new project. Next slot: TODO</span><i/><span>Projects start at ₹TODO</span></div>
    </div>
    <div className="hero-ground"><span>Aethos Vision Labs</span><span>Hyderabad, India</span><a href="#services">Explore our services <ArrowDown size={13}/></a></div>
  </section>;
}
