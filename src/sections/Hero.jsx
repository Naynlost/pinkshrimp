import Section from "../components/ui/Section";
import Button from "../components/ui/Button";
import AppLink from "../components/ui/AppLink";
import { telegramUser } from "../data/links";
import { STATS } from "../data/content";
import "./Hero.css";

export default function Hero() {
  return (
    <Section id="top" className="hero">
      <div className="hero__intro">
        <div className="hero__text">
          <p className="hero__eyebrow">Discord · safe space для геймерш</p>
          <h1>Pink Shrimp — женский Discord-сервер</h1>
          <p className="hero__lead">Геймерское сообщество, предназначенное для комфортной игры, общения и творчества.</p>
          <div className="hero__actions">
            <Button>Вступить в Discord</Button>
            <Button href="#join" variant="ghost" showArrow={false}>Как проходит верификация</Button>
          </div>
        </div>
        <div className="hero__sticker">
          <img src="/img/logo-sticker.png" alt="Pink Shrimp" />
        </div>
      </div>

      <figure className="hero__figure">
        <img src="/img/hero.png" alt="Pink Shrimp" />
        <figcaption>
          Арт: <AppLink href={telegramUser("oddosss")}>oddosss</AppLink> · осеннее оформление сервера
          <br />авторка изображения: alune
        </figcaption>
      </figure>

      <dl className="hero__stats">
        {STATS.map(({ value, label }) => (
          <div key={value}>
            <dt>{value}</dt>
            <dd>{label}</dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}
