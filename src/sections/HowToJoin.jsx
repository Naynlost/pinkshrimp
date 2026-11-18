import Section from "../components/ui/Section";
import SectionHeader from "../components/ui/SectionHeader";
import Card from "../components/ui/Card";
import Button from "../components/ui/Button";
import { LINKS } from "../data/links";
import { JOIN_STEPS } from "../data/content";
import "./HowToJoin.css";

export default function HowToJoin() {
  return (
    <Section id="join" tone="pink">
      <SectionHeader eyebrow="Как вступить?" title="Три шага — и ты внутри" />
      <div className="steps">
        {JOIN_STEPS.map(({ title, text, highlighted }, index) => (
          <Card key={title} highlighted={highlighted}>
            <span className="steps__number">{index + 1}</span>
            <h3>{title}</h3>
            <p>{text}</p>
          </Card>
        ))}
      </div>
      <div className="steps__actions">
        <Button>Вступить в Discord</Button>
        <Button href={LINKS.email} variant="muted">Задать вопрос на почту</Button>
      </div>
    </Section>
  );
}
