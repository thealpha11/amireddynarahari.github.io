import { assetUrl } from "../App.jsx";
import { Icon } from "./Icon.jsx";
import { Section } from "./Section.jsx";

export function Projects({ data }) {
  return (
    <Section id="projects" eyebrow="Projects" title="Selected work with practical product value">
      <div className="project-grid">
        {data.map((project) => (
          <article className="project-card" key={project.name}>
            <img src={assetUrl(project.image)} alt={`${project.name} project preview`} loading="lazy" />
            <div className="project-body">
              <h3>{project.name}</h3>
              <p>{project.description}</p>
              <div className="badge-list">
                {project.technologies.map((technology) => (
                  <span className="badge badge-soft" key={technology}>
                    {technology}
                  </span>
                ))}
              </div>
              <div className="project-links">
                <a href={project.github} target="_blank" rel="noreferrer">
                  <Icon name="github" />
                  Repository
                </a>
                <a href={project.demo} target="_blank" rel="noreferrer">
                  <Icon name="external" />
                  Live Demo
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
