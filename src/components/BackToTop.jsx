import { useEffect, useState } from "react";
import { Icon } from "./Icon.jsx";

export function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 700);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <a className={`back-to-top ${visible ? "is-visible" : ""}`} href="#home" aria-label="Back to top">
      <Icon name="arrowUp" />
    </a>
  );
}
