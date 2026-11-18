import Button from "../ui/Button";
import { NAV_ITEMS } from "../../data/content";
import "./Header.css";

export default function Header() {
  return (
    <header className="header">
      <div className="container header__inner">
        <a className="header__brand" href="#top">
          <img src="/img/logo.png" alt="" />
          Pink Shrimp
        </a>
        <nav className="header__nav" aria-label="Основная навигация">
          {NAV_ITEMS.map(({ label, href }) => (
            <a key={href} href={href}>{label}</a>
          ))}
        </nav>
        <Button variant="small" showArrow={false}>Вступить</Button>
      </div>
    </header>
  );
}
