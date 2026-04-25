import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./Icons";

const socials = [
  {
    icon: GithubIcon,
    href: "https://github.com/vanessa-laii",
    label: "GitHub",
  },
  {
    icon: LinkedinIcon,
    href: "https://www.linkedin.com/in/vanessa-lai",
    label: "LinkedIn",
  },
  {
    icon: Mail,
    href: "mailto:vanessa.sw.lai@gmail.com",
    label: "Email",
    isLucide: true,
  },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-border">
      <div className="mx-auto max-w-6xl px-6 lg:px-8 py-12">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex flex-col items-center sm:items-start gap-1">
            <span className="font-serif text-base font-medium text-text-primary">
              vanessa lai <span>❀</span>
            </span>
            <span className="text-xs text-text-muted">
              Navigating the world of code and design.
            </span>
          </div>

          <div className="flex items-center gap-4">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target={s.href.startsWith("mailto") ? undefined : "_blank"}
                rel="noopener noreferrer"
                aria-label={s.label}
                className="text-text-muted transition-all duration-200 hover:text-lavender-dark hover:scale-110"
              >
                {"isLucide" in s ? (
                  <s.icon size={18} strokeWidth={1.8} />
                ) : (
                  <s.icon size={18} />
                )}
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 text-center text-xs text-text-muted">
          © {new Date().getFullYear()} Vanessa Lai. Built with care.
        </div>
      </div>
    </footer>
  );
}
