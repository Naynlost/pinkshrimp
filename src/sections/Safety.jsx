import Section from "../components/ui/Section";
import SectionHeader from "../components/ui/SectionHeader";
import TextLink from "../components/ui/TextLink";
import { LINKS } from "../data/links";
import { SAFETY_POINTS } from "../data/content";
import "./Safety.css";

export default function Safety() {
  return (
    <Section id="safety" tone="plum">
      <SectionHeader
        tone="inverted"
        eyebrow="Безопасность и правила"
        title="Почему нам можно доверять?"
        lead="Создаем комфортное пространство:"
      />
      <div className="safety">
        {SAFETY_POINTS.map(({ title, text, linkLabel }) => (
          <div key={title} className="safety__point">
            <h4>{title}</h4>
            <p>{text}</p>
            {linkLabel && <TextLink href={LINKS.discord} onDark>{linkLabel}</TextLink>}
          </div>
        ))}
      </div>
    </Section>
  );
}
