import Section from "../components/ui/Section";
import SectionHeader from "../components/ui/SectionHeader";
import { FAQ_ITEMS } from "../data/content";
import "./Faq.css";

export default function Faq() {
  return (
    <Section id="faq">
      <SectionHeader eyebrow="FAQ" title="Частые вопросы:" />
      <div className="faq">
        {FAQ_ITEMS.map(({ question, answer }) => (
          <div key={question} className="faq__item">
            <h4>{question}</h4>
            <p>{answer}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
