import { profile } from "../data";

export default function Hero() {
  return (
    <section id="top" className="hero">
      <div className="hero-blob" aria-hidden="true" />

      <div className="hero-grid">
        <div className="hero-copy">
          <div className="hero-meta reveal" style={{ "--d": "0ms" }}>
            <span className="dot" />
            {profile.location} — open to opportunities
          </div>

          <h1 className="hero-name reveal" style={{ "--d": "80ms" }}>
            {profile.name}
          </h1>
          <p className="hero-title reveal" style={{ "--d": "160ms" }}>
            {profile.title}
          </p>

          <p className="hero-summary reveal" style={{ "--d": "240ms" }}>
            {profile.summary}
          </p>

          <div className="hero-actions reveal" style={{ "--d": "320ms" }}>
            <a className="btn btn-primary" href="#work">
              View projects
            </a>
            <a className="btn btn-ghost" href={profile.resumeFile} download>
              Download résumé
            </a>
          </div>

          <div className="hero-trace reveal" style={{ "--d": "400ms" }} aria-hidden="true">
            <span>WAITING</span>
            <i />
            <span>SERVING</span>
            <i />
            <span className="is-current">SHIPPED</span>
          </div>
        </div>

        <div className="hero-portrait reveal" style={{ "--d": "120ms" }}>
          <div className="hero-portrait-ring">
            <img src="/images/avatar.jpg" alt={profile.name} />
          </div>
          <div className="hero-portrait-tag">
            <span className="dot" />
            Java · Spring Boot · React
          </div>
        </div>
      </div>
    </section>
  );
}
