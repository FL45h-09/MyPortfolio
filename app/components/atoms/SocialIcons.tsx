import { ProfileData as data } from '@/config/content';
import { IconContext } from 'react-icons';

export const SocialIcons = () => {
  const { socials } = data;

  return (
    <IconContext.Provider value={{ size: "1.25rem" }}>
      <ul className="reset flex items-center gap-3">
        {socials
          .filter((item) => item.url && item.url.trim() !== "")
          .map((item, index) => {
            const Icon = item.icon; // ← IMPORTANT FIX

            const href =
              item.key === "mail"
                ? `mailto:${item.url}`
                : item.url;

            return (
              <li key={index} className="leading-0">
                <a href={href} aria-label={item.key} target={item.key === "mail" ? "" : "_blank"}
                  className="inline-block p-2 rounded-full btn-hover-bg transition"
                >
                  <Icon /> {/* ← render properly */}
                </a>
              </li>
            );
          })}
      </ul>
    </IconContext.Provider>
  );
};