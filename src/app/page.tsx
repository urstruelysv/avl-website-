import Dock from "./components/Dock";
import Hero from "./components/Hero";
import WhatWeDo from "./components/WhatWeDo";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";
export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Dock logoSrc="/logo.png" />
      <Hero />
      <WhatWeDo />
      <ContactUs />
      <Footer />
    </div>
  );
}
