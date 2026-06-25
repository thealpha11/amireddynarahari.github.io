import { useState } from "react";
import { Icon } from "./Icon.jsx";

const navItems = [
  ["About", "#about"],
  ["Skills", "#skills"],
  ["Experience", "#experience"],
  ["Projects", "#projects"],
  ["Education", "#education"],
  ["Contact", "#contact"]
];

export function Header({ data, theme, onToggleTheme }) {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <nav className="nav container" aria-label="Main navigation">
        <a className="brand" href="#home" aria-label={`${data.name} home`}>
          <span className="brand-mark">{data.name.split(" ").map((item) => item[0]).join("")}</span>
          <span>{data.name}</span>
        </a>

        <div className={`nav-links ${open ? "is-open" : ""}`} id="mobile-navigation">
          {navItems.map(([label, href]) => (
            <a key={href} href={href} onClick={() => setOpen(false)}>
              {label}
            </a>
          ))}
        </div>

        <div className="nav-actions">
          <button className="icon-button" type="button" onClick={onToggleTheme} aria-label="Toggle color theme">
            <Icon name={theme === "dark" ? "sun" : "moon"} />
          </button>
          <button
            className="icon-button menu-button"
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-controls="mobile-navigation"
            aria-label="Toggle navigation"
          >
            <Icon name={open ? "x" : "menu"} />
          </button>
        </div>
      </nav>
    </header>
  );
}
