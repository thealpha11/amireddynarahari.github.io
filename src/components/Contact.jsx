import { Icon } from "./Icon.jsx";
import { Section } from "./Section.jsx";

export function Contact({ data }) {
  const items = [
    ["Email", data.email, `mailto:${data.email}`, "mail"],
    ["Phone", data.phone, `tel:${data.phone.replace(/\s/g, "")}`, "phone"],
    ["LinkedIn", "linkedin.com/in/your-profile", data.linkedin, "external"],
    ["GitHub", "github.com/your-username", data.github, "github"],
    ["Location", data.location, null, "map"]
  ];

  return (
    <Section id="contact" eyebrow="Contact" title="Ready to discuss the next opportunity">
      <div className="contact-layout">
        <div className="panel contact-copy">
          <h3>Let&apos;s build useful software.</h3>
          <p>
            I am open to frontend, full stack, and software engineering roles where quality, ownership, and user
            experience matter.
          </p>
          <a className="button button-primary" href={`mailto:${data.email}`}>
            <Icon name="mail" />
            Contact Me
          </a>
        </div>
        <div className="contact-list">
          {items.map(([label, value, href, icon]) => {
            const content = (
              <>
                <Icon name={icon} />
                <span>
                  <strong>{label}</strong>
                  {value}
                </span>
              </>
            );

            return href ? (
              <a className="contact-item" href={href} key={label} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer">
                {content}
              </a>
            ) : (
              <div className="contact-item" key={label}>
                {content}
              </div>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
