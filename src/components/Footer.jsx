import { Icon } from "./Icon.jsx";

export function Footer({ socials, name }) {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <p>&copy; {new Date().getFullYear()} {name}. All rights reserved.</p>
        <div className="social-links" aria-label="Social links">
          {socials.map((social) => (
            <a href={social.url} key={social.label} target={social.url.startsWith("http") ? "_blank" : undefined} rel="noreferrer" aria-label={social.label}>
              <Icon name={social.label === "GitHub" ? "github" : social.label === "Email" ? "mail" : "external"} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
