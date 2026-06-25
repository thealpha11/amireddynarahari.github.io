import { Section } from "./Section.jsx";

export function Education({ data }) {
  return (
    <Section id="education" eyebrow="Education" title="Academic foundation">
      <div className="education-grid">
        {data.map((item) => (
          <article className="panel education-card" key={`${item.degree}-${item.institution}`}>
            <div>
              <h3>{item.degree}</h3>
              <p>{item.institution}</p>
            </div>
            <span className="year-chip">{item.graduationYear}</span>
            <div className="badge-list">
              {item.coursework.map((course) => (
                <span className="badge badge-soft" key={course}>
                  {course}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
