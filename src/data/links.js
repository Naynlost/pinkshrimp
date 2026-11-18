export const EMAIL_ADDRESS = "pinkshrimp@mail.ru";
const EMAIL_SUBJECT = "Вопрос о сервере Pink Shrimp";

export const LINKS = {
  discord: "https://discord.gg/pinkshrimp",
  discordCatalog: "https://discord.com/servers/pink-shrimp-1524986588453671133",
  telegram: "https://t.me/pinkshrimpnews",
  tiktok: "https://www.tiktok.com/@rgeline",
  twitch: "https://www.twitch.tv/pink_shrimp_official",
  boosty: "https://boosty.to/pinkshrimp",
  email: `mailto:${EMAIL_ADDRESS}?subject=${encodeURIComponent(EMAIL_SUBJECT)}`,
};

export const telegramUser = (username) => `https://t.me/${username}`;