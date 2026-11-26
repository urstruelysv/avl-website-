import Dock from "./components/Dock";
import Hero from "./components/Hero";
import WhatWeDo from "./components/WhatWeDo";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";
import OnboardingProcess from "./components/Onbording";
import WorkStrip from "./components/SelectedWork";
import SiteMotion from "./components/SiteMotion";
export default function Home(){return <SiteMotion><Dock/><Hero/><WhatWeDo/><WorkStrip/><OnboardingProcess/><section id="contact" className="contact-section" aria-label="Start a project"><ContactUs/></section><Footer/></SiteMotion>}
