import AppLink from "./AppLink";
import Arrow from "./Arrow";
import { LINKS } from "../../data/links";
import "./Button.css";

/** variant: "primary" | "small" | "ghost" | "muted" */
export default function Button({ href = LINKS.discord, variant = "primary", showArrow = true, children }) {
  return (
    <AppLink href={href} className={`button button--${variant}`}>
      {children}
      {showArrow && <Arrow />}
    </AppLink>
  );
}
