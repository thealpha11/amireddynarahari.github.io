export function Section({ id, eyebrow, title, children, className = "" }) {
  return (
    <section className={`section ${className}`} id={id}>
      <div className="container" data-reveal>
        <div className="section-heading">
          {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
          <h2>{title}</h2>
        </div>
        {children}
      </div>
    </section>
  );
}
