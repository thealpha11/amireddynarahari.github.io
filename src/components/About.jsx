import { Section } from "./Section.jsx";

export function About({ data }) {
  return (
    <Section id="about" eyebrow="About me" title="Product-minded engineering with polished execution">
      <div className="about-layout">
        <div className="panel about-summary">
          <p>{data.summary}</p>
          <p>{data.careerGoals}</p>
        </div>
        <div className="strength-grid">
          {data.strengths.map((strength) => (
            <article className="mini-card" key={strength}>
              <span>{strength}</span>
            </article>
          ))}
        </div>
      </div>
      <div className="highlight-grid">
        {data.highlights.map((highlight) => (
          <div className="highlight-item" key={highlight}>
            {highlight}
          </div>
        ))}
      </div>
    </Section>
  );
}
