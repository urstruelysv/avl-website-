import Image from "next/image";
import { ArrowUpRight } from "./StudioIcons";
import PixelHeading from "./PixelHeading";

const work = [
  { name: "Indo Global School", type: "Education · Website & school management", copy: "A campus website and the systems behind admissions and everyday operations.", href: "https://www.indoglobalschooligs.com/", image: "/work/indo-global.jpg" },
  { name: "Cirro", type: "Commerce · Brand website", copy: "A digital presence and shopping experience for a bottled water brand.", href: "https://cirrowtr.in/", image: "/work/cirro.jpg" },
  { name: "Alpha Fitness", type: "Fitness · Business website", copy: "A bold first impression for a local fitness business.", href: "https://alpha-ashy.vercel.app/", image: "/work/alpha-fitness.jpg" },
];
export default function SelectedWork() {
  return <section id="work" className="selected-work section-pad">
    <div className="signal-wrap">
      <div className="work-heading"><PixelHeading lines={["Less talk.", "More real things."]} /><div><p>Websites for businesses with something to say.</p><a href="https://saivamshi.aethoscompany.in/projects" target="_blank" rel="noreferrer" className="signal-link">From our founder’s portfolio <ArrowUpRight size={16} /></a></div></div>
      <div className="work-grid">{work.map(({ name, type, copy, href, image }, i) => <article className="work-project" key={name}>
        <a href={href} target="_blank" rel="noreferrer" className="work-image-link" aria-label={`Visit ${name} website`}><div className="work-image"><Image src={image} width={1440} height={960} alt={`${name} website preview`} sizes={i === 0 ? "(max-width: 800px) 90vw, 60vw" : "(max-width: 800px) 90vw, 40vw"} /><span className="work-visit"><ArrowUpRight size={24} /></span></div></a>
        <div className="work-project-caption"><div><span className="work-type">{type}</span><h3><a href={href} target="_blank" rel="noreferrer">{name} <ArrowUpRight size={20} /></a></h3><p>{copy}</p></div></div>
      </article>)}</div>
      <p className="work-credit">Selected business builds from Sai Vamshi Gannoju’s portfolio. Visit each site to explore the work.</p>
    </div>
  </section>;
}
