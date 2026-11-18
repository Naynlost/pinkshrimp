import Section from "../components/ui/Section";
import SectionHeader from "../components/ui/SectionHeader";
import { EVENT_ROWS } from "../data/content";
import "./Events.css";

export default function Events() {
  return (
    <Section tone="pink" borderTop>
      <SectionHeader eyebrow="активности" title="Постоянные ивенты" />
      <ul className="events">
        {EVENT_ROWS.map((row) => <li key={row}>{row}</li>)}
      </ul>
      <p className="events__note">Все анонсы — в Discord.</p>
    </Section>
  );
}
