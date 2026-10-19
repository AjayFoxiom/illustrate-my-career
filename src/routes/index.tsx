import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ArrowUp, ArrowUpRight, Boxes, Braces, Check, Code2, Database, Download, FileCheck2, GraduationCap, HeartPulse, Layers, Mail, MapPin, Menu, Moon, Navigation, Phone, Radio, Send, Server, ShieldCheck, Sun, Terminal, TrendingUp, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import avatar from "@/assets/ajay-avatar.png";
import resume from "@/assets/resume.pdf.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({ meta: [
    { title: "Ajay N — Full Stack MERN Developer" },
    { name: "description", content: "Ajay N is a full stack developer in Calicut, Kerala, building production-grade web applications with React, Node.js, Express.js, and MongoDB." },
    { property: "og:title", content: "Ajay N — Full Stack MERN Developer" },
    { property: "og:description", content: "Full stack web development, responsive frontend interfaces, scalable backend systems, and end-to-end product delivery. Explore Ajay's experience and projects." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: Index,
});

const skills = [
  { title: "Frontend Development", icon: Code2, items: ["React", "TypeScript", "JavaScript (ES6+)", "Tailwind CSS", "TanStack Query", "State Management", "Responsive UI", "Kendo UI"] },
  { title: "Backend Development", icon: Server, items: ["Node.js", "Express.js", "Fastify", "REST API Design", "Socket.IO", "ERP Integration"] },
  { title: "Database & Architecture", icon: Database, items: ["MongoDB", "PostgreSQL", "Database Design", "Schema Modeling"] },
  { title: "DevOps & Deployment", icon: Terminal, items: ["Docker", "Linux", "AWS EC2", "Nginx", "PM2", "Git / GitHub"] },
];

const projects = [
  {
    category: "Featured Project · FinTech & Compliance",
    title: "Eazy Fatoora",
    subtitle: "ZATCA E-Invoicing ERP",
    tagline: "EAZY FATOORA / E-INVOICING ERP",
    description: "A production-grade, ZATCA-compliant e-invoicing ERP for Saudi businesses. Engineered end-to-end, from responsive web dashboards and invoice workflows to backend compliance engines and deployment.",
    details: "Built interactive client-side invoicing interfaces, dynamic validation, QR code rendering, UBL 2.1 XML generation, cryptographic stamping, and subscription billing.",
    features: ["Interactive ERP Dashboard", "ZATCA Phase 1 & 2", "Device Onboarding & Billing", "Cryptographic Stamping"],
    tech: ["React", "Node.js", "MongoDB Atlas", "Python (Flask)", "REST APIs"],
    type: "invoice",
  },
  {
    category: "Full Stack System · IoT & Telematics",
    title: "FleetPulse",
    subtitle: "Real-Time Logistics Tracker",
    tagline: "FLEETPULSE / REAL-TIME TELEMETRICS",
    description: "High-concurrency vehicle tracking and telemetry platform processing live GPS streams, fuel consumption, geofencing triggers, and driver safety scoring with sub-second WebSocket updates.",
    details: "Architected bidirectional Socket.IO event buses, geospatial queries in PostgreSQL/PostGIS, Redis caching for fast vehicle lookups, and interactive real-time map interfaces.",
    features: ["Live WebSocket Stream", "Geofencing Triggers", "Driver Telemetry Scoring", "Fleet Health Analytics"],
    tech: ["React", "TypeScript", "Node.js", "Socket.IO", "PostgreSQL", "Redis"],
    type: "telematics",
  },
  {
    category: "Enterprise SaaS · Pipeline Automation",
    title: "ApexLead",
    subtitle: "Omni-Channel CRM & Deals ERP",
    tagline: "APEXLEAD / SALES PIPELINE ERP",
    description: "Enterprise CRM engineered for multi-agent sales teams. Features visual Kanban pipelines, automated WhatsApp/Email campaign triggers, lead deduplication, and predictive conversion scoring.",
    details: "Engineered optimistic UI updates with TanStack Query, automated webhook listeners for third-party ad platforms, and role-based access control for distributed sales teams.",
    features: ["Kanban Deal Pipeline", "WhatsApp & Email Triggers", "Predictive Lead Scoring", "Multi-Tenant RBAC"],
    tech: ["React", "TanStack Query", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
    type: "crm",
  },
  {
    category: "Healthcare Platform · Encrypted Records",
    title: "MedVault",
    subtitle: "Digital EHR & Telehealth Portal",
    tagline: "MEDVAULT / SECURE EHR PLATFORM",
    description: "Secure patient electronic health record (EHR) management and doctor appointment scheduling system. Integrates end-to-end encrypted clinical notes, prescription generation, and automated patient reminders.",
    details: "Implemented AES-256 encrypted storage, strict audit logging for healthcare compliance, digital doctor signature verification, and streamlined medical billing workflows.",
    features: ["Encrypted Patient EHR", "Doctor Appointment Engine", "Verified Digital Rx", "HIPAA-Aligned Audit Trail"],
    tech: ["React", "Node.js", "Express", "PostgreSQL", "Prisma", "Docker"],
    type: "ehr",
  },
  {
    category: "Supply Chain ERP · Inventory Control",
    title: "CloudStock",
    subtitle: "Multi-Warehouse Inventory System",
    tagline: "CLOUDSTOCK / MULTI-WAREHOUSE ERP",
    description: "Distributed inventory control software handling SKU tracking, barcode scanning, purchase order automation, supplier dispatch notifications, and low-stock replenishment workflows across fulfillment centers.",
    details: "Designed batch synchronization algorithms, automated PDF bill-of-lading generation, and production deployment with PM2 cluster mode and Nginx reverse proxying.",
    features: ["Barcode & SKU Scanning", "Automated Reordering", "Multi-Warehouse Sync", "PM2 Cluster Deployment"],
    tech: ["React", "Node.js", "Express.js", "MongoDB", "Ubuntu Linux", "Nginx"],
    type: "inventory",
  },
];

const navigation = ["About", "Skills", "Experience", "Projects", "Contact"];

function SectionTitle({ label, title, accent }: { number?: string; label: string; title: string; accent: string }) {
  return <div className="section-heading"><div><div className="eyebrow"><span>—</span>{label}</div><h2>{title} <span>{accent}</span></h2></div></div>;
}

function ProjectVisual({ project }: { project: typeof projects[0] }) {
  if (project.type === "telematics") {
    return (
      <div className="project-visual" aria-label="Real-time telemetry and fleet tracker preview">
        <div className="project-visual-label">{project.tagline}</div>
        <div className="telematics-card">
          <div className="telematics-header">
            <span><Radio size={14} className="pulse-dot" /> LIVE TRACKING</span>
            <strong>TRK-840</strong>
          </div>
          <div className="telematics-body">
            <div className="telematics-radar">
              <Navigation size={22} className="radar-arrow" />
            </div>
            <div className="telematics-info">
              <div className="telematics-route">Kochi Hub → Calicut Express</div>
              <div className="telematics-speed">68 <span>km/h · Active</span></div>
            </div>
          </div>
          <div className="telematics-stats">
            <div><small>Fuel</small><strong>84%</strong></div>
            <div><small>Latency</small><strong>38ms</strong></div>
            <div><small>Engine</small><strong className="stat-highlight">Optimal</strong></div>
          </div>
        </div>
      </div>
    );
  }
  if (project.type === "crm") {
    return (
      <div className="project-visual" aria-label="Sales CRM pipeline preview">
        <div className="project-visual-label">{project.tagline}</div>
        <div className="crm-card">
          <div className="crm-header">
            <span><TrendingUp size={14} /> DEALS PIPELINE</span>
            <span className="crm-badge">Active Deal</span>
          </div>
          <div className="crm-deal">
            <strong>Saudi Telecom Enterprise</strong>
            <span className="deal-amount">$42,500</span>
          </div>
          <div className="crm-progress">
            <div className="crm-progress-bar" style={{ width: "82%" }} />
          </div>
          <div className="crm-meta">
            <span>Stage: Contract Signing</span>
            <strong className="crm-score">94% score</strong>
          </div>
        </div>
      </div>
    );
  }
  if (project.type === "ehr") {
    return (
      <div className="project-visual" aria-label="Medical health record dashboard preview">
        <div className="project-visual-label">{project.tagline}</div>
        <div className="ehr-card">
          <div className="ehr-header">
            <span><HeartPulse size={14} /> PATIENT RECORD</span>
            <strong>#MV-2910</strong>
          </div>
          <div className="ehr-vitals">
            <div className="vital-item"><small>Heart Rate</small><strong>72 bpm</strong></div>
            <div className="vital-item"><small>Blood Pressure</small><strong>120/80</strong></div>
            <div className="vital-item"><small>Oxygen</small><strong>99%</strong></div>
          </div>
          <div className="ehr-footer">
            <Check size={13} /> Verified Digital Prescription (SHA-256)
          </div>
        </div>
      </div>
    );
  }
  if (project.type === "inventory") {
    return (
      <div className="project-visual" aria-label="Warehouse inventory management preview">
        <div className="project-visual-label">{project.tagline}</div>
        <div className="inventory-card">
          <div className="inventory-header">
            <span><Boxes size={14} /> WAREHOUSE METRICS</span>
            <strong>Hub-02 (South)</strong>
          </div>
          <div className="inventory-stats">
            <div><span>14,820</span><small>Active SKUs</small></div>
            <div><span className="stock-rate">98.4%</span><small>In-Stock Rate</small></div>
          </div>
          <div className="inventory-track">
            <div className="inventory-fill" style={{ width: "94%" }} />
          </div>
          <div className="inventory-footer">
            <Check size={13} /> Auto-replenishment workflow active
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="project-visual" aria-label="Illustration of ZATCA compliant electronic invoicing">
      <div className="project-visual-label">{project.tagline}</div>
      <div className="invoice">
        <div className="invoice-header">Eazy Fatoora <FileCheck2 size={22} /></div>
        <div className="invoice-body">
          <ShieldCheck className="invoice-icon" />
          <div>
            <span>ZATCA COMPLIANT</span>
            <strong>Electronic invoicing</strong>
          </div>
        </div>
        <div className="invoice-lines" />
        <div className="invoice-lines short" />
        <div className="invoice-footer">
          <Check size={13} /> Phase 1 & Phase 2 compliance
        </div>
      </div>
    </div>
  );
}

function Index() {
  const [light, setLight] = useState(false);
  const [menu, setMenu] = useState(false);
  const [active, setActive] = useState("");
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoSubject = encodeURIComponent(formData.subject.trim() || `Portfolio inquiry from ${formData.name.trim()}`);
    const mailtoBody = encodeURIComponent(
      `Hello Ajay,\n\n${formData.message.trim()}\n\nBest regards,\n${formData.name.trim()}\nEmail: ${formData.email.trim()}`
    );
    window.location.href = `mailto:ajay02.dev@gmail.com?subject=${mailtoSubject}&body=${mailtoBody}`;
    setSubmitted(true);
  };

  const openGmailCompose = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const width = 680;
    const height = 700;
    const left = Math.max(0, Math.round((window.screen.width - width) / 2));
    const top = Math.max(0, Math.round((window.screen.height - height) / 2));
    window.open(
      "https://mail.google.com/mail/?view=cm&fs=1&to=ajay02.dev@gmail.com",
      "gmail_compose",
      `width=${width},height=${height},left=${left},top=${top},resizable=yes,scrollbars=yes`
    );
  };
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          if (entry.target.id) setActive(entry.target.id);
          entry.target.querySelectorAll<HTMLElement>("[data-count]").forEach((element) => {
            if (element.dataset['animated']) return;
            element.dataset['animated'] = "true";
            const target = Number(element.dataset['count']);
            const start = performance.now();
            const tick = (time: number) => {
              const progress = Math.min((time - start) / 1100, 1);
              const value = target * (1 - Math.pow(1 - progress, 3));
              element.textContent = (Number.isInteger(target) ? Math.round(value).toString() : value.toFixed(1)) + (element.dataset['suffix'] || "");
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

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", light ? "light" : "dark");
  }, [light]);

  useEffect(() => {
    const cards = Array.from(document.querySelectorAll<HTMLElement>(".project-card"));
    if (cards.length === 0) return;

    let ticking = false;
    const handleScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const isMobile = window.innerWidth <= 700;
        const topStickyOffset = isMobile ? 75 : 96;

        cards.forEach((card, index) => {
          const nextCard = cards[index + 1];
          if (!nextCard) {
            card.style.transform = "scale(1)";
            card.style.opacity = "1";
            card.style.filter = "none";
            return;
          }

          const cardRect = card.getBoundingClientRect();
          const nextRect = nextCard.getBoundingClientRect();
          const targetOffset = topStickyOffset + (index + 1) * (isMobile ? 8 : 14);

          if (nextRect.top <= cardRect.bottom && nextRect.top >= targetOffset) {
            const distance = Math.max(cardRect.bottom - targetOffset, 200);
            const progress = Math.min(Math.max((cardRect.bottom - nextRect.top) / distance, 0), 1);
            const scale = 1 - progress * 0.05;
            const opacity = 1 - progress * 0.35;
            card.style.transform = `scale(${scale.toFixed(3)})`;
            card.style.opacity = `${opacity.toFixed(2)}`;
            card.style.filter = progress > 0.35 ? `blur(${(progress * 1.5).toFixed(1)}px)` : "none";
          } else if (nextRect.top < targetOffset) {
            card.style.transform = "scale(0.95)";
            card.style.opacity = "0.55";
            card.style.filter = "blur(1.5px)";
          } else {
            card.style.transform = "scale(1)";
            card.style.opacity = "1";
            card.style.filter = "none";
          }
        });
        ticking = false;
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return <div data-theme={light ? "light" : "dark"} id="top">
    <div className="preloader" aria-hidden="true">ajay<span>.</span></div>
    <header className="site-header"><div className="container nav-inner">
      <nav aria-label="Main navigation" className={`nav-links ${menu ? "open" : ""}`}>{navigation.map((item) => <a key={item} href={`#${item.toLowerCase()}`} className={active === item.toLowerCase() ? "active" : ""} onClick={() => setMenu(false)}>{item}</a>)}</nav>
      <div className="nav-actions"><Button variant="ghost" size="icon" aria-label={light ? "Switch to dark theme" : "Switch to light theme"} title={light ? "Dark theme" : "Light theme"} onClick={() => setLight(!light)}>{light ? <Moon /> : <Sun />}</Button><Button variant="outline" asChild className="nav-contact"><a href="mailto:ajay02.dev@gmail.com">Let’s talk <ArrowUpRight /></a></Button><Button variant="ghost" size="icon" className="mobile-menu" aria-label={menu ? "Close navigation" : "Open navigation"} aria-expanded={menu} onClick={() => setMenu(!menu)}>{menu ? <X /> : <Menu />}</Button></div>
    </div></header>

    <main>
      <section className="hero container" aria-labelledby="hero-name">
        <div><div className="badge-pill rise rise-1"><span className="status-dot" />FULL STACK DEVELOPER</div><p className="hero-intro rise rise-2">Hello, I’m</p><h1 id="hero-name" className="name-grad rise rise-3">Ajay N</h1><p className="hero-role rise rise-4">Full stack. <span>End to end.</span></p><p className="hero-description rise rise-4">Building production-grade web applications.<br />From responsive frontend interfaces to scalable backend systems and deployment owning every step of the journey.</p><div className="hero-buttons rise rise-5"><Button asChild className="shine-btn"><a href="#projects">Explore my work <ArrowUpRight /></a></Button><Button variant="outline" asChild><a href={resume.url} target="_blank" rel="noreferrer">View résumé <Download /></a></Button></div><div className="location rise rise-6"><MapPin /> Calicut, Kerala, India</div></div>
        <div className="portrait-stage rise rise-4"><div className="portrait-frame glow-anim"><div className="portrait-label"><span className="status-dot" />&lt;developer /&gt;</div><img className="portrait-image portrait-float" src={avatar} alt="Illustrated avatar of Ajay, a developer with a laptop" width={1024} height={1024} fetchPriority="high" /></div><div className="floating-chip chip-one chip-float"><Braces /><div><strong>Full stack developer</strong><span>React · Node.js · MongoDB</span></div></div><div className="floating-chip chip-two chip-float d1"><Layers /><div><strong>1.5+ years</strong><span>Hands-on experience</span></div></div><div className="floating-chip chip-three chip-float d2"><Check /><div><strong>Design to deployment</strong><span>End-to-end ownership</span></div></div></div>
      </section>

      <div className="container stats-strip reveal"><div className="stat"><span className="stat-number" data-count="1.5" data-suffix="+">1.5+</span><span className="stat-caption">Years of hands-on<br />experience</span></div><div className="stat"><span className="stat-number" data-count="10" data-suffix="+">10+</span><span className="stat-caption">Core technology<br />disciplines</span></div><div className="stat"><span className="stat-number" data-count="20" data-suffix="+">20+</span><span className="stat-caption">Production-grade<br />projects</span></div></div>

      <section className="section container reveal" id="about"><SectionTitle number="01" label="A little about me" title="The developer behind" accent="the code." /><div className="about-layout"><div className="about-copy"><p>I’m a <strong>Full Stack Developer</strong> with <strong>1.5+ years</strong> of hands-on experience building production-grade web applications with React, Node.js, Express.js, and MongoDB.</p><p>Skilled in <strong>responsive frontend development, scalable backend architecture, RESTful APIs, and database design</strong>, I own projects end-to-end — from user interface design to production deployment — with strong problem solving and agile development experience.</p></div><div className="about-details"><div className="detail"><small>Based in</small><span>Calicut, Kerala</span></div><div className="detail"><small>Specialization</small><span>MERN Stack Development</span></div><div className="detail"><small>Currently at</small><span>Foxiom Leads Pvt Ltd</span></div><div className="detail"><small>Approach</small><span>End-to-end ownership</span></div></div></div></section>

      <section className="section container reveal" id="skills"><SectionTitle number="02" label="My toolkit" title="The stack I" accent="build with." /><div className="skill-grid">{skills.map(({ title, icon: Icon, items }) => <article className="skill-card" key={title}><div className="skill-icon"><Icon /></div><h3>{title}</h3><div className="skill-list">{items.map((skill) => <span className="skill-tag" key={skill}>{skill}</span>)}</div><div className="skill-track" aria-hidden="true"><div className="skill-fill" /></div></article>)}</div></section>

      <section className="section container reveal" id="experience"><SectionTitle number="03" label="My journey" title="Learning. Building." accent="Delivering." /><div className="timeline"><div className="timeline-date">Mar 2025 — Present<span>Calicut, Kerala</span></div><article className="timeline-content"><h3>Full Stack Developer (MERN)</h3><div className="company">Foxiom Leads Pvt Ltd</div><ul><li>Develop and maintain responsive, high-performance web applications, engineering dynamic client-side user interfaces in React alongside robust backend services.</li><li>Architect and integrate RESTful APIs and microservices using Node.js and Express with optimized MongoDB and PostgreSQL data layers.</li><li>Deliver full-stack products end-to-end, managing everything from interactive UI components to production server deployment with Ubuntu, Nginx, and PM2.</li><li>Collaborate with cross-functional teams to translate UI/UX designs into seamless, scalable client-facing solutions.</li></ul></article></div></section>

      <section className="section container reveal" id="projects">
        <SectionTitle label="Selected work" title="Built for the" accent="real world." />
        <div className="projects-stack">
          {projects.map((proj, idx) => (
            <article
              className="project-card"
              key={proj.title}
              style={{ "--card-index": idx } as React.CSSProperties}
            >
              <ProjectVisual project={proj} />
              <div className="project-copy">
                <div className="project-card-header">
                  <div className="eyebrow">{proj.category}</div>
                  <span className="project-number">0{idx + 1} / 05</span>
                </div>
                <h3>{proj.title}</h3>
                <p>{proj.description}</p>
                <div className="project-features">
                  {proj.features.map((feat) => (
                    <span className="project-feature" key={feat}>{feat}</span>
                  ))}
                </div>
                <p>{proj.details}</p>
                <div className="skill-list">
                  {proj.tech.map((tech) => (
                    <span className="skill-tag" key={tech}>{tech}</span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="contact-section container reveal" id="contact">
        <SectionTitle number="05" label="Get in touch" title="Let’s start a" accent="conversation." />
        <div className="contact-layout">
          <div className="contact-info">
            <div className="contact-status-card">
              <span className="status-dot" /> Available for new opportunities
            </div>
            <h3 className="contact-info-title">Have a project or opportunity?</h3>
            <p className="contact-intro">
              I’m currently available for full-time full stack developer roles, high-impact projects, and technical collaborations. Reach out using the form or connect directly through any of the channels below.
            </p>
            <div className="contact-channels">
              <a
                className="contact-channel-item"
                href="https://mail.google.com/mail/?view=cm&fs=1&to=ajay02.dev@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                onClick={openGmailCompose}
                aria-label="Compose email to ajay02.dev@gmail.com in Gmail"
              >
                <div className="contact-channel-icon"><Mail /></div>
                <div className="contact-channel-text">
                  <small>Direct Email</small>
                  <strong>ajay02.dev@gmail.com</strong>
                </div>
              </a>
              <a className="contact-channel-item" href="tel:+918606865580" aria-label="Call +91 8606865580">
                <div className="contact-channel-icon"><Phone /></div>
                <div className="contact-channel-text">
                  <small>Phone / WhatsApp</small>
                  <strong>+91 8606865580</strong>
                </div>
              </a>
              <div className="contact-channel-item">
                <div className="contact-channel-icon"><MapPin /></div>
                <div className="contact-channel-text">
                  <small>Location</small>
                  <strong>Calicut, Kerala, India</strong>
                </div>
              </div>
            </div>
          </div>

          <div className="contact-form-card">
            <div className="contact-form-header">
              <h3>Send a message</h3>
              <p>Fill out the details below to start a direct thread.</p>
            </div>
            {submitted ? (
              <div className="contact-success" role="alert">
                <div className="contact-success-icon"><Check /></div>
                <h4>Message drafted!</h4>
                <p>Your default email client has been opened with your message ready to send. If it didn’t open, click <a href="mailto:ajay02.dev@gmail.com">here to email directly</a>.</p>
                <Button variant="outline" size="sm" onClick={() => { setSubmitted(false); setFormData({ name: "", email: "", subject: "", message: "" }); }}>
                  Send another message
                </Button>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleContactSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="contact-name">Your Name *</label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      placeholder="e.g. John Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="form-input"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="contact-email">Email Address *</label>
                    <input
                      id="contact-email"
                      type="email"
                      required
                      placeholder="you@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="form-input"
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="contact-subject">Subject</label>
                  <input
                    id="contact-subject"
                    type="text"
                    placeholder="Role discussion, freelance project, etc."
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="form-input"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="contact-message">Message *</label>
                  <textarea
                    id="contact-message"
                    required
                    rows={4}
                    placeholder="Tell me about your project or what you have in mind..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="form-textarea"
                  />
                </div>
                <Button type="submit" className="shine-btn contact-submit">
                  Send Message <Send size={15} />
                </Button>
              </form>
            )}
          </div>
        </div>
      </section>
    </main>
    <footer className="footer"><div className="container footer-inner"><p>© {new Date().getFullYear()} Ajay N. All rights reserved.</p><a href="#top">Back to top <ArrowUp size={14} /></a></div></footer>
  </div>;
}
