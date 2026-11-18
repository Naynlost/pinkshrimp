import "./Chip.css";

/** tone: "pink" | "peach" | "ghost" */
export default function Chip({ tone = "pink", children }) {
  return <span className={`chip chip--${tone}`}>{children}</span>;
}
