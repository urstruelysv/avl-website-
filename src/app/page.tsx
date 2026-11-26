import Dock from "./components/Dock";
import Hero from "./components/Hero";
import WhatWeDo from "./components/WhatWeDo";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";
import OnboardingProcess from "./components/Onbording";
import Founder from "./components/Founder";
export default function Home(){return <main className="signal-site"><Dock logoSrc="/logo.png"/><Hero/><OnboardingProcess/><WhatWeDo/><Founder/><section id="contact" className="contact-section" aria-label="Start a project"><ContactUs/></section><Footer/></main>}
