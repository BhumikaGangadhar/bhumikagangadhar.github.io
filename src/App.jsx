import React from 'react';
import './css/styles.css';
import photo from './assets/profile_photo.jpg';
import { experience, focusAreas, skills, projects, links } from './constants/portfolio';

const Arrow = () => <span aria-hidden="true">↗</span>;
const Tags = ({ items }) => <ul className="tags">{items.map(item => <li key={item}>{item}</li>)}</ul>;

function SectionTitle({ number, label, title, children }) {
  return <div className="section-heading"><p className="eyebrow">{number} / {label}</p><h2>{title}</h2>{children && <p className="section-intro">{children}</p>}</div>;
}

export default function App() {
  return <>
    <a className="skip-link" href="#main">Zum Inhalt springen</a>
    <header className="site-header">
      <a className="wordmark" href="#top" aria-label="Shivakrishna Karnati – Startseite">SK<span>.</span></a>
      <nav aria-label="Hauptnavigation">
        <a href="#fokus">Aktuell</a><a href="#erfahrung">Erfahrung</a><a href="#arbeitsweise">Spec-driven</a><a href="#skills">Skills</a>
      </nav>
      <a className="header-contact" href="#kontakt">Kontakt <Arrow /></a>
    </header>
    <main id="main">
      <section className="hero section-wrap" id="top" aria-labelledby="hero-title">
        <div className="hero-copy">
          <p className="eyebrow"><span className="status-dot" /> Leipzig, Deutschland · KI & Softwareentwicklung</p>
          <h1 id="hero-title">Ideen werden<br />Software.<br /><span>Mit KI weiter.</span></h1>
          <p className="hero-name">Shivakrishna Karnati</p>
          <p className="hero-role">KI Solutions Consultant & Entwickler</p>
          <p className="hero-description">Ich entwickle KI-Lösungen, die Wissen nutzbar machen, Prozesse automatisieren und Modelle in den Alltag bringen. Von der ersten Spezifikation bis zum produktiven Service.</p>
          <div className="hero-actions"><a className="button button-dark" href="#erfahrung">Meine Erfahrung <span aria-hidden="true">↓</span></a><a className="text-link" href={links.github}>GitHub ansehen <Arrow /></a></div>
        </div>
        <div className="hero-visual">
          <div className="portrait-frame"><img src={photo} alt="Porträt von Shivakrishna Karnati" /><span className="portrait-caption">MENSCH. CODE. MÖGLICHKEITEN.</span></div>
          <div className="portrait-note"><span className="note-symbol" aria-hidden="true">✳</span><p>Software verstehen.<br /><strong>Mit KI gestalten.</strong></p></div>
          <p className="visual-index">PYTHON / JAVA / AGENTIC AI</p>
        </div>
      </section>
      <div className="expertise-strip" aria-label="Schwerpunkte"><span>AI Engineering</span><span aria-hidden="true">✳</span><span>Softwareentwicklung</span><span aria-hidden="true">✳</span><span>Spec-driven Development</span><span aria-hidden="true">✳</span><span>MLOps</span></div>
      <section className="section-wrap focus-section" id="fokus">
        <SectionTitle number="01" label="Aktueller Fokus" title="KI, die im Alltag ankommt.">Bei Kupper IT arbeite ich an RAG, internen Wissenssystemen, Prozessautomatisierung und dem Betrieb von LLMs.</SectionTitle>
        <div className="focus-grid">{focusAreas.map(area => <article className="focus-card" key={area.number}><span className="card-number">{area.number}</span><h3>{area.title}</h3><p>{area.text}</p><Tags items={area.tags} /></article>)}</div>
      </section>
      <section className="experience-section" id="erfahrung">
        <div className="section-wrap experience-layout">
          <div className="experience-intro"><SectionTitle number="02" label="Erfahrung" title="Von Software zu intelligenten Systemen.">Entwicklung, Forschung und Beratung — mit Erfahrung in funktionsübergreifenden Teams.</SectionTitle><a className="text-link" href={links.linkedin}>Auf LinkedIn vernetzen <Arrow /></a></div>
          <div className="timeline">{experience.map(job => <article className={`job ${job.current ? 'job-current' : ''}`} key={job.company}><div className="job-meta"><span>{job.period}</span>{job.current && <span className="current-badge">Aktuell</span>}</div><h3>{job.company}</h3><p className="job-role">{job.role}</p><p className="job-type">{job.type}</p><p className="job-summary">{job.summary}</p><ul className="job-points">{job.points.map(point => <li key={point}>{point}</li>)}</ul><Tags items={job.tags} /></article>)}</div>
        </div>
      </section>
      <section className="section-wrap workflow-section" id="arbeitsweise">
        <div className="workflow-header"><SectionTitle number="03" label="Spec-driven Development" title="Erst Klarheit. Dann Code.">Mein aktueller Entwicklungsfokus: Anforderungen und Akzeptanzkriterien als Grundlage für die KI-gestützte Umsetzung — mit Claude Code und Codex.</SectionTitle><span className="workflow-mark" aria-hidden="true">{'{ }'}</span></div>
        <ol className="workflow"><li><span>01 — VERSTEHEN</span><h3>Spezifikation</h3><p>Ziele, Kontext und erwartetes Verhalten konkret beschreiben.</p></li><li><span>02 — STRUKTURIEREN</span><h3>Plan & Aufgaben</h3><p>Die Umsetzung in nachvollziehbare, überprüfbare Schritte aufteilen.</p></li><li><span>03 — UMSETZEN</span><h3>Mit KI entwickeln</h3><p>Claude Code und Codex mit klaren Anforderungen durch die Implementierung führen.</p></li><li><span>04 — PRÜFEN</span><h3>Validieren & verfeinern</h3><p>Ergebnisse an Akzeptanzkriterien messen und Spezifikation und Code weiterentwickeln.</p></li></ol>
      </section>
      <section className="projects-section" id="projekte"><div className="section-wrap"><div className="heading-row"><SectionTitle number="04" label="Ausgewählte Arbeit" title="Wissen in Anwendung." /><a className="text-link" href={links.github}>Meine Repositories <Arrow /></a></div><div className="project-grid">{projects.map((project, index) => <article className="project-card" key={project.title}><div className={`project-art project-art-${index}`} aria-hidden="true">{index === 0 ? <div className="detection-box">OBJECT_DETECTION<span>▣</span><small>ROBOTICS / VISION</small></div> : index === 1 ? <div className="knowledge-art"><span>Dokumente</span><i>↓</i><strong>Wissen verbinden</strong><i>↓</i><span>Antworten mit Kontext</span></div> : <div className="data-art">{'f(x)'}<span>DATA → MODEL → INSIGHT</span></div>}</div><div className="project-copy"><p className="eyebrow">{project.category}</p><h3>{project.title}</h3><p>{project.text}</p><Tags items={project.tags} /></div></article>)}</div><details className="more-projects"><summary>Weitere akademische & persönliche Projekte</summary><ul><li>Crop Management System</li><li>Student Hostel Management System</li><li>Drone Face Following</li><li>Jet Racer Obstacle Avoidance</li></ul></details></div></section>
      <section className="section-wrap skills-section" id="skills"><SectionTitle number="05" label="Werkzeugkasten" title="Die passende Technik zur Aufgabe." /><div className="skills-grid">{skills.map(([title, items]) => <div className="skill-group" key={title}><h3>{title}</h3><Tags items={items} /></div>)}</div></section>
      <section className="section-wrap education-section" id="ausbildung"><SectionTitle number="06" label="Ausbildung" title="Fundament & Perspektive." /><div className="education-grid"><article><p className="eyebrow">Okt. 2021 — Apr. 2025</p><h3>M.Sc. Angewandte Mathematik für Netzwerk- und Data Science</h3><p>Hochschule Mittweida · Deutschland</p></article><article><p className="eyebrow">Okt. 2016 — Mai 2019</p><h3>Master in Informatik / Computer Applications</h3><p>Osmania University · Indien</p></article></div><div className="personal-line"><p><strong>Sprachen</strong> Deutsch B2 · Englisch C1</p><p><strong>Abseits vom Code</strong> Basketball · Bücher · Reisen · Geschichten schreiben</p></div></section>
      <section className="contact-section" id="kontakt"><div className="section-wrap contact-layout"><div><p className="eyebrow">Eine Idee. Ein Gespräch. Ein Anfang.</p><h2>Gemeinsam<br /><span>weiterdenken.</span></h2><a className="contact-email" href={links.email}>karnatishivakrishna@gmail.com <Arrow /></a></div><div className="contact-details"><p>Shivakrishna Karnati<br />KI Solutions Consultant & Entwickler</p><p>Leipzig, Deutschland<br />Blaue Karte EU</p><a href="tel:+4917665207147">+49 1766 520 7147</a><div className="social-links"><a href={links.linkedin}>LinkedIn <Arrow /></a><a href={links.github}>GitHub <Arrow /></a></div></div></div></section>
    </main>
    <footer className="site-footer"><span>© {new Date().getFullYear()} Shivakrishna Karnati</span><span>Mit Neugier entwickelt. In Leipzig.</span><a href="#top">Nach oben ↑</a></footer>
  </>;
}
