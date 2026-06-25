import { Section } from "./Section.jsx";

export function Skills({ data }) {
  return (
    <Section id="skills" eyebrow="Skills" title="Modern web stack for reliable delivery">
      <div className="skills-grid">
        {data.map((group) => (
          <article className="skill-card" key={group.category}>
            <h3>{group.category}</h3>
            <div className="badge-list">
              {group.items.map((skill) => (
                <span className="badge" key={skill}>
                  {skill}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
