import { ArrowUpRight, ArrowRight, Code2, Film, Workflow, Check } from "lucide-react";
import WorkflowDemo from "./components/WorkflowDemo";

const services = [
  { number: "01", icon: Code2, title: "Digital experiences.", description: "Distinctive brands and websites that make your first impression count.", tags: "Brand identity / Web design / Development" },
  { number: "02", icon: Workflow, title: "Less busywork. More possibility.", description: "AI tools and connected workflows built around how your business actually works.", tags: "AI solutions / Automation / Integrations" },
  { number: "03", icon: Film, title: "Content with a purpose.", description: "Video and creative that turn a passing glance into a lasting connection.", tags: "Video editing / Social content / Strategy" },
];

export default function Home() {
  return (
    <main>
      <header className="site-nav wrap">
        <a href="#" className="wordmark" aria-label="Aethos Vision Labs home">aethos<span>®</span><small>VISION LABS</small></a>
        <nav aria-label="Main navigation"><a href="#services">What we do</a><a href="#approach">Our approach</a><a href="#about">The studio</a></nav>
        <a className="nav-cta" href="#contact">Let’s talk <ArrowUpRight size={16}/></a>
      </header>

      <section className="hero wrap">
        <div className="hero-top"><span className="eyebrow"><span className="status-dot"/> INDEPENDENT MINDS. SHARED VISION.</span><span className="location">HYDERABAD, INDIA ↗ WORLDWIDE</span></div>
        <div className="hero-grid">
          <div className="hero-copy"><h1>Good ideas.<br/>Great execution.<br/><span>Real impact.</span></h1><p>We’re Aethos Vision Labs. Your creative and engineering partner for brands, digital experiences, and a smarter way to work.</p><div className="hero-actions"><a className="button" href="#contact">Let’s build something <ArrowUpRight size={18}/></a><a className="text-link" href="#services">Explore our services <ArrowRight size={16}/></a></div></div>
          <div className="hero-visual"><div className="visual-label"><span>FROM IDEA TO OUT IN THE WORLD</span><span>AVL / 001</span></div><WorkflowDemo/><div className="visual-caption"><span className="status-dot"/> A little vision. A lot of making it happen.</div></div>
        </div>
        <div className="hero-bottom"><span>STRATEGY MEETS CRAFT.</span><span>ENGINEERING MEETS IMAGINATION.</span><a href="#services">SCROLL TO EXPLORE ↓</a></div>
      </section>

      <section id="services" className="services wrap section-space"><div className="section-heading"><span className="eyebrow">01 / WHAT WE DO</span><h2>Big-picture thinkers.<br/><span>Roll-up-our-sleeves doers.</span></h2><p>From the first “what if” to the final launch.<br/>One team, built around your next move.</p></div><div className="service-grid">{services.map(({number, icon: Icon, title, description, tags})=><a href="#contact" className="service" key={number}><div className="service-top"><Icon size={25} strokeWidth={1.4}/><span>{number}</span></div><h3>{title}</h3><p>{description}</p><div className="service-foot"><span>{tags}</span><ArrowUpRight size={20}/></div></a>)}</div></section>

      <section id="approach" className="approach section-space"><div className="wrap approach-grid"><div><span className="eyebrow">02 / HOW WE MAKE IT HAPPEN</span><h2>No handoffs.<br/>No guesswork.<br/><span>Just forward.</span></h2><p>We keep the team close and the process clear. You bring the ambition. We bring the people who can make it real.</p></div><div className="steps">{[["01","Find the right problem.","We listen, ask better questions, and get clear on what success looks like."],["02","Make something that matters.","Strategy, design, and engineering come together. You stay in the loop."],["03","Launch. Learn. Keep moving.","We ship thoughtfully, see what works, and help you take the next step."]].map(([n,t,d])=><div className="step" key={n}><span>{n}</span><div><h3>{t}</h3><p>{d}</p></div><Check size={17}/></div>)}</div></div></section>

      <section id="about" className="about wrap section-space"><span className="eyebrow">03 / THE PEOPLE BEHIND THE PIXELS</span><div className="about-grid"><h2>A small team.<br/><span>A wider perspective.</span></h2><div><p className="about-intro">Engineers by training. Creators by instinct. We connect technology and storytelling to help businesses move forward.</p><div className="founders"><div><strong>Sai Vamshi Gannoju</strong><span>Founder & CEO · AI & engineering</span></div><div><strong>Sharth Reddy Thandra</strong><span>Co-Founder · Video & content</span></div></div></div></div></section>

      <section id="contact" className="contact wrap"><span className="eyebrow">HAVE SOMETHING IN MIND?</span><a href="mailto:hello@aethoscompany.in" className="contact-title">Let’s make<br/>your next move.<ArrowUpRight aria-hidden="true"/></a><div className="contact-bottom"><p>Tell us what you’re thinking.<br/>We’ll figure out the possibilities together.</p><a href="mailto:hello@aethoscompany.in">hello@aethoscompany.in <ArrowUpRight size={17}/></a></div></section>
      <footer className="wrap"><a className="wordmark" href="#">aethos<span>®</span></a><span>© {new Date().getFullYear()} Aethos Vision Labs</span><span>Built with vision. Based in Hyderabad.</span><a href="#">Back to top ↑</a></footer>
    </main>
  );
}
