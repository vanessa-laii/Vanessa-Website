import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Mail, FileText } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./Icons";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
];

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
  {
    icon: FileText,
    href: "/Vanessa_Lai_Resume.pdf",
    label: "Resume",
    isLucide: true,
  },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-bg-elevated/80 backdrop-blur-xl shadow-[0_1px_0_0_var(--color-border)]"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <a
              href="#home"
              className="font-serif text-lg font-medium tracking-tight text-text-primary transition-opacity hover:opacity-70"
            >
              vanessa lai <span>❀</span>
            </a>

            <div className="hidden items-center gap-8 md:flex">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium text-text-secondary transition-colors duration-200 hover:text-text-primary"
                >
                  {link.label}
                </a>
              ))}
              <div className="ml-2 flex items-center gap-3">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target={s.href.startsWith("mailto") ? undefined : "_blank"}
                    rel="noopener noreferrer"
                    download={s.label === "Resume" ? true : undefined}
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

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden text-text-primary p-2 -mr-2"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-bg/95 backdrop-blur-xl md:hidden"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3, delay: 0.05 }}
              className="flex flex-col items-center justify-center h-full gap-8"
            >
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.05 }}
                  className="font-serif text-2xl text-text-primary transition-colors hover:text-lavender-dark"
                >
                  {link.label}
                </motion.a>
              ))}
              <div className="flex items-center gap-5 mt-4">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target={
                      s.href.startsWith("mailto") ? undefined : "_blank"
                    }
                    rel="noopener noreferrer"
                    download={s.label === "Resume" ? true : undefined}
                    aria-label={s.label}
                    className="text-text-muted transition-colors hover:text-lavender-dark"
                  >
                    {"isLucide" in s ? (
                      <s.icon size={22} strokeWidth={1.8} />
                    ) : (
                      <s.icon size={22} />
                    )}
                  </a>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
