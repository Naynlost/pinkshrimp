const isWebUrl = (href) => /^https?:\/\//.test(href);

/** Обычная ссылка: внешние http(s)-адреса открываются в новой вкладке. */
export default function AppLink({ href, children, ...props }) {
  const externalProps = isWebUrl(href) ? { target: "_blank", rel: "noopener noreferrer" } : {};
  return (
    <a href={href} {...externalProps} {...props}>
      {children}
    </a>
  );
}
