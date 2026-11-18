import Section from "../components/ui/Section";
import SectionHeader from "../components/ui/SectionHeader";
import Card, { Badge } from "../components/ui/Card";
import Chip from "../components/ui/Chip";
import TextLink from "../components/ui/TextLink";
import { LINKS } from "../data/links";
import { GAMES, EVENT_TAGS } from "../data/content";
import "./Features.css";

function FeatureCard({ number, badgeTone, title, text, children }) {
  return (
    <Card>
      <Badge tone={badgeTone}>{number}</Badge>
      <h3>{title}</h3>
      <p>{text}</p>
      {children}
    </Card>
  );
}

export default function Features() {
  return (
    <Section id="features" borderTop>
      <SectionHeader title="Чем можно заняться?" lead="Для каждой найдется место." />
      <div className="features">
        <FeatureCard
          number="01"
          title="Поиск тиммейток"
          text="Под каждую игру есть своя роль: отметь её с помощью @ и уже через пару минут ты найдешь с кем поиграть!"
        >
          <div className="features__chips">
            {GAMES.map((game) => <Chip key={game}>{game}</Chip>)}
            <Chip tone="ghost">и многие другие!</Chip>
          </div>
        </FeatureCard>

        <FeatureCard
          number="02"
          badgeTone="orange"
          title="Ивенты каждую неделю"
          text="Играем и болтаем вместе в голосовых — от квизов до настолок. Отличный шанс себя показать!"
        >
          <div className="features__chips">
            {EVENT_TAGS.map((tag) => <Chip key={tag} tone="peach">{tag}</Chip>)}
          </div>
        </FeatureCard>

        <FeatureCard
          number="03"
          title="Свой майнкрафт-сервер"
          text="Отдельный Майнкрафт-сервер только для проверенных участниц Pink Shrimp."
        >
          <dl className="features__details">
            <dt>Формат</dt>
            <dd><Chip>Ванильный</Chip><Chip>Модовый</Chip></dd>
            <dt>Как попасть</dt>
            <dd>Взять роль @Minecraft</dd>
          </dl>
        </FeatureCard>

        <FeatureCard
          number="04"
          badgeTone="orange"
          title="Творчество и стримы"
          text="Творческий месяц, сезонные арты от художниц сервера и наш собственный канал на Twitch, где мы играем и проводим женские турниры."
        >
          <TextLink href={LINKS.twitch}>Наш Twitch канал</TextLink>
          <TextLink href="#art">Смотреть арты</TextLink>
        </FeatureCard>
      </div>
    </Section>
  );
}
