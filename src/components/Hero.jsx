import { assetUrl } from "../App.jsx";
import { Icon } from "./Icon.jsx";

export function Hero({ data, about }) {
  return (
    <section className="hero section" id="home">
      <div className="container hero-grid">
        <div className="hero-copy" data-reveal>
          <p className="eyebrow">Available for frontend and full stack roles</p>
          <h1>{data.name}</h1>
          <p className="hero-title">{data.title}</p>
          <p className="hero-intro">{data.intro}</p>
          <div className="hero-actions">
            <a className="button button-primary" href={assetUrl(data.resumeUrl)} download>
              <Icon name="arrowDown" />
              Download Resume
            </a>
            <a className="button button-secondary" href="#contact">
              Contact Me
            </a>
            <a className="button button-ghost" href="#projects">
              View Projects
            </a>
          </div>
        </div>

        <div className="hero-visual" data-reveal>
          <img src={assetUrl(data.avatar)} alt={`${data.name} professional avatar`} width="640" height="640" />
          <div className="experience-pill">
            <strong>{about.yearsExperience}</strong>
            <span>Years of experience</span>
          </div>
        </div>
      </div>
    </section>
  );
}
