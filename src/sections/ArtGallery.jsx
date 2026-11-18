import Section from "../components/ui/Section";
import SectionHeader from "../components/ui/SectionHeader";
import AppLink from "../components/ui/AppLink";
import { INVITE_ARTS, BANNER_ARTS } from "../data/content";
import "./ArtGallery.css";

function GalleryRow({ title, items }) {
  return (
    <div className="gallery">
      <h3 className="gallery__title">{title}</h3>
      <div className="gallery__row">
        {items.map(({ artist, link, dates, image, isCurrent }) => (
          <figure key={artist}>
            <div className="gallery__art">
              <img src={image} alt="" loading="lazy" />
              {isCurrent && <span className="gallery__badge">сейчас на сервере</span>}
            </div>
            <figcaption>
              {dates} · {link ? <AppLink href={link}>@{artist}</AppLink> : artist}
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
}

export default function ArtGallery() {
  return (
    <Section id="art" tone="peach" borderTop borderBottom>
      <SectionHeader
        tone="frame"
        eyebrow="сами создаем оформление"
        title="Осень на Pink Shrimp"
        lead="Каждые две недели сервер менял оформление: фон приглашения и баннера рисуют наши художницы."
      />
      <GalleryRow title="Фон приглашения" items={INVITE_ARTS} />
      <GalleryRow title="Баннер сервера" items={BANNER_ARTS} />
    </Section>
  );
}
