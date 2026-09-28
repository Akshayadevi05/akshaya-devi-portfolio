import { skills } from "../data";

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="section-head">
        <h2>Skills</h2>
        <p>The stack I build with, grouped by where it sits in the system.</p>
      </div>

      <div className="skills-grid">
        {skills.map((group) => (
          <div className="skills-group" key={group.group}>
            <h3>{group.group}</h3>
            <ul>
              {group.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
