import AppLink from "./AppLink";
import Arrow from "./Arrow";
import "./TextLink.css";

export default function TextLink({ href, onDark = false, children }) {
  return (
    <AppLink href={href} className={`text-link${onDark ? " text-link--on-dark" : ""}`}>
      {children}
      <Arrow />
    </AppLink>
  );
}
