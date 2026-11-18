import "./SectionHeader.css";

/** tone: "default" | "inverted" (на тёмном фоне) | "frame" (коричневый акцент) */
export default function SectionHeader({ eyebrow, title, lead, tone = "default" }) {
  return (
    <header className={`section-header section-header--${tone}`}>
      {eyebrow && <p className="section-header__eyebrow">{eyebrow}</p>}
      <h2>{title}</h2>
      {lead && <p className="section-header__lead">{lead}</p>}
    </header>
  );
}
