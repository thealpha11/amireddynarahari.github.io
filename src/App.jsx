import { useEffect, useState } from "react";
import portfolio from "./data/portfolio.json";
import { Header } from "./components/Header.jsx";
import { Hero } from "./components/Hero.jsx";
import { About } from "./components/About.jsx";
import { Skills } from "./components/Skills.jsx";
import { Experience } from "./components/Experience.jsx";
import { Projects } from "./components/Projects.jsx";
import { Education } from "./components/Education.jsx";
import { Certifications } from "./components/Certifications.jsx";
import { Contact } from "./components/Contact.jsx";
import { Footer } from "./components/Footer.jsx";
import { BackToTop } from "./components/BackToTop.jsx";

export const assetUrl = (path) => `${import.meta.env.BASE_URL}${path.replace(/^\/+/, "")}`;

function App() {
  const [theme, setTheme] = useState(() => {
    return document.documentElement.dataset.theme || "light";
  });

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    const revealElements = document.querySelectorAll("[data-reveal]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.18 }
    );

    revealElements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  const toggleTheme = () => setTheme((current) => (current === "dark" ? "light" : "dark"));

  return (
    <>
      <Header data={portfolio.personal} theme={theme} onToggleTheme={toggleTheme} />
      <main>
        <Hero data={portfolio.personal} about={portfolio.about} />
        <About data={portfolio.about} />
        <Skills data={portfolio.skills} />
        <Experience data={portfolio.experience} />
        <Projects data={portfolio.projects} />
        <Education data={portfolio.education} />
        <Certifications data={portfolio.certifications} />
        <Contact data={portfolio.personal} />
      </main>
      <Footer socials={portfolio.socials} name={portfolio.personal.name} />
      <BackToTop />
    </>
  );
}

export default App;
