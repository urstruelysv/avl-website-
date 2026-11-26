import { ArrowUpRight, ArrowUp } from "./StudioIcons";
import HyderabadClock from "./HyderabadClock";
export default function Footer(){return <footer className="signal-footer signal-wrap"><a className="footer-wordmark" href="#top">aethos<span>vision labs</span></a><p>© {new Date().getFullYear()} Aethos Vision Labs<br/><HyderabadClock/></p><div><a href="mailto:hello@aethoscompany.in">Say hello <ArrowUpRight size={14}/></a><a href="#top">Back to top <ArrowUp size={14}/></a></div></footer>}
