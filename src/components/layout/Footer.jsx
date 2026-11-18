import AppLink from "../ui/AppLink";
import Button from "../ui/Button";
import { LINKS, EMAIL_ADDRESS } from "../../data/links";
import { INVITE_ARTS, BANNER_ARTS } from "../../data/content";
import "./Footer.css";

const ARTISTS = [...INVITE_ARTS, ...BANNER_ARTS];

export default function Footer() {
  return (
    <footer className="footer section section--plum">
      <div className="container">
        <div className="footer__cta">
          <img src="/img/logo.png" alt="" />
          <div>
            <h2>Готова присоединиться?</h2>
            <p>Верификация займёт 30 секунд — дальше выбирай роли и знакомься.</p>
          </div>
          <Button>Вступить в Discord</Button>
        </div>

        <div className="footer__columns">
          <div>
            <b className="footer__brand">Pink Shrimp</b>
            <p>Женский Discord-сервер для общения и игр.</p>
            <p>Связь:<br /><AppLink href={LINKS.email}>{EMAIL_ADDRESS}</AppLink></p>
          </div>
          <div>
            <h5>Сервер</h5>
            <AppLink href={LINKS.discord}>Ссылка на Discord</AppLink>
            <AppLink href={LINKS.discordCatalog}>Страница в Discord-каталоге</AppLink>
          </div>
          <div>
            <h5>Мы в соцсетях</h5>
            <AppLink href={LINKS.telegram}>Telegram</AppLink>
            <AppLink href={LINKS.tiktok}>TikTok</AppLink>
            <AppLink href={LINKS.twitch}>Twitch</AppLink>
            <AppLink href={LINKS.boosty}>Boosty</AppLink>
          </div>
          <div>
            <h5>Арты оформления</h5>
            <p>
              {ARTISTS.map(({ artist, link }, index) => (
                <span key={artist}>
                  {index > 0 && " · "}
                  {link ? <AppLink href={link}>{artist}</AppLink> : artist}
                </span>
              ))}
            </p>
          </div>
        </div>

        <p className="footer__copy">© 2026 Pink Shrimp</p>
      </div>
    </footer>
  );
}
