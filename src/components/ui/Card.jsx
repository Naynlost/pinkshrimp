import "./Card.css";

/** Карточка с жирной рамкой и жёсткой тенью. highlighted — розовая заливка. */
export default function Card({ highlighted = false, children }) {
  return <article className={`card${highlighted ? " card--highlighted" : ""}`}>{children}</article>;
}

/** tone: "pink" | "orange" */
export function Badge({ tone = "pink", children }) {
  return <span className={`badge badge--${tone}`}>{children}</span>;
}
