import { Section } from "./Section.jsx";

export function Certifications({ data }) {
  return (
    <Section id="certifications" eyebrow="Certifications" title="Continuous learning and technical validation">
      <div className="cert-grid">
        {data.map((certification) => (
          <article className="cert-card" key={certification}>
            {certification}
          </article>
        ))}
      </div>
    </Section>
  );
}
