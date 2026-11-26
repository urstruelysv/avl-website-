import Dock from "./components/Dock";
import Hero from "./components/Hero";
import WhatWeDo from "./components/WhatWeDo";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";
import OnboardingProcess from "./components/Onbording";
import Companieslist from "./components/Companieslist";
import Founder from "./components/Founder";
import AiImage from "./components/AiImage";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Dock logoSrc="/logo.png" />
      <Hero />
      <Companieslist />
      <section id="services" aria-label="Our services"><WhatWeDo /></section>
      <AiImage />
      <OnboardingProcess />
      <section id="contact" aria-label="Contact us"><ContactUs /></section>
      <section id="about-us" aria-label="About our founders"><Founder /></section>
      <Footer />
    </div>
  );
}
