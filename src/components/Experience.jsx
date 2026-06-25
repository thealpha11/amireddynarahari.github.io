import { Section } from "./Section.jsx";

export function Experience({ data }) {
  return (
    <Section id="experience" eyebrow="Experience" title="Impact across frontend and full stack work">
      <div className="timeline">
        {data.map((item) => (
          <article className="timeline-item" key={`${item.company}-${item.role}`}>
            <div className="timeline-marker" aria-hidden="true" />
            <div className="timeline-content">
              <div className="timeline-header">
                <div>
                  <h3>{item.role}</h3>
                  <p>{item.company}</p>
                </div>
                <span>{item.duration}</span>
              </div>
              <div className="timeline-columns">
                <div>
                  <h4>Responsibilities</h4>
                  <ul>
                    {item.responsibilities.map((responsibility) => (
                      <li key={responsibility}>{responsibility}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4>Achievements</h4>
                  <ul>
                    {item.achievements.map((achievement) => (
                      <li key={achievement}>{achievement}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
