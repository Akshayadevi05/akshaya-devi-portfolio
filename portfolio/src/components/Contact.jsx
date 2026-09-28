import { profile } from "../data";

export default function Contact() {
  return (
    <section id="contact" className="section contact">
      <div className="section-head">
        <h2>Let's work together</h2>
        <p>Open to full stack and frontend roles — the fastest way to reach me is email.</p>
      </div>

      <div className="contact-grid">
        <a className="contact-card" href={`mailto:${profile.email}`}>
          <span className="contact-label">Email</span>
          <span className="contact-value">{profile.email}</span>
        </a>

        <a className="contact-card" href={`tel:${profile.phone.replace(/\s+/g, "")}`}>
          <span className="contact-label">Phone</span>
          <span className="contact-value">{profile.phone}</span>
        </a>

        <a className="contact-card" href={profile.github} target="_blank" rel="noreferrer">
          <span className="contact-label">GitHub</span>
          <span className="contact-value">github.com/Akshayadevi05</span>
        </a>

        <a className="contact-card" href={profile.resumeFile} download>
          <span className="contact-label">Résumé</span>
          <span className="contact-value">Download PDF</span>
        </a>
      </div>

      <footer className="footer">
        <span>{profile.name}</span>
        <span>{profile.location}</span>
      </footer>
    </section>
  );
}
