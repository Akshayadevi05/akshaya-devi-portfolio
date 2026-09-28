import { certifications, education, experience } from "../data";

export default function Experience() {
  return (
    <section id="experience" className="section">
      <div className="section-head">
        <h2>Experience &amp; education</h2>
        <p>Where the fundamentals were built, and where they were put to use.</p>
      </div>

      <div className="exp-layout">
        <article className="exp-card">
          <div className="exp-card-head">
            <h3>{experience.role}</h3>
            <span className="exp-period">{experience.period}</span>
          </div>
          <p className="exp-org">{experience.org}</p>
          <ul className="project-points">
            {experience.points.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        </article>

        <div className="exp-side">
          <div className="exp-block">
            <h3>Education</h3>
            <p className="exp-degree">{education.degree}</p>
            <p>{education.school}</p>
            <p className="exp-detail">{education.detail}</p>
          </div>

          <div className="exp-block">
            <h3>Certifications</h3>
            <ul className="cert-list">
              {certifications.map((cert) => (
                <li key={cert.name}>
                  <p>{cert.name}</p>
                  <span>{cert.date}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
