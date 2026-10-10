import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ArrowDown, ArrowUp, ArrowUpRight, Braces, Check, Code2, Database, Download, FileCheck2, GraduationCap, Layers, MapPin, Menu, Moon, Server, ShieldCheck, Sun, Terminal, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import avatar from "@/assets/ajay-avatar.png";
import resume from "@/assets/resume.pdf.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({ meta: [
    { title: "Ajay N — MERN Stack Developer" },
    { name: "description", content: "Ajay N is a full stack developer in Calicut, Kerala, building production-grade applications with React, Node.js, Express.js, and MongoDB." },
    { property: "og:title", content: "Ajay N — MERN Stack Developer" },
    { property: "og:description", content: "Full stack development, backend architecture, and end-to-end product delivery. Explore Ajay's experience and projects." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: Index,
});

const skills = [
  { title: "Backend Development", icon: Server, items: ["Node.js", "Express.js", "Fastify", "REST API Design", "Socket.IO", "ERP Integration"] },
  { title: "Frontend Development", icon: Code2, items: ["React", "TanStack Query", "Kendo UI"] },
  { title: "Database & Architecture", icon: Database, items: ["MongoDB", "PostgreSQL", "Database Design"] },
  { title: "DevOps & Tools", icon: Terminal, items: ["Docker", "Linux", "AWS EC2", "Nginx", "PM2"] },
];
const navigation = ["About", "Skills", "Experience", "Projects", "Contact"];

function SectionTitle({ number, label, title, accent }: { number: string; label: string; title: string; accent: string }) {
  return <div className="section-heading"><div><div className="eyebrow"><span>—</span>{label}</div><h2>{title} <span>{accent}</span></h2></div><span className="section-index">/{number}</span></div>;
}

function Index() {
  const [light, setLight] = useState(false);
  const [menu, setMenu] = useState(false);
  const [active, setActive] = useState("");
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          if (entry.target.id) setActive(entry.target.id);
          entry.target.querySelectorAll<HTMLElement>("[data-count]").forEach((element) => {
            if (element.dataset.animated) return;
            element.dataset.animated = "true";
            const target = Number(element.dataset.count);
            const start = performance.now();
            const tick = (time: number) => {
              const progress = Math.min((time - start) / 1100, 1);
              const value = target * (1 - Math.pow(1 - progress, 3));
              element.textContent = (Number.isInteger(target) ? Math.round(value).toString() : value.toFixed(1)) + (element.dataset.suffix || "");
              if (progress < 1) requestAnimationFrame(tick);
            };
            if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) requestAnimationFrame(tick);
          });
        }
      });
    }, { threshold: 0.12 });
    document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  return <div data-theme={light ? "light" : "dark"} id="top">
    <div className="preloader" aria-hidden="true">ajay<span>.</span></div>
    <header className="site-header"><div className="container nav-inner">
      <a className="wordmark" href="#top" aria-label="Ajay, back to top">ajay<span>.</span></a>
      <nav aria-label="Main navigation" className={`nav-links ${menu ? "open" : ""}`}>{navigation.map((item) => <a key={item} href={`#${item.toLowerCase()}`} className={active === item.toLowerCase() ? "active" : ""} onClick={() => setMenu(false)}>{item}</a>)}</nav>
      <div className="nav-actions"><Button variant="ghost" size="icon" aria-label={light ? "Switch to dark theme" : "Switch to light theme"} title={light ? "Dark theme" : "Light theme"} onClick={() => setLight(!light)}>{light ? <Moon /> : <Sun />}</Button><Button variant="outline" asChild className="nav-contact"><a href="mailto:ajayaj2002nov@gmail.com">Let’s talk <ArrowUpRight /></a></Button><Button variant="ghost" size="icon" className="mobile-menu" aria-label={menu ? "Close navigation" : "Open navigation"} aria-expanded={menu} onClick={() => setMenu(!menu)}>{menu ? <X /> : <Menu />}</Button></div>
    </div></header>

    <main>
      <section className="hero container" aria-labelledby="hero-name">
        <div><div className="badge-pill rise rise-1"><span className="status-dot" />MERN STACK DEVELOPER</div><p className="hero-intro rise rise-2">Hello, I’m</p><h1 id="hero-name" className="name-grad rise rise-3">Ajay N<span>.</span></h1><p className="hero-role rise rise-4">Full stack. <span>End to end.</span></p><p className="hero-description rise rise-4">Building production-grade web applications.<br />From backend architecture to the final deployment —<br />owning every step of the journey.</p><div className="hero-buttons rise rise-5"><Button asChild className="shine-btn"><a href="#projects">Explore my work <ArrowUpRight /></a></Button><Button variant="outline" asChild><a href={resume.url} target="_blank" rel="noreferrer">View résumé <Download /></a></Button></div><div className="location rise rise-6"><MapPin /> Calicut, Kerala, India</div></div>
        <div className="portrait-stage rise rise-4"><div className="portrait-frame glow-anim"><div className="portrait-label"><span className="status-dot" />&lt;developer /&gt;</div><img className="portrait-image portrait-float" src={avatar} alt="Illustrated avatar of Ajay, a developer with a laptop" width={1024} height={1024} fetchPriority="high" /></div><div className="floating-chip chip-one chip-float"><Braces /><div><strong>Full stack developer</strong><span>React · Node.js · MongoDB</span></div></div><div className="floating-chip chip-two chip-float d1"><Layers /><div><strong>1.5+ years</strong><span>Hands-on experience</span></div></div><div className="floating-chip chip-three chip-float d2"><Check /><div><strong>Design to deployment</strong><span>End-to-end ownership</span></div></div></div>
      </section>

      <div className="container stats-strip reveal"><div className="stat"><span className="stat-number" data-count="1.5" data-suffix="+">1.5+</span><span className="stat-caption">Years of hands-on<br />experience</span></div><div className="stat"><span className="stat-number" data-count="4">4</span><span className="stat-caption">Core technology<br />disciplines</span></div><div className="stat"><span className="stat-number" data-count="2">2</span><span className="stat-caption">ZATCA compliance<br />phases delivered</span></div></div>

      <section className="section container reveal" id="about"><SectionTitle number="01" label="A little about me" title="The developer behind" accent="the code." /><div className="about-layout"><div className="about-copy"><p>I’m a <strong>Full Stack Developer</strong> with <strong>1.5+ years</strong> of hands-on experience building production-grade web applications with Node.js, Express.js, MongoDB, and React.</p><p>Skilled in <strong>backend architecture, API development, and database design</strong>, I own projects end-to-end — from design through deployment — with strong problem solving and agile development experience.</p></div><div className="about-details"><div className="detail"><small>Based in</small><span>Calicut, Kerala</span></div><div className="detail"><small>Specialization</small><span>MERN Stack Development</span></div><div className="detail"><small>Currently at</small><span>Foxiom Leads Pvt Ltd</span></div><div className="detail"><small>Approach</small><span>End-to-end ownership</span></div></div></div></section>

      <section className="section container reveal" id="skills"><SectionTitle number="02" label="My toolkit" title="The stack I" accent="build with." /><div className="skill-grid">{skills.map(({ title, icon: Icon, items }) => <article className="skill-card" key={title}><div className="skill-icon"><Icon /></div><h3>{title}</h3><div className="skill-list">{items.map((skill) => <span className="skill-tag" key={skill}>{skill}</span>)}</div><div className="skill-track" aria-hidden="true"><div className="skill-fill" /></div></article>)}</div></section>

      <section className="section container reveal" id="experience"><SectionTitle number="03" label="My journey" title="Learning. Building." accent="Delivering." /><div className="timeline"><div className="timeline-date">Mar 2025 — Present<span>Calicut, Kerala</span></div><article className="timeline-content"><h3>Full Stack Developer (MERN)</h3><div className="company">Foxiom Leads Pvt Ltd</div><ul><li>Contribute to live web application development across multiple products and services, working on both front-end and back-end technologies.</li><li>Manage production servers, including deployment, configuration, and monitoring using Ubuntu, Nginx, and PM2.</li><li>Deliver products and services end-to-end, from feature implementation to production deployment and post-release support.</li><li>Collaborate with senior developers to design and implement features for client-facing products.</li></ul></article></div></section>

      <section className="section container reveal" id="projects"><SectionTitle number="04" label="Selected work" title="Built for the" accent="real world." /><article className="project"><div className="project-visual" aria-label="Illustration of ZATCA compliant electronic invoicing"><div className="project-visual-label">EAZY FATOORA / E-INVOICING ERP</div><div className="invoice"><div className="invoice-header">Eazy Fatoora <FileCheck2 size={22} /></div><div className="invoice-body"><ShieldCheck className="invoice-icon" /><div><span>ZATCA COMPLIANT</span><strong>Electronic invoicing</strong></div></div><div className="invoice-lines" /><div className="invoice-lines short" /><div className="invoice-footer"><Check size={13} /> Phase 1 & Phase 2 compliance</div></div></div><div className="project-copy"><div className="eyebrow">Featured project</div><h3>Eazy Fatoora</h3><p>A production-grade, ZATCA-compliant e-invoicing ERP for Saudi businesses. Architected end-to-end, from backend architecture and the compliance engine to deployment.</p><div className="project-features"><span className="project-feature">ZATCA Phase 1 & 2</span><span className="project-feature">Device onboarding</span><span className="project-feature">Subscription billing</span></div><p>QR code generation, UBL 2.1 XML, PDF/A-3 invoices with cryptographic stamping, certificate onboarding, and multi-tier plans with automated renewals.</p><div className="skill-list">{["Node.js", "Python (Flask)", "MongoDB Atlas", "React"].map((tech) => <span className="skill-tag" key={tech}>{tech}</span>)}</div></div></article></section>

      <section className="section container reveal" id="education"><SectionTitle number="05" label="Education" title="A foundation for" accent="what’s next." /><div className="education-grid"><article className="education-item"><GraduationCap /><div><h3>Bachelor of Computer Applications</h3><p>Sreenarayanaguru Open University (SGOU)<br />Calicut, Kerala</p><small>Jul 2026 — Present</small></div></article><article className="education-item"><GraduationCap /><div><h3>Diploma in Mechanical Engineering</h3><p>State Board of Technical Education, Kerala<br />Calicut, Kerala</p><small>Jul 2020 — May 2023</small></div></article></div></section>

      <section className="contact-section container reveal" id="contact"><div className="eyebrow">— Get in touch</div><h2>Let’s start a <span className="text-grad">conversation.</span></h2><a className="contact-email" href="mailto:ajayaj2002nov@gmail.com">ajayaj2002nov@gmail.com <ArrowUpRight /></a><div className="contact-location"><MapPin />Calicut, Kerala <span>·</span> 8606865580</div></section>
    </main>
    <footer className="footer"><div className="container footer-inner"><a className="wordmark" href="#top">ajay<span>.</span></a><p>© {new Date().getFullYear()} Ajay N. All rights reserved.</p><a href="#top">Back to top <ArrowUp size={14} /></a></div></footer>
  </div>;
}
