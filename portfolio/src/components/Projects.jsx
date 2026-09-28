import { mainProject, sideProjects } from "../data";

function TechTag({ children }) {
  return <span className="tag">{children}</span>;
}

function FeaturedProject({ project }) {
  return (
    <article className="project project-featured">
      <div className="project-main">
        <span className="status status-main">{project.status}</span>
        <h3>{project.name}</h3>
        <p className="project-tagline">{project.tagline}</p>

        <ul className="project-points">
          {project.points.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>

        <div className="tag-row">
          {project.tech.map((t) => (
            <TechTag key={t}>{t}</TechTag>
          ))}
        </div>
      </div>

      <aside className="project-queue" aria-hidden="true">
        <p className="project-queue-label">Queue lifecycle</p>
        <ol>
          {project.queueStates.map((state, i) => (
            <li key={state}>
              <span className="queue-index">{String(i + 1).padStart(2, "0")}</span>
              <span>{state}</span>
            </li>
          ))}
        </ol>
      </aside>
    </article>
  );
}

function SideProject({ project }) {
  return (
    <article className="project project-side">
      <span className="status">{project.status}</span>
      <h3>{project.name}</h3>
      <p className="project-tagline">{project.tagline}</p>
      <p className="project-description">{project.description}</p>

      <ul className="project-points project-points-compact">
        {project.contributions.map((c) => (
          <li key={c}>{c}</li>
        ))}
      </ul>

      <div className="tag-row">
        {project.tech.map((t) => (
          <TechTag key={t}>{t}</TechTag>
        ))}
      </div>

      <a className="project-link" href={project.github} target="_blank" rel="noreferrer">
        View repository ↗
      </a>
    </article>
  );
}

export default function Projects() {
  return (
    <section id="work" className="section">
      <div className="section-head">
        <h2>Projects</h2>
        <p>One system built end to end, plus two frontend builds shipped solo.</p>
      </div>

      <FeaturedProject project={mainProject} />

      <div className="project-grid">
        {sideProjects.map((project) => (
          <SideProject key={project.name} project={project} />
        ))}
      </div>
    </section>
  );
}
