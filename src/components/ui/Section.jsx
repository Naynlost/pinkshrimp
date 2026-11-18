/** Полноширинный блок страницы. tone: "cream" | "pink" | "peach" | "plum" */
export default function Section({ id, tone = "cream", borderTop = false, borderBottom = false, className = "", children }) {
  const classes = [
    "section",
    `section--${tone}`,
    borderTop && "section--border-top",
    borderBottom && "section--border-bottom",
    className,
  ].filter(Boolean).join(" ");

  return (
    <section id={id} className={classes}>
      <div className="container">{children}</div>
    </section>
  );
}
